import type { Metadata } from "next";
import { AppScreenshot } from "@/components/AppScreenshot";
import { ClusterPage } from "@/components/ClusterPage";
import {
  DataTable,
  Definition,
  KeyFacts,
  QuickSummary,
  SpecTable,
} from "@/components/ContentBlocks";
import { DeviceMatrix } from "@/components/DeviceMatrix";
import { DownloadCta } from "@/components/DownloadCta";
import { FeatureCards } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { ProsCons } from "@/components/ProsCons";
import { ProviderGrid } from "@/components/ProviderGrid";
import { rebornFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { stagedMap } from "@/lib/releases";
import { R } from "@/lib/routes";
import { screenshots } from "@/lib/screenshots";
import { REBORN, V2 } from "@/lib/variants";
import { releasesForVariant } from "@/lib/versions";

const TITLE = `StreamFlix Reborn APK v${REBORN.version} Explained`;
const DESCRIPTION =
  "StreamFlix Reborn v1.7.230: 31.43 MB, Apache 2.0, com.streamflixreborn.streamflix. Provider system, Android TV interface, and the DMCA fork history.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.reborn,
  dateModified: "2026-08-21",
  keywords: [
    "streamflix reborn",
    "streamflix reborn apk",
    "com.streamflixreborn.streamflix",
    "streamflix open source",
    "iptv github",
    "streamflix reborn android tv",
    "streamflix reborn download",
    "streamflix apk github",
    "streamflix apk uptodown",
    "streamflix reborn alternative",
    "streamflix latest version apk",
  ],
});

const toc = [
  { href: "#quick-summary", label: "Quick summary" },
  { href: "#what", label: "What StreamFlix Reborn is" },
  { href: "#spec", label: "Specification" },
  { href: "#sources", label: "Where the download comes from" },
  { href: "#history", label: "The DMCA fork history" },
  { href: "#open-source", label: "What Apache 2.0 actually buys you" },
  { href: "#providers", label: "The provider system" },
  { href: "#best-provider", label: "Choosing the best provider" },
  { href: "#tv", label: "The Android TV interface" },
  { href: "#features", label: "Feature by feature" },
  { href: "#versions", label: "Version history and version strings" },
  { href: "#alternatives", label: "Alternatives to StreamFlix Reborn" },
  { href: "#vs", label: "How it differs from StreamFlix 2.0" },
  { href: "#verdict", label: "Strengths and limits" },
];

