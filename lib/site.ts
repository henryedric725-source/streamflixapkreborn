import { L, linkLabel, navItemsFromLinks, quickLinksFromLinks } from "@/lib/links";
import { INDEXABLE_PATHS, NOINDEX_PATHS, R } from "@/lib/routes";
import { REBORN, V2 } from "@/lib/variants";

export const SITE_NAME = "StreamFlix APK";
export const SITE_SHORT_NAME = "StreamFlix";
export const SITE_TAGLINE =
  "Free Android apps for movies, TV shows, and live channels — documented properly.";

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

export const PUBLISHER = "StreamFlix APK Desk";
export const LOGO_ALT = "StreamFlix APK Download";

/**
 * Site-wide freshness stamps. The two apps version independently — per-variant
 * versions live in `lib/variants.ts` and must never be duplicated here.
 */
export const DATE_PUBLISHED = "2026-02-04";
export const CONTENT_UPDATED = "2026-08-22";
export const CONTENT_UPDATED_DISPLAY = "22 August 2026";

export const SITE_LOCALE = "en";
export const SCHEMA_LANGUAGE = "en";

export const HOME_TITLE =
  "StreamFlix APK Download (2026): Reborn v1.7.230 and StreamFlix 2.0 for Android and TV";

export const HOME_H1 =
  "StreamFlix APK Download for Android, Firestick and Android TV (2026)";

/** ~158 chars — fits the Google snippet without truncation. */
export const DEFAULT_DESCRIPTION =
  "Download StreamFlix APK: Reborn v1.7.230 (31.43 MB, open-source) or StreamFlix 2.0 build 142. Verified specs, install guides for Android, Firestick and TV.";

export const PRIMARY_KEYWORDS = [
  "streamflix apk",
  "streamflix",
  "stream flix",
  "streamflix apk download",
  "streamflix reborn",
  "streamflix 2.0 apk",
  "streamflix for pc",
  "free movie apk",
  "best movie apk for android",
  "free streaming apps for android",
] as const;

export const navItems = navItemsFromLinks();
export const quickLinks = quickLinksFromLinks();

export const SITE_CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@streamflixapk.help";

export const LEGAL_UPDATED = CONTENT_UPDATED;
export const LEGAL_UPDATED_DISPLAY = CONTENT_UPDATED_DISPLAY;

export const legalLinks = [
  { href: R.legalPrivacy, label: "Privacy policy" },
  { href: R.legalTerms, label: "Terms of use" },
  { href: R.legalDisclaimer, label: "Disclaimer" },
  { href: R.legalDmca, label: "DMCA and copyright" },
  { href: L.safe.href, label: linkLabel("safe", "footer") },
] as const;

export const socialLinks = [
  { name: "Facebook", href: process.env.NEXT_PUBLIC_FACEBOOK_URL || "" },
  { name: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "" },
  { name: "Twitter", href: process.env.NEXT_PUBLIC_TWITTER_URL || "" },
  { name: "YouTube", href: process.env.NEXT_PUBLIC_YOUTUBE_URL || "" },
  { name: "Pinterest", href: process.env.NEXT_PUBLIC_PINTEREST_URL || "" },
  { name: "Reddit", href: process.env.NEXT_PUBLIC_REDDIT_URL || "" },
].filter((item) => Boolean(item.href)) as ReadonlyArray<{
  name: string;
  href: string;
}>;

/** Everything that may be emitted into the private sitemap. */
export const allIndexablePaths = INDEXABLE_PATHS;
export const noIndexPaths = NOINDEX_PATHS;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Convenience re-exports so page copy and schema read the *current* headline
 * numbers from one place. Both point at `lib/variants.ts`; nothing here is a
 * second source of truth.
 */
export const LATEST_REBORN_VERSION = REBORN.version;
export const LATEST_V2_VERSION = V2.version;
export const REBORN_SIZE = REBORN.sizeLabel;
export const V2_SIZE = V2.sizeLabel;
