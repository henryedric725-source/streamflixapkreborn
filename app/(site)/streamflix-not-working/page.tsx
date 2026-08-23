import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import {
  DataTable,
  Definition,
  QuickSummary,
} from "@/components/ContentBlocks";
import { Roadmap } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { troubleshootingFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import { REBORN, V2 } from "@/lib/variants";

const TITLE = "StreamFlix Not Working? Every Fix Ranked";
const DESCRIPTION =
  "No sources found, endless buffering, app won't install, black screen, crash on launch, Play Protect block: diagnosed in the order most likely to work.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.notWorking,
  dateModified: "2026-08-08",
  keywords: [
    "streamflix not working",
    "is streamflix down",
    "streamflix down",
    "streamflix http 403",
    "streamflix not working on firestick",
    "streamflix no sources found",
    "streamflix buffering",
    "streamflix crashing",
    "streamflix crash",
    "streamflix black screen",
    "streamflix app not installed",
  ],
});

const toc = [
  { href: "#quick-summary", label: "Quick summary" },
  { href: "#is-it-down", label: "Is StreamFlix down?" },
  { href: "#error-codes", label: "Error codes and exact messages" },
  { href: "#triage", label: "Thirty-second triage" },
  { href: "#no-sources", label: "No sources found" },
  { href: "#buffering", label: "Buffering and stalling" },
  { href: "#install-fails", label: "App not installed" },
  { href: "#play-protect", label: "Blocked by Play Protect" },
  { href: "#crash", label: "Crashes on launch" },
  { href: "#black-screen", label: "Black screen with sound" },
  { href: "#after-update", label: "Broke after an update" },
  { href: "#firestick", label: "Not working on Firestick" },
  { href: "#nuclear", label: "When nothing else works" },
];

