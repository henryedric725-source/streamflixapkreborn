import type { ReactNode } from "react";
import { ArticleShell } from "@/components/ArticleShell";
import { AuthorSection } from "@/components/AuthorSection";
import { FaqList } from "@/components/FaqList";
import {
  PageSchema,
  type ComparisonSpec,
  type SoftwareSpec,
  type VideoSpec,
} from "@/components/JsonLd";
import { DirectAnswer } from "@/components/PageIntro";
import { RelatedHubs } from "@/components/RelatedHubs";
import { Toc } from "@/components/Toc";
import { Takeaways } from "@/components/ContentBlocks";
import type { FaqItem } from "@/lib/faqs";
import type { EntityKey } from "@/lib/entities";
import { L, linkLabel } from "@/lib/links";
import { R, isPostPath } from "@/lib/routes";
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
  video,
  about,
  mentions,
  dateModified,
  primaryImage,
  isCollection,
  blogList,
  blog,
  featureAside,
  leadContent,
  downloadVariant,
  showDownload = true,
  /** Author box: posts and About by default; never on the download hub. */
  showAuthor,
  showRelatedHubs = true,
  showRelatedArticles = true,
  showImportantPages = true,
  showToc = true,
  showShare = true,
  showTrustBar = true,
  fullWidth = false,
  contentClassName = "prose-hub max-w-none",
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
  video?: VideoSpec;
  /** Primary subject entities. Grounded with sameAs in lib/entities.ts. */
  about?: readonly EntityKey[];
  mentions?: readonly EntityKey[];
  /** ISO date this page's facts were last reviewed. */
  dateModified?: string;
  primaryImage?: { url: string; width: number; height: number; caption: string };
  isCollection?: boolean;
  blogList?: boolean;
  blog?: boolean;
  featureAside?: ReactNode;
  leadContent?: ReactNode;
  downloadVariant?: AppVariant;
  showDownload?: boolean;
  showAuthor?: boolean;
  showRelatedHubs?: boolean;
  showRelatedArticles?: boolean;
  showImportantPages?: boolean;
  showToc?: boolean;
  showShare?: boolean;
  showTrustBar?: boolean;
  fullWidth?: boolean;
  contentClassName?: string;
  children: ReactNode;
}) {
  const crumbs = breadcrumbsFor(path, h1);
  const authorVisible =
    showAuthor ?? (isPostPath(path) || path === R.about);
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
        video={video}
        about={about}
        mentions={mentions}
        dateModified={dateModified}
        primaryImage={primaryImage}
        isCollection={isCollection}
        blogList={blogList}
        blog={blog}
      />
      <ArticleShell
        crumbs={crumbs}
        currentPath={path}
        shareTitle={h1}
        featureAside={featureAside}
        leadContent={leadContent}
        downloadVariant={downloadVariant}
        showDownload={showDownload}
        showRelatedArticles={showRelatedArticles}
        showImportantPages={showImportantPages}
        showShare={showShare}
        showTrustBar={showTrustBar}
        fullWidth={fullWidth}
        intro={<DirectAnswer kicker={kicker} title={h1} answer={answer} />}
      >
        {showToc ? <Toc items={toc} /> : null}
        <div className={contentClassName}>{children}</div>
        {takeaways.length > 0 ? <Takeaways items={takeaways} /> : null}
        {faqs.length > 0 ? <FaqList items={faqs} /> : null}
        {authorVisible ? (
          <AuthorSection reviewedOn={dateModified} path={path} />
        ) : null}
        {showRelatedHubs ? (
          <div className="mt-10">
            <RelatedHubs current={path} />
          </div>
        ) : null}
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

  // Articles live under /post, so their trail passes through the blog index.
  if (isPostPath(path)) {
    return [
      home,
      { name: linkLabel("blog", "breadcrumb"), href: R.blog },
      { name, href: path },
    ];
  }
  return [home, { name, href: path }];
}
