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
import { allPosts, categoryOf } from "@/lib/blog";
import { citationsFor } from "@/lib/citations";
import { ALL_ENTITY_NAMES, entityRefs, type EntityKey } from "@/lib/entities";
import { R, isPostPath } from "@/lib/routes";
import type { ApkRelease } from "@/lib/versions";
import { REBORN, V2, type AppVariant } from "@/lib/variants";
import { STAGED_PACKAGE, stagedPackagePath } from "@/lib/package";

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
 * Topical scope. Derived from the grounded entity registry so `knowsAbout` can
 * never drift from the entities the pages actually mark up.
 */
const KNOWS_ABOUT = [REBORN.name, V2.name, ...ALL_ENTITY_NAMES];

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
    // The site serves one package, so both nodes point at the same file and at
    // its real size rather than the published figure for the app.
    node.downloadUrl = absoluteUrl(stagedPackagePath());
    node.fileSize = STAGED_PACKAGE.sizeLabel;
    node.fileFormat = "application/octet-stream";
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
    ...(SITE_AUTHOR.sameAs.length ? { sameAs: [...SITE_AUTHOR.sameAs] } : {}),
    worksFor: { "@id": absoluteUrl("/#organization") },
    mainEntityOfPage: absoluteUrl(R.about),
  };
}

/**
 * The WebPage wrapper. Distinct from the article: it describes the URL as a
 * document (its breadcrumb, primary image, language, dates) where the article
 * describes the content. Search engines use the pair together.
 */
export function webPageNode(input: {
  path: string;
  title: string;
  description: string;
  dateModified?: string;
  isCollection?: boolean;
}): Thing {
  return {
    "@type": input.isCollection ? "CollectionPage" : "WebPage",
    "@id": absoluteUrl(`${input.path}#webpage`),
    url: absoluteUrl(input.path),
    name: input.title,
    description: input.description,
    inLanguage: SCHEMA_LANGUAGE,
    isPartOf: { "@id": absoluteUrl("/#website") },
    breadcrumb: { "@id": absoluteUrl(`${input.path}#breadcrumb`) },
    primaryImageOfPage: { "@id": absoluteUrl(`${input.path}#primaryimage`) },
    datePublished: DATE_PUBLISHED,
    dateModified: input.dateModified ?? CONTENT_UPDATED,
    potentialAction: {
      "@type": "ReadAction",
      target: [absoluteUrl(input.path)],
    },
  };
}

/** Primary image node, referenced by WebPage and Article. */
export function primaryImageNode(input: {
  path: string;
  url: string;
  width: number;
  height: number;
  caption: string;
}): Thing {
  return {
    "@type": "ImageObject",
    "@id": absoluteUrl(`${input.path}#primaryimage`),
    url: absoluteUrl(input.url),
    contentUrl: absoluteUrl(input.url),
    width: input.width,
    height: input.height,
    caption: input.caption,
  };
}

/** The Blog node for the post index, listing every article as a blogPost. */
export function blogNode(): Thing {
  return {
    "@type": "Blog",
    "@id": absoluteUrl(`${R.blog}#blog`),
    url: absoluteUrl(R.blog),
    name: `${SITE_NAME} blog`,
    description:
      "Articles documenting the two Android applications published under the StreamFlix name.",
    inLanguage: SCHEMA_LANGUAGE,
    publisher: { "@id": absoluteUrl("/#organization") },
    blogPost: allPosts.map((post) => ({
      "@type": "BlogPosting",
      "@id": absoluteUrl(`${post.href}#article`),
      headline: post.title,
      description: post.summary,
      url: absoluteUrl(post.href),
    })),
  };
}

/**
 * VideoObject for a third-party walkthrough. Marked up because the video is a
 * genuine supporting resource for the install pages, not to claim authorship.
 */
export function videoNode(input: {
  path: string;
  name: string;
  description: string;
  embedUrl: string;
  uploadDate: string;
  thumbnailUrl: string;
}): Thing {
  return {
    "@type": "VideoObject",
    "@id": absoluteUrl(`${input.path}#video`),
    name: input.name,
    description: input.description,
    embedUrl: input.embedUrl,
    uploadDate: input.uploadDate,
    thumbnailUrl: input.thumbnailUrl,
    inLanguage: SCHEMA_LANGUAGE,
  };
}

export function articleNode(input: {
  title: string;
  description: string;
  path: string;
  /** ISO date this page's facts were last reviewed. */
  dateModified?: string;
  /** Primary subject entities — 1 to 3. */
  about?: readonly EntityKey[];
  /** Supporting entities the page discusses substantively. */
  mentions?: readonly EntityKey[];
  wordCount?: number;
}): Thing {
  const isPost = isPostPath(input.path);
  const category = categoryOf(input.path);
  const citations = citationsFor(input.path);
  return {
    // BlogPosting for articles under /post, TechArticle for the hub and index.
    "@type": isPost ? ["TechArticle", "BlogPosting"] : "TechArticle",
    "@id": absoluteUrl(`${input.path}#article`),
    headline: input.title,
    description: input.description,
    dateModified: input.dateModified ?? CONTENT_UPDATED,
    datePublished: DATE_PUBLISHED,
    image: { "@id": absoluteUrl(`${input.path}#primaryimage`) },
    thumbnailUrl: absoluteUrl("/opengraph-image"),
    inLanguage: SCHEMA_LANGUAGE,
    author: { "@id": authorProfileUrl() },
    creator: { "@id": authorProfileUrl() },
    publisher: { "@id": absoluteUrl("/#organization") },
    mainEntityOfPage: { "@id": absoluteUrl(`${input.path}#webpage`) },
    isPartOf: isPost
      ? { "@id": absoluteUrl(`${R.blog}#blog`) }
      : { "@id": absoluteUrl("/#website") },
    ...(category ? { articleSection: category.name } : {}),
    ...(input.wordCount ? { wordCount: input.wordCount } : {}),
    // Entity grounding: `about` and `mentions` carry sameAs pointers to the
    // canonical Wikipedia/Wikidata records, so the topic is unambiguous.
    ...(input.about?.length ? { about: entityRefs(input.about) } : {}),
    ...(input.mentions?.length ? { mentions: entityRefs(input.mentions) } : {}),
    // Sources every factual claim on the page traces back to.
    citation: citations.map((source) => ({
      "@type": "CreativeWork",
      name: source.title,
      url: source.url,
      publisher: { "@type": "Organization", name: source.publisher },
    })),
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

export function blogListNode(): Thing {
  return {
    "@type": "ItemList",
    "@id": absoluteUrl(`${R.blog}#list`),
    name: "StreamFlix articles",
    numberOfItems: allPosts.length,
    itemListElement: allPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      description: post.summary,
      url: absoluteUrl(post.href),
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
