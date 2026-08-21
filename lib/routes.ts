/**
 * Every indexable path on the site, declared once.
 *
 * Cluster rule: one path = one search intent = one primary keyword head. Where a
 * secondary keyword set would collide with an existing page it becomes an anchor
 * on that page (see `lib/links.ts`) instead of a new route.
 *
 * Kept in its own module so `site.ts`, `links.ts`, `related.ts` and `guides.ts`
 * can all import paths without an import cycle.
 */

export const R = {
  /** Cluster 0 — the dual-primary download hub. */
  home: "/",

  /** Cluster A — versions and variants. */
  reborn: "/streamflix-reborn-apk",
  v2: "/streamflix-2-apk",
  oldVersions: "/streamflix-apk-old-versions",
  changelog: "/streamflix-apk-changelog",
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
  privacy: "/streamflix-permissions-and-privacy",

  /** Cluster E — comparisons and alternatives. */
  alternatives: "/streamflix-alternatives",
  bestMovieApks: "/best-free-movie-apks-for-android",
  bestTvApks: "/best-streaming-apks-for-android-tv",
  vsPaid: "/streamflix-vs-paid-streaming-apps",

  /** Support. */
  guides: "/guides",
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
export const INDEXABLE_PATHS = [...CLUSTER_PATHS, R.guides, R.about] as const;

/** `noIndex` pages — never emitted into the sitemap. */
export const NOINDEX_PATHS = [
  R.legalPrivacy,
  R.legalTerms,
  R.legalDisclaimer,
  R.legalDmca,
] as const;
