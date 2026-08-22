import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, QuickSummary } from "@/components/ContentBlocks";
import { InternalLink } from "@/components/InternalLink";
import { Roadmap } from "@/components/HomeSections";
import { changelogFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import { REBORN, V2 } from "@/lib/variants";
import { releases } from "@/lib/versions";

const TITLE = "StreamFlix APK Changelog: Every Build";
const DESCRIPTION = `Release notes for both StreamFlix apps — Reborn up to v${REBORN.version} and StreamFlix 2.0 up to build ${V2.version} — and how to judge whether an update is worth installing.`;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.changelog,
  dateModified: "2026-08-19",
  keywords: [
    "streamflix changelog",
    "streamflix update notes",
    "streamflix reborn release notes",
    "new movie apk",
    "new movie app apk",
  ],
});

const toc = [
  { href: "#what-updates-change", label: "What an update actually changes" },
  { href: "#reborn-log", label: "StreamFlix Reborn release log" },
  { href: "#v2-log", label: "StreamFlix 2.0 build log" },
  { href: "#compare", label: "Release cadence compared" },
  { href: "#worth-it", label: "Is this update worth installing?" },
];

export default function ChangelogPage() {
  const rebornLog = releases.filter((release) => release.variant === "reborn");
  const v2Log = releases.filter((release) => release.variant === "v2");

  return (
    <ClusterPage
      path={R.changelog}
      title={TITLE}
      description={DESCRIPTION}
      about={["apk"]}
      mentions={["openSource", "github", "googlePlay", "streaming"]}
      dateModified="2026-08-19"
      kicker="Release notes"
      h1="StreamFlix APK Changelog: Every Build, What Changed"
      answer={`StreamFlix updates change how the app searches, not what it can find. Reborn v${REBORN.version} continues the 1.7 series with its provider list and server failover; StreamFlix 2.0 build ${V2.version} is the current Play listing. Neither adds titles, because the catalog belongs to third-party providers.`}
      toc={toc}
      faqs={changelogFaqs}
      releases={releases}
      takeaways={[
        "An update never adds films. The catalog lives with third-party providers, so it changes continuously regardless of which build you run.",
        "What updates do change is provider support — which sources the app knows how to search, and how it fails over between servers.",
        "That means an update can be a downgrade for you personally if it drops a source you relied on.",
        "Reborn ships frequent point releases because scrapers need maintenance; StreamFlix 2.0 updates through Play on a slower cadence.",
        "If the current build works on your hardware, there is a defensible case for staying on it rather than updating reflexively.",
      ]}
    >
      <h2 id="what-updates-change">What an update actually changes</h2>
      <p>
        The single most common misunderstanding about this class of app is what
        an update is for. People install one expecting new films, do not find
        any, and conclude the update failed.
      </p>
      <QuickSummary
        bullets={[
          "Provider scrapers — the code that knows how to search each third-party source. This is the bulk of every release.",
          "Server failover logic — how quickly the app gives up on a stalled source and offers you another.",
          "Player behaviour — codec handling, subtitle rendering, hardware decoding decisions.",
          "Interface fixes, particularly focus handling on TV where a mis-aimed D-pad press is genuinely disruptive.",
          "Nothing about the catalog. Not one title is added or removed by an update.",
        ]}
      >
        <p>
          Once you internalise that, update decisions become straightforward:
          you update when something is broken for you, not on a schedule. The
          mechanics of updating without losing data are on{" "}
          <InternalLink intent="update" currentPath={R.changelog} />.
        </p>
      </QuickSummary>

      <h2 id="reborn-log">StreamFlix Reborn release log</h2>
      <p>
        Reborn uses semantic versioning, and the series number carries real
        meaning — 1.7 is the current player generation, 1.6 predates it.
      </p>
      <Roadmap
        items={rebornLog.map((release) => ({
          n: release.label,
          title: `${release.headline} — ${release.releasedOn}`,
          body: release.notes.join(" "),
        }))}
      />

      <h2 id="v2-log">StreamFlix 2.0 build log</h2>
      <p>
        StreamFlix 2.0 publishes bare build numbers with no public release
        notes, so the log below records what each build is and what it is
        useful for rather than paraphrasing a changelog that does not exist.
      </p>
      <Roadmap
        items={v2Log.map((release) => ({
          n: release.label,
          title: `${release.headline} — ${release.releasedOn}`,
          body: release.notes.join(" "),
        }))}
      />

      <h2 id="compare">Release cadence compared</h2>
      <DataTable
        caption="Release cadence and update mechanism for both StreamFlix apps"
        headers={["", REBORN.name, V2.name]}
        rows={[
          ["Versioning", "Semantic (1.7.230)", "Bare build number (142)"],
          ["Cadence", "Frequent point releases", "Every few months"],
          ["Public release notes", "Yes, on GitHub", "No"],
          ["Update mechanism", "In-app updater plus manual sideload", "Google Play, or manual sideload"],
          ["Can you roll back?", "Yes, install the older APK over the top", "Only by sideloading — Play cannot downgrade"],
          ["Reason for frequency", "Provider scrapers need constant maintenance", "Catalog backend changes server-side, not in the app"],
        ]}
      />
      <p>
        The cadence difference follows directly from the architecture. Reborn
        has to ship code every time a provider changes shape. StreamFlix 2.0
        serves from its own backend, so most of its changes happen server-side
        and never require an app update at all.
      </p>

      <h2 id="worth-it">Is this update worth installing?</h2>
      <p>
        A short decision procedure, in the order worth applying it:
      </p>
      <ol>
        <li>
          <strong>Is anything broken right now?</strong> If playback works and
          your usual sources resolve, an update buys you little and risks
          dropping a provider that currently works. Staying put is reasonable.
        </li>
        <li>
          <strong>Did sources stop resolving recently?</strong> This is the
          strongest reason to update — a provider changed shape and the new
          build has the updated scraper.
        </li>
        <li>
          <strong>Are you on old hardware?</strong> Player changes between
          series occasionally cost performance on 1 GB and 2 GB TV boxes. Check{" "}
          <InternalLink intent="oldVersions" currentPath={R.changelog} /> before
          updating so you have a known-good build to return to.
        </li>
        <li>
          <strong>Did you just update and lose something?</strong> Roll back.
          It is a legitimate fix here, not a workaround — see{" "}
          <InternalLink intent="rollback" currentPath={R.changelog} />.
        </li>
      </ol>
      <p>
        If an update leaves the app in a worse state than before, the
        symptom-by-symptom fixes are on{" "}
        <InternalLink intent="notWorking" currentPath={R.changelog} />.
      </p>
    </ClusterPage>
  );
}
