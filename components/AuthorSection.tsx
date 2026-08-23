import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { SITE_AUTHOR, authorContextFor } from "@/lib/author";
import { CONTENT_UPDATED, CONTENT_UPDATED_DISPLAY } from "@/lib/site";

/**
 * Author box.
 *
 * Beyond a byline, this states *why* the author is a credible source for this
 * specific subject and when the page was last reviewed — the experience and
 * trust half of E-E-A-T, which a name alone does not establish. When `path` is
 * set, a post-relevant experience note is appended under the global bio.
 */
export function AuthorSection({
  reviewedOn,
  path,
  context,
}: {
  reviewedOn?: string;
  /** Cluster path — resolves a post-relevant bio from lib/author.ts. */
  path?: string;
  /** Optional override; defaults to authorContextFor(path). */
  context?: string;
}) {
  const reviewed = reviewedOn ?? CONTENT_UPDATED;
  const reviewedDisplay = reviewedOn
    ? new Date(`${reviewedOn}T00:00:00Z`).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      })
    : CONTENT_UPDATED_DISPLAY;
  const pageContext = context ?? (path ? authorContextFor(path) : undefined);

  return (
    <aside
      id="author"
      className="not-prose mt-10 rounded-2xl border border-line bg-panel/80 p-5 sm:p-6"
      aria-labelledby="about-the-author"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
        About the author
      </p>
      <div className="mt-3 flex items-start gap-4">
        <Image
          src={SITE_AUTHOR.photo}
          alt={`${SITE_AUTHOR.shortName}, ${SITE_AUTHOR.name}`}
          width={56}
          height={56}
          className="h-14 w-14 shrink-0 rounded-xl border border-line bg-panel-2"
          unoptimized
        />
        <div>
          <h2
            id="about-the-author"
            className="font-serif text-lg font-semibold tracking-tight text-paper"
          >
            {SITE_AUTHOR.shortName}{" "}
            <span className="font-normal text-zinc-400">({SITE_AUTHOR.name})</span>
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            {SITE_AUTHOR.role}, {SITE_AUTHOR.experienceYears} years
            documenting Android sideloading
          </p>
        </div>
      </div>

      <p className="mt-4 text-[0.95rem] leading-7 text-zinc-300">
        {SITE_AUTHOR.description}
      </p>

      {pageContext ? (
        <p className="mt-3 rounded-xl border border-line/80 bg-panel-2/60 px-4 py-3 text-[0.95rem] leading-7 text-zinc-300">
          <span className="font-medium text-paper">On this page: </span>
          {pageContext}
        </p>
      ) : null}

      <ul className="mt-4 space-y-2">
        {SITE_AUTHOR.credentials.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-6 text-zinc-400">
            <BadgeCheck
              className="mt-0.5 h-4 w-4 shrink-0 text-flame"
              aria-hidden
              strokeWidth={2}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-4 text-sm">
        <a
          href={SITE_AUTHOR.url}
          rel="author"
          className="font-medium text-flame underline decoration-flame/40 underline-offset-2 hover:text-flame-dark hover:decoration-flame-dark"
        >
          About the author
        </a>
        <span className="text-zinc-500">
          Page facts last verified{" "}
          <time dateTime={reviewed}>{reviewedDisplay}</time>
        </span>
      </div>
    </aside>
  );
}
