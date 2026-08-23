import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import {
  BlogCategoryList,
  BlogCategoryNav,
  BlogIndexFooter,
  BlogQuickStart,
} from "@/components/BlogIndex";
import { allPosts, postCategories } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";

const TITLE = "StreamFlix Guides & Tutorials";
const DESCRIPTION = `${allPosts.length} StreamFlix guides: install, Firestick, Android TV, troubleshooting, safety, legality, and alternatives — one article per question.`;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.blog,
  dateModified: "2026-08-22",
  keywords: [
    "streamflix guides",
    "streamflix tutorials",
    "streamflix help",
    "streamflix blog",
    "streamflix articles",
  ],
});

const toc = [
  { href: "#start", label: "Popular starting points" },
  ...postCategories.map((category) => ({
    href: `#${category.id}`,
    label: category.name,
  })),
];

export default function BlogPage() {
  return (
    <ClusterPage
      path={R.blog}
      title={TITLE}
      description={DESCRIPTION}
      about={["streaming", "apk"]}
      mentions={["android", "sideloading", "androidTv"]}
      dateModified="2026-08-22"
      kicker="Help center"
      h1="StreamFlix Guides & Tutorials"
      answer={`${allPosts.length} guides for install, Firestick, Android TV, fixes, safety, and alternatives. Pick a category below — each article answers one question.`}
      toc={toc}
      faqs={[]}
      blogList
      blog
      isCollection
      takeaways={[]}
      showAuthor={false}
      showRelatedHubs={false}
      showRelatedArticles={false}
      showImportantPages={false}
      showDownload={false}
      showToc={false}
      showShare={false}
      showTrustBar={false}
      fullWidth
      contentClassName="max-w-none"
    >
      <BlogQuickStart />
      <div className="mt-10">
        <BlogCategoryNav />
      </div>
      <BlogCategoryList />
      <BlogIndexFooter postCount={allPosts.length} />
    </ClusterPage>
  );
}
