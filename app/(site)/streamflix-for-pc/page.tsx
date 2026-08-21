import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, Definition, QuickSummary } from "@/components/ContentBlocks";
import { StepCards } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { pcFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import type { HowToData } from "@/lib/schema";
import { REBORN } from "@/lib/variants";

const TITLE = "StreamFlix for PC: Windows and Mac via Emulator (2026)";
const DESCRIPTION =
  "There is no native StreamFlix desktop app. BlueStacks, LDPlayer and Windows Subsystem for Android compared, with honest performance expectations and setup steps.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.pc,
  keywords: [
    "streamflix for pc",
    "streamflix pc download",
    "streamflix windows",
    "streamflix mac",
    "netmirror for pc",
    "bluestacks streamflix",
  ],
});

const toc = [
  { href: "#no-native", label: "There is no native desktop build" },
  { href: "#emulators", label: "Emulators compared" },
  { href: "#bluestacks", label: "Installing with BlueStacks" },
  { href: "#wsa", label: "Windows Subsystem for Android" },
  { href: "#mac", label: "Running it on a Mac" },
  { href: "#performance", label: "Realistic performance" },
  { href: "#alternatives", label: "When an emulator is the wrong answer" },
];

const howTo: HowToData = {
  name: "Run StreamFlix on a Windows PC with BlueStacks",
  description:
    "Install BlueStacks, enable virtualisation, install the APK by drag and drop, and configure it for playback.",
  path: R.pc,
  fragment: "howto-pc",
  totalTime: "PT20M",
  toolName: `${REBORN.name} v${REBORN.version}`,
  steps: [
    {
      name: "Enable virtualisation in your BIOS",
      text: "Intel VT-x or AMD-V must be on or the emulator will crawl. Most machines ship with it enabled; if BlueStacks warns that virtualisation is off, this is a BIOS setting and worth fixing before anything else.",
    },
    {
      name: "Install BlueStacks from its official site",
      text: "Download from bluestacks.com only. Emulators are heavily impersonated by download sites, and an emulator runs with more system access than an ordinary app.",
    },
    {
      name: "Complete first-run setup",
      text: "BlueStacks asks for a Google account on first run. That is for Play Store access — you can skip it, since sideloading an APK needs no account.",
    },
    {
      name: "Install the APK",
      text: "Drag the APK file onto the BlueStacks window, or use its Install APK option. It installs exactly as it would on a phone, unknown-sources prompt included.",
    },
    {
      name: "Set the resolution and allocate resources",
      text: "In BlueStacks settings, give it at least 4 GB of RAM and two CPU cores, and set the display to 1920x1080. The defaults are conservative and cause most of the sluggishness people blame on the app.",
    },
  ],
};

