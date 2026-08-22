# StreamFlix APK

Independent documentation site for the two unrelated Android applications
published under the StreamFlix name. Next.js 16 App Router, Tailwind v4,
deployed to Cloudflare Workers via OpenNext.

## The premise

Two different apps ship as "StreamFlix", and nearly every competing page merges
them into one specification table that describes neither:

| | StreamFlix Reborn | StreamFlix 2.0: HD Movies & TV |
|---|---|---|
| Package | `com.streamflixreborn.streamflix` | `com.ajpro.streamflix2` |
| Version | 1.7.230 (21 Aug 2026) | Build 142 (20 Aug 2026) |
| Size | 31.43 MB | 76.8 MB |
| Min Android | 5.0 (API 21) | 6.0 (API 23) |
| Licence | Apache 2.0, open source | Proprietary |
| Distribution | GitHub, Uptodown | Google Play, APKPure, Softonic |
| TV interface | Yes | No |

Every figure on the site is labelled with the app it belongs to. That
constraint drives the content architecture.

## Content architecture

24 cluster pages + `/blog` + `/about` + 4 `noIndex` legal pages.

URLs are flat: the hub is `/`, the blog category index is `/blog`, and every
post sits at `/<slug>`. Posts still belong to the blog category — that
relationship is declared by `POST_PATHS` in `lib/routes.ts` rather than
inferred from the URL, and it drives the three-level breadcrumb
(Home > Blog > Post), `BlogPosting` typing, `isPartOf`, and `articleSection`.

One page = one intent = one primary keyword head. Where two keyword sets would
collide, the weaker becomes an anchored section on the stronger page and is
linked with that anchor text — never its own URL.

- **Cluster A — Versions and variants:** Reborn, StreamFlix 2.0, old versions,
  changelog, mod APK.
- **Cluster B — Install and devices:** Android, Firestick, Android TV, PC, iOS,
  Smart TV.
- **Cluster C — Use, offline and fixes:** how to use, offline downloads,
  troubleshooting, updating.
- **Cluster D — Safety, legality, privacy:** is it safe, is it legal, VPN,
  permissions.
- **Cluster E — Comparisons:** alternatives, best free movie APKs, best TV
  APKs, versus paid services.

## Data layer

Prose lives in the page TSX. Everything factual lives in `lib/` as typed data,
so a version bump is one edit that propagates to copy, tables, and schema:

| File | Holds |
|---|---|
| `lib/routes.ts` | Every path, declared once. Import cycles avoided. |
| `lib/variants.ts` | The two apps: packages, versions, sizes, licences, sources. |
| `lib/versions.ts` | Build archive for both variants. |
| `lib/devices.ts` | Device × variant support matrix. |
| `lib/alternatives.ts` | The competitive set, with maintenance status. |
| `lib/faqs.ts` | Per-page FAQ banks. No question may appear on two pages. |
| `lib/links.ts` | Link registry with per-context anchor text. |
| `lib/related.ts` | Sibling links per page. |
| `lib/blog.ts` | Post catalogue by category — the orphan-detection surface. |
| `lib/entities.ts` | 32 named entities with Wikipedia/Wikidata `sameAs`. |
| `lib/citations.ts` | Per-page source lists, rendered and emitted as `citation`. |
| `lib/schema.ts` | JSON-LD node builders. |

## SEO / AEO / GEO

- Per-page `@graph`: Organization + WebSite + WebPage + ImageObject +
  BreadcrumbList + TechArticle (posts also typed `BlogPosting`) +
  page-specific nodes.
- **Two `SoftwareApplication` nodes** on pages covering both apps, with distinct
  `@id`s (`#software-reborn`, `#software-v2`) and their real per-app figures.
- `downloadUrl` is emitted **only when the binary is staged** — the schema never
  advertises a file that would 404.
- Multiple `HowTo` nodes coexist per page via the `fragment` field.
- `FAQPage` on every cluster page, deduped across the whole site.
- Answer-first `DirectAnswer` + `QuickSummary` + `Takeaways`, all wired into the
  `speakable` selector.
- **Entity grounding:** `about` / `mentions` carry `sameAs` pointers to
  Wikipedia and Wikidata — 168 references site-wide.
- **Citations:** 88 sources across the site, shown as a visible Sources block
  and emitted as schema `citation`.
- Each page carries its own review `dateModified`, surfaced in the author box.
- `Blog` node on `/blog` listing all 23 posts; RSS 2.0 at `/blog/rss.xml`.
- `public/llms.txt` carries the canonical facts block for retrieval engines.
- No public sitemap. It is reachable only at `/private-sitemap/<SITEMAP_SECRET>`.
  Legal pages are `noIndex` and excluded.

## Commands

```bash
npm run dev          # dev server
npm run build        # production build
npm run lint         # eslint
npm run audit        # content + internal-linking audit (see below)
npm run screenshots  # re-encode source screenshots into public/screenshots
npm run logo         # regenerate the logo and favicon set from one vector
npm run deploy       # opennextjs-cloudflare build && deploy
```

`npm run audit` enforces the cluster rules: every route has a page, every post
is catalogued under a blog category (no orphans), posts are single-segment root
slugs, every page has ≥2 sibling links, no link points at a nonexistent route,
every page declares grounded entities and a review date, no FAQ question
appears twice, and no legal page leaks into the sitemap.

## Before deploying

These placeholders must be replaced:

1. **Domain** — `NEXT_PUBLIC_SITE_URL` in `wrangler.jsonc`, and `APEX_HOST` in
   `middleware.ts`. Canonicals, Open Graph and robots host all derive from it.
2. **`SITEMAP_SECRET`** in `wrangler.jsonc` — currently `REPLACE_ME_BEFORE_DEPLOY`.
3. **Contact email** — `NEXT_PUBLIC_CONTACT_EMAIL`, shown on About and the DMCA
   policy.
4. **APK binaries** — drop into `public/releases/` with the exact filenames in
   `public/releases/README.md`. Until then the site degrades gracefully and
   schema omits `downloadUrl`.
## Branding

The film-strip mark is generated, not hand-drawn. `scripts/build-logo.mjs`
renders `public/logo.svg` plus sized PNGs (512, 192, 180, 48, 32, 16) from one
vector master, in two variants — full detail above 180px, a compact one with
fewer, larger sprocket holes at 48px and below. Change the constants at the top
of that script and run `npm run logo`; never hand-edit the PNGs.

Icons are declared explicitly in `metadata.icons`. Do not add `app/icon.png` or
`app/apple-icon.png` — Next's file convention would emit a second set of
`<link rel="icon">` tags alongside them.
