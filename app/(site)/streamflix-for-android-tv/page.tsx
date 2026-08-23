import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import {
  DataTable,
  Definition,
  QuickSummary,
} from "@/components/ContentBlocks";
import { DeviceMatrix } from "@/components/DeviceMatrix";
import { FeatureCards, StepCards } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { VariantSupportStrip } from "@/components/VariantCompare";
import { androidTvFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import type { HowToData } from "@/lib/schema";
import { REBORN } from "@/lib/variants";

const TITLE = "StreamFlix for Android TV and Google TV";
const DESCRIPTION =
  "Install StreamFlix Reborn on an Android TV box, Google TV or Nvidia Shield: USB and network sideloading, finding an app Google TV hides, and D-pad navigation.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.androidTv,
  dateModified: "2026-08-15",
  keywords: [
    "streamflix android tv",
    "streamflix for android tv",
    "streamflix apk download for android tv",
    "downloader code for streamflix android tv",
    "streamflix android tv app",
    "best apps like streamflix for android tv",
    "streamflix alternatives android tv",
    "streamflix google tv",
    "streamflix android tv box",
    "sideload apk android tv",
  ],
});

const toc = [
  { href: "#quick-summary", label: "Quick summary" },
  { href: "#which", label: "Which variant to install" },
  { href: "#download", label: "Where the Android TV APK comes from" },
  { href: "#methods", label: "Three ways to sideload" },
  { href: "#codes", label: "Downloader codes on Android TV" },
  { href: "#usb", label: "The USB method" },
  { href: "#network", label: "The network method" },
  { href: "#hidden", label: "When Google TV hides the app" },
  { href: "#navigation", label: "D-pad navigation" },
  { href: "#hardware", label: "Hardware and performance" },
  { href: "#problems", label: "Android TV specific problems" },
  { href: "#alternatives", label: "Apps like StreamFlix for Android TV" },
];

const usbHowTo: HowToData = {
  name: "Sideload StreamFlix onto an Android TV box using USB",
  description:
    "Copy the APK to a USB stick, open it with a file manager on the TV, and grant that file manager install permission.",
  path: R.androidTv,
  fragment: "howto-usb",
  totalTime: "PT8M",
  toolName: `${REBORN.name} v${REBORN.version}`,
  steps: [
    {
      name: "Install a file manager on the TV first",
      text: "Android TV ships without a usable file manager. Install one from the Play Store on the device before you need it, doing this after you have already plugged in the USB stick is more awkward than it sounds.",
    },
    {
      name: "Copy the APK to a USB stick",
      text: "Download the package on a computer or phone and copy it to a FAT32 or exFAT formatted USB stick. Put it in the root of the drive so it is easy to find with a remote.",
    },
    {
      name: "Plug in and open the file",
      text: "Insert the stick into the TV box, open your file manager, navigate to the USB drive, and select the APK. Devices without a USB port need the network method instead.",
    },
    {
      name: "Grant the file manager install permission",
      text: "Android prompts for install-from-unknown-sources permission for the file manager. Approve it, return to the install, and confirm.",
    },
    {
      name: "Verify and launch",
      text: "Check the package name reads com.streamflixreborn.streamflix under Settings, Apps. Then launch from the Apps row, or via a shortcut if Google TV hides it.",
    },
  ],
};

