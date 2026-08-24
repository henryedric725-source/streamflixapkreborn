#!/usr/bin/env node
/**
 * Upload staged APKs to the private R2 bucket.
 *
 * Download buttons use same-origin `/releases/<file>`; the Worker streams
 * objects from this bucket via the RELEASES binding. Keep r2.dev public access
 * disabled — public pub-*.r2.dev URLs trigger Cloudflare phishing/malware
 * interstitials.
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
