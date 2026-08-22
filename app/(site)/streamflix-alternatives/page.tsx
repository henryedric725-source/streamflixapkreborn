import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, QuickSummary } from "@/components/ContentBlocks";
import { InternalLink } from "@/components/InternalLink";
import { alternatives, statusLabels } from "@/lib/alternatives";
import { alternativesFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import { REBORN } from "@/lib/variants";

const TITLE = "StreamFlix Alternatives Worth Installing";
const DESCRIPTION =
  "Apps that solve the same problem when StreamFlix providers dry up — what each does better, which are still maintained, and which stopped working years ago.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.alternatives,
  dateModified: "2026-08-02",
  keywords: [
    "streamflix alternatives",
    "apps like streamflix",
    "apps like onstream",
    "onstream alternative",
    "hd streamz alternative android",
    "cinema hd alternative",
  ],
});

const toc = [
  { href: "#why", label: "Why you would need one" },
  { href: "#maintained", label: "The maintenance filter" },
  { href: "#aggregators", label: "Aggregators — the direct swaps" },
  { href: "#live-tv", label: "Live TV — a different job" },
  { href: "#catalog", label: "Catalog apps" },
  { href: "#abandoned", label: "Names to stop recommending" },
  { href: "#compare", label: "Side by side" },
  { href: "#verdict", label: "What to actually install" },
];

const freeAlts = alternatives.filter((item) => item.kind !== "paid");

