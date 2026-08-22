import { existsSync } from "node:fs";
import { join } from "node:path";
import { STAGED_PACKAGE } from "@/lib/package";

function onDisk(fileName: string) {
  return existsSync(join(process.cwd(), "public", "releases", fileName));
}

/**
 * Packages ship with the deploy as static assets. On Cloudflare Workers OpenNext
 * serves them through the ASSETS binding, so Node's `existsSync` reports false
 * even when `/releases/...` returns 200. Treat production as staged once the
 * binaries are committed for publish.
 */
function available(fileName: string) {
  if (onDisk(fileName)) return true;
  return process.env.NODE_ENV === "production";
}

/**
 * Gate for `downloadUrl` in SoftwareApplication schema and for every download
 * button. While the binary is absent the button falls back to the on-page
 * download section and schema omits `downloadUrl`, so we never advertise a file
 * that would 404.
 */
export function isPackageStaged() {
  return available(STAGED_PACKAGE.fileName);
}

export function isFileStaged(fileName: string) {
  return available(fileName);
}

export function stagedMap() {
  const staged = isPackageStaged();
  return { reborn: staged, v2: staged } as const;
}
