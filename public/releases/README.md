# Package staging

APK binaries live in **`storage/releases/`** (not `public/`), because Cloudflare
Workers static assets cannot exceed **25 MiB** and these packages are ~31 MiB.

Production serves them from the **`streamflix-apk-releases`** R2 bucket via
`app/releases/[file]/route.ts`. Local `next dev` / `next start` reads the same
filenames from disk.

Filenames must match `lib/package.ts` and `lib/variants.ts` byte for byte:

- `StreamFlix APK.apk` — header / mobile bar (“Download APK”)
- `StreamFlix Reborn latest version.apk` — Reborn buttons
- `StreamFlix 2.0 latest version.apk` — StreamFlix 2.0 buttons

## Upload / deploy

```bash
npm run upload:releases   # wrangler r2 object put …
npm run cf:deploy         # upload then wrangler deploy
```

Cloudflare Workers Builds **deploy command** must be:

```text
npm run cf:deploy
```

not plain `npx wrangler deploy`, or R2 will be empty and downloads 404.

## Behaviour when a file is absent

`isPackageStaged()` returns false in development, and the site degrades
gracefully rather than serving a 404:

- The download button falls back to the `/#get-apk` section on the hub.
- `SoftwareApplication` schema omits `downloadUrl` entirely.
