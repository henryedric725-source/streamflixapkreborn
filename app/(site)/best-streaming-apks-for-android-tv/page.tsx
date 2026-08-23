import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, Definition, QuickSummary } from "@/components/ContentBlocks";
import { InternalLink } from "@/components/InternalLink";
import { alternatives, statusLabels } from "@/lib/alternatives";
import { bestTvApksFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import { REBORN, V2 } from "@/lib/variants";

const TITLE = "Best Streaming APKs for Android TV 2026";
const DESCRIPTION =
  "The shortlist that actually has a leanback interface and D-pad navigation, rather than a phone app you fight with a remote. Tested on Fire TV and Android TV.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.bestTvApks,
  dateModified: "2026-07-31",
  keywords: [
    "best apps like streamflix for android tv",
    "best apps like streamflix for android tv 2026",
    "top apps like streamflix for android tv",
    "best streamflix alternatives for android tv",
    "top streamflix alternatives android tv",
    "best streaming apks for android tv 2026",
    "best streaming apps for android",
    "android streaming apps",
    "streaming apks",
    "free streaming apps",
    "apk streaming apps",
    "best streaming apk",
    "free streaming apps for android tv",
    "tv streaming apk",
  ],
});

const toc = [
  { href: "#quick-summary", label: "Quick summary" },
  { href: "#test", label: "The test that eliminates most apps" },
  { href: "#criteria-tv", label: "How this shortlist is selected" },
  { href: "#shortlist", label: "The shortlist" },
  { href: "#shortlist-2026", label: "The 2026 shortlist at a glance" },
  { href: "#why-few", label: "Why so few qualify" },
  { href: "#phone-apps", label: "Phone apps on a TV" },
  { href: "#hardware", label: "Hardware matters here" },
  { href: "#setup", label: "Setting one up" },
  { href: "#remote", label: "Making any app easier on a remote" },
  { href: "#live", label: "Live TV is a separate question" },
];

const tvCapable = alternatives.filter(
  (item) => item.tvShortlist && item.kind !== "paid",
);
const phoneOnly = alternatives.filter(
  (item) => !item.tvInterface && item.kind !== "paid",
);

