import type { Metadata } from "next";
import { AppScreenshot } from "@/components/AppScreenshot";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, Definition, QuickSummary } from "@/components/ContentBlocks";
import { DeviceMatrix } from "@/components/DeviceMatrix";
import { DownloadCta } from "@/components/DownloadCta";
import { StepCards } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { installFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { stagedMap } from "@/lib/releases";
import { R } from "@/lib/routes";
import type { HowToData } from "@/lib/schema";
import { screenshots } from "@/lib/screenshots";
import { REBORN, V2 } from "@/lib/variants";

const TITLE = "How to Install StreamFlix APK on Android (2026 Step-by-Step)";
const DESCRIPTION =
  "Install StreamFlix APK safely: unknown sources on modern Android, the Play Protect warning explained, overlay updates, package conflicts, and how to verify the file before you open it.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.install,
  keywords: [
    "how to install streamflix apk",
    "install apk android",
    "free movie apk",
    "apk movie apps",
    "free movies apk download",
    "movie download apk app",
    "install unknown sources android",
  ],
});

const toc = [
  { href: "#before", label: "Before you start" },
  { href: "#steps", label: "The four steps" },
  { href: "#unknown-sources", label: "Unknown sources on modern Android" },
  { href: "#play-protect-note", label: "The Play Protect warning" },
  { href: "#verify", label: "Verify what you installed" },
  { href: "#conflict", label: "Fixing a package conflict" },
  { href: "#failures", label: "Other install failures" },
  { href: "#devices", label: "Installing on other devices" },
  { href: "#after", label: "What to do first after installing" },
];

const howTo: HowToData = {
  name: "Install StreamFlix APK on Android",
  description:
    "Download the package, grant install permission to the app you downloaded with, install, and verify the package name.",
  path: R.install,
  fragment: "howto-android",
  totalTime: "PT4M",
  steps: [
    {
      name: "Check the requirement and free some space",
      text: "StreamFlix Reborn needs Android 5.0 and 31.43 MB; StreamFlix 2.0 needs Android 6.0 and 76.8 MB. Leave several times the package size free, because Android needs room to unpack during installation.",
    },
    {
      name: "Download the complete package",
      text: "Download the APK and wait for the transfer to finish entirely. A partial file is the single most common cause of an 'App not installed' error, and it gives no clue that it was truncated.",
    },
    {
      name: "Allow installs from the app you downloaded with",
      text: "Open the file and approve the prompt. On Android 8.0 and newer the permission is granted per app, so the dialog names your browser or file manager rather than the system. Approve it there, then return to the install.",
    },
    {
      name: "Install, then verify the package name",
      text: "Tap Install and accept the Play Protect notice, which reflects the sideload rather than a detection. Then open Settings, Apps and confirm the package reads com.streamflixreborn.streamflix or com.ajpro.streamflix2.",
    },
  ],
};

