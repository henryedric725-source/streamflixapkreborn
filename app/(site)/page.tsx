import type { Metadata } from "next";
import Link from "next/link";
import { AppScreenshot } from "@/components/AppScreenshot";
import { ClusterPage } from "@/components/ClusterPage";
import {
  DataTable,
  KeyFacts,
  QuickSummary,
  SpecTable,
} from "@/components/ContentBlocks";
import { DeviceMatrix } from "@/components/DeviceMatrix";
import { FeatureCards, StepCards, TrustChips } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { ProsCons } from "@/components/ProsCons";
import { ProviderGrid } from "@/components/ProviderGrid";
import { VariantCompare } from "@/components/VariantCompare";
import { homeFaqs } from "@/lib/faqs";
import { postCategories } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";
import { stagedMap } from "@/lib/releases";
import { R } from "@/lib/routes";
import type { HowToData } from "@/lib/schema";
import { galleryOrder, screenshots } from "@/lib/screenshots";
import {
  DEFAULT_DESCRIPTION,
  HOME_H1,
  HOME_TITLE,
  PRIMARY_KEYWORDS,
} from "@/lib/site";
import { REBORN, V2 } from "@/lib/variants";

export const metadata: Metadata = pageMetadata({
  title: HOME_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: R.home,
  dateModified: "2026-08-22",
  keywords: [...PRIMARY_KEYWORDS],
  absoluteTitle: true,
});

const toc = [
  { href: "#get-apk", label: "Download both versions" },
  { href: "#compare", label: "Reborn vs StreamFlix 2.0" },
  { href: "#which", label: "Which one should you install?" },
  { href: "#what-is-it", label: "What StreamFlix actually is" },
  { href: "#features", label: "Features that hold up in testing" },
  { href: "#screenshots", label: "Inside the app" },
  { href: "#devices", label: "Device support matrix" },
  { href: "#install", label: "Install in four steps" },
  { href: "#pros-cons", label: "Strengths and limits" },
  { href: "#safety", label: "Safety, legality and privacy" },
  { href: "#blog", label: "Every article on this site" },
];

const androidHowTo: HowToData = {
  name: "Install StreamFlix APK on an Android phone",
  description:
    "Download the package, allow installs from the app you downloaded it with, install it, and confirm the package name matches.",
  path: R.home,
  fragment: "howto-android",
  totalTime: "PT4M",
  steps: [
    {
      name: "Download the package",
      text: "Tap the download button for the variant you want. Reborn is 31.43 MB; StreamFlix 2.0 is 76.8 MB. Wait for the download to finish completely — a partial file is the most common cause of a failed install.",
    },
    {
      name: "Allow installs from that app",
      text: "Open the file and approve the prompt. On Android 8.0 and newer the permission is granted per app, so the prompt names the browser or file manager you downloaded with rather than the system as a whole.",
    },
    {
      name: "Install and dismiss the Play Protect notice",
      text: "Tap Install. Google Play Protect warns about any app installed outside the Play Store; this reflects the install method, not a detection. Choose Install anyway to continue.",
    },
    {
      name: "Verify what you installed",
      text: "Open Settings, Apps, and confirm the package name reads com.streamflixreborn.streamflix or com.ajpro.streamflix2. Anything else means you installed a repackaged build and should uninstall it.",
    },
  ],
};

const firestickHowTo: HowToData = {
  name: "Install StreamFlix Reborn on a Fire TV Stick",
  description:
    "Enable unknown sources for Downloader, fetch the APK by URL, and launch the leanback interface.",
  path: R.home,
  fragment: "howto-firestick",
  totalTime: "PT6M",
  toolName: `${REBORN.name} v${REBORN.version}`,
  steps: [
    {
      name: "Enable Downloader as an install source",
      text: "Go to Settings, My Fire TV, Developer Options, Install unknown apps, and switch Downloader on. Fire OS requires this per app, exactly as Android does.",
    },
    {
      name: "Fetch the APK by URL",
      text: "Open Downloader, enter the direct APK address in the URL field, and press Go. Downloader retrieves the file and offers to install it as soon as the transfer finishes.",
    },
    {
      name: "Install and delete the installer file",
      text: "Choose Install, then Done, then Delete to remove the downloaded APK. A Fire TV Stick has very little storage and keeping the installer wastes a meaningful share of it.",
    },
    {
      name: "Find it in the Apps row",
      text: "Sideloaded apps land at the end of the Apps row rather than on the home screen. Long-press it there and move it forward so you are not scrolling to it every time.",
    },
  ],
};

