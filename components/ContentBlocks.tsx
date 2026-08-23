import type { ReactNode } from "react";

export function KeyFacts({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <section
      className="key-facts not-prose rounded-xl border border-line bg-panel p-5"
      aria-labelledby="key-facts-heading"
    >
      <h3 id="key-facts-heading" className="font-serif text-xl text-paper">
        Key facts
      </h3>
      <dl className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="text-xs uppercase tracking-[0.14em] text-zinc-400">
              {item.label}
            </dt>
            <dd className="mt-1 text-sm font-medium text-paper">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function SpecTable({
  caption,
  rows,
}: {
  caption: string;
  rows: [string, string][];
}) {
  return (
    <div className="not-prose overflow-x-auto rounded-xl border border-line">
      <table className="min-w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className="border-t border-line first:border-t-0">
              <th scope="row" className="w-48 bg-white/5 px-4 py-2.5 font-medium text-paper">
                {label}
              </th>
              <td className="px-4 py-2.5 text-zinc-300">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function DataTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="not-prose overflow-x-auto rounded-xl border border-line">
      <table className="min-w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-white/5 text-paper">
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col" className="px-4 py-2 font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-zinc-300">
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-line">
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`} className="px-4 py-2.5">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Toc } from "@/components/Toc";

export function Takeaways({ items }: { items: string[] }) {
  return (
    <section
      className="takeaways-block not-prose rounded-xl border border-line bg-panel p-5"
      aria-labelledby="takeaways-heading"
    >
      <h3 id="takeaways-heading" className="font-serif text-xl text-paper">
        Key takeaways
      </h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function QuickSummary({
  children,
  bullets,
}: {
  children: ReactNode;
  bullets: string[];
}) {
  return (
    <section
      id="quick-summary"
      className="not-prose rounded-xl border border-line bg-panel/60 p-5"
      aria-labelledby="quick-summary-heading"
    >
      <h3 id="quick-summary-heading" className="font-serif text-xl text-paper">
        Quick summary
      </h3>
      <div className="mt-3 space-y-3 text-sm leading-7 text-zinc-300 [&_p]:m-0">
        {children}
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function Definition({
  term,
  children,
}: {
  term: string;
  children: ReactNode;
}) {
  return (
    <section
      className="not-prose rounded-xl border border-line bg-panel p-5"
      aria-labelledby="definition-heading"
    >
      <h3 id="definition-heading" className="font-serif text-xl text-paper">
        Definition: {term}
      </h3>
      <p className="mt-3 text-sm leading-7 text-zinc-300">{children}</p>
    </section>
  );
}
