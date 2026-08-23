#!/usr/bin/env node
/**
 * Upload staged APKs to the RELEASES R2 bucket.
 *
 * Workers static assets cannot exceed 25 MiB; these packages are ~31 MiB, so
 * downloads are served from R2 via app/releases/[file]/route.ts.
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
  console.log(`[upload-releases] put ${file} -> r2://${BUCKET}/${file}`);
  execFileSync(
    "npx",
    ["wrangler", "r2", "object", "put", `${BUCKET}/${file}`, "--file", local, "--remote"],
    { stdio: "inherit" },
  );
}

console.log(`[upload-releases] uploaded ${files.length} file(s)`);
