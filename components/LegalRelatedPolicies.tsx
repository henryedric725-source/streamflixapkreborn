import Link from "next/link";
import { legalLinks } from "@/lib/site";

export function LegalRelatedPolicies({ current }: { current?: string }) {
  const items = legalLinks.filter((item) => item.href !== current);

  return (
    <section className="not-prose rounded-xl border border-line bg-panel/50 p-5">
      <h2 className="font-serif text-xl text-paper">Related policies</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-zinc-300 underline-offset-2 hover:text-flame hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
