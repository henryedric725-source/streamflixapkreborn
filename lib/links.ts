import { R } from "@/lib/routes";

/**
 * Every internal destination registered once, with a different anchor phrase per
 * context. Pages never hard-code an href or an anchor string — they call
 * `<InternalLink intent="..." />`, so anchor text stays varied and on-intent, and
 * a slug change is a one-line edit here.
 */

export type LinkContext =
  | "nav"
  | "footer"
  | "body"
  | "sidebar"
  | "breadcrumb"
  | "generic";

type LinkDef = {
  href: string;
  /** Anchor-only variant used when the link is rendered on its own page. */
  homeHref?: string;
  labels: Partial<Record<LinkContext, string>> & { body: string };
};

export const L = {
  downloadHub: {
    href: R.home,
    labels: {
      nav: "Download",
      footer: "StreamFlix APK download",
      body: "StreamFlix APK download",
      sidebar: "StreamFlix APK download",
      breadcrumb: "StreamFlix APK",
      generic: "this page",
    },
  },

  // --- Cluster A: versions and variants -------------------------------------
  reborn: {
    href: R.reborn,
    labels: {
      nav: "Reborn",
      footer: "StreamFlix Reborn APK",
      body: "StreamFlix Reborn APK",
      sidebar: "StreamFlix Reborn APK",
      breadcrumb: "StreamFlix Reborn APK",
      generic: "the Reborn guide",
    },
  },
  rebornProviders: {
    href: `${R.reborn}#providers`,
    labels: {
      body: "StreamFlix Reborn providers",
      generic: "more detail",
    },
  },
  v2: {
    href: R.v2,
    labels: {
      nav: "StreamFlix 2.0",
      footer: "StreamFlix 2.0 APK",
      body: "StreamFlix 2.0 APK",
      sidebar: "StreamFlix 2.0 APK",
      breadcrumb: "StreamFlix 2.0 APK",
      generic: "the StreamFlix 2.0 guide",
    },
  },
  oldVersions: {
    href: R.oldVersions,
    labels: {
      footer: "StreamFlix old versions",
      body: "StreamFlix APK old versions",
      sidebar: "Old versions archive",
      breadcrumb: "Old versions",
      generic: "the version archive",
    },
  },
  oldVersionsDirectory: {
    href: `${R.oldVersions}#directory`,
    labels: {
      body: "the StreamFlix package index",
      generic: "every catalogued build",
    },
  },
  rollback: {
    href: `${R.oldVersions}#rollback`,
    labels: {
      body: "roll back StreamFlix APK",
      generic: "rollback steps",
    },
  },
  mod: {
    href: R.mod,
    labels: {
      nav: "Mod APK",
      footer: "StreamFlix mod APK",
      body: "StreamFlix mod APK",
      sidebar: "StreamFlix mod APK",
      breadcrumb: "Mod APK",
      generic: "this explanation",
    },
  },

  // --- Cluster B: install and devices ----------------------------------------
  install: {
    href: R.install,
    labels: {
      nav: "Install",
      footer: "How to install StreamFlix APK",
      body: "how to install StreamFlix APK",
      sidebar: "Android install guide",
      breadcrumb: "How to install",
      generic: "this install guide",
    },
  },
  installUnknownSources: {
    href: `${R.install}#unknown-sources`,
    labels: {
      body: "unknown sources on Android",
      generic: "these steps",
    },
  },
  installConflict: {
    href: `${R.install}#conflict`,
    labels: {
      body: "fix StreamFlix package conflict",
      generic: "the conflict fix",
    },
  },
  installVerify: {
    href: `${R.install}#verify`,
    labels: {
      body: "verify StreamFlix APK",
      generic: "how to verify",
    },
  },
  firestick: {
    href: R.firestick,
    labels: {
      nav: "Firestick",
      footer: "StreamFlix for Firestick",
      body: "StreamFlix on Firestick",
      sidebar: "Firestick and Fire TV",
      breadcrumb: "Firestick",
      generic: "the Firestick walkthrough",
    },
  },
  firestickDownloader: {
    href: `${R.firestick}#downloader`,
    labels: {
      body: "Downloader app for StreamFlix",
      generic: "that method",
    },
  },
  androidTv: {
    href: R.androidTv,
    labels: {
      nav: "Android TV",
      footer: "StreamFlix for Android TV",
      body: "StreamFlix for Android TV",
      sidebar: "Android TV and Google TV",
      breadcrumb: "Android TV",
      generic: "the Android TV guide",
    },
  },
  pc: {
    href: R.pc,
    labels: {
      footer: "StreamFlix for PC",
      body: "StreamFlix for PC",
      sidebar: "StreamFlix for PC and Mac",
      breadcrumb: "StreamFlix for PC",
      generic: "the PC guide",
    },
  },
  ios: {
    href: R.ios,
    labels: {
      footer: "StreamFlix for iPhone",
      body: "StreamFlix for iPhone",
      sidebar: "iPhone and iPad",
      breadcrumb: "StreamFlix for iOS",
      generic: "the iOS answer",
    },
  },
  smartTv: {
    href: R.smartTv,
    labels: {
      footer: "StreamFlix on Smart TV",
      body: "StreamFlix on Smart TV",
      sidebar: "Smart TV and casting",
      breadcrumb: "Smart TV",
      generic: "the Smart TV notes",
    },
  },

  // --- Cluster C: use, offline, fixes ----------------------------------------
  howToUse: {
    href: R.howToUse,
    labels: {
      footer: "How to use StreamFlix",
      body: "how to use StreamFlix",
      sidebar: "Using StreamFlix",
      breadcrumb: "How to use",
      generic: "the setup guide",
    },
  },
  switchServers: {
    href: `${R.howToUse}#servers`,
    labels: {
      body: "switch StreamFlix servers",
      generic: "server switching",
    },
  },
  subtitles: {
    href: `${R.howToUse}#subtitles`,
    labels: {
      body: "StreamFlix subtitles",
      generic: "subtitle settings",
    },
  },
  offline: {
    href: R.offline,
    labels: {
      footer: "StreamFlix offline downloads",
      body: "StreamFlix offline downloads",
      sidebar: "Offline downloads",
      breadcrumb: "Offline downloads",
      generic: "the downloads guide",
    },
  },
  notWorking: {
    href: R.notWorking,
    labels: {
      nav: "Fixes",
      footer: "StreamFlix not working",
      body: "StreamFlix not working",
      sidebar: "Fix StreamFlix",
      breadcrumb: "Not working",
      generic: "this troubleshooting page",
    },
  },
  buffering: {
    href: `${R.notWorking}#buffering`,
    labels: {
      body: "fix StreamFlix buffering",
      generic: "the buffering fix",
    },
  },
  noSources: {
    href: `${R.notWorking}#no-sources`,
    labels: {
      body: "StreamFlix no sources found",
      generic: "that fix",
    },
  },
  playProtect: {
    href: `${R.notWorking}#play-protect`,
    labels: {
      body: "StreamFlix Play Protect warning",
      generic: "how to continue",
    },
  },
  update: {
    href: R.update,
    labels: {
      footer: "Update StreamFlix APK",
      body: "update StreamFlix APK",
      sidebar: "Update guide",
      breadcrumb: "Update guide",
      generic: "the update steps",
    },
  },

  // --- Cluster D: safety, legality, privacy ----------------------------------
  safe: {
    href: R.safe,
    labels: {
      nav: "Safety",
      footer: "Is StreamFlix safe?",
      body: "is StreamFlix APK safe",
      sidebar: "Safety and file verification",
      breadcrumb: "Is it safe?",
      generic: "the safety guide",
    },
  },
  legalCheck: {
    href: R.legal,
    labels: {
      footer: "Is StreamFlix legal?",
      body: "is StreamFlix legal",
      sidebar: "Legality explained",
      breadcrumb: "Is it legal?",
      generic: "the legality guide",
    },
  },
  dmcaHistory: {
    href: `${R.legal}#dmca`,
    labels: {
      body: "StreamFlix DMCA takedown",
      generic: "that history",
    },
  },
  vpn: {
    href: R.vpn,
    labels: {
      footer: "StreamFlix VPN guide",
      body: "VPN for StreamFlix",
      sidebar: "VPN guide",
      breadcrumb: "VPN guide",
      generic: "the VPN notes",
    },
  },

  // --- Cluster E: comparisons and alternatives -------------------------------
  alternatives: {
    href: R.alternatives,
    labels: {
      nav: "Alternatives",
      footer: "StreamFlix alternatives",
      body: "StreamFlix alternatives",
      sidebar: "When providers dry up",
      breadcrumb: "Alternatives",
      generic: "the full comparison",
    },
  },
  alternativesLive: {
    href: `${R.alternatives}#live-tv`,
    labels: {
      body: "live TV apps like HD Streamz",
      generic: "that live-TV section",
    },
  },
  alternativesAggregators: {
    href: `${R.alternatives}#aggregators`,
    labels: {
      body: "direct StreamFlix aggregator swaps",
      generic: "the aggregator shortlist",
    },
  },
  bestTvApks: {
    href: R.bestTvApks,
    labels: {
      footer: "Best streaming APKs for Android TV",
      body: "best streaming APKs for Android TV",
      sidebar: "Best APKs for Android TV",
      breadcrumb: "Best streaming APKs for TV",
      generic: "the TV shortlist",
    },
  },
  vsPaid: {
    href: R.vsPaid,
    labels: {
      footer: "StreamFlix vs Netflix",
      body: "StreamFlix vs Netflix and paid apps",
      sidebar: "Free vs paid streaming",
      breadcrumb: "StreamFlix vs paid apps",
      generic: "the comparison",
    },
  },

  // --- Support ---------------------------------------------------------------
  blog: {
    href: R.blog,
    labels: {
      nav: "Blog",
      footer: "StreamFlix blog",
      body: "StreamFlix blog",
      sidebar: "Browse every article",
      breadcrumb: "Guides",
      generic: "all guides",
    },
  },
  about: {
    href: R.about,
    labels: {
      footer: "About StreamFlix APK Desk",
      body: "editorial and testing policy",
      sidebar: "About this site",
      breadcrumb: "About",
      generic: "our method",
    },
  },

  // --- On-page anchors used from the hub -------------------------------------
  getApk: {
    href: `${R.home}#get-apk`,
    homeHref: "#get-apk",
    labels: {
      body: "download StreamFlix APK",
      generic: "the download section",
    },
  },
  compareVariants: {
    href: `${R.home}#compare`,
    homeHref: "#compare",
    labels: {
      body: "StreamFlix Reborn vs 2.0",
      generic: "the side-by-side table",
    },
  },
} as const satisfies Record<string, LinkDef>;

