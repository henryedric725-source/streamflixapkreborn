import type { Metadata } from "next";
import Link from "next/link";
import { ClusterPage } from "@/components/ClusterPage";
import {
  DataTable,
  Definition,
  QuickSummary,
  SpecTable,
} from "@/components/ContentBlocks";
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
  keywords: [
    "streamflix official website",
    "streamflix website",
    "streamflix reddit",
    "streamflix discord",
    "streamflix github",
    "streamflix review",
    "about streamflix apk site",
    "editorial policy",
    "streamflix documentation",
  ],
});

const toc = [
  { href: "#quick-summary", label: "Quick summary" },
  { href: "#what", label: "What this site is" },
  { href: "#official", label: "Official channels: site, GitHub, Reddit" },
  { href: "#method", label: "Editorial and testing method" },
  { href: "#sourcing", label: "Where the numbers come from" },
  { href: "#reviews", label: "How a review verdict is reached" },
  { href: "#two-apps", label: "Why we split the two apps" },
  { href: "#author", label: "Who writes this" },
  { href: "#trust", label: "How to check what we publish" },
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
      mentions={[
        "android",
        "streaming",
        "sideloading",
        "github",
        "googlePlay",
        "apache2",
        "dmca",
        "copyright",
      ]}
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
        "Where an app cannot do something, no iOS build, no TV interface, no real mod, we say so plainly.",
        "Updated dates reflect an actual review of that page's facts, not an automatic timestamp.",
        "This is not the official StreamFlix website. StreamFlix Reborn has no marketing site at all: its only first-party home is its GitHub repository, and StreamFlix 2.0's is its Google Play listing.",
        "There is no official StreamFlix Discord, and no Reddit community run by either developer. Anything claiming to be one is unaffiliated.",
        "Review verdicts are reached from installed builds on our own hardware, and we take no money, affiliate commission or review copies from either developer.",
        "Corrections are published rather than quietly edited, and a specification error reported with a source is usually fixed the same day.",
      ]}
    >
      <QuickSummary
        bullets={[
          `Two unrelated Android apps ship under the StreamFlix name: ${REBORN.name} (${REBORN.packageName}, open source under ${REBORN.license}) and ${V2.name} (${V2.packageName}, closed source). We document them separately because they are separate.`,
          "Specifications come from the developer's own distribution point first, GitHub releases for Reborn and the Google Play listing for StreamFlix 2.0, then cross-checked against Uptodown, APKPure, Softonic and FileHippo.",
          `Every build is installed on an Android phone, an Android TV box and a Fire TV Stick before it is written about. Testing hardware is named so you know what a claim rests on.`,
          "We take no money from either developer, run no affiliate links to the apps, and accept no review copies. Negative findings are published rather than omitted.",
          "This is not the official StreamFlix website, and there is no official StreamFlix Discord or Reddit community run by either developer.",
          `Content was last reviewed on ${CONTENT_UPDATED_DISPLAY}. Every page carries its own review date, and none of them is generated automatically.`,
        ]}
      >
        <p>
          {SITE_NAME} is an independent documentation site for the two Android
          apps published under the StreamFlix name. We are not affiliated with
          either developer and we host no video and no APK files.
        </p>
        <p>
          The two commitments that shape everything here: a figure is only
          published if it traces to the developer&rsquo;s own distribution
          point, and a capability is only claimed if it was reproduced on
          hardware we own. Where something does not work, the page says so.
        </p>
      </QuickSummary>

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

      <h2 id="official">Official channels: site, GitHub, Reddit and Discord</h2>
      <p>
        This is not the official StreamFlix website, and saying so plainly is
        more useful than the alternative. Neither app has a marketing site,
        which is exactly why so many pages claim to be one.
      </p>
      <DataTable
        caption="Which StreamFlix channels are official and which are not"
        headers={["Channel", "Status", "What it actually is"]}
        rows={[
          [
            "An official StreamFlix website",
            "Does not exist for Reborn",
            `${REBORN.name} has no marketing site. Its only first-party home is its GitHub repository, where releases and source are published`,
          ],
          [
            "GitHub repository",
            "Official, for Reborn only",
            `github.com/streamflix-reborn2/streamflix holds the Kotlin source, the release history and the issue tracker under the ${REBORN.license}`,
          ],
          [
            "Google Play listing",
            "Official, for StreamFlix 2.0 only",
            `The Play listing for ${V2.packageName} is that app's first-party distribution point. Reborn is not on Google Play at all`,
          ],
          [
            "Reddit",
            "Not official",
            "No subreddit is operated by either developer. Threads there are user discussion, useful for symptoms and unreliable for specifications",
          ],
          [
            "Discord",
            "Not official",
            "There is no developer-run Discord for either app. Servers advertising StreamFlix downloads are unaffiliated and frequently distribute repackaged files",
          ],
          [
            "Download blogs and APK mirrors",
            "Third party",
            "Including this site. Established mirrors verify signatures; most blogs verify nothing",
          ],
        ]}
      />
      <p>
        The practical consequence is the same on every channel: the source you
        downloaded from does not establish what you installed. A package name
        and a signing certificate do, and{" "}
        <InternalLink intent="safe" currentPath={R.about} /> sets out both
        checks. For the issue tracker, an open-source project&rsquo;s repository
        is the only place a bug report reaches the people who can fix it.
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
        If any of these has moved since we last reviewed it, tell us. See{" "}
        <a href="#contact">corrections</a> below.
      </p>

      <h2 id="reviews">How a review verdict is reached</h2>
      <p>
        Reviews in this category are unusually unreliable, because most are
        written from store listings by people who never installed anything. Ours
        follow a fixed sequence, and the sequence is worth publishing so a
        verdict can be argued with.
      </p>
      <DataTable
        caption="The review process behind every verdict on this site"
        headers={["Stage", "What happens", "What it rules out"]}
        rows={[
          [
            "1. Acquire from the first-party source",
            "The build comes from GitHub releases or the Google Play listing, never from a mirror or a blog",
            "Reviewing a repackaged file and attributing its behaviour to the developer",
          ],
          [
            "2. Verify the package",
            "File size, package name, signing certificate and the declared permission list are recorded before launch",
            "Silent substitution, and permission claims nobody checked",
          ],
          [
            "3. Install on real hardware",
            "An Android phone, an Android TV box and a Fire TV Stick, every time",
            "Claiming a television interface works when only a phone was used",
          ],
          [
            "4. Use it as a viewer would",
            "Browse, search, play, switch provider, load subtitles, resume, and update over the top",
            "Feature lists copied from a store description",
          ],
          [
            "5. Separate app faults from provider faults",
            "A failed stream is retried on other providers before it is attributed to the app",
            "Blaming the software for an offline third-party server, the single commonest error in this category",
          ],
          [
            "6. Publish the weaknesses",
            "No iOS build, no television layout, heavier ads than the listing implies: each is stated on the page it belongs to",
            "A promotional page wearing the shape of a review",
          ],
        ]}
      />
      <p>
        Two standing rules sit behind that. We accept no payment, sponsorship,
        affiliate commission or review copy from either developer, so no verdict
        has a commercial reason to be positive. And a verdict is always tied to
        a build number and a review date, because an app in this category can be
        good in one release and broken in the next. The worked example is on{" "}
        <InternalLink intent="safe" currentPath={R.about} />.
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
            rel="author"
            className="text-flame underline-offset-2 hover:underline"
          >
            About the author
          </a>
        </p>
      </div>
      <p>
        Published by {PUBLISHER}. Testing hardware for this site is an Android
        phone, an Android TV box, and a Fire TV Stick; where a claim depends on
        hardware we do not have, we say so on the page rather than asserting it.
      </p>

      <h2 id="trust">How to check what we publish</h2>
      <p>
        Every claim on this site is meant to be checkable without taking our
        word for it. That is the point of publishing the method rather than
        asserting expertise, and it is the standard we would apply to any page
        in this category, including ours.
      </p>
      <Definition term="Editorial independence">
        Editorial independence means the people deciding what a page says have
        no financial stake in what it concludes. Here that is concrete: no
        payment, sponsorship, affiliate commission or review copy from either
        StreamFlix developer, no advertising sold against a verdict, and no
        arrangement with any mirror or download site. A negative finding costs
        us nothing, which is the only reliable reason to believe a positive one.
      </Definition>
      <DataTable
        caption="Trust signals on this site and how to verify each one yourself"
        headers={["Signal", "What we do", "How you can check it"]}
        rows={[
          [
            "First-hand experience",
            "Every documented build is installed on a phone, an Android TV box and a Fire TV Stick before publication",
            "Follow any install guide on the hardware it names. The steps either match your screen or they do not",
          ],
          [
            "Named authorship",
            "One named writer with a public profile, rather than an anonymous byline or a brand name",
            "The author box below links a profile you can read independently",
          ],
          [
            "Traceable specifications",
            "Version, size, package name and minimum Android come from the developer's own distribution point",
            "Open the GitHub release or the Play listing and compare. A mismatch is a reportable error",
          ],
          [
            "Dated review",
            "Each page carries the date its facts were last checked, set by hand",
            "Compare the date on a page against the release date of the build it describes",
          ],
          [
            "Published negatives",
            "No iOS build, no television interface in StreamFlix 2.0, no real premium mod: each is stated plainly",
            "Read the iOS and mod pages. A promotional site does not run either of them",
          ],
          [
            "No commercial relationship",
            "No affiliate links to the apps, no sponsorship, and no money from either developer",
            "Check where the download links point. They resolve to first-party sources, not to trackers",
          ],
          [
            "A correction route",
            "A published email address, and corrections applied to the page rather than argued about",
            "Report a specification error and see whether the page changes",
          ],
        ]}
      />
      <p>
        The copyright side of that is handled separately. Our position on
        takedown requests, including what a Digital Millennium Copyright Act
        notice needs to contain, is set out in the DMCA policy linked in the
        footer, and how copyright infringement questions apply to these apps is
        on <InternalLink intent="legalCheck" currentPath={R.about} />.
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
        session. What happens after that is fixed policy rather than
        case-by-case judgement:
      </p>
      <ul>
        <li>
          <strong>Specification errors are corrected at source.</strong> Version
          numbers, sizes and requirements live in one file, so a fix propagates
          to every page that quotes them rather than to the one you reported.
        </li>
        <li>
          <strong>A correction updates the page&rsquo;s review date.</strong>{" "}
          That date means the facts were checked on that day, so a silent edit
          would make it a lie.
        </li>
        <li>
          <strong>Substantive corrections are noted on the page</strong> where
          the previous version would have led a reader to do the wrong thing.
          Typographical fixes are not, because nobody was misled.
        </li>
        <li>
          <strong>We correct the finding, not the conclusion.</strong> If new
          evidence changes a verdict, the verdict changes. Neither developer has
          any input into that, and neither has ever asked for one.
        </li>
      </ul>
    </ClusterPage>
  );
}
