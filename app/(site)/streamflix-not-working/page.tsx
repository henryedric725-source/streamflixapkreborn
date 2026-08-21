import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, QuickSummary } from "@/components/ContentBlocks";
import { Roadmap } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { troubleshootingFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import { REBORN, V2 } from "@/lib/variants";

const TITLE = "StreamFlix Not Working: Every Fix, In the Order That Works";
const DESCRIPTION =
  "No sources found, endless buffering, app won't install, black screen with sound, crash on launch, Play Protect block — diagnosed in the order most likely to resolve it.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.notWorking,
  keywords: [
    "streamflix not working",
    "streamflix no sources found",
    "streamflix buffering",
    "streamflix crash",
    "streamflix black screen",
    "streamflix app not installed",
  ],
});

const toc = [
  { href: "#triage", label: "Thirty-second triage" },
  { href: "#no-sources", label: "No sources found" },
  { href: "#buffering", label: "Buffering and stalling" },
  { href: "#install-fails", label: "App not installed" },
  { href: "#play-protect", label: "Blocked by Play Protect" },
  { href: "#crash", label: "Crashes on launch" },
  { href: "#black-screen", label: "Black screen with sound" },
  { href: "#after-update", label: "Broke after an update" },
  { href: "#nuclear", label: "When nothing else works" },
];

