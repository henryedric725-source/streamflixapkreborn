export const SITE_AUTHOR = {
  name: "Habibullah Khan",
  shortName: "HBK",
  role: "Android APK documentation writer",
  url: "https://hbkblogger.vercel.app",
  photo: "/images/author-hbk.svg",
  /** Verifiable profiles. Feeds Person.sameAs — identity grounding for E-E-A-T. */
  sameAs: [
    process.env.NEXT_PUBLIC_AUTHOR_GITHUB,
    process.env.NEXT_PUBLIC_AUTHOR_LINKEDIN,
    process.env.NEXT_PUBLIC_AUTHOR_TWITTER,
  ].filter(Boolean) as string[],
  /** Stated experience, surfaced in the author box and Person.description. */
  experienceYears: 8,
  credentials: [
    "Installs and tests every documented build on physical Android phone, Android TV and Fire TV hardware",
    "Verifies package names and signing certificates before publishing specifications",
    "Documents StreamFlix Reborn and StreamFlix 2.0 as separate applications",
  ],
  description:
    "HBK (Habibullah Khan) has documented Android sideloading since 2018. For this site he installs every build on a phone, an Android TV box, and a Fire TV Stick before it is written about, records package names and signing certificates, and separates StreamFlix Reborn from StreamFlix 2.0 rather than treating them as one app.",
} as const;

export function authorProfileUrl() {
  return SITE_AUTHOR.url;
}

/**
 * The testing method described on `/about` and summarised in the author box.
 * Kept as data so the claim on every page traces back to one statement.
 */
export const EDITORIAL_METHOD = [
  {
    title: "Facts come from the developer first",
    detail:
      "Version, size, and minimum Android are taken from the developer's own distribution point — GitHub releases for StreamFlix Reborn, Google Play for StreamFlix 2.0 — then cross-checked against Uptodown, APKPure, Softonic and FileHippo. Where mirrors disagree with the developer, the developer wins.",
  },
  {
    title: "Every build is installed before it is described",
    detail:
      "Each package is installed on an Android phone, an Android TV box, and a Fire TV Stick. Anything we could not reproduce on hardware is not claimed as a feature.",
  },
  {
    title: "The two apps are never merged",
    detail:
      "StreamFlix Reborn and StreamFlix 2.0 have different developers, package names, licences and capabilities. Every spec figure on this site is labelled with which app it belongs to.",
  },
  {
    title: "Negative findings are published",
    detail:
      "Where an app has no iOS build, no TV interface, or a heavier ad load than its listing implies, that is stated plainly rather than omitted. Pages that would have been promotional — mod APKs, iOS, legality — say no where no is the answer.",
  },
  {
    title: "Dates are real",
    detail:
      "The updated date on each page reflects an actual review of that page's facts. No page carries a rolling or automatic timestamp.",
  },
] as const;
