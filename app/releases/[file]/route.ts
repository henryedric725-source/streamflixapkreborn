import { createReadStream, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { Readable } from "node:stream";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { STAGED_PACKAGE } from "@/lib/package";
import { releaseFileNames } from "@/lib/versions";
import { REBORN, V2 } from "@/lib/variants";

export const dynamic = "force-dynamic";

const ALLOWED = new Set<string>([
  STAGED_PACKAGE.fileName,
  REBORN.fileName,
  V2.fileName,
  ...releaseFileNames,
]);

function attachmentHeaders(fileName: string, size?: number): HeadersInit {
  const headers: Record<string, string> = {
    "Content-Type": "application/vnd.android.package-archive",
    "Content-Disposition": `attachment; filename="${fileName.replace(/"/g, "")}"`,
    "Cache-Control": "public, max-age=3600, must-revalidate",
    "X-Content-Type-Options": "nosniff",
  };
  if (typeof size === "number") headers["Content-Length"] = String(size);
  return headers;
}

async function fromR2(fileName: string): Promise<Response | null> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const bucket = (env as CloudflareEnv).RELEASES;
    if (!bucket) return null;
    const object = await bucket.get(fileName);
    if (!object) return null;
    const headers = attachmentHeaders(fileName, object.size);
    // Preserve stored metadata when present.
    if (object.httpMetadata?.contentType) {
      (headers as Record<string, string>)["Content-Type"] =
        object.httpMetadata.contentType;
    }
    if (object.httpMetadata?.contentDisposition) {
      (headers as Record<string, string>)["Content-Disposition"] =
        object.httpMetadata.contentDisposition;
    }
    if (object.httpEtag) {
      (headers as Record<string, string>).ETag = object.httpEtag;
    }
    return new Response(object.body, { headers });
  } catch {
    // Not running on Cloudflare (local next start / next dev).
    return null;
  }
}

function fromDisk(fileName: string): Response | null {
  const diskPath = join(process.cwd(), "storage", "releases", fileName);
  if (!existsSync(diskPath)) return null;
  const { size } = statSync(diskPath);
  const stream = Readable.toWeb(createReadStream(diskPath)) as ReadableStream;
  return new Response(stream, { headers: attachmentHeaders(fileName, size) });
}

/**
 * Same-origin APK download.
 *
 * Production: stream from the private R2 binding (no public r2.dev URL).
 * Local: read from storage/releases on disk.
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

  const fromBucket = await fromR2(fileName);
  if (fromBucket) return fromBucket;

  const local = fromDisk(fileName);
  if (local) return local;

  return new Response("Not found", { status: 404 });
}
