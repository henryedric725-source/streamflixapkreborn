import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import {
  DataTable,
  Definition,
  QuickSummary,
  SpecTable,
} from "@/components/ContentBlocks";
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
  "Every archived StreamFlix build with size, minimum Android and release notes, plus how to read the version numbers and when rolling back is the right fix.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.oldVersions,
  dateModified: "2026-08-18",
  keywords: [
    "streamflix old versions",
    "streamflix apk old version download",
    "streamflix changelog",
    "streamflix update notes",
    "streamflix reborn release notes",
    "streamflix apk archive",
    "streamflix downgrade",
    "new movie apk",
    "streamflix apk download old version",
    "streamflix apk 2020",
    "streamflix 1.7.117",
    "streamflix update latest version",
    "streamflix latest version apk",
    "streamflix apk uptodown",
  ],
});

const toc = [
  { href: "#quick-summary", label: "Quick summary" },
  { href: "#latest", label: "The latest version, and what is not it" },
  { href: "#when", label: "When to roll back" },
  { href: "#directory", label: "The package index" },
  { href: "#rollback", label: "How to roll back safely" },
  { href: "#reborn-builds", label: "StreamFlix Reborn builds" },
  { href: "#v2-builds", label: "StreamFlix 2.0 builds" },
  { href: "#keeping", label: "Keeping a known-good build" },
  { href: "#mirrors", label: "Where old builds are archived" },
  { href: "#risks", label: "What an old build costs you" },
  { href: "#what-updates-change", label: "What an update actually changes" },
  { href: "#version-numbers", label: "How to read the version numbers" },
  { href: "#compare", label: "Release cadence compared" },
  { href: "#worth-it", label: "Is this update worth installing?" },
  { href: "#track", label: "Tracking releases yourself" },
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
      mentions={[
        "android",
        "digitalSignature",
        "androidTv",
        "fireTv",
        "sideloading",
        "github",
        "googlePlay",
        "openSource",
      ]}
      dateModified="2026-08-18"
      kicker="Package archive"
      h1="StreamFlix Old Versions, Archived Builds and Changelog"
      answer="Roll back when a new build breaks something that worked: a provider that stopped resolving, a crash on older hardware, or a player change your device dislikes. This archive lists every catalogued build for both StreamFlix apps with size, minimum Android, and what each release is actually good for."
      toc={toc}
      faqs={archiveFaqs}
      releases={releases}
      takeaways={[
        "An older build is a legitimate fix, not a workaround. Provider support changes between releases, and a newer version occasionally drops a source you relied on.",
        "Install the older APK over the current one without uninstalling first, so favourites and watch history survive.",
        "Android blocks some downgrades. When it does, uninstalling is the only route and you lose local data.",
        "Legacy builds are archived for reference. Several of their bundled providers no longer resolve, so they are not a daily-use option.",
        "StreamFlix 2.0 installed from Google Play cannot be rolled back through Play. A downgrade means sideloading.",
        `The latest StreamFlix version is Reborn v${REBORN.version} and StreamFlix 2.0 build ${V2.version}. Version strings on mirror pages are frequently out of date or simply wrong.`,
        "Builds from 2020 belong to the original app that was taken down. They install and open, then find almost nothing.",
      ]}
    >
      <QuickSummary
        bullets={[
          `Current builds: StreamFlix Reborn v${REBORN.version} (${REBORN.releasedOnDisplay}) and StreamFlix 2.0 build ${V2.version} (${V2.releasedOnDisplay}).`,
          "Four Reborn builds and three StreamFlix 2.0 builds are catalogued here with size, minimum Android and channel.",
          "Install an older APK over the current one. Do not uninstall first, or favourites and watch history go with it.",
          "Reborn's in-app updater will offer to put you straight back. Decline it after a rollback.",
          "Legacy builds are reference material. Their provider scrapers have decayed, so they find very little.",
          "A StreamFlix 2.0 downgrade cannot go through Google Play. It has to be sideloaded.",
        ]}
      >
        <p>
          Download an old version of StreamFlix when a newer build broke something
          that worked: a provider that stopped resolving, a crash on older
          hardware, or a player change your device dislikes. Every catalogued
          build is listed below.
        </p>
        <p>
          Rolling back is a targeted fix rather than a permanent state. Sizes,
          minimum Android versions and release dates come from the release
          catalogue, and the current build is always the one to return to once the
          problem is understood.
        </p>
      </QuickSummary>

      <h2 id="latest">The latest version, and the strings that are not it</h2>
      <p>
        The latest StreamFlix version is Reborn v{REBORN.version}, released{" "}
        {REBORN.releasedOnDisplay}, and StreamFlix 2.0 build {V2.version},
        released {V2.releasedOnDisplay}. Mirror pages routinely print a different
        number, so it is worth knowing which strings mean what.
      </p>
      <DataTable
        caption="StreamFlix version strings people search for and what each one refers to"
        headers={["Version string", "What it is", "Should you install it?"]}
        rows={[
          [
            `v${REBORN.version}`,
            "The current StreamFlix Reborn release, with the newest provider scrapers.",
            "Yes. This is the default answer for any Android 5.0 device or TV box.",
          ],
          [
            "v1.7.180",
            "The previous 1.7 release, catalogued here as a fallback.",
            "Only if the current build broke something specific for you.",
          ],
          [
            "v1.7.117",
            "An earlier 1.7 point release that circulates on mirrors. Not catalogued here.",
            "No. It predates the archive and its provider list is further behind.",
          ],
          [
            "v1.6.120",
            "The last build before the 1.7 player rewrite. Lighter on memory.",
            "Worth trying on a 1 GB or 2 GB TV box that stutters on 1.7.",
          ],
          [
            "Anything from 2020",
            "The original StreamFlix, removed after a DMCA complaint.",
            "No. Its scrapers stopped resolving years ago.",
          ],
          [
            `Build ${V2.version}`,
            "The current StreamFlix 2.0 listing on Google Play.",
            "Yes, and Play installs it without any sideloading.",
          ],
        ]}
      />
      <p>
        A higher number on one app means nothing about the other. Reborn uses
        semantic versioning and StreamFlix 2.0 uses a bare build counter, so build
        142 is not newer than v{REBORN.version} in any meaningful sense.
      </p>

      <h2 id="when">When to roll back</h2>
      <p>
        Rolling back has a bad reputation it does not deserve in this category.
        With most apps, an older version means missing security fixes for no
        benefit. With an aggregator, a newer build can genuinely be worse for
        you, because the thing that changes between releases is which providers
        it knows how to search.
      </p>
      <ul>
        <li>
          A provider you relied on stopped resolving right after an update. The
          update changed the scraper, not your connection.
        </li>
        <li>
          The app started crashing on launch or stuttering on an older TV box
          after a player change.
        </li>
        <li>
          A specific feature behaves differently and the new behaviour does not
          suit your device.
        </li>
        <li>
          You are testing whether a problem is the app or your network, and need a
          known-good build to compare against.
        </li>
      </ul>
      <p>
        Roll back for a specific, reproducible reason. If the app simply shows
        &ldquo;no sources found&rdquo; on one title, that is a provider problem
        and an older build will not help. See{" "}
        <InternalLink intent="noSources" currentPath={R.oldVersions} /> first.
      </p>

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
              {REBORN.shortName} {release.label}: {release.headline}
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
              {V2.shortName} {release.label}: {release.headline}
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

      <h2 id="keeping">Keeping a known-good build</h2>
      <p>
        The people who never get stranded by a bad update are the ones who kept
        the file that was working. It costs a few megabytes and removes the
        entire problem.
      </p>
      <p>
        When a build has run well for a fortnight, copy its APK somewhere that
        is not the device: a computer, or cloud storage. Name it with the
        version, because a folder of files called <code>download.apk</code> is
        no use in six months. Note the date you started running it.
      </p>
      <p>
        The reason this matters is that older builds do not stay available
        forever. Projects tidy their release pages, mirrors rotate their
        catalogues, and the build you want may simply not be downloadable by the
        time you want it. Holding your own copy makes you independent of that.
      </p>
      <p>
        One caution: only keep files you obtained from a source you trust, and
        verify before archiving rather than after. An unverified build kept for
        a year is a worse problem than no archive at all, and the checks are on{" "}
        <InternalLink intent="safe" currentPath={R.oldVersions} />.
      </p>

      <h2 id="mirrors">Where old builds are archived</h2>
      <Definition term="APK archive">
        An APK archive is a catalogue of previous Android package builds kept so a
        user can reinstall a specific earlier version. Each entry records the
        version string, release date, file size and minimum Android level, because
        those four fields are what identify a build once the download page it came
        from has changed. Archives matter for sideloaded apps in particular, since
        an app outside Google Play has no store-side version history to fall back
        on.
      </Definition>
      <DataTable
        caption="Places StreamFlix builds are archived and what each keeps"
        headers={["Location", "What it holds", "Caveat"]}
        rows={[
          [
            "GitHub releases",
            "Every published Reborn build, with notes, alongside the Apache 2.0 source.",
            "Projects tidy old releases. What is there today may not be there next year.",
          ],
          [
            "Uptodown",
            "A version history for the Reborn package, mirrored from the project.",
            "A mirror, so check the version string and size before trusting the label.",
          ],
          [
            "This archive",
            "Seven catalogued builds across both apps, with size, channel and minimum Android.",
            "Curated rather than exhaustive. Very old builds are deliberately excluded.",
          ],
          [
            "Google Play",
            "The current StreamFlix 2.0 build only.",
            "Play keeps no version history for users, so a downgrade means sideloading.",
          ],
          [
            "Your own copy",
            "Whatever you saved when it was working.",
            "The only source nobody else can remove. Verify a file before you archive it.",
          ],
        ]}
      />

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
        <InternalLink intent="oldVersions" currentPath={R.oldVersions} />.
      </p>

      <h2 id="what-updates-change">What an update actually changes</h2>
      <p>
        The single most common misunderstanding about this class of app is what
        an update is for. People install one expecting new films, do not find
        any, and conclude the update failed.
      </p>
      <ul>
        <li>
          <strong>Provider scrapers:</strong> the code that knows how to search
          each third-party source. This is the bulk of every release.
        </li>
        <li>
          <strong>Server failover logic:</strong> how quickly the app gives up on
          a stalled source and offers you another.
        </li>
        <li>
          <strong>Player behaviour:</strong> codec handling, subtitle rendering,
          and hardware decoding decisions.
        </li>
        <li>
          <strong>Interface fixes,</strong> particularly focus handling on TV
          where a mis-aimed D-pad press is genuinely disruptive.
        </li>
        <li>
          <strong>Nothing about the catalog.</strong> Not one title is added or
          removed by an update.
        </li>
      </ul>
      <p>
        Once that is clear, update decisions become straightforward: you update
        when something is broken for you, not on a schedule. The mechanics of
        updating without losing data are on{" "}
        <InternalLink intent="update" currentPath={R.oldVersions} />.
      </p>

      <h2 id="version-numbers">How to read the version numbers</h2>
      <p>
        The two apps number their releases on completely different systems, and
        knowing which you are looking at tells you how much a jump actually
        changes.
      </p>
      <p>
        StreamFlix Reborn uses semantic versioning, so a release reads as
        major.minor.patch. In practice the <strong>minor</strong> number carries
        almost all the meaning here. A move within the 1.7 series is a scraper
        refresh: providers added, providers repaired, occasionally a provider
        dropped because its source went dark. A move from 1.6 to 1.7 is a
        different proposition, because that boundary is where the player was
        rewritten. Anything crossing a minor boundary is worth treating as a
        real change rather than routine maintenance, particularly on hardware
        that was already close to its limit.
      </p>
      <p>
        StreamFlix 2.0 publishes a bare incrementing build number with no public
        notes attached. Build 142 tells you it came after 138, and nothing else.
        There is no way to tell a catalog tweak from a player change by looking
        at the number, which is why the log above records what each build is
        useful for instead of paraphrasing release notes that do not exist.
      </p>
      <p>
        One consequence catches people out: because the two schemes are
        unrelated, a higher number on one app means nothing about the other.
        Build 142 is not newer than v1.7.230 in any meaningful sense. They are
        separate products from separate developers, as{" "}
        <InternalLink intent="reborn" currentPath={R.oldVersions} /> and{" "}
        <InternalLink intent="v2" currentPath={R.oldVersions} /> set out.
      </p>

      <h2 id="compare">Release cadence compared</h2>
      <DataTable
        caption="Release cadence and update mechanism for both StreamFlix apps"
        headers={["", REBORN.name, V2.name]}
        rows={[
          ["Versioning", "Semantic (1.7.230)", "Bare build number (142)"],
          ["Cadence", "Frequent point releases", "Every few months"],
          ["Public release notes", "Yes, on GitHub", "No"],
          ["Update mechanism", "In-app updater plus manual sideload", "Google Play, or manual sideload"],
          ["Can you roll back?", "Yes, install the older APK over the top", "Only by sideloading: Play cannot downgrade"],
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
          strongest reason to update. A provider changed shape and the new
          build has the updated scraper.
        </li>
        <li>
          <strong>Are you on old hardware?</strong> Player changes between
          series occasionally cost performance on 1 GB and 2 GB TV boxes. Check{" "}
          <InternalLink intent="oldVersions" currentPath={R.oldVersions} /> before
          updating so you have a known-good build to return to.
        </li>
        <li>
          <strong>Did you just update and lose something?</strong> Roll back.
          It is a legitimate fix here, not a workaround. See{" "}
          <InternalLink intent="rollback" currentPath={R.oldVersions} />.
        </li>
      </ol>
      <p>
        If an update leaves the app in a worse state than before, the
        symptom-by-symptom fixes are on{" "}
        <InternalLink intent="notWorking" currentPath={R.oldVersions} />.
      </p>

      <h2 id="track">Tracking releases yourself</h2>
      <p>
        If you would rather not depend on a third party to tell you when
        something shipped, both apps can be watched directly.
      </p>
      <ul>
        <li>
          <strong>Reborn:</strong> the project publishes releases on GitHub, and
          the repository supports watching releases only, so you are notified
          about builds without every commit landing in your inbox. The in-app
          updater covers the same ground if you would rather stay inside the
          app.
        </li>
        <li>
          <strong>StreamFlix 2.0:</strong> Google Play shows the last updated
          date on the listing. If you installed from Play, updates arrive on
          their own and the question is usually whether to let them.
        </li>
        <li>
          <strong>Either app:</strong> check the version inside the app&rsquo;s
          own settings rather than trusting a download page. Mirror sites
          frequently label an old build with a current version number, which is
          one of the checks on{" "}
          <InternalLink intent="safe" currentPath={R.oldVersions} />.
        </li>
      </ul>
      <p>
        A habit worth forming: before you accept any update, note which build
        you are leaving. If the new one drops a provider you relied on, that
        note is the difference between a two-minute rollback and guessing.
      </p>
    </ClusterPage>
  );
}
