import type { ReactNode } from "react";
import { ArticleShell } from "@/components/ArticleShell";
import { PageSchema } from "@/components/JsonLd";
import { LegalRelatedPolicies } from "@/components/LegalRelatedPolicies";
import { LEGAL_UPDATED, LEGAL_UPDATED_DISPLAY } from "@/lib/site";
import { linkLabel } from "@/lib/links";
import { R } from "@/lib/routes";

/**
 * Shared shell for the four legal pages. All are `noIndex` and excluded from
 * the sitemap, so they carry no article schema, no FAQ, and no download card.
 */
export function LegalPage({
  path,
  title,
  description,
  crumbName,
  children,
}: {
  path: string;
  title: string;
  description: string;
  crumbName: string;
  children: ReactNode;
}) {
  const crumbs = [
    { name: linkLabel("downloadHub", "breadcrumb"), href: R.home },
    { name: crumbName, href: path },
  ];
  return (
    <>
      <PageSchema
        path={path}
        title={title}
        description={description}
        article={false}
        crumbs={crumbs.map((item) => ({ name: item.name, path: item.href }))}
      />
      <ArticleShell
        crumbs={crumbs}
        currentPath={path}
        showDownload={false}
        showTrustBar={false}
        showShare={false}
      >
        <p className="kicker">Legal</p>
        <h1 className="mt-3 font-serif text-4xl text-paper">{title}</h1>
        <p className="mt-3 text-sm text-zinc-400">
          Last updated:{" "}
          <time dateTime={LEGAL_UPDATED}>{LEGAL_UPDATED_DISPLAY}</time>
        </p>
        <div className="prose-hub max-w-none">{children}</div>
        <LegalRelatedPolicies current={path} />
      </ArticleShell>
    </>
  );
}
