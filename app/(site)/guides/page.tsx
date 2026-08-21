import type { Metadata } from "next";
import Link from "next/link";
import { ClusterPage } from "@/components/ClusterPage";
import { InternalLink } from "@/components/InternalLink";
import { guideClusters, allGuides } from "@/lib/guides";
import { guidesIndexFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";

const TITLE = "All StreamFlix Guides: The Complete Index";
const DESCRIPTION = `Every StreamFlix guide on this site — ${allGuides.length} pages covering both apps, install per device, troubleshooting, safety, legality and alternatives.`;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.guides,
  keywords: [
    "streamflix guides",
    "streamflix help",
    "streamflix documentation",
    "streamflix tutorials",
  ],
});

const toc = guideClusters.map((cluster) => ({
  href: `#${cluster.id}`,
  label: cluster.name,
}));

export default function GuidesPage() {
  return (
    <ClusterPage
      path={R.guides}
      title={TITLE}
      description={DESCRIPTION}
      kicker="Index"
      h1="Every StreamFlix Guide, Grouped by What You Need"
      answer={`${allGuides.length} guides across five areas: which of the two StreamFlix apps you have, how to install on each device class, what to do when it stops working, the safety and legality questions worth asking, and how it compares with everything else.`}
      toc={toc}
      faqs={guidesIndexFaqs}
      guideList
      takeaways={[
        "One page per question. Nothing important is buried inside a page about something else.",
        "Start with the download hub if you are not sure which of the two StreamFlix apps you want.",
        "Device pages cover only the method that device actually supports — including the ones where the answer is no.",
        "The troubleshooting page is ordered by what resolves problems most often, not alphabetically.",
        "Safety, legality and privacy are three separate questions and have three separate pages.",
      ]}
    >
      <h2 id="start">Where to start</h2>
      <p>
        If you have not installed anything yet, begin at the{" "}
        <InternalLink intent="downloadHub" currentPath={R.guides} />. It covers
        both apps side by side, which matters more than it sounds: two unrelated
        Android apps ship under the StreamFlix name, and most advice online
        conflates them into one wrong specification table.
      </p>
      <p>
        If something is already installed and misbehaving, go straight to{" "}
        <InternalLink intent="notWorking" currentPath={R.guides} />.
      </p>

      {guideClusters.map((cluster) => (
        <section key={cluster.id}>
          <h2 id={cluster.id}>{cluster.name}</h2>
          <p>{cluster.blurb}</p>
          <ul className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
            {cluster.guides.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="block h-full rounded-xl border border-line bg-panel px-4 py-4 transition hover:border-flame"
                >
                  <span className="block text-sm font-semibold leading-snug text-paper">
                    {guide.title}
                  </span>
                  <span className="mt-1.5 block text-xs leading-5 text-zinc-400">
                    {guide.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <h2 id="how-organised">How this site is organised</h2>
      <p>
        One page per search intent, deliberately. Where two topics would compete
        for the same question, the weaker one lives as a section on the stronger
        page rather than as its own thin URL — which is why there is no separate
        page for, say, &ldquo;StreamFlix unknown sources&rdquo;: it belongs
        inside{" "}
        <InternalLink intent="install" currentPath={R.guides} />.
      </p>
      <p>
        Every page states its facts with the app they belong to. StreamFlix
        Reborn and StreamFlix 2.0 have different versions, sizes, licences and
        capabilities, and a figure without an app name attached is not useful.
        Our sourcing and testing method is set out on{" "}
        <InternalLink intent="about" currentPath={R.guides} />.
      </p>
    </ClusterPage>
  );
}
