# Package staging

APK binaries go here. Filenames must match `lib/package.ts` and
`lib/variants.ts` byte for byte.

The same APK is staged under three names so each button saves a matching file:

- `StreamFlix APK.apk` — header / mobile bar (“Download APK”)
- `StreamFlix Reborn latest version.apk` — Reborn buttons
- `StreamFlix 2.0 latest version.apk` — StreamFlix 2.0 buttons

To replace them, drop the new file(s) here and keep those three names in sync.
Update `lib/package.ts` size/version fields if the binary changes.

## Behaviour when a file is absent

`isPackageStaged()` returns false in development, and the site degrades
gracefully rather than serving a 404:

- The download button falls back to the `/#get-apk` section on the hub.
- `SoftwareApplication` schema omits `downloadUrl` entirely.

In production the helper treats packages as staged, because Cloudflare Workers
serve them through the ASSETS binding where Node's `existsSync` cannot see them.

## Headers

`next.config.ts` serves everything under `/releases/` with
`Content-Type: application/octet-stream` and `Content-Disposition: attachment`,
so links download in one click. The URL basename becomes the saved filename.
`app/robots.ts` disallows `/releases/` for all crawlers.
