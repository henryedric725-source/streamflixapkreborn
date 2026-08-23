import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, Definition, QuickSummary } from "@/components/ContentBlocks";
import { Roadmap } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { VerificationBadges } from "@/components/VerificationBadges";
import { safetyFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import { REBORN, V2 } from "@/lib/variants";

const TITLE = "Is StreamFlix Safe? Permissions and Privacy";
const DESCRIPTION =
  "Scan results, every permission explained, signature verification, what the no-account model means for your data, and why repackaged copies are the real risk.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.safe,
  dateModified: "2026-08-06",
  keywords: [
    "is streamflix safe",
    "is streamflix legit",
    "is streamflix good",
    "streamflix review",
    "streamflix reviews",
    "streamflix app review",
    "streamflix virus",
    "streamflix reddit",
    "streamflix apk virus",
    "streamflix safe to install",
    "streamflix permissions",
    "streamflix privacy",
    "streamflix data collection",
    "verify apk signature",
  ],
});

const toc = [
  { href: "#quick-summary", label: "Quick summary" },
  { href: "#answer", label: "The short answer" },
  { href: "#legit", label: "Is StreamFlix legit?" },
  { href: "#review", label: "Review verdict" },
  { href: "#reddit", label: "What users actually report" },
  { href: "#real-risk", label: "Where the risk actually is" },
  { href: "#scans", label: "Scan results" },
  { href: "#permissions", label: "Permissions, line by line" },
  { href: "#verify", label: "Verify it yourself in four checks" },
  { href: "#open-source", label: "The open-source advantage" },
  { href: "#red-flags", label: "Red flags in a downloaded APK" },
  { href: "#play-protect", label: "What Play Protect is telling you" },
  { href: "#no-account", label: "The no-account model" },
  { href: "#who-sees", label: "Who can see what" },
  { href: "#ads", label: "What ad-supported playback exposes" },
  { href: "#local-data", label: "What is stored on your device" },
  { href: "#audit", label: "Auditing permissions after an update" },
  { href: "#compare", label: "Compared with a licensed service" },
  { href: "#reduce", label: "Reducing your exposure" },
];

