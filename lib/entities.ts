/**
 * Named-entity registry.
 *
 * Search and answer engines resolve a page's topic by matching the entities it
 * discusses against a knowledge graph. Naming an entity in prose is weak
 * evidence; naming it in `about`/`mentions` with a `sameAs` pointer to its
 * canonical Wikipedia/Wikidata record is unambiguous.
 *
 * `about` = what the page is primarily about (1–3 entities).
 * `mentions` = supporting entities the page discusses substantively.
 */

export type Entity = {
  /** Canonical name, matching how body copy refers to it. */
  name: string;
  /** schema.org type for the node. */
  type: string;
  /** Authoritative identifiers. Wikipedia first, Wikidata second. */
  sameAs: readonly string[];
  description?: string;
};

const wiki = (slug: string) => `https://en.wikipedia.org/wiki/${slug}`;
const wikidata = (id: string) => `https://www.wikidata.org/wiki/${id}`;

export const E = {
  android: {
    name: "Android",
    type: "SoftwareApplication",
    sameAs: [wiki("Android_(operating_system)"), wikidata("Q94")],
    description: "Mobile operating system developed by Google.",
  },
  apk: {
    name: "Android application package",
    type: "Thing",
    sameAs: [wiki("Apk_(file_format)"), wikidata("Q1077784")],
    description: "The package file format used to distribute Android apps.",
  },
  sideloading: {
    name: "Sideloading",
    type: "Thing",
    sameAs: [wiki("Sideloading"), wikidata("Q2301053")],
    description: "Installing an app from outside an official app store.",
  },
  androidTv: {
    name: "Android TV",
    type: "Thing",
    sameAs: [wiki("Android_TV"), wikidata("Q17086468")],
  },
  googleTv: {
    name: "Google TV",
    type: "Thing",
    sameAs: [wiki("Google_TV_(smart_TV_platform)")],
  },
  fireTv: {
    name: "Amazon Fire TV",
    type: "Product",
    sameAs: [wiki("Amazon_Fire_TV"), wikidata("Q16244121")],
  },
  chromecast: {
    name: "Chromecast",
    type: "Product",
    sameAs: [wiki("Chromecast"), wikidata("Q4090131")],
  },
  tizen: {
    name: "Tizen",
    type: "SoftwareApplication",
    sameAs: [wiki("Tizen"), wikidata("Q1043341")],
  },
  webos: {
    name: "webOS",
    type: "SoftwareApplication",
    sameAs: [wiki("WebOS"), wikidata("Q753257")],
  },
  ios: {
    name: "iOS",
    type: "SoftwareApplication",
    sameAs: [wiki("IOS"), wikidata("Q48493")],
  },
  playProtect: {
    name: "Google Play Protect",
    type: "Thing",
    sameAs: [wiki("Google_Play_Services")],
    description: "Android's built-in app-scanning and install-warning service.",
  },
  googlePlay: {
    name: "Google Play",
    type: "Organization",
    sameAs: [wiki("Google_Play"), wikidata("Q79576")],
  },
  apache2: {
    name: "Apache License 2.0",
    type: "CreativeWork",
    sameAs: [wiki("Apache_License"), wikidata("Q616526")],
  },
  kotlin: {
    name: "Kotlin",
    type: "ComputerLanguage",
    sameAs: [wiki("Kotlin_(programming_language)"), wikidata("Q3320346")],
  },
  github: {
    name: "GitHub",
    type: "Organization",
    sameAs: [wiki("GitHub"), wikidata("Q364")],
  },
  dmca: {
    name: "Digital Millennium Copyright Act",
    type: "Legislation",
    sameAs: [wiki("Digital_Millennium_Copyright_Act"), wikidata("Q1226091")],
  },
  copyright: {
    name: "Copyright infringement",
    type: "Thing",
    sameAs: [wiki("Copyright_infringement"), wikidata("Q189569")],
  },
  vpn: {
    name: "Virtual private network",
    type: "Thing",
    sameAs: [wiki("Virtual_private_network"), wikidata("Q192767")],
  },
  dns: {
    name: "Domain Name System",
    type: "Thing",
    sameAs: [wiki("Domain_Name_System"), wikidata("Q8767")],
  },
  streaming: {
    name: "Streaming media",
    type: "Thing",
    sameAs: [wiki("Streaming_media"), wikidata("Q1049476")],
  },
  subtitles: {
    name: "Subtitles",
    type: "Thing",
    sameAs: [wiki("Subtitles"), wikidata("Q204028")],
  },
  bufferingTerm: {
    name: "Data buffer",
    type: "Thing",
    sameAs: [wiki("Data_buffer"), wikidata("Q864457")],
  },
  emulator: {
    name: "Android emulator",
    type: "Thing",
    sameAs: [wiki("Emulator"), wikidata("Q8029")],
  },
  bluestacks: {
    name: "BlueStacks",
    type: "SoftwareApplication",
    sameAs: [wiki("BlueStacks"), wikidata("Q4928755")],
  },
  wsa: {
    name: "Windows Subsystem for Android",
    type: "SoftwareApplication",
    sameAs: [wiki("Windows_Subsystem_for_Android")],
  },
  tmdb: {
    name: "The Movie Database",
    type: "Organization",
    sameAs: [wiki("The_Movie_Database"), wikidata("Q20871419")],
    description: "Community-maintained film and television metadata service.",
  },
  netflix: {
    name: "Netflix",
    type: "Organization",
    sameAs: [wiki("Netflix"), wikidata("Q907311")],
  },
  openSource: {
    name: "Open-source software",
    type: "Thing",
    sameAs: [wiki("Open-source_software"), wikidata("Q1130645")],
  },
  malware: {
    name: "Malware",
    type: "Thing",
    sameAs: [wiki("Malware"), wikidata("Q14001")],
  },
  digitalSignature: {
    name: "Code signing",
    type: "Thing",
    sameAs: [wiki("Code_signing"), wikidata("Q1116876")],
  },
  privacy: {
    name: "Internet privacy",
    type: "Thing",
    sameAs: [wiki("Internet_privacy"), wikidata("Q1188484")],
  },
  publicDomain: {
    name: "Public domain",
    type: "Thing",
    sameAs: [wiki("Public_domain"), wikidata("Q19652")],
  },
  advertising: {
    name: "Online advertising",
    type: "Thing",
    sameAs: [wiki("Online_advertising"), wikidata("Q193479")],
  },
  downloader: {
    name: "Downloader (AFTVnews)",
    type: "SoftwareApplication",
    sameAs: [wiki("Amazon_Fire_TV")],
    description:
      "Fire TV and Android TV utility by AFTVnews used to fetch and install APK files by URL or short code.",
  },
  reddit: {
    name: "Reddit",
    type: "Organization",
    sameAs: [wiki("Reddit"), wikidata("Q1136")],
  },
  amazonAppstore: {
    name: "Amazon Appstore",
    type: "Organization",
    sameAs: [wiki("Amazon_Appstore"), wikidata("Q4740861")],
  },
  leanback: {
    name: "Android TV Leanback",
    type: "Thing",
    sameAs: [wiki("Android_TV"), wikidata("Q17086468")],
    description:
      "Android TV user-interface library designed for D-pad remotes rather than touch screens.",
  },
} as const satisfies Record<string, Entity>;

export type EntityKey = keyof typeof E;

/** Emit a schema.org node for an entity (name only — no external sameAs URLs). */
export function entityNode(key: EntityKey) {
  const entity = E[key] as Entity;
  return {
    "@type": entity.type,
    name: entity.name,
    ...(entity.description ? { description: entity.description } : {}),
  };
}

export function entityRefs(keys: readonly EntityKey[]) {
  return keys.map((key) => entityNode(key));
}

/** Flat name list, used for `knowsAbout` on Organization and Person. */
export const ALL_ENTITY_NAMES = Object.values(E).map((entity) => entity.name);