export default function PcPage() {
  return (
    <ClusterPage
      path={R.pc}
      title={TITLE}
      description={DESCRIPTION}
      kicker="Desktop"
      h1="StreamFlix for PC: Windows and Mac"
      answer="Neither StreamFlix app has a native Windows or Mac build, so every route runs the same Android APK inside an emulator. BlueStacks is the most forgiving, LDPlayer is lighter on older hardware, and Windows Subsystem for Android is the cleanest but needs manual installation."
      toc={toc}
      faqs={pcFaqs}
      howTo={howTo}
      takeaways={[
        "No native desktop build exists for either app. Any site offering a 'StreamFlix.exe' is offering something else.",
        "An emulator runs the same APK you would install on a phone — there is no PC-specific version to find.",
        "Allocate at least 4 GB of RAM and two cores to the emulator. The defaults are the usual cause of poor performance.",
        "Download emulators from their own official sites only. An emulator has far more system access than an ordinary app.",
        "If you own an Android phone or a cheap streaming stick, that is a better experience than any emulator.",
      ]}
    >
      <h2 id="no-native">There is no native desktop build</h2>
      <p>
        Worth stating up front, because a large number of pages ranking for
        &ldquo;StreamFlix for PC&rdquo; imply otherwise. Neither{" "}
        <InternalLink intent="reborn" currentPath={R.pc} /> nor{" "}
        <InternalLink intent="v2" currentPath={R.pc} /> has a Windows
        executable, a macOS application, or a web player. Both are Android apps
        and nothing else.
      </p>
      <Definition term="Android emulator">
        Software that creates a virtual Android device on your desktop. The APK
        does not know it is not on a phone — it runs the same code, with the
        same interface, using your mouse and keyboard in place of touch.
      </Definition>
      <p>
        So &ldquo;StreamFlix for PC&rdquo; always means one thing: run the APK
        inside an emulator. That works, with real caveats worth knowing before
        you spend twenty minutes on setup.
      </p>

      <h2 id="emulators">Emulators compared</h2>
      <DataTable
        caption="Android emulators compared for running StreamFlix on a desktop"
        headers={["Emulator", "Platform", "Strength", "Weakness"]}
        rows={[
          [
            "BlueStacks",
            "Windows, macOS",
            "Easiest setup, best documented, drag-and-drop APK install",
            "Heaviest on RAM; bundles its own app-discovery surface",
          ],
          [
            "LDPlayer",
            "Windows only",
            "Lighter than BlueStacks; better on older machines",
            "No macOS build; interface is less polished",
          ],
          [
            "Windows Subsystem for Android",
            "Windows 11",
            "Cleanest technically — apps run as native windows",
            "Manual APK install via ADB; Microsoft is no longer expanding it",
          ],
          [
            "Android Studio emulator",
            "Windows, macOS, Linux",
            "Closest to a real device; excellent for verification",
            "A developer tool — heavy download and unfriendly setup",
          ],
        ]}
      />
      <p>
        For most people BlueStacks is the right first choice: it is the least
        likely to require troubleshooting, and troubleshooting an emulator is
        considerably less pleasant than troubleshooting an app.
      </p>

      <h2 id="bluestacks">Installing with BlueStacks</h2>
      <StepCards
        items={howTo.steps.map((step, index) => ({
          n: String(index + 1).padStart(2, "0"),
          title: step.name,
          body: step.text,
        }))}
      />
      <p>
        Once installed, the app behaves as it does on a phone, including the
        unknown-sources prompt and the provider settings you should review
        first. Everything on{" "}
        <InternalLink intent="howToUse" currentPath={R.pc} /> applies unchanged.
      </p>

      <h2 id="wsa">Windows Subsystem for Android</h2>
      <p>
        WSA is the technically cleanest option on Windows 11 — Android apps run
        in ordinary resizable windows with no emulator shell around them. It is
        also the most work, and Microsoft has stopped expanding it.
      </p>
      <ol>
        <li>
          Install Windows Subsystem for Android, which comes via the Amazon
          Appstore listing in the Microsoft Store.
        </li>
        <li>
          Open its settings and enable <strong>Developer mode</strong>, which
          exposes an ADB connection address.
        </li>
        <li>
          Install the Android platform tools on Windows, then connect with{" "}
          <code>adb connect</code> using the address WSA showed you.
        </li>
        <li>
          Install the package with <code>adb install streamflix.apk</code>. The
          app then appears in the Start menu like any other program.
        </li>
      </ol>
      <p>
        Choose WSA if you are comfortable with a command line and want the
        tidiest result. Choose BlueStacks if you want it working in ten minutes.
      </p>

      <h2 id="mac">Running it on a Mac</h2>
      <QuickSummary
        bullets={[
          "Apple silicon (M-series): BlueStacks Air runs Android acceptably. This is the best Mac option.",
          "Intel Mac: noticeably slower, and support is winding down across emulators.",
          "There is no macOS build of either StreamFlix app — an emulator is the only route.",
          "An iPhone or iPad in the same household cannot help here; iOS cannot run an APK at all.",
        ]}
      >
        <p>
          Apple silicon changed this meaningfully. Android emulation on an M-series
          Mac is genuinely usable, where on Intel it was a compromise. See{" "}
          <InternalLink intent="ios" currentPath={R.pc} /> for why the iPhone
          question has a different and firmer answer.
        </p>
      </QuickSummary>

      <h2 id="performance">Realistic performance</h2>
      <p>
        Setting expectations honestly, because emulator disappointment is
        usually a mismatch of expectations rather than a fault:
      </p>
      <DataTable
        caption="What to expect from StreamFlix running inside a desktop emulator"
        headers={["Aspect", "Reality"]}
        rows={[
          [
            "Startup time",
            "Slower than a phone. The emulator boots a whole Android system before the app opens",
          ],
          [
            "Navigation",
            "Slightly laggy compared with a phone, particularly when scrolling artwork-heavy rows",
          ],
          [
            "Playback",
            "Generally fine on a modern desktop CPU — this is the part that works well",
          ],
          [
            "Memory use",
            "3–6 GB. On an 8 GB machine this is the dominant cost",
          ],
          [
            "Battery on a laptop",
            "Heavy. Emulation prevents the CPU from idling",
          ],
          [
            "Fullscreen",
            "Works, though scaling artefacts are common at non-native resolutions",
          ],
        ]}
      />

      <h2 id="alternatives">When an emulator is the wrong answer</h2>
      <p>
        Worth saying plainly, since the honest recommendation is often not to
        bother:
      </p>
      <ul>
        <li>
          <strong>You own an Android phone.</strong> Install it there and cast
          to a screen. Better experience, no setup — see{" "}
          <InternalLink intent="smartTv" currentPath={R.pc} />.
        </li>
        <li>
          <strong>You want it on a television.</strong> A cheap streaming stick
          gives you Reborn&rsquo;s proper TV interface for less effort than an
          emulator and less money than most people expect. See{" "}
          <InternalLink intent="firestick" currentPath={R.pc} />.
        </li>
        <li>
          <strong>Your machine has 8 GB of RAM or less.</strong> The emulator
          will take most of it, and everything else on the machine will suffer.
        </li>
        <li>
          <strong>You only want to watch one thing.</strong> Twenty minutes of
          emulator setup for one film is a poor trade.
        </li>
      </ul>
      <p>
        If none of those apply and you genuinely want it on a desktop, BlueStacks
        with 4 GB allocated is a reasonable setup that will work.
      </p>
    </ClusterPage>
  );
}
