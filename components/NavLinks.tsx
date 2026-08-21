"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks({
  items,
  className,
  linkClassName,
}: {
  items: readonly { href: string; label: string }[];
  className?: string;
  linkClassName?: string;
}) {
  const pathname = usePathname();
  return (
    <div className={className}>
      {items.map((item) => {
        const current =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={current ? "page" : undefined}
            className={`${linkClassName ?? ""} ${current ? "text-paper" : ""}`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