export default function SafePage() {
  return (
    <ClusterPage
      path={R.safe}
      title={TITLE}
      description={DESCRIPTION}
      about={["malware", "digitalSignature"]}
      mentions={[
        "playProtect",
        "sideloading",
        "apk",
        "openSource",
        "privacy",
        "advertising",
        "vpn",
        "dns",
        "github",
        "apache2",
        "copyright",
      ]}
      dateModified="2026-08-06"
      kicker="Safety and verification"
      h1="Is StreamFlix Safe? Permissions, Privacy and How to Verify"
      answer="The official builds scan clean, and StreamFlix Reborn's Apache 2.0 source can be independently audited, something no closed-source app in this category allows. The real risk is not the official package but repackaged copies redistributed by mirror sites, which four quick checks will catch."
      toc={toc}
      faqs={safetyFaqs}
      takeaways={[
        "The official builds of both apps scan clean. The risk lives in repackaged copies from mirror sites, not in the developers' own packages.",
        "Four checks catch a repackaged build: file size, package name, signing certificate, and permission list.",
        "Neither app has a legitimate reason to request contacts, SMS, call logs, or location. If yours does, uninstall it.",
        "The Play Protect warning reflects the install method, not a detection. A Play Protect block is different and should not be overridden.",
        "Reborn being open-source is a real security property: you can compare a published build against published code, or build it yourself.",
        "Legit and legal are different questions. Both apps are real software from identifiable developers; the streams they index are a separate matter entirely.",
        "What it does well: no account, no cost, a real TV interface in Reborn, and auditable code. What it does badly: unreliable sources, inconsistent quality, and no support.",
        "Avoid it if you need guaranteed uptime, if you cannot verify a download yourself, or if you are unwilling to accept the copyright question that comes with third-party streams.",
        "No credible review of this app category can promise reliability, because the streams belong to independent sites that answer to nobody.",
      ]}
    >
      <QuickSummary
        bullets={[
          `The official builds scan clean: StreamFlix Reborn v${REBORN.version}, ${REBORN.sizeLabel}, and StreamFlix 2.0 build ${V2.version}, ${V2.sizeLabel}.`,
          "Reborn's source is published on GitHub under the Apache License 2.0, so its behaviour can be read rather than trusted.",
          "Neither app requests contacts, SMS, call logs, location or accessibility. A copy that does is repackaged, and the finding is decisive.",
          "The Play Protect notice on install reflects the install method. An outright Play Protect block is a real detection and should never be overridden.",
          "Four checks settle authenticity: file size, package name, signing certificate, and the permission list.",
          "There is no account, no email address and no payment method in either app, so no viewing profile exists to leak.",
        ]}
      >
        <p>
          StreamFlix is safe in the sense that matters most: the developers&rsquo;
          own packages carry no malware, and Reborn&rsquo;s code is public. The
          risk lies in where you download from.
        </p>
        <p>
          Repackaged copies redistributed by mirror sites are the actual threat
          in this category, and they are the reason a clean scan is not the end
          of the question. A modified build with an injected advertising library
          scans clean too. Code signing is what separates the two, and checking
          it takes a minute.
        </p>
      </QuickSummary>

      <h2 id="answer">The short answer</h2>
      <p>
        The packages published by the two developers are clean. StreamFlix
        Reborn is additionally verifiable in a way almost nothing else in this
        category is, because its source is public under Apache 2.0. You do not
        have to take anyone&rsquo;s word for what it does.
      </p>
      <p>
        That said, &ldquo;is StreamFlix safe&rdquo; is the wrong question to
        stop at. The meaningful question is &ldquo;is the file <em>I</em>{" "}
        downloaded the real one&rdquo;, and that has a different answer
        depending on where you got it.
      </p>
      <VerificationBadges />

      <h2 id="real-risk">Where the risk actually is</h2>
      <p>
        Sideloading concentrates risk in distribution rather than in the
        software. An app is downloaded from dozens of mirror sites, any of which
        can modify it before serving it to you.
      </p>
      <DataTable
        caption="Risk by download source for StreamFlix packages"
        headers={["Source", "Risk", "Why"]}
        rows={[
          [
            "The developer's own GitHub releases",
            "Lowest",
            "Signed by the project and matching published source code",
          ],
          [
            "Google Play (StreamFlix 2.0)",
            "Lowest",
            "Google verifies the developer and the signing certificate",
          ],
          [
            "Established mirrors (Uptodown, APKPure)",
            "Low",
            "They perform signature verification against the original developer",
          ],
          [
            "A blog with a direct download button",
            "Moderate",
            "No verification chain. The file may be original, or may not",
          ],
          [
            "A 'mod' or 'premium' listing",
            "High",
            "Modified and re-signed by definition, by an anonymous party",
          ],
          [
            "A site requiring a survey before download",
            "Highest",
            "The business model is not distributing the app you asked for",
          ],
        ]}
      />

      <h2 id="legit">Is StreamFlix legit?</h2>
      <p>
        Yes, in the sense the question is usually asked. Both apps are real
        software from identifiable developers rather than a scam wrapper or a
        fake listing, and neither asks for money, card details or an account at
        any point.
      </p>
      <Definition term="Repackaged APK">
        A repackaged APK is an app someone has taken apart, modified and signed
        again with their own key. It keeps the original name, icon and
        appearance, so nothing on screen reveals the change, but it is no longer
        the developer&rsquo;s build. Repackaging is how advertising libraries,
        trackers and malware are added to otherwise clean apps, and because the
        signing certificate necessarily changes, a signature comparison detects
        it every time.
      </Definition>
      <p>
        Legit and legal are separate questions, and conflating them causes most
        of the confusion. The software is lawful and open source; the streams it
        indexes belong to third-party sites whose licensing cannot be verified
        from inside the app, and copyright infringement is judged on those
        streams rather than on the code. That distinction is worked through on{" "}
        <InternalLink intent="legalCheck" currentPath={R.safe} />.
      </p>

      <h2 id="review">Review verdict</h2>
      <p>
        Judged as software rather than as a service, StreamFlix Reborn is
        unusually good in its category and unusually honest about what it is.
        Judged as a replacement for a subscription, it is inconsistent by
        design, because it does not own anything it plays.
      </p>
      <DataTable
        caption="StreamFlix reviewed by criterion, with the evidence behind each verdict"
        headers={["Criterion", "Verdict", "Evidence"]}
        rows={[
          [
            "Cost and commitment",
            "Strong",
            "Free, no account, no email address, no payment method, no premium tier in either app",
          ],
          [
            "Transparency",
            "Strong for Reborn",
            `Source published on GitHub under ${REBORN.license}, so claims about behaviour can be checked`,
          ],
          [
            "Television experience",
            "Strong for Reborn, poor for StreamFlix 2.0",
            "Reborn ships a leanback interface; StreamFlix 2.0 has a phone layout only",
          ],
          [
            "Reliability of playback",
            "Weak",
            "Streams belong to independent providers that go offline without notice, which no app-side fix changes",
          ],
          [
            "Video quality",
            "Inconsistent",
            "Quality is a property of the source, so the same title varies between providers and between days",
          ],
          [
            "Privacy",
            "Strong for Reborn, moderate for StreamFlix 2.0",
            "No accounts anywhere. StreamFlix 2.0 bundles an ad library that collects device identifiers",
          ],
          [
            "Support and accountability",
            "Weak",
            "Community issue tracker for Reborn, effectively nothing for StreamFlix 2.0",
          ],
          [
            "Install experience",
            "Moderate",
            "Sideloading, unknown sources and a Play Protect notice, or a Play install for StreamFlix 2.0",
          ],
        ]}
      />
      <p>
        The honest summary is that provider dependence explains nearly every
        weakness in that table, and open-source publication explains nearly
        every strength. Neither is going to change, because both are structural
        rather than fixable.
      </p>
      <p>
        Who should avoid it: anyone who needs a film to play on a schedule,
        anyone unwilling to verify a downloaded package themselves, anyone
        setting up a device for someone who cannot switch a provider, and anyone
        who does not want to make a judgement about the copyright status of a
        stream. If any of those describe you, a licensed service is the right
        answer and the comparison is on{" "}
        <InternalLink intent="vsPaid" currentPath={R.safe} />.
      </p>
      <p>
        Who it suits: people comfortable sideloading, who treat a failed stream
        as a two-tap switch rather than a fault, and who value having no account
        anywhere. On a Firestick or an Android TV box, Reborn is among the more
        competent things in this category.
      </p>

      <h2 id="reddit">What users actually report</h2>
      <p>
        Reviews of apps like this are unreliable in a specific way. Download
        sites host ratings for whichever build they serve, mod pages review
        modified copies, and forum threads are dominated by whichever provider
        broke that week. Reading them without that filter produces a distorted
        picture in both directions.
      </p>
      <p>
        The recurring themes are consistent across sources and worth naming,
        because each one has an answer that is not another app.
      </p>
      <DataTable
        caption="Common user complaints about StreamFlix and what actually causes them"
        headers={["What users report", "What it usually is", "What resolves it"]}
        rows={[
          [
            "It stopped finding anything",
            "One provider offline, or an aged build with stale scrapers",
            "Switch provider, then update if several providers fail",
          ],
          [
            "Constant buffering",
            "An overloaded source, or 2.4 GHz Wi-Fi on a TV device",
            "Switch server, lower the quality, move to 5 GHz or Ethernet",
          ],
          [
            "It has a virus",
            "Almost always a repackaged build from a mirror, or a Play Protect notice misread",
            "Verify size, package name, certificate and permissions; reinstall from an official source",
          ],
          [
            "Adverts everywhere in Reborn",
            "Not the official build. Reborn carries no advertising in its own interface",
            "Uninstall it and install the project's own release",
          ],
          [
            "Lost everything after updating",
            "Uninstalling before installing, or a signature mismatch",
            "Always install over the top; never uninstall first",
          ],
          [
            "The remote will not work with it",
            "StreamFlix 2.0 installed on a TV device",
            "Install Reborn, which has an interface built for a D-pad",
          ],
        ]}
      />
      <p>
        None of that requires a forum to diagnose. The two questions worth
        answering yourself are whether your copy is genuine, which the four
        checks below settle, and whether the provider is the problem, which
        switching settles.
      </p>

      <h2 id="scans">Scan results</h2>
      <p>
        The current builds of both apps are submitted to multi-engine scanning
        before we document them, and both return clean. What a clean scan does
        and does not tell you:
      </p>
      <p>
        A scan is a floor, not a ceiling. The four checks below tell you
        something a scan cannot: whether you have the real app.
      </p>
      <ul>
        <li>
          <strong>It confirms no known malware signature is present.</strong>{" "}
          That is genuinely useful and worth having.
        </li>
        <li>
          <strong>It does not confirm the file is the developer&rsquo;s build.</strong>{" "}
          A repackaged APK carrying no malware scans perfectly clean.
        </li>
        <li>
          <strong>It does not evaluate what the app legitimately does</strong>,
          such as contacting third-party providers on your behalf.
        </li>
        <li>
          <strong>A single engine labelling it riskware or PUA is normal</strong>{" "}
          for sideloaded streaming apps. That is a category label rather than a
          detection.
        </li>
      </ul>

      <h2 id="permissions">Permissions, line by line</h2>
      <DataTable
        caption="Permissions each StreamFlix app requests, with justification"
        headers={["Permission", "Why it is needed", "Legitimate?"]}
        rows={[
          [
            "Internet / network state",
            "Fetching catalog data and streams. The app does nothing without it",
            "Yes: unavoidable",
          ],
          [
            "Storage (scoped)",
            "Playback cache and offline downloads, inside the app's own directory",
            "Yes",
          ],
          [
            "Wake lock",
            "Preventing the screen sleeping mid-playback",
            "Yes",
          ],
          [
            "Foreground service",
            "Keeping downloads running while the app is visible",
            "Yes",
          ],
          [
            "Install packages (Reborn)",
            "The in-app updater installing a newer build",
            "Yes, given it is not on a store",
          ],
          [
            "Contacts",
            "No streaming function requires it",
            "No. Treat as repackaged",
          ],
          [
            "SMS / call log",
            "No streaming function requires it",
            "No. Treat as repackaged",
          ],
          [
            "Location",
            "No streaming function requires it",
            "No. Treat as repackaged",
          ],
          [
            "Accessibility service",
            "Grants broad control over the device",
            "No: a serious red flag here",
          ],
        ]}
      />
      <p>
        Check the list yourself under Settings → Apps → StreamFlix →
        Permissions. Anything in the bottom four rows means uninstall and start
        again from an official source.
      </p>

      <h2 id="verify">Verify it yourself in four checks</h2>
      <Roadmap
        items={[
          {
            n: "01",
            title: "Check the file size",
            body: `${REBORN.sizeLabel} for StreamFlix Reborn, ${V2.sizeLabel} for StreamFlix 2.0. A repackaged build is almost always larger, because something was added. A difference of several megabytes is meaningful; a few kilobytes is not.`,
          },
          {
            n: "02",
            title: "Check the package name after install",
            body: `Settings, Apps, then the app's details. It must read exactly ${REBORN.packageName} or ${V2.packageName}. A different package name means a different app wearing the name, and no amount of matching artwork changes that.`,
          },
          {
            n: "03",
            title: "Check the signing certificate",
            body: "An APK analyser app will show the signing certificate hash. Compare it against a build you already trust from an official source. Repackaging always changes the signature. It is the one thing a repackager cannot fake.",
          },
          {
            n: "04",
            title: "Check the permission list",
            body: "Compare it against the table above. Network and storage are expected. Contacts, SMS, location or accessibility are not, and their presence is decisive rather than suggestive.",
          },
        ]}
      />
      <p>
        There is a shortcut worth knowing: if you already have a trusted build
        installed, try to install the new file over the top. If Android accepts
        it as an update, the signatures match and it is from the same source. If
        it refuses on signature grounds, it is not. See{" "}
        <InternalLink intent="update" currentPath={R.safe} />.
      </p>

      <h2 id="open-source">The open-source advantage</h2>
      <Definition term="Verifiable build">
        When source code is public, a published binary can be checked against
        it, or rebuilt from scratch. That turns &ldquo;trust the
        publisher&rdquo; into &ldquo;check for yourself&rdquo;, which is a
        categorically different security position.
      </Definition>
      <p>
        StreamFlix Reborn is published on GitHub under Apache 2.0. Concretely,
        that means:
      </p>
      <ul>
        <li>
          Every network call, permission use and stored value is readable in
          public code, by anyone who wants to look.
        </li>
        <li>
          You can clone the repository, open it in Android Studio, and build
          your own APK, bypassing the trust question entirely.
        </li>
        <li>
          Because the project signs its releases, a repackaged copy is
          detectable by signature comparison.
        </li>
        <li>
          A backdoor would have to survive being visible in a public repository,
          which is a substantially harder proposition than hiding one in a
          closed binary.
        </li>
      </ul>
      <p>
        StreamFlix 2.0 offers none of this. It compensates with Google Play
        distribution, where Google verifies the developer and the signature 
        a different guarantee, weaker in kind but real. See{" "}
        <InternalLink intent="reborn" currentPath={R.safe} />.
      </p>

      <h2 id="red-flags">Red flags in a downloaded APK</h2>
      <ul>
        <li>
          <strong>Size well above the published figure.</strong> The most
          immediate signal that something was added.
        </li>
        <li>
          <strong>A package name that is not one of the two documented ones.</strong>{" "}
          Decisive on its own.
        </li>
        <li>
          <strong>Permissions beyond network and storage.</strong> Particularly
          accessibility services, which grant sweeping device control.
        </li>
        <li>
          <strong>It cannot be updated by the official build.</strong> Proof the
          signature differs, which proves it was repackaged.
        </li>
        <li>
          <strong>Ads in Reborn&rsquo;s own interface.</strong> The official
          build has none. Their presence means someone injected an ad SDK.
        </li>
        <li>
          <strong>It came from a site with a survey or a countdown.</strong>{" "}
          That business model is not aligned with delivering the real file.
        </li>
      </ul>
      <p>
        Why &ldquo;mod&rdquo; builds fail nearly every one of these checks is
        covered on <InternalLink intent="mod" currentPath={R.safe} />.
      </p>

      <h2 id="play-protect">What Play Protect is telling you</h2>
      <p>
        The most misread signal in Android sideloading, so it is worth being
        precise about the two distinct things it does:
      </p>
      <DataTable
        caption="Play Protect responses and what each actually means"
        headers={["Response", "Meaning", "Action"]}
        rows={[
          [
            "'This app was not scanned' with an Install anyway option",
            "Routine sideload notice, shown for every app from outside Play",
            "Proceed. It is about provenance, not content",
          ],
          [
            "'Send to Google for scanning'",
            "An offer to analyse an unrecognised package",
            "Optional. Accepting it is harmless",
          ],
          [
            "'Harmful app blocked' with no override",
            "A genuine detection in that specific file",
            "Do not override. Delete it and get an official build",
          ],
          [
            "Play Protect removes it after installation",
            "A detection landed post-install",
            "Do not reinstall the same file",
          ],
        ]}
      />
      <p>
        The first two are normal for every sideloaded app in existence. The last
        two are not, and are worth acting on. Full install context is on{" "}
        <InternalLink intent="install" currentPath={R.safe} />, and what
        happens to your data is on{" "}
        <InternalLink intent="safe" currentPath={R.safe} />.
      </p>

      <h2 id="no-account">The no-account model</h2>
      <p>
        The most significant privacy property of both apps, and one that gets
        surprisingly little attention: there is no sign-up. No email address, no
        password, no phone number, no payment method.
      </p>
      <Definition term="What an account enables">
        On a licensed service, an account links every title you watch, every
        search, every pause and resume, and your payment details to one
        persistent identity. That record follows you across devices, persists
        after you stop using the service, and is disclosable.
      </Definition>
      <p>
        Neither StreamFlix app has that record, because it has nowhere to keep
        one. Favourites, watch history and resume positions live in the
        app&rsquo;s local storage and are never uploaded. There is no server-side
        profile because there is no server-side account.
      </p>
      <p>
        The cost is the flip side of the same fact: nothing syncs between
        devices, and nothing survives an uninstall. See{" "}
        <InternalLink intent="update" currentPath={R.safe} /> for why that
        makes overlay installs important.
      </p>

      <h2 id="who-sees">Who can see what</h2>
      <p>
        The useful mental model. Different parties see different things, and
        conflating them is why privacy discussion in this area gets muddled.
      </p>
      <DataTable
        caption="What each party in the chain can observe"
        headers={["Party", "What they see", "What they cannot see"]}
        rows={[
          [
            "The app developer",
            "Nothing for Reborn. There is no telemetry endpoint",
            "Your identity, your viewing, anything at all",
          ],
          [
            "The third-party provider",
            "Your IP address and which titles you requested from them",
            "Who you are. There is no account to attach it to",
          ],
          [
            "Your ISP",
            "Which servers you connect to and how much data flows",
            "The video content itself, where the connection is encrypted",
          ],
          [
            "Ad networks (StreamFlix 2.0 only)",
            "Advertising ID, device model, coarse location, app usage",
            "Your name, unless linked elsewhere in the ad ecosystem",
          ],
          [
            "A VPN provider, if you use one",
            "What your ISP otherwise would",
            "Depends entirely on their logging policy",
          ],
          [
            "This site",
            "Nothing about your viewing. We document the apps, we do not run them",
            "Anything you do inside the app",
          ],
        ]}
      />
      <p>
        The provider row deserves attention. You are not anonymous to the
        service actually serving the video: it sees your IP and your requests.
        It just cannot connect them to a person, because no identity was ever
        supplied. A VPN changes the IP part; see{" "}
        <InternalLink intent="vpn" currentPath={R.safe} />.
      </p>

      <h2 id="ads">What ad-supported playback exposes</h2>
      <p>
        The clearest privacy divergence between the two apps, and the practical
        cost of StreamFlix 2.0&rsquo;s Play Store convenience.
      </p>
      <p>
        If minimising data collection is the priority, Reborn is the clearly
        better choice, and this is one of the more concrete reasons why. See{" "}
        <InternalLink intent="reborn" currentPath={R.safe} />.
      </p>
      <ul>
        <li>
          <strong>Reborn carries no advertising or analytics libraries</strong>{" "}
          in its own interface. There is no ad SDK present to collect anything.
        </li>
        <li>
          <strong>StreamFlix 2.0 is ad-supported</strong>, so it embeds an ad
          SDK that reads your advertising ID, device model and coarse location
          in the ordinary way.
        </li>
        <li>
          <strong>That is standard for free Android apps</strong> rather than
          unusual, though it is a real difference between the two.
        </li>
        <li>
          <strong>You can reset your advertising ID</strong> and opt out of
          personalisation in Android&rsquo;s privacy settings.
        </li>
        <li>
          <strong>Adverts served by a provider during playback are separate</strong>{" "}
          again, and neither app controls them.
        </li>
      </ul>
      <p>
        Worth noting the size connection: much of the difference between{" "}
        {REBORN.sizeLabel} and {V2.sizeLabel} is exactly these bundled
        advertising and analytics libraries. The larger download is partly the
        data collection.
      </p>

      <h2 id="local-data">What is stored on your device</h2>
      <ul>
        <li>
          <strong>Favourites and watchlist</strong>: a local database. Never
          uploaded.
        </li>
        <li>
          <strong>Watch history and resume positions</strong>: local, per
          title.
        </li>
        <li>
          <strong>Settings</strong>: provider choice, quality, subtitle
          preferences.
        </li>
        <li>
          <strong>Playback cache</strong>: temporary fragments. Safe to clear
          at any time.
        </li>
        <li>
          <strong>Downloads</strong>, in app-private storage, invisible to
          other apps and to file managers.
        </li>
      </ul>
      <p>
        Clearing cache removes only the temporary fragments. Clearing{" "}
        <em>data</em> removes everything above including downloads, which is
        worth remembering before using it as a troubleshooting step on{" "}
        <InternalLink intent="notWorking" currentPath={R.safe} />.
      </p>

      <h2 id="audit">Auditing permissions after an update</h2>
      <p>
        Permissions are not fixed for the life of an app. A new build can
        request something the previous one did not, and Android will not
        necessarily interrupt you to say so.
      </p>
      <p>
        Runtime permissions such as storage prompt you when the app first needs
        them, so those are visible. Install-time permissions declared in the
        manifest are not: they are granted when the package installs, and an
        overlay update carries them across without a fresh prompt. That is the
        gap worth checking.
      </p>
      <p>
        The check itself takes under a minute. Open Settings, Apps, then the
        app, then Permissions, and compare what is listed against the table
        above. On most Android builds the same screen offers a permissions
        history, which shows what has actually been accessed rather than only
        what was requested.
      </p>
      <p>
        Do this after any update that arrived from outside a store, and
        certainly after installing a build from a mirror you have not used
        before. A newly appearing request for contacts, SMS or accessibility is
        not a subtle signal. It means the build is not the developer&rsquo;s,
        and the four verification checks above cover what to do next.
      </p>

      <h2 id="compare">Compared with a licensed service</h2>
      <DataTable
        caption="Privacy properties compared: StreamFlix apps versus a licensed streaming service"
        headers={["", REBORN.shortName, V2.shortName, "Licensed service"]}
        rows={[
          ["Account required", "No", "No", "Yes"],
          ["Payment details held", "No", "No", "Yes"],
          ["Viewing history on a server", "No", "No", "Yes"],
          ["Cross-device profile", "No", "No", "Yes"],
          ["Ad tracking", "No", "Yes", "Varies by tier"],
          ["Data disclosable on request", "Nothing to disclose", "Ad data only", "Full viewing history"],
          ["Your data if the service closes", "Nothing existed", "Nothing beyond ad data", "Held until deleted"],
        ]}
      />
      <p>
        Read fairly, the no-account model is a genuine privacy advantage, and it
        is one of the few dimensions on which a free aggregator clearly beats a
        paid service. Every other dimension of that comparison is on{" "}
        <InternalLink intent="vsPaid" currentPath={R.safe} />.
      </p>

      <h2 id="reduce">Reducing your exposure</h2>
      <ol>
        <li>
          <strong>Prefer Reborn if privacy is the priority.</strong> No ad SDK,
          no analytics, and auditable source code.
        </li>
        <li>
          <strong>Reset your advertising ID</strong> periodically in
          Android&rsquo;s privacy settings, and opt out of personalisation.
        </li>
        <li>
          <strong>Use a VPN if ISP visibility concerns you</strong>, accepting
          that you are moving trust to the VPN provider rather than removing it.
        </li>
        <li>
          <strong>Change your DNS</strong> to a resolver that does not log. Free,
          and it stops your ISP seeing every domain you look up.
        </li>
        <li>
          <strong>Clear cache periodically.</strong> Non-destructive, and it
          keeps the app&rsquo;s local footprint small.
        </li>
        <li>
          <strong>Only install from official sources.</strong> A repackaged
          build can add exactly the tracking this page says is absent. See{" "}
          <InternalLink intent="installVerify" currentPath={R.safe} />.
        </li>
      </ol>
      <p>
        Our own handling of your data on this website, as distinct from the
        apps, is set out in the privacy policy linked in the footer.
      </p>
    </ClusterPage>
  );
}
