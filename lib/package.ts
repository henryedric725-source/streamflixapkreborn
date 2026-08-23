/**
 * The package this site actually serves.
 *
 * The same APK bytes are staged under several filenames so each download button
 * saves a name that matches its label (Reborn, StreamFlix 2.0, or generic APK).
 * Specs for the two apps still live in `lib/variants.ts`.
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

export function stagedPackagePath(fileName: string = STAGED_PACKAGE.fileName) {
  return `/releases/${encodeURIComponent(fileName)}`;
}
