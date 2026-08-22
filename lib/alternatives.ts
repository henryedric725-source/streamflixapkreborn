/**
 * The competitive set. Feeds all four cluster-E pages from one table so the same
 * app is never described two different ways on two different pages.
 *
 * `status` is the honest field most listicles omit: several perennially
 * recommended apps in this niche have not shipped a build in years.
 */

export type AltStatus = "maintained" | "sporadic" | "abandoned" | "official";
export type AltKind = "aggregator" | "catalog" | "live-tv" | "paid";

export type Alternative = {
  name: string;
  kind: AltKind;
  status: AltStatus;
  /** One-line positioning against StreamFlix. */
  positioning: string;
  strengths: readonly string[];
  weaknesses: readonly string[];
  tvInterface: boolean;
  offlineDownloads: boolean;
  openSource: boolean;
  adLoad: "None" | "Light" | "Moderate" | "Heavy" | "Subscription";
  cost: string;
  /** Whether it belongs on the Android TV shortlist. */
  tvShortlist: boolean;
};

export const statusLabels: Record<AltStatus, string> = {
  maintained: "Actively maintained",
  sporadic: "Sporadic updates",
  abandoned: "No longer updated",
  official: "Official service",
};

export const alternatives: readonly Alternative[] = [
  {
    name: "Cinema HD",
    kind: "aggregator",
    status: "sporadic",
    positioning:
      "The closest like-for-like aggregator. Same model as Reborn: scrapes third-party links, plays them in its own player.",
    strengths: [
      "Large provider list with real-debrid support for people who already pay for it",
      "Works on Firestick and Android TV with a usable remote layout",
      "Subtitle support across several languages",
    ],
    weaknesses: [
      "Updates have become irregular and arrive outside any store",
      "Closed source, so the build cannot be audited",
      "Link quality varies far more than the interface suggests",
    ],
    tvInterface: true,
    offlineDownloads: true,
    openSource: false,
    adLoad: "Light",
    cost: "Free",
    tvShortlist: true,
  },
  {
    name: "BeeTV",
    kind: "aggregator",
    status: "sporadic",
    positioning:
      "A Cinema HD contemporary with a near-identical feature set and the same maintenance problem.",
    strengths: [
      "Simple interface that new users get to grips with quickly",
      "Downloads for offline viewing",
      "Reasonable subtitle coverage",
    ],
    weaknesses: [
      "Long gaps between releases",
      "Heavier ad presence than Reborn",
      "No meaningful TV-specific layout despite being widely recommended for Firestick",
    ],
    tvInterface: false,
    offlineDownloads: true,
    openSource: false,
    adLoad: "Moderate",
    cost: "Free",
    tvShortlist: false,
  },
  {
    name: "CyberFlix TV",
    kind: "aggregator",
    status: "abandoned",
    positioning:
      "Still on every listicle, but development stopped years ago and most of its providers have gone dark.",
    strengths: [
      "Genuinely good interface for its era",
      "Large historical catalog index",
    ],
    weaknesses: [
      "No longer updated. Most sources fail to resolve",
      "Recommending it in 2026 is a reliable sign a listicle was not tested",
      "No security fixes since abandonment",
    ],
    tvInterface: false,
    offlineDownloads: true,
    openSource: false,
    adLoad: "Moderate",
    cost: "Free",
    tvShortlist: false,
  },
  {
    name: "Live NetTV",
    kind: "live-tv",
    status: "sporadic",
    positioning:
      "Solves a different problem. Live channels rather than an on-demand catalog. Complements StreamFlix rather than replacing it.",
    strengths: [
      "Hundreds of live channels across many countries",
      "Multiple stream links per channel, so one dead link is not fatal",
      "Small download",
    ],
    weaknesses: [
      "Almost no on-demand catalog: the wrong tool if you want films",
      "Heavy ad load",
      "Channel list decays quickly between updates",
    ],
    tvInterface: false,
    offlineDownloads: false,
    openSource: false,
    adLoad: "Heavy",
    cost: "Free",
    tvShortlist: false,
  },
  {
    name: "HD Streamz",
    kind: "live-tv",
    status: "maintained",
    positioning:
      "The live-TV option people most often ask for an alternative to, strongest on South Asian channels.",
    strengths: [
      "Still receiving updates, unlike most of this list",
      "Deep regional channel coverage, particularly Indian and Pakistani networks",
      "Multiple servers per channel",
    ],
    weaknesses: [
      "Ad load is the heaviest of anything here",
      "Live only, no film or series catalog",
      "Interface is cluttered on a TV remote",
    ],
    tvInterface: false,
    offlineDownloads: false,
    openSource: false,
    adLoad: "Heavy",
    cost: "Free",
    tvShortlist: false,
  },
  {
    name: "OnStream",
    kind: "aggregator",
    status: "maintained",
    positioning:
      "The nearest current competitor to Reborn: same aggregator model, actively maintained, with a working TV interface.",
    strengths: [
      "Consistent release cadence",
      "Works on Firestick, Android TV and phones from one universal package",
      "Optional Trakt sync for people who track what they watch",
    ],
    weaknesses: [
      "Closed source, unlike Reborn",
      "Smaller provider list than Reborn's 20+",
    ],
    tvInterface: true,
    offlineDownloads: true,
    openSource: false,
    adLoad: "Light",
    cost: "Free",
    tvShortlist: true,
  },
  {
    name: "NetMirror",
    kind: "catalog",
    status: "maintained",
    positioning:
      "Browser-first catalog app that people reach for when they want something without sideloading at all.",
    strengths: [
      "Runs in a browser, so there is nothing to install on desktop",
      "Clean catalog presentation",
    ],
    weaknesses: [
      "No real Android TV experience",
      "Frequently changes domains, which makes it hard to know you are on the real one",
      "Asks for a login on some entry points, which the APK aggregators never do",
    ],
    tvInterface: false,
    offlineDownloads: false,
    openSource: false,
    adLoad: "Moderate",
    cost: "Free",
    tvShortlist: false,
  },
  {
    name: "Netflix",
    kind: "paid",
    status: "official",
    positioning:
      "The benchmark. Licensed, reliable, and the thing every free app is implicitly compared against.",
    strengths: [
      "Every stream is licensed, so nothing disappears mid-episode",
      "Consistent 1080p/4K with proper HDR and Dolby Audio",
      "Native apps on every platform including iOS, Smart TVs and consoles",
      "Downloads that reliably work offline",
    ],
    weaknesses: [
      "Monthly cost, and regional catalogs differ substantially",
      "Titles rotate out when licences lapse",
    ],
    tvInterface: true,
    offlineDownloads: true,
    openSource: false,
    adLoad: "Subscription",
    cost: "Paid monthly",
    tvShortlist: true,
  },
];

export function alternativesByKind(kind: AltKind) {
  return alternatives.filter((item) => item.kind === kind);
}

export const freeAlternatives = alternatives.filter((item) => item.kind !== "paid");
export const tvShortlist = alternatives.filter((item) => item.tvShortlist);
export const maintainedOnly = alternatives.filter(
  (item) => item.status === "maintained" || item.status === "official",
);