export default function BestTvApksPage() {
  return (
    <ClusterPage
      path={R.bestTvApks}
      title={TITLE}
      description={DESCRIPTION}
      about={["androidTv", "fireTv"]}
      mentions={[
        "googleTv",
        "chromecast",
        "streaming",
        "apk",
        "sideloading",
        "android",
        "openSource",
        "netflix",
      ]}
      dateModified="2026-07-31"
      kicker="TV shortlist"
      h1="Best Streaming APKs for Android TV and Firestick"
      answer="StreamFlix Reborn leads because it ships a genuine leanback interface built for a D-pad, not a phone layout stretched to a television. OnStream and Cinema HD are the only other credible options. Most apps recommended for Firestick have no TV layout at all."
      toc={toc}
      faqs={bestTvApksFaqs}
      downloadVariant={REBORN}
      comparison={{
        name: "Best streaming APKs for Android TV and Firestick",
        description:
          "Streaming APKs with a genuine leanback interface for Android TV, Google TV and Fire TV, ranked by maintenance and remote usability.",
        items: tvCapable.map((item) => ({
          name: item.name,
          description: `${statusLabels[item.status]}. ${item.positioning}`,
        })),
      }}
      takeaways={[
        "A real leanback interface is the only criterion that matters on a TV. An app without one is unpleasant regardless of its catalog.",
        "Needing a virtual-mouse app is the clearest proof an app was never built for television.",
        "Only three free apps in this category genuinely qualify: StreamFlix Reborn, OnStream, and Cinema HD.",
        "StreamFlix 2.0 will install on a Firestick and should not be. It is phone-layout only.",
        "Hardware matters more on TV than on a phone. A 1 GB box struggles where a Shield does not.",
        "Six criteria decide the shortlist, and a real leanback interface plus current maintenance eliminate almost every app before the other four are reached.",
        "Ranking by catalog size is meaningless here. No aggregator owns a catalog, so the number is either invented or borrowed from the providers.",
        "Memory footprint is a first-class criterion on a television and barely matters on a phone, which is why phone-first rankings mislead on TV hardware.",
        "None of these is a substitute for a licensed service on the main television. Netflix and its competitors run natively on hardware no sideloaded APK reaches.",
      ]}
    >
      <QuickSummary
        bullets={[
          `StreamFlix Reborn v${REBORN.version}, ${REBORN.sizeLabel}, Android ${REBORN.minAndroid}. Open source under ${REBORN.license}, with a leanback interface for Android TV, Google TV and Amazon Fire TV.`,
          "OnStream is second: the same aggregator model, actively maintained, and a working remote layout from a single universal package.",
          "Cinema HD is third and conditional. Capable on a television, but its updates arrive irregularly, which in this category is the thing that eventually breaks an app.",
          `${V2.name} installs on a Fire TV Stick and should not be. It is phone layout only, so every control needs a virtual cursor.`,
          "Every app here depends on third-party providers, so none of them is a reliability match for a licensed service on the main television.",
          "Storage is scarce on a Fire TV Stick, which makes download size a real criterion rather than a footnote.",
        ]}
      >
        <p>
          StreamFlix Reborn is the best streaming APK for Android TV in 2026,
          because it ships a genuine leanback interface rather than a phone
          layout stretched onto a television. OnStream and Cinema HD are the
          only other credible options.
        </p>
        <p>
          Almost every other app recommended for a Firestick has no television
          layout at all. It installs, it launches, and then you drive a
          simulated mouse pointer around with a directional pad. The shortlist
          below is short for that reason and not because the category is small.
        </p>
      </QuickSummary>

      <h2 id="test">The test that eliminates most apps</h2>
      <Definition term="Leanback interface">
        A layout designed for a television: navigated by directional pad from
        three metres away, with visible focus states, text sized for viewing
        distance, and every control reachable without a pointer. Android
        provides a dedicated framework for it; most apps in this category never
        used it.
      </Definition>
      <p>
        Here is the test, and it takes ten seconds: <strong>do you need a
        mouse-toggle app to use it?</strong>
      </p>
      <p>
        If reaching a control requires a virtual cursor, the app was built for
        touch and no amount of catalog quality compensates. You will be nudging
        a simulated pointer across a screen with a remote every time you want to
        change a setting. That is the actual daily experience most Firestick
        listicles neglect to mention.
      </p>

      <h2 id="criteria-tv">How this shortlist is selected</h2>
      <p>
        Rankings in this category are mostly affiliate placements or copies of
        older rankings. The six criteria below are the ones that predict whether
        an app will still be worth having on a television next month, in the
        order they are applied.
      </p>
      <DataTable
        caption="Selection criteria for the Android TV shortlist, in order of weight"
        headers={["#", "Criterion", "Why it decides the ranking"]}
        rows={[
          [
            "1",
            "A genuine leanback interface",
            "Pass or fail, applied before anything else. Rows must navigate on a D-pad, focus must be visible across a room, and no control may need a virtual cursor",
          ],
          [
            "2",
            "Current maintenance",
            "These apps index third-party providers. When a provider changes shape the scraper breaks, so an unmaintained app finds progressively less until it finds nothing",
          ],
          [
            "3",
            "Provider fallbacks",
            "The number of sources a title can resolve from. This, not catalog size, is the real measure of coverage, because the catalog was never the app's to begin with",
          ],
          [
            "4",
            "Memory and storage footprint",
            "A 1 GB stick is normal television hardware and abnormal phone hardware. A large app that runs fine on a phone can be unusable on a Fire TV Stick Lite",
          ],
          [
            "5",
            "Ad load during playback",
            "The biggest day-to-day difference between apps that look identical on a feature list, and worse on a television where dismissing an interstitial takes a remote",
          ],
          [
            "6",
            "Whether the build can be verified",
            "Open-source software can be checked against published code or rebuilt from it. Only one app in this category offers that, which is a genuine tiebreaker rather than a slogan",
          ],
        ]}
      />
      <p>
        Two things are deliberately absent. Catalog size, because no aggregator
        owns a catalog and any number quoted for one is invented. And star
        ratings from download sites, because those describe whichever build that
        site happens to be serving, as{" "}
        <InternalLink intent="safe" currentPath={R.bestTvApks} /> explains.
      </p>

      <h2 id="shortlist">The shortlist</h2>

      <h3>1. StreamFlix Reborn</h3>
      <p>
        Ships a proper leanback interface: rows navigate cleanly with a D-pad,
        focus is drawn with a visible border rather than a subtle tint, and the
        source picker is reachable during playback without a pointer. It is also
        the only open-source option, and at {REBORN.sizeLabel} the smallest,
        which matters on a Fire TV Stick where storage is scarce.
      </p>
      <p>
        Install steps:{" "}
        <InternalLink intent="firestick" currentPath={R.bestTvApks} /> for Fire
        TV, <InternalLink intent="androidTv" currentPath={R.bestTvApks} /> for
        Android TV and Google TV.
      </p>

      {tvCapable.map((item, index) => (
        <div key={item.name}>
          <h3>
            {index + 2}. {item.name}: {statusLabels[item.status]}
          </h3>
          <p>{item.positioning}</p>
          <p>
            <strong>On a TV specifically:</strong>{" "}
            {item.tvInterface
              ? "Has a genuine leanback layout that works with a D-pad."
              : "No TV layout."}{" "}
            {item.strengths.join("; ")}.
          </p>
          <p>
            <strong>Limits:</strong> {item.weaknesses.join("; ")}.
          </p>
        </div>
      ))}

      <h2 id="shortlist-2026">The 2026 shortlist at a glance</h2>
      <p>
        The same three apps scored against the six criteria above, with the two
        most commonly mis-recommended options included so the contrast is
        visible rather than implied.
      </p>
      <DataTable
        caption="Best streaming APKs for Android TV and Fire TV in 2026, ranked"
        headers={[
          "Rank",
          "App",
          "TV interface",
          "Maintenance",
          "Size",
          "Open source",
          "Verdict for 2026",
        ]}
        rows={[
          [
            "1",
            REBORN.name,
            "Purpose-built leanback",
            "Actively maintained",
            REBORN.sizeLabel,
            "Yes",
            "The default recommendation. Smallest, only auditable build, and the only one designed for a remote from the start",
          ],
          [
            "2",
            "OnStream",
            "Yes, works on a D-pad",
            "Actively maintained",
            "Comparable",
            "No",
            "The best second app. Install it alongside Reborn rather than instead of it",
          ],
          [
            "3",
            "Cinema HD",
            "Yes, usable remote layout",
            "Sporadic updates",
            "Comparable",
            "No",
            "Conditional. Still capable, but irregular updates are what eventually kills an app in this category",
          ],
          [
            "Not ranked",
            V2.name,
            "None. Phone layout only",
            "Actively maintained",
            V2.sizeLabel,
            "No",
            "Installs on Fire TV and should not be. Every control needs a virtual cursor",
          ],
          [
            "Delisted",
            "CyberFlix TV",
            "None",
            "No longer updated",
            "Irrelevant",
            "No",
            "Abandoned. Its presence on a 2026 list means that list was not tested",
          ],
        ]}
      />
      <p>
        Two notes on reading that table. Rank one and rank two are close enough
        that most people should install both, because a fallback costs a few
        tens of megabytes and removes the commonest reason an evening fails.
        Rank three is a judgement about the future rather than the present:
        Cinema HD works now, and sporadic maintenance is precisely how the
        unranked entries below it got where they are.
      </p>
      <p>
        Nothing here matches a licensed service for reliability on a main
        television, and pretending otherwise would be dishonest. That comparison
        is made properly on{" "}
        <InternalLink intent="vsPaid" currentPath={R.bestTvApks} />, and the
        full category ranking including phone-only apps is on{" "}
        <InternalLink intent="alternatives" currentPath={R.bestTvApks} />.
      </p>

      <h2 id="why-few">Why so few qualify</h2>
      <p>
        Building a leanback interface is real additional work: a second layout,
        a different navigation model, and testing on hardware most independent
        developers do not own. Almost nobody in this category does it.
      </p>
      <DataTable
        caption="TV interface support across free streaming apps"
        headers={["App", "Real TV interface", "Needs a mouse toggle?"]}
        rows={[
          [REBORN.name, "Yes", "No"],
          [V2.name, "No", "Yes"],
          ...alternatives
            .filter((item) => item.kind !== "paid")
            .map((item) => [
              item.name,
              item.tvInterface ? "Yes" : "No",
              item.tvInterface ? "No" : "Yes",
            ]),
        ]}
      />
      <p>
        This is why a Firestick recommendation list that does not distinguish
        between &ldquo;installs on Fire TV&rdquo; and &ldquo;works on Fire
        TV&rdquo; is not worth much. Nearly every Android app installs on Fire
        TV. Very few are usable there.
      </p>

      <h2 id="phone-apps">Phone apps on a TV</h2>
      <p>
        If you have already installed one of these and found it frustrating,
        here is what you were running into:
      </p>
      <ul>
        <li>
          <strong>Unreachable controls.</strong> Buttons positioned for a
          fingertip cannot be focused with a D-pad, so a virtual cursor is the
          only way to reach them.
        </li>
        <li>
          <strong>Unreadable text.</strong> Sized for a screen at arm&rsquo;s
          length, not three metres.
        </li>
        <li>
          <strong>Unpredictable scrolling.</strong> Touch-scroll behaviour does
          not map onto D-pad presses in any consistent way.
        </li>
        <li>
          <strong>No focus indicators.</strong> Frequently you cannot tell what
          is selected at all.
        </li>
        <li>
          <strong>Dialogs off-screen.</strong> Sized for a phone aspect ratio,
          so controls land outside the visible area.
        </li>
      </ul>
      <p>
        Apps in this position include{" "}
        {phoneOnly.map((item) => item.name).join(", ")}, and{" "}
        <InternalLink intent="v2" currentPath={R.bestTvApks} />. All of them are
        fine on a phone. None belongs on a television.
      </p>

      <h2 id="hardware">Hardware matters here</h2>
      <DataTable
        caption="Streaming APK performance expectations by TV hardware class"
        headers={["Device", "RAM", "Expect"]}
        rows={[
          ["Nvidia Shield TV", "3 GB", "Best in class, no device-side bottleneck"],
          ["Fire TV Stick 4K Max", "2 GB", "Excellent for everything in this list"],
          ["Chromecast with Google TV 4K", "2 GB", "Good; close background apps first"],
          ["Fire TV Stick 4K", "1.5 GB", "Good at 1080p, occasional stutter on heavy sources"],
          ["Fire TV Stick Lite", "1 GB", "Adequate; avoid running a VPN alongside"],
          ["Budget Android TV box", "1 GB", "Marginal. Use an older, lighter build"],
        ]}
      />
      <p>
        On constrained devices, an older build is often genuinely better than
        the newest. A 1.6 series Reborn build has a lighter memory footprint
        than 1.7, and that difference is decisive on a 1 GB box. See{" "}
        <InternalLink intent="oldVersions" currentPath={R.bestTvApks} />.
      </p>
      <p>
        Also worth knowing: a VPN client is another running app competing for
        that same memory. On a 1 GB device, running both can cause the very
        stuttering you installed the VPN to fix. See{" "}
        <InternalLink intent="vpn" currentPath={R.bestTvApks} />.
      </p>

      <h2 id="setup">Setting one up</h2>
      <ol>
        <li>
          <strong>Fire TV:</strong> install Downloader from the Amazon Appstore,
          enable it under Developer Options, and fetch the APK by URL.
        </li>
        <li>
          <strong>Android TV box:</strong> install a file manager first, then
          sideload from a USB stick.
        </li>
        <li>
          <strong>Google TV:</strong> sideload the same way, then add a shortcut
          utility, because Google TV hides sideloaded apps from its launcher.
        </li>
        <li>
          <strong>Check the provider setting before browsing.</strong> That one
          step resolves most complaints about nothing playing.
        </li>
        <li>
          <strong>Use Ethernet where you can.</strong> It is the single biggest
          quality improvement available on a television device.
        </li>
      </ol>
      <p>
        Full walkthroughs are on{" "}
        <InternalLink intent="firestick" currentPath={R.bestTvApks} /> and{" "}
        <InternalLink intent="androidTv" currentPath={R.bestTvApks} />. For
        Samsung and LG televisions, which cannot run an APK at all, see{" "}
        <InternalLink intent="smartTv" currentPath={R.bestTvApks} />.
      </p>

      <h2 id="remote">Making any app easier on a remote</h2>
      <p>
        If you are stuck with an app that has no TV layout, a few adjustments
        make it tolerable without pretending they make it good.
      </p>
      <ul>
        <li>
          <strong>Raise the system font size.</strong> Android TV applies this
          across apps, and phone layouts benefit most because their text was
          sized for a screen held at arm&rsquo;s length.
        </li>
        <li>
          <strong>Pair a Bluetooth remote with a trackpad, or a small
          keyboard.</strong> This solves the reachability problem properly,
          where a virtual mouse only works around it.
        </li>
        <li>
          <strong>Set your preferences once, on a phone.</strong> Configure
          provider, quality and subtitles where the interface is comfortable,
          then leave the TV install for playback only.
        </li>
        <li>
          <strong>Use the remote app instead of the physical remote</strong> for
          anything involving typing. Searching by title with a D-pad keyboard is
          the single most tedious thing about TV streaming.
        </li>
      </ul>
      <p>
        These are mitigations, not fixes. An app built for a television needs
        none of them, which is the whole argument for the shortlist above.
      </p>

      <h2 id="live">Live TV is a separate question</h2>
      <p>
        Live-channel apps are frequently mixed into TV streaming lists, and they
        answer a different question. HD Streamz and Live NetTV serve channels
        and sport, with almost no on-demand film catalog, and neither has a
        leanback interface, which on a television is a real cost.
      </p>
      <p>
        If you want both, run an aggregator for films and a live app alongside
        it. Live-channel options such as HD Streamz and Live NetTV — and why they
        are not film-catalog swaps — are covered under{" "}
        <InternalLink intent="alternativesLive" currentPath={R.bestTvApks} />.
        For phone-first apps as well as TV ones, see{" "}
        <InternalLink
          intent="alternatives"
          context="generic"
          currentPath={R.bestTvApks}
        />
        .
      </p>
    </ClusterPage>
  );
}
