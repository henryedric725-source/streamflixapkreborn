import {
  articleNode,
  authorPersonNode,
  blogListNode,
  blogNode,
  breadcrumbNode,
  comparisonTableNode,
  faqNode,
  graph,
  howToNode,
  primaryImageNode,
  releaseListNode,
  softwareApplicationNode,
  videoNode,
  webPageNode,
  type HowToData,
} from "@/lib/schema";
import type { EntityKey } from "@/lib/entities";
import { screenshots } from "@/lib/screenshots";
import type { FaqItem } from "@/lib/faqs";
import type { ApkRelease } from "@/lib/versions";
import type { AppVariant } from "@/lib/variants";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export type SoftwareSpec = {
  variant: AppVariant;
  staged?: boolean;
  description?: string;
  installPath?: string;
};

export type ComparisonSpec = {
  name: string;
  description: string;
  items: { name: string; description: string }[];
  fragment?: string;
};

/**
 * Composes one `@graph` per page.
 *
 * `software` takes an array because a page may describe both StreamFlix apps;
 * each gets its own node keyed by variant id, so the `@id`s stay unique.
 */
export type VideoSpec = {
  name: string;
  description: string;
  embedUrl: string;
  uploadDate: string;
  thumbnailUrl: string;
};

export function PageSchema({
  path,
  title,
  description,
  crumbs,
  faqs,
  software,
  howTo,
  howTos,
  releases,
  comparison,
  video,
  about,
  mentions,
  dateModified,
  primaryImage,
  isCollection = false,
  blogList = false,
  blog = false,
  article = true,
}: {
  path: string;
  title: string;
  description: string;
  crumbs?: { name: string; path: string }[];
  faqs?: FaqItem[];
  software?: SoftwareSpec[];
  howTo?: HowToData;
  howTos?: HowToData[];
  releases?: ApkRelease[];
  comparison?: ComparisonSpec;
  video?: VideoSpec;
  /** Primary subject entities, grounded with sameAs in lib/entities.ts. */
  about?: readonly EntityKey[];
  mentions?: readonly EntityKey[];
  dateModified?: string;
  primaryImage?: { url: string; width: number; height: number; caption: string };
  isCollection?: boolean;
  blogList?: boolean;
  blog?: boolean;
  article?: boolean;
}) {
  const image = primaryImage ?? {
    url: screenshots.home.src,
    width: screenshots.home.width,
    height: screenshots.home.height,
    caption: screenshots.home.alt,
  };
  const nodes: Record<string, unknown>[] = [
    webPageNode({ path, title, description, dateModified, isCollection }),
    primaryImageNode({ path, ...image }),
  ];
  if (article) {
    nodes.push(
      articleNode({ title, description, path, dateModified, about, mentions }),
      authorPersonNode(path),
    );
  }
  if (crumbs && crumbs.length > 0) nodes.push(breadcrumbNode(crumbs));
  if (faqs?.length) nodes.push(faqNode(path, faqs));
  for (const spec of software ?? []) {
    nodes.push(
      softwareApplicationNode({
        variant: spec.variant,
        pagePath: path,
        staged: spec.staged,
        description: spec.description,
        installPath: spec.installPath,
      }),
    );
  }
  if (howTo) nodes.push(howToNode(howTo));
  for (const item of howTos ?? []) nodes.push(howToNode(item));
  if (releases?.length) nodes.push(releaseListNode(path, releases));
  if (comparison) nodes.push(comparisonTableNode({ path, ...comparison }));
  if (video) nodes.push(videoNode({ path, ...video }));
  if (blog) nodes.push(blogNode());
  if (blogList) nodes.push(blogListNode());
  return <JsonLd data={graph(nodes)} />;
}
