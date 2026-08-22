import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { QuickSummary, SpecTable } from "@/components/ContentBlocks";
import { InternalLink } from "@/components/InternalLink";
import { VersionDirectory } from "@/components/archive/VersionDirectory";
import { archiveFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { isFileStaged } from "@/lib/releases";
import { R } from "@/lib/routes";
import { REBORN, V2 } from "@/lib/variants";
import { releases } from "@/lib/versions";

const TITLE = "StreamFlix APK Old Versions Archive";
const DESCRIPTION =
  "Every archived StreamFlix build for both apps — Reborn 1.5 to 1.7.230 and StreamFlix 2.0 130 to 142 — with size, minimum Android, and when to roll back.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.oldVersions,
  dateModified: "2026-08-18",
  keywords: [
    "streamflix old versions",
    "streamflix apk old version download",
    "streamflix reborn 1.7.180",
    "streamflix apk archive",
    "streamflix downgrade",
  ],
});

const toc = [
  { href: "#when", label: "When to roll back" },
  { href: "#directory", label: "The package index" },
  { href: "#rollback", label: "How to roll back safely" },
  { href: "#reborn-builds", label: "StreamFlix Reborn builds" },
  { href: "#v2-builds", label: "StreamFlix 2.0 builds" },
  { href: "#risks", label: "What an old build costs you" },
];

