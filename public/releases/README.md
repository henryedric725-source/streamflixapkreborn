# Package staging

APK binaries live in **`storage/releases/`** (not `public/`), because Cloudflare
Workers static assets cannot exceed **25 MiB** and these packages are ~31 MiB.

Production download buttons point at the public R2 base URL
(`NEXT_PUBLIC_RELEASES_BASE_URL` / `lib/package.ts`). Local `next dev` serves
the same filenames from disk via `/releases/<file>`.

Filenames:

- `StreamFlix APK.apk` — header / mobile bar
- `StreamFlix Reborn latest version.apk` — Reborn buttons
- `StreamFlix 2.0 latest version.apk` — StreamFlix 2.0 buttons

## Upload

```bash
npm run upload:releases
```

The Worker deploy does **not** need an R2 binding (Workers Builds may use an
account where R2 is disabled). Keep objects in sync with `npm run upload:releases`
from a Wrangler login that has R2 enabled.
