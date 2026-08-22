/**
 * The package this site actually serves.
 *
 * Every download button on the site points here, so the file a visitor gets is
 * described in exactly one place. This is deliberately separate from
 * `lib/variants.ts`: that module documents the two StreamFlix *apps* and their
 * published specifications, while this one records the *file* we host.
 *
 * Facts below were read from the archive's own manifest.json, not from a
 * listing page.
 */

export const STAGED_PACKAGE = {
  /** Filename under `public/releases/`. Must match byte for byte. */
  fileName: "StreamFlix.xapk",
  /** Human label used on buttons and in the download card. */
  label: "StreamFlix",
  packageName: "com.ajpro.streamflix2",
  versionName: "138",
  versionCode: 138,
  sizeBytes: 36_858_665,
  sizeLabel: "35.2 MB",
  minAndroid: "6.0 (API 23)",
  targetSdk: 36,
  /**
   * XAPK, not a plain APK: a container holding the base APK plus ABI, locale
   * and density splits. Android cannot install it by tapping the file the way
   * it can a single APK.
   */
  format: "XAPK",
  contents: [
    "com.ajpro.streamflix2.apk (base)",
    "config.arm64_v8a.apk (64-bit ARM)",
    "config.en.apk (English resources)",
    "config.xhdpi.apk (xhdpi assets)",
  ],
} as const;

export function stagedPackagePath() {
  return `/releases/${encodeURIComponent(STAGED_PACKAGE.fileName)}`;
}
