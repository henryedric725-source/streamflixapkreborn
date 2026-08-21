import type { ReactNode } from "react";
import { ArticleShell } from "@/components/ArticleShell";
import { AuthorSection } from "@/components/AuthorSection";
import { FaqList } from "@/components/FaqList";
import { PageSchema, type ComparisonSpec, type SoftwareSpec } from "@/components/JsonLd";
import { DirectAnswer } from "@/components/PageIntro";
import { RelatedHubs } from "@/components/RelatedHubs";
import { Toc } from "@/components/Toc";
import { Takeaways } from "@/components/ContentBlocks";
import type { FaqItem } from "@/lib/faqs";
import { L, linkLabel } from "@/lib/links";
import { R } from "@/lib/routes";
import type { HowToData } from "@/lib/schema";
import type { AppVariant } from "@/lib/variants";
import type { ApkRelease } from "@/lib/versions";

export type TocItem = { href: string; label: string };

/**
 * The shared skeleton every cluster page uses.
 *
 * It guarantees each page ships the full AEO surface in the same order —
 * DirectAnswer (the speakable answer-first block), a scroll-spy TOC, the body,
 * Takeaways, an FAQ that mirrors the FAQPage JSON-LD, the author box, and
 * cross-cluster hubs — so no page can accidentally ship thin.
 */
export function ClusterPage({
  path,
  title,
  description,
  kicker,
  h1,
  answer,
  toc,
  faqs,
  takeaways,
  software,
  howTo,
  howTos,
  releases,
  comparison,
  guideList,
  featureAside,
  leadContent,
  downloadVariant,
  showDownload = true,
  children,
}: {
  path: string;
  title: string;
  description: string;
  kicker: string;
  h1: string;
  /** 40–55 words, answer-first. Targeted by the speakable selector. */
  answer: string;
  toc: TocItem[];
  faqs: FaqItem[];
  takeaways: string[];
  software?: SoftwareSpec[];
  howTo?: HowToData;
  howTos?: HowToData[];
  releases?: ApkRelease[];
  comparison?: ComparisonSpec;
  guideList?: boolean;
  featureAside?: ReactNode;
  leadContent?: ReactNode;
  downloadVariant?: AppVariant;
  showDownload?: boolean;
  children: ReactNode;
}) {
  const crumbs = breadcrumbsFor(path, h1);
  return (
    <>
      <PageSchema
        path={path}
        title={title}
        description={description}
        crumbs={crumbs.map((item) => ({ name: item.name, path: item.href }))}
        faqs={faqs}
        software={software}
        howTo={howTo}
        howTos={howTos}
        releases={releases}
        comparison={comparison}
        guideList={guideList}
      />
      <ArticleShell
        crumbs={crumbs}
        currentPath={path}
        shareTitle={h1}
        featureAside={featureAside}
        leadContent={leadContent}
        downloadVariant={downloadVariant}
        showDownload={showDownload}
        intro={<DirectAnswer kicker={kicker} title={h1} answer={answer} />}
      >
        <Toc items={toc} />
        <div className="prose-hub max-w-none">{children}</div>
        <Takeaways items={takeaways} />
        <FaqList items={faqs} />
        <AuthorSection />
        <div className="mt-10">
          <RelatedHubs current={path} />
        </div>
      </ArticleShell>
    </>
  );
}

/**
 * Breadcrumb trail derived from the route registry rather than hand-written per
 * page, so a trail can never disagree with the link registry's anchor text.
 */
export function breadcrumbsFor(path: string, fallbackName: string) {
  const home = { name: linkLabel("downloadHub", "breadcrumb"), href: R.home };
  if (path === R.home) return [home];

  const entry = Object.values(L).find((def) => def.href === path);
  const name =
    (entry?.labels as { breadcrumb?: string } | undefined)?.breadcrumb ??
    fallbackName;
  return [home, { name, href: path }];
}