export default function HomePage() {
  const staged = stagedMap();

  return (
    <ClusterPage
      path={R.home}
      title={HOME_TITLE}
      description={DEFAULT_DESCRIPTION}
      about={["apk", "android", "streaming"]}
      mentions={["sideloading", "androidTv", "fireTv", "googlePlay", "openSource", "playProtect"]}
      dateModified="2026-08-22"
      kicker="Android package documentation"
      h1={HOME_H1}
      answer={`Two different Android apps share the StreamFlix name. StreamFlix Reborn v${REBORN.version} is the open-source build for phones and TV; StreamFlix 2.0 build ${V2.version} is a separate closed-source app on Google Play. Pick Reborn for a Firestick or Android TV, and StreamFlix 2.0 for a phone with offline downloads.`}
      toc={toc}
      faqs={homeFaqs}
      software={[
        { variant: REBORN, staged: staged.reborn },
        { variant: V2, staged: staged.v2 },
      ]}
      howTo={androidHowTo}
      howTos={[firestickHowTo]}
      takeaways={[
        `StreamFlix Reborn (${REBORN.packageName}) and StreamFlix 2.0 (${V2.packageName}) are unrelated apps from different developers, not two versions of one app.`,
        `Reborn is ${REBORN.sizeLabel}, Apache 2.0 licensed, open-source, and the only one of the two with a real Android TV and Fire TV interface.`,
        `StreamFlix 2.0 is ${V2.sizeLabel}, closed-source, ad-supported, and available on Google Play — which means no sideloading and no Play Protect warning.`,
        "Neither app hosts video. Both surface streams from third-party providers, which is why titles come and go without an app update.",
        "Both are free with no account and no premium tier, so any 'mod' or 'VIP unlock' build has nothing real to unlock.",
      ]}
      featureAside={
        <AppScreenshot shot={screenshots.home} size="feature" priority />
      }
    >
      <h2 id="get-apk">Download StreamFlix APK</h2>
      <p>
        Most pages covering this app publish a single specification table, and it
        is wrong, because it merges two unrelated apps. Below are both, each with
        its own package name, version, size, and download path. Check which one
        you actually want before you install anything.
      </p>

      <VariantCompare rebornStaged={staged.reborn} v2Staged={staged.v2} />

      <TrustChips
        items={[
          "No account required",
          "No subscription",
          "Verified package names",
          "Both variants documented",
        ]}
      />

      <KeyFacts
        items={[
          { label: "StreamFlix Reborn version", value: `v${REBORN.version} (${REBORN.releasedOnDisplay})` },
          { label: "StreamFlix 2.0 version", value: `Build ${V2.version} (${V2.releasedOnDisplay})` },
          { label: "Reborn package", value: REBORN.packageName },
          { label: "StreamFlix 2.0 package", value: V2.packageName },
          { label: "Reborn size / requirement", value: `${REBORN.sizeLabel}, Android ${REBORN.minAndroid}` },
          { label: "StreamFlix 2.0 size / requirement", value: `${V2.sizeLabel}, Android ${V2.minAndroid}` },
          { label: "Licences", value: "Apache 2.0 (Reborn), proprietary (StreamFlix 2.0)" },
          { label: "Price", value: "Free — neither app has a paid tier" },
        ]}
      />

      <h2 id="compare">StreamFlix Reborn vs StreamFlix 2.0</h2>
      <p>
        These two apps are confused constantly, and the confusion is the reason
        so much advice about StreamFlix does not work: a Firestick tutorial
        written for Reborn will not help someone who installed StreamFlix 2.0,
        and a Play Store link is useless to someone looking for Reborn. The
        table above is the short version. The practical differences are these:
      </p>
      <ul>
        <li>
          <strong>Different developers.</strong> Reborn is published by the
          streamflix-reborn project on GitHub. StreamFlix 2.0 comes from an
          unrelated developer and is listed on Google Play.
        </li>
        <li>
          <strong>Different licences.</strong> Reborn is Apache 2.0, so its full
          source is readable and its build is verifiable. StreamFlix 2.0 is
          closed-source, so you are trusting the publisher rather than checking.
        </li>
        <li>
          <strong>Different device coverage.</strong> Reborn has a real leanback
          interface for TV. StreamFlix 2.0 has a phone layout only.
        </li>
        <li>
          <strong>Different install routes.</strong> StreamFlix 2.0 installs
          from Play with no sideloading. Reborn must be sideloaded, which is
          also why it triggers the Play Protect notice.
        </li>
      </ul>
      <p>
        They can both be installed at once — different package names mean
        Android treats them as unrelated apps. Full breakdowns live on{" "}
        <InternalLink intent="reborn" currentPath={R.home} /> and{" "}
        <InternalLink intent="v2" currentPath={R.home} />.
      </p>

      <h2 id="which">Which StreamFlix should you install?</h2>
      <QuickSummary
        bullets={[
          "Firestick, Android TV, or Google TV — install StreamFlix Reborn. It is the only one with a TV interface.",
          "Android phone and you want a Play Store install — install StreamFlix 2.0.",
          "Android 5.0 or 5.1 device — StreamFlix Reborn is your only option, as StreamFlix 2.0 needs Android 6.0.",
          "You care about auditable code — StreamFlix Reborn, because the source is published.",
          "You want offline downloads that always work — StreamFlix 2.0 has them built in.",
          "iPhone or iPad — neither. No iOS build of either app exists.",
        ]}
      >
        <p>
          If you are unsure, install StreamFlix Reborn. It runs on more devices,
          it is smaller, it carries no advertising in its own interface, and its
          code can be checked. StreamFlix 2.0 wins on exactly two things: a Play
          Store install and guaranteed offline downloads.
        </p>
      </QuickSummary>

      <h2 id="what-is-it">What StreamFlix actually is</h2>
      <p>
        StreamFlix Reborn is an <strong>aggregator</strong>, and understanding
        that single word explains almost every question people have about it. It
        does not hold a library of films. It searches third-party providers when
        you press play, then hands the resulting stream to its own player. Its
        own documentation states plainly that it does not host, store, or
        distribute copyrighted content.
      </p>
      <ProviderGrid />
      <p>
        This is why the catalog changes without an app update, why one title
        fails while the next plays instantly, and why{" "}
        <InternalLink intent="switchServers" currentPath={R.home} /> resolves
        most complaints. It is also why the{" "}
        <InternalLink intent="legalCheck" currentPath={R.home} /> question is
        about the streams rather than the software.
      </p>
      <p>
        StreamFlix 2.0 works differently: it serves from its own indexed catalog
        rather than searching providers live. That makes it more consistent
        title-to-title, but narrower, and impossible to audit.
      </p>

      <h2 id="features">Features that hold up in testing</h2>
      <FeatureCards
        items={[
          {
            title: "Provider and server switching",
            body: "Reborn exposes both. When a stream stalls you change source from inside the player rather than abandoning the title — the single most useful habit for this class of app.",
          },
          {
            title: "Real TV navigation",
            body: "Reborn's leanback interface is built for a D-pad, with focus states that actually land on the control you aimed at. Very few apps in this category bother.",
          },
          {
            title: "Subtitles and audio tracks",
            body: "Both apps let you pick a subtitle track and an audio track per title. Reborn additionally restyles subtitle size, colour and background.",
          },
          {
            title: "Offline downloads",
            body: "Built into StreamFlix 2.0. In Reborn it depends on whether the serving provider supports it, so treat it as a bonus rather than a guarantee.",
          },
          {
            title: "Resume where you stopped",
            body: "Both track playback position. Because there is no account, that history is local to the device and does not follow you elsewhere.",
          },
          {
            title: "No account, ever",
            body: "Neither app asks for an email, a password, or a payment method. There is no profile to leak, and equally nothing to restore after an uninstall.",
          },
        ]}
      />

      <h2 id="screenshots">Inside the app</h2>
      <p>
        These are the actual in-app screens rather than promotional artwork.
        Note the detail view: runtime, release year, original language, budget,
        revenue and director all render before you commit to playing anything.
      </p>
      <div className="not-prose mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {galleryOrder.slice(0, 4).map((key) => (
          <AppScreenshot key={key} shot={screenshots[key]} size="phone" />
        ))}
      </div>
      <div className="not-prose mt-6 grid gap-5 md:grid-cols-2">
        {galleryOrder.slice(4).map((key) => (
          <AppScreenshot key={key} shot={screenshots[key]} size="wide" />
        ))}
      </div>

      <h2 id="devices">Device support matrix</h2>
      <p>
        The honest version, including the devices where the answer is no. If a
        row says &ldquo;Not supported&rdquo;, no APK, no tutorial, and no
        workaround changes that.
      </p>
      <DeviceMatrix />

      <h2 id="install">Install StreamFlix in four steps</h2>
      <StepCards
        items={androidHowTo.steps.map((step, index) => ({
          n: String(index + 1).padStart(2, "0"),
          title: step.name,
          body: step.text,
        }))}
      />
      <p>
        That is the phone route. For a Fire TV Stick you need{" "}
        <InternalLink intent="firestickDownloader" currentPath={R.home} />{" "}
        instead, because Fire OS has no browser to download with. The full
        walkthroughs, including what to do when the install fails, are in the{" "}
        <InternalLink intent="install" currentPath={R.home} /> guide.
      </p>

      <h2 id="pros-cons">Strengths and limits</h2>
      <ProsCons
        pros={[
          "Free with no account, no subscription, and no paywalled features",
          "Reborn's source is public under Apache 2.0, so the build is verifiable",
          "One universal package covers phones, tablets, Android TV, Google TV and Fire TV",
          "Genuine TV interface rather than a phone layout fought with a remote",
          "Provider and server switching turns most playback failures into a two-tap fix",
          "Small download — Reborn is 31.43 MB, well under most apps in this category",
        ]}
        cons={[
          "Neither app owns its content, so individual streams break without warning",
          "Play Protect warns on every sideload, which alarms first-time installers",
          "No iOS build exists, and none can — an APK cannot run on iPhone or iPad",
          "Stream quality is inconsistent because it is a property of the provider, not the app",
          "The original StreamFlix was removed by DMCA, and the fork carries the same structural risk",
          "StreamFlix 2.0 is ad-supported and has no TV layout at all",
        ]}
      />

      <h2 id="safety">Safety, legality and privacy</h2>
      <p>
        Three separate questions that get run together, so it is worth
        separating them.
      </p>
      <DataTable
        caption="Safety, legality and privacy questions separated with their short answers"
        headers={["Question", "Short answer", "Where it is covered"]}
        rows={[
          [
            "Is the file safe?",
            "The official builds scan clean, and Reborn's code is auditable. Repackaged copies are the real risk.",
            "Safety and verification guide",
          ],
          [
            "Is using it legal?",
            "The app is lawful software. The streams it indexes are the open question, and the law differs by country.",
            "Legality guide",
          ],
          [
            "What data is collected?",
            "No account means no profile. StreamFlix 2.0's ad libraries still collect device identifiers.",
            "Permissions and privacy guide",
          ],
          [
            "Do I need a VPN?",
            "Not to make the app work. It matters for ISP visibility and ISP-level blocking.",
            "VPN guide",
          ],
        ]}
      />
      <p>
        Each of those has its own page:{" "}
        <InternalLink intent="safe" currentPath={R.home} />,{" "}
        <InternalLink intent="legalCheck" currentPath={R.home} />,{" "}
        <InternalLink intent="privacy" currentPath={R.home} />, and{" "}
        <InternalLink intent="vpn" currentPath={R.home} />.
      </p>

      <h2 id="blog">Every article on this site</h2>
      <p>
        One page per question, so nothing is buried inside a page about
        something else.
      </p>
      <div className="not-prose mt-6 space-y-6">
        {postCategories.map((cluster) => (
          <section key={cluster.id}>
            <h3 className="font-serif text-xl text-paper">{cluster.name}</h3>
            <p className="mt-1 text-sm leading-6 text-zinc-400">
              {cluster.blurb}
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {cluster.posts.map((guide) => (
                <li key={guide.href}>
                  <Link
                    href={guide.href}
                    className="block rounded-lg border border-line bg-panel px-4 py-3 transition hover:border-flame"
                  >
                    <span className="block text-sm font-medium text-paper">
                      {guide.title}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-zinc-400">
                      {guide.summary}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <h2 id="specs">Full specification, both apps</h2>
      <SpecTable
        caption="StreamFlix Reborn specification"
        rows={[
          ["App", REBORN.name],
          ["Package", REBORN.packageName],
          ["Version", `v${REBORN.version} (${REBORN.releasedOnDisplay})`],
          ["Size", REBORN.sizeLabel],
          ["Requires", `Android ${REBORN.minAndroid}`],
          ["Developer", REBORN.developer],
          ["Licence", REBORN.license],
          ["Category", REBORN.category],
          ["Content rating", REBORN.contentRating],
          ["Price", "Free"],
        ]}
      />
      <SpecTable
        caption="StreamFlix 2.0 specification"
        rows={[
          ["App", V2.name],
          ["Package", V2.packageName],
          ["Version", `Build ${V2.version} (${V2.releasedOnDisplay})`],
          ["Size", V2.sizeLabel],
          ["Requires", `Android ${V2.minAndroid}`],
          ["Developer", V2.developer],
          ["Licence", V2.license],
          ["Category", V2.category],
          ["Content rating", V2.contentRating],
          ["Price", "Free, ad-supported"],
        ]}
      />
    </ClusterPage>
  );
}
