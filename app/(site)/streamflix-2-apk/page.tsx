import type { Metadata } from "next";
import { AppScreenshot } from "@/components/AppScreenshot";
import { ClusterPage } from "@/components/ClusterPage";
import { KeyFacts, QuickSummary, SpecTable } from "@/components/ContentBlocks";
import { DownloadCta } from "@/components/DownloadCta";
import { FeatureCards } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { ProsCons } from "@/components/ProsCons";
import { VariantSupportStrip } from "@/components/VariantCompare";
import { v2Faqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { stagedMap } from "@/lib/releases";
import { R } from "@/lib/routes";
import { screenshots } from "@/lib/screenshots";
import { REBORN, V2 } from "@/lib/variants";
import { releasesForVariant } from "@/lib/versions";

const TITLE = `StreamFlix 2.0 APK: Play Store Build ${V2.version}`;
const DESCRIPTION = `StreamFlix 2.0: HD Movies & TV, build ${V2.version}, ${V2.sizeLabel}, ${V2.packageName}. A different app from StreamFlix Reborn: catalog, offline downloads, 8 subtitle languages.`;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.v2,
  keywords: [
    "streamflix 2.0 apk",
    "streamflix hd movies tv",
    "com.ajpro.streamflix2",
    "streamflix play store",
    "tv flix apk",
    "movies and tv shows apk",
  ],
});

const toc = [
  { href: "#what", label: "What StreamFlix 2.0 is" },
  { href: "#not-reborn", label: "It is not StreamFlix Reborn" },
  { href: "#spec", label: "Specification" },
  { href: "#features", label: "What it does well" },
  { href: "#subtitles", label: "Subtitle and language support" },
  { href: "#downloads", label: "Offline downloads" },
  { href: "#size", label: "Why it is 76.8 MB" },
  { href: "#devices", label: "Device support" },
  { href: "#versions", label: "Build history" },
  { href: "#verdict", label: "Strengths and limits" },
];

