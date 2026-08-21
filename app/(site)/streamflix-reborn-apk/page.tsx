import type { Metadata } from "next";
import { AppScreenshot } from "@/components/AppScreenshot";
import { ClusterPage } from "@/components/ClusterPage";
import { KeyFacts, QuickSummary, SpecTable } from "@/components/ContentBlocks";
import { DeviceMatrix } from "@/components/DeviceMatrix";
import { DownloadCta, OfficialSources } from "@/components/DownloadCta";
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

const TITLE = `StreamFlix Reborn APK v${REBORN.version}: Open-Source Build for Android and TV`;
const DESCRIPTION = `StreamFlix Reborn v${REBORN.version} explained: ${REBORN.sizeLabel}, Apache 2.0, ${REBORN.packageName}. Provider system, Android TV interface, and the DMCA history behind the fork.`;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.reborn,
  keywords: [
    "streamflix reborn",
    "streamflix reborn apk",
    "com.streamflixreborn.streamflix",
    "streamflix open source",
    "iptv github",
    "streamflix reborn android tv",
  ],
});

const toc = [
  { href: "#what", label: "What StreamFlix Reborn is" },
  { href: "#spec", label: "Specification" },
  { href: "#history", label: "The DMCA fork history" },
  { href: "#open-source", label: "What Apache 2.0 actually buys you" },
  { href: "#providers", label: "The provider system" },
  { href: "#tv", label: "The Android TV interface" },
  { href: "#features", label: "Feature by feature" },
  { href: "#versions", label: "Version history" },
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
      kicker="Open-source variant"
      h1={`StreamFlix Reborn APK v${REBORN.version}: The Open-Source Build`}
      answer={`StreamFlix Reborn is the community fork of the original StreamFlix, published on GitHub under the Apache 2.0 licence. Version ${REBORN.version} is ${REBORN.sizeLabel}, needs Android ${REBORN.minAndroid}, and runs on phones, Android TV, Google TV and Fire TV. It aggregates 20+ third-party providers and hosts no content itself.`}
      toc={toc}
      faqs={rebornFaqs}
      software={[{ variant: REBORN, staged: staged.reborn, installPath: `${R.reborn}#spec` }]}
      downloadVariant={REBORN}
      takeaways={[
        `Package name is ${REBORN.packageName} — check it after install, because a different package name means you installed something else.`,
        "Apache 2.0 licensing means the source is public and the published build can be verified against it. No closed-source app in this category offers that.",
        "It is the only StreamFlix variant with a real leanback interface, which makes it the only sensible choice for Firestick, Android TV or Google TV.",
        "The original StreamFlix was removed after a DMCA complaint; Reborn continued from the open-source code and carries the same structural risk.",
        "It aggregates rather than hosts, so a title failing to play is a provider problem and is usually fixed by switching source.",
      ]}
      featureAside={<AppScreenshot shot={screenshots.home} size="feature" priority />}
    >
      <h2 id="what">What StreamFlix Reborn is</h2>
      <p>
        StreamFlix Reborn is an Android streaming client written in Kotlin and
        maintained as an open-source project at{" "}
        <a
          href="https://github.com/streamflix-reborn2/streamflix"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          github.com/streamflix-reborn2/streamflix
        </a>
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
        <p className="mt-3 text-sm text-zinc-400">
          Also published at the project&rsquo;s own distribution points:
        </p>
        <OfficialSources variant={REBORN} />
      </div>

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
          ["Architecture", "Universal — one file for all supported devices"],
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
          possible answer to &ldquo;is this APK safe&rdquo; — you can bypass the
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
          rather than a monetised product — not because of a mod or a patch.
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
        reliable test of whether it was actually built for TV — and Reborn does
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
            body: "Beyond selecting a track, Reborn adjusts subtitle size, colour and background — genuinely useful on a TV viewed from a distance.",
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

      <h2 id="versions">Version history</h2>
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
              `${release.releasedOn} · ${release.sizeMb} MB · ${release.headline}`,
            ] as [string, string],
        )}
      />
      <p>
        Full notes and download rows are on{" "}
        <InternalLink intent="oldVersions" currentPath={R.reborn} />, and
        release-by-release detail is on{" "}
        <InternalLink intent="changelog" currentPath={R.reborn} />.
      </p>

      <h2 id="vs">How it differs from StreamFlix 2.0</h2>
      <QuickSummary
        bullets={[
          `Different developer: ${REBORN.developer} versus ${V2.developer}.`,
          `Different package: ${REBORN.packageName} versus ${V2.packageName}.`,
          `Different size: ${REBORN.sizeLabel} versus ${V2.sizeLabel}.`,
          "Different licence: Apache 2.0 versus proprietary, so only one of them is auditable.",
          "Different distribution: GitHub and Uptodown versus Google Play and APKPure.",
          "Different device coverage: Reborn has a TV interface, StreamFlix 2.0 has none.",
        ]}
      >
        <p>
          They are unrelated apps that happen to share a name, not two versions
          of one product. Installing one does not affect the other, and both can
          sit on the same device. The full side-by-side is on{" "}
          <InternalLink intent="v2" currentPath={R.reborn} />.
        </p>
      </QuickSummary>

      <h2 id="verdict">Strengths and limits</h2>
      <ProsCons pros={[...REBORN.highlights]} cons={[...REBORN.limitations]} />
    </ClusterPage>
  );
}
