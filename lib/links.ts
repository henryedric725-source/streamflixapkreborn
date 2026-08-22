import { R } from "@/lib/routes";

/**
 * Every internal destination registered once, with a different anchor phrase per
 * context. Pages never hard-code an href or an anchor string — they call
 * `<InternalLink intent="..." />`, so anchor text stays varied and on-intent, and
 * a slug change is a one-line edit here.
 */

export type LinkContext = "nav" | "footer" | "body" | "sidebar" | "breadcrumb";

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
      body: "StreamFlix APK download hub",
      sidebar: "StreamFlix APK download",
      breadcrumb: "StreamFlix APK",
    },
  },

  // --- Cluster A: versions and variants -------------------------------------
  reborn: {
    href: R.reborn,
    labels: {
      nav: "Reborn",
      footer: "StreamFlix Reborn APK",
      body: "StreamFlix Reborn, the open-source build",
      sidebar: "StreamFlix Reborn APK",
      breadcrumb: "StreamFlix Reborn APK",
    },
  },
  rebornProviders: {
    href: `${R.reborn}#providers`,
    labels: { body: "how Reborn's provider system works" },
  },
  v2: {
    href: R.v2,
    labels: {
      nav: "StreamFlix 2.0",
      footer: "StreamFlix 2.0 APK",
      body: "StreamFlix 2.0, the Play Store build",
      sidebar: "StreamFlix 2.0 APK",
      breadcrumb: "StreamFlix 2.0 APK",
    },
  },
  oldVersions: {
    href: R.oldVersions,
    labels: {
      footer: "Old versions",
      body: "StreamFlix APK old versions archive",
      sidebar: "Old versions archive",
      breadcrumb: "Old versions",
    },
  },
  rollback: {
    href: `${R.oldVersions}#rollback`,
    labels: { body: "roll back to an earlier build" },
  },
  mod: {
    href: R.mod,
    labels: {
      nav: "Mod APK",
      footer: "Mod APK",
      body: "what StreamFlix mod APKs really contain",
      sidebar: "StreamFlix mod APK",
      breadcrumb: "Mod APK",
    },
  },

  // --- Cluster B: install and devices ----------------------------------------
  install: {
    href: R.install,
    labels: {
      nav: "Install",
      footer: "Install guide",
      body: "how to install StreamFlix APK",
      sidebar: "Android install guide",
      breadcrumb: "How to install",
    },
  },
  installUnknownSources: {
    href: `${R.install}#unknown-sources`,
    labels: { body: "enabling installs from unknown sources" },
  },
  installConflict: {
    href: `${R.install}#conflict`,
    labels: { body: "fixing a package conflict" },
  },
  installVerify: {
    href: `${R.install}#verify`,
    labels: { body: "verifying the APK before you open it" },
  },
  firestick: {
    href: R.firestick,
    labels: {
      nav: "Firestick",
      footer: "Firestick and Fire TV",
      body: "installing StreamFlix on Firestick",
      sidebar: "Firestick and Fire TV",
      breadcrumb: "Firestick",
    },
  },
  firestickDownloader: {
    href: `${R.firestick}#downloader`,
    labels: { body: "the Downloader app method" },
  },
  androidTv: {
    href: R.androidTv,
    labels: {
      nav: "Android TV",
      footer: "Android TV and Google TV",
      body: "StreamFlix on Android TV and Google TV",
      sidebar: "Android TV and Google TV",
      breadcrumb: "Android TV",
    },
  },
  pc: {
    href: R.pc,
    labels: {
      footer: "PC and Mac",
      body: "running StreamFlix on PC or Mac",
      sidebar: "StreamFlix for PC and Mac",
      breadcrumb: "StreamFlix for PC",
    },
  },
  ios: {
    href: R.ios,
    labels: {
      footer: "iPhone and iPad",
      body: "why there is no StreamFlix for iPhone",
      sidebar: "iPhone and iPad",
      breadcrumb: "StreamFlix for iOS",
    },
  },
  smartTv: {
    href: R.smartTv,
    labels: {
      footer: "Smart TV",
      body: "StreamFlix on Samsung, LG and cast-capable TVs",
      sidebar: "Smart TV and casting",
      breadcrumb: "Smart TV",
    },
  },

  // --- Cluster C: use, offline, fixes ----------------------------------------
  howToUse: {
    href: R.howToUse,
    labels: {
      footer: "How to use StreamFlix",
      body: "how to use StreamFlix after install",
      sidebar: "Using StreamFlix",
      breadcrumb: "How to use",
    },
  },
  switchServers: {
    href: `${R.howToUse}#servers`,
    labels: { body: "switching servers when a stream stalls" },
  },
  subtitles: {
    href: `${R.howToUse}#subtitles`,
    labels: { body: "loading and styling subtitles" },
  },
  offline: {
    href: R.offline,
    labels: {
      footer: "Offline downloads",
      body: "downloading movies for offline viewing",
      sidebar: "Offline downloads",
      breadcrumb: "Offline downloads",
    },
  },
  notWorking: {
    href: R.notWorking,
    labels: {
      nav: "Fixes",
      footer: "Troubleshooting",
      body: "StreamFlix troubleshooting guide",
      sidebar: "Fix StreamFlix",
      breadcrumb: "Not working",
    },
  },
  buffering: {
    href: `${R.notWorking}#buffering`,
    labels: { body: "fixing buffering and stalled playback" },
  },
  noSources: {
    href: `${R.notWorking}#no-sources`,
    labels: { body: "the 'no sources found' fix" },
  },
  playProtect: {
    href: `${R.notWorking}#play-protect`,
    labels: { body: "getting past the Play Protect warning" },
  },
  update: {
    href: R.update,
    labels: {
      footer: "Update guide",
      body: "updating StreamFlix without losing your data",
      sidebar: "Update guide",
      breadcrumb: "Update guide",
    },
  },

  // --- Cluster D: safety, legality, privacy ----------------------------------
  safe: {
    href: R.safe,
    labels: {
      nav: "Safety",
      footer: "Is it safe?",
      body: "whether StreamFlix APK is safe",
      sidebar: "Safety and file verification",
      breadcrumb: "Is it safe?",
    },
  },
  legalCheck: {
    href: R.legal,
    labels: {
      footer: "Is it legal?",
      body: "the legality of StreamFlix",
      sidebar: "Legality explained",
      breadcrumb: "Is it legal?",
    },
  },
  dmcaHistory: {
    href: `${R.legal}#dmca`,
    labels: { body: "the DMCA takedown of the original StreamFlix" },
  },
  vpn: {
    href: R.vpn,
    labels: {
      footer: "VPN guide",
      body: "whether you need a VPN for StreamFlix",
      sidebar: "VPN guide",
      breadcrumb: "VPN guide",
    },
  },

  // --- Cluster E: comparisons and alternatives -------------------------------
  alternatives: {
    href: R.alternatives,
    labels: {
      nav: "Alternatives",
      footer: "Alternatives",
      body: "StreamFlix alternatives worth installing",
      sidebar: "StreamFlix alternatives",
      breadcrumb: "Alternatives",
    },
  },
  bestTvApks: {
    href: R.bestTvApks,
    labels: {
      footer: "Best streaming APKs for TV",
      body: "the best streaming APKs for Android TV",
      sidebar: "Best APKs for Android TV",
      breadcrumb: "Best streaming APKs for TV",
    },
  },
  vsPaid: {
    href: R.vsPaid,
    labels: {
      footer: "StreamFlix vs paid apps",
      body: "StreamFlix compared with Netflix and paid services",
      sidebar: "Free vs paid streaming",
      breadcrumb: "StreamFlix vs paid apps",
    },
  },

  // --- Support ---------------------------------------------------------------
  blog: {
    href: R.blog,
    labels: {
      nav: "Blog",
      footer: "All articles",
      body: "the full StreamFlix article index",
      sidebar: "Browse every article",
      breadcrumb: "Blog",
    },
  },
  about: {
    href: R.about,
    labels: {
      footer: "About",
      body: "our editorial and testing policy",
      sidebar: "About this site",
      breadcrumb: "About",
    },
  },

  // --- On-page anchors used from the hub -------------------------------------
  getApk: {
    href: `${R.home}#get-apk`,
    homeHref: "#get-apk",
    labels: { body: "the download section on this page" },
  },
  compareVariants: {
    href: `${R.home}#compare`,
    homeHref: "#compare",
    labels: { body: "the side-by-side variant comparison" },
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
