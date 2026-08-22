/**
 * Every indexable path on the site, declared once.
 *
 * URL structure:
 *   /                 the download hub (money page)
 *   /blog             the blog category index
 *   /<slug>           every blog post — flat, no directory prefix
 *   /about            editorial policy
 *   /legal/<slug>     noIndex policy pages
 *
 * Posts sit at the root for the shortest possible URLs, but they still belong
 * to the blog category: `POST_PATHS` is what makes that relationship explicit,
 * and it drives the three-level breadcrumb (Home > Blog > Post) and the
 * BlogPosting/isPartOf schema even though the URL is flat.
 *
 * Cluster rule: one path = one search intent = one primary keyword head. Where a
 * secondary keyword set would collide with an existing page it becomes an anchor
 * on that page (see `lib/links.ts`) instead of a new route.
 *
 * Kept in its own module so `site.ts`, `links.ts`, `related.ts` and `blog.ts`
 * can all import paths without an import cycle.
 */

export const R = {
  /** Cluster 0 — the dual-primary download hub. */
  home: "/",

  /** Cluster A — versions and variants. */
  reborn: "/streamflix-reborn-apk",
  v2: "/streamflix-2-apk",
  oldVersions: "/streamflix-apk-old-versions",
  mod: "/streamflix-mod-apk",

  /** Cluster B — install and devices. */
  install: "/how-to-install-streamflix-apk",
  firestick: "/streamflix-for-firestick",
  androidTv: "/streamflix-for-android-tv",
  pc: "/streamflix-for-pc",
  ios: "/streamflix-for-ios",
  smartTv: "/streamflix-on-smart-tv",

  /** Cluster C — use, offline, and fixes. */
  howToUse: "/how-to-use-streamflix",
  offline: "/streamflix-download-movies-offline",
  notWorking: "/streamflix-not-working",
  update: "/streamflix-update-guide",

  /** Cluster D — safety, legality, trust. */
  safe: "/is-streamflix-apk-safe",
  legal: "/is-streamflix-legal",
  vpn: "/streamflix-vpn-guide",

  /** Cluster E — comparisons and alternatives. */
  alternatives: "/streamflix-alternatives",
  bestTvApks: "/best-streaming-apks-for-android-tv",
  vsPaid: "/streamflix-vs-paid-streaming-apps",

  /** Support. */
  blog: "/blog",
  about: "/about",

  /** Legal — all `noIndex`, excluded from the sitemap. */
  legalPrivacy: "/legal/privacy",
  legalTerms: "/legal/terms",
  legalDisclaimer: "/legal/disclaimer",
  legalDmca: "/legal/dmca",
} as const;

export type RouteKey = keyof typeof R;

/**
 * The 23 blog posts. Every one of these is filed under the blog category even
 * though its URL is flat — this array is the single source of that membership.
 */
export const POST_PATHS = [
  R.reborn,
  R.v2,
  R.oldVersions,
  R.mod,
  R.install,
  R.firestick,
  R.androidTv,
  R.pc,
  R.ios,
  R.smartTv,
  R.howToUse,
  R.offline,
  R.notWorking,
  R.update,
  R.safe,
  R.legal,
  R.vpn,
  R.alternatives,
  R.bestTvApks,
  R.vsPaid,
] as const;

/** The 24 cluster pages, in cluster order: the hub plus every post. */
export const CLUSTER_PATHS = [R.home, ...POST_PATHS] as const;

/** Everything that may appear in the sitemap: clusters + indexable support pages. */
export const INDEXABLE_PATHS = [...CLUSTER_PATHS, R.blog, R.about] as const;

/** `noIndex` pages — never emitted into the sitemap. */
export const NOINDEX_PATHS = [
  R.legalPrivacy,
  R.legalTerms,
  R.legalDisclaimer,
  R.legalDmca,
] as const;

const POST_SET: ReadonlySet<string> = new Set(POST_PATHS);

/**
 * True for a blog post. Membership is explicit rather than inferred from the
 * URL, because posts live at the root alongside the hub and support pages.
 */
export function isPostPath(path: string) {
  return POST_SET.has(path);
}
