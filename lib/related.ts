import { L, linkLabel } from "@/lib/links";
import { R } from "@/lib/routes";

/**
 * Sibling links per page. Every cluster page must resolve to at least two
 * siblings so nothing is orphaned; `scripts/audit-content.mjs` enforces that.
 */

export const importantPages = [
  { href: L.downloadHub.href, title: linkLabel("downloadHub", "sidebar"), note: "Both variants, current builds" },
  { href: L.install.href, title: linkLabel("install", "sidebar"), note: "Sideload, update, fix conflicts" },
  { href: L.firestick.href, title: linkLabel("firestick", "sidebar"), note: "Downloader app method" },
  { href: L.notWorking.href, title: linkLabel("notWorking", "sidebar"), note: "Buffering, no sources, crashes" },
  { href: L.safe.href, title: linkLabel("safe", "sidebar"), note: "Scans, permissions, signatures" },
  { href: L.alternatives.href, title: linkLabel("alternatives", "sidebar"), note: "When providers dry up" },
] as const;

type RelatedLink = { href: string; title: string };

const related: Record<string, RelatedLink[]> = {
  [R.home]: [
    { href: L.reborn.href, title: linkLabel("reborn", "body") },
    { href: L.v2.href, title: linkLabel("v2", "body") },
    { href: L.install.href, title: linkLabel("install", "body") },
    { href: L.firestick.href, title: linkLabel("firestick", "body") },
    { href: L.safe.href, title: linkLabel("safe", "body") },
  ],

  // Cluster A
  [R.reborn]: [
    { href: L.v2.href, title: "How StreamFlix 2.0 differs" },
    { href: L.androidTv.href, title: linkLabel("androidTv", "body") },
    { href: L.legalCheck.href, title: linkLabel("dmcaHistory", "body") },
    { href: L.oldVersions.href, title: linkLabel("oldVersions", "body") },
  ],
  [R.v2]: [
    { href: L.reborn.href, title: "How StreamFlix Reborn differs" },
    { href: L.offline.href, title: linkLabel("offline", "body") },
    { href: L.install.href, title: linkLabel("install", "body") },
    { href: L.privacy.href, title: linkLabel("privacy", "body") },
  ],
  [R.oldVersions]: [
    { href: L.downloadHub.href, title: "Current builds for both variants" },
    { href: L.changelog.href, title: linkLabel("changelog", "body") },
    { href: L.update.href, title: linkLabel("update", "body") },
    { href: L.notWorking.href, title: "When an older build is the fix" },
  ],
  [R.changelog]: [
    { href: L.oldVersions.href, title: linkLabel("oldVersions", "body") },
    { href: L.update.href, title: linkLabel("update", "body") },
    { href: L.reborn.href, title: linkLabel("reborn", "body") },
    { href: L.v2.href, title: linkLabel("v2", "body") },
  ],
  [R.mod]: [
    { href: L.downloadHub.href, title: "The official builds instead" },
    { href: L.safe.href, title: linkLabel("safe", "body") },
    { href: L.reborn.href, title: "Reborn is already ad-free and open-source" },
    { href: L.installVerify.href, title: linkLabel("installVerify", "body") },
  ],

  // Cluster B
  [R.install]: [
    { href: L.downloadHub.href, title: linkLabel("downloadHub", "sidebar") },
    { href: L.notWorking.href, title: linkLabel("notWorking", "body") },
    { href: L.update.href, title: linkLabel("update", "body") },
    { href: L.safe.href, title: linkLabel("safe", "body") },
  ],
  [R.firestick]: [
    { href: L.androidTv.href, title: linkLabel("androidTv", "body") },
    { href: L.reborn.href, title: "Reborn is the TV-capable variant" },
    { href: L.vpn.href, title: linkLabel("vpn", "body") },
    { href: L.bestTvApks.href, title: linkLabel("bestTvApks", "body") },
  ],
  [R.androidTv]: [
    { href: L.firestick.href, title: linkLabel("firestick", "body") },
    { href: L.smartTv.href, title: linkLabel("smartTv", "body") },
    { href: L.reborn.href, title: linkLabel("reborn", "body") },
    { href: L.bestTvApks.href, title: linkLabel("bestTvApks", "body") },
  ],
  [R.pc]: [
    { href: L.ios.href, title: linkLabel("ios", "body") },
    { href: L.install.href, title: linkLabel("install", "body") },
    { href: L.downloadHub.href, title: "Get the APK the emulator needs" },
    { href: L.alternatives.href, title: linkLabel("alternatives", "body") },
  ],
  [R.ios]: [
    { href: L.pc.href, title: linkLabel("pc", "body") },
    { href: L.smartTv.href, title: linkLabel("smartTv", "body") },
    { href: L.vsPaid.href, title: linkLabel("vsPaid", "body") },
    { href: L.alternatives.href, title: linkLabel("alternatives", "body") },
  ],
  [R.smartTv]: [
    { href: L.firestick.href, title: linkLabel("firestick", "body") },
    { href: L.androidTv.href, title: linkLabel("androidTv", "body") },
    { href: L.ios.href, title: linkLabel("ios", "body") },
    { href: L.bestTvApks.href, title: linkLabel("bestTvApks", "body") },
  ],

  // Cluster C
  [R.howToUse]: [
    { href: L.notWorking.href, title: linkLabel("notWorking", "body") },
    { href: L.offline.href, title: linkLabel("offline", "body") },
    { href: L.rebornProviders.href, title: linkLabel("rebornProviders", "body") },
    { href: L.install.href, title: linkLabel("install", "body") },
  ],
  [R.offline]: [
    { href: L.howToUse.href, title: linkLabel("howToUse", "body") },
    { href: L.v2.href, title: "StreamFlix 2.0 has downloads built in" },
    { href: L.privacy.href, title: linkLabel("privacy", "body") },
    { href: L.notWorking.href, title: linkLabel("notWorking", "body") },
  ],
  [R.notWorking]: [
    { href: L.howToUse.href, title: linkLabel("switchServers", "body") },
    { href: L.oldVersions.href, title: linkLabel("rollback", "body") },
    { href: L.install.href, title: linkLabel("installConflict", "body") },
    { href: L.vpn.href, title: linkLabel("vpn", "body") },
  ],
  [R.update]: [
    { href: L.oldVersions.href, title: linkLabel("oldVersions", "body") },
    { href: L.changelog.href, title: linkLabel("changelog", "body") },
    { href: L.install.href, title: linkLabel("install", "body") },
    { href: L.safe.href, title: linkLabel("safe", "body") },
  ],

  // Cluster D
  [R.safe]: [
    { href: L.privacy.href, title: linkLabel("privacy", "body") },
    { href: L.legalCheck.href, title: linkLabel("legalCheck", "body") },
    { href: L.mod.href, title: "Why mod builds fail these checks" },
    { href: L.installVerify.href, title: linkLabel("installVerify", "body") },
  ],
  [R.legal]: [
    { href: L.safe.href, title: linkLabel("safe", "body") },
    { href: L.vpn.href, title: linkLabel("vpn", "body") },
    { href: L.reborn.href, title: "The open-source fork explained" },
    { href: L.vsPaid.href, title: linkLabel("vsPaid", "body") },
  ],
  [R.vpn]: [
    { href: L.legalCheck.href, title: linkLabel("legalCheck", "body") },
    { href: L.privacy.href, title: linkLabel("privacy", "body") },
    { href: L.buffering.href, title: linkLabel("buffering", "body") },
    { href: L.firestick.href, title: "Running a VPN on Firestick" },
  ],
  [R.privacy]: [
    { href: L.safe.href, title: linkLabel("safe", "body") },
    { href: L.vpn.href, title: linkLabel("vpn", "body") },
    { href: L.legalCheck.href, title: linkLabel("legalCheck", "body") },
    { href: L.v2.href, title: "Why the ad-supported build collects more" },
  ],

  // Cluster E
  [R.alternatives]: [
    { href: L.bestMovieApks.href, title: linkLabel("bestMovieApks", "body") },
    { href: L.bestTvApks.href, title: linkLabel("bestTvApks", "body") },
    { href: L.vsPaid.href, title: linkLabel("vsPaid", "body") },
    { href: L.downloadHub.href, title: "Back to StreamFlix itself" },
  ],
  [R.bestMovieApks]: [
    { href: L.alternatives.href, title: linkLabel("alternatives", "body") },
    { href: L.bestTvApks.href, title: linkLabel("bestTvApks", "body") },
    { href: L.safe.href, title: linkLabel("safe", "body") },
    { href: L.install.href, title: linkLabel("install", "body") },
  ],
  [R.bestTvApks]: [
    { href: L.bestMovieApks.href, title: linkLabel("bestMovieApks", "body") },
    { href: L.firestick.href, title: linkLabel("firestick", "body") },
    { href: L.androidTv.href, title: linkLabel("androidTv", "body") },
    { href: L.alternatives.href, title: linkLabel("alternatives", "body") },
  ],
  [R.vsPaid]: [
    { href: L.alternatives.href, title: linkLabel("alternatives", "body") },
    { href: L.legalCheck.href, title: linkLabel("legalCheck", "body") },
    { href: L.ios.href, title: "Where paid services win outright" },
    { href: L.bestMovieApks.href, title: linkLabel("bestMovieApks", "body") },
  ],

  // Support
  [R.blog]: [
    { href: L.downloadHub.href, title: linkLabel("downloadHub", "sidebar") },
    { href: L.install.href, title: linkLabel("install", "body") },
    { href: L.notWorking.href, title: linkLabel("notWorking", "body") },
    { href: L.about.href, title: linkLabel("about", "body") },
  ],
  [R.about]: [
    { href: L.downloadHub.href, title: linkLabel("downloadHub", "breadcrumb") },
    { href: L.safe.href, title: linkLabel("safe", "body") },
    { href: L.legalCheck.href, title: linkLabel("legalCheck", "body") },
    { href: R.legalPrivacy, title: "Privacy policy" },
  ],

  // Legal
  [R.legalPrivacy]: [
    { href: R.legalTerms, title: "Terms of use" },
    { href: R.legalDisclaimer, title: "Disclaimer" },
    { href: R.legalDmca, title: "DMCA and copyright" },
    { href: L.privacy.href, title: linkLabel("privacy", "body") },
  ],
  [R.legalTerms]: [
    { href: R.legalPrivacy, title: "Privacy policy" },
    { href: R.legalDisclaimer, title: "Disclaimer" },
    { href: R.legalDmca, title: "DMCA and copyright" },
    { href: L.downloadHub.href, title: linkLabel("downloadHub", "breadcrumb") },
  ],
  [R.legalDisclaimer]: [
    { href: R.legalDmca, title: "DMCA and copyright" },
    { href: R.legalPrivacy, title: "Privacy policy" },
    { href: L.legalCheck.href, title: linkLabel("legalCheck", "body") },
    { href: L.safe.href, title: linkLabel("safe", "body") },
  ],
  [R.legalDmca]: [
    { href: R.legalDisclaimer, title: "Disclaimer" },
    { href: R.legalTerms, title: "Terms of use" },
    { href: L.legalCheck.href, title: linkLabel("legalCheck", "body") },
    { href: L.reborn.href, title: "The fork's licensing position" },
  ],
};

const fallback: RelatedLink[] = [
  { href: L.downloadHub.href, title: linkLabel("downloadHub", "sidebar") },
  { href: L.blog.href, title: linkLabel("blog", "sidebar") },
  { href: L.install.href, title: linkLabel("install", "sidebar") },
];

export function relatedArticles(path: string): RelatedLink[] {
  return related[path] ?? fallback;
}

/** Exposed so the content audit can assert coverage without re-deriving it. */
export const relatedMap = related;
