"use client";

import { useEffect, useMemo, useState } from "react";
import { ListTree } from "lucide-react";

export function Toc({ items }: { items: { href: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.href ?? "");
  const idKey = items.map((item) => item.href.replace("#", "")).join("|");
  const ids = useMemo(() => (idKey ? idKey.split("|") : []), [idKey]);

  useEffect(() => {
    const headings = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const id = visible[0]?.target.id;
        if (id) setActive(`#${id}`);
      },
      { rootMargin: "-18% 0px -72% 0px", threshold: [0, 1] },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [ids]);

  return (
    <nav aria-label="On this page" className="page-index mt-8 mb-10">
      <div className="page-index-head">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-flame/15 text-flame">
          <ListTree className="h-5 w-5" aria-hidden strokeWidth={2} />
        </span>
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-paper">
            Contents
          </p>
          <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
            {String(items.length).padStart(2, "0")} sections
          </p>
        </div>
      </div>
      <ol className="page-index-list">
        {items.map((item, index) => {
          const current = item.href === active;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={current ? "is-active" : undefined}
                aria-current={current ? "location" : undefined}
              >
                <span className="page-index-num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="page-index-label">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