export default function InstallPage() {
  const staged = stagedMap();

  return (
    <ClusterPage
      path={R.install}
      title={TITLE}
      description={DESCRIPTION}
      kicker="Android install guide"
      h1="How to Install StreamFlix APK on Android"
      answer="Download the package, open it, and approve the install-from-unknown-sources prompt for whichever app you downloaded with — on Android 8.0 and newer that permission is per app, not system-wide. Accept the Play Protect notice, install, then confirm the package name matches before you open it."
      toc={toc}
      faqs={installFaqs}
      howTo={howTo}
      takeaways={[
        "There is no system-wide 'unknown sources' switch on modern Android. The permission is granted to the specific app you are installing from.",
        "The Play Protect warning is triggered by the install method, not by anything found in the file. Every sideloaded app produces it.",
        "Verify the package name after install. It is the fastest way to catch a repackaged build, and it takes ten seconds.",
        "Never uninstall before updating — install the new APK over the old one so favourites and watch history survive.",
        "A 'package conflict' almost always means an existing copy signed by someone else. Uninstall it, then install cleanly.",
      ]}
      featureAside={<AppScreenshot shot={screenshots.contentDetails} size="feature" priority />}
    >
      <h2 id="before">Before you start</h2>
      <p>
        Two decisions to make first, because they change what you download.
      </p>
      <DataTable
        caption="Requirements for each StreamFlix app before installing"
        headers={["", REBORN.name, V2.name]}
        rows={[
          ["Download size", REBORN.sizeLabel, V2.sizeLabel],
          ["Minimum Android", REBORN.minAndroid, V2.minAndroid],
          ["Package name", REBORN.packageName, V2.packageName],
          ["Needs sideloading?", "Yes", "No — it is on Google Play"],
          ["Works on TV?", "Yes, full interface", "No"],
          ["Free space to leave", "~150 MB", "~350 MB"],
        ]}
      />
      <p>
        If you want StreamFlix 2.0 on a phone, the easiest route is Google Play
        — none of this guide is necessary, and you avoid the Play Protect
        warning entirely. Everything below applies to sideloading, which is
        mandatory for{" "}
        <InternalLink intent="reborn" currentPath={R.install} /> and optional
        for <InternalLink intent="v2" currentPath={R.install} />.
      </p>

      <div className="not-prose mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-line bg-panel p-5">
          <p className="kicker">Open source, works on TV</p>
          <p className="mt-2 mb-4 text-sm leading-6 text-zinc-300">
            {REBORN.sizeLabel} · Android {REBORN.minAndroid}
          </p>
          <DownloadCta variant={REBORN} staged={staged.reborn} size="md" />
        </div>
        <div className="rounded-2xl border border-line bg-panel p-5">
          <p className="kicker">Play Store, offline downloads</p>
          <p className="mt-2 mb-4 text-sm leading-6 text-zinc-300">
            {V2.sizeLabel} · Android {V2.minAndroid}
          </p>
          <DownloadCta variant={V2} staged={staged.v2} size="md" />
        </div>
      </div>

      <h2 id="steps">The four steps</h2>
      <StepCards
        items={howTo.steps.map((step, index) => ({
          n: String(index + 1).padStart(2, "0"),
          title: step.name,
          body: step.text,
        }))}
      />

      <h2 id="unknown-sources">Unknown sources on modern Android</h2>
      <p>
        This is where most guides are years out of date, and where most people
        get stuck looking for a setting that no longer exists.
      </p>
      <Definition term="Install unknown apps">
        Since Android 8.0, permission to install packages is granted{" "}
        <strong>per app</strong> rather than system-wide. You are not telling
        Android &ldquo;allow sideloading&rdquo;; you are telling it &ldquo;allow
        Chrome to install packages&rdquo;. Grant it to a different app and you
        will be prompted again.
      </Definition>
      <p>
        <strong>Android 8.0 and newer:</strong> Settings → Apps → Special app
        access → Install unknown apps → pick the app you downloaded with →
        enable Allow from this source. Menu wording varies by manufacturer;
        Samsung, Xiaomi and OnePlus each phrase it slightly differently, but the
        path is equivalent.
      </p>
      <p>
        <strong>Android 7.1 and older:</strong> Settings → Security → Unknown
        sources, a single system-wide switch. Turn it back off afterwards if you
        do not sideload regularly.
      </p>
      <p>
        The practical consequence: if you download with Chrome and install from
        Chrome&rsquo;s notification, grant it to Chrome. If you download with
        Chrome and then open the file in Files, grant it to Files. Granting the
        wrong app is the most common reason people think the setting
        &ldquo;did not save&rdquo;.
      </p>

      <h2 id="play-protect-note">The Play Protect warning</h2>
      <p>
        You will see a dialog saying the app was not scanned by Play Protect, or
        offering to send it to Google. This alarms people considerably more than
        it should.
      </p>
      <QuickSummary
        bullets={[
          "It is triggered by the install method, not by an analysis of the file. Every sideloaded app produces it, including entirely benign ones.",
          "A real malware detection uses different wording and blocks the install outright rather than asking you to confirm.",
          "Choosing 'Install anyway' does not disable Play Protect or weaken your device's security.",
          "StreamFlix 2.0 installed from Google Play never shows it, because Play distributed it.",
        ]}
      >
        <p>
          Treat it as a notice about provenance rather than a verdict on the
          file. The actual safety checks worth doing are on{" "}
          <InternalLink intent="safe" currentPath={R.install} />, and if Play
          Protect blocks the install outright rather than warning, see{" "}
          <InternalLink intent="playProtect" currentPath={R.install} />.
        </p>
      </QuickSummary>

      <h2 id="verify">Verify what you installed</h2>
      <p>
        Ten seconds, and it catches the single most likely real problem — that
        you downloaded a repackaged build from a mirror rather than the app you
        intended.
      </p>
      <ol>
        <li>
          <strong>Check the package name.</strong> Settings → Apps → StreamFlix
          → App details. It must read exactly{" "}
          <code>{REBORN.packageName}</code> or <code>{V2.packageName}</code>.
          Anything else is a different app wearing the name.
        </li>
        <li>
          <strong>Check the size against the published figure.</strong>{" "}
          {REBORN.sizeLabel} for Reborn, {V2.sizeLabel} for StreamFlix 2.0. A
          repackaged build is usually noticeably larger, because something was
          added.
        </li>
        <li>
          <strong>Check the permissions.</strong> Network and storage are
          expected. Contacts, SMS, call logs or location are not, and their
          presence means you should uninstall.
        </li>
        <li>
          <strong>Check the version.</strong> Open the app&rsquo;s settings and
          confirm the version matches what you downloaded, not something older
          relabelled.
        </li>
      </ol>

      <h2 id="conflict">Fixing a package conflict</h2>
      <p>
        &ldquo;App not installed&rdquo; with a conflict message means Android
        already has an app with that package name, signed by a different
        certificate. It refuses to overwrite it, and it is right to.
      </p>
      <p>The usual causes, in order of likelihood:</p>
      <ul>
        <li>
          You previously installed a repackaged or &ldquo;mod&rdquo; build. See{" "}
          <InternalLink intent="mod" currentPath={R.install} /> for why this
          happens and why it is permanent.
        </li>
        <li>
          You have a copy from a mirror site signed by that mirror rather than
          by the developer.
        </li>
        <li>
          A previous uninstall left data behind, common on multi-user devices
          and work profiles where another user still has the app.
        </li>
      </ul>
      <p>
        The fix in every case: uninstall the existing copy completely, then
        install the new file. You will lose favourites and watch history,
        because there is no account to restore them from — that is the real cost
        of having installed an unofficial build.
      </p>

      <h2 id="failures">Other install failures</h2>
      <DataTable
        caption="Common StreamFlix install failures with cause and fix"
        headers={["What you see", "Cause", "Fix"]}
        rows={[
          [
            "App not installed (no detail)",
            "Truncated download",
            "Delete the file and download again, waiting for it to finish completely",
          ],
          [
            "There was a problem parsing the package",
            "Corrupt file, or Android version below the minimum",
            "Re-download; then check your Android version against the requirement",
          ],
          [
            "Insufficient storage",
            "Less free space than unpacking needs",
            "Free several times the package size, not just its size",
          ],
          [
            "Install button does nothing",
            "Unknown-sources permission granted to a different app",
            "Grant it to the app you are actually opening the file from",
          ],
          [
            "Blocked by Play Protect",
            "Blocked rather than warned — a stronger signal",
            "Do not override it. Re-download from an official source and compare",
          ],
          [
            "App installs but crashes on launch",
            "Build incompatible with your device",
            "Clear data, then try an earlier build from the archive",
          ],
        ]}
      />
      <p>
        Anything that survives installation and then misbehaves is covered on{" "}
        <InternalLink intent="notWorking" currentPath={R.install} />.
      </p>

      <h2 id="devices">Installing on other devices</h2>
      <p>
        The steps above are the phone route. Other devices need different
        methods, mostly because they have no browser to download with.
      </p>
      <DeviceMatrix caption="Install method per device for both StreamFlix apps" />

      <h2 id="after">What to do first after installing</h2>
      <p>
        One thing, before you browse: open settings and check which provider is
        selected. The default is not always the best one for your region, and a
        large share of &ldquo;nothing plays&rdquo; complaints come down to a
        provider choice nobody ever reviewed.
      </p>
      <p>
        After that, <InternalLink intent="howToUse" currentPath={R.install} />{" "}
        covers server switching, subtitles, audio tracks and watchlists — and{" "}
        <InternalLink intent="update" currentPath={R.install} /> covers keeping
        the app current without losing what you have saved.
      </p>
    </ClusterPage>
  );
}
