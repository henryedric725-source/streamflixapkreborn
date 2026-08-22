import type { Metadata } from "next";
import Link from "next/link";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, SpecTable } from "@/components/ContentBlocks";
import { Roadmap } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { EDITORIAL_METHOD, SITE_AUTHOR } from "@/lib/author";
import { aboutFaqs } from "@/lib/faqs";
import { allPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata";
import { INDEXABLE_PATHS, R } from "@/lib/routes";
import {
  CONTENT_UPDATED_DISPLAY,
  PUBLISHER,
  SITE_CONTACT_EMAIL,
  SITE_NAME,
} from "@/lib/site";
import { REBORN, V2 } from "@/lib/variants";

const TITLE = "About: Editorial and Testing Policy";
const DESCRIPTION =
  "How we verify version numbers, why we treat StreamFlix Reborn and StreamFlix 2.0 as separate apps, what we test before publishing, and how to reach us.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.about,
  dateModified: "2026-08-22",
  keywords: ["about streamflix apk site", "editorial policy", "streamflix documentation"],
});

const toc = [
  { href: "#what", label: "What this site is" },
  { href: "#method", label: "Editorial and testing method" },
  { href: "#sourcing", label: "Where the numbers come from" },
  { href: "#two-apps", label: "Why we split the two apps" },
  { href: "#author", label: "Who writes this" },
  { href: "#not", label: "What this site is not" },
  { href: "#urls", label: "Every page on this site" },
  { href: "#contact", label: "Corrections and contact" },
];

