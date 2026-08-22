import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, Definition, QuickSummary } from "@/components/ContentBlocks";
import { InternalLink } from "@/components/InternalLink";
import { legalFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";

const TITLE = "Is StreamFlix Legal? Aggregators & DMCA";
const DESCRIPTION =
  "Why the original StreamFlix was taken down, the legal difference between hosting and aggregating, and how streaming law varies between countries.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.legal,
  dateModified: "2026-08-05",
  keywords: [
    "is streamflix legal",
    "streamflix dmca",
    "streaming apk legal",
    "is it illegal to stream movies",
    "streamflix copyright",
  ],
});

const toc = [
  { href: "#answer", label: "The honest answer" },
  { href: "#distinction", label: "Hosting versus aggregating" },
  { href: "#dmca", label: "The DMCA takedown" },
  { href: "#by-country", label: "Streaming law differs by country" },
  { href: "#app-vs-stream", label: "The app is not the question" },
  { href: "#lawfully", label: "Using it lawfully" },
  { href: "#risk", label: "Where the risk actually sits" },
];

export default function LegalPage() {
  return (
    <ClusterPage
      path={R.legal}
      title={TITLE}
      description={DESCRIPTION}
      about={["dmca", "copyright"]}
      mentions={["publicDomain", "openSource", "apache2", "streaming", "vpn"]}
      dateModified="2026-08-05"
      kicker="Legality"
      h1="Is StreamFlix Legal? The Honest Answer"
      answer="The software itself is lawful — StreamFlix Reborn is open-source under Apache 2.0 and hosts no content. The legal question attaches to the third-party streams it indexes, whose licensing cannot be verified from inside the app, and streaming law differs substantially between countries."
      toc={toc}
      faqs={legalFaqs}
      showDownload={false}
      takeaways={[
        "The app is not the legal question. An open-source aggregator that hosts nothing is lawful software; what it points at is the issue.",
        "The original StreamFlix was removed after a DMCA complaint. Reborn is the fork that continued from the open-source code.",
        "Aggregating and hosting are treated differently in law, which is why these apps exist at all — but the distinction protects the developer more than the viewer.",
        "Streaming law varies by country: some treat viewing an infringing stream differently from downloading it, others do not distinguish.",
        "If you cannot establish that a stream is licensed, the safe assumption is that it is not.",
      ]}
    >
      <h2 id="answer">The honest answer</h2>
      <p>
        This page will not tell you that StreamFlix is definitively legal or
        definitively illegal, because neither is true as a flat statement. It
        will separate the questions that get run together, which is what makes
        the topic confusing.
      </p>
      <QuickSummary
        bullets={[
          "Is the software lawful? Yes. Open-source code that searches the public web is not itself unlawful.",
          "Is installing it lawful? Yes. Sideloading an app onto your own device is your right on Android.",
          "Are the streams licensed? Unknown, and unknowable from inside the app. Many are not.",
          "Is watching an unlicensed stream unlawful? It depends on your country, and the answers genuinely differ.",
        ]}
      >
        <p>
          Anyone offering a simple yes or no is either selling something or has
          not thought about it. The useful version is understanding which of
          these four questions you are actually asking.
        </p>
      </QuickSummary>
      <p className="text-sm text-zinc-400">
        This page is general information about how these systems work, not legal
        advice. Rules differ by jurisdiction; if the answer matters to your
        situation, consult someone qualified where you live.
      </p>

      <h2 id="distinction">Hosting versus aggregating</h2>
      <Definition term="Aggregator">
        Software that searches third-party sources and plays what they return.
        It stores no video, serves no video, and operates no infrastructure
        holding content. StreamFlix Reborn is an aggregator, and its own
        documentation states it does not host, store, or distribute copyrighted
        content.
      </Definition>
      <p>
        The distinction is real in law and is why this class of app exists at
        all. A service that stores and serves infringing files is directly
        liable. A tool that searches the public web occupies more contested
        ground — closer to a search engine than to a file host.
      </p>
      <DataTable
        caption="How the law has generally treated hosting versus aggregating"
        headers={["", "Hosting service", "Aggregator app"]}
        rows={[
          ["Stores the content", "Yes", "No"],
          ["Serves the video", "Yes", "No — the third-party provider does"],
          ["Direct infringement exposure", "High", "Contested"],
          ["Takedown target", "The service itself", "Distribution channels and the providers"],
          ["Typical enforcement", "Servers seized, service closed", "Removed from stores; providers pursued separately"],
          ["Can it continue after action?", "Rarely", "Yes, if the code is open and forkable"],
        ]}
      />
      <p>
        Two important caveats. First, the distinction is contested rather than
        settled, and courts in different countries have reached different
        conclusions about tools that primarily index infringing material.
        Second, and more practically: <strong>it protects the developer far
        more than it protects the viewer</strong>. Whether the app hosts
        anything has little bearing on your position as someone watching a
        stream.
      </p>

      <h2 id="dmca">The DMCA takedown</h2>
      <p>
        The clearest evidence of how this plays out in practice is StreamFlix&rsquo;s
        own history. The original app was taken down following a DMCA complaint.
        Reborn is the community fork that continued from the open-source code.
      </p>
      <p>Three things follow from that, all worth knowing:</p>
      <ol>
        <li>
          <strong>Enforcement in this category is real.</strong> Not theoretical,
          not rare, and it happened to this specific app.
        </li>
        <li>
          <strong>Open-sourcing changes what a takedown achieves.</strong> The
          original could be removed from distribution; the code could not be
          recalled, so the project continued.
        </li>
        <li>
          <strong>The fork carries the same risk.</strong> Reborn uses the same
          model as the app that was removed. Nothing about being a fork makes it
          immune to the same outcome, and it is reasonable to expect it could
          face one.
        </li>
      </ol>
      <p>
        The practical consequence for you: treat any app in this category as
        temporary. Do not build habits, or a downloads library, on the
        assumption it will still be here next year. Background on the fork is on{" "}
        <InternalLink intent="reborn" currentPath={R.legal} />.
      </p>

      <h2 id="by-country">Streaming law differs by country</h2>
      <p>
        The largest source of confusion online, because advice written for one
        country gets repeated everywhere as though it were universal.
      </p>
      <DataTable
        caption="How streaming versus downloading is generally treated across jurisdictions"
        headers={["Approach", "Position", "Practical effect"]}
        rows={[
          [
            "Downloading is the offence",
            "Some jurisdictions have focused enforcement on making copies rather than viewing",
            "Streaming has historically drawn less attention than downloading",
          ],
          [
            "Streaming counts too",
            "Others treat viewing an infringing stream as an infringing act in itself",
            "The distinction offers no protection",
          ],
          [
            "Enforcement targets distribution",
            "Most jurisdictions in practice pursue uploaders and services, not individual viewers",
            "Individual prosecution is rare almost everywhere",
          ],
          [
            "ISP notice schemes",
            "Some countries operate graduated warning systems",
            "Letters and throttling rather than legal action",
          ],
        ]}
      />
      <p>
        Two things are broadly consistent: individual viewers are rarely
        prosecuted anywhere, and that is a statement about enforcement priorities
        rather than about legality. &ldquo;Unlikely to be pursued&rdquo; is not
        the same as &ldquo;lawful&rdquo;.
      </p>
      <p>
        A VPN changes your ISP&rsquo;s visibility of your traffic. It does not
        change the legal status of anything — that distinction is covered on{" "}
        <InternalLink intent="vpn" currentPath={R.legal} />.
      </p>

      <h2 id="app-vs-stream">The app is not the question</h2>
      <p>
        The most useful reframing on this page. People ask &ldquo;is StreamFlix
        legal&rdquo; when the thing that varies is not StreamFlix at all.
      </p>
      <p>
        The app is a search interface over third-party providers. Point it at a
        provider indexing public-domain films and every stream is entirely
        lawful. Point it at one indexing current cinema releases and it is
        plainly not. The software is identical in both cases; only what it finds
        differs.
      </p>
      <p>
        This is also why{" "}
        <InternalLink intent="rebornProviders" currentPath={R.legal} /> is worth
        understanding. Your provider choice, more than your app choice,
        determines what you are actually accessing.
      </p>

      <h2 id="lawfully">Using it lawfully</h2>
      <p>
        There is a genuine lawful use for an aggregator, and it is narrower than
        most people would like but wider than they expect:
      </p>
      <ul>
        <li>
          <strong>Public-domain film.</strong> An enormous body of work has
          entered the public domain — early cinema, pre-1930 features,
          government productions, and works whose copyright lapsed. All of it is
          free to watch by anyone.
        </li>
        <li>
          <strong>Creative Commons and openly licensed work.</strong> A growing
          catalog of independent film released under permissive licences.
        </li>
        <li>
          <strong>Content you are already licensed for.</strong> If you hold a
          subscription or bought a title, you have a licence to watch it — though
          the terms of that licence usually specify how.
        </li>
        <li>
          <strong>Region-shifted access to your own subscriptions</strong>{" "}
          occupies a grey area: you are licensed, but usually not in the way the
          agreement contemplates.
        </li>
      </ul>
      <p>
        The workable principle: if you cannot establish that a stream is
        licensed, assume it is not, and decide with that in mind rather than
        pretending the question is unanswerable.
      </p>

      <h2 id="risk">Where the risk actually sits</h2>
      <DataTable
        caption="Realistic risk assessment for using an aggregator app"
        headers={["Concern", "Realistic likelihood", "Notes"]}
        rows={[
          [
            "Prosecution as an individual viewer",
            "Very low",
            "Enforcement targets distribution almost everywhere",
          ],
          [
            "An ISP notice or warning letter",
            "Low to moderate",
            "Depends entirely on whether your country runs a notice scheme",
          ],
          [
            "The app disappearing",
            "Moderate to high",
            "It happened to the original StreamFlix. Expect it to be temporary",
          ],
          [
            "Providers going offline",
            "Certain, and continuous",
            "This is normal operation rather than an incident",
          ],
          [
            "Malware from a repackaged build",
            "Moderate, and entirely avoidable",
            `Verify what you install — see the safety guide`,
          ],
          [
            "Losing your saved data",
            "High over time",
            "No account, no backup, no sync. Local only",
          ],
        ]}
      />
      <p>
        Read honestly, the largest practical risks are mundane rather than
        legal: apps vanish, providers die, and repackaged builds circulate. The
        one you can fully control is the last, and it is covered on{" "}
        <InternalLink intent="safe" currentPath={R.legal} />. Our own position
        on copyright and takedown requests is set out in the{" "}
        <InternalLink intent="about" currentPath={R.legal} /> page and the DMCA
        policy linked in the footer.
      </p>
    </ClusterPage>
  );
}