export default function NotWorkingPage() {
  return (
    <ClusterPage
      path={R.notWorking}
      title={TITLE}
      description={DESCRIPTION}
      about={["bufferingTerm", "streaming"]}
      mentions={[
        "playProtect",
        "digitalSignature",
        "sideloading",
        "dns",
        "vpn",
        "apk",
        "fireTv",
        "malware",
        "subtitles",
      ]}
      dateModified="2026-08-08"
      kicker="Troubleshooting"
      h1="StreamFlix Not Working? Fixes in Order of What Works"
      answer="Switch server first. Most playback failures are a third-party source being down, and changing source fixes them in seconds. If every server fails on every title, the problem is your connection. If the app will not open at all, clear its cache before you clear data, and roll back before you reinstall."
      toc={toc}
      faqs={troubleshootingFaqs}
      takeaways={[
        "Switch server before doing anything else. It resolves the majority of playback complaints and takes two taps.",
        "One title failing is a source problem. Every title failing is a connection, DNS or provider-selection problem.",
        "Clear cache before clearing data, clearing data deletes your favourites and downloads.",
        "Reinstalling almost never helps and always loses your saved data. Roll back to an earlier build instead.",
        "The Play Protect warning and a Play Protect block are different things: one asks, the other refuses. Do not override a block.",
        "StreamFlix has no central server to go down. When people say it is down, a provider is down, and switching provider is the fix.",
        "HTTP 403 is the provider refusing you, usually on geography or a hotlink check. Switch server first, then test a different DNS resolver or a VPN.",
        "A parse error happens before the app ever runs. It means a truncated or corrupt APK, not a broken app.",
        "On a Firestick, check storage and the 5 GHz network before blaming the app. Both cause symptoms that look like crashes.",
      ]}
    >
      <QuickSummary
        bullets={[
          "Switch server inside the player first. It resolves most playback failures in about ten seconds and costs you nothing if it does not.",
          "One title failing is a source problem. Every title failing is a provider, connection or DNS problem, and switching server will not touch it.",
          "HTTP 403 means the provider refused the request; 404 means the link is gone; a timeout means the source never answered.",
          "A parse error or 'app not installed' happens before launch and points at a truncated download or a signature clash, not at the app.",
          "Clear cache before clearing data. Clearing data deletes favourites, history and every download.",
          `Check the minimum: Reborn needs Android ${REBORN.minAndroid}, StreamFlix 2.0 needs Android ${V2.minAndroid}. Below either, nothing on this page helps.`,
        ]}
      >
        <p>
          When StreamFlix stops working, switch server before anything else.
          Most failures are a third-party source being offline, and changing
          source fixes them in seconds.
        </p>
        <p>
          The rest is a matter of narrowing down. Failures split into three
          groups that share no fixes: playback failures, which are almost always
          the provider; install failures, which are the file or the device; and
          launch failures, which are the build or its local data. Work out which
          group you are in before applying anything below.
        </p>
      </QuickSummary>

      <h2 id="is-it-down">Is StreamFlix down?</h2>
      <p>
        StreamFlix is almost never down, because there is nothing central to go
        down. Neither app runs a video service of its own: Reborn queries
        third-party providers on demand, and it is those independent sites that
        fail.
      </p>
      <Definition term="A StreamFlix outage">
        A StreamFlix outage is not a service interruption in the usual sense.
        Because StreamFlix Reborn hosts no video and runs no catalog server, an
        outage is one of three separate things: a provider going offline, an
        internet service provider or Domain Name System resolver blocking a
        provider&rsquo;s domain, or a build whose scrapers no longer match a
        provider that has changed shape. Each has a different fix, and none of
        them is repaired by waiting for a status page.
      </Definition>
      <p>
        StreamFlix 2.0 is the partial exception. It serves from its own backend,
        so that backend can genuinely be unreachable, and when it is, no setting
        inside the app changes the outcome.
      </p>
      <DataTable
        caption="Telling a provider outage apart from a problem on your own device"
        headers={["Test", "If it works", "If it fails"]}
        rows={[
          [
            "Play a different title on the same provider",
            "The first title has no source. Not an outage",
            "That provider is down. Switch provider",
          ],
          [
            "Switch provider and retry the same title",
            "Confirmed provider outage. Keep the new one for now",
            "Look at your connection rather than the app",
          ],
          [
            "Open any website on the same device",
            "Your connection is fine. Suspect DNS filtering",
            "The device is offline. Nothing else is worth testing",
          ],
          [
            "Change DNS resolver, or connect through a VPN",
            "Your ISP was blocking provider domains",
            "The provider itself is offline for everyone",
          ],
          [
            "Try the app on a second device on the same network",
            "The first device is the problem",
            "The network or the provider is the problem",
          ],
          [
            "Try mobile data instead of Wi-Fi",
            "Your home network or its resolver is filtering",
            "The block is wider than your network",
          ],
        ]}
      />
      <p>
        Running those in order takes about two minutes and tells you which of
        the six sections below to read. Reinstalling tells you nothing and costs
        you your saved data.
      </p>

      <h2 id="error-codes">Error codes and exact messages</h2>
      <p>
        The exact wording matters, because the codes come from different layers.
        Some are HTTP responses from a provider, some are Android install
        errors, and they have nothing to do with each other.
      </p>
      <DataTable
        caption="StreamFlix error codes and messages with their cause and fix"
        headers={["Message", "Where it comes from", "What it means", "Fix"]}
        rows={[
          [
            "HTTP 403",
            "The provider's server",
            "The request was refused, commonly on geography or a hotlink check rather than anything you did",
            "Switch server, then switch provider. If several providers give 403, test a different DNS resolver or a VPN",
          ],
          [
            "HTTP 404",
            "The provider's server",
            "The link the app followed no longer exists. The file moved or was pulled",
            "Switch server for the same title. If every server 404s, the provider has dropped it",
          ],
          [
            "Connection timed out",
            "The network layer",
            "The source never answered at all, rather than answering with a refusal",
            "Switch server; test a different network. Persistent timeouts on every provider point at filtering",
          ],
          [
            "No sources found",
            "The app's own scraper",
            "The selected provider returned nothing for that title",
            "Switch provider, not server, then retest with a well-known film",
          ],
          [
            "Parse error / There was a problem parsing the package",
            "The Android installer",
            "The APK is truncated or corrupt, or the device is below the minimum Android version",
            "Delete the file, download it again in full, and confirm your Android version",
          ],
          [
            "App not installed",
            "The Android installer",
            "A signature clash with an existing copy, or too little free storage to unpack",
            "Uninstall the other copy, free real space, then install again",
          ],
          [
            "Playback error / video unavailable",
            "The player",
            "The stream started but the codec or the container was rejected",
            "Switch server, lower the quality, and turn hardware decoding off",
          ],
          [
            "SSL or certificate error",
            "The network layer",
            "A misconfigured provider certificate, or an interception on the network",
            "Switch provider. Check the device clock, which breaks certificate validation when wrong",
          ],
        ]}
      />
      <p>
        The pattern across the whole table is worth stating plainly. A 4xx code
        is the provider talking, an install error is Android talking, and only
        the second one is something a different download can fix.
      </p>

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
            body: "One title failing is a source problem. Switch server. All titles failing is a provider-selection, connection or DNS problem, and switching server will not help.",
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
            body: "If a phone works and a TV box does not, the problem is device-specific, memory, decoding, or network, rather than the app or the source.",
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
          <strong>Switch provider in settings.</strong> Not server. Provider.
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
          the same more heavily. See{" "}
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
      <p>
        Buffering is the data buffer emptying faster than the connection refills
        it. Buffering on one source that disappears when you switch is the
        source, and is normal. Buffering that persists across every server on
        every title is a network problem wearing an app costume.
      </p>
      <ul>
        <li>
          <strong>Switch server first.</strong> One overloaded source causes
          most buffering, and the next one is often instant.
        </li>
        <li>
          <strong>Lower the playback quality.</strong> Asking a marginal
          connection for 1080p guarantees buffering.
        </li>
        <li>
          <strong>Prefer 5 GHz Wi-Fi, or Ethernet on a TV box.</strong> This is
          the single biggest fix on a television.
        </li>
        <li>
          <strong>Close background apps on a 1 GB or 2 GB device.</strong>{" "}
          Memory pressure presents as buffering rather than as an error.
        </li>
        <li>
          <strong>Test your actual speed.</strong> Below roughly 10 Mbps, 1080p
          will not hold reliably from any source.
        </li>
      </ul>
      <DataTable
        caption="Buffering causes ranked by how often they are responsible"
        headers={["Cause", "How to confirm", "Fix"]}
        rows={[
          [
            "Overloaded source",
            "Switching server fixes it immediately",
            "Switch server. This is the majority of cases",
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
          else, typically a repackaged build. Uninstall it first. See{" "}
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
          is per app. Grant it to whatever you are opening the file from. See{" "}
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
        Work through these in order. Each is less destructive than the next.
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
          <strong>Clear the data.</strong> Destructive: this deletes favourites,
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
      <p>
        Updates to an aggregator mainly change provider scrapers, so an update
        genuinely can be a downgrade for you personally by dropping a source you
        relied on. Rolling back is a legitimate fix here, not a workaround. See{" "}
        <InternalLink intent="oldVersions" currentPath={R.notWorking} />.
      </p>
      <ul>
        <li>
          <strong>Do not reinstall.</strong> It fetches the same build that
          broke things and deletes your data on the way.
        </li>
        <li>
          <strong>Install the previous build over the top</strong> without
          uninstalling. Favourites survive when the signing certificate matches.
        </li>
        <li>
          <strong>Decline the in-app updater afterwards</strong>, or it puts you
          straight back where you started.
        </li>
        <li>
          <strong>If Android refuses the downgrade</strong>, uninstalling is the
          only route and the local data goes with it.
        </li>
      </ul>

      <h2 id="firestick">Not working on Firestick</h2>
      <p>
        Fire TV produces its own failures on top of the general ones, mostly
        because a Fire TV Stick has little storage, modest memory and a remote
        instead of a touchscreen. Check these before working through anything
        above.
      </p>
      <DataTable
        caption="Firestick-specific StreamFlix failures and their fixes"
        headers={["Symptom on Fire TV", "Cause", "Fix"]}
        rows={[
          [
            "The app is gone from the home screen",
            "Sideloaded apps never appear there",
            "Apps row, scroll to the end, then long-press and Move it forward",
          ],
          [
            "Install button does nothing",
            "Install-from-unknown-sources was granted to the wrong app",
            "Settings, My Fire TV, Developer Options, Install unknown apps, then enable Downloader",
          ],
          [
            "Crashes after a few minutes of playback",
            "Memory pressure, common on the Lite and older sticks",
            "Restart the stick, close background apps, and lower the quality",
          ],
          [
            "Everything buffers on every provider",
            "2.4 GHz Wi-Fi, which most sticks default to",
            "Move to 5 GHz, or fit an Ethernet adapter",
          ],
          [
            "Random closures and stuttering menus",
            "Storage close to full, which Fire OS handles badly",
            "Delete the downloaded APK and unused apps, then clear caches",
          ],
          [
            "Phone-style layout that the remote cannot drive",
            "StreamFlix 2.0 was installed rather than Reborn",
            "Uninstall it and install Reborn, which has the leanback interface",
          ],
        ]}
      />
      <p>
        Install-side problems specific to Fire OS, including Developer Options
        being hidden, are covered step by step on{" "}
        <InternalLink intent="firestick" currentPath={R.notWorking} />.
      </p>

      <h2 id="nuclear">When nothing else works</h2>
      <p>
        In order, from least to most destructive. Do not skip ahead. The
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
