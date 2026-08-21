import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DownloadCard } from "@/components/DownloadCta";
import { ShareRail } from "@/components/ShareRail";
import { ImportantPages, RelatedArticles } from "@/components/SidebarLinks";
import { TrustBar } from "@/components/PageIntro";
import { isVariantStaged } from "@/lib/releases";
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
  featureAside,
  shareTitle,
  showShare = true,
  showTrustBar = true,
  downloadVariant = REBORN,
}: {
  crumbs: { name: string; href: string }[];
  currentPath: string;
  children: React.ReactNode;
  intro?: React.ReactNode;
  leadContent?: React.ReactNode;
  showDownload?: boolean;
  showImportantPages?: boolean;
  featureAside?: React.ReactNode;
  shareTitle?: string;
  showShare?: boolean;
  showTrustBar?: boolean;
  /** Which app the sidebar download card advertises. Defaults to Reborn. */
  downloadVariant?: AppVariant;
}) {
  const staged = isVariantStaged(downloadVariant);
  const shareUrl = absoluteUrl(currentPath);
  const shareLabel =
    shareTitle ?? crumbs[crumbs.length - 1]?.name ?? SITE_NAME;

  const sidebarCards = (
    <>
      {!intro && !leadContent && featureAside ? featureAside : null}
      {showDownload ? <DownloadCard variant={downloadVariant} staged={staged} /> : null}
      <RelatedArticles current={currentPath} />
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

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <div className="share-page-shell">
        <div className="share-page-content min-w-0 pr-12 sm:pr-0">
          <Breadcrumbs items={crumbs} />
          {intro ? (
            <div
              className={
                featureAside
                  ? `mt-6 ${bodyGrid}`
                  : "mt-6"
              }
            >
              <div className="min-w-0">{intro}</div>
              {featureAside ? (
                <div className="lg:self-start">{featureAside}</div>
              ) : null}
            </div>
          ) : null}
          {leadContent ? (
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
            <div className={`${intro ? "mt-10" : "mt-6"} ${bodyGrid}`}>
              <article className="min-w-0">{children}</article>
              {linkSidebar}
            </div>
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
