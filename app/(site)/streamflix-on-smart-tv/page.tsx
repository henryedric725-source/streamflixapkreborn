import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, Definition, QuickSummary } from "@/components/ContentBlocks";
import { DeviceMatrix } from "@/components/DeviceMatrix";
import { StepCards } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { smartTvFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import type { HowToData } from "@/lib/schema";
import { REBORN } from "@/lib/variants";

const TITLE = "StreamFlix on Smart TV: What Works";
const DESCRIPTION =
  "Samsung Tizen and LG webOS cannot run an APK. How to cast StreamFlix from a phone, when a streaming stick wins, and which TVs can install it directly.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.smartTv,
  dateModified: "2026-08-13",
  keywords: [
    "streamflix tv",
    "streamflix on smart tv",
    "streamflix samsung",
    "streamflix lg",
    "streamflix chromecast",
    "streamflix tv apk",
    "streamflix live",
    "streamflix smart tv",
    "streamflix tizen webos",
    "cast streamflix to tv",
  ],
});

const toc = [
  { href: "#quick-summary", label: "Quick summary" },
  { href: "#depends", label: "It depends what your TV runs" },
  { href: "#tv-apk", label: "Is there a StreamFlix TV APK?" },
  { href: "#tizen-webos", label: "Samsung and LG: the firm no" },
  { href: "#casting", label: "Casting from a phone" },
  { href: "#chromecast", label: "Chromecast: two different devices" },
  { href: "#stick", label: "The streaming stick answer" },
  { href: "#android-tvs", label: "TVs that can install it directly" },
  { href: "#usb", label: "USB sideloading on Android-based sets" },
  { href: "#live", label: "StreamFlix live channels on a TV" },
  { href: "#quality", label: "Quality expectations by method" },
];

const castHowTo: HowToData = {
  name: "Cast StreamFlix from an Android phone to a TV",
  description:
    "Start playback on the phone, then mirror or cast the screen to a TV on the same network.",
  path: R.smartTv,
  fragment: "howto-cast",
  totalTime: "PT3M",
  toolName: `${REBORN.name} v${REBORN.version}`,
  steps: [
    {
      name: "Put both devices on the same network",
      text: "The phone and the TV must be on the same Wi-Fi network and not isolated from each other. Guest networks usually block client-to-client traffic, which is the most common reason casting fails to find the TV.",
    },
    {
      name: "Start playback on the phone first",
      text: "Open the title and begin playing before you cast. Casting an idle app sometimes mirrors a black screen because the player has not initialised.",
    },
    {
      name: "Open the cast or screen-mirror control",
      text: "Pull down the Android quick settings and choose Cast, Smart View on Samsung phones, or Screen Mirroring. Pick your TV from the list.",
    },
    {
      name: "Set the phone down and leave it",
      text: "Screen mirroring sends whatever is on the phone, so notifications appear on the TV and locking the phone ends the session. Enable do-not-disturb and set the screen timeout long.",
    },
  ],
};

