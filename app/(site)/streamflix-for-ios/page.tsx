import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, Definition, QuickSummary } from "@/components/ContentBlocks";
import { InternalLink } from "@/components/InternalLink";
import { VariantSupportStrip } from "@/components/VariantCompare";
import { iosFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";

const TITLE = "StreamFlix for iPhone and iPad: The Honest Answer";
const DESCRIPTION =
  "There is no StreamFlix for iOS and an APK cannot run on an iPhone. What the 'StreamFlix for iOS' download pages are really offering, and the legitimate alternatives.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.ios,
  keywords: [
    "streamflix for ios",
    "streamflix iphone",
    "streamflix ipad",
    "streamflix apk ios",
    "streamflix app store",
  ],
});

const toc = [
  { href: "#answer", label: "The direct answer" },
  { href: "#why", label: "Why an APK cannot run on iOS" },
  { href: "#pages", label: "What those download pages are" },
  { href: "#sideloading", label: "iOS sideloading, and why it doesn't help" },
  { href: "#workarounds", label: "Workarounds that genuinely work" },
  { href: "#alternatives", label: "What to use on an iPhone instead" },
];

export default function IosPage() {
  return (
    <ClusterPage
      path={R.ios}
      title={TITLE}
      description={DESCRIPTION}
      kicker="iOS"
      h1="StreamFlix for iPhone and iPad: There Isn't One"
      answer="Neither StreamFlix app has an iOS build, and an APK cannot run on an iPhone or iPad under any circumstances — it is an Android package format that iOS has no ability to open. Any page offering a 'StreamFlix APK for iOS' is offering something else entirely."
      toc={toc}
      faqs={iosFaqs}
      showDownload={false}
      takeaways={[
        "There is no StreamFlix app for iOS. Neither variant has an iPhone or iPad build, and neither is on the App Store.",
        "An APK is an Android package. iOS uses IPA files and cannot open, convert, or run an APK.",
        "'StreamFlix for iOS' pages typically lead to survey walls, unrelated apps, or enterprise certificate profiles.",
        "The only genuine workaround is playing on an Android device and casting to a shared screen.",
        "If you need something native on an iPhone, a licensed service is the realistic answer.",
      ]}
    >
      <h2 id="answer">The direct answer</h2>
      <VariantSupportStrip
        rebornSupported={false}
        v2Supported={false}
        context="iPhone and iPad"
      />
      <p>
        No iOS version of StreamFlix exists. Not from the Reborn project, not
        from the StreamFlix 2.0 developer, not on the App Store, and not through
        TestFlight. This is not a matter of it being hard to find.
      </p>
      <p>
        This page exists because the search volume for it is substantial and
        almost everything ranking for it is misleading. The answer is short, so
        the rest of the page explains why, and what actually works instead.
      </p>

      <h2 id="why">Why an APK cannot run on iOS</h2>
      <Definition term="APK vs IPA">
        An APK is an Android application package: Dalvik bytecode compiled for
        the Android runtime, with Android&rsquo;s manifest and resource format.
        An IPA is the iOS equivalent: ARM machine code signed by Apple, using
        iOS frameworks. They are different formats targeting different operating
        systems, with no shared runtime between them.
      </Definition>
      <p>
        The two platforms share no application layer. An APK contains calls into
        Android system services that simply do not exist on iOS. There is
        nothing on an iPhone capable of loading one — no converter, no emulator
        on the App Store, and no setting to enable.
      </p>
      <p>
        Anything claiming to convert an APK for iPhone use is claiming to
        recompile an app from bytecode against an entirely different set of
        system frameworks, without its source. That is not a thing that happens
        by downloading a tool.
      </p>

      <h2 id="pages">What those download pages are</h2>
      <p>
        Since the app does not exist, it is worth knowing what the pages
        offering it are actually doing:
      </p>
      <DataTable
        caption="What 'StreamFlix for iOS' download pages typically deliver"
        headers={["What it looks like", "What it actually is"]}
        rows={[
          [
            "Download button, then 'verify you are human'",
            "A survey wall. Completing it pays the operator and never produces a file",
          ],
          [
            "An App Store link",
            "An unrelated app with a similar name, hoping you do not check",
          ],
          [
            "'Install profile to continue'",
            "A configuration profile. Granting one gives real control over your device settings",
          ],
          [
            "An enterprise certificate sideload service",
            "Distribution meant for internal company apps. Certificates get revoked, and the app dies without notice",
          ],
          [
            "'Web version, no download needed'",
            "A generic streaming site borrowing the name for traffic",
          ],
          [
            "A file that downloads but will not open",
            "The Android APK. iOS shows it as an unrecognised file, because that is what it is",
          ],
        ]}
      />
      <p>
        The configuration-profile route is the one worth being firm about.
        Installing a profile grants privileges over device settings and traffic
        routing that no streaming app has any business holding.
      </p>

      <h2 id="sideloading">iOS sideloading, and why it doesn&rsquo;t help</h2>
      <p>
        Sideloading on iOS does exist in a limited form — AltStore, developer
        certificates, and in the EU, alternative app marketplaces. None of it
        changes the answer here.
      </p>
      <QuickSummary
        bullets={[
          "iOS sideloading installs IPA files. There is no StreamFlix IPA, because no iOS build was ever made.",
          "A developer certificate lets you install your own apps. It does not create an app that does not exist.",
          "EU alternative marketplaces distribute iOS apps. StreamFlix is not among them.",
          "Jailbreaking removes App Store restrictions but does not add an Android runtime.",
        ]}
      >
        <p>
          Every iOS sideloading method assumes the app exists in iOS form. The
          obstacle here is not distribution — it is that the software was never
          written for the platform.
        </p>
      </QuickSummary>

      <h2 id="workarounds">Workarounds that genuinely work</h2>
      <p>
        One approach actually works, and it is worth being clear that it is a
        workaround rather than a solution:
      </p>
      <ol>
        <li>
          <strong>Play on Android, watch on a shared screen.</strong> Run
          StreamFlix on an Android phone or a streaming stick and send it to a
          TV. The iPhone is not involved, but the content reaches a screen
          everyone can watch. See{" "}
          <InternalLink intent="smartTv" currentPath={R.ios} />.
        </li>
        <li>
          <strong>Use a desktop instead.</strong> An emulator on a Mac or PC
          runs the real app. Slower than a phone, but it works — see{" "}
          <InternalLink intent="pc" currentPath={R.ios} />.
        </li>
        <li>
          <strong>Use a cheap Android device.</strong> A Fire TV Stick costs
          less than most people assume and gives you Reborn&rsquo;s proper TV
          interface. See{" "}
          <InternalLink intent="firestick" currentPath={R.ios} />.
        </li>
      </ol>
      <p>
        What does not work, to be explicit: AirPlay mirroring from an iPhone
        that does not have the app, any converter, any &ldquo;iOS APK
        installer&rdquo;, and any web player claiming to be StreamFlix.
      </p>

      <h2 id="alternatives">What to use on an iPhone instead</h2>
      <p>
        If the actual goal is watching films on an iPhone rather than running
        this specific app, the honest options are:
      </p>
      <ul>
        <li>
          <strong>A licensed service.</strong> Native iOS apps, reliable
          downloads, consistent quality, and no risk of an app disappearing.
          The trade-off is a subscription — weighed up on{" "}
          <InternalLink intent="vsPaid" currentPath={R.ios} />.
        </li>
        <li>
          <strong>Free ad-supported streaming services.</strong> Several have
          proper App Store apps with licensed catalogs. Smaller libraries, but
          they work natively and will not vanish.
        </li>
        <li>
          <strong>Public-domain archives.</strong> Legitimately free, browsable
          in Safari, and covering more than people expect.
        </li>
      </ul>
      <p>
        The broader landscape is on{" "}
        <InternalLink intent="alternatives" currentPath={R.ios} />, though
        almost everything there is Android-only for the same reason StreamFlix
        is — this entire category is built on sideloading, which iOS does not
        permit in the way Android does.
      </p>
    </ClusterPage>
  );
}
