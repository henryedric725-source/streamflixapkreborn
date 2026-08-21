import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, Definition, QuickSummary } from "@/components/ContentBlocks";
import { InternalLink } from "@/components/InternalLink";
import { alternatives, statusLabels } from "@/lib/alternatives";
import { bestTvApksFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import { REBORN, V2 } from "@/lib/variants";

const TITLE = "Best Streaming APKs for Android TV and Firestick (2026)";
const DESCRIPTION =
  "The shortlist that actually has a leanback interface and D-pad navigation, rather than a phone app you fight with a remote. Tested on Fire TV and Android TV.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.bestTvApks,
  keywords: [
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
  { href: "#test", label: "The test that eliminates most apps" },
  { href: "#shortlist", label: "The shortlist" },
  { href: "#why-few", label: "Why so few qualify" },
  { href: "#phone-apps", label: "Phone apps on a TV" },
  { href: "#hardware", label: "Hardware matters here" },
  { href: "#setup", label: "Setting one up" },
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
        "StreamFlix 2.0 will install on a Firestick and should not be — it is phone-layout only.",
        "Hardware matters more on TV than on a phone. A 1 GB box struggles where a Shield does not.",
      ]}
    >
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
            {index + 2}. {item.name} — {statusLabels[item.status]}
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
          ["Nvidia Shield TV", "3 GB", "Best in class — no device-side bottleneck"],
          ["Fire TV Stick 4K Max", "2 GB", "Excellent for everything in this list"],
          ["Chromecast with Google TV 4K", "2 GB", "Good; close background apps first"],
          ["Fire TV Stick 4K", "1.5 GB", "Good at 1080p, occasional stutter on heavy sources"],
          ["Fire TV Stick Lite", "1 GB", "Adequate; avoid running a VPN alongside"],
          ["Budget Android TV box", "1 GB", "Marginal — use an older, lighter build"],
        ]}
      />
      <p>
        On constrained devices, an older build is often genuinely better than
        the newest. A 1.6 series Reborn build has a lighter memory footprint
        than 1.7, and that difference is decisive on a 1 GB box — see{" "}
        <InternalLink intent="oldVersions" currentPath={R.bestTvApks} />.
      </p>
      <p>
        Also worth knowing: a VPN client is another running app competing for
        that same memory. On a 1 GB device, running both can cause the very
        stuttering you installed the VPN to fix. See{" "}
        <InternalLink intent="vpn" currentPath={R.bestTvApks} />.
      </p>

      <h2 id="setup">Setting one up</h2>
      <QuickSummary
        bullets={[
          "Fire TV: install Downloader from the Amazon Appstore, enable it under Developer Options, and fetch the APK by URL.",
          "Android TV box: install a file manager first, then sideload from a USB stick.",
          "Google TV: sideload the same way, then use a shortcut utility — Google TV hides sideloaded apps from its launcher.",
          "After installing, check the provider setting before browsing. It resolves most 'nothing plays' complaints.",
          "Use Ethernet where you can. It is the single biggest quality improvement available on a TV device.",
        ]}
      >
        <p>
          Full walkthroughs are on{" "}
          <InternalLink intent="firestick" currentPath={R.bestTvApks} /> and{" "}
          <InternalLink intent="androidTv" currentPath={R.bestTvApks} />. For
          Samsung and LG televisions, which cannot run an APK at all, see{" "}
          <InternalLink intent="smartTv" currentPath={R.bestTvApks} />.
        </p>
      </QuickSummary>

      <h2 id="live">Live TV is a separate question</h2>
      <p>
        Live-channel apps are frequently mixed into TV streaming lists, and they
        answer a different question. HD Streamz and Live NetTV serve channels
        and sport, with almost no on-demand film catalog — and neither has a
        leanback interface, which on a television is a real cost.
      </p>
      <p>
        If you want both, run an aggregator for films and a live app alongside
        it. Detail on each is on{" "}
        <InternalLink intent="alternatives" currentPath={R.bestTvApks} />, and
        the broader category ranking that includes phone-only apps is on{" "}
        <InternalLink intent="bestMovieApks" currentPath={R.bestTvApks} />.
      </p>
    </ClusterPage>
  );
}
