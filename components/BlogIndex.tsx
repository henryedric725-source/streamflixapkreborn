import Link from "next/link";
import { ArrowUpRight, Download, Smartphone, Wrench } from "lucide-react";
import { InternalLink } from "@/components/InternalLink";
import { postCategories, type PostCategory } from "@/lib/blog";
import { L } from "@/lib/links";
import { R } from "@/lib/routes";
import { CONTENT_UPDATED_DISPLAY } from "@/lib/site";

const quickStart = [
  {
    intent: "downloadHub" as const,
    icon: Download,
    title: "Download hub",
    note: "Pick Reborn or StreamFlix 2.0",
  },
  {
    intent: "install" as const,
    icon: Smartphone,
    title: "Install on Android",
    note: "Unknown sources and verification",
  },
  {
    intent: "notWorking" as const,
    icon: Wrench,
    title: "Fix playback issues",
    note: "No sources, buffering, crashes",
  },
];

export function BlogCategoryNav() {
  return (
    <nav
      aria-label="Guide categories"
      className="flex flex-wrap gap-2 border-b border-line pb-6"
    >
      {postCategories.map((category) => (
        <a
          key={category.id}
          href={`#${category.id}`}
          className="rounded-full border border-line bg-panel px-3.5 py-1.5 text-sm text-zinc-300 transition hover:border-flame/50 hover:text-paper"
        >
          {category.name}
          <span className="ml-1.5 text-zinc-500">({category.posts.length})</span>
        </a>
      ))}
    </nav>
  );
}

function CategoryBlock({ category }: { category: PostCategory }) {
  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line pb-3">
        <div>
          <h2 className="font-serif text-2xl text-paper">{category.name}</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-400">
            {category.blurb}
          </p>
        </div>
        <span className="rounded-full border border-line bg-panel-2 px-3 py-1 text-xs font-medium text-zinc-400">
          {category.posts.length} guides
        </span>
      </div>

      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {category.posts.map((post) => (
          <li key={post.href}>
            <Link
              href={post.href}
              className="group flex h-full min-h-[11rem] flex-col rounded-xl border border-line bg-panel/70 p-4 transition hover:border-flame/60 hover:bg-panel"
            >
              <span className="line-clamp-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                {post.intent}
              </span>
              <span className="mt-2 line-clamp-2 font-medium leading-snug text-paper group-hover:text-flame">
                {post.title}
              </span>
              <span className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-zinc-400">
                {post.summary}
              </span>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-flame">
                Read guide
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function BlogQuickStart() {
  return (
    <section id="start" className="scroll-mt-24">
      <h2 className="font-serif text-xl text-paper">Popular starting points</h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
        New here? Start with one of these three pages before opening a
        device-specific guide.
      </p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-3">
        {quickStart.map(({ intent, icon: Icon, title, note }) => (
          <li key={intent}>
            <Link
              href={L[intent].href}
              className="flex h-full flex-col rounded-xl border border-line bg-panel/70 p-4 transition hover:border-flame/60 hover:bg-panel"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-flame/15 text-flame">
                <Icon className="h-4 w-4" aria-hidden strokeWidth={2} />
              </span>
              <span className="mt-3 font-medium text-paper">{title}</span>
              <span className="mt-1 text-sm text-zinc-400">{note}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function BlogCategoryList() {
  return (
    <div className="mt-10 space-y-12">
      {postCategories.map((category) => (
        <CategoryBlock key={category.id} category={category} />
      ))}
    </div>
  );
}

export function BlogIndexFooter({ postCount }: { postCount: number }) {
  return (
    <p className="mt-10 border-t border-line pt-6 text-sm text-zinc-500">
      {postCount} guides · Last reviewed {CONTENT_UPDATED_DISPLAY} ·{" "}
      <InternalLink intent="about" context="generic" currentPath={R.blog} />
    </p>
  );
}