export default function RebornPage() {
  const staged = stagedMap();
  const rebornReleases = releasesForVariant("reborn");

  return (
    <ClusterPage
      path={R.reborn}
      title={TITLE}
      description={DESCRIPTION}
      about={["openSource", "apk"]}
      mentions={[
        "kotlin",
        "apache2",
        "github",
        "androidTv",
        "fireTv",
        "googleTv",
        "dmca",
        "streaming",
        "sideloading",
        "playProtect",
        "digitalSignature",
        "tmdb",
      ]}
      dateModified="2026-08-21"
      kicker="Open-source variant"
      h1={`StreamFlix Reborn APK v${REBORN.version}: The Open-Source Build`}
      answer={`StreamFlix Reborn is the community fork of the original StreamFlix, published on GitHub under the Apache 2.0 licence. Version ${REBORN.version} is ${REBORN.sizeLabel}, needs Android ${REBORN.minAndroid}, and runs on phones, Android TV, Google TV and Fire TV. It aggregates 20+ third-party providers and hosts no content itself.`}
      toc={toc}
      faqs={rebornFaqs}
      software={[{ variant: REBORN, staged: staged.reborn, installPath: `${R.reborn}#spec` }]}
      downloadVariant={REBORN}
      takeaways={[
        `Package name is ${REBORN.packageName}. Check it after install, because a different package name means you installed something else.`,
        "Apache 2.0 licensing means the source is public and the published build can be verified against it. No closed-source app in this category offers that.",
        "It is the only StreamFlix variant with a real leanback interface, which makes it the only sensible choice for Firestick, Android TV or Google TV.",
        "The original StreamFlix was removed after a DMCA complaint; Reborn continued from the open-source code and carries the same structural risk.",
        "It aggregates rather than hosts, so a title failing to play is a provider problem and is usually fixed by switching source.",
        "GitHub and Uptodown are the two distribution points the project acknowledges. Every other download page is a mirror, and mirrors relabel old builds as current.",
        "There is no permanent best provider. Match the provider to your language and content type, then switch when a source stalls.",
      ]}
      featureAside={<AppScreenshot shot={screenshots.home} size="feature" priority />}
    >
      <QuickSummary
        bullets={[
          `Latest StreamFlix Reborn download: v${REBORN.version}, ${REBORN.sizeLabel}, released ${REBORN.releasedOnDisplay}.`,
          `Package ${REBORN.packageName}, ${REBORN.license}, developer ${REBORN.developer}. Source published on GitHub.`,
          `Requires Android ${REBORN.minAndroid} or newer. Runs on phones, tablets, Android TV, Google TV and Amazon Fire TV.`,
          "Written in Kotlin. Aggregates more than 20 third-party providers and hosts no video files of its own.",
          "Free, with no account, no subscription and no advertising in the app's own interface.",
          "Distributed through GitHub releases and Uptodown. It is not on Google Play, so Play Protect warns on install.",
        ]}
      >
        <p>
          StreamFlix Reborn is the open-source continuation of StreamFlix, a free
          Kotlin app that searches third-party providers for films, series and
          anime and plays them in its own player. The current build is v
          {REBORN.version}.
        </p>
        <p>
          The name is written <strong>streamflix-reborn</strong> in the repository
          and StreamFlix Reborn in the app itself. Everything below is verified
          against the GitHub release and the Uptodown listing for{" "}
          <code>{REBORN.packageName}</code>, checked in August 2026.
        </p>
      </QuickSummary>

      <h2 id="what">What StreamFlix Reborn is</h2>
      <Definition term="StreamFlix Reborn">
        StreamFlix Reborn is a free, open-source Android streaming client written
        in Kotlin and released under the Apache License 2.0. It is an aggregator:
        it queries more than 20 third-party providers on request and plays the
        stream they return in its own player, drawing titles, cast and artwork
        from TMDB. It stores no video, requires no account, and ships a leanback
        interface for Android TV, Google TV and Amazon Fire TV alongside the phone
        layout.
      </Definition>
      <p>
        StreamFlix Reborn is an Android streaming client written in Kotlin and
        maintained as an open-source project at{" "}
        <span className="font-medium text-paper">
          github.com/streamflix-reborn2/streamflix
        </span>
        . It presents a catalog of films, series and anime, plus live channels,
        and plays them in its own player.
      </p>
      <p>
        The important qualifier is that none of that catalog belongs to the app.
        Reborn is an aggregator: it searches third-party providers on demand and
        streams whatever they return. The project&rsquo;s own documentation
        describes it as being for educational and personal use and states that
        it does not host, store, or distribute copyrighted content.
      </p>

      <div className="not-prose mt-6 rounded-2xl border border-line bg-panel p-5">
        <DownloadCta variant={REBORN} staged={staged.reborn} />
      </div>

      <h2 id="sources">Where the StreamFlix Reborn download comes from</h2>
      <p>
        Two distribution points are acknowledged by the project: GitHub releases
        and Uptodown. Everything else is a mirror that copied the file, and
        mirrors are where relabelled and repackaged builds enter circulation.
      </p>
      <DataTable
        caption="Distribution points for the StreamFlix Reborn APK and what each one is"
        headers={["Source", "What it is", "What to check"]}
        rows={[
          [
            "GitHub releases",
            "The project's own release page, published alongside the Apache 2.0 source.",
            "Nothing. This is the reference copy every other file is measured against.",
          ],
          [
            "Uptodown",
            `An acknowledged mirror carrying ${REBORN.packageName} with a version history.`,
            "Version string and file size against the published figures before you install.",
          ],
          [
            "General APK mirrors",
            "Aggregator sites that re-host the file and add their own download flow.",
            "Whether the advertised version actually matches the build inside the file.",
          ],
          [
            "Mod and 'premium' listings",
            "Repackaged builds re-signed by an anonymous third party.",
            "Avoid. The re-signing permanently breaks overlay updates and the in-app updater.",
          ],
        ]}
      />
      <p>
        Reddit threads about StreamFlix Reborn circle the same two questions:
        which provider is working, and whether a downloaded file is genuine. The
        second one has a ten-second answer. Open Settings, Apps, and confirm the
        package reads <code>{REBORN.packageName}</code>. Anything else is a
        different app wearing the name, as{" "}
        <InternalLink intent="installVerify" currentPath={R.reborn} /> sets out.
      </p>

      <h2 id="spec">Specification</h2>
      <KeyFacts
        items={[
          { label: "Version", value: `v${REBORN.version}` },
          { label: "Released", value: REBORN.releasedOnDisplay },
          { label: "Size", value: REBORN.sizeLabel },
          { label: "Requires", value: `Android ${REBORN.minAndroid}` },
          { label: "Package", value: REBORN.packageName },
          { label: "Licence", value: REBORN.license },
          { label: "Developer", value: REBORN.developer },
          { label: "Price", value: "Free, no in-app purchases" },
        ]}
      />
      <SpecTable
        caption="StreamFlix Reborn full specification"
        rows={[
          ["Application name", REBORN.name],
          ["Package name", REBORN.packageName],
          ["Latest version", `v${REBORN.version}`],
          ["Release date", REBORN.releasedOnDisplay],
          ["File size", REBORN.sizeLabel],
          ["Minimum Android", REBORN.minAndroid],
          ["Architecture", "Universal: one file for all supported devices"],
          ["Developer", REBORN.developer],
          ["Licence", REBORN.license],
          ["Source code", "Public on GitHub"],
          ["Category", REBORN.category],
          ["Content rating", REBORN.contentRating],
          ["Language", "Multi-language, provider dependent"],
          ["Account", "Not required"],
          ["Advertising", "None in the app's own interface"],
        ]}
      />

      <h2 id="history">The DMCA fork history</h2>
      <p>
        Reborn exists because its predecessor did not survive. The original
        StreamFlix was taken down following a DMCA complaint. Because the code
        had been published under an open-source licence, the project could be
        forked and continued by other developers, which is what &ldquo;Reborn&rdquo;
        refers to.
      </p>
      <p>
        That history is worth knowing for two reasons. First, it explains why
        older tutorials and download links for &ldquo;StreamFlix&rdquo; point at
        something that no longer exists. Second, it sets a realistic expectation:
        the fork uses the same aggregator model as the app that was removed, so
        it carries the same structural risk. Nothing about being a fork makes it
        immune to the same outcome. The{" "}
        <InternalLink intent="legalCheck" currentPath={R.reborn} /> page covers
        where that risk actually sits.
      </p>

      <h2 id="open-source">What Apache 2.0 actually buys you</h2>
      <p>
        &ldquo;Open source&rdquo; gets used loosely in this category, so here is
        the concrete difference it makes:
      </p>
      <ul>
        <li>
          <strong>You can read what it does.</strong> Every network call, every
          permission use, every stored value is in public code. With a
          closed-source app you are taking the publisher&rsquo;s word for it.
        </li>
        <li>
          <strong>You can rebuild it.</strong> Clone the repository, open it in
          Android Studio, and produce your own build. That is the strongest
          possible answer to &ldquo;is this APK safe&rdquo;. You can bypass the
          question entirely.
        </li>
        <li>
          <strong>Repackaging is detectable.</strong> A third party who
          re-signs the app cannot match the project&rsquo;s signing certificate,
          which is why signature checking works as a verification method. See{" "}
          <InternalLink intent="installVerify" currentPath={R.reborn} />.
        </li>
        <li>
          <strong>It explains the absence of ads.</strong> There is no
          advertising in Reborn&rsquo;s own interface because it is a project
          rather than a monetised product, not because of a mod or a patch.
        </li>
      </ul>

      <h2 id="providers">The provider system</h2>
      <p>
        This is the part most first-time users miss, and it is responsible for
        the majority of &ldquo;StreamFlix isn&rsquo;t working&rdquo; complaints.
      </p>
      <ProviderGrid />
      <p>
        Reborn ships support for more than 20 providers across several
        languages. You select one in settings, and that choice determines what
        you can find and how reliably it plays. The default is not always the
        best one for your region, so reviewing it before you browse is the
        single most useful thing you can do after installing. If a title will
        not play, the fix is almost always{" "}
        <InternalLink intent="switchServers" currentPath={R.reborn} /> rather
        than reinstalling the app.
      </p>

      <h2 id="best-provider">Choosing the best provider</h2>
      <p>
        There is no permanent best provider in StreamFlix Reborn. Providers are
        independent third-party sites, and any page naming a fixed winner is
        describing one week in its history. Match the provider to what you want to
        watch, then switch when a source stalls.
      </p>
      <DataTable
        caption="How to choose a StreamFlix Reborn provider by content type"
        headers={["What you want", "Provider to select", "What to expect"]}
        rows={[
          [
            "English films and series",
            "A TMDB-backed English provider",
            "The closest match between search results and real titles, with complete metadata.",
          ],
          [
            "Anime, subbed or dubbed",
            "A dedicated anime provider",
            "Season and episode numbering that matches the series rather than a general index.",
          ],
          [
            "Non-English releases",
            "The regional provider for that language",
            "Native audio tracks instead of machine subtitles laid over an English source.",
          ],
          [
            "Live channels and sport",
            "A provider that advertises live streams",
            "Fewer sources than the on-demand catalog, and shorter-lived ones.",
          ],
          [
            "A title that will not play anywhere",
            "Any second provider, then a second server",
            "Most failures are one dead source. Two switches clear the majority of them.",
          ],
        ]}
      />
      <p>
        The default selection is not always the best one for your region, so
        review it before you browse. Step-by-step instructions are on{" "}
        <InternalLink intent="switchServers" currentPath={R.reborn} />.
      </p>

      <h2 id="tv">The Android TV interface</h2>
      <p>
        Reborn ships a genuine leanback interface, not a phone layout stretched
        to fill a television. In practice that means focus states land on the
        control you aimed at with a D-pad, text is sized for viewing across a
        room, and you do not need a virtual-mouse app to reach buttons.
      </p>
      <p>
        This is rarer than the listicles suggest. Most apps recommended for
        Firestick are phone apps that technically install on a TV and are then
        unpleasant to drive. Whether an app needs a mouse toggle utility is a
        reliable test of whether it was actually built for TV, and Reborn does
        not. Install steps are on{" "}
        <InternalLink intent="firestick" currentPath={R.reborn} /> and{" "}
        <InternalLink intent="androidTv" currentPath={R.reborn} />.
      </p>
      <DeviceMatrix
        caption="Devices where StreamFlix Reborn runs, and how to install it on each"
        devices={undefined}
      />

      <h2 id="features">Feature by feature</h2>
      <FeatureCards
        items={[
          {
            title: "20+ providers",
            body: "Multiple third-party sources across several languages, selectable in settings. More providers means more fallbacks when one goes dark.",
          },
          {
            title: "Server switching",
            body: "Each title usually resolves to several playback servers. Switching between them from inside the player fixes most stalls without leaving the title.",
          },
          {
            title: "Quality control",
            body: "Playback defaults to 1080p where the source offers it, and can be lowered manually when the connection cannot sustain it.",
          },
          {
            title: "Subtitle styling",
            body: "Beyond selecting a track, Reborn adjusts subtitle size, colour and background: genuinely useful on a TV viewed from a distance.",
          },
          {
            title: "Audio track selection",
            body: "Where a source carries multiple audio tracks, you choose between them rather than accepting whichever plays first.",
          },
          {
            title: "In-app updater",
            body: "Reborn checks for and offers newer builds itself, which matters because it is not on any store that would update it for you.",
          },
          {
            title: "Playback speed",
            body: "Adjustable playback rate, which is unusual in this category and useful for long-form content.",
          },
          {
            title: "Resume position",
            body: "Playback position is remembered per title. Stored locally, since there is no account to sync it to.",
          },
          {
            title: "Live channels",
            body: "Alongside the on-demand catalog, provider-supplied live channels including sports coverage.",
          },
        ]}
      />

      <h2 id="versions">Version history and version strings</h2>
      <p>
        Reborn versions matter more than usual, because provider support changes
        between builds. A newer release occasionally drops a source that was
        working for you, which is why keeping the previous build available is
        worthwhile.
      </p>
      <SpecTable
        caption="StreamFlix Reborn catalogued builds"
        rows={rebornReleases.map(
          (release) =>
            [
              release.label,
              `${release.releasedOn}, ${release.sizeMb} MB, ${release.headline}`,
            ] as [string, string],
        )}
      />
      <p>
        Older 1.7 strings circulate widely on mirror sites. StreamFlix 1.7.117 is
        the one people ask about most, and it is a genuine point release from the
        same series rather than a separate app. It is not catalogued here, it
        predates the current build, and its provider list is further behind. If a
        download page offers it as the latest version, that label is wrong: the
        latest StreamFlix version is v{REBORN.version}.
      </p>
      <p>
        The safest habit is to read the version inside the app rather than from
        the page you downloaded it on. Full notes and download rows are on{" "}
        <InternalLink intent="oldVersions" currentPath={R.reborn} />.
      </p>

      <h2 id="alternatives">Alternatives to StreamFlix Reborn</h2>
      <p>
        The useful question is not which app is best overall but which one keeps
        the property you actually came for. Three of Reborn&rsquo;s properties are rare
        together: published source, a real TV interface, and no advertising in its
        own interface.
      </p>
      <DataTable
        caption="What you keep and lose when replacing StreamFlix Reborn"
        headers={["If you want", "Consider", "What you give up"]}
        rows={[
          [
            "A Play Store install on a phone",
            "StreamFlix 2.0",
            "The TV interface, the provider selector, and auditable source code.",
          ],
          [
            "Another free aggregator with a TV layout",
            "An actively maintained aggregator that supports a D-pad",
            "Apache 2.0 source, in most cases. Few free aggregators publish theirs.",
          ],
          [
            "A legal catalog with no sideloading",
            "An ad-supported free service on Google Play",
            "Catalog breadth. Licensed free tiers are far narrower than an aggregator.",
          ],
          [
            "Live channels rather than a film catalog",
            "A dedicated live-TV app",
            "The on-demand library and the resume-position handling.",
          ],
        ]}
      />
      <p>
        A broader comparison, including which apps still work and which have
        stopped updating, is on{" "}
        <InternalLink intent="alternatives" currentPath={R.reborn} />.
      </p>

      <h2 id="vs">How it differs from StreamFlix 2.0</h2>
      <p>
        They are unrelated apps that happen to share a name, not two versions of
        one product. Installing one does not affect the other, and both can sit on
        the same device with separate icons and separate watchlists.
      </p>
      <DataTable
        caption="StreamFlix Reborn against StreamFlix 2.0 on the fields that identify an Android app"
        headers={["Field", REBORN.shortName, V2.shortName]}
        rows={[
          ["Developer", REBORN.developer, V2.developer],
          ["Package name", REBORN.packageName, V2.packageName],
          ["Current release", `v${REBORN.version}`, `Build ${V2.version}`],
          ["Download size", REBORN.sizeLabel, V2.sizeLabel],
          ["Licence", "Apache License 2.0", "Proprietary, closed source"],
          ["Distribution", "GitHub, Uptodown", "Google Play, APKPure, Softonic"],
          ["TV interface", "Full leanback layout", "None, phone layout only"],
        ]}
      />
      <p>
        The full side-by-side is on{" "}
        <InternalLink intent="v2" currentPath={R.reborn} />.
      </p>

      <h2 id="verdict">Strengths and limits</h2>
      <ProsCons pros={[...REBORN.highlights]} cons={[...REBORN.limitations]} />
    </ClusterPage>
  );
}
