import { ExternalLink } from "lucide-react";
import { citationsFor } from "@/lib/citations";

/**
 * Visible source list.
 *
 * The same citations go into `citation` on the article node, but a machine-only
 * claim is not a trust signal for readers. Showing what each source is being
 * cited *for* is the part most sites skip — a bare link list does not tell you
 * which fact it underwrites.
 *
 * All links are nofollow: they are attribution, not endorsement.
 */
export function Sources({ path }: { path: string }) {
  const citations = citationsFor(path);
  if (!citations.length) return null;

  return (
    <section
      id="sources"
      className="not-prose mt-10 rounded-2xl border border-line bg-panel/60 p-5 sm:p-6"
      aria-labelledby="sources-heading"
    >
      <h2
        id="sources-heading"
        className="font-serif text-xl text-paper"
      >
        Sources
      </h2>
      <p className="mt-1.5 text-sm leading-6 text-zinc-400">
        Every specification and factual claim on this page traces back to one of
        the following. Where a mirror disagrees with the developer&rsquo;s own
        listing, the developer&rsquo;s listing is what we publish.
      </p>
      <ol className="mt-4 space-y-3">
        {citations.map((source, index) => (
          <li key={source.url} className="flex gap-3 text-sm leading-6">
            <span className="mt-0.5 font-mono text-xs text-zinc-500">
              [{index + 1}]
            </span>
            <span className="min-w-0">
              <a
                href={source.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-baseline gap-1 font-medium text-flame underline-offset-2 hover:underline"
              >
                {source.title}
                <ExternalLink className="h-3 w-3 shrink-0" aria-hidden />
              </a>
              <span className="text-zinc-500">: {source.publisher}</span>
              <span className="mt-0.5 block text-zinc-400">
                Cited for: {source.supports}.
              </span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
