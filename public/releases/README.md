# Package staging

APK binaries go here. Filenames must match the values in `lib/variants.ts`
byte for byte, because `lib/releases.ts` checks for them by name and
`variantApkPath()` builds the href from them.

Current expected filenames:

- `StreamFlix Reborn latest version.apk`  (v1.7.230, 31.43 MB)
- `StreamFlix 2.0 latest version.apk`     (build 142, 76.8 MB)

Archive builds listed in `lib/versions.ts` use their own `fileName` values.

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
