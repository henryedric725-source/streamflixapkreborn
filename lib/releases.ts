import { existsSync } from "node:fs";
import { join } from "node:path";
import type { AppVariant } from "@/lib/variants";
import { REBORN, V2 } from "@/lib/variants";

function releaseOnDisk(fileName: string) {
  return existsSync(join(process.cwd(), "public", "releases", fileName));
}

/**
 * Packages ship with the deploy as static assets. On Cloudflare Workers OpenNext
 * serves them through the ASSETS binding, so Node's `existsSync` reports false
 * even when `/releases/...` returns 200. Treat production as staged once the
 * binaries are committed for publish.
 */
function packageAvailable(fileName: string) {
  if (releaseOnDisk(fileName)) return true;
  return process.env.NODE_ENV === "production";
}

/**
 * Gate for `downloadUrl` in SoftwareApplication schema and for the primary
 * download button. While a binary is absent the button falls back to the
 * official-sources row and schema omits `downloadUrl` entirely, so we never
 * advertise a file that would 404.
 */
export function isVariantStaged(variant: AppVariant) {
  return packageAvailable(variant.fileName);
}

export function isFileStaged(fileName: string) {
  return packageAvailable(fileName);
}

export function stagedMap() {
  return {
    reborn: isVariantStaged(REBORN),
    v2: isVariantStaged(V2),
  } as const;
}

export function stagedFileMap(fileNames: string[]) {
  return Object.fromEntries(
    fileNames.map((fileName) => [fileName, isFileStaged(fileName)]),
  );
}
