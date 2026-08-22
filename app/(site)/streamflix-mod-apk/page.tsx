import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, Definition, QuickSummary } from "@/components/ContentBlocks";
import { DownloadCta } from "@/components/DownloadCta";
import { FeatureCards } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { modFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { stagedMap } from "@/lib/releases";
import { R } from "@/lib/routes";
import { REBORN, V2 } from "@/lib/variants";

const TITLE = "StreamFlix Mod APK: What You Actually Get";
const DESCRIPTION =
  "There is no official StreamFlix mod APK, and nothing to unlock. Both apps are already free. What those listings really contain, and what to install instead.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.mod,
  dateModified: "2026-08-14",
  keywords: [
    "streamflix mod apk",
    "streamflix premium apk",
    "streamflix mod apk download",
    "streamflix no ads apk",
    "streamflix vip unlock",
  ],
});

const toc = [
  { href: "#short-answer", label: "The short answer" },
  { href: "#nothing-to-unlock", label: "There is nothing to unlock" },
  { href: "#what-they-are", label: "What mod listings actually contain" },
  { href: "#risks", label: "What you are actually risking" },
  { href: "#signature", label: "Why a mod breaks your updates" },
  { href: "#instead", label: "What to install instead" },
  { href: "#spotting", label: "Spotting a mod listing before you download" },
];

