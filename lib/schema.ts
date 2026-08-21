import {
  CONTENT_UPDATED,
  DATE_PUBLISHED,
  PUBLISHER,
  SCHEMA_LANGUAGE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  socialLinks,
} from "@/lib/site";
import { SITE_AUTHOR, authorProfileUrl } from "@/lib/author";
import type { FaqItem } from "@/lib/faqs";
import { screenshotUrls } from "@/lib/screenshots";
import { allGuides } from "@/lib/guides";
import { R } from "@/lib/routes";
import type { ApkRelease } from "@/lib/versions";
import { REBORN, V2, variantApkPath, type AppVariant } from "@/lib/variants";

type Thing = Record<string, unknown>;

export type HowToData = {
  name: string;
  description: string;
  path: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
  /** Distinguishes multiple HowTo nodes on the same page. */
  fragment?: string;
  toolName?: string;
};

export function graph(nodes: Thing[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.map((node) => {
      const next = { ...node };
      delete next["@context"];
      return next;
    }),
  };
}

/**
 * Entities we want associated with this site in knowledge-graph terms. Kept
 * aligned with the entity vocabulary used in body copy.
 */
const KNOWS_ABOUT = [
  "StreamFlix Reborn",
  "StreamFlix 2.0",
  "Android application package",
  "Sideloading",
  "Android TV",
  "Google TV",
  "Amazon Fire TV",
  "Google Play Protect",
  "Apache License 2.0",
  "Digital Millennium Copyright Act",
  "Video streaming",
  "Subtitle",
  "Virtual private network",
];

export function organizationNode(): Thing {
  return {
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: PUBLISHER,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo.png"),
      caption: "StreamFlix APK Download",
    },
    ...(socialLinks.length ? { sameAs: socialLinks.map((item) => item.href) } : {}),
    description:
      "Independent documentation for the two Android apps published under the StreamFlix name: package specifications, install guides per device, version archives, and safety analysis.",
    knowsAbout: KNOWS_ABOUT,
  };
}

export function websiteNode(): Thing {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: SCHEMA_LANGUAGE,
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

/**
 * One node per app. Two StreamFlix apps exist, so a page describing both emits
 * two nodes with distinct `@id`s rather than one averaged node.
 *
 * `downloadUrl` is emitted only when the binary is actually staged — we never
 * advertise a file that would 404.
 */
export function softwareApplicationNode(input: {
  variant: AppVariant;
  pagePath: string;
  staged?: boolean;
  description?: string;
  installPath?: string;
}): Thing {
  const { variant, pagePath } = input;
  const node: Thing = {
    "@type": "SoftwareApplication",
    "@id": absoluteUrl(`${pagePath}#software-${variant.id}`),
    name: variant.name,
    alternateName: variant.shortName,
    identifier: variant.packageName,
    operatingSystem: "ANDROID",
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "Streaming",
    softwareVersion: variant.version,
    fileSize: variant.sizeLabel,
    softwareRequirements: `Android ${variant.minAndroid}`,
    datePublished: variant.releasedOn,
    dateModified: variant.releasedOn,
    author: { "@type": "Organization", name: variant.developer },
    license: variant.license,
    contentRating: variant.contentRating,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    publisher: { "@id": absoluteUrl("/#organization") },
    description: input.description ?? variant.description,
    url: absoluteUrl(pagePath),
    installUrl: absoluteUrl(input.installPath ?? `${R.home}#get-apk`),
    screenshot: screenshotUrls.map((src) => absoluteUrl(src)),
    ...(variant.sources.length
      ? { sameAs: variant.sources.map((source) => source.url) }
      : {}),
  };
  if (input.staged) {
    node.downloadUrl = absoluteUrl(variantApkPath(variant));
  }
  return node;
}

export function breadcrumbNode(items: { name: string; path: string }[]): Thing {
  return {
    "@type": "BreadcrumbList",
    "@id": absoluteUrl(`${items[items.length - 1]?.path ?? "/"}#breadcrumb`),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqNode(path: string, faqs: FaqItem[]): Thing {
  return {
    "@type": "FAQPage",
    "@id": absoluteUrl(`${path}#faq`),
    inLanguage: SCHEMA_LANGUAGE,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function authorPersonNode(): Thing {
  return {
    "@type": "Person",
    "@id": authorProfileUrl(),
    name: SITE_AUTHOR.name,
    alternateName: SITE_AUTHOR.shortName,
    jobTitle: SITE_AUTHOR.role,
    description: SITE_AUTHOR.description,
    url: authorProfileUrl(),
    image: absoluteUrl(SITE_AUTHOR.photo),
    knowsAbout: KNOWS_ABOUT,
    worksFor: { "@id": absoluteUrl("/#organization") },
  };
}

export function articleNode(input: {
  title: string;
  description: string;
  path: string;
}): Thing {
  return {
    "@type": "TechArticle",
    "@id": absoluteUrl(`${input.path}#article`),
    headline: input.title,
    description: input.description,
    dateModified: CONTENT_UPDATED,
    datePublished: DATE_PUBLISHED,
    image: absoluteUrl("/opengraph-image"),
    inLanguage: SCHEMA_LANGUAGE,
    author: { "@id": authorProfileUrl() },
    publisher: { "@id": absoluteUrl("/#organization") },
    mainEntityOfPage: absoluteUrl(input.path),
    isPartOf: { "@id": absoluteUrl("/#website") },
    // Answer-first blocks rendered by DirectAnswer / QuickSummary / Takeaways.
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".direct-answer", "#quick-summary-heading", "#takeaways-heading"],
    },
  };
}

export function howToNode(data: HowToData): Thing {
  return {
    "@type": "HowTo",
    "@id": absoluteUrl(`${data.path}#${data.fragment ?? "howto"}`),
    name: data.name,
    description: data.description,
    inLanguage: SCHEMA_LANGUAGE,
    totalTime: data.totalTime ?? "PT5M",
    tool: {
      "@type": "HowToTool",
      name: data.toolName ?? `${REBORN.name} v${REBORN.version}`,
    },
    step: data.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function releaseListNode(path: string, items: ApkRelease[]): Thing {
  return {
    "@type": "ItemList",
    "@id": absoluteUrl(`${path}#list`),
    name: "StreamFlix APK package archive",
    numberOfItems: items.length,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: items.map((release, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${release.variant === "reborn" ? REBORN.name : V2.name} ${release.label}`,
      description: `${release.catalogId}, ${release.sizeMb} MB, ${release.headline}`,
      url: absoluteUrl(`${path}#${release.catalogId}`),
    })),
  };
}

export function guideListNode(): Thing {
  return {
    "@type": "ItemList",
    "@id": absoluteUrl(`${R.guides}#list`),
    name: "StreamFlix guides",
    numberOfItems: allGuides.length,
    itemListElement: allGuides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.title,
      description: guide.summary,
      url: absoluteUrl(guide.href),
    })),
  };
}

/**
 * Head-to-head comparison table, emitted alongside the rendered `DataTable` on
 * cluster-E pages so the same comparison is machine-readable.
 */
export function comparisonTableNode(input: {
  path: string;
  name: string;
  description: string;
  items: { name: string; description: string }[];
  fragment?: string;
}): Thing {
  return {
    "@type": "ItemList",
    "@id": absoluteUrl(`${input.path}#${input.fragment ?? "comparison"}`),
    name: input.name,
    description: input.description,
    numberOfItems: input.items.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
    })),
  };
}
