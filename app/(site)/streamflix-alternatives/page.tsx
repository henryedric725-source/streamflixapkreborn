import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, Definition, QuickSummary } from "@/components/ContentBlocks";
import { Roadmap } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { alternatives, statusLabels } from "@/lib/alternatives";
import { alternativesFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import { REBORN } from "@/lib/variants";

const TITLE = "StreamFlix Alternatives and Best Free Movie APKs";
const DESCRIPTION =
  "Free movie APKs ranked on maintenance, provider health, ad load and TV support, including the ones that stopped working years ago and are still recommended.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.alternatives,
  dateModified: "2026-08-02",
  keywords: [
    "streamflix alternatives",
    "apps like streamflix",
    "best movie apk for android",
    "best free movie apk",
    "movie apks",
    "hd movies apk",
    "film apk",
    "onstream alternative",
    "hd streamz alternative android",
  ],
});

const toc = [
  { href: "#why", label: "Why you would need one" },
  { href: "#maintained", label: "The maintenance filter" },
  { href: "#aggregators", label: "Aggregators: the direct swaps" },
  { href: "#live-tv", label: "Live TV: a different job" },
  { href: "#catalog", label: "Catalog apps" },
  { href: "#abandoned", label: "Names to stop recommending" },
  { href: "#compare", label: "Side by side" },
  { href: "#verdict", label: "What to actually install" },
  { href: "#criteria", label: "How these are ranked" },
  { href: "#how-they-work", label: "How free movie APKs work" },
  { href: "#judge", label: "How to judge one yourself" },
  { href: "#red-flags", label: "Red flags in a recommendation" },
  { href: "#safety", label: "Installing any of them safely" },
  { href: "#honest", label: "The honest caveat" },
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
      h1="StreamFlix Alternatives and the Best Free Movie APKs for Android"
      answer="OnStream is the closest actively maintained aggregator with a working TV interface. Cinema HD remains capable but updates irregularly. HD Streamz solves a different problem. Live channels rather than a film catalog. CyberFlix TV is abandoned and should no longer be recommended."
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
        "Live TV apps like HD Streamz are not substitutes: they solve a different problem and have almost no film catalog.",
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
          "Your providers stopped resolving. Try switching provider first. A different app may hit the same dead sources.",
          "You want live channels. StreamFlix's live coverage is thin. This is a genuine reason to add a second app rather than replace it.",
          "The app is too heavy for your device. A lighter app, or an older StreamFlix build, both work.",
          "You want a TV interface and installed the wrong variant. Install StreamFlix Reborn rather than a different app.",
        ]}
      >
        <p>
          The last two are worth checking before you go anywhere else. They are
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
        does not stay as good as it was: it degrades continuously until it
        finds almost nothing.
      </p>
      <DataTable
        caption="Maintenance status of each StreamFlix alternative"
        headers={["App", "Status", "What that means in practice"]}
        rows={alternatives.map((item) => [
          item.name,
          statusLabels[item.status],
          item.status === "maintained"
            ? "Scrapers are being kept current: worth your time"
            : item.status === "sporadic"
              ? "Works, but expect gaps when providers change"
              : item.status === "official"
                ? "A licensed service, not an aggregator"
                : "Sources have largely stopped resolving",
        ])}
      />

      <h2 id="aggregators">Aggregators: the direct swaps</h2>
      <p>
        Same model as StreamFlix Reborn: search third-party providers, play the
        result. These are the genuine like-for-like alternatives.
      </p>
      {alternatives
        .filter((item) => item.kind === "aggregator")
        .map((item) => (
          <div key={item.name}>
            <h3>
              {item.name}: {statusLabels[item.status]}
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

      <h2 id="live-tv">Live TV: a different job</h2>
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
              {item.name}: {statusLabels[item.status]}
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
              {item.name}: {statusLabels[item.status]}
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
        harder to audit: the same trade{" "}
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
        recommends it in 2026, nobody on that list was installed and tested, and
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
          "Want nothing to sideload? A licensed service: the only honest answer here.",
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
        <InternalLink intent="alternatives" currentPath={R.alternatives} />,
        the TV-specific shortlist is on{" "}
        <InternalLink intent="bestTvApks" currentPath={R.alternatives} />, and
        the case for paying instead is on{" "}
        <InternalLink intent="vsPaid" currentPath={R.alternatives} />.
      </p>

      <h2 id="criteria">How we ranked these</h2>
      <p>
        Most rankings in this category are affiliate placements or copies of
        older rankings that were themselves copies. The criteria below are the
        ones that actually predict whether an app will work for you next month.
      </p>
      <Roadmap
        items={[
          {
            n: "01",
            title: "Is it still maintained?",
            body: "The dominant criterion. These apps depend on scrapers that break when third-party providers change shape. An unmaintained app finds progressively less until it finds nothing. Everything else is secondary to this.",
          },
          {
            n: "02",
            title: "How many provider fallbacks does it have?",
            body: "More providers means more chances a given title resolves. This, not catalog size, is the real measure of coverage, because the catalog was never the app's to begin with.",
          },
          {
            n: "03",
            title: "How heavy is the ad load?",
            body: "Ranges from none to intrusive. It is the single biggest difference in day-to-day experience between apps that otherwise look identical on a feature list.",
          },
          {
            n: "04",
            title: "Does it have a real TV interface?",
            body: "If you use a Firestick or Android TV, this decides whether the app is usable at all. A phone layout on a television is genuinely unpleasant, not merely suboptimal.",
          },
          {
            n: "05",
            title: "Can the build be verified?",
            body: "Open source means you can check a published build against published code, or build it yourself. Only one app in this category offers that.",
          },
        ]}
      />

      <h2 id="how-they-work">How free movie APKs work</h2>
      <Definition term="Free movie APK">
        An Android app, installed outside the Play Store, that indexes
        third-party streaming sources and plays them in its own player. It
        almost never hosts video itself. Which is both why it can be free and
        why it breaks so often.
      </Definition>
      <p>
        Understanding this explains everything else about the category:
      </p>
      <ul>
        <li>
          <strong>Why they are free.</strong> No content licensing costs,
          because no content is licensed. Hosting costs are near zero because
          nothing is hosted.
        </li>
        <li>
          <strong>Why the catalog changes constantly.</strong> It belongs to
          providers, not to the app, and shifts without any update.
        </li>
        <li>
          <strong>Why titles fail unpredictably.</strong> A source went offline.
          This is normal operation rather than a fault.
        </li>
        <li>
          <strong>Why they need frequent updates.</strong> Scrapers break when
          providers change structure.
        </li>
        <li>
          <strong>Why they disappear.</strong> Distribution channels get taken
          down. It happened to the original StreamFlix. See{" "}
          <InternalLink intent="dmcaHistory" currentPath={R.alternatives} />.
        </li>
      </ul>

      <h2 id="judge">How to judge one yourself</h2>
      <p>
        Rankings age badly in this category, so the useful skill is evaluating
        an app rather than trusting a list, including this one.
      </p>
      <DataTable
        caption="How to evaluate any free movie APK before committing to it"
        headers={["Check", "Good sign", "Bad sign"]}
        rows={[
          [
            "Last release date",
            "Within the last couple of months",
            "Over a year ago. Walk away",
          ],
          [
            "Where it is distributed",
            "The developer's own GitHub or an established mirror",
            "Only on blogs with survey walls",
          ],
          [
            "Provider count",
            "Several, with a visible picker",
            "One source, or no way to switch",
          ],
          [
            "Ad behaviour",
            "None, or contained within the interface",
            "Full-screen interstitials between every action",
          ],
          [
            "Permissions",
            "Network and storage",
            "Contacts, SMS, location, accessibility",
          ],
          [
            "TV interface",
            "Focus states work with a D-pad",
            "You need a virtual mouse app to use it",
          ],
          [
            "Size",
            "Proportionate to the feature set",
            "Very large for a simple app, usually bundled ad libraries",
          ],
        ]}
      />

      <h2 id="red-flags">Red flags in a recommendation</h2>
      <QuickSummary
        bullets={[
          "It recommends CyberFlix TV in 2026. The app has been dead for years; nothing on that list was tested.",
          "It claims a specific catalog size. No aggregator owns a catalog, so no honest number exists.",
          "Every app is described as 'safe and secure' with no distinctions drawn between them.",
          "There is no last-updated date for any app listed: the single most important fact is missing.",
          "Every download link routes through the same shortener or survey wall.",
          "It says an app 'works on Firestick' without distinguishing a real TV interface from an app that merely installs.",
        ]}
      >
        <p>
          Apply the same scepticism to this page. The claims here are checkable:
          package names, licences, and last-update dates are all verifiable at
          the sources we link.
        </p>
      </QuickSummary>

      <h2 id="safety">Installing any of them safely</h2>
      <p>
        The risk in this category is concentrated in distribution rather than
        the apps themselves. Four checks catch nearly everything:
      </p>
      <ol>
        <li>Download from the developer&rsquo;s own source, or an established mirror that verifies signatures.</li>
        <li>Check the file size against the published figure.</li>
        <li>Confirm the package name after install.</li>
        <li>Review the permission list: network and storage only.</li>
      </ol>
      <p>
        Detail on all four is on{" "}
        <InternalLink intent="safe" currentPath={R.alternatives} />, and why
        &ldquo;mod&rdquo; versions fail every one of them is on{" "}
        <InternalLink intent="mod" currentPath={R.alternatives} />.
      </p>

      <h2 id="honest">The honest caveat</h2>
      <p>
        A ranking of free movie APKs should end by saying what none of them do
        well, because the shared weakness is structural rather than a matter of
        which one you pick.
      </p>
      <p>
        None of these apps owns its content. That means streams fail
        unpredictably, quality varies per source, subtitles are inconsistent,
        offline downloads cannot be relied on, and any of them may disappear.
        Switching between them does not fix that. It is the shape of the whole
        category.
      </p>
      <p>
        If you need a stream to start reliably and hold its quality: a long
        flight, a film night with other people, anything where restarting three
        times is unacceptable. A licensed service is the honest answer. That
        comparison is made properly on{" "}
        <InternalLink intent="vsPaid" currentPath={R.alternatives} />. For a TV
        specifically, the shortlist narrows considerably:{" "}
        <InternalLink intent="bestTvApks" currentPath={R.alternatives} />.
      </p>
    </ClusterPage>
  );
}
