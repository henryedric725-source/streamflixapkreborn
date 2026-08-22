# Package staging

APK binaries go here. Filenames must match the values in `lib/variants.ts`
byte for byte, because `lib/releases.ts` checks for them by name and
`variantApkPath()` builds the href from them.

The site serves exactly one package, described in `lib/package.ts`. Every
download button on every page points at it, so a visitor can never reach a dead
link.

Currently staged:

- `StreamFlix.xapk` (35.2 MB)
  - package `com.ajpro.streamflix2`, version 138, minSdk 23
  - XAPK, not a plain APK: a container holding the base APK plus arm64-v8a,
    English and xhdpi splits. Android cannot install it by tapping the file the
    way it can a single APK; it needs a split-APK installer.

To replace it, drop the new file here and update `lib/package.ts` to match.
Nothing else needs editing.

## Behaviour when a file is absent

`isVariantStaged()` returns false in development, and the site degrades
gracefully rather than serving a 404:

- The download button falls back to the `/#get-apk` section on the hub.
- `SoftwareApplication` schema omits `downloadUrl` entirely.
- The sidebar card explains that the specification is current but the binary
  is not yet attached.

In production the helper treats packages as staged, because Cloudflare Workers
serve them through the ASSETS binding where Node's `existsSync` cannot see them.
So only commit binaries you actually intend to publish.

## Headers

`next.config.ts` serves everything under `/releases/` with
`Content-Type: application/vnd.android.package-archive` and
`Content-Disposition: attachment`, so links download in one click rather than
rendering. `app/robots.ts` disallows `/releases/` for all crawlers.
