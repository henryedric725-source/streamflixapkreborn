import type { Metadata } from "next";
import Link from "next/link";
import { ClusterPage } from "@/components/ClusterPage";
import { InternalLink } from "@/components/InternalLink";
import { postCategories, allPosts } from "@/lib/blog";
import { blogIndexFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import { CONTENT_UPDATED_DISPLAY } from "@/lib/site";

const TITLE = "StreamFlix Blog: Every Guide and Article";
const DESCRIPTION = `Every StreamFlix article on this site — ${allPosts.length} posts covering both apps, install per device, troubleshooting, safety, legality and alternatives.`;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.blog,
  dateModified: "2026-08-22",
  keywords: [
    "streamflix blog",
    "streamflix guides",
    "streamflix articles",
    "streamflix help",
    "streamflix tutorials",
  ],
});

const toc = postCategories.map((category) => ({
  href: `#${category.id}`,
  label: category.name,
}));

export default function BlogPage() {
  return (
    <ClusterPage
      path={R.blog}
      title={TITLE}
      description={DESCRIPTION}
      about={["streaming", "apk"]}
      mentions={["android", "sideloading", "androidTv"]}
      dateModified="2026-08-22"
      kicker="Blog"
      h1="StreamFlix Blog: Every Article, Grouped by What You Need"
      answer={`${allPosts.length} articles across five categories: which of the two StreamFlix apps you have, how to install on each device class, what to do when it stops working, the safety and legality questions worth asking, and how it compares with everything else.`}
      toc={toc}
      faqs={blogIndexFaqs}
      blogList
      blog
      isCollection
      takeaways={[
        "One post per question. Nothing important is buried inside an article about something else.",
        "Start with the download hub if you are not sure which of the two StreamFlix apps you want.",
        "Device posts cover only the method that device actually supports — including the ones where the answer is no.",
        "The troubleshooting post is ordered by what resolves problems most often, not alphabetically.",
        "Safety, legality and privacy are three separate questions and have three separate posts.",
      ]}
    >
      <h2 id="start">Where to start</h2>
      <p>
        If you have not installed anything yet, begin at the{" "}
        <InternalLink intent="downloadHub" currentPath={R.blog} />. It covers
        both apps side by side, which matters more than it sounds: two unrelated
        Android apps ship under the StreamFlix name, and most advice online
        conflates them into one wrong specification table.
      </p>
      <p>
        If something is already installed and misbehaving, go straight to{" "}
        <InternalLink intent="notWorking" currentPath={R.blog} />.
      </p>
      <p className="text-sm text-zinc-400">
        All {allPosts.length} posts were last reviewed{" "}
        {CONTENT_UPDATED_DISPLAY}. Subscribe via{" "}
        <a href="/blog/rss.xml">RSS</a>.
      </p>

      {postCategories.map((category) => (
        <section key={category.id}>
          <h2 id={category.id}>{category.name}</h2>
          <p>{category.blurb}</p>
          <ul className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
            {category.posts.map((post) => (
              <li key={post.href}>
                <Link
                  href={post.href}
                  className="block h-full rounded-xl border border-line bg-panel px-4 py-4 transition hover:border-flame"
                >
                  <span className="block text-sm font-semibold leading-snug text-paper">
                    {post.title}
                  </span>
                  <span className="mt-1.5 block text-xs leading-5 text-zinc-400">
                    {post.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <h2 id="how-organised">How this blog is organised</h2>
      <p>
        One post per search intent, deliberately. Where two topics would compete
        for the same question, the weaker one lives as a section on the stronger
        post rather than as its own thin URL — which is why there is no separate
        article for, say, &ldquo;StreamFlix unknown sources&rdquo;: it belongs
        inside <InternalLink intent="install" currentPath={R.blog} />.
      </p>
      <p>
        Every post states its facts with the app they belong to. StreamFlix
        Reborn and StreamFlix 2.0 have different versions, sizes, licences and
        capabilities, and a figure without an app name attached is not useful.
        Our sourcing and testing method is set out on{" "}
        <InternalLink intent="about" currentPath={R.blog} />.
      </p>
    </ClusterPage>
  );
}