export default function V2Page() {
  const staged = stagedMap();
  const v2Releases = releasesForVariant("v2");

  return (
    <ClusterPage
      path={R.v2}
      title={TITLE}
      description={DESCRIPTION}
      about={["googlePlay", "apk"]}
      mentions={["android", "subtitles", "advertising", "streaming", "sideloading"]}
      dateModified="2026-08-20"
      kicker="Play Store variant"
      h1={`StreamFlix 2.0 APK: HD Movies & TV, Build ${V2.version}`}
      answer={`StreamFlix 2.0: HD Movies & TV is a closed-source app under the package ${V2.packageName}, distributed through Google Play. Build ${V2.version} is ${V2.sizeLabel} and needs Android ${V2.minAndroid}. It is a different app from StreamFlix Reborn, with offline downloads and subtitles in eight languages but no TV interface.`}
      toc={toc}
      faqs={v2Faqs}
      software={[{ variant: V2, staged: staged.v2, installPath: `${R.v2}#spec` }]}
      downloadVariant={V2}
      takeaways={[
        `StreamFlix 2.0 (${V2.packageName}) is published by a different developer from StreamFlix Reborn and shares nothing with it but the name.`,
        "It is on Google Play, which means no sideloading, no Play Protect warning, and automatic updates: the strongest practical argument for choosing it.",
        `At ${V2.sizeLabel} it is roughly 2.4× the size of Reborn, largely from bundled advertising and analytics libraries.`,
        "Offline downloads and eight-language subtitles are built in rather than provider dependent.",
        "It has no Android TV or Fire TV interface at all, so it is the wrong choice for a Firestick.",
      ]}
      featureAside={<AppScreenshot shot={screenshots.moviesTv} size="feature" priority />}
    >
      <h2 id="what">What StreamFlix 2.0 is</h2>
      <p>
        StreamFlix 2.0: HD Movies &amp; TV is an Android entertainment app that
        presents a browsable catalog of films and web series organised by genre.
        It requires no subscription and no account registration, and it is
        listed on Google Play as well as APKPure, Softonic and FileHippo.
      </p>
      <p>
        Its emphasis is different from Reborn&rsquo;s. Where Reborn searches
        third-party providers at the moment you press play, StreamFlix 2.0
        serves from its own indexed catalog. That makes it more consistent from
        title to title, but narrower in what it covers, and, because it is
        closed source: impossible to audit.
      </p>

      <div className="not-prose mt-6 rounded-2xl border border-line bg-panel p-5">
        <DownloadCta variant={V2} staged={staged.v2} />
      </div>

      <h2 id="not-reborn">It is not StreamFlix Reborn</h2>
      <p>
        This is the most consequential fact on the page, and almost every other
        site covering &ldquo;StreamFlix APK&rdquo; gets it wrong by publishing
        one merged specification table. The two apps have:
      </p>
      <SpecTable
        caption="StreamFlix 2.0 compared with StreamFlix Reborn on the fields that identify an Android app"
        rows={[
          ["Package name", `${V2.packageName} vs ${REBORN.packageName}`],
          ["Developer", `${V2.developer} vs ${REBORN.developer}`],
          ["Version scheme", `Build ${V2.version} vs semantic v${REBORN.version}`],
          ["Size", `${V2.sizeLabel} vs ${REBORN.sizeLabel}`],
          ["Minimum Android", `${V2.minAndroid} vs ${REBORN.minAndroid}`],
          ["Licence", "Proprietary vs Apache 2.0"],
          ["Distribution", "Google Play vs GitHub"],
          ["TV interface", "None vs full leanback"],
        ]}
      />
      <p>
        Because the package names differ, Android treats them as unrelated apps.
        Installing one will never update or replace the other, and you can run
        both simultaneously with two separate icons and two separate watchlists.
        The open-source alternative is covered on{" "}
        <InternalLink intent="reborn" currentPath={R.v2} />.
      </p>

      <h2 id="spec">Specification</h2>
      <KeyFacts
        items={[
          { label: "Version", value: `Build ${V2.version}` },
          { label: "Updated", value: V2.releasedOnDisplay },
          { label: "Size", value: V2.sizeLabel },
          { label: "Requires", value: `Android ${V2.minAndroid}` },
          { label: "Package", value: V2.packageName },
          { label: "Developer", value: V2.developer },
          { label: "Content rating", value: V2.contentRating },
          { label: "Price", value: "Free, ad-supported" },
        ]}
      />
      <SpecTable
        caption="StreamFlix 2.0 full specification"
        rows={[
          ["Application name", V2.name],
          ["Package name", V2.packageName],
          ["Latest build", V2.version],
          ["Updated", V2.releasedOnDisplay],
          ["File size", V2.sizeLabel],
          ["Minimum Android", V2.minAndroid],
          ["Developer", V2.developer],
          ["Licence", V2.license],
          ["Source code", "Not published"],
          ["Category", V2.category],
          ["Content rating", V2.contentRating],
          ["Subtitles", "English, Hindi, Bengali, Spanish, French, Korean, Tamil, Telugu"],
          ["Offline downloads", "Yes, built in"],
          ["Account", "Not required"],
          ["Advertising", "Ad-supported"],
        ]}
      />

      <h2 id="features">What it does well</h2>
      <FeatureCards
        items={[
          {
            title: "Play Store distribution",
            body: "The single biggest advantage. No sideloading, no unknown-sources prompt, no Play Protect warning, and updates arrive on their own.",
          },
          {
            title: "Genre-organised catalog",
            body: "Action, comedy, romance, horror, sci-fi, documentaries, and kids & family. Browsing by mood rather than searching by title.",
          },
          {
            title: "Offline downloads",
            body: "Built into the app rather than dependent on which provider serves a title, which makes it dependable in a way Reborn's downloads are not.",
          },
          {
            title: "Eight subtitle languages",
            body: "English, Hindi, Bengali, Spanish, French, Korean, Tamil and Telugu, notably strong South Asian coverage.",
          },
          {
            title: "Watchlist with progress",
            body: "Save titles and track how far through each one you are, stored locally since there is no account.",
          },
          {
            title: "New-release notifications",
            body: "Alerts when titles are added, which suits a curated catalog better than it would a live-searching aggregator.",
          },
        ]}
      />

      <h2 id="subtitles">Subtitle and language support</h2>
      <p>
        The eight-language subtitle set is the clearest area where StreamFlix
        2.0 outperforms its namesake, particularly for Hindi, Bengali, Tamil and
        Telugu. If those languages matter to you, this is the variant to try
        first.
      </p>
      <p>
        One caveat worth stating plainly: the language list is a ceiling, not a
        guarantee. Subtitle availability is per title, so a language appearing in
        the app&rsquo;s settings does not mean every film carries a track in it.
        Reborn approaches this differently: fewer guarantees, but it restyles
        subtitle size, colour and background, which Reborn users on TVs find
        more useful. See{" "}
        <InternalLink intent="subtitles" currentPath={R.v2} />.
      </p>

      <h2 id="downloads">Offline downloads</h2>
      <p>
        Downloads here are a first-class feature rather than a provider
        coincidence: pick a title, choose a quality, and it saves to the
        app&rsquo;s own storage. That storage location matters. Downloads do
        not appear in your gallery or a file manager, and uninstalling the app
        deletes all of them.
      </p>
      <p>
        Budget roughly 700 MB to 1.5 GB per feature at 1080p. Choosing a lower
        quality before downloading is the most effective way to fit more titles
        on a device with limited space. Full detail is on{" "}
        <InternalLink intent="offline" currentPath={R.v2} />.
      </p>

      <h2 id="size">Why it is 76.8 MB</h2>
      <p>
        StreamFlix 2.0 is roughly 2.4 times the size of Reborn while offering a
        narrower feature set, no TV interface, no provider system, no
        server switching. The difference is largely bundled advertising and
        analytics libraries, which is also why the app is ad-supported where
        Reborn is not.
      </p>
      <p>
        That is a fair trade if you want a Play Store install and reliable
        downloads. It is a poor one if you are on a device with limited storage
        or a metered connection, and it is the reason the{" "}
        <InternalLink intent="safe" currentPath={R.v2} /> picture differs
        between the two apps.
      </p>

      <h2 id="devices">Device support</h2>
      <VariantSupportStrip
        rebornSupported
        v2Supported
        context="Android phones and tablets"
      />
      <VariantSupportStrip
        rebornSupported
        v2Supported={false}
        context="Android TV, Google TV and Fire TV"
      />
      <p>
        StreamFlix 2.0 will technically install on an Android TV box, because
        Fire OS and Android TV are Android underneath. It is still the wrong
        choice: the phone layout expects touch input, so buttons are hard to
        reach with a D-pad and text is sized for a screen held at arm&rsquo;s
        length. For a TV, install{" "}
        <InternalLink intent="reborn" currentPath={R.v2} /> instead.
      </p>

      <h2 id="versions">Build history</h2>
      <SpecTable
        caption="StreamFlix 2.0 catalogued builds"
        rows={v2Releases.map(
          (release) =>
            [
              release.label,
              `${release.releasedOn}, ${release.sizeMb} MB, ${release.headline}`,
            ] as [string, string],
        )}
      />
      <p>
        If a Play update breaks the app on your device, rolling back means
        sideloading an earlier build: the one situation where a Play-installed
        app benefits from an archive. See{" "}
        <InternalLink intent="oldVersions" currentPath={R.v2} /> and{" "}
        <InternalLink intent="update" currentPath={R.v2} />.
      </p>

      <h2 id="verdict">Strengths and limits</h2>
      <QuickSummary
        bullets={[
          "Choose StreamFlix 2.0 for: a phone, a Play Store install, dependable offline downloads, or South Asian subtitle coverage.",
          "Choose StreamFlix Reborn for: any TV device, Android 5.x hardware, auditable code, or an ad-free interface.",
          "Both at once is fine: different packages, no conflict.",
        ]}
      >
        <p>
          Neither is strictly better. They solve overlapping problems with
          different trade-offs, and the right answer depends entirely on the
          device you are installing on.
        </p>
      </QuickSummary>
      <ProsCons pros={[...V2.highlights]} cons={[...V2.limitations]} />
    </ClusterPage>
  );
}
