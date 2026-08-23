# APK binaries for R2

Place the staged APK files here. They are uploaded to the
`streamflix-apk-releases` R2 bucket on `npm run cf:deploy` and served at
`/releases/<filename>` by the Next.js route handler.

Do not put these under `public/` — Workers static assets reject files over 25 MiB.
