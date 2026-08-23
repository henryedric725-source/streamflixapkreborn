import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import {
  DataTable,
  Definition,
  QuickSummary,
} from "@/components/ContentBlocks";
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

const TITLE = "StreamFlix on Firestick: Install Guide";
const DESCRIPTION =
  "Install StreamFlix Reborn on a Fire TV Stick with the Downloader app: unknown sources in Developer Options, the URL method, and where sideloaded apps hide.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.firestick,
  dateModified: "2026-08-16",
  keywords: [
    "streamflix firestick",
    "streamflix on firestick",
    "how to install streamflix on firestick",
    "how to download streamflix on firestick",
    "streamflix downloader code firestick",
    "streamflix firestick code",
    "downloader code for streamflix",
    "streamflix reborn downloader code",
    "codigo downloader streamflix",
    "streamflix not working on firestick",
    "streamflix removed from firestick",
    "streamflix apk firestick",
    "install streamflix on fire tv stick",
    "how to get streamflix on firestick",
    "streamflix amazon fire stick",
    "streamflix firetv",
  ],
});

const toc = [
  { href: "#quick-summary", label: "Quick summary" },
  { href: "#which", label: "Which variant works on Fire TV" },
  { href: "#downloader", label: "The Downloader method" },
  { href: "#codes", label: "Downloader codes explained" },
  { href: "#removed", label: "Was StreamFlix removed from Firestick?" },
  { href: "#video", label: "Video walkthrough" },
  { href: "#unknown-sources-fire", label: "Enabling unknown sources on Fire OS" },
  { href: "#find-it", label: "Finding a sideloaded app" },
  { href: "#remote", label: "Driving it with the remote" },
  { href: "#hardware", label: "Which Firestick you have matters" },
  { href: "#storage", label: "Managing Fire TV storage" },
  { href: "#problems", label: "Fire TV specific problems" },
  { href: "#matrix", label: "Fire TV in the wider device picture" },
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
      text: "Open Downloader, select the URL field, type the direct APK address, and press Go. Typing a URL with a remote is tedious, so keep it short. This is why sideload URLs are usually shortened.",
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
      about={["fireTv", "sideloading"]}
      mentions={[
        "android",
        "apk",
        "androidTv",
        "googleTv",
        "chromecast",
        "streaming",
        "playProtect",
        "vpn",
        "downloader",
        "amazonAppstore",
        "leanback",
      ]}
      dateModified="2026-08-16"
      kicker="Fire TV install"
      h1="How to Install StreamFlix on Firestick and Fire TV"
      answer="Install StreamFlix Reborn with the Downloader app: enable it under Settings, My Fire TV, Developer Options, Install unknown apps, then fetch the APK by URL. Reborn is the only variant worth installing here: it ships a real leanback interface, where StreamFlix 2.0 has none."
      toc={toc}
      faqs={firestickFaqs}
      howTo={howTo}
      downloadVariant={REBORN}
      video={{
        name: "StreamFlix Reborn install walkthrough for Firestick",
        description:
          "Third-party video walkthrough of sideloading StreamFlix Reborn onto a Fire TV Stick with the Downloader app.",
        embedUrl: "https://www.youtube.com/embed/zkj6cKjF8Wo",
        uploadDate: "2026-02-14",
        thumbnailUrl: "https://i.ytimg.com/vi/zkj6cKjF8Wo/hqdefault.jpg",
      }}
      takeaways={[
        "Neither StreamFlix app is in the Amazon Appstore, so sideloading through Downloader is the only route on Fire TV.",
        "Install StreamFlix Reborn, not StreamFlix 2.0. Only Reborn has a D-pad interface, and the difference is severe on a remote.",
        "Developer Options may be hidden. Reveal it by clicking the device name seven times under Settings, My Fire TV, About.",
        "Delete the downloaded APK after installing. Fire TV Stick storage is tight and the installer serves no further purpose.",
        "Sideloaded apps appear at the end of the Apps row, never on the home screen. Move it forward or you will hunt for it every time.",
        "No Downloader code is issued by the StreamFlix developer. Every circulating code is a third-party redirect that its owner can repoint or let expire.",
        "Typing the full APK address into Downloader reaches the same file with one less unknown in the chain, and shows you the host you are downloading from.",
        "StreamFlix was never in the Amazon Appstore, so it was never removed from Firestick. Old tutorials point at the original app that was taken down in 2024.",
      ]}
    >
      <QuickSummary
        bullets={[
          `Install StreamFlix Reborn v${REBORN.version}, ${REBORN.sizeLabel}, package ${REBORN.packageName}. It needs Android ${REBORN.minAndroid} and Fire OS clears that on every current stick.`,
          "Route: Amazon Appstore, install Downloader by AFTVnews, then Settings, My Fire TV, Developer Options, Install unknown apps, Downloader on.",
          "Enter the full APK address in Downloader and press Go. Typical time from a stock Firestick to first playback is about seven minutes.",
          "No official Downloader code exists. Codes such as 730116 and 250931 are third-party redirects registered by tutorial sites, not by the developer.",
          "Install Reborn rather than StreamFlix 2.0. Only Reborn ships a leanback interface that a D-pad remote can drive.",
          "After installing, the app sits at the end of the Apps row. Long-press it and choose Move to bring it forward.",
        ]}
      >
        <p>
          To install StreamFlix on a Firestick, sideload the StreamFlix Reborn
          APK with the Downloader app after allowing Downloader to install
          unknown apps. Neither StreamFlix app is in the Amazon Appstore.
        </p>
        <p>
          Fire OS is a fork of Android, so the same package that runs on an
          Android TV box runs on a Fire TV Stick, a Fire TV Cube and a Fire TV
          Edition television. What differs is the install route and where Amazon
          files the finished app, and both are covered below.
        </p>
      </QuickSummary>

      <h2 id="which">Which variant works on Fire TV</h2>
      <VariantSupportStrip
        rebornSupported
        v2Supported={false}
        context="Fire TV Stick and Fire TV"
      />
      <p>
        Both apps will technically install, Fire OS is Android underneath, but
        only one is usable. StreamFlix Reborn ships a leanback interface built
        for a D-pad: focus states land where you aimed, text is sized for
        viewing across a room, and no virtual-cursor app is needed.
      </p>
      <p>
        StreamFlix 2.0 has a phone layout only. On a television that means
        controls positioned for a fingertip, text sized for arm&rsquo;s length,
        and scrolling that fights the remote. If you have already installed it
        on a Firestick and found it unpleasant, that is why. Install{" "}
        <InternalLink intent="reborn" currentPath={R.firestick} /> instead.
      </p>
      <Definition term="StreamFlix on Firestick">
        StreamFlix on Firestick means the StreamFlix Reborn Android package
        installed onto Amazon Fire TV hardware by sideloading, because Fire OS
        is built on Android and accepts an APK while the Amazon Appstore carries
        no StreamFlix listing. The installed app is identical to the Android TV
        and Google TV build, including the leanback interface, the provider
        selector and the in-app updater. Amazon files sideloaded apps at the end
        of the Apps row rather than on the home screen.
      </Definition>

      <h2 id="downloader">The Downloader method</h2>
      <p>
        Downloader by AFTVnews is the standard route because Fire OS ships no
        general-purpose web browser. Downloader fetches a file from an address
        you type and hands it to the Fire OS installer, which is the whole job
        in one app. The five steps below take about seven minutes on a stock
        stick.
      </p>
      <StepCards
        items={howTo.steps.map((step, index) => ({
          n: String(index + 1).padStart(2, "0"),
          title: step.name,
          body: step.text,
        }))}
      />
      <p>
        Two details decide whether this works first time. The unknown-apps
        permission has to be granted to <em>Downloader</em> specifically, not to
        a file manager you happen to have installed, or the Install button stays
        inert. And the address has to be typed exactly, including the file
        extension, because Downloader gives a blank page rather than an error
        when a URL resolves to nothing.
      </p>
      <p>
        Downloader also has a small built-in browser under its Browser tab. If
        typing a long address with a remote is painful, open the download page
        there and select the link, which avoids the transcription error that
        causes most blank pages. Once the file lands, choose Install, then Done,
        then Delete to reclaim the space.
      </p>
      <DataTable
        caption="Ways to get the StreamFlix APK onto a Fire TV Stick compared"
        headers={["Method", "What you need", "Trade-off"]}
        rows={[
          [
            "Downloader, full URL",
            "Downloader plus the direct APK address",
            "Most transparent. You can see the host the file comes from before it downloads",
          ],
          [
            "Downloader, third-party code",
            "Downloader plus a number someone published",
            "Shortest to type, but the destination is controlled by whoever registered the code",
          ],
          [
            "Downloader browser tab",
            "Downloader plus the download page address",
            "Avoids typing a long file path, at the cost of navigating a web page with a remote",
          ],
          [
            "ADB over the network",
            "A computer on the same Wi-Fi and ADB debugging enabled on the stick",
            "No typing on the television at all, but it is a command line and a one-off setup",
          ],
          [
            "A second file-fetching app",
            "Any Fire OS app that downloads files, granted install permission",
            "Works, though most are ad-heavier than Downloader and none are easier",
          ],
        ]}
      />

      <h2 id="codes">Downloader codes explained</h2>
      <p>
        There is no StreamFlix Downloader code issued by the developer. A
        Downloader code is a short number that a third party registers against a
        web address of their choosing, so a code is only ever a shortcut to
        somebody else&rsquo;s page.
      </p>
      <p>
        Codes such as 730116 and 250931 circulate widely in Firestick tutorials
        and on video descriptions. Each one resolves to the tutorial site that
        registered it, which then links onward to a file. That extra hop is the
        entire mechanism, and it is also the entire problem: the owner of a code
        can repoint it at a different address at any time, and you would see no
        difference on screen.
      </p>
      <DataTable
        caption="How a Downloader code differs from typing the APK address"
        headers={["", "Third-party code", "Full APK address"]}
        rows={[
          [
            "Who controls the destination",
            "Whoever registered the code",
            "The host named in the address you typed",
          ],
          [
            "What you see before downloading",
            "A number, then whatever page loads",
            "The domain, the path and the file name",
          ],
          [
            "Typing effort with a remote",
            "Six digits",
            "A full URL, longer but unambiguous",
          ],
          [
            "How it breaks",
            "Silently, when the target moves or the registration lapses",
            "Visibly, with a 404 or a blank page you can act on",
          ],
          [
            "Version certainty",
            "None. The linked build may be older than advertised",
            `Check the version in the app afterwards against v${REBORN.version}`,
          ],
        ]}
      />
      <p>
        Codes stop working for ordinary reasons: the registration expires, the
        publisher restructures their site, the file is moved, or the host blocks
        Downloader&rsquo;s requests. Because none of that is visible from a
        six-digit number, a dead code and a repointed code look identical. The
        same reasoning applies to Spanish-language pages searching for a{" "}
        <em>c&oacute;digo Downloader</em>: the mechanism is the same, and no
        regional code is any more official than an English one.
      </p>
      <p>
        Whichever route you take, verify afterwards rather than beforehand. Open
        Settings, Applications, Manage Installed Applications and confirm the
        package reads <code>{REBORN.packageName}</code>, then check the version
        inside the app. That single check is worth more than any assurance a
        download page offers. See{" "}
        <InternalLink intent="installVerify" currentPath={R.firestick} />.
      </p>

      <h2 id="removed">Was StreamFlix removed from Firestick?</h2>
      <p>
        Nothing was removed from Fire TV, because nothing was ever listed there.
        Neither StreamFlix app has appeared in the Amazon Appstore, so there was
        no listing for Amazon to pull and no update channel to cut off.
      </p>
      <p>
        The belief comes from two real events. The original StreamFlix was taken
        down after a copyright complaint, which broke the download links inside
        Firestick tutorials written before the takedown. Separately, individual
        providers inside the app go dark regularly, which makes a working
        install look broken from one day to the next. Neither is Amazon removing
        an app.
      </p>
      <DataTable
        caption="What people mean by StreamFlix being removed from Firestick"
        headers={["What you saw", "What actually happened", "What to do"]}
        rows={[
          [
            "An old tutorial's link now fails",
            "That link pointed at the original app, which was taken down",
            `Install StreamFlix Reborn v${REBORN.version}, the open-source continuation`,
          ],
          [
            "The app icon disappeared",
            "Sideloaded apps sit at the end of the Apps row, not on the home screen",
            "Apps row, scroll to the end, then long-press and Move it forward",
          ],
          [
            "It opens but finds nothing",
            "The selected provider is down, not the app",
            "Switch provider in settings, then retry the title",
          ],
          [
            "It stopped working after a Fire OS update",
            "Fire OS resets some permissions after major updates",
            "Re-check Developer Options, Install unknown apps, Downloader",
          ],
          [
            "A Downloader code returns nothing",
            "The code's registered target moved or lapsed",
            "Enter the full APK address instead of the code",
          ],
        ]}
      />

      <h2 id="video">Video walkthrough</h2>
      <p>
        A third-party walkthrough of the same process, if you would rather watch
        it than read it. We did not produce this video and have no relationship
        with its author; it is linked because the method it demonstrates matches
        the steps above.
      </p>
      <div className="not-prose mt-4 overflow-hidden rounded-2xl border border-line">
        <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/zkj6cKjF8Wo"
            title="StreamFlix Reborn install walkthrough for Firestick"
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>

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
        installing, the app is not missing. It is at the end of the Apps row.
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
          ["Play/Pause", ", ", "Play or pause"],
          ["Long-press select", "App options in the Apps row", ", "],
        ]}
      />
      <p>
        The source and server picker is the control worth knowing. When a stream
        stalls, opening it and choosing another entry is faster and more likely
        to work than backing out and re-entering the title. See{" "}
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
        rather than a compromise. See{" "}
        <InternalLink intent="oldVersions" currentPath={R.firestick} />.
      </p>

      <h2 id="storage">Managing Fire TV storage</h2>
      <p>
        A Fire TV Stick ships with roughly 8 GB, of which about 5 GB is usable.
        Reborn is small, but the surrounding clutter is not.
      </p>
      <p>
        Low storage on Fire TV presents as instability rather than an
        out-of-space error: apps close unexpectedly and playback stutters. If
        your Firestick has become flaky generally, check storage before blaming
        any single app.
      </p>
      <ul>
        <li>
          Delete the downloaded APK inside Downloader immediately after
          installing. It is {REBORN.sizeLabel} doing nothing.
        </li>
        <li>Clear Downloader&rsquo;s own cache periodically, because it accumulates.</li>
        <li>
          Uninstall preinstalled apps you never open. This frees more than
          anything else you can do.
        </li>
        <li>
          Clear StreamFlix&rsquo;s cache if playback becomes erratic. Cache
          growth is a common cause on constrained devices.
        </li>
      </ul>

      <h2 id="problems">Fire TV specific problems</h2>
      <DataTable
        caption="Problems specific to installing and running StreamFlix on Fire TV"
        headers={["Symptom", "Cause", "Fix"]}
        rows={[
          [
            "Downloader shows a blank page",
            "Mistyped URL: easy with a remote",
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
        Symptoms that are not Fire TV specific, no sources found, crashes,
        black screen with audio. Are diagnosed on{" "}
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
