import { createReadStream, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { Readable } from "node:stream";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { STAGED_PACKAGE } from "@/lib/package";
import { releaseFileNames } from "@/lib/versions";
import { REBORN, V2 } from "@/lib/variants";

const ALLOWED = new Set<string>([
  STAGED_PACKAGE.fileName,
  REBORN.fileName,
  V2.fileName,
  ...releaseFileNames,
]);

function attachmentHeaders(fileName: string, size?: number): HeadersInit {
  const headers: Record<string, string> = {
    "Content-Type": "application/octet-stream",
    "Content-Disposition": `attachment; filename="${fileName.replace(/"/g, "")}"`,
    "Cache-Control": "public, max-age=3600, must-revalidate",
    "X-Content-Type-Options": "nosniff",
  };
  if (typeof size === "number") headers["Content-Length"] = String(size);
  return headers;
}

/**
 * APKs are too large for Workers static assets (25 MiB cap). They live in the
 * RELEASES R2 bucket in production and under storage/releases locally.
 */
export async function GET(
  _request: Request,
  context: { params: Promise<{ file: string }> },
) {
  const { file: raw } = await context.params;
  const fileName = decodeURIComponent(raw);
  if (!ALLOWED.has(fileName) || fileName.includes("..") || fileName.includes("/")) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const { env } = await getCloudflareContext({ async: true });
    const bucket = env.RELEASES;
    if (bucket) {
      const object = await bucket.get(fileName);
      if (!object) return new Response("Not found", { status: 404 });
      return new Response(object.body, {
        headers: attachmentHeaders(fileName, object.size),
      });
    }
  } catch {
    // Local Next.js / missing binding — fall through to disk.
  }

  const diskPath = join(process.cwd(), "storage", "releases", fileName);
  if (!existsSync(diskPath)) {
    return new Response("Not found", { status: 404 });
  }
  const { size } = statSync(diskPath);
  const stream = Readable.toWeb(createReadStream(diskPath)) as ReadableStream;
  return new Response(stream, { headers: attachmentHeaders(fileName, size) });
}
