import { existsSync } from "node:fs";
import { join } from "node:path";
import { STAGED_PACKAGE } from "@/lib/package";
import { REBORN, V2 } from "@/lib/variants";

/** Local source of truth for binaries (not under public/ — too large for Workers assets). */
export function releaseDiskPath(fileName: string) {
  return join(process.cwd(), "storage", "releases", fileName);
}

function onDisk(fileName: string) {
  return existsSync(releaseDiskPath(fileName));
}

/**
 * Packages are served from R2 in production (Workers assets cap is 25 MiB).
 * Locally we check storage/releases. In production builds treat as staged so
 * buttons keep advertising downloadUrl.
 */
function available(fileName: string) {
  if (onDisk(fileName)) return true;
  return process.env.NODE_ENV === "production";
}

const STAGED_FILES = [
  STAGED_PACKAGE.fileName,
  REBORN.fileName,
  V2.fileName,
] as const;

/**
 * Gate for `downloadUrl` in SoftwareApplication schema and for every download
 * button. While the binary is absent the button falls back to the on-page
 * download section and schema omits `downloadUrl`, so we never advertise a file
 * that would 404.
 */
export function isPackageStaged() {
  return STAGED_FILES.every((fileName) => available(fileName));
}

export function isFileStaged(fileName: string) {
  return available(fileName);
}

export function stagedMap() {
  const staged = isPackageStaged();
  return { reborn: staged, v2: staged } as const;
}
