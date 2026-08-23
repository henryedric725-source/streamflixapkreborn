import type { FaqItem } from "@/lib/faqs";

export function FaqList({
  items,
  tone = "marketing",
  heading = "Frequently Asked Questions (FAQ)",
}: {
  items: FaqItem[];
  tone?: "marketing" | "archive";
  heading?: string;
}) {
  const archive = tone === "archive";
  return (
    <section aria-labelledby="faq-heading" className="faq-block not-prose flex flex-col gap-4">
      <div>
        <h2
          id="faq-heading"
          className={
            archive
              ? "font-mono text-sm uppercase tracking-[0.14em] text-archive-ink"
              : "font-serif text-[1.75rem] leading-tight text-paper"
          }
        >
          {heading}
        </h2>
        <p
          className={
            archive
              ? "pt-2 max-w-2xl text-sm text-archive-muted"
              : "pt-2 max-w-2xl text-sm text-zinc-400"
          }
        >
          Short answers first.
        </p>
      </div>
      <div
        className={
          archive
            ? "divide-y divide-archive-rule border border-archive-rule bg-archive-paper"
            : "divide-y divide-line rounded-xl border border-line bg-panel"
        }
      >
        {items.map((item) => (
          <details key={item.question} className="group px-5 py-4">
            <summary
              className={
                archive
                  ? "cursor-pointer list-none text-left text-base font-medium text-archive-ink marker:content-none [&::-webkit-details-marker]:hidden"
                  : "cursor-pointer list-none text-left text-base font-medium text-paper marker:content-none [&::-webkit-details-marker]:hidden"
              }
            >
              <span className="flex items-start justify-between gap-4">
                {item.question}
                <span className={archive ? "text-archive-stamp group-open:rotate-45" : "text-flame group-open:rotate-45"}>
                  +
                </span>
              </span>
            </summary>
            <p
              className={
                archive
                  ? "mt-3 max-w-3xl text-sm leading-7 text-archive-muted"
                  : "mt-3 max-w-3xl text-sm leading-7 text-zinc-300"
              }
            >
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