export default function OldVersionsPage() {
  // Staging state and hrefs are resolved on the server so the client table stays
  // a pure renderer with no filesystem or route knowledge.
  const rows = releases.map((release) => {
    const staged = isFileStaged(release.fileName);
    return {
      ...release,
      staged,
      href: `/releases/${encodeURIComponent(release.fileName)}`,
      variantName: release.variant === "reborn" ? REBORN.shortName : V2.shortName,
    };
  });

  return (
    <ClusterPage
      path={R.oldVersions}
      title={TITLE}
      description={DESCRIPTION}
      about={["apk", "sideloading"]}
      mentions={["android", "digitalSignature", "androidTv", "fireTv"]}
      dateModified="2026-08-18"
      kicker="Package archive"
      h1="StreamFlix APK Old Versions and Archived Builds"
      answer="Roll back when a new build breaks something that worked: a provider that stopped resolving, a crash on older hardware, or a player change your device dislikes. This archive lists every catalogued build for both StreamFlix apps with size, minimum Android, and what each release is actually good for."
      toc={toc}
      faqs={archiveFaqs}
      releases={releases}
      takeaways={[
        "An older build is a legitimate fix, not a workaround — provider support changes between releases, and a newer version occasionally drops a source you relied on.",
        "Install the older APK over the current one without uninstalling first, so favourites and watch history survive.",
        "Android blocks some downgrades. When it does, uninstalling is the only route and you lose local data.",
        "Legacy builds are archived for reference. Several of their bundled providers no longer resolve, so they are not a daily-use option.",
        "StreamFlix 2.0 installed from Google Play cannot be rolled back through Play — a downgrade means sideloading.",
      ]}
    >
      <h2 id="when">When to roll back</h2>
      <p>
        Rolling back has a bad reputation it does not deserve in this category.
        With most apps, an older version means missing security fixes for no
        benefit. With an aggregator, a newer build can genuinely be worse for
        you, because the thing that changes between releases is which providers
        it knows how to search.
      </p>
      <QuickSummary
        bullets={[
          "A provider you relied on stopped resolving right after an update — the update changed the scraper, not your connection.",
          "The app started crashing on launch or stuttering on an older TV box after a player change.",
          "A specific feature behaves differently and the new behaviour does not suit your device.",
          "You are testing whether a problem is the app or your network, and need a known-good build to compare against.",
        ]}
      >
        <p>
          Roll back for a specific, reproducible reason. If the app simply
          shows &ldquo;no sources found&rdquo; on one title, that is a provider
          problem and an older build will not help — see{" "}
          <InternalLink intent="noSources" currentPath={R.oldVersions} />{" "}
          first.
        </p>
      </QuickSummary>

      <h2 id="directory">The package index</h2>
      <p>
        Both apps are listed together. Filter by app name to see one at a time,
        or by channel to separate current, previous and legacy builds.
      </p>
      <div className="archive-body not-prose mt-6 rounded-2xl p-3 sm:p-4">
        <VersionDirectory releases={rows} />
      </div>

      <h2 id="rollback">How to roll back safely</h2>
      <ol>
        <li>
          <strong>Do not uninstall first.</strong> Install the older APK over
          the top of the current one. Android performs an overlay install that
          preserves app data as long as the signing certificate matches.
        </li>
        <li>
          <strong>Expect a possible refusal.</strong> Android blocks downgrades
          for some apps. If the install fails on version grounds, the only route
          is to uninstall and then install the older build, which loses
          favourites and watch history.
        </li>
        <li>
          <strong>Turn off the in-app updater.</strong> Reborn will offer to
          update you straight back to the build you just left. Decline it, or
          you have achieved nothing.
        </li>
        <li>
          <strong>Verify what you installed.</strong> Check the version in the
          app&rsquo;s settings, and confirm the package name still reads{" "}
          <code>{REBORN.packageName}</code> or <code>{V2.packageName}</code>.
          See <InternalLink intent="installVerify" currentPath={R.oldVersions} />.
        </li>
      </ol>
      <p>
        The full mechanics of overlay installs, signature mismatches, and
        deliberately staying on a build are on{" "}
        <InternalLink intent="update" currentPath={R.oldVersions} />.
      </p>

      <h2 id="reborn-builds">StreamFlix Reborn builds</h2>
      <p>
        Reborn uses semantic versioning, and the series number is the useful
        signal: 1.7 carries the current player, 1.6 predates it and is lighter
        on low-RAM hardware, and anything at 1.5 or below is reference material
        rather than something to run.
      </p>
      {releases
        .filter((release) => release.variant === "reborn")
        .map((release) => (
          <div key={release.catalogId} id={release.catalogId}>
            <h3>
              {REBORN.shortName} {release.label} — {release.headline}
            </h3>
            <SpecTable
              caption={`${REBORN.name} ${release.label} details`}
              rows={[
                ["Catalog ID", release.catalogId],
                ["Released", release.releasedOn],
                ["Size", `${release.sizeMb} MB`],
                ["Minimum Android", release.minAndroid],
                ["Channel", release.channel],
                ["Recommended for", release.recommendedFor],
              ]}
            />
            <ul>
              {release.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        ))}

      <h2 id="v2-builds">StreamFlix 2.0 builds</h2>
      <p>
        StreamFlix 2.0 uses bare build numbers rather than semantic versions, so
        the only ordering signal is the number itself. Its watchlist and
        download database are compatible in both directions, which makes
        rolling back less disruptive here than on Reborn.
      </p>
      {releases
        .filter((release) => release.variant === "v2")
        .map((release) => (
          <div key={release.catalogId} id={release.catalogId}>
            <h3>
              {V2.shortName} {release.label} — {release.headline}
            </h3>
            <SpecTable
              caption={`${V2.name} ${release.label} details`}
              rows={[
                ["Catalog ID", release.catalogId],
                ["Released", release.releasedOn],
                ["Size", `${release.sizeMb} MB`],
                ["Minimum Android", release.minAndroid],
                ["Channel", release.channel],
                ["Recommended for", release.recommendedFor],
              ]}
            />
            <ul>
              {release.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        ))}

      <h2 id="risks">What an old build costs you</h2>
      <p>
        Being honest about the downside: an older build is missing whatever was
        fixed since, and in an app that fetches remote content that is not
        nothing. The specific costs are:
      </p>
      <ul>
        <li>
          <strong>Dead providers.</strong> The main one. Provider scrapers
          decay, so a legacy build progressively finds less until it finds
          almost nothing.
        </li>
        <li>
          <strong>No security fixes.</strong> Any parsing or player fix made
          since that build is absent from it.
        </li>
        <li>
          <strong>No forward compatibility for settings.</strong> Reborn
          settings migrate forward to a newer series but not backward from one,
          so moving down a series may reset your configuration.
        </li>
        <li>
          <strong>Manual updates only.</strong> Once you have declined the
          in-app updater, keeping track of new releases is on you.
        </li>
      </ul>
      <p>
        Treat rolling back as a targeted fix with a plan to return to the
        current build, not a permanent state. Release-by-release detail is on{" "}
        <InternalLink intent="changelog" currentPath={R.oldVersions} />.
      </p>
    </ClusterPage>
  );
}