export default function AlternativesPage() {
  return (
    <ClusterPage
      path={R.alternatives}
      title={TITLE}
      description={DESCRIPTION}
      about={["streaming", "apk"]}
      mentions={["androidTv", "fireTv", "openSource", "android"]}
      dateModified="2026-08-02"
      kicker="Alternatives"
      h1="StreamFlix Alternatives Worth Installing"
      answer="OnStream is the closest actively maintained aggregator with a working TV interface. Cinema HD remains capable but updates irregularly. HD Streamz solves a different problem — live channels rather than a film catalog. CyberFlix TV is abandoned and should no longer be recommended."
      toc={toc}
      faqs={alternativesFaqs}
      comparison={{
        name: "StreamFlix alternatives compared",
        description:
          "Free streaming apps compared on maintenance status, TV interface, ad load, and what each does better than StreamFlix.",
        items: freeAlts.map((item) => ({
          name: item.name,
          description: `${statusLabels[item.status]}. ${item.positioning}`,
        })),
      }}
      takeaways={[
        "Check when an app was last updated before anything else. In this category an abandoned app degrades to useless within a year or two.",
        "OnStream is the closest like-for-like alternative to StreamFlix Reborn: same model, actively maintained, real TV interface.",
        "Very few apps here have a genuine leanback interface. Most Firestick recommendations are phone apps you fight with a remote.",
        "Live TV apps like HD Streamz are not substitutes — they solve a different problem and have almost no film catalog.",
        "CyberFlix TV appears on nearly every 2026 listicle and has not shipped a build in years. Its presence is a reliable sign a list was not tested.",
      ]}
    >
      <h2 id="why">Why you would need one</h2>
      <p>
        Wanting an alternative to an aggregator usually comes down to one of
        four things, and knowing which one changes the answer entirely:
      </p>
      <QuickSummary
        bullets={[
          "Your providers stopped resolving. Try switching provider first — a different app may hit the same dead sources.",
          "You want live channels. StreamFlix's live coverage is thin. This is a genuine reason to add a second app rather than replace it.",
          "The app is too heavy for your device. A lighter app, or an older StreamFlix build, both work.",
          "You want a TV interface and installed the wrong variant. Install StreamFlix Reborn rather than a different app.",
        ]}
      >
        <p>
          The last two are worth checking before you go anywhere else — they are
          fixed by <InternalLink intent="reborn" currentPath={R.alternatives} />{" "}
          and{" "}
          <InternalLink intent="oldVersions" currentPath={R.alternatives} />{" "}
          rather than by a different app.
        </p>
      </QuickSummary>

      <h2 id="maintained">The maintenance filter</h2>
      <p>
        Apply this before any feature comparison, because it eliminates most of
        what gets recommended.
      </p>
      <p>
        These apps do not own their content. They index third-party providers,
        and when a provider changes shape or goes offline, the app breaks until
        someone ships an updated scraper. An app that stopped being maintained
        does not stay as good as it was — it degrades continuously until it
        finds almost nothing.
      </p>
      <DataTable
        caption="Maintenance status of each StreamFlix alternative"
        headers={["App", "Status", "What that means in practice"]}
        rows={alternatives.map((item) => [
          item.name,
          statusLabels[item.status],
          item.status === "maintained"
            ? "Scrapers are being kept current — worth your time"
            : item.status === "sporadic"
              ? "Works, but expect gaps when providers change"
              : item.status === "official"
                ? "A licensed service, not an aggregator"
                : "Sources have largely stopped resolving",
        ])}
      />

      <h2 id="aggregators">Aggregators — the direct swaps</h2>
      <p>
        Same model as StreamFlix Reborn: search third-party providers, play the
        result. These are the genuine like-for-like alternatives.
      </p>
      {alternatives
        .filter((item) => item.kind === "aggregator")
        .map((item) => (
          <div key={item.name}>
            <h3>
              {item.name} — {statusLabels[item.status]}
            </h3>
            <p>{item.positioning}</p>
            <DataTable
              caption={`${item.name} at a glance`}
              headers={["Property", "Value"]}
              rows={[
                ["TV interface", item.tvInterface ? "Yes" : "No"],
                ["Offline downloads", item.offlineDownloads ? "Yes" : "No"],
                ["Open source", item.openSource ? "Yes" : "No"],
                ["Ad load", item.adLoad],
                ["Cost", item.cost],
              ]}
            />
            <p>
              <strong>Better than StreamFlix at:</strong>{" "}
              {item.strengths.join("; ")}.
            </p>
            <p>
              <strong>Worse at:</strong> {item.weaknesses.join("; ")}.
            </p>
          </div>
        ))}

      <h2 id="live-tv">Live TV — a different job</h2>
      <p>
        Frequently recommended as StreamFlix alternatives, and they are not.
        These serve live channels and have almost no on-demand film catalog. If
        what you wanted was films, none of them will satisfy you.
      </p>
      {alternatives
        .filter((item) => item.kind === "live-tv")
        .map((item) => (
          <div key={item.name}>
            <h3>
              {item.name} — {statusLabels[item.status]}
            </h3>
            <p>{item.positioning}</p>
            <p>
              <strong>Strengths:</strong> {item.strengths.join("; ")}.
            </p>
            <p>
              <strong>Limits:</strong> {item.weaknesses.join("; ")}.
            </p>
          </div>
        ))}
      <p>
        The sensible pattern is to run one of these <em>alongside</em>{" "}
        StreamFlix rather than instead of it: an aggregator for films and
        series, a live-TV app for channels and sport.
      </p>

      <h2 id="catalog">Catalog apps</h2>
      {alternatives
        .filter((item) => item.kind === "catalog")
        .map((item) => (
          <div key={item.name}>
            <h3>
              {item.name} — {statusLabels[item.status]}
            </h3>
            <p>{item.positioning}</p>
            <p>
              <strong>Strengths:</strong> {item.strengths.join("; ")}.
            </p>
            <p>
              <strong>Limits:</strong> {item.weaknesses.join("; ")}.
            </p>
          </div>
        ))}
      <p>
        Catalog apps serve from their own backend rather than searching
        providers live. More consistent title to title, narrower overall, and
        harder to audit — the same trade{" "}
        <InternalLink intent="v2" currentPath={R.alternatives} /> makes against
        Reborn.
      </p>

      <h2 id="abandoned">Names to stop recommending</h2>
      <p>
        CyberFlix TV appears on nearly every &ldquo;best free movie apps
        2026&rdquo; list. It has not been updated in years, and most of its
        providers no longer resolve. It was genuinely good in its time; it is
        not now.
      </p>
      <p>
        Its continued presence on these lists is diagnostic. If a list
        recommends it in 2026, nobody on that list was installed and tested — and
        you should discount the rest of the list accordingly.
      </p>

      <h2 id="compare">Side by side</h2>
      <DataTable
        caption="StreamFlix alternatives compared across maintenance, TV support, ads and downloads"
        headers={["App", "Status", "TV interface", "Downloads", "Ads", "Open source"]}
        rows={[
          [
            REBORN.name,
            "Actively maintained",
            "Yes",
            "Provider dependent",
            "None in app",
            "Yes",
          ],
          ...freeAlts.map((item) => [
            item.name,
            statusLabels[item.status],
            item.tvInterface ? "Yes" : "No",
            item.offlineDownloads ? "Yes" : "No",
            item.adLoad,
            item.openSource ? "Yes" : "No",
          ]),
        ]}
      />

      <h2 id="verdict">What to actually install</h2>
      <QuickSummary
        bullets={[
          "Want a direct swap with a TV interface? OnStream. Same model, actively maintained, works on Firestick.",
          "Want more provider fallbacks? Run OnStream alongside StreamFlix Reborn rather than choosing between them.",
          "Want live channels and sport? HD Streamz, accepting a heavy ad load and no film catalog.",
          "Want nothing to sideload? A licensed service — the only honest answer here.",
          "Want auditable code? StreamFlix Reborn remains the only open-source option in this list.",
        ]}
      >
        <p>
          The practical recommendation for most people is two apps, not one.
          These all depend on the same fragile third-party layer, so a fallback
          costs 30 MB and saves a great deal of frustration.
        </p>
      </QuickSummary>
      <p>
        Category-wide rankings are on{" "}
        <InternalLink intent="bestMovieApks" currentPath={R.alternatives} />,
        the TV-specific shortlist is on{" "}
        <InternalLink intent="bestTvApks" currentPath={R.alternatives} />, and
        the case for paying instead is on{" "}
        <InternalLink intent="vsPaid" currentPath={R.alternatives} />.
      </p>
    </ClusterPage>
  );
}
