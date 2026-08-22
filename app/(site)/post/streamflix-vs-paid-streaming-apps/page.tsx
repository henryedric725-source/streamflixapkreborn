import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, QuickSummary } from "@/components/ContentBlocks";
import { ComparePair } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { ProsCons } from "@/components/ProsCons";
import { vsPaidFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import { REBORN } from "@/lib/variants";

const TITLE = "StreamFlix vs Netflix and Paid Apps";
const DESCRIPTION =
  "Catalog breadth, reliability, video quality, device coverage and total cost compared — including the places where the free option genuinely loses.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.vsPaid,
  dateModified: "2026-07-30",
  keywords: [
    "netflix alternative free apk",
    "streamflix vs netflix",
    "free netflix alternative android",
    "netmirror login",
    "free vs paid streaming apps",
  ],
});

const toc = [
  { href: "#question", label: "The question worth asking" },
  { href: "#catalog", label: "Catalog breadth" },
  { href: "#reliability", label: "Reliability — the real gap" },
  { href: "#quality", label: "Video and audio quality" },
  { href: "#devices", label: "Device coverage" },
  { href: "#privacy", label: "Where free genuinely wins" },
  { href: "#cost", label: "The real cost comparison" },
  { href: "#both", label: "Why most people should use both" },
];

