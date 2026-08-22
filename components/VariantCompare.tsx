import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { DownloadCta } from "@/components/DownloadCta";
import { REBORN, V2, VARIANT_COMPARE_ROWS } from "@/lib/variants";

/**
 * The dual-primary module. Two StreamFlix apps exist, so the hub presents both
 * with their own spec column and their own download path rather than averaging
 * them into one misleading spec table — which is exactly the mistake every
 * competing page in this niche makes.
 */
export function VariantCompare({
  rebornStaged,
  v2Staged,
}: {
  rebornStaged: boolean;
  v2Staged: boolean;
}) {
  return (
    <div className="not-prose">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          { variant: REBORN, staged: rebornStaged },
          { variant: V2, staged: v2Staged },
        ].map(({ variant, staged }) => (
          <article
            key={variant.id}
            className="flex flex-col rounded-2xl border border-line bg-panel p-5"
          >
            <p className="kicker">
              {variant.openSource ? "Open source" : "Closed source"}
            </p>
            <h3 className="mt-2 font-serif text-xl text-paper">{variant.name}</h3>
            <p className="mt-1 font-mono text-xs text-zinc-500">
              {variant.packageName}
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-300">{variant.tagline}</p>

            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <div>
                <dt className="text-zinc-500">Version</dt>
                <dd className="font-medium text-paper">
                  {variant.id === "reborn"
                    ? `v${variant.version}`
                    : `Build ${variant.version}`}
                </dd>
              </div>
              <div>
                <dt className="text-zinc-500">Size</dt>
                <dd className="font-medium text-paper">{variant.sizeLabel}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Requires</dt>
                <dd className="font-medium text-paper">
                  Android {variant.minAndroid}
                </dd>
              </div>
              <div>
                <dt className="text-zinc-500">Updated</dt>
                <dd className="font-medium text-paper">
                  {variant.releasedOnDisplay}
                </dd>
              </div>
            </dl>

            <p className="mt-4 rounded-lg bg-flame/10 px-3 py-2 text-sm leading-6 text-paper">
              <span className="font-semibold">Best for: </span>
              {variant.bestFor}
            </p>

            <div className="mt-auto pt-5">
              <DownloadCta variant={variant} staged={staged} />
              <p className="mt-3 text-sm">
                <Link
                  href={variant.path}
                  className="text-flame underline-offset-2 hover:underline"
                >
                  Full {variant.shortName} breakdown
                </Link>
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
        <table className="min-w-full border-collapse text-left text-sm">
          <caption className="sr-only">
            StreamFlix Reborn compared with StreamFlix 2.0 across package,
            version, size, licence, distribution, and features
          </caption>
          <thead className="bg-panel-2 text-xs uppercase tracking-[0.1em] text-zinc-400">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">
                Specification
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-paper">
                {REBORN.name}
              </th>
              <th scope="col" className="px-4 py-3 font-medium text-paper">
                {V2.name}
              </th>
            </tr>
          </thead>
          <tbody>
            {VARIANT_COMPARE_ROWS.map((row, index) => (
              <tr
                key={row.label}
                className={index % 2 === 0 ? "bg-panel/60" : "bg-transparent"}
              >
                <th
                  scope="row"
                  className="px-4 py-2.5 font-medium text-zinc-400"
                >
                  {row.label}
                </th>
                <td className="px-4 py-2.5 text-zinc-200">{row.reborn}</td>
                <td className="px-4 py-2.5 text-zinc-200">{row.v2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** Compact yes/no strip used on device pages where the full table is too heavy. */
export function VariantSupportStrip({
  rebornSupported,
  v2Supported,
  context,
}: {
  rebornSupported: boolean;
  v2Supported: boolean;
  context: string;
}) {
  const rows = [
    { variant: REBORN, ok: rebornSupported },
    { variant: V2, ok: v2Supported },
  ];
  return (
    <ul className="not-prose mt-4 grid gap-2 sm:grid-cols-2">
      {rows.map(({ variant, ok }) => (
        <li
          key={variant.id}
          className="flex items-start gap-3 rounded-xl border border-line bg-panel px-4 py-3"
        >
          <span
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
              ok ? "bg-flame/20 text-flame" : "bg-white/5 text-zinc-500"
            }`}
          >
            {ok ? (
              <Check className="h-4 w-4" aria-hidden strokeWidth={2.5} />
            ) : (
              <Minus className="h-4 w-4" aria-hidden strokeWidth={2.5} />
            )}
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-paper">
              {variant.name}
            </span>
            <span className="block text-sm leading-6 text-zinc-400">
              {ok ? `Works on ${context}` : `Not usable on ${context}`}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
