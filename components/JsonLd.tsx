import {
  articleNode,
  authorPersonNode,
  breadcrumbNode,
  comparisonTableNode,
  faqNode,
  graph,
  guideListNode,
  howToNode,
  releaseListNode,
  softwareApplicationNode,
  type HowToData,
} from "@/lib/schema";
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
  guideList = false,
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
  guideList?: boolean;
  article?: boolean;
}) {
  const nodes = article
    ? [articleNode({ title, description, path }), authorPersonNode()]
    : [];
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
  if (guideList) nodes.push(guideListNode());
  return <JsonLd data={graph(nodes)} />;
}
