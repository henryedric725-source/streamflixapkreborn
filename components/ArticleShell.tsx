import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DownloadCard } from "@/components/DownloadCta";
import { ShareRail } from "@/components/ShareRail";
import { ImportantPages, RelatedArticles } from "@/components/SidebarLinks";
import { TrustBar } from "@/components/PageIntro";
import { isPackageStaged } from "@/lib/releases";
import { REBORN, type AppVariant } from "@/lib/variants";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

const bodyGrid =
  "grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]";

export function ArticleShell({
  crumbs,
  currentPath,
  children,
  intro,
  leadContent,
  showDownload = true,
  showImportantPages = true,
  showRelatedArticles = true,
  featureAside,
  shareTitle,
  showShare = true,
  showTrustBar = true,
  downloadVariant = REBORN,
  /** Single-column hub layout — no sidebar cards. Used for /blog. */
  fullWidth = false,
}: {
  crumbs: { name: string; href: string }[];
  currentPath: string;
  children: React.ReactNode;
  intro?: React.ReactNode;
  leadContent?: React.ReactNode;
  showDownload?: boolean;
  showImportantPages?: boolean;
  showRelatedArticles?: boolean;
  featureAside?: React.ReactNode;
  shareTitle?: string;
  showShare?: boolean;
  showTrustBar?: boolean;
  downloadVariant?: AppVariant;
  fullWidth?: boolean;
}) {
  const staged = isPackageStaged();
  const shareUrl = absoluteUrl(currentPath);
  const shareLabel =
    shareTitle ?? crumbs[crumbs.length - 1]?.name ?? SITE_NAME;

  const hasSidebar =
    !fullWidth &&
    (Boolean(featureAside && !intro && !leadContent) ||
      showDownload ||
      showRelatedArticles ||
      showImportantPages);

  const sidebarCards = (
    <>
      {!intro && !leadContent && featureAside ? featureAside : null}
      {showDownload ? <DownloadCard variant={downloadVariant} staged={staged} /> : null}
      {showRelatedArticles ? (
        <RelatedArticles current={currentPath} />
      ) : null}
      {showImportantPages ? <ImportantPages current={currentPath} /> : null}
    </>
  );

  const linkSidebar = (
    <aside className="space-y-5 lg:sticky lg:top-[5.5rem] lg:self-start">
      {sidebarCards}
    </aside>
  );

  const deferredSidebar = (
    <aside className="order-2 space-y-5 lg:order-3 lg:sticky lg:top-[5.5rem] lg:col-start-2 lg:row-start-2 lg:self-start">
      {sidebarCards}
    </aside>
  );

  const body = fullWidth ? (
    <article className="min-w-0">{children}</article>
  ) : leadContent ? (
    <>
      <div className="mt-10">{leadContent}</div>
      <div className={`mt-10 ${bodyGrid}`}>
        <article className="order-3 min-w-0 lg:order-2 lg:col-start-1 lg:row-start-2">
          {children}
        </article>
        {deferredSidebar}
      </div>
    </>
  ) : (
    <div className={`${intro ? "mt-10" : "mt-6"} ${hasSidebar ? bodyGrid : ""}`}>
      <article className="min-w-0">{children}</article>
      {hasSidebar ? linkSidebar : null}
    </div>
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <div className={showShare ? "share-page-shell" : undefined}>
        <div className={`min-w-0 ${showShare ? "share-page-content pr-12 sm:pr-0" : ""}`}>
          <Breadcrumbs items={crumbs} />
          {intro ? (
            <div
              className={
                featureAside && !fullWidth
                  ? `mt-6 ${bodyGrid}`
                  : "mt-6"
              }
            >
              <div className="min-w-0">{intro}</div>
              {featureAside && !fullWidth ? (
                <div className="lg:self-start">{featureAside}</div>
              ) : null}
            </div>
          ) : null}
          {fullWidth ? (
            <div className={intro ? "mt-8" : "mt-6"}>{body}</div>
          ) : (
            body
          )}
          {showTrustBar ? (
            <div className="mt-10 border-t border-line pt-4">
              <TrustBar />
            </div>
          ) : null}
        </div>
        {showShare ? <ShareRail url={shareUrl} title={shareLabel} /> : null}
      </div>
    </div>
  );
}
