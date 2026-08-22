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
    "streamflix smart tv",
    "streamflix samsung tv",
    "streamflix lg tv",
    "streamflix chromecast",
    "movie tv apk",
    "movies and tv shows apk",
    "cast streamflix to tv",
  ],
});

const toc = [
  { href: "#depends", label: "It depends what your TV runs" },
  { href: "#tizen-webos", label: "Samsung and LG: the firm no" },
  { href: "#casting", label: "Casting from a phone" },
  { href: "#stick", label: "The streaming stick answer" },
  { href: "#android-tvs", label: "TVs that can install it directly" },
  { href: "#usb", label: "USB sideloading on Android-based sets" },
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
      mentions={["chromecast", "fireTv", "androidTv", "googleTv", "sideloading", "apk"]}
      dateModified="2026-08-13"
      kicker="Smart TV and casting"
      h1="StreamFlix on Smart TV: What Works and What Cannot"
      answer="It depends entirely on what your television runs. Samsung's Tizen and LG's webOS are not Android and cannot install an APK at all — casting or a streaming stick are your only routes. TVs running Android TV or Google TV can install StreamFlix Reborn directly."
      toc={toc}
      faqs={smartTvFaqs}
      howTo={castHowTo}
      downloadVariant={REBORN}
      takeaways={[
        "Samsung (Tizen) and LG (webOS) cannot run an APK under any circumstances. No tutorial changes this.",
        "TVs running Android TV or Google TV — Sony, TCL, Philips, Hisense and others — can install StreamFlix Reborn by sideloading.",
        "Casting works from an Android phone but ties up the phone for the whole session and depends on your Wi-Fi.",
        "A streaming stick is usually the right answer: cheap, gives you the proper TV interface, and frees the phone.",
        "Chromecast with Google TV installs apps; older cast-only Chromecast dongles do not run apps at all.",
      ]}
    >
      <h2 id="depends">It depends what your TV runs</h2>
      <p>
        &ldquo;Smart TV&rdquo; covers at least four unrelated operating systems,
        and the answer differs completely between them. Find yours first:
      </p>
      <DataTable
        caption="Whether each Smart TV platform can install StreamFlix directly"
        headers={["Your TV brand", "Operating system", "Can it install an APK?"]}
        rows={[
          ["Samsung", "Tizen", "No — not Android"],
          ["LG", "webOS", "No — not Android"],
          ["Sony", "Google TV / Android TV", "Yes, by sideloading"],
          ["TCL", "Google TV or Roku, depending on model", "Google TV models yes; Roku models no"],
          ["Hisense", "Google TV, VIDAA or Roku, by model", "Google TV models only"],
          ["Philips", "Android TV or Titan OS, by model", "Android TV models only"],
          ["Any TV + Fire TV Stick", "Fire OS on the stick", "Yes — the stick runs it, not the TV"],
          ["Any TV + Chromecast with Google TV", "Google TV on the dongle", "Yes — the dongle runs it"],
        ]}
      />
      <p>
        If your row says yes, follow{" "}
        <InternalLink intent="androidTv" currentPath={R.smartTv} />. If it says
        no, the rest of this page is for you.
      </p>

      <h2 id="tizen-webos">Samsung and LG: the firm no</h2>
      <Definition term="Tizen and webOS">
        Samsung&rsquo;s Tizen and LG&rsquo;s webOS are independent television
        operating systems with their own app formats and their own curated
        stores. Neither shares Android&rsquo;s runtime, package format, or app
        model. An APK is not a file these systems have any concept of.
      </Definition>
      <p>
        There is no developer mode, hidden menu, USB trick, or firmware setting
        that changes this. Tutorials claiming otherwise are describing a
        different device or are simply wrong. Both platforms do have developer
        modes, but they exist for installing Tizen and webOS apps that a
        developer built — not for running Android packages.
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

      <h2 id="stick">The streaming stick answer</h2>
      <QuickSummary
        bullets={[
          "A Fire TV Stick or Chromecast with Google TV plugs into any HDMI port and runs Android underneath.",
          "That gives you StreamFlix Reborn's real leanback interface rather than a mirrored phone screen.",
          "The phone is freed entirely — the stick streams directly and is driven by its own remote.",
          "It works on Samsung and LG sets exactly as it does on any other TV, because the TV is only acting as a display.",
        ]}
      >
        <p>
          For most people on a Tizen or webOS television this is the right
          answer rather than casting. It costs less than expected, it is a
          one-time setup, and the experience is substantially better than
          mirroring. Setup is on{" "}
          <InternalLink intent="firestick" currentPath={R.smartTv} />.
        </p>
      </QuickSummary>

      <h2 id="android-tvs">TVs that can install it directly</h2>
      <p>
        A significant share of televisions sold in the last few years run
        Android TV or Google TV as their built-in system — Sony across the
        range, plus many TCL, Hisense and Philips models. On those, no extra
        hardware is needed.
      </p>
      <p>
        Check under Settings → About: if it mentions Android TV or Google TV,
        you can sideload directly. Be careful with brands that ship different
        operating systems by model — a TCL running Roku cannot install an APK
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
          Verify the package name reads <code>{REBORN.packageName}</code> — see{" "}
          <InternalLink intent="installVerify" currentPath={R.smartTv} />.
        </li>
      </ol>

      <h2 id="quality">Quality expectations by method</h2>
      <DataTable
        caption="Video quality and convenience compared across Smart TV methods"
        headers={["Method", "Quality", "Phone tied up?", "Best for"]}
        rows={[
          [
            "Streaming stick",
            "Best — decoded on the device, no re-encode",
            "No",
            "Anyone using a TV regularly",
          ],
          [
            "Built-in Android TV",
            "Best — same as a stick, no extra hardware",
            "No",
            "Sony, and Google TV models from other brands",
          ],
          [
            "Screen mirroring",
            "Fair — re-encoded and sent over Wi-Fi",
            "Yes",
            "Occasional viewing on a Samsung or LG set",
          ],
          [
            "HDMI cable from phone",
            "Good — no wireless hop",
            "Yes",
            "Weak Wi-Fi, if your phone supports video out",
          ],
          [
            "Emulator on a laptop, HDMI to TV",
            "Fair — emulator overhead",
            "No",
            "You already have the laptop set up",
          ],
        ]}
      />
      <DeviceMatrix caption="Full device support matrix for both StreamFlix apps" />
      <p>
        For iPhone users specifically, casting is not available either — see{" "}
        <InternalLink intent="ios" currentPath={R.smartTv} /> for why, and what
        the realistic alternatives are.
      </p>
    </ClusterPage>
  );
}
