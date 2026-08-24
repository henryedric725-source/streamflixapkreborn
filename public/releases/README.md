# Package staging

APK binaries live in **`storage/releases/`** (not `public/`), because Cloudflare
Workers static assets cannot exceed **25 MiB** and these packages are ~31 MiB.

Download buttons always use same-origin `/releases/<file>`:

- **Local:** the route reads from `storage/releases/`
- **Production:** the Worker streams the object from the private R2 bucket
  `streamflix-apk-releases` (binding `RELEASES`)

Do **not** re-enable the public `pub-*.r2.dev` URL — Cloudflare flags those
hosts for phishing/malware distribution.

Filenames:

- `StreamFlix APK.apk` — header / mobile bar
- `StreamFlix Reborn latest version.apk` — Reborn buttons
- `StreamFlix 2.0 latest version.apk` — StreamFlix 2.0 buttons

## Upload

```bash
npm run upload:releases
```

Deploy with a Wrangler login that has R2 enabled on the same account as this
Worker (`npm run deploy`). Workers Builds on an account without R2 will fail
while the `RELEASES` binding is configured.
