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
import { FeatureCards, StepCards, TrustChips } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { ProsCons } from "@/components/ProsCons";
import { ProviderGrid } from "@/components/ProviderGrid";
import { VariantCompare } from "@/components/VariantCompare";
import { homeFaqs } from "@/lib/faqs";
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

/** Homepage outline mirrors classic APK download hubs (OnStream-style). */
const toc = [
  { href: "#what-is-streamflix", label: "What is StreamFlix?" },
  { href: "#get-apk", label: "Overview and download" },
  { href: "#features", label: "Features" },
  { href: "#latest", label: "Latest version 2026" },
  { href: "#why-prefer", label: "Why users prefer it" },
  { href: "#content-library", label: "Content library and providers" },
  { href: "#screenshots", label: "Inside the app" },
  { href: "#devices", label: "Device compatibility" },
  { href: "#install", label: "How to download and install" },
  { href: "#problems", label: "Troubleshooting" },
  { href: "#pros-cons", label: "Pros and cons" },
  { href: "#alternatives", label: "Alternatives" },
  { href: "#safety", label: "Safety and legality" },
  { href: "#specs", label: "Full specification" },
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
      text: "Tap the download button for the variant you want. Reborn is 31.43 MB; StreamFlix 2.0 is 76.8 MB. Wait for the download to finish completely. A partial file is the most common cause of a failed install.",
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
      kicker="Free Android streaming APK"
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
        `StreamFlix 2.0 is ${V2.sizeLabel}, closed-source, ad-supported, and available on Google Play. Which means no sideloading and no Play Protect warning.`,
        "Neither app hosts video. Both surface streams from third-party providers, which is why titles come and go without an app update.",
        "Both are free with no account and no premium tier, so any 'mod' or 'VIP unlock' build has nothing real to unlock.",
      ]}
      featureAside={
        <AppScreenshot shot={screenshots.home} size="feature" priority />
      }
      showAuthor={false}
      showRelatedHubs={false}
      showRelatedArticles={false}
    >
      <QuickSummary
        bullets={[
          `StreamFlix Reborn v${REBORN.version}, ${REBORN.sizeLabel}, Apache 2.0, package ${REBORN.packageName}. Runs on Android 5.0 and up, plus Android TV, Google TV and Fire TV.`,
          `StreamFlix 2.0 build ${V2.version}, ${V2.sizeLabel}, closed source, package ${V2.packageName}. Android 6.0 and up, phones and tablets only.`,
          "Both are free. No account, no subscription, no premium tier, so nothing exists for a mod or VIP build to unlock.",
          "Neither app hosts video. Reborn searches more than 20 third-party providers and plays whatever they return.",
          "Firestick and Android TV owners want Reborn, installed with the Downloader app. There is no iPhone version of either app.",
        ]}
      >
        <p>
          Two unrelated Android apps ship under the StreamFlix name, and almost
          every problem readers report starts with installing the wrong one.{" "}
          <strong>StreamFlix Reborn</strong> is the open-source community fork,
          built in Kotlin, published on GitHub, and designed for a remote as
          well as a touchscreen. <strong>StreamFlix 2.0: HD Movies &amp; TV</strong>{" "}
          is a different developer&rsquo;s closed-source catalog app that lives
          on Google Play and works on phones.
        </p>
        <p>
          This page documents both, with the package names, sizes, licences and
          install routes verified against GitHub, Uptodown and Google Play in
          August 2026. If you only read one line: install Reborn on a TV device,
          install StreamFlix 2.0 on a phone if you want offline downloads and a
          Play Store install.
        </p>
      </QuickSummary>

      <h2 id="what-is-streamflix">What is StreamFlix?</h2>
      <Definition term="StreamFlix">
        StreamFlix is a free Android application for watching movies, television
        series and anime without a subscription or an account. The active build,
        StreamFlix Reborn, is an aggregator: it queries third-party streaming
        providers on demand and plays the stream they return inside its own
        player. It stores no video files, sells nothing, and asks for no
        registration. A second and unrelated app, StreamFlix 2.0: HD Movies
        &amp; TV, uses the same name and serves an indexed catalog instead.
      </Definition>
      <p>
        The original StreamFlix project was taken offline after copyright
        complaints. What people install today is the community continuation,
        maintained in the open under the Apache License 2.0. That history
        matters for two reasons. It explains why the app is absent from Google
        Play, and it explains why the fork is careful to describe itself as an
        interface to other people&rsquo;s catalogs rather than a library of its
        own.
      </p>
      <p>
        The practical shape of the app is simple. You open it, pick a provider,
        search or browse, and press play. Metadata such as runtime, release
        year, cast and director comes from TMDB. The video comes from whichever
        provider answered first. Nothing in between belongs to StreamFlix.
      </p>

      <h2 id="get-apk">Overview of the StreamFlix APK</h2>
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
          { label: "Price", value: "Free. Neither app has a paid tier" },
        ]}
      />

      <h2 id="features">Features of StreamFlix APK</h2>
      <FeatureCards
        items={[
          {
            title: "Provider and server switching",
            body: "Reborn exposes both. When a stream stalls you change source from inside the player rather than abandoning the title: the single most useful habit for this class of app.",
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

      <h2 id="latest">Latest StreamFlix APK version 2026</h2>
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
        They can both be installed at once. Different package names mean
        Android treats them as unrelated apps. Full breakdowns live on{" "}
        <InternalLink intent="reborn" currentPath={R.home} /> and{" "}
        <InternalLink intent="v2" context="generic" currentPath={R.home} />.
      </p>

      <h3 id="which">Which StreamFlix should you install?</h3>
      <p>
        Six situations cover almost everyone who lands here. Find yours and stop
        reading this section.
      </p>
      <DataTable
        caption="Which StreamFlix build suits which device and requirement"
        headers={["Your situation", "Install", "Why"]}
        rows={[
          [
            "Firestick, Fire TV, Android TV or Google TV",
            "StreamFlix Reborn",
            "It is the only build with a genuine leanback interface for a D-pad remote.",
          ],
          [
            "Android phone and you want a Play Store install",
            "StreamFlix 2.0",
            "It is listed on Google Play, so there is no sideloading and no Play Protect notice.",
          ],
          [
            "A device still on Android 5.0 or 5.1",
            "StreamFlix Reborn",
            "StreamFlix 2.0 requires Android 6.0 and will refuse to install.",
          ],
          [
            "You want code you can read and verify",
            "StreamFlix Reborn",
            "Apache 2.0 source is published on GitHub, so the build can be audited.",
          ],
          [
            "Offline downloads that always work",
            "StreamFlix 2.0",
            "Downloads are built in rather than left to the serving provider.",
          ],
          [
            "iPhone or iPad",
            "Neither",
            "No iOS build exists. An Android package cannot run on iOS at all.",
          ],
        ]}
      />
      <p>
        Still unsure? Install StreamFlix Reborn. It supports more devices, takes
        less storage, carries no advertising in its own interface, and its code
        can be checked by anyone. StreamFlix 2.0 wins on exactly two points: the
        Play Store install and guaranteed offline downloads.
      </p>

      <h2 id="why-prefer">Why users prefer StreamFlix</h2>
      <p>
        People land on StreamFlix for a short list of practical reasons: both
        apps are free, neither forces an account, Reborn works with a TV remote,
        and StreamFlix 2.0 installs from Google Play when you want a store
        path. The catalog is wide because Reborn queries many providers, and
        switching servers inside the player fixes most stalls without
        reinstalling anything.
      </p>
      <ul>
        <li>No subscription and no login wall on either app</li>
        <li>One leanback package for Firestick and Android TV (Reborn)</li>
        <li>Play Store install available for StreamFlix 2.0 on phones</li>
        <li>Subtitles, multiple servers, and offline downloads on 2.0</li>
        <li>Open-source Reborn build you can verify against GitHub</li>
      </ul>
      <p>
        If a stream fails, the useful move is usually to change provider or
        server — covered in{" "}
        <InternalLink intent="howToUse" currentPath={R.home} /> and{" "}
        <InternalLink intent="notWorking" context="generic" currentPath={R.home} />
        — not to hunt for a &ldquo;mod&rdquo; unlock.
      </p>

      <h2 id="content-library">Content library and categories</h2>
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

      <h3 id="providers">Providers, and which one to choose</h3>
      <p>
        Provider choice is the single setting that decides whether StreamFlix
        feels excellent or broken, and it is the question readers ask most after
        installing. A provider is an external site the app knows how to query.
        Reborn ships support for more than twenty of them, grouped by language
        and content type.
      </p>
      <DataTable
        caption="How to pick a StreamFlix provider by what you want to watch"
        headers={["What you want to watch", "Provider type to select", "What to expect"]}
        rows={[
          [
            "Mainstream English films and series",
            "A TMDB-backed English provider",
            "The most complete metadata and the closest match between search results and real titles.",
          ],
          [
            "Anime, subbed or dubbed",
            "A dedicated anime provider",
            "Season and episode numbering that actually matches the series, which general providers often get wrong.",
          ],
          [
            "Films in Spanish, French, Italian or German",
            "The regional provider for that language",
            "Native audio and local release catalogs rather than machine subtitles over an English source.",
          ],
          [
            "A title that refuses to play anywhere",
            "Any second provider, then a second server",
            "Most failures are one dead source, not a missing title. Two switches resolve the majority of them.",
          ],
        ]}
      />
      <p>
        There is no permanent best provider, and any page that names one as a
        fixed answer is describing a snapshot. Providers are independent sites.
        They change hosts, add rate limits, and go quiet, and the app has no
        control over any of it. Treat the provider selector the way you would
        treat channel buttons rather than a preference you set once.
      </p>
      <p>
        StreamFlix 2.0 has no provider selector at all. It serves from a single
        indexed catalog, which makes results more predictable and the library
        considerably narrower.
      </p>

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

      <h2 id="devices">Device compatibility</h2>
      <p>
        The honest version, including the devices where the answer is no. If a
        row says &ldquo;Not supported&rdquo;, no APK, no tutorial, and no
        workaround changes that.
      </p>
      <DeviceMatrix />

      <h2 id="install">How to download and install StreamFlix APK</h2>
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

      <h3 id="downloader-code">Downloader codes for Firestick and Android TV</h3>
      <p>
        Fire OS has no web browser, so the standard route onto a Firestick is
        the Downloader app from the Amazon Appstore. Downloader accepts either a
        full web address or a short numeric code that stands in for one. Those
        codes are why almost every Firestick tutorial hands you six digits
        instead of a link.
      </p>
      <p>
        Worth knowing before you type one in: a Downloader code is not issued by
        the StreamFlix developer and is not part of the app. Anyone can register
        one, and it points wherever its owner decides. Codes such as 730116 and
        250931 circulate widely and resolve to individual tutorial sites rather
        than to the project. When a code stops working, the destination changed,
        not the app.
      </p>
      <DataTable
        caption="Downloader input methods compared"
        headers={["Method", "What you type", "Trade-off"]}
        rows={[
          [
            "Numeric code",
            "Six digits in the Downloader URL field",
            "Fast on a remote, but you cannot see where it leads until the page loads.",
          ],
          [
            "Full APK address",
            "The direct link to the package file",
            "Longer to enter, and you know exactly which file you are fetching.",
          ],
          [
            "Short redirect link",
            "A shortened address supplied by a guide",
            "Same convenience as a code, same uncertainty about the destination.",
          ],
        ]}
      />
      <p>
        Whichever route you take, the check afterwards is the same. Open
        Settings, Applications, Manage installed applications, and confirm the
        package reads {REBORN.packageName}. A different package name means you
        installed a repackaged build and should remove it. The full walkthrough
        with screenshots sits in the{" "}
        <InternalLink intent="firestick" currentPath={R.home} /> guide.
      </p>

      <h3 id="other-platforms">StreamFlix on PC, iPhone and Smart TV</h3>
      <p>
        Three platforms generate the most search traffic and the most
        misinformation, so here are the direct answers.
      </p>
      <DataTable
        caption="StreamFlix availability on non-Android platforms"
        headers={["Platform", "Is there a native build?", "What actually works"]}
        rows={[
          [
            "Windows 10 and Windows 11 PC",
            "No",
            "Run the APK inside an Android emulator such as BlueStacks, or use Windows Subsystem for Android where it is still available.",
          ],
          [
            "macOS",
            "No",
            "An Android emulator is the only route, and performance on Apple silicon varies by emulator.",
          ],
          [
            "iPhone and iPad",
            "No, and none is possible",
            "An APK cannot run on iOS. Pages advertising a StreamFlix IPA are collecting installs or survey completions.",
          ],
          [
            "Samsung Tizen and LG webOS TVs",
            "No",
            "Neither platform accepts Android packages. Add a cheap Fire TV or Google TV stick, or cast from a phone.",
          ],
        ]}
      />
      <p>
        Detailed instructions for each route live on{" "}
        <InternalLink intent="pc" currentPath={R.home} />,{" "}
        <InternalLink intent="ios" currentPath={R.home} /> and{" "}
        <InternalLink intent="smartTv" currentPath={R.home} />.
      </p>

      <h2 id="problems">Troubleshooting common problems</h2>
      <p>
        Because the app depends on outside sources, most faults are provider
        faults wearing an app-shaped error message. The fixes below are ordered
        by how often they work.
      </p>
      <DataTable
        caption="StreamFlix errors and their usual causes"
        headers={["Symptom", "Most likely cause", "Fix that works"]}
        rows={[
          [
            "No sources found",
            "The selected provider has no copy of that title",
            "Switch provider, then search again. Try the original title rather than a translated one.",
          ],
          [
            "Constant buffering",
            "A slow or overloaded provider server",
            "Change server inside the player, then drop the quality one step.",
          ],
          [
            "HTTP 403",
            "The provider refused the request, often on geography",
            "Switch provider or server. A VPN helps only when the block is regional.",
          ],
          [
            "App not installed",
            "A partial download or a conflicting signature",
            "Delete the file, download it fully, and uninstall any older copy first.",
          ],
          [
            "Black screen with sound",
            "A codec the device player cannot decode",
            "Select a different server, or set an external player in settings.",
          ],
          [
            "Nothing loads at all",
            "An outdated build with a stale provider list",
            "Update to the current version. Old builds lose sources permanently.",
          ],
        ]}
      />
      <p>
        Each of these is worked through in detail on the{" "}
        <InternalLink intent="notWorking" currentPath={R.home} /> page.
      </p>

      <h2 id="pros-cons">Pros and cons</h2>
      <ProsCons
        pros={[
          "Free with no account, no subscription, and no paywalled features",
          "Reborn's source is public under Apache 2.0, so the build is verifiable",
          "One universal package covers phones, tablets, Android TV, Google TV and Fire TV",
          "Genuine TV interface rather than a phone layout fought with a remote",
          "Provider and server switching turns most playback failures into a two-tap fix",
          "Small download. Reborn is 31.43 MB, well under most apps in this category",
        ]}
        cons={[
          "Neither app owns its content, so individual streams break without warning",
          "Play Protect warns on every sideload, which alarms first-time installers",
          "No iOS build exists, and none can. An APK cannot run on iPhone or iPad",
          "Stream quality is inconsistent because it is a property of the provider, not the app",
          "The original StreamFlix was removed by DMCA, and the fork carries the same structural risk",
          "StreamFlix 2.0 is ad-supported and has no TV layout at all",
        ]}
      />

      <h2 id="alternatives">Alternatives to StreamFlix APK</h2>
      <p>
        No single app in this category stays reliable indefinitely, so keeping a
        second one installed is ordinary prudence rather than a workaround.
        Apps most often compared with StreamFlix include Cinema HD, BeeTV,
        CyberFlix TV, NetMirror, OnStream, Live NetTV and HD Streamz, each with
        different strengths and different states of maintenance.
      </p>
      <p>
        The distinction that matters when you compare them is aggregator against
        catalog. Aggregators such as StreamFlix Reborn search external providers
        and so have the widest reach and the least consistency. Catalog apps
        serve their own index, which is steadier and smaller. The full
        comparison, including which apps still have a working TV interface, is
        on <InternalLink intent="alternatives" currentPath={R.home} /> and{" "}
        <InternalLink intent="bestTvApks" context="generic" currentPath={R.home} />.
      </p>

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
        <InternalLink intent="legalCheck" context="generic" currentPath={R.home} />,{" "}
        <InternalLink intent="vpn" currentPath={R.home} />, and{" "}
        <InternalLink intent="about" context="generic" currentPath={R.home} />.
      </p>

      <h2 id="specs">Full specification</h2>
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
