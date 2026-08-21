import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, QuickSummary } from "@/components/ContentBlocks";
import { DeviceMatrix } from "@/components/DeviceMatrix";
import { StepCards } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { VariantSupportStrip } from "@/components/VariantCompare";
import { firestickFaqs } from "@/lib/faqs";
import { devicesForGuide } from "@/lib/devices";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import type { HowToData } from "@/lib/schema";
import { REBORN } from "@/lib/variants";

const TITLE = "StreamFlix on Firestick and Fire TV: Install with Downloader (2026)";
const DESCRIPTION =
  "Install StreamFlix Reborn on a Fire TV Stick using the Downloader app: unknown sources in Developer Options, the URL method, where sideloaded apps hide, and remote navigation.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.firestick,
  keywords: [
    "streamflix firestick",
    "streamflix fire tv",
    "install streamflix on firestick",
    "free streaming apps for android tv",
    "streaming apk",
    "downloader app firestick",
  ],
});

const toc = [
  { href: "#which", label: "Which variant works on Fire TV" },
  { href: "#downloader", label: "The Downloader method" },
  { href: "#unknown-sources-fire", label: "Enabling unknown sources on Fire OS" },
  { href: "#find-it", label: "Finding a sideloaded app" },
  { href: "#remote", label: "Driving it with the remote" },
  { href: "#hardware", label: "Which Firestick you have matters" },
  { href: "#storage", label: "Managing Fire TV storage" },
  { href: "#problems", label: "Fire TV specific problems" },
];

const howTo: HowToData = {
  name: "Install StreamFlix Reborn on a Fire TV Stick",
  description:
    "Enable Downloader as an install source, fetch the APK by URL, install it, and move it forward in the Apps row.",
  path: R.firestick,
  fragment: "howto-firestick",
  totalTime: "PT7M",
  toolName: `${REBORN.name} v${REBORN.version}`,
  steps: [
    {
      name: "Install Downloader from the Amazon Appstore",
      text: "Search the Appstore for Downloader by AFTVnews and install it. Fire OS has no general-purpose browser, so a fetch-and-install utility is how any sideload happens.",
    },
    {
      name: "Allow Downloader to install apps",
      text: "Go to Settings, My Fire TV, Developer Options, Install unknown apps, and switch Downloader on. If Developer Options is missing, open Settings, My Fire TV, About and click the Fire TV Stick entry seven times to reveal it.",
    },
    {
      name: "Enter the APK URL",
      text: "Open Downloader, select the URL field, type the direct APK address, and press Go. Typing a URL with a remote is tedious, so keep it short — this is why sideload URLs are usually shortened.",
    },
    {
      name: "Install, then delete the installer",
      text: "Choose Install when the download completes, then Done, then Delete to remove the downloaded APK. A Fire TV Stick has very little usable storage and a 31 MB installer is a meaningful share of it.",
    },
    {
      name: "Move it forward in the Apps row",
      text: "Sideloaded apps land at the end of the Apps row. Press and hold the select button on the app, choose Move, and bring it near the front so you are not scrolling to it every time.",
    },
  ],
};

