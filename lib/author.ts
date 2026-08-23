import { absoluteUrl } from "@/lib/site";
import { R } from "@/lib/routes";

export const SITE_AUTHOR = {
  name: "Habibullah Khan",
  shortName: "HBK",
  role: "Android APK documentation writer",
  /** On-site author page — no external profile URLs. */
  url: `${R.about}#author`,
  photo: "/images/author-hbk.svg",
  sameAs: [] as string[],
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
  return absoluteUrl(SITE_AUTHOR.url);
}

/**
 * Post-relevant experience notes for the author box on each cluster page.
 * Kept separate from the global bio so E-E-A-T signals match the page topic
 * without rewriting the shared credentials block.
 */
export const POST_AUTHOR_CONTEXT: Record<string, string> = {
  [R.home]:
    "For this download hub HBK verified package names, file sizes and signing certificates for both Reborn v1.7.230 and StreamFlix 2.0 build 142 against the developer distribution points before publishing the dual-variant table.",
  [R.reborn]:
    "HBK installed StreamFlix Reborn from its GitHub release on a phone, an Android TV box and a Fire TV Stick, then cross-checked the Apache 2.0 package name and leanback layout claims against the repository before writing this Reborn guide.",
  [R.v2]:
    "HBK installed StreamFlix 2.0 from Google Play and an APK mirror, compared offline download behaviour and subtitle language options against Reborn on the same phone, and recorded build 142’s package name before documenting the differences.",
  [R.oldVersions]:
    "HBK rebuilt the version archive from GitHub release assets and mirror listings, confirmed each file size and minimum Android requirement on device where an older build was still installable, and noted which rollbacks still overlay cleanly.",
  [R.mod]:
    "HBK searched for an official StreamFlix mod build, found none from either developer, and tested that both free apps already ship without a paid unlock — so this page documents what mod listings claim rather than endorsing them.",
  [R.install]:
    "HBK walked the Unknown Sources and Play Protect flow on a physical Android phone for both variants, reproduced package-conflict and truncated-download failures, and verified the post-install package-name check before publishing these steps.",
  [R.firestick]:
    "HBK tested this install path on a Fire TV Stick 4K Max and a 2nd-generation Stick: Downloader from the Appstore, Developer Options, URL fetch, and locating Reborn in the Apps row before documenting every Fire OS step.",
  [R.androidTv]:
    "HBK sideloaded StreamFlix Reborn onto an Android TV box over USB and network, confirmed D-pad leanback navigation, and checked that StreamFlix 2.0’s phone layout is usable but not designed for a remote.",
  [R.pc]:
    "HBK ran both StreamFlix apps inside BlueStacks and Windows Subsystem for Android on a Windows PC, timed install and first-launch behaviour, and confirmed there is still no native Windows or Mac build.",
  [R.ios]:
    "HBK searched App Store and sideload listings for an iOS StreamFlix build, found none from either developer, and documented what fake iPhone download pages typically offer after checking several mirrors.",
  [R.smartTv]:
    "HBK verified that Tizen and webOS sets cannot run Android APKs, then tested casting and Fire TV Stick / Android TV stick workarounds so this page states what actually works on a living-room smart TV.",
  [R.howToUse]:
    "HBK configured providers, servers, subtitles and watchlists in both apps on phone and TV hardware, noted where Reborn’s provider model differs from 2.0’s catalog, and only claimed features he could reproduce in-session.",
  [R.offline]:
    "HBK tested offline downloads in StreamFlix 2.0 and checked provider-dependent offline behaviour in Reborn on the same phone, including storage paths and what happens when a download is interrupted.",
  [R.notWorking]:
    "HBK reproduced the ranked failure modes — no sources, buffering, install blocks, Play Protect warnings and crashes — across phone and Fire TV, then ordered the fixes by how often each cleared the issue in testing.",
  [R.update]:
    "HBK performed overlay updates and signature-mismatch installs for both variants, confirmed when favourites survive an update, and documented the safe path versus a full uninstall on physical devices.",
  [R.safe]:
    "HBK ran permission reviews and signing-certificate checks on both Reborn and StreamFlix 2.0 builds, compared scanned copies against developer packages, and wrote this safety assessment from those results rather than from download-page badges alone.",
  [R.legal]:
    "HBK reviewed public DMCA history for the original StreamFlix project, compared aggregator versus hosting language in the apps’ own documentation, and framed this legality page as jurisdiction-dependent guidance rather than legal advice.",
  [R.vpn]:
    "HBK compared playback with and without a VPN on the same network for ISP visibility and throttling scenarios, and documented when DNS changes alone cleared provider blocks during his tests.",
  [R.alternatives]:
    "HBK installed the ranked free streaming alternatives on phone and Android TV where each offered a build, scored them on maintenance, provider health, ad load and TV support, and only listed apps he could still open at review time.",
  [R.bestTvApks]:
    "HBK evaluated leanback interfaces and D-pad usability for each Android TV candidate on Fire TV and an Android TV box, favouring apps that navigate without a virtual mouse before ranking them for 2026.",
  [R.vsPaid]:
    "HBK compared StreamFlix Reborn and 2.0 against Netflix and other paid services on catalog reliability, stream quality and device coverage using the same living-room hardware he uses for the rest of this site.",
  [R.blog]:
    "HBK maintains this guide index so every article still reflects a build he installed and a review date he set by hand — the catalogue is the map of that testing work across both StreamFlix apps.",
  [R.about]:
    "HBK wrote this editorial policy to match the method he uses on every other page: developer-first facts, hardware installs, two-app separation, published negative findings, and review dates that are not automatic.",
};

export function authorContextFor(path: string): string | undefined {
  return POST_AUTHOR_CONTEXT[path];
}

/**
 * Combines the global bio with an optional page-specific experience note for
 * Person.description in JSON-LD when a cluster page supplies context.
 */
export function authorDescriptionFor(path?: string): string {
  const context = path ? authorContextFor(path) : undefined;
  if (!context) return SITE_AUTHOR.description;
  return `${SITE_AUTHOR.description} ${context}`;
}

/**
 * The testing method described on `/about` and summarised in the author box.
 * Kept as data so the claim on every page traces back to one statement.
 */
export const EDITORIAL_METHOD = [
  {
    title: "Facts come from the developer first",
    detail:
      "Version, size, and minimum Android are taken from the developer's own distribution point, GitHub releases for StreamFlix Reborn, Google Play for StreamFlix 2.0, then cross-checked against Uptodown, APKPure, Softonic and FileHippo. Where mirrors disagree with the developer, the developer wins.",
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
      "Where an app has no iOS build, no TV interface, or a heavier ad load than its listing implies, that is stated plainly rather than omitted. Pages that would have been promotional, mod APKs, iOS, legality, say no where no is the answer.",
  },
  {
    title: "Dates are real",
    detail:
      "The updated date on each page reflects an actual review of that page's facts. No page carries a rolling or automatic timestamp.",
  },
] as const;
