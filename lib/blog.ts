import { R } from "@/lib/routes";

/**
 * The post catalogue. Powers `/blog`, the footer, `RelatedHubs`, the RSS feed,
 * and the Blog/ItemList schema. Every article appears here exactly once, so this
 * file is the audit surface for "is any page orphaned?".
 */

export type Post = {
  href: string;
  title: string;
  summary: string;
  /** Primary keyword head this page owns. No two guides may share one. */
  intent: string;
};

export type PostCategory = {
  id: string;
  name: string;
  blurb: string;
  posts: readonly Post[];
};

export const postCategories: readonly PostCategory[] = [
  {
    id: "versions",
    name: "Versions and variants",
    blurb:
      "Which StreamFlix you actually have, what changed in each build, and where to get an older package when the newest one misbehaves.",
    posts: [
      {
        href: R.reborn,
        title: "StreamFlix Reborn APK: Open-Source Build Explained",
        summary:
          "The Apache 2.0 fork on GitHub: provider system, Android TV interface, and how it replaced the original StreamFlix after the DMCA takedown.",
        intent: "streamflix reborn",
      },
      {
        href: R.v2,
        title: "StreamFlix 2.0 APK: The Play Store Build",
        summary:
          "The separate closed-source app from a different developer: catalog layout, eight subtitle languages, offline downloads, and how it differs from Reborn.",
        intent: "streamflix 2.0 apk",
      },
      {
        href: R.oldVersions,
        title: "StreamFlix Old Versions and Changelog",
        summary:
          "Every catalogued build for both apps with size, minimum Android and release notes, plus how to read the version numbers and when rolling back is the right fix.",
        intent: "streamflix old versions",
      },
      {
        href: R.mod,
        title: "StreamFlix Mod APK: What Those Downloads Actually Are",
        summary:
          "There is no official mod. What the listings really contain, why a 'premium unlock' makes no sense for a free app, and what to install instead.",
        intent: "streamflix mod apk",
      },
    ],
  },
  {
    id: "install",
    name: "Install and devices",
    blurb:
      "One guide per device class. Each covers the exact method that device supports and nothing it does not.",
    posts: [
      {
        href: R.install,
        title: "How to Install StreamFlix APK on Android",
        summary:
          "The master sideload guide: unknown sources, Play Protect, overlay updates, package conflicts, and verifying the file before you open it.",
        intent: "how to install streamflix apk",
      },
      {
        href: R.firestick,
        title: "StreamFlix on Firestick and Fire TV",
        summary:
          "Install via the Downloader app, remap the remote, fix the Fire OS sideload prompts, and get the leanback interface running.",
        intent: "streamflix firestick",
      },
      {
        href: R.androidTv,
        title: "StreamFlix for Android TV and Google TV",
        summary:
          "Sideload onto a TV box or built-in Google TV, launch an app the launcher hides, and drive the interface with a D-pad.",
        intent: "streamflix android tv",
      },
      {
        href: R.pc,
        title: "StreamFlix for PC: Windows and Mac",
        summary:
          "There is no native desktop build. Emulator routes compared, BlueStacks, LDPlayer, Windows Subsystem for Android, with the trade-offs of each.",
        intent: "streamflix for pc",
      },
      {
        href: R.ios,
        title: "StreamFlix for iPhone and iPad: The Honest Answer",
        summary:
          "Neither variant has an iOS build and an APK cannot run on iOS. What the 'StreamFlix for iPhone' pages are really offering, and the legitimate alternatives.",
        intent: "streamflix for ios",
      },
      {
        href: R.smartTv,
        title: "StreamFlix on Smart TV: Samsung, LG, and Casting",
        summary:
          "Samsung Tizen and LG webOS cannot run APKs. Casting from a phone, USB sideloading on Android-based sets, and when a cheap streaming stick is the better answer.",
        intent: "streamflix smart tv",
      },
    ],
  },
  {
    id: "use",
    name: "Using and fixing",
    blurb:
      "What to do after the app is installed, and what to do when it stops working.",
    posts: [
      {
        href: R.howToUse,
        title: "How to Use StreamFlix: First Launch to Fluent",
        summary:
          "Pick providers, switch servers when one stalls, load subtitles, change audio track, build a watchlist, and use resume properly.",
        intent: "how to use streamflix",
      },
      {
        href: R.offline,
        title: "Downloading Movies for Offline Viewing in StreamFlix",
        summary:
          "How offline saving works in each variant, where files land, why some titles refuse to download, and how to manage storage.",
        intent: "streamflix download movies offline",
      },
      {
        href: R.notWorking,
        title: "StreamFlix Not Working: Every Fix, Ranked",
        summary:
          "No sources found, endless buffering, app won't install, black screen, crash on launch, Play Protect block: diagnosed in the order most likely to work.",
        intent: "streamflix not working",
      },
      {
        href: R.update,
        title: "How to Update StreamFlix Without Losing Your Data",
        summary:
          "Overlay installs, the in-app updater, signature mismatches, and when you should deliberately stay on an older build.",
        intent: "streamflix update",
      },
    ],
  },
  {
    id: "trust",
    name: "Safety, legality and privacy",
    blurb:
      "The questions worth asking before you sideload anything, answered without the usual sales pitch.",
    posts: [
      {
        href: R.safe,
        title: "Is StreamFlix Safe? Permissions and Privacy",
        summary:
          "Scan results, every permission explained, signature verification, what the no-account model means for your data, and the repackaged builds to avoid.",
        intent: "is streamflix safe",
      },
      {
        href: R.legal,
        title: "Is StreamFlix Legal? Aggregators, Hosting and the DMCA",
        summary:
          "Why the original StreamFlix was taken down, the legal distinction between hosting and aggregating, and where the risk actually sits.",
        intent: "is streamflix legal",
      },
      {
        href: R.vpn,
        title: "Do You Need a VPN for StreamFlix?",
        summary:
          "What a VPN does and does not change here, ISP throttling versus blocking, DNS alternatives, and setup on both phone and Firestick.",
        intent: "streamflix vpn",
      },
    ],
  },
  {
    id: "compare",
    name: "Comparisons and alternatives",
    blurb:
      "Where StreamFlix sits against everything else, including the paid services it is usually compared to.",
    posts: [
      {
        href: R.alternatives,
        title: "StreamFlix Alternatives Worth Installing",
        summary:
          "Apps that solve the same problem when StreamFlix's providers dry up. What each does better, and which ones are no longer maintained.",
        intent: "streamflix alternatives",
      },
      {
        href: R.bestTvApks,
        title: "Best Streaming APKs for Android TV and Firestick",
        summary:
          "The shortlist that actually has a leanback interface and D-pad navigation, rather than a phone app you fight with a remote.",
        intent: "best streaming apks android tv",
      },
      {
        href: R.vsPaid,
        title: "StreamFlix vs Netflix and Paid Streaming Apps",
        summary:
          "An honest comparison of catalog reliability, video quality, and total cost, including where the free option genuinely loses.",
        intent: "netflix alternative free apk",
      },
    ],
  },
];

export const allPosts: readonly Post[] = postCategories.flatMap(
  (category) => category.posts,
);

export function postByHref(href: string): Post | undefined {
  return allPosts.find((post) => post.href === href);
}

/** The category a post belongs to. Used for breadcrumbs and article schema. */
export function categoryOf(href: string): PostCategory | undefined {
  return postCategories.find((category) =>
    category.posts.some((post) => post.href === href),
  );
}

/** Cross-cluster cards shown at the foot of every cluster page. */
export const hubCards = [
  {
    href: R.home,
    title: "StreamFlix APK download",
    intent: "Primary download hub",
    summary: "Both variants, current versions, and the file you actually want.",
  },
  {
    href: R.install,
    title: "Install guide",
    intent: "Android sideload",
    summary: "Unknown sources, Play Protect, overlay updates, package conflicts.",
  },
  {
    href: R.notWorking,
    title: "Fix StreamFlix",
    intent: "Troubleshooting",
    summary: "No sources, buffering, install failures, crashes, black screens.",
  },
  {
    href: R.blog,
    title: "All guides",
    intent: "Post index",
    summary: "Install, device, troubleshooting, and safety articles.",
  },
] as const;
