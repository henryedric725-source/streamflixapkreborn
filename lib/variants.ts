import { R } from "@/lib/routes";

/**
 * Two different Android apps ship under the name "StreamFlix". Most sites in this
 * niche conflate them and publish a single wrong spec table. We treat them as two
 * distinct entities with their own package names, versions, licences, and pages.
 *
 * Facts verified against: GitHub (streamflix-reborn2/streamflix), Uptodown,
 * Google Play, APKPure, Softonic, FileHippo — August 2026.
 */

export type VariantId = "reborn" | "v2";

export type AppVariant = {
  id: VariantId;
  /** Display name as the store listings write it. */
  name: string;
  shortName: string;
  packageName: string;
  version: string;
  /** ISO date of the version above. */
  releasedOn: string;
  releasedOnDisplay: string;
  sizeMb: number;
  sizeLabel: string;
  minAndroid: string;
  developer: string;
  license: string;
  openSource: boolean;
  category: string;
  contentRating: string;
  /** Local filename under `public/releases/`; must match byte-for-byte. */
  fileName: string;
  /** The cluster page that owns this variant's intent. */
  path: string;
  tagline: string;
  description: string;
  /** Short differentiator used in comparison tables and nav copy. */
  bestFor: string;
  platforms: readonly string[];
  highlights: readonly string[];
  limitations: readonly string[];
  /** Official distribution points. All rendered with rel="nofollow". */
  sources: readonly { name: string; url: string }[];
};

export const REBORN: AppVariant = {
  id: "reborn",
  name: "StreamFlix Reborn",
  shortName: "Reborn",
  packageName: "com.streamflixreborn.streamflix",
  version: "1.7.230",
  releasedOn: "2026-08-21",
  releasedOnDisplay: "21 August 2026",
  sizeMb: 31.43,
  sizeLabel: "31.43 MB",
  minAndroid: "5.0 (API 21)",
  developer: "streamflix-reborn",
  license: "Apache License 2.0",
  openSource: true,
  category: "Video players & editors",
  contentRating: "Teen",
  fileName: "StreamFlix Reborn latest version.apk",
  path: R.reborn,
  tagline: "Open-source aggregator for Android, Android TV, Google TV and Fire TV.",
  description:
    "StreamFlix Reborn is the community fork of the original StreamFlix, written in Kotlin and published under the Apache 2.0 licence. It is an aggregator: it searches more than 20 third-party providers and hands the stream to its own player. It hosts no video files of its own and needs no account.",
  bestFor: "TV boxes, Firestick, and anyone who wants auditable open-source code",
  platforms: ["Android phone", "Android tablet", "Android TV", "Google TV", "Amazon Fire TV"],
  highlights: [
    "Source code published on GitHub under Apache 2.0, so the build is auditable",
    "20+ selectable providers across several languages, with server switching per title",
    "Purpose-built Android TV and Fire TV leanback interface, not a stretched phone UI",
    "No account, no sign-up, and no ads inside the app's own interface",
    "Resume from last playback position, plus an in-app updater",
    "Quality, audio track, subtitle styling, and playback speed all adjustable",
  ],
  limitations: [
    "Playback depends entirely on third-party providers, so individual sources break without warning",
    "Not on Google Play. It must be sideloaded, and Play Protect will warn on install",
    "No official iOS, Windows, or web build",
    "Larger download than the phone-only build because it carries the TV interface",
  ],
  sources: [
    { name: "GitHub releases", url: "https://github.com/streamflix-reborn2/streamflix" },
    { name: "Uptodown", url: "https://com-streamflixreborn-streamflix.en.uptodown.com/android" },
  ],
};

export const V2: AppVariant = {
  id: "v2",
  name: "StreamFlix 2.0: HD Movies & TV",
  shortName: "StreamFlix 2.0",
  packageName: "com.ajpro.streamflix2",
  version: "142",
  releasedOn: "2026-08-20",
  releasedOnDisplay: "20 August 2026",
  sizeMb: 76.8,
  sizeLabel: "76.8 MB",
  minAndroid: "6.0 (API 23)",
  developer: "Streamflix",
  license: "Proprietary (closed source)",
  openSource: false,
  category: "Entertainment",
  contentRating: "Mature 17+",
  fileName: "StreamFlix 2.0 latest version.apk",
  path: R.v2,
  tagline: "Closed-source phone app with a browsable catalog and offline downloads.",
  description:
    "StreamFlix 2.0: HD Movies & TV is a separate, closed-source app from a different developer, distributed through Google Play as well as APKPure, Softonic, and FileHippo. It presents a browsable catalog organised by genre with subtitles in eight languages and supports saving titles for offline viewing.",
  bestFor: "Phones and tablets, and anyone who wants a Play Store install",
  platforms: ["Android phone", "Android tablet"],
  highlights: [
    "Available on Google Play, so it installs and updates without sideloading",
    "Offline downloads for watching without a connection",
    "Subtitles in English, Hindi, Bengali, Spanish, French, Korean, Tamil, and Telugu",
    "Catalog sorted by genre: action, comedy, romance, horror, sci-fi, documentary, kids & family",
    "Personal watchlist with progress tracking across titles",
    "No subscription and no account registration required",
  ],
  limitations: [
    "Closed source, so the build cannot be independently audited the way Reborn's can",
    "Ad-supported, and the ad load is heavier than Reborn's",
    "No dedicated Android TV or Fire TV interface: phone layout only",
    "Roughly 2.4× the download size of Reborn for a narrower feature set",
    "Requires Android 6.0, so it excludes older devices that Reborn still supports",
  ],
  sources: [
    { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.ajpro.streamflix2" },
    { name: "APKPure", url: "https://apkpure.com/streamflix-hd-movies-tv-app/com.ajpro.streamflix2" },
    { name: "Softonic", url: "https://streamflix-movies-tv-shows-izv.en.softonic.com/android" },
    { name: "FileHippo", url: "https://filehippo.com/android/download_streamflix-2-0-hd-movies-tv/" },
  ],
};

export const VARIANTS = [REBORN, V2] as const;

export function variantById(id: VariantId): AppVariant {
  return id === "reborn" ? REBORN : V2;
}

/**
 * Rows for the side-by-side spec board. Kept here rather than in the component so
 * the same values feed `SpecTable`, the comparison copy, and both
 * `SoftwareApplication` schema nodes without drifting apart.
 */
export const VARIANT_COMPARE_ROWS = [
  { label: "Package name", reborn: REBORN.packageName, v2: V2.packageName },
  { label: "Latest version", reborn: `v${REBORN.version}`, v2: `Build ${V2.version}` },
  { label: "Updated", reborn: REBORN.releasedOnDisplay, v2: V2.releasedOnDisplay },
  { label: "Download size", reborn: REBORN.sizeLabel, v2: V2.sizeLabel },
  { label: "Requires Android", reborn: REBORN.minAndroid, v2: V2.minAndroid },
  { label: "Licence", reborn: REBORN.license, v2: V2.license },
  { label: "Source code", reborn: "Public on GitHub", v2: "Not published" },
  { label: "Distribution", reborn: "GitHub, Uptodown", v2: "Google Play, APKPure, Softonic" },
  { label: "TV interface", reborn: "Yes, Android TV, Google TV, Fire TV", v2: "No, phone layout only" },
  { label: "Offline downloads", reborn: "Provider dependent", v2: "Yes, built in" },
  { label: "Account required", reborn: "No", v2: "No" },
  { label: "Ads", reborn: "None in the app's own interface", v2: "Ad-supported" },
  { label: "Content rating", reborn: REBORN.contentRating, v2: V2.contentRating },
] as const;
