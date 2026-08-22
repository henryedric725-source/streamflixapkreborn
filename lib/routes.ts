/**
 * Every indexable path on the site, declared once.
 *
 * URL structure:
 *   /                 the download hub (money page)
 *   /blog             the post index
 *   /post/<slug>      every article
 *   /about            editorial policy
 *   /legal/<slug>     noIndex policy pages
 *
 * Cluster rule: one path = one search intent = one primary keyword head. Where a
 * secondary keyword set would collide with an existing page it becomes an anchor
 * on that page (see `lib/links.ts`) instead of a new route.
 *
 * Kept in its own module so `site.ts`, `links.ts`, `related.ts` and `blog.ts`
 * can all import paths without an import cycle.
 */

/** Every article lives under this prefix. */
export const POST_PREFIX = "/post";

const post = (slug: string) => `${POST_PREFIX}/${slug}`;

export const R = {
  /** Cluster 0 — the dual-primary download hub. */
  home: "/",

  /** Cluster A — versions and variants. */
  reborn: post("streamflix-reborn-apk"),
  v2: post("streamflix-2-apk"),
  oldVersions: post("streamflix-apk-old-versions"),
  changelog: post("streamflix-apk-changelog"),
  mod: post("streamflix-mod-apk"),

  /** Cluster B — install and devices. */
  install: post("how-to-install-streamflix-apk"),
  firestick: post("streamflix-for-firestick"),
  androidTv: post("streamflix-for-android-tv"),
  pc: post("streamflix-for-pc"),
  ios: post("streamflix-for-ios"),
  smartTv: post("streamflix-on-smart-tv"),

  /** Cluster C — use, offline, and fixes. */
  howToUse: post("how-to-use-streamflix"),
  offline: post("streamflix-download-movies-offline"),
  notWorking: post("streamflix-not-working"),
  update: post("streamflix-update-guide"),

  /** Cluster D — safety, legality, trust. */
  safe: post("is-streamflix-apk-safe"),
  legal: post("is-streamflix-legal"),
  vpn: post("streamflix-vpn-guide"),
  privacy: post("streamflix-permissions-and-privacy"),

  /** Cluster E — comparisons and alternatives. */
  alternatives: post("streamflix-alternatives"),
  bestMovieApks: post("best-free-movie-apks-for-android"),
  bestTvApks: post("best-streaming-apks-for-android-tv"),
  vsPaid: post("streamflix-vs-paid-streaming-apps"),

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

/** The 24 cluster pages, in cluster order. Excludes support and legal pages. */
export const CLUSTER_PATHS = [
  R.home,
  R.reborn,
  R.v2,
  R.oldVersions,
  R.changelog,
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
  R.privacy,
  R.alternatives,
  R.bestMovieApks,
  R.bestTvApks,
  R.vsPaid,
] as const;

/** Everything that may appear in the sitemap: clusters + indexable support pages. */
export const INDEXABLE_PATHS = [...CLUSTER_PATHS, R.blog, R.about] as const;

/** `noIndex` pages — never emitted into the sitemap. */
export const NOINDEX_PATHS = [
  R.legalPrivacy,
  R.legalTerms,
  R.legalDisclaimer,
  R.legalDmca,
] as const;

/** True for any article URL. Drives the three-level breadcrumb trail. */
export function isPostPath(path: string) {
  return path.startsWith(`${POST_PREFIX}/`);
}
