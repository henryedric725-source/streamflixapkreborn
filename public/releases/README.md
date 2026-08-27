# Package staging

APK binaries live in **`storage/releases/`** locally (gitignored) and in the
private R2 bucket **`streamflix-apk-releases`** in production.

Workers static assets cannot exceed **25 MiB**; these packages are ~31 MiB, so
they must never be committed or uploaded as Pages/Worker assets.

Download buttons use same-origin `/releases/<file>`:

- **Local:** the route reads from `storage/releases/`
- **Production:** the Worker streams from the private R2 binding `RELEASES`

Do **not** enable public `pub-*.r2.dev` access.

Filenames:

- `StreamFlix APK.apk` — header / mobile bar
- `StreamFlix Reborn latest version.apk` — Reborn buttons
- `StreamFlix 2.0 latest version.apk` — StreamFlix 2.0 buttons

## Upload

```bash
# Place the three .apk files in storage/releases/, then:
npm run upload:releases
```

## Deploy

Use **Cloudflare Workers** (OpenNext), not Pages:

```bash
npm run deploy
```

Workers Builds settings (if connecting Git):

- Build command: `npx opennextjs-cloudflare build`
- Deploy command: `npx wrangler deploy`
- R2 binding: `RELEASES` → `streamflix-apk-releases`