export type LinkKey = keyof typeof L;

export function linkHref(key: LinkKey, currentPath: string = R.home): string {
  const def = L[key] as LinkDef;
  if (currentPath === R.home && def.homeHref) return def.homeHref;
  return def.href;
}

export function linkLabel(key: LinkKey, context: LinkContext = "body"): string {
  const def = L[key] as LinkDef;
  return (def.labels[context] as string | undefined) ?? def.labels.body;
}

export function navItemsFromLinks() {
  return [
    { href: L.downloadHub.href, label: linkLabel("downloadHub", "nav") },
    { href: L.install.href, label: linkLabel("install", "nav") },
    { href: L.firestick.href, label: linkLabel("firestick", "nav") },
    { href: L.notWorking.href, label: linkLabel("notWorking", "nav") },
    { href: L.alternatives.href, label: linkLabel("alternatives", "nav") },
    { href: L.blog.href, label: linkLabel("blog", "nav") },
  ] as const;
}

export function quickLinksFromLinks() {
  return [
    { href: L.downloadHub.href, label: linkLabel("downloadHub", "footer") },
    { href: L.reborn.href, label: linkLabel("reborn", "footer") },
    { href: L.v2.href, label: linkLabel("v2", "footer") },
    { href: L.install.href, label: linkLabel("install", "footer") },
    { href: L.firestick.href, label: linkLabel("firestick", "footer") },
    { href: L.notWorking.href, label: linkLabel("notWorking", "footer") },
    { href: L.safe.href, label: linkLabel("safe", "footer") },
    { href: L.blog.href, label: linkLabel("blog", "footer") },
    { href: L.about.href, label: linkLabel("about", "footer") },
  ] as const;
}
