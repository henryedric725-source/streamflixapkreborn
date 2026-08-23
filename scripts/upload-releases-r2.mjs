#!/usr/bin/env node
/**
 * Upload staged APKs to the public R2 bucket used for download buttons.
 *
 * Workers static assets cannot exceed 25 MiB. Downloads therefore point at the
 * public r2.dev (or custom) base URL — no R2 binding is required on the Worker,
 * so Cloudflare Workers Builds can deploy even when that account has R2 off.
 */
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const BUCKET = "streamflix-apk-releases";
const DIR = join(process.cwd(), "storage", "releases");

if (!existsSync(DIR)) {
  console.error(`[upload-releases] missing ${DIR}`);
  process.exit(1);
}

const files = readdirSync(DIR).filter((name) => name.toLowerCase().endsWith(".apk"));
if (!files.length) {
  console.error("[upload-releases] no .apk files in storage/releases");
  process.exit(1);
}

for (const file of files) {
  const local = join(DIR, file);
  const disposition = `attachment; filename="${file}"`;
  console.log(`[upload-releases] put ${file} -> r2://${BUCKET}/${file}`);
  execFileSync(
    "npx",
    [
      "wrangler",
      "r2",
      "object",
      "put",
      `${BUCKET}/${file}`,
      "--file",
      local,
      "--remote",
      "--content-type",
      "application/vnd.android.package-archive",
      "--content-disposition",
      disposition,
    ],
    { stdio: "inherit" },
  );
}

console.log(`[upload-releases] uploaded ${files.length} file(s)`);
