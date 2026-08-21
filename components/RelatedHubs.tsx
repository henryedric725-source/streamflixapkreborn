import Link from "next/link";
import { hubCards } from "@/lib/guides";

export function RelatedHubs({ current }: { current: string }) {
  const items = hubCards.filter((hub) => hub.href !== current).slice(0, 5);
  return (
    <aside className="card-panel p-5">
      <p className="kicker">Other hubs</p>
      <p className="mt-2 text-sm text-zinc-400">
        One intent per URL \u2014 pick the hub that matches what you need next.
      </p>
      <ul className="mt-4 space-y-3">
        {items.map((hub) => (
          <li key={hub.href}>
            <Link href={hub.href} className="block hover:text-flame">
              <span className="font-medium text-paper">{hub.title}</span>
              <span className="mt-0.5 block text-xs text-zinc-400">
                {hub.summary}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
