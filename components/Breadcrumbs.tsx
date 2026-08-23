import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-zinc-400">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 && <span aria-hidden>/</span>}
            {index === items.length - 1 ? (
              <span className="text-paper" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link className="hover:text-flame" href={item.href}>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
