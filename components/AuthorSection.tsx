import { SITE_AUTHOR } from "@/lib/author";

export function AuthorSection() {
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
        <img
          src={SITE_AUTHOR.photo}
          alt={`${SITE_AUTHOR.shortName}, ${SITE_AUTHOR.name}`}
          width={56}
          height={56}
          className="h-14 w-14 shrink-0 rounded-xl border border-line bg-panel-2"
        />
        <div>
          <h2
            id="about-the-author"
            className="font-serif text-lg font-semibold tracking-tight text-paper"
          >
            {SITE_AUTHOR.shortName}{" "}
            <span className="font-normal text-zinc-400">({SITE_AUTHOR.name})</span>
          </h2>
          <p className="mt-1 text-sm text-zinc-500">{SITE_AUTHOR.role}</p>
        </div>
      </div>
      <p className="mt-4 text-[0.95rem] leading-7 text-zinc-300">
        {SITE_AUTHOR.description}
      </p>
      <p className="mt-4 text-sm">
        <a
          href={SITE_AUTHOR.url}
          rel="author"
          className="font-medium text-flame underline decoration-flame/40 underline-offset-2 hover:text-flame-dark hover:decoration-flame-dark"
        >
          Author profile
        </a>
      </p>
    </aside>
  );
}
