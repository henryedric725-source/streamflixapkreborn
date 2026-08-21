import { AppScreenshot } from "@/components/AppScreenshot";

export function TrustChips({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-flame/40 bg-flame/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-kicker"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function GlanceGrid({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <dl className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className="rounded-lg border border-line bg-ink/40 px-4 py-3">
          <dt className="text-xs uppercase tracking-[0.14em] text-zinc-400">{item.label}</dt>
          <dd className="mt-1 font-medium text-paper">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ComparePair({
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
}: {
  leftTitle: string;
  leftItems: { label: string; value: string }[];
  rightTitle: string;
  rightItems: { label: string; value: string }[];
}) {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <article className="rounded-xl border border-line bg-panel p-5">
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-300">
          {leftTitle}
        </h3>
        <dl className="mt-4 space-y-3 text-sm">
          {leftItems.map((item) => (
            <div key={item.label}>
              <dt className="text-zinc-400">{item.label}</dt>
              <dd className="text-paper">{item.value}</dd>
            </div>
          ))}
        </dl>
      </article>
      <article className="rounded-xl border border-flame/40 bg-panel p-5">
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-flame">
          {rightTitle}
        </h3>
        <dl className="mt-4 space-y-3 text-sm">
          {rightItems.map((item) => (
            <div key={item.label}>
              <dt className="text-zinc-400">{item.label}</dt>
              <dd className="text-paper">{item.value}</dd>
            </div>
          ))}
        </dl>
      </article>
    </div>
  );
}

export function FeatureCards({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="rounded-xl border border-line bg-panel p-5">
          <h3 className="font-serif text-xl text-paper">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-300">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function StepCards({
  items,
}: {
  items: { n: string; title: string; body: string }[];
}) {
  return (
    <ol className="mt-4 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.n} className="rounded-xl border border-line bg-panel p-5">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-flame">{item.n}</p>
          <h3 className="mt-2 font-serif text-xl text-paper">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-300">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

export function LibraryCards({
  items,
}: {
  items: {
    title: string;
    body: string;
    href?: string;
    linkLabel?: string;
    shot?: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  }[];
}) {
  return (
    <ul className="library-shots not-prose mt-6">
      {items.map((item) => (
        <li key={item.title}>
          {item.shot ? <AppScreenshot shot={item.shot} size="thumb" /> : null}
          <div>
            <h3 className="font-serif text-xl text-paper">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-300">{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Roadmap({ items }: { items: { n: string; title: string; body: string }[] }) {
  return (
    <ol className="mt-4 space-y-3">
      {items.map((item) => (
        <li
          key={item.n}
          className="flex gap-4 rounded-xl border border-line bg-panel px-4 py-4"
        >
          <span className="font-mono text-lg font-semibold text-flame">{item.n}</span>
          <div>
            <p className="font-medium text-paper">{item.title}</p>
            <p className="mt-1 text-sm leading-6 text-zinc-300">{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function SettingCards({
  items,
}: {
  items: { title: string; value: string; body: string }[];
}) {
  return (
    <div className="mt-4 grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="rounded-xl border border-line bg-panel p-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-400">
            {item.title}
          </h3>
          <p className="mt-2 font-serif text-2xl text-flame">{item.value}</p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
