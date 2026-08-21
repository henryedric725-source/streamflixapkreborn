"use client";

import { useMemo, useState } from "react";
import { Download, Search } from "lucide-react";
import {
  channelLabel,
  type ApkRelease,
  type ReleaseChannel,
} from "@/lib/versions";

const channels: Array<ReleaseChannel | "all"> = [
  "all",
  "current",
  "previous",
  "legacy",
];

/** Rows are pre-resolved on the server: staging state and href travel with the row. */
export type DirectoryRelease = ApkRelease & {
  staged: boolean;
  href: string;
  variantName: string;
};

export function VersionDirectory({
  releases,
}: {
  releases: DirectoryRelease[];
}) {
  const [query, setQuery] = useState("");
  const [channel, setChannel] = useState<(typeof channels)[number]>("all");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return releases.filter((release) => {
      const channelOk = channel === "all" || release.channel === channel;
      const text = `${release.version} ${release.catalogId} ${release.fileName} ${release.headline} ${release.variantName}`.toLowerCase();
      return channelOk && (!q || text.includes(q));
    });
  }, [releases, query, channel]);

  return (
    <section aria-labelledby="directory-heading" className="archive-panel">
      <div className="flex flex-col gap-4 border-b border-archive-rule px-4 py-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="directory-heading" className="font-mono text-sm uppercase tracking-[0.14em] text-archive-ink">
            Package index
          </h2>
          <p className="mt-1 text-sm text-archive-muted">
            {rows.length} record{rows.length === 1 ? "" : "s"} in view. Both StreamFlix apps are listed; filter by app name to see one at a time
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="relative block">
            <span className="sr-only">Filter catalog</span>
            <Search className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-archive-muted" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Version, app, catalog ID, filename"
              className="w-full border border-archive-rule bg-archive-paper py-2 pl-8 pr-3 font-mono text-sm text-archive-ink outline-none focus:border-archive-stamp"
            />
          </label>
          <label className="block">
            <span className="sr-only">Channel</span>
            <select
              value={channel}
              onChange={(event) =>
                setChannel(event.target.value as (typeof channels)[number])
              }
              className="h-[38px] w-full border border-archive-rule bg-archive-paper px-2 font-mono text-sm text-archive-ink"
            >
              {channels.map((item) => (
                <option key={item} value={item}>
                  {item === "all" ? "All channels" : channelLabel[item]}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm">
          <caption className="sr-only">
            Archived StreamFlix packages for both variants, with catalog ID, app, version, release date, size, minimum Android, and channel
          </caption>
          <thead className="bg-archive-head font-mono text-[11px] uppercase tracking-[0.12em] text-archive-paper">
            <tr>
              <th scope="col" className="px-3 py-2 font-medium">Catalog ID</th>
              <th scope="col" className="px-3 py-2 font-medium">App</th>
              <th scope="col" className="px-3 py-2 font-medium">Version</th>
              <th scope="col" className="px-3 py-2 font-medium">Released</th>
              <th scope="col" className="px-3 py-2 font-medium">Size</th>
              <th scope="col" className="px-3 py-2 font-medium">Min OS</th>
              <th scope="col" className="px-3 py-2 font-medium">Channel</th>
              <th scope="col" className="px-3 py-2 font-medium">Package</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((release, index) => (
              <tr
                key={release.catalogId}
                className={index % 2 === 0 ? "bg-archive-paper" : "bg-archive-zebra"}
              >
                <td className="px-3 py-2.5 font-mono text-xs text-archive-muted">
                  {release.catalogId}
                </td>
                <td className="px-3 py-2.5 text-xs text-archive-muted">
                  {release.variantName}
                </td>
                <td className="px-3 py-2.5 font-mono font-semibold text-archive-ink">
                  {release.label}
                </td>
                <td className="px-3 py-2.5 font-mono text-xs">{release.releasedOn}</td>
                <td className="px-3 py-2.5 font-mono text-xs">{release.sizeMb.toFixed(1)} MB</td>
                <td className="px-3 py-2.5 font-mono text-xs">Android {release.minAndroid}</td>
                <td className="px-3 py-2.5">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-archive-stamp">
                    {channelLabel[release.channel]}
                  </span>
                </td>
                <td className="px-3 py-2.5">
                  {release.staged ? (
                    <a
                      href={release.href}
                      download={release.fileName}
                      className="inline-flex items-center gap-1 border border-archive-rule bg-white px-2 py-1 font-mono text-xs text-archive-ink hover:border-archive-stamp"
                    >
                      <Download className="h-3.5 w-3.5" aria-hidden />
                      {release.fileName}
                    </a>
                  ) : (
                    <span className="font-mono text-xs text-archive-muted">
                      Cataloged, binary unpublished
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {rows.length === 0 && (
        <p className="px-4 py-8 text-center font-mono text-sm text-archive-muted">
          No packages match that filter.
        </p>
      )}
    </section>
  );
}