export default function ModPage() {
  const staged = stagedMap();

  return (
    <ClusterPage
      path={R.mod}
      title={TITLE}
      description={DESCRIPTION}
      about={["apk", "malware"]}
      mentions={["digitalSignature", "sideloading", "playProtect", "openSource", "advertising"]}
      dateModified="2026-08-14"
      kicker="Mod intent, answered honestly"
      h1="StreamFlix Mod APK: There Isn't One, and Here's Why"
      answer="Neither StreamFlix developer publishes a mod, and there is nothing a mod could unlock. Both apps are already free, with no subscription, no premium tier, and no paywalled features. What is distributed as a 'StreamFlix mod APK' is the ordinary app repackaged and re-signed by an anonymous third party."
      toc={toc}
      faqs={modFaqs}
      takeaways={[
        "No official mod exists for either StreamFlix app. Every listing claiming one is third-party repackaging.",
        "There is no premium tier, no subscription, and no locked feature in either app, so a 'VIP unlock' has nothing to unlock.",
        "If your goal was an ad-free experience, StreamFlix Reborn already carries no advertising in its own interface, for free, officially.",
        "A repackaged build is re-signed, so it can never overlay-update your existing install and breaks the in-app updater permanently.",
        "The strongest argument against a mod here is that Reborn is open-source: you can read or rebuild the real thing, which no mod offers.",
      ]}
    >
      <h2 id="short-answer">The short answer</h2>
      <p>
        Searching for a StreamFlix mod is a reasonable instinct carried over
        from apps where it makes sense. With most Android apps, a mod removes
        ads or unlocks a paid tier, and there is a real thing being bypassed.
      </p>
      <p>
        Neither StreamFlix app has any of that. Both are free. Neither has a
        subscription, an in-app purchase, a trial, a watch limit, or a
        feature gated behind payment. A mod that promises &ldquo;premium
        unlocked&rdquo; is describing something that does not exist in the app
        it claims to modify.
      </p>

      <Definition term="Mod APK">
        A modified Android package: someone takes the original app, alters its
        code or resources, then re-signs it with their own certificate so
        Android will install it. The re-signing is unavoidable. It is what
        makes a mod detectable, and what breaks its relationship with the
        original app.
      </Definition>

      <h2 id="nothing-to-unlock">There is nothing to unlock</h2>
      <DataTable
        caption="What a mod would need to bypass in each StreamFlix app, and whether it exists"
        headers={["Typical mod claim", REBORN.shortName, V2.shortName]}
        rows={[
          ["Premium / VIP unlock", "No paid tier exists", "No paid tier exists"],
          ["Subscription bypass", "No subscription exists", "No subscription exists"],
          ["Ad removal", "Already ad-free officially", "Ad-supported: the only claim with any basis"],
          ["Unlimited streaming", "Already unlimited", "Already unlimited"],
          ["Region unlock", "Not region-locked by the app", "Not region-locked by the app"],
          ["4K / HD unlock", "Quality is the provider's, not the app's", "Quality is the catalog's, not a setting"],
          ["Login bypass", "No account required", "No account required"],
        ]}
      />
      <p>
        Only one row has any substance: StreamFlix 2.0 does carry advertising.
        But the fix for that is not a mod. It is to install{" "}
        <InternalLink intent="reborn" currentPath={R.mod} />, which carries no
        advertising in its own interface, officially, for free, with source code
        you can verify.
      </p>

      <h2 id="what-they-are">What mod listings actually contain</h2>
      <FeatureCards
        items={[
          {
            title: "The unmodified app, re-signed",
            body: "The most common case. Nothing has been changed except the signing certificate, so you have taken on all the risk of an anonymous redistributor for exactly zero benefit.",
          },
          {
            title: "The app with ads added",
            body: "The inversion people do not expect. A repackager injects their own advertising SDK into an app that had none, then distributes it as the 'no ads' build.",
          },
          {
            title: "A different app entirely",
            body: "Some listings are not StreamFlix at all. Check the package name after install, anything other than the two documented ones means you installed something else.",
          },
          {
            title: "An old build with a new label",
            body: "A legacy version relabelled as the newest. It installs, it opens, and it finds almost nothing, because its provider scrapers stopped working long ago.",
          },
          {
            title: "A download that is never the app",
            body: "Survey walls, 'downloader' stubs, and link chains that lead to an install of something unrelated. Common on sites that rank for mod terms specifically.",
          },
        ]}
      />

      <h2 id="risks">What you are actually risking</h2>
      <p>
        Being specific rather than alarmist. Here is what changes when you
        install a repackaged build instead of the real one:
      </p>
      <ul>
        <li>
          <strong>You cannot verify anything.</strong> With Reborn you can
          compare a published build against published source. A mod is
          unauditable by construction, which throws away the single biggest
          safety advantage the real app has.
        </li>
        <li>
          <strong>Permissions may have been added.</strong> Neither real app
          needs contacts, SMS, or location. A repackaged build that asks for
          them has been given a reason to.
        </li>
        <li>
          <strong>Updates stop working.</strong> Covered below. This one is
          certain rather than probable.
        </li>
        <li>
          <strong>You have no recourse.</strong> There is no project, no issue
          tracker, and no publisher behind a mod. If it misbehaves, there is
          nobody to report it to.
        </li>
      </ul>
      <p>
        The verification techniques that catch all of this are on{" "}
        <InternalLink intent="safe" currentPath={R.mod} />.
      </p>

      <h2 id="signature">Why a mod breaks your updates</h2>
      <p>
        This part is mechanical rather than a matter of opinion. Android
        identifies an app by its package name <em>and</em> its signing
        certificate. An overlay install: where a new APK replaces an old one
        and keeps its data. Only works when both match.
      </p>
      <p>
        A mod is signed by whoever repackaged it, so its certificate can never
        match the developer&rsquo;s. Concretely:
      </p>
      <ol>
        <li>
          You cannot install the official build over a mod. Android refuses with
          a signature error.
        </li>
        <li>
          You cannot install a mod over the official build, for the same reason.
        </li>
        <li>
          Reborn&rsquo;s in-app updater is permanently broken on a mod, because
          every update it fetches is signed by the project.
        </li>
        <li>
          Returning to the real app means uninstalling, which deletes your
          favourites and watch history. There is no account to restore them
          from.
        </li>
      </ol>
      <p>
        See <InternalLink intent="update" currentPath={R.mod} /> for the full
        mechanics of signature mismatches.
      </p>

      <h2 id="spotting">Spotting a mod listing before you download</h2>
      <p>
        Mod pages are written to rank, not to inform, and they share a set of
        tells that are easy to recognise once you know them.
      </p>
      <ul>
        <li>
          <strong>Feature claims that contradict the app.</strong> &ldquo;Ad-free
          unlocked&rdquo; for an app that already shows no ads, or
          &ldquo;premium activated&rdquo; where no premium tier exists. The
          claim describes a generic template rather than this software.
        </li>
        <li>
          <strong>A version number that does not match any real release.</strong>{" "}
          Mod listings routinely invent versions to look current. Cross-check
          against the archive on{" "}
          <InternalLink intent="oldVersions" currentPath={R.mod} />.
        </li>
        <li>
          <strong>A file size well away from the published figure.</strong>{" "}
          Repackaging adds weight. A build several megabytes larger than it
          should be has had something inserted.
        </li>
        <li>
          <strong>Download friction.</strong> Countdown timers, a
          &ldquo;verify you are human&rdquo; step, or a chain of redirects. That
          friction is the business model, and the file at the end of it is
          incidental.
        </li>
        <li>
          <strong>No mention of the package name.</strong> Legitimate
          documentation names the package, because that is how you confirm what
          you installed. A mod listing rarely does, since naming it invites the
          check that would expose the build.
        </li>
      </ul>
      <p>
        None of these is proof on its own. Two or three together reliably mean
        the page is not distributing what it claims.
      </p>

      <h2 id="instead">What to install instead</h2>
      <QuickSummary
        bullets={[
          "Wanted no ads? Install StreamFlix Reborn: officially ad-free in its own interface.",
          "Wanted better quality? Quality is a property of the provider. Switch sources instead of switching apps.",
          "Wanted unlocked features? Everything in both apps is already unlocked.",
          "Wanted offline downloads? StreamFlix 2.0 has them built in, no mod required.",
          "Wanted a TV interface? Reborn has one. No mod adds one to StreamFlix 2.0.",
        ]}
      >
        <p>
          Every genuine motivation behind a mod search is already served by one
          of the two official apps. That is unusual, and it is the reason this
          page can be blunt rather than hedged.
        </p>
      </QuickSummary>

      <div className="not-prose mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-line bg-panel p-5">
          <p className="kicker">Ad-free and open source</p>
          <p className="mt-2 mb-4 text-sm leading-6 text-zinc-300">
            {REBORN.name} v{REBORN.version}: {REBORN.sizeLabel}, Apache 2.0,
            with a full TV interface.
          </p>
          <DownloadCta variant={REBORN} staged={staged.reborn} size="md" />
        </div>
        <div className="rounded-2xl border border-line bg-panel p-5">
          <p className="kicker">Play Store and offline downloads</p>
          <p className="mt-2 mb-4 text-sm leading-6 text-zinc-300">
            {V2.name} build {V2.version}: {V2.sizeLabel}, with downloads built
            in.
          </p>
          <DownloadCta variant={V2} staged={staged.v2} size="md" />
        </div>
      </div>
      <p className="mt-6">
        If you have already installed a mod and want to move back to an official
        build, uninstall it first: the signature mismatch above means an
        overlay install will not work, then follow{" "}
        <InternalLink intent="install" currentPath={R.mod} />.
      </p>
    </ClusterPage>
  );
}
