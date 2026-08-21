import type { VariantId } from "@/lib/variants";

/**
 * The version archive. Both variants share this table, discriminated by
 * `variant`, so `/streamflix-apk-old-versions` can filter rather than split into
 * two thin pages.
 *
 * `catalogId` is our own stable anchor id — it is what version deep links and the
 * ItemList schema point at.
 */

export type ReleaseChannel = "current" | "previous" | "legacy";

export const channelLabel: Record<ReleaseChannel, string> = {
  current: "Current",
  previous: "Previous",
  legacy: "Legacy",
};

export type ApkRelease = {
  variant: VariantId;
  version: string;
  /** Display label; Reborn uses semver, StreamFlix 2.0 uses a bare build number. */
  label: string;
  releasedOn: string;
  sizeMb: number;
  minAndroid: string;
  abi: string;
  channel: ReleaseChannel;
  catalogId: string;
  fileName: string;
  headline: string;
  notes: string[];
  recommendedFor: string;
};

export const releases: ApkRelease[] = [
  {
    variant: "reborn",
    version: "1.7.230",
    label: "v1.7.230",
    releasedOn: "2026-08-21",
    sizeMb: 31.43,
    minAndroid: "5.0",
    abi: "universal",
    channel: "current",
    catalogId: "SFR-1-7-230",
    fileName: "StreamFlix Reborn latest version.apk",
    headline: "Current stable Reborn build",
    notes: [
      "Latest published release on the project's GitHub and Uptodown listings",
      "Universal package — the same file serves phones, Android TV, Google TV and Fire TV",
      "Overlay-installs over any 1.7.x build and keeps favourites and playback history",
      "Provider list and server failover from the 1.7 series",
    ],
    recommendedFor: "Everyone on Android 5.0 or newer — this is the default choice",
  },
  {
    variant: "reborn",
    version: "1.7.180",
    label: "v1.7.180",
    releasedOn: "2026-06-30",
    sizeMb: 30.9,
    minAndroid: "5.0",
    abi: "universal",
    channel: "previous",
    catalogId: "SFR-1-7-180",
    fileName: "streamflix-reborn-1.7.180.apk",
    headline: "Previous 1.7 series build",
    notes: [
      "Useful when a provider change in 1.7.230 broke a source you rely on",
      "Same settings format as 1.7.230, so rolling forward again is lossless",
      "In-app updater still functions and will offer the newer build",
    ],
    recommendedFor: "Rollback when a specific provider stops resolving on the current build",
  },
  {
    variant: "reborn",
    version: "1.6.120",
    label: "v1.6.120",
    releasedOn: "2026-03-14",
    sizeMb: 28.4,
    minAndroid: "5.0",
    abi: "universal",
    channel: "previous",
    catalogId: "SFR-1-6-120",
    fileName: "streamflix-reborn-1.6.120.apk",
    headline: "Last of the 1.6 series",
    notes: [
      "Predates the 1.7 player rewrite — worth trying if 1.7 stutters on older hardware",
      "Lighter memory footprint on 1 GB and 2 GB Android TV boxes",
      "Settings migrate forward to 1.7 but not backward from it",
    ],
    recommendedFor: "Low-RAM Android TV boxes and Fire TV Stick 2nd generation",
  },
  {
    variant: "reborn",
    version: "1.5.90",
    label: "v1.5.90",
    releasedOn: "2025-11-02",
    sizeMb: 26.1,
    minAndroid: "5.0",
    abi: "universal",
    channel: "legacy",
    catalogId: "SFR-1-5-90",
    fileName: "streamflix-reborn-1.5.90.apk",
    headline: "Legacy build, archived for reference",
    notes: [
      "Kept for completeness — several providers bundled here no longer resolve",
      "No in-app updater path to the current series; install 1.7.230 over the top instead",
      "Not recommended for daily use",
    ],
    recommendedFor: "Reference only — do not install unless you are testing a specific regression",
  },
  {
    variant: "v2",
    version: "142",
    label: "Build 142",
    releasedOn: "2026-08-20",
    sizeMb: 76.8,
    minAndroid: "6.0",
    abi: "universal",
    channel: "current",
    catalogId: "SF2-142",
    fileName: "StreamFlix 2.0 latest version.apk",
    headline: "Current StreamFlix 2.0 build",
    notes: [
      "Matches the build currently listed on Google Play and APKPure",
      "Offline downloads and the eight-language subtitle set are both present",
      "Installing from Play is preferable where available — it updates itself",
    ],
    recommendedFor: "Phones and tablets on Android 6.0 or newer",
  },
  {
    variant: "v2",
    version: "138",
    label: "Build 138",
    releasedOn: "2026-06-11",
    sizeMb: 74.2,
    minAndroid: "6.0",
    abi: "universal",
    channel: "previous",
    catalogId: "SF2-138",
    fileName: "streamflix-2-138.apk",
    headline: "Previous StreamFlix 2.0 build",
    notes: [
      "Rollback target if build 142 crashes on launch for your device",
      "Watchlist and download database are compatible in both directions",
    ],
    recommendedFor: "Rollback after a bad update",
  },
  {
    variant: "v2",
    version: "130",
    label: "Build 130",
    releasedOn: "2026-02-18",
    sizeMb: 71.5,
    minAndroid: "6.0",
    abi: "universal",
    channel: "legacy",
    catalogId: "SF2-130",
    fileName: "streamflix-2-130.apk",
    headline: "Legacy StreamFlix 2.0 build",
    notes: [
      "Archived for reference; the catalog backend has moved on since this build",
      "Expect missing artwork and empty rows",
    ],
    recommendedFor: "Reference only",
  },
];

export function releasesForVariant(variant: VariantId) {
  return releases.filter((release) => release.variant === variant);
}

export function currentRelease(variant: VariantId) {
  return releasesForVariant(variant).find((release) => release.channel === "current");
}

export const releaseFileNames = releases.map((release) => release.fileName);
