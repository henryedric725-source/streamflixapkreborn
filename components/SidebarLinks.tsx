import Link from "next/link";
import { BookOpen, LayoutGrid } from "lucide-react";
import { L, linkLabel } from "@/lib/links";
import { importantPages, relatedArticles } from "@/lib/related";

function LinkCard({
  title,
  icon,
  accent,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="relative overflow-hidden rounded-2xl border border-line bg-panel/80 py-5 pl-5 pr-4 shadow-sm">
      <div
        className={`absolute bottom-0 left-0 top-0 w-1 rounded-l ${accent}`}
        aria-hidden
      />
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-flame/15 text-flame">
          {icon}
        </span>
        <p className="text-sm font-bold uppercase tracking-wider text-paper">
          {title}
        </p>
      </div>
      {children}
    </aside>
  );
}

export function RelatedArticles({ current }: { current: string }) {
  const items = relatedArticles(current).filter((item) => item.href !== current);
  if (!items.length) return null;
  return (
    <LinkCard
      title="Related articles"
      accent="bg-gradient-to-b from-flame to-flame-dark"
      icon={<BookOpen className="h-5 w-5" aria-hidden strokeWidth={2} />}
    >
      <nav aria-label="Related articles">
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg px-2 py-1.5 text-sm leading-snug text-zinc-400 transition-colors hover:bg-line/70 hover:text-flame"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 px-2 text-sm">
          <Link
            href={L.blog.href}
            className="font-medium text-flame underline-offset-2 hover:text-kicker hover:underline"
          >
            {linkLabel("blog", "sidebar")}
          </Link>
        </p>
      </nav>
    </LinkCard>
  );
}

export function ImportantPages({ current }: { current: string }) {
  const items = importantPages.filter((item) => item.href !== current);
  if (!items.length) return null;
  return (
    <LinkCard
      title="Important pages"
      accent="bg-gradient-to-b from-flame-dark to-flame-dark"
      icon={<LayoutGrid className="h-5 w-5" aria-hidden strokeWidth={2} />}
    >
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-lg px-2 py-1.5 transition-colors hover:bg-line/70"
            >
              <span className="block text-sm font-medium text-paper/90">
                {item.title}
              </span>
              {"note" in item && item.note ? (
                <span className="block text-xs text-zinc-500">{item.note}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </LinkCard>
  );
}