export default function AndroidTvPage() {
  return (
    <ClusterPage
      path={R.androidTv}
      title={TITLE}
      description={DESCRIPTION}
      about={["androidTv", "googleTv"]}
      mentions={[
        "sideloading",
        "apk",
        "chromecast",
        "fireTv",
        "android",
        "googlePlay",
        "playProtect",
        "streaming",
        "leanback",
        "downloader",
      ]}
      dateModified="2026-08-15"
      kicker="Android TV and Google TV"
      h1="StreamFlix for Android TV and Google TV"
      answer="Install StreamFlix Reborn by sideloading, via USB with a file manager, or over your network with a sideload helper. Reborn ships a genuine leanback interface for D-pad navigation; StreamFlix 2.0 has no TV layout, so it is the wrong choice on any television."
      toc={toc}
      faqs={androidTvFaqs}
      howTo={usbHowTo}
      downloadVariant={REBORN}
      takeaways={[
        "StreamFlix Reborn is the only variant with a real leanback interface. On a TV that difference is not cosmetic: it decides whether the app is usable.",
        "Install a file manager on the TV box before you need one. Android TV does not ship with a usable one.",
        "Google TV deliberately hides sideloaded apps from the main launcher. The app is installed; only the launcher entry is missing.",
        "An Nvidia Shield handles high-bitrate streams without stuttering where 1 GB budget boxes do not.",
        "If a 1.7 build stutters on old hardware, a 1.6 series build is genuinely lighter and often the better fix.",
        `There is no separate Android TV download. The same ${REBORN.sizeLabel} package, ${REBORN.packageName}, serves phones, boxes and televisions.`,
        "Downloader codes work the same way here as on Fire TV: they are third-party redirects, not something the StreamFlix project issues.",
        "Judge any alternative on three things: a real leanback layout, active updates, and whether it needs a virtual mouse app to reach its controls.",
      ]}
    >
      <QuickSummary
        bullets={[
          `Install StreamFlix Reborn v${REBORN.version}, ${REBORN.sizeLabel}, package ${REBORN.packageName}, minimum Android ${REBORN.minAndroid}.`,
          "One package covers phones, Android TV, Google TV and Fire TV. There is no separate Android TV download to look for.",
          "Three sideload routes: a USB stick with a file manager, a network sideload helper, or Downloader by URL.",
          "Google TV omits sideloaded apps from its Apps row. Open it through Settings, Apps, See all apps, or pin it with a shortcut utility.",
          "No official Downloader code exists for Android TV. Every circulating code is a redirect registered by a third-party site.",
          "StreamFlix 2.0 has no TV layout at all, so it is the wrong variant on any television regardless of how well the hardware performs.",
        ]}
      >
        <p>
          StreamFlix for Android TV means sideloading the StreamFlix Reborn APK
          onto an Android TV or Google TV device, because neither StreamFlix app
          is published on the Play Store for televisions.
        </p>
        <p>
          Android TV and Google TV are the same operating system with different
          launchers on top, so the install is identical on a Sony television, an
          Nvidia Shield, a Chromecast with Google TV and a generic box. The
          differences appear afterwards, in where each launcher files the
          finished app.
        </p>
      </QuickSummary>

      <h2 id="which">Which variant to install</h2>
      <VariantSupportStrip
        rebornSupported
        v2Supported={false}
        context="Android TV, Google TV and TV boxes"
      />
      <p>
        This is not a close call. Reborn was built with a television in mind:
        rows navigate cleanly with a D-pad, focus states are visible from across
        a room, and every control is reachable without a virtual cursor.
      </p>
      <p>
        StreamFlix 2.0 will install, because Android TV is Android. It will then
        present a phone layout on a 55-inch screen, with tap targets you cannot
        reach and text you cannot read at viewing distance. Use{" "}
        <InternalLink intent="reborn" currentPath={R.androidTv} /> here.
      </p>
      <Definition term="StreamFlix for Android TV">
        StreamFlix for Android TV is the StreamFlix Reborn package running on
        Android TV or Google TV hardware, installed by sideloading rather than
        from the Play Store. It ships a leanback interface: rows that navigate
        with a D-pad, focus states visible at viewing distance, and every
        control reachable without a virtual cursor. The same build also runs on
        Amazon Fire TV, which uses a fork of the same operating system.
      </Definition>

      <h2 id="download">Where the Android TV APK comes from</h2>
      <p>
        There is one file. StreamFlix Reborn publishes a single universal
        package that detects whether it is running on a television and shows the
        leanback interface accordingly, so a search for an Android TV specific
        download returns the same {REBORN.sizeLabel} file under a different
        heading.
      </p>
      <DataTable
        caption="Distribution points for the StreamFlix Reborn Android TV package"
        headers={["Source", "What it is", "Check before installing"]}
        rows={[
          [
            "GitHub releases",
            "The project's own release page, published beside the Apache 2.0 source",
            "Nothing. Every other copy is measured against this one",
          ],
          [
            "Uptodown",
            `An acknowledged mirror carrying ${REBORN.packageName}`,
            `Version string and size against v${REBORN.version} and ${REBORN.sizeLabel}`,
          ],
          [
            "General APK mirrors",
            "Aggregator sites that re-host the file behind their own download flow",
            "Whether the advertised version matches the build inside the file",
          ],
          [
            "Tutorial sites behind a Downloader code",
            "A redirect to that site's own copy or affiliate page",
            "The domain the code lands on, before anything downloads",
          ],
        ]}
      />
      <p>
        Google Play carries StreamFlix 2.0 but not Reborn, which is the source
        of a common mix-up: people install the Play listing on a television,
        find a phone layout, and conclude the TV app is poor. It is a different
        app by a different developer. Verify after installing that Settings,
        Apps shows <code>{REBORN.packageName}</code>. Play Protect will warn
        during the sideload, and that warning reflects the install method rather
        than anything detected in the file.
      </p>

      <h2 id="methods">Three ways to sideload</h2>
      <DataTable
        caption="Sideloading methods for Android TV compared"
        headers={["Method", "Needs", "Best when"]}
        rows={[
          [
            "USB stick",
            "A USB port and a file manager on the TV",
            "Most reliable. Use this if your box has a USB port",
          ],
          [
            "Network transfer",
            "A sideload helper app and a phone or PC on the same network",
            "Your device has no USB port, or you sideload regularly",
          ],
          [
            "Downloader by URL",
            "The Downloader app and a direct APK URL",
            "Same approach as Fire TV; works on many Android TV boxes too",
          ],
        ]}
      />
      <p>
        The Downloader route is identical to the Fire TV process and is written
        out in full on{" "}
        <InternalLink intent="firestickDownloader" currentPath={R.androidTv} />.
        The two Android-TV-specific methods are below.
      </p>

      <h2 id="codes">Downloader codes on Android TV</h2>
      <p>
        No Downloader code is issued for StreamFlix by the project. A code is a
        short number that a third party registers against an address of their
        choosing inside the Downloader app, so entering one hands the choice of
        destination to whoever registered it.
      </p>
      <p>
        Codes work identically on Android TV and on Fire TV, because Downloader
        is the same app on both. Numbers such as 730116 and 250931 circulate in
        tutorials and resolve to the sites that published them rather than to
        the StreamFlix repository. They stop working when a registration lapses,
        a site restructures, or a file moves, and none of that is visible from
        the number itself.
      </p>
      <p>
        Entering the full APK address instead costs more typing and removes the
        uncertainty: you can read the host and the file name before anything
        downloads. On a box with a USB port, the USB method below skips typing
        altogether. Fire TV users will find the same mechanism written out on{" "}
        <InternalLink intent="firestickDownloader" currentPath={R.androidTv} />.
      </p>

      <h2 id="usb">The USB method</h2>
      <StepCards
        items={usbHowTo.steps.map((step, index) => ({
          n: String(index + 1).padStart(2, "0"),
          title: step.name,
          body: step.text,
        }))}
      />

      <h2 id="network">The network method</h2>
      <p>
        Useful when the device has no USB port: a Chromecast with Google TV,
        for instance, or when you expect to sideload more than once.
      </p>
      <ol>
        <li>
          Install a sideload helper app on the TV from the Play Store. These
          run a small local receiver and display an address on screen.
        </li>
        <li>
          Open that address in a browser on a phone or computer connected to the
          same network.
        </li>
        <li>
          Upload the APK through that page. The helper receives it and offers to
          install.
        </li>
        <li>
          Grant the helper install-from-unknown-sources permission when
          prompted, then confirm the install.
        </li>
      </ol>
      <p>
        Both devices must be on the same network and the same subnet: guest
        Wi-Fi networks usually isolate clients from each other, which makes the
        address unreachable and is the most common reason this method appears
        broken.
      </p>

      <h2 id="hidden">When Google TV hides the app</h2>
      <p>
        You install successfully, return to the home screen, and the app is
        nowhere. This is expected behaviour on Google TV, not a failed install.
      </p>
      <p>
        The app itself is fully installed and functional. Only the launcher
        entry is missing, and a shortcut utility is a one-time fix.
      </p>
      <ul>
        <li>
          Google TV curates its Apps row and deliberately excludes sideloaded
          apps from it.
        </li>
        <li>Reach it via Settings, Apps, See all apps, then select it and choose Open.</li>
        <li>
          A launcher shortcut utility from the Play Store pins it to the home
          screen permanently.
        </li>
        <li>
          Some Android TV builds do show sideloaded apps in the Apps row.
          Behaviour differs by manufacturer and OS version.
        </li>
      </ul>

      <h2 id="navigation">D-pad navigation</h2>
      <FeatureCards
        items={[
          {
            title: "Rows and focus",
            body: "Left and right move within a row, up and down move between rows. Focus is drawn with a visible border rather than a subtle tint, which matters at viewing distance.",
          },
          {
            title: "The source picker",
            body: "The most useful control on a TV. Open it during playback to switch server without leaving the title: far quicker than backing out and re-entering.",
          },
          {
            title: "Subtitle styling",
            body: "Size, colour and background are adjustable, which is the difference between readable and unreadable subtitles from three metres away.",
          },
          {
            title: "No mouse toggle needed",
            body: "Every control is D-pad reachable. Needing a virtual-cursor app is the clearest sign an app was not built for TV, and Reborn does not.",
          },
        ]}
      />

      <h2 id="hardware">Hardware and performance</h2>
      <DataTable
        caption="StreamFlix Reborn performance by Android TV hardware class"
        headers={["Hardware", "Typical RAM", "Expect"]}
        rows={[
          [
            "Nvidia Shield TV / Pro",
            "3 GB",
            "Best in class. High-bitrate sources play without stuttering",
          ],
          [
            "Chromecast with Google TV (4K)",
            "2 GB",
            "Good at 1080p and most 4K sources; close background apps first",
          ],
          [
            "Mid-range Android TV box",
            "2 GB",
            "Reliable at 1080p; heavy sources occasionally stutter",
          ],
          [
            "Budget box",
            "1 GB",
            "Marginal. Use a 1.6 series build and lower playback quality",
          ],
          [
            "Built-in Android TV (Sony, TCL, Philips)",
            "1.5-2 GB",
            "Varies widely by model and by how much the manufacturer preloaded",
          ],
        ]}
      />
      <p>
        If you are buying hardware specifically to run this kind of app on a TV,
        the Shield is the safest choice. It has enough headroom that playback
        problems become network problems rather than device problems.
      </p>

      <h2 id="problems">Android TV specific problems</h2>
      <DataTable
        caption="Problems specific to Android TV and Google TV installs"
        headers={["Symptom", "Cause", "Fix"]}
        rows={[
          [
            "App installed but not on the home screen",
            "Google TV hides sideloaded apps",
            "Settings, Apps, See all apps, or install a shortcut utility",
          ],
          [
            "No file manager to open the APK with",
            "Android TV ships without one",
            "Install a file manager from the Play Store first",
          ],
          [
            "Network sideload page unreachable",
            "Devices on different subnets, or client isolation on guest Wi-Fi",
            "Put both devices on the same non-guest network",
          ],
          [
            "Stutters on a 1 GB box",
            "1.7 player exceeds available memory",
            "Install a 1.6 series build; lower playback quality",
          ],
          [
            "Remote cannot reach a control",
            "You installed StreamFlix 2.0 rather than Reborn",
            "Uninstall it and install Reborn, which has a real TV interface",
          ],
          [
            "Everything buffers regardless of source",
            "Wi-Fi rather than the app",
            "Use Ethernet, or move to 5 GHz",
          ],
        ]}
      />
      <DeviceMatrix caption="Full device support matrix for both StreamFlix apps" />

      <h2 id="alternatives">Apps like StreamFlix for Android TV</h2>
      <p>
        The useful test for an Android TV alternative is not catalogue size. It
        is whether the app was built for a television at all. Three checks
        separate a real TV app from a phone app that happens to install: a
        leanback layout, current updates, and controls a D-pad can reach without
        a virtual mouse utility.
      </p>
      <DataTable
        caption="Types of StreamFlix alternative on Android TV and what each one trades away"
        headers={["If you want", "Category to look at", "What you give up"]}
        rows={[
          [
            "The same model with published source",
            "Open-source aggregators on GitHub",
            "Very few exist. Most free aggregators are closed source",
          ],
          [
            "A Play Store install with no sideloading",
            "Licensed free ad-supported TV services",
            "Catalogue breadth, and you accept advertising breaks",
          ],
          [
            "Live channels rather than a film library",
            "Dedicated live TV and IPTV players",
            "Resume position handling and on-demand browsing",
          ],
          [
            "Your own media rather than third-party sources",
            "A home media server client",
            "You have to supply the files yourself",
          ],
          [
            "A phone-first app you already use",
            "Any Android app sideloaded to the box",
            "Usable navigation. Expect to add a mouse toggle utility",
          ],
        ]}
      />
      <p>
        Named comparisons, including which apps in this category have stopped
        updating, are on{" "}
        <InternalLink intent="alternatives" currentPath={R.androidTv} /> and{" "}
        <InternalLink intent="bestTvApks" currentPath={R.androidTv} />.
      </p>
      <p>
        For Fire TV specifically see{" "}
        <InternalLink intent="firestick" currentPath={R.androidTv} />, and for
        Samsung or LG sets, which cannot run an APK at all, see{" "}
        <InternalLink intent="smartTv" currentPath={R.androidTv} />.
      </p>
    </ClusterPage>
  );
}