export default function VsPaidPage() {
  return (
    <ClusterPage
      path={R.vsPaid}
      title={TITLE}
      description={DESCRIPTION}
      about={["netflix", "streaming"]}
      mentions={["subtitles", "ios", "privacy", "androidTv"]}
      dateModified="2026-07-30"
      kicker="Free versus paid"
      h1="StreamFlix vs Netflix and Paid Streaming Apps"
      answer="On catalog breadth StreamFlix competes surprisingly well, because it indexes many providers rather than one licensed library. On reliability, video quality and device coverage it does not: streams fail unpredictably, quality varies per source, and there is no iOS or Smart TV app."
      toc={toc}
      faqs={vsPaidFaqs}
      showDownload={false}
      takeaways={[
        "Catalog breadth is the one dimension where a free aggregator genuinely competes — it indexes many sources rather than one licensed library.",
        "Reliability is the real gap. A licensed stream starts and holds; an aggregated one may not, and the time spent switching servers is the actual price.",
        "Video quality is inconsistent by design, because quality belongs to whichever provider serves the title.",
        "Device coverage is not close: licensed services run on iOS, Smart TVs and consoles, where these apps run on Android only.",
        "The no-account model is a real privacy advantage that paid services cannot match.",
      ]}
    >
      <h2 id="question">The question worth asking</h2>
      <p>
        &ldquo;Is StreamFlix as good as Netflix&rdquo; is the wrong framing,
        because they are not the same kind of product. One is a licensed catalog
        with guarantees; the other is a search layer over the open web with
        none. The useful question is which set of trade-offs suits what you
        actually watch.
      </p>
      <p>
        This page is written by a site that documents the free app, so treat the
        conclusions with appropriate scepticism — and note that it says the free
        option loses on most dimensions, which is simply what the comparison
        shows.
      </p>

      <h2 id="catalog">Catalog breadth</h2>
      <p>
        The one dimension where the free option genuinely competes, and the
        reason these apps have any appeal at all.
      </p>
      <ComparePair
        leftTitle="Licensed service"
        leftItems={[
          { label: "Source", value: "One licensed library, negotiated per region" },
          { label: "Breadth", value: "Deep in originals, narrow outside them" },
          { label: "Older films", value: "Poor — licensing older catalog rarely pays" },
          { label: "Regional cinema", value: "Limited to what that service licensed" },
          { label: "Stability", value: "Titles rotate out when licences lapse" },
        ]}
        rightTitle="StreamFlix (aggregator)"
        rightItems={[
          { label: "Source", value: "20+ third-party providers indexed live" },
          { label: "Breadth", value: "Very wide, spanning many regions and eras" },
          { label: "Older films", value: "Strong — no licensing calculus applies" },
          { label: "Regional cinema", value: "Often better, particularly South Asian" },
          { label: "Stability", value: "Changes constantly and unpredictably" },
        ]}
      />
      <p>
        The honest summary: an aggregator will more often <em>have</em> an
        obscure or older title. It will less often <em>play</em> it on the first
        attempt. Which matters more depends on whether you are hunting for
        something specific or picking something to watch tonight.
      </p>

      <h2 id="reliability">Reliability — the real gap</h2>
      <p>
        Where the comparison stops being close, and the dimension that most
        determines whether people stick with a free app.
      </p>
      <DataTable
        caption="Reliability compared between a licensed service and an aggregator"
        headers={["", "Licensed service", "StreamFlix"]}
        rows={[
          ["Stream starts on first attempt", "Effectively always", "Often, not always"],
          ["Holds bitrate throughout", "Yes", "Depends on the source"],
          ["Title still there next week", "Until a licence lapses", "Unpredictable"],
          ["Subtitles present and in sync", "Yes", "Varies by source"],
          ["Correct audio track", "Yes", "Usually, occasionally mislabelled"],
          ["Right film under the right title", "Yes", "Mostly — mislabelling does occur"],
          ["Resume works across devices", "Yes", "No — local only, no account"],
          ["Support if something breaks", "Yes", "None"],
        ]}
      />
      <p>
        The practical cost is time and attention. Switching servers takes
        seconds and usually works — see{" "}
        <InternalLink intent="switchServers" currentPath={R.vsPaid} /> — but
        having to do it at all is the actual price of free. With four other
        people waiting on a sofa, that price is higher than it looks.
      </p>

      <h2 id="quality">Video and audio quality</h2>
      <QuickSummary
        bullets={[
          "Licensed services deliver consistent 1080p or 4K with HDR and Dolby Audio through a pipeline they control end to end.",
          "An aggregator delivers whatever the provider carries — sometimes excellent, sometimes 720p re-encodes, and you cannot predict which.",
          "There is no HDR or spatial audio pipeline in these apps, because there is no mastering chain behind the source.",
          "Asking for 1080p from a source that only carries 720p produces 720p. The setting is a ceiling, not a floor.",
        ]}
      >
        <p>
          On a phone the difference is modest. On a large television it is
          immediately visible, and it is not something a setting can fix — see{" "}
          <InternalLink intent="howToUse" currentPath={R.vsPaid} />.
        </p>
      </QuickSummary>

      <h2 id="devices">Device coverage</h2>
      <DataTable
        caption="Device coverage compared"
        headers={["Device", "Licensed service", "StreamFlix"]}
        rows={[
          ["Android phone", "Native app", "Yes"],
          ["iPhone / iPad", "Native app", "No — and none is possible"],
          ["Android TV / Google TV", "Native app", "Yes, Reborn only"],
          ["Fire TV", "Native app", "Yes, Reborn only"],
          ["Samsung / LG Smart TV", "Native app", "No — cast or add a stick"],
          ["Windows / Mac", "App or browser", "Emulator only"],
          ["Games consoles", "Native app", "No"],
          ["Web browser", "Yes", "No"],
        ]}
      />
      <p>
        Not close, and it matters more than a feature list suggests. If anyone in
        your household uses an iPhone or a Samsung television, the free option
        simply does not reach them — see{" "}
        <InternalLink intent="ios" currentPath={R.vsPaid} /> and{" "}
        <InternalLink intent="smartTv" currentPath={R.vsPaid} />.
      </p>

      <h2 id="privacy">Where free genuinely wins</h2>
      <ProsCons
        pros={[
          "No account, so no profile links your viewing to an identity",
          "No payment details held anywhere",
          "No server-side watch history to be disclosed or breached",
          "No cross-device tracking profile, because there is no account to build one on",
          "Reborn's code is auditable — you can verify what it does rather than trusting a policy",
          "Nothing to cancel, and nothing retained after you uninstall",
        ]}
        cons={[
          "Nothing syncs between devices, and nothing survives an uninstall",
          "Your ISP still sees which servers you connect to",
          "The third-party provider still sees your IP address",
          "StreamFlix 2.0's ad libraries collect device identifiers in the usual way",
          "No support, no accountability, and no recourse when something breaks",
          "The app itself may disappear — the original StreamFlix already did",
        ]}
      />
      <p>
        The privacy advantage is real and rarely acknowledged. Full detail on{" "}
        <InternalLink intent="privacy" currentPath={R.vsPaid} />.
      </p>

      <h2 id="cost">The real cost comparison</h2>
      <p>
        The obvious comparison is a monthly fee against zero. The honest one
        includes what free costs in other currencies:
      </p>
      <DataTable
        caption="Total cost comparison including non-monetary costs"
        headers={["Cost", "Licensed service", "StreamFlix"]}
        rows={[
          ["Monthly fee", "Yes", "None"],
          ["Setup time", "Minutes", "Sideloading, provider setup, per device"],
          ["Time lost to failed streams", "Effectively none", "Real and recurring"],
          ["Extra hardware", "None — it runs on what you own", "Possibly a streaming stick"],
          ["VPN, if you decide you want one", "Not needed", "Sometimes worth it"],
          ["Maintenance", "None", "Updates, rollbacks, provider changes"],
          ["Risk of it disappearing", "Low", "Real — it happened to the original"],
        ]}
      />
      <p>
        Free is genuinely free in money and not in attention. Whether that is a
        good trade depends entirely on how much you watch and how much your time
        is worth to you.
      </p>

      <h2 id="both">Why most people should use both</h2>
      <QuickSummary
        bullets={[
          "One subscription for the things you watch attentively — new releases, series you follow, anything on the main television.",
          "An aggregator for older, obscure, or regional titles no service currently licenses.",
          "That combination costs one subscription rather than four, and covers substantially more than four would.",
          "It also means a failed stream is an inconvenience rather than the end of the evening.",
        ]}
      >
        <p>
          This is the most defensible use of an app like StreamFlix, and it is
          what a fair reading of the comparison points to. Using it to replace
          all paid services means accepting unreliability as a permanent
          condition. Using it to fill the gaps a licensed catalog leaves is a
          genuinely good fit for what an aggregator is.
        </p>
      </QuickSummary>
      <p>
        If you are choosing which free app to add,{" "}
        <InternalLink intent="bestMovieApks" currentPath={R.vsPaid} /> ranks the
        category and{" "}
        <InternalLink intent="alternatives" currentPath={R.vsPaid} /> covers the
        direct alternatives. If you are weighing the legal side of that
        decision, <InternalLink intent="legalCheck" currentPath={R.vsPaid} />{" "}
        sets out what is actually at stake — and{" "}
        <InternalLink intent="reborn" currentPath={R.vsPaid} /> covers the app
        itself.
      </p>
      <p className="text-sm text-zinc-400">
        {REBORN.name} is documented here as software. Whether a given stream it
        surfaces is licensed is a separate question, and one the app cannot
        answer for you.
      </p>
    </ClusterPage>
  );
}