export default function AboutPage() {
  return (
    <ClusterPage
      path={R.about}
      title={TITLE}
      description={DESCRIPTION}
      about={["apk", "openSource"]}
      mentions={["android", "streaming", "sideloading"]}
      dateModified="2026-08-22"
      kicker="Editorial policy"
      h1="About This Site"
      answer={`${SITE_NAME} documents the two unrelated Android apps published under the StreamFlix name. Every specification comes from the developer's own distribution point first, every build is installed on a phone, a TV box and a Fire TV Stick before it is written about, and negative findings are published rather than omitted.`}
      toc={toc}
      faqs={aboutFaqs}
      showDownload={false}
      takeaways={[
        "We are an independent documentation site. We are not affiliated with either StreamFlix developer.",
        "Version, size and requirement figures come from the developer's own distribution point, cross-checked against mirrors.",
        "StreamFlix Reborn and StreamFlix 2.0 are documented as separate apps because that is what they are.",
        "Where an app cannot do something — no iOS build, no TV interface, no real mod — we say so plainly.",
        "Updated dates reflect an actual review of that page's facts, not an automatic timestamp.",
      ]}
    >
      <h2 id="what">What this site is</h2>
      <p>
        An independent reference for the Android apps published under the
        StreamFlix name. We document what they are, what they run on, how to
        install them, what they request from your device, and where their limits
        are.
      </p>
      <p>
        We are not affiliated with either developer, we do not represent them,
        and we have no commercial relationship with either. We also do not
        operate any streaming service, host any video, or index any content.
      </p>

      <h2 id="method">Editorial and testing method</h2>
      <Roadmap
        items={EDITORIAL_METHOD.map((item, index) => ({
          n: String(index + 1).padStart(2, "0"),
          title: item.title,
          body: item.detail,
        }))}
      />

      <h2 id="sourcing">Where the numbers come from</h2>
      <p>
        Every specification figure on this site traces to a checkable source.
        Where sources disagree, the developer&rsquo;s own distribution point
        wins.
      </p>
      <DataTable
        caption="Sources used for each StreamFlix app's specifications"
        headers={["App", "Primary source", "Cross-checked against"]}
        rows={[
          [
            REBORN.name,
            "The project's GitHub releases",
            "Uptodown",
          ],
          [
            V2.name,
            "Google Play listing",
            "APKPure, Softonic, FileHippo",
          ],
        ]}
      />
      <SpecTable
        caption="Current figures documented on this site"
        rows={[
          [`${REBORN.shortName} version`, `v${REBORN.version} (${REBORN.releasedOnDisplay})`],
          [`${REBORN.shortName} package`, REBORN.packageName],
          [`${REBORN.shortName} size / requirement`, `${REBORN.sizeLabel}, Android ${REBORN.minAndroid}`],
          [`${V2.shortName} version`, `Build ${V2.version} (${V2.releasedOnDisplay})`],
          [`${V2.shortName} package`, V2.packageName],
          [`${V2.shortName} size / requirement`, `${V2.sizeLabel}, Android ${V2.minAndroid}`],
          ["Site content last reviewed", CONTENT_UPDATED_DISPLAY],
        ]}
      />
      <p>
        If any of these has moved since we last reviewed it, tell us — see{" "}
        <a href="#contact">corrections</a> below.
      </p>

      <h2 id="two-apps">Why we split the two apps</h2>
      <p>
        This is the editorial decision that shapes the whole site, so it is
        worth stating explicitly.
      </p>
      <p>
        Two unrelated Android apps ship under the StreamFlix name.{" "}
        <InternalLink intent="reborn" currentPath={R.about} /> is open-source
        under Apache 2.0 with the package name{" "}
        <code>{REBORN.packageName}</code>.{" "}
        <InternalLink intent="v2" currentPath={R.about} /> is a closed-source
        app from a different developer with the package name{" "}
        <code>{V2.packageName}</code>. They have different versions, sizes,
        minimum Android requirements, licences, distribution channels and
        capabilities.
      </p>
      <p>
        Nearly every other site covering this topic merges them into one
        specification table, which produces figures that describe neither app.
        A reader who follows a Firestick tutorial written for Reborn while
        holding StreamFlix 2.0 will get nowhere, and will reasonably conclude
        the guide was wrong.
      </p>
      <p>
        So every figure on this site is labelled with the app it belongs to, and
        each app has its own page. It makes the writing more cumbersome. It is
        also the only way to be accurate.
      </p>

      <h2 id="author">Who writes this</h2>
      <div className="not-prose my-6 rounded-2xl border border-line bg-panel p-5">
        <p className="font-serif text-xl text-paper">{SITE_AUTHOR.name}</p>
        <p className="mt-1 text-sm text-zinc-400">{SITE_AUTHOR.role}</p>
        <p className="mt-3 text-sm leading-7 text-zinc-300">
          {SITE_AUTHOR.description}
        </p>
        <p className="mt-4 text-sm">
          <a
            href={SITE_AUTHOR.url}
            rel="author nofollow noopener noreferrer"
            target="_blank"
            className="text-flame underline-offset-2 hover:underline"
          >
            Author profile
          </a>
        </p>
      </div>
      <p>
        Published by {PUBLISHER}. Testing hardware for this site is an Android
        phone, an Android TV box, and a Fire TV Stick; where a claim depends on
        hardware we do not have, we say so on the page rather than asserting it.
      </p>

      <h2 id="not">What this site is not</h2>
      <ul>
        <li>
          <strong>Not affiliated with either developer.</strong> We document
          their apps; we do not represent them and they have no input here.
        </li>
        <li>
          <strong>Not a streaming service.</strong> We host no video, index no
          content, and operate no providers.
        </li>
        <li>
          <strong>Not a mod distributor.</strong> We do not host patched,
          cracked, or repackaged builds, and{" "}
          <InternalLink intent="mod" currentPath={R.about} /> explains why we
          recommend against them.
        </li>
        <li>
          <strong>Not legal advice.</strong>{" "}
          <InternalLink intent="legalCheck" currentPath={R.about} /> explains how
          the legal questions are structured, which is not the same as advice
          for your situation.
        </li>
        <li>
          <strong>Not uniformly positive.</strong> Where an app has no iOS
          build, no TV interface, or a heavier ad load than its listing implies,
          those pages say so.
        </li>
      </ul>

      <h2 id="urls">Every page on this site</h2>
      <p>
        {allPosts.length} articles plus this page and the download hub. Legal
        pages are excluded from search indexes but linked in the footer.
      </p>
      <ul className="not-prose mt-4 grid gap-1.5 sm:grid-cols-2">
        {INDEXABLE_PATHS.map((path) => (
          <li key={path}>
            <Link
              href={path}
              className="block rounded-md px-2 py-1 font-mono text-xs text-zinc-400 transition hover:bg-line/60 hover:text-flame"
            >
              {path}
            </Link>
          </li>
        ))}
      </ul>

      <h2 id="contact">Corrections and contact</h2>
      <p>
        If a version number, file size, or requirement on this site is out of
        date or wrong, we want to know. Specification errors are the ones that
        waste people&rsquo;s time most, and they are the easiest to fix.
      </p>
      <p>
        Email{" "}
        <a href={`mailto:${SITE_CONTACT_EMAIL}`} className="text-flame">
          {SITE_CONTACT_EMAIL}
        </a>
        . For copyright matters, use the DMCA policy linked in the footer, which
        sets out what we need in a notice and how we handle one.
      </p>
      <p>
        When you report a specification error, including the app name and where
        you saw the correct figure lets us verify and publish a fix in the same
        session.
      </p>
    </ClusterPage>
  );
}
