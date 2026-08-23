import { createReadStream, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { Readable } from "node:stream";
import { RELEASES_PUBLIC_BASE, STAGED_PACKAGE } from "@/lib/package";
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
    "Content-Type": "application/vnd.android.package-archive",
    "Content-Disposition": `attachment; filename="${fileName.replace(/"/g, "")}"`,
    "Cache-Control": "public, max-age=3600, must-revalidate",
    "X-Content-Type-Options": "nosniff",
  };
  if (typeof size === "number") headers["Content-Length"] = String(size);
  return headers;
}

/**
 * Local/dev download path. Production buttons point straight at the public R2
 * base URL (see lib/package.ts) so this Worker does not need an R2 binding.
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

  // In production, send callers to the public object store.
  if (process.env.NODE_ENV === "production") {
    return Response.redirect(
      `${RELEASES_PUBLIC_BASE}/${encodeURIComponent(fileName)}`,
      302,
    );
  }

  const diskPath = join(process.cwd(), "storage", "releases", fileName);
  if (!existsSync(diskPath)) {
    return new Response("Not found", { status: 404 });
  }
  const { size } = statSync(diskPath);
  const stream = Readable.toWeb(createReadStream(diskPath)) as ReadableStream;
  return new Response(stream, { headers: attachmentHeaders(fileName, size) });
}