export default function SmartTvPage() {
  return (
    <ClusterPage
      path={R.smartTv}
      title={TITLE}
      description={DESCRIPTION}
      about={["tizen", "webos"]}
      mentions={[
        "chromecast",
        "fireTv",
        "androidTv",
        "googleTv",
        "sideloading",
        "apk",
        "android",
        "streaming",
        "ios",
      ]}
      dateModified="2026-08-13"
      kicker="Smart TV and casting"
      h1="StreamFlix on Smart TV: What Works and What Cannot"
      answer="It depends entirely on what your television runs. Samsung's Tizen and LG's webOS are not Android and cannot install an APK at all, casting or a streaming stick are your only routes. TVs running Android TV or Google TV can install StreamFlix Reborn directly."
      toc={toc}
      faqs={smartTvFaqs}
      howTo={castHowTo}
      downloadVariant={REBORN}
      takeaways={[
        "Samsung (Tizen) and LG (webOS) cannot run an APK under any circumstances. No tutorial changes this.",
        "TVs running Android TV or Google TV, Sony, TCL, Philips, Hisense and others, can install StreamFlix Reborn by sideloading.",
        "Casting works from an Android phone but ties up the phone for the whole session and depends on your Wi-Fi.",
        "A streaming stick is usually the right answer: cheap, gives you the proper TV interface, and frees the phone.",
        "Chromecast with Google TV installs apps; older cast-only Chromecast dongles do not run apps at all.",
        `There is no separate TV APK. The same ${REBORN.sizeLabel} package, ${REBORN.packageName}, serves phones, sticks and Android televisions.`,
        "Live channels come from the same third-party providers as films, so they need the app running on an Android device rather than on the television itself.",
        "Check Settings, About on your set before buying anything. Brands ship different operating systems by model, and the badge on the bezel does not tell you which.",
      ]}
    >
      <QuickSummary
        bullets={[
          "Samsung (Tizen) and LG (webOS) cannot install an APK. No developer mode, USB method or firmware setting changes this.",
          "Sony, plus Google TV models from TCL, Hisense and Philips, install StreamFlix Reborn directly by sideloading.",
          `One package covers every supported device: v${REBORN.version}, ${REBORN.sizeLabel}, ${REBORN.packageName}.`,
          "On a Samsung or LG set, the two working routes are mirroring from an Android phone or plugging in a streaming stick.",
          "A Fire TV Stick or a Chromecast with Google TV turns any HDMI port into an Android device with a proper leanback interface.",
          "Older cast-only Chromecast dongles run no apps and can only receive a mirrored screen from a phone.",
        ]}
      >
        <p>
          Whether StreamFlix runs on a smart TV depends entirely on the
          television&rsquo;s operating system. Android TV and Google TV sets
          install it; Samsung Tizen and LG webOS sets cannot.
        </p>
        <p>
          The fastest way to settle it is Settings, About on your own set.
          Brands ship different systems across their range, so two televisions
          with the same logo can give opposite answers.
        </p>
      </QuickSummary>

      <h2 id="depends">It depends what your TV runs</h2>
      <p>
        &ldquo;Smart TV&rdquo; covers at least four unrelated operating systems,
        and the answer differs completely between them. Find yours first:
      </p>
      <DataTable
        caption="Whether each Smart TV platform can install StreamFlix directly"
        headers={["Your TV brand", "Operating system", "Can it install an APK?"]}
        rows={[
          ["Samsung", "Tizen", "No, not Android"],
          ["LG", "webOS", "No, not Android"],
          ["Sony", "Google TV / Android TV", "Yes, by sideloading"],
          ["TCL", "Google TV or Roku, depending on model", "Google TV models yes; Roku models no"],
          ["Hisense", "Google TV, VIDAA or Roku, by model", "Google TV models only"],
          ["Philips", "Android TV or Titan OS, by model", "Android TV models only"],
          ["Any TV + Fire TV Stick", "Fire OS on the stick", "Yes. The stick runs it, not the TV"],
          ["Any TV + Chromecast with Google TV", "Google TV on the dongle", "Yes. The dongle runs it"],
        ]}
      />
      <p>
        If your row says yes, follow{" "}
        <InternalLink intent="androidTv" currentPath={R.smartTv} />. If it says
        no, the rest of this page is for you.
      </p>

      <h2 id="tv-apk">Is there a StreamFlix TV APK?</h2>
      <Definition term="StreamFlix on Smart TV">
        StreamFlix on a smart TV means the single StreamFlix Reborn Android
        package running on a television or dongle whose operating system is
        built on Android: Android TV, Google TV, or Amazon Fire OS. There is no
        separate television edition of the file and no Tizen or webOS version.
        Samsung and LG run independent systems with their own app formats and
        curated stores, sharing no runtime or package format with Android, so an
        APK is not a file those televisions have any concept of.
      </Definition>
      <p>
        People search for a StreamFlix TV APK expecting a distinct download, and
        there is not one. The build that installs on a phone is the same build
        that installs on a Sony television, and it detects the leanback context
        itself. What differs between a phone and a television is the interface
        the app then presents, not the file you fetched.
      </p>
      <DataTable
        caption="What a StreamFlix TV APK means on each kind of television"
        headers={["Device", "Is there a file to install?", "Result"]}
        rows={[
          [
            "Android TV or Google TV set",
            `Yes, the standard ${REBORN.sizeLabel} package`,
            "Full leanback interface, driven by the TV remote",
          ],
          [
            "Fire TV Stick or Fire TV Cube",
            "Yes, the same package via Downloader",
            "Identical leanback interface on Fire OS",
          ],
          [
            "Samsung Tizen set",
            "No. Tizen cannot open an APK",
            "Mirror from an Android phone, or add a streaming stick",
          ],
          [
            "LG webOS set",
            "No. webOS cannot open an APK",
            "Mirror from an Android phone, or add a streaming stick",
          ],
          [
            "Roku television or stick",
            "No. Roku OS is closed to sideloading",
            "Mirror from an Android phone, or add a streaming stick",
          ],
          [
            "Cast-only Chromecast dongle",
            "No. It runs no apps at all",
            "Receives a mirrored phone screen only",
          ],
        ]}
      />

      <h2 id="tizen-webos">Samsung and LG: the firm no</h2>
      <p>
        There is no developer mode, hidden menu, USB trick, or firmware setting
        that changes this. Tutorials claiming otherwise are describing a
        different device or are simply wrong. Both platforms do have developer
        modes, but they exist for installing Tizen and webOS apps that a
        developer built, not for running Android packages.
      </p>
      <p>
        Your two real options on these sets are casting from a phone, or adding
        a device that does run Android. Both are covered below.
      </p>

      <h2 id="casting">Casting from a phone</h2>
      <StepCards
        items={castHowTo.steps.map((step, index) => ({
          n: String(index + 1).padStart(2, "0"),
          title: step.name,
          body: step.text,
        }))}
      />
      <p>Casting works, with limitations worth knowing before you rely on it:</p>
      <ul>
        <li>
          <strong>The phone is occupied.</strong> Screen mirroring sends
          everything on the display, so you cannot use the phone for anything
          else, and locking it ends the session.
        </li>
        <li>
          <strong>Notifications appear on the TV.</strong> Turn on do-not-disturb
          first unless you want your messages on the big screen.
        </li>
        <li>
          <strong>Quality depends on Wi-Fi twice over.</strong> The stream
          reaches the phone over Wi-Fi and then leaves it over Wi-Fi again,
          which doubles the exposure to a weak network.
        </li>
        <li>
          <strong>Battery drains quickly.</strong> Keep the phone on a charger
          for anything feature-length.
        </li>
        <li>
          <strong>Guest networks break it.</strong> Client isolation stops the
          phone from seeing the TV. This is the most common cause of &ldquo;my
          TV does not appear&rdquo;.
        </li>
      </ul>

      <h2 id="chromecast">Chromecast: two different devices</h2>
      <p>
        Chromecast is the single biggest source of confusion here, because two
        very different products carry the name. One installs and runs StreamFlix
        itself. The other cannot run any app at all.
      </p>
      <DataTable
        caption="Chromecast models compared for running or receiving StreamFlix"
        headers={["Model", "Runs apps?", "How StreamFlix reaches the screen"]}
        rows={[
          [
            "Chromecast with Google TV (HD and 4K)",
            "Yes, full Google TV",
            "Sideload the APK to the dongle and drive it with the bundled remote",
          ],
          [
            "Google TV Streamer",
            "Yes, full Google TV",
            "Same sideload route, with more storage than the older dongle",
          ],
          [
            "Chromecast 3rd generation and earlier",
            "No",
            "Receives a mirrored Android phone screen only. The phone stays occupied",
          ],
          [
            "Chromecast Ultra",
            "No",
            "Receives a mirrored Android phone screen only",
          ],
          [
            "Chromecast built into a television",
            "No",
            "The receiving half only. What the set can install depends on its own system",
          ],
        ]}
      />
      <p>
        If you already own a cast-only dongle, mirroring works and costs
        nothing. If you are buying, the Google TV models are the better choice
        by a wide margin, and a Fire TV Stick does the same job. Either way you
        end up on{" "}
        <InternalLink intent="androidTv" currentPath={R.smartTv} /> or{" "}
        <InternalLink intent="firestick" currentPath={R.smartTv} /> for the
        install.
      </p>

      <h2 id="stick">The streaming stick answer</h2>
      <p>
        For most people on a Tizen or webOS television this is the right answer
        rather than casting. It costs less than expected, it is a one-time
        setup, and the experience is substantially better than mirroring. Setup
        is on <InternalLink intent="firestick" currentPath={R.smartTv} />.
      </p>
      <ul>
        <li>
          A Fire TV Stick or a Chromecast with Google TV plugs into any HDMI
          port and runs Android underneath.
        </li>
        <li>
          That gives you StreamFlix Reborn&rsquo;s real leanback interface
          rather than a mirrored phone screen.
        </li>
        <li>
          The phone is freed entirely, because the stick streams directly and is
          driven by its own remote.
        </li>
        <li>
          It works on Samsung and LG sets exactly as on any other television,
          since the set is only acting as a display.
        </li>
      </ul>

      <h2 id="android-tvs">TVs that can install it directly</h2>
      <p>
        A significant share of televisions sold in the last few years run
        Android TV or Google TV as their built-in system: Sony across the
        range, plus many TCL, Hisense and Philips models. On those, no extra
        hardware is needed.
      </p>
      <p>
        Check under Settings → About: if it mentions Android TV or Google TV,
        you can sideload directly. Be careful with brands that ship different
        operating systems by model: a TCL running Roku cannot install an APK
        while a TCL running Google TV can, despite the same badge on the bezel.
      </p>
      <p>
        Full instructions, including finding an app that Google TV hides from
        its launcher, are on{" "}
        <InternalLink intent="androidTv" currentPath={R.smartTv} />.
      </p>

      <h2 id="usb">USB sideloading on Android-based sets</h2>
      <p>
        On a built-in Android TV, USB is usually the most reliable route because
        the TV has no browser to download with:
      </p>
      <ol>
        <li>
          Install a file manager from the Play Store <em>on the TV</em>, before
          you need it. Android TV does not ship with a usable one.
        </li>
        <li>
          Copy the APK to a FAT32 or exFAT USB stick from a computer, placing it
          in the root of the drive so it is easy to find with a remote.
        </li>
        <li>
          Plug the stick into the TV, open the file manager, navigate to the
          drive and select the APK.
        </li>
        <li>
          Approve the install-from-unknown-sources prompt for the file manager,
          then confirm the install.
        </li>
        <li>
          Verify the package name reads <code>{REBORN.packageName}</code>. See{" "}
          <InternalLink intent="installVerify" currentPath={R.smartTv} />.
        </li>
      </ol>

      <h2 id="live">StreamFlix live channels on a TV</h2>
      <p>
        StreamFlix Reborn carries live channels alongside its on-demand
        catalogue, and they come from the same third-party providers. That means
        live viewing needs the app running on an Android device attached to the
        television, exactly as films do. There is no separate live service and
        no channel list that belongs to the app.
      </p>
      <p>
        Live sources behave differently from film sources in two ways worth
        planning around. They are fewer, because a provider carrying hundreds of
        films may carry a dozen channels. And they are shorter-lived, since a
        live source that works during one event is often gone by the next.
        Switching provider is a routine part of using them rather than a sign
        that something is broken.
      </p>
      <ul>
        <li>
          <strong>Use a wired connection where you can.</strong> Live streams
          have no buffer to fall back on, so a weak Wi-Fi signal shows up
          immediately.
        </li>
        <li>
          <strong>Expect to switch source mid-event.</strong> Open the source
          picker during playback rather than backing out of the channel.
        </li>
        <li>
          <strong>Mirroring is the worst method for live.</strong> The stream
          crosses your Wi-Fi twice, which adds delay and drops.
        </li>
        <li>
          <strong>Lower the quality before raising it.</strong> A stable 720p
          live feed beats a 1080p one that stalls every minute.
        </li>
      </ul>
      <p>
        Playback problems that persist across several providers are diagnosed on{" "}
        <InternalLink intent="notWorking" currentPath={R.smartTv} />, and the
        source picker itself is covered on{" "}
        <InternalLink intent="switchServers" currentPath={R.smartTv} />.
      </p>

      <h2 id="quality">Quality expectations by method</h2>
      <DataTable
        caption="Video quality and convenience compared across Smart TV methods"
        headers={["Method", "Quality", "Phone tied up?", "Best for"]}
        rows={[
          [
            "Streaming stick",
            "Best: decoded on the device, no re-encode",
            "No",
            "Anyone using a TV regularly",
          ],
          [
            "Built-in Android TV",
            "Best: same as a stick, no extra hardware",
            "No",
            "Sony, and Google TV models from other brands",
          ],
          [
            "Screen mirroring",
            "Fair: re-encoded and sent over Wi-Fi",
            "Yes",
            "Occasional viewing on a Samsung or LG set",
          ],
          [
            "HDMI cable from phone",
            "Good, no wireless hop",
            "Yes",
            "Weak Wi-Fi, if your phone supports video out",
          ],
          [
            "Emulator on a laptop, HDMI to TV",
            "Fair: emulator overhead",
            "No",
            "You already have the laptop set up",
          ],
        ]}
      />
      <DeviceMatrix caption="Full device support matrix for both StreamFlix apps" />
      <p>
        For iPhone users specifically, casting is not available either. See{" "}
        <InternalLink intent="ios" currentPath={R.smartTv} /> for why, and what
        the realistic alternatives are.
      </p>
    </ClusterPage>
  );
}
