/**
 * The package this site actually serves.
 *
 * The same APK bytes are staged under several filenames so each download button
 * saves a name that matches its label (Reborn, StreamFlix 2.0, or generic APK).
 * Specs for the two apps still live in `lib/variants.ts`.
 *
 * Production downloads are served from a public R2 base URL (Workers assets are
 * capped at 25 MiB). Locally, `/releases/<file>` reads from storage/releases.
 */

export const STAGED_PACKAGE = {
  /** Generic header / mobile-bar filename under `storage/releases/`. */
  fileName: "StreamFlix APK.apk",
  /** Human label used on generic buttons. */
  label: "StreamFlix APK",
  packageName: "com.streamflixreborn.streamflix",
  versionName: "1.7.230",
  versionCode: 17230,
  sizeBytes: 32_955_856,
  sizeLabel: "31.43 MB",
  minAndroid: "5.0 (API 21)",
  targetSdk: 34,
  format: "APK",
  contents: ["StreamFlix APK.apk (single APK)"],
} as const;

/**
 * Public origin for APK objects in production.
 * Override with NEXT_PUBLIC_RELEASES_BASE_URL if you attach a custom domain.
 */
export const RELEASES_PUBLIC_BASE =
  process.env.NEXT_PUBLIC_RELEASES_BASE_URL?.replace(/\/$/, "") ||
  "https://pub-1694258d29c94e3f93443e1725794890.r2.dev";

export function stagedPackagePath(fileName: string = STAGED_PACKAGE.fileName) {
  // Prefer the public R2 URL in production so the Worker never has to stream
  // 31 MB through itself (and so deploy does not require an R2 binding).
  if (process.env.NODE_ENV === "production") {
    return `${RELEASES_PUBLIC_BASE}/${encodeURIComponent(fileName)}`;
  }
  return `/releases/${encodeURIComponent(fileName)}`;
}
