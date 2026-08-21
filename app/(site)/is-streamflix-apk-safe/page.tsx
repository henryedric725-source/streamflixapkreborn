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

const TITLE = "Is StreamFlix APK Safe? How to Verify It Yourself";
const DESCRIPTION =
  "Scan results, the permission list explained line by line, signature and size verification, and why repackaged copies — not the official builds — are the actual risk.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.safe,
  keywords: [
    "is streamflix safe",
    "streamflix apk virus",
    "streamflix safe to install",
    "streamflix permissions",
    "verify apk signature",
  ],
});

const toc = [
  { href: "#answer", label: "The short answer" },
  { href: "#real-risk", label: "Where the risk actually is" },
  { href: "#scans", label: "Scan results" },
  { href: "#permissions", label: "Permissions, line by line" },
  { href: "#verify", label: "Verify it yourself in four checks" },
  { href: "#open-source", label: "The open-source advantage" },
  { href: "#red-flags", label: "Red flags in a downloaded APK" },
  { href: "#play-protect", label: "What Play Protect is telling you" },
];

export default function SafePage() {
  return (
    <ClusterPage
      path={R.safe}
      title={TITLE}
      description={DESCRIPTION}
      kicker="Safety and verification"
      h1="Is StreamFlix APK Safe? How to Check for Yourself"
      answer="The official builds scan clean, and StreamFlix Reborn's Apache 2.0 source can be independently audited — something no closed-source app in this category allows. The real risk is not the official package but repackaged copies redistributed by mirror sites, which four quick checks will catch."
      toc={toc}
      faqs={safetyFaqs}
      takeaways={[
        "The official builds of both apps scan clean. The risk lives in repackaged copies from mirror sites, not in the developers' own packages.",
        "Four checks catch a repackaged build: file size, package name, signing certificate, and permission list.",
        "Neither app has a legitimate reason to request contacts, SMS, call logs, or location. If yours does, uninstall it.",
        "The Play Protect warning reflects the install method, not a detection. A Play Protect block is different and should not be overridden.",
        "Reborn being open-source is a real security property: you can compare a published build against published code, or build it yourself.",
      ]}
    >
      <h2 id="answer">The short answer</h2>
      <p>
        The packages published by the two developers are clean. StreamFlix
        Reborn is additionally verifiable in a way almost nothing else in this
        category is, because its source is public under Apache 2.0 — you do not
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

      <h2 id="scans">Scan results</h2>
      <p>
        The current builds of both apps are submitted to multi-engine scanning
        before we document them, and both return clean. What a clean scan does
        and does not tell you:
      </p>
      <QuickSummary
        bullets={[
          "It confirms the file contains no known malware signature. That is genuinely useful.",
          "It does not confirm the file is the developer's build — a repackaged APK with no malware also scans clean.",
          "It does not evaluate what the app legitimately does, such as contacting third-party providers.",
          "A single engine flagging an app as 'riskware' or 'PUA' is common for sideloaded streaming apps and is a category label rather than a detection.",
        ]}
      >
        <p>
          A scan is a floor, not a ceiling. The four checks below tell you
          something a scan cannot: whether you have the real app.
        </p>
      </QuickSummary>

      <h2 id="permissions">Permissions, line by line</h2>
      <DataTable
        caption="Permissions each StreamFlix app requests, with justification"
        headers={["Permission", "Why it is needed", "Legitimate?"]}
        rows={[
          [
            "Internet / network state",
            "Fetching catalog data and streams. The app does nothing without it",
            "Yes — unavoidable",
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
            "No — treat as repackaged",
          ],
          [
            "SMS / call log",
            "No streaming function requires it",
            "No — treat as repackaged",
          ],
          [
            "Location",
            "No streaming function requires it",
            "No — treat as repackaged",
          ],
          [
            "Accessibility service",
            "Grants broad control over the device",
            "No — a serious red flag here",
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
            body: "An APK analyser app will show the signing certificate hash. Compare it against a build you already trust from an official source. Repackaging always changes the signature — it is the one thing a repackager cannot fake.",
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
        it — or rebuilt from scratch. That turns &ldquo;trust the
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
          your own APK — bypassing the trust question entirely.
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
        distribution, where Google verifies the developer and the signature —
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
            "Proceed — it is about provenance, not content",
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
        <InternalLink intent="privacy" currentPath={R.safe} />.
      </p>
    </ClusterPage>
  );
}