export default function NotWorkingPage() {
  return (
    <ClusterPage
      path={R.notWorking}
      title={TITLE}
      description={DESCRIPTION}
      kicker="Troubleshooting"
      h1="StreamFlix Not Working? Fixes in Order of What Works"
      answer="Switch server first — most playback failures are a third-party source being down, and changing source fixes them in seconds. If every server fails on every title, the problem is your connection. If the app will not open at all, clear its cache before you clear data, and roll back before you reinstall."
      toc={toc}
      faqs={troubleshootingFaqs}
      takeaways={[
        "Switch server before doing anything else. It resolves the majority of playback complaints and takes two taps.",
        "One title failing is a source problem. Every title failing is a connection, DNS or provider-selection problem.",
        "Clear cache before clearing data — clearing data deletes your favourites and downloads.",
        "Reinstalling almost never helps and always loses your saved data. Roll back to an earlier build instead.",
        "The Play Protect warning and a Play Protect block are different things: one asks, the other refuses. Do not override a block.",
      ]}
    >
      <h2 id="triage">Thirty-second triage</h2>
      <p>
        Work out which class of problem you have before applying fixes, because
        the fixes for each class share nothing.
      </p>
      <Roadmap
        items={[
          {
            n: "01",
            title: "Does one title fail, or all of them?",
            body: "One title failing is a source problem — switch server. All titles failing is a provider-selection, connection or DNS problem, and switching server will not help.",
          },
          {
            n: "02",
            title: "Does the app open at all?",
            body: "If it crashes or will not launch, the problem is the build or its local data, not the network. Skip to the crash section.",
          },
          {
            n: "03",
            title: "Did it work yesterday?",
            body: "Something changed. Usually an app update, an Android update, or a provider going offline. If you updated recently, rolling back is the fastest test.",
          },
          {
            n: "04",
            title: "Is it only on one device?",
            body: "If a phone works and a TV box does not, the problem is device-specific — memory, decoding, or network — rather than the app or the source.",
          },
        ]}
      />

      <h2 id="no-sources">No sources found</h2>
      <p>
        The most common message, and the one most often misdiagnosed as the app
        being broken. It means the selected provider had no working link for
        that title at that moment.
      </p>
      <ol>
        <li>
          <strong>Switch provider in settings.</strong> Not server — provider.
          Different providers index different catalogs entirely.
        </li>
        <li>
          <strong>Test with a well-known recent film.</strong> If a popular
          title also fails, the provider itself is down and no title will work.
        </li>
        <li>
          <strong>Try two or three providers</strong> against that same test
          title. Whichever resolves fastest is the one to keep.
        </li>
        <li>
          <strong>Check your DNS.</strong> Some ISPs block provider domains
          outright. Switching DNS often restores them instantly, and a VPN does
          the same more heavily — see{" "}
          <InternalLink intent="vpn" currentPath={R.notWorking} />.
        </li>
        <li>
          <strong>Update the app.</strong> If a provider changed structure, only
          a build with an updated scraper can follow it.
        </li>
      </ol>
      <p>
        What will not help: reinstalling, clearing data, or trying a different
        StreamFlix variant. None of them change which third-party sources are
        online.
      </p>

      <h2 id="buffering">Buffering and stalling</h2>
      <QuickSummary
        bullets={[
          "Switch server first — one overloaded source causes most buffering, and the next one is often instant.",
          "Lower the playback quality. Asking a marginal connection for 1080p guarantees buffering.",
          "Prefer 5 GHz Wi-Fi, or Ethernet on a TV box. This is the single biggest fix on a TV.",
          "Close background apps on a device with 1 GB or 2 GB of RAM — memory pressure presents as buffering.",
          "Test your actual speed. Below roughly 10 Mbps, 1080p will not hold reliably from any source.",
        ]}
      >
        <p>
          Buffering that persists across every server on every title is a
          network problem wearing an app costume. Buffering on one source that
          disappears when you switch is the source, and is normal.
        </p>
      </QuickSummary>
      <DataTable
        caption="Buffering causes ranked by how often they are responsible"
        headers={["Cause", "How to confirm", "Fix"]}
        rows={[
          [
            "Overloaded source",
            "Switching server fixes it immediately",
            "Switch server — this is the majority of cases",
          ],
          [
            "Quality above what the connection supports",
            "It stops at 720p but not at 1080p",
            "Lower the default quality in settings",
          ],
          [
            "Weak Wi-Fi",
            "Every source buffers, including ones that worked before",
            "Move to 5 GHz, move closer, or use Ethernet",
          ],
          [
            "ISP throttling",
            "Speed tests are fine but streaming is not; a VPN improves it",
            "Try a VPN; if it helps, throttling was the cause",
          ],
          [
            "Device memory pressure",
            "Only on the TV box, only after it has been on a while",
            "Close background apps; restart the device",
          ],
          [
            "Old hardware and a heavy build",
            "Stutter rather than pausing, on a 1 GB device",
            "Install a 1.6 series build from the archive",
          ],
        ]}
      />

      <h2 id="install-fails">App not installed</h2>
      <p>
        The install fails before the app ever runs. Causes, most likely first:
      </p>
      <ul>
        <li>
          <strong>Truncated download.</strong> The commonest cause by a distance,
          and it gives no indication that anything is wrong. Delete and
          re-download, waiting for it to complete.
        </li>
        <li>
          <strong>Signature conflict.</strong> An existing copy signed by someone
          else — typically a repackaged build. Uninstall it first. See{" "}
          <InternalLink intent="installConflict" currentPath={R.notWorking} />.
        </li>
        <li>
          <strong>Insufficient storage.</strong> Android needs several times the
          package size to unpack. Free real space, not a few megabytes.
        </li>
        <li>
          <strong>Android version below the minimum.</strong> Reborn needs{" "}
          {REBORN.minAndroid}; StreamFlix 2.0 needs {V2.minAndroid}. Below that,
          nothing helps.
        </li>
        <li>
          <strong>Permission granted to the wrong app.</strong> Install-from-unknown-sources
          is per app. Grant it to whatever you are opening the file from — see{" "}
          <InternalLink intent="installUnknownSources" currentPath={R.notWorking} />.
        </li>
      </ul>

      <h2 id="play-protect">Blocked by Play Protect</h2>
      <p>
        Two different things get confused here, and the difference matters:
      </p>
      <DataTable
        caption="Play Protect warning versus block, and what to do about each"
        headers={["What happens", "What it means", "What to do"]}
        rows={[
          [
            "A notice saying the app was not scanned, with an Install anyway option",
            "Routine sideload notice. Appears for every app installed outside Play",
            "Proceed. It is about provenance, not content",
          ],
          [
            "The install is refused outright with no override offered",
            "A genuine detection on that specific file",
            "Do not force it. Re-download from an official source and compare size",
          ],
          [
            "It installs, then Play Protect removes it later",
            "A detection landed after installation",
            "Do not reinstall the same file. Get it from an official distribution point",
          ],
        ]}
      />
      <p>
        The routine warning is not a verdict on the file. An outright block is,
        and overriding it is the wrong instinct. Verification techniques that
        settle the question are on{" "}
        <InternalLink intent="safe" currentPath={R.notWorking} />.
      </p>

      <h2 id="crash">Crashes on launch</h2>
      <p>
        The app installs, then closes immediately or within seconds of opening.
        Work through these in order — each is less destructive than the next.
      </p>
      <ol>
        <li>
          <strong>Clear the cache.</strong> Settings → Apps → StreamFlix →
          Storage → Clear cache. Non-destructive: favourites and downloads are
          untouched.
        </li>
        <li>
          <strong>Restart the device.</strong> Genuinely worth doing on TV boxes,
          where memory fragmentation after long uptime is a real cause.
        </li>
        <li>
          <strong>Clear the data.</strong> Destructive — this deletes favourites,
          history and downloads. It resolves crashes caused by a corrupt local
          database.
        </li>
        <li>
          <strong>Install an earlier build.</strong> If the current build simply
          does not agree with your device, this is the actual fix. See{" "}
          <InternalLink intent="rollback" currentPath={R.notWorking} />.
        </li>
        <li>
          <strong>Check free storage.</strong> A device running near full causes
          apps to be killed on launch, which looks exactly like a crash.
        </li>
      </ol>

      <h2 id="black-screen">Black screen with sound</h2>
      <p>
        Audio plays, video does not. This is a decoding problem rather than a
        network one, and it is device-specific.
      </p>
      <ul>
        <li>
          <strong>Switch server.</strong> A different source usually means a
          different codec, and your device may decode that one fine.
        </li>
        <li>
          <strong>Turn off hardware decoding</strong> in player settings. Slower,
          but it uses software decoding that handles more codecs.
        </li>
        <li>
          <strong>Lower the quality.</strong> Some devices decode 720p in
          hardware but not 1080p at high bitrate.
        </li>
        <li>
          <strong>On a TV box, check the HDMI mode.</strong> A resolution or HDR
          mismatch between box and television produces a black picture with
          working audio.
        </li>
      </ul>

      <h2 id="after-update">Broke after an update</h2>
      <p>
        A specific and common case that deserves its own answer, because the
        usual advice makes it worse.
      </p>
      <QuickSummary
        bullets={[
          "Do not reinstall. It will fetch the same build that broke things and delete your data on the way.",
          "Install the previous build over the top without uninstalling — favourites survive if the signature matches.",
          "Decline the in-app updater afterwards, or it will put you straight back where you started.",
          "If Android refuses the downgrade, uninstalling is the only route and you lose local data.",
        ]}
      >
        <p>
          Updates to an aggregator mainly change provider scrapers, so an update
          genuinely can be a downgrade for you personally by dropping a source
          you relied on. Rolling back is a legitimate fix here, not a
          workaround — see{" "}
          <InternalLink intent="oldVersions" currentPath={R.notWorking} />.
        </p>
      </QuickSummary>

      <h2 id="nuclear">When nothing else works</h2>
      <p>
        In order, from least to most destructive. Do not skip ahead — the
        aggressive steps lose data and usually fix nothing that the gentle ones
        would not have.
      </p>
      <ol>
        <li>Clear cache. Non-destructive.</li>
        <li>Restart the device.</li>
        <li>Switch provider and test with a popular title.</li>
        <li>Change DNS, or test with a VPN.</li>
        <li>Install an earlier build over the top.</li>
        <li>Clear data. Destructive.</li>
        <li>Uninstall and install the current build cleanly.</li>
        <li>
          Try the other variant. If Reborn will not run on your device,{" "}
          <InternalLink intent="v2" currentPath={R.notWorking} /> may, and vice
          versa.
        </li>
      </ol>
      <p>
        If a specific device is the problem rather than the app, the
        device-specific pages cover their own failure modes:{" "}
        <InternalLink intent="firestick" currentPath={R.notWorking} />,{" "}
        <InternalLink intent="androidTv" currentPath={R.notWorking} />, and{" "}
        <InternalLink intent="pc" currentPath={R.notWorking} />.
      </p>
    </ClusterPage>
  );
}