export default function FirestickPage() {
  return (
    <ClusterPage
      path={R.firestick}
      title={TITLE}
      description={DESCRIPTION}
      kicker="Fire TV install"
      h1="How to Install StreamFlix on Firestick and Fire TV"
      answer="Install StreamFlix Reborn with the Downloader app: enable it under Settings, My Fire TV, Developer Options, Install unknown apps, then fetch the APK by URL. Reborn is the only variant worth installing here — it ships a real leanback interface, where StreamFlix 2.0 has none."
      toc={toc}
      faqs={firestickFaqs}
      howTo={howTo}
      downloadVariant={REBORN}
      takeaways={[
        "Neither StreamFlix app is in the Amazon Appstore, so sideloading through Downloader is the only route on Fire TV.",
        "Install StreamFlix Reborn, not StreamFlix 2.0 — only Reborn has a D-pad interface, and the difference is severe on a remote.",
        "Developer Options may be hidden. Reveal it by clicking the device name seven times under Settings, My Fire TV, About.",
        "Delete the downloaded APK after installing. Fire TV Stick storage is tight and the installer serves no further purpose.",
        "Sideloaded apps appear at the end of the Apps row, never on the home screen. Move it forward or you will hunt for it every time.",
      ]}
    >
      <h2 id="which">Which variant works on Fire TV</h2>
      <VariantSupportStrip
        rebornSupported
        v2Supported={false}
        context="Fire TV Stick and Fire TV"
      />
      <p>
        Both apps will technically install — Fire OS is Android underneath — but
        only one is usable. StreamFlix Reborn ships a leanback interface built
        for a D-pad: focus states land where you aimed, text is sized for
        viewing across a room, and no virtual-cursor app is needed.
      </p>
      <p>
        StreamFlix 2.0 has a phone layout only. On a television that means
        controls positioned for a fingertip, text sized for arm&rsquo;s length,
        and scrolling that fights the remote. If you have already installed it
        on a Firestick and found it unpleasant, that is why — install{" "}
        <InternalLink intent="reborn" currentPath={R.firestick} /> instead.
      </p>

      <h2 id="downloader">The Downloader method</h2>
      <StepCards
        items={howTo.steps.map((step, index) => ({
          n: String(index + 1).padStart(2, "0"),
          title: step.name,
          body: step.text,
        }))}
      />

      <h2 id="unknown-sources-fire">Enabling unknown sources on Fire OS</h2>
      <p>
        Fire OS follows the same per-app model as modern Android, but hides it
        somewhere different and sometimes hides the whole menu.
      </p>
      <ol>
        <li>
          Settings → My Fire TV → <strong>Developer Options</strong> → Install
          unknown apps → Downloader → on.
        </li>
        <li>
          <strong>If Developer Options is not there</strong>, it is hidden on
          newer Fire OS builds. Go to Settings → My Fire TV → About, highlight
          the device name, and click it seven times. A toast counts down, and
          Developer Options appears in the previous menu.
        </li>
        <li>
          Older Fire OS versions show a single <strong>Apps from Unknown
          Sources</strong> toggle in the same menu instead of a per-app list.
          Turn it on, install, and turn it back off if you prefer.
        </li>
      </ol>
      <p>
        Grant the permission to <em>Downloader</em> specifically. Granting it to
        something else and then installing from Downloader produces a silent
        failure that looks like the setting did not save.
      </p>

      <h2 id="find-it">Finding a sideloaded app</h2>
      <p>
        Amazon deliberately keeps sideloaded apps off the home screen. After
        installing, the app is not missing — it is at the end of the Apps row.
      </p>
      <ul>
        <li>
          <strong>Apps row:</strong> from the home screen, go to Apps, then
          scroll to the very end. Everything sideloaded lives there.
        </li>
        <li>
          <strong>Settings route:</strong> Settings → Applications → Manage
          Installed Applications → StreamFlix → Launch application.
        </li>
        <li>
          <strong>Move it forward:</strong> highlight it in the Apps row, hold
          the select button, choose Move, and place it near the front. Worth the
          thirty seconds.
        </li>
        <li>
          <strong>Voice search will not find it.</strong> Alexa only searches
          Amazon&rsquo;s catalog, so asking for it by name does nothing.
        </li>
      </ul>

      <h2 id="remote">Driving it with the remote</h2>
      <p>
        Reborn&rsquo;s TV interface maps to the Fire TV remote without any
        helper app, which is the main reason to prefer it here.
      </p>
      <DataTable
        caption="Fire TV remote controls mapped to StreamFlix Reborn actions"
        headers={["Remote control", "In the catalog", "During playback"]}
        rows={[
          ["D-pad", "Move between rows and titles", "Seek and open the control bar"],
          ["Select", "Open a title", "Play or pause"],
          ["Back", "Return to the previous screen", "Exit playback"],
          ["Menu (three lines)", "Open contextual options", "Open the source and server picker"],
          ["Play/Pause", "—", "Play or pause"],
          ["Long-press select", "App options in the Apps row", "—"],
        ]}
      />
      <p>
        The source and server picker is the control worth knowing. When a stream
        stalls, opening it and choosing another entry is faster and more likely
        to work than backing out and re-entering the title — see{" "}
        <InternalLink intent="switchServers" currentPath={R.firestick} />.
      </p>

      <h2 id="hardware">Which Firestick you have matters</h2>
      <DataTable
        caption="StreamFlix Reborn performance expectations by Fire TV hardware generation"
        headers={["Device", "Expect", "Recommendation"]}
        rows={[
          [
            "Fire TV Stick 4K / 4K Max",
            "Smooth playback including high-bitrate sources",
            "Run the current build",
          ],
          [
            "Fire TV Stick (3rd gen)",
            "Fine at 1080p, occasional stutter on heavy sources",
            "Current build, lower quality if it stutters",
          ],
          [
            "Fire TV Stick Lite",
            "Adequate at 1080p, tight on memory",
            "Close background apps before watching",
          ],
          [
            "Fire TV Stick (2nd gen)",
            "Struggles with the 1.7 player",
            "Try a 1.6 series build from the archive",
          ],
          [
            "Fire TV Cube",
            "Best performance of the range",
            "Run the current build",
          ],
        ]}
      />
      <p>
        On the older sticks, an earlier build is often genuinely smoother
        because the 1.6 player is lighter on memory. That is a legitimate fix
        rather than a compromise — see{" "}
        <InternalLink intent="oldVersions" currentPath={R.firestick} />.
      </p>

      <h2 id="storage">Managing Fire TV storage</h2>
      <p>
        A Fire TV Stick ships with roughly 8 GB, of which about 5 GB is usable.
        Reborn is small, but the surrounding clutter is not.
      </p>
      <QuickSummary
        bullets={[
          "Delete the downloaded APK from Downloader immediately after installing — it is 31 MB doing nothing.",
          "Clear Downloader's own cache periodically; it accumulates.",
          "Uninstall preinstalled apps you never open. This frees more than anything else you can do.",
          "Clear StreamFlix's cache if playback becomes erratic — cache growth is a common cause on constrained devices.",
        ]}
      >
        <p>
          Low storage on Fire TV presents as instability rather than an
          out-of-space error: apps close unexpectedly and playback stutters. If
          your Firestick has become flaky generally, check storage before
          blaming any single app.
        </p>
      </QuickSummary>

      <h2 id="problems">Fire TV specific problems</h2>
      <DataTable
        caption="Problems specific to installing and running StreamFlix on Fire TV"
        headers={["Symptom", "Cause", "Fix"]}
        rows={[
          [
            "Downloader shows a blank page",
            "Mistyped URL — easy with a remote",
            "Re-enter carefully, or use Downloader's browser to navigate instead",
          ],
          [
            "Install button greyed out",
            "Unknown-sources not enabled for Downloader",
            "Settings, My Fire TV, Developer Options, Install unknown apps, Downloader",
          ],
          [
            "Developer Options missing",
            "Hidden on newer Fire OS",
            "Settings, My Fire TV, About, click the device name seven times",
          ],
          [
            "App installed but nowhere visible",
            "Sideloaded apps never appear on the home screen",
            "Apps row, scroll to the end; then long-press and Move it forward",
          ],
          [
            "Playback stutters on a 2nd gen stick",
            "1.7 player is heavier than the hardware likes",
            "Install a 1.6 series build, or lower playback quality",
          ],
          [
            "Everything buffers regardless of source",
            "Wi-Fi rather than the app",
            "Move to 5 GHz, or use an Ethernet adapter on the stick",
          ],
        ]}
      />
      <p>
        Symptoms that are not Fire TV specific — no sources found, crashes,
        black screen with audio — are diagnosed on{" "}
        <InternalLink intent="notWorking" currentPath={R.firestick} />. For a
        VPN on Fire TV specifically, see{" "}
        <InternalLink intent="vpn" currentPath={R.firestick} />.
      </p>

      <h2 id="matrix">Fire TV in the wider device picture</h2>
      <DeviceMatrix
        devices={devicesForGuide(R.firestick)}
        caption="Fire TV device support for both StreamFlix apps"
      />
      <p>
        Other TV platforms differ substantially:{" "}
        <InternalLink intent="androidTv" currentPath={R.firestick} /> covers
        Google TV and Android boxes, and{" "}
        <InternalLink intent="smartTv" currentPath={R.firestick} /> covers
        Samsung and LG sets, which cannot run an APK at all.
      </p>
    </ClusterPage>
  );
}
