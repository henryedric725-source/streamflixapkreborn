import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, Definition, QuickSummary } from "@/components/ContentBlocks";
import { InternalLink } from "@/components/InternalLink";
import { privacyFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import { REBORN, V2 } from "@/lib/variants";

const TITLE = "StreamFlix Permissions and Privacy";
const DESCRIPTION =
  "Every permission each StreamFlix app requests and why, what the no-account model means for your data, what ad-supported playback exposes, and who can see what.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.privacy,
  dateModified: "2026-08-03",
  keywords: [
    "streamflix permissions",
    "streamflix privacy",
    "streamflix data collection",
    "streaming apk privacy",
    "does streamflix track you",
  ],
});

const toc = [
  { href: "#no-account", label: "The no-account model" },
  { href: "#permissions", label: "Permissions, line by line" },
  { href: "#who-sees", label: "Who can see what" },
  { href: "#ads", label: "What ad-supported playback exposes" },
  { href: "#local-data", label: "What is stored on your device" },
  { href: "#compare", label: "Compared with a licensed service" },
  { href: "#reduce", label: "Reducing your exposure" },
];

export default function PrivacyGuidePage() {
  return (
    <ClusterPage
      path={R.privacy}
      title={TITLE}
      description={DESCRIPTION}
      about={["privacy", "advertising"]}
      mentions={["android", "vpn", "googlePlay", "streaming"]}
      dateModified="2026-08-03"
      kicker="Permissions and privacy"
      h1="StreamFlix Permissions and Privacy Explained"
      answer="Neither app requires an account, so there is no profile linking your viewing to an identity — a genuine privacy advantage over licensed services. StreamFlix 2.0 is ad-supported and its advertising libraries still collect device identifiers in the ordinary way; StreamFlix Reborn carries none."
      toc={toc}
      faqs={privacyFaqs}
      showDownload={false}
      takeaways={[
        "No account means no profile. Neither app asks for an email, password, or payment method, so there is nothing linking viewing to an identity.",
        "StreamFlix Reborn carries no advertising or analytics libraries in its own interface. StreamFlix 2.0 is ad-supported and does.",
        "Requested permissions are network, scoped storage, and a wake lock. Anything beyond that means you have a repackaged build.",
        "Your ISP can still see which servers you connect to. That is the visibility a VPN addresses, not the app.",
        "Everything is stored locally, which is private but fragile — an uninstall deletes all of it with no backup.",
      ]}
    >
      <h2 id="no-account">The no-account model</h2>
      <p>
        The most significant privacy property of both apps, and one that gets
        surprisingly little attention: there is no sign-up. No email address, no
        password, no phone number, no payment method.
      </p>
      <Definition term="What an account enables">
        On a licensed service, an account links every title you watch, every
        search, every pause and resume, and your payment details to one
        persistent identity. That record follows you across devices, persists
        after you stop using the service, and is disclosable.
      </Definition>
      <p>
        Neither StreamFlix app has that record, because it has nowhere to keep
        one. Favourites, watch history and resume positions live in the
        app&rsquo;s local storage and are never uploaded. There is no server-side
        profile because there is no server-side account.
      </p>
      <p>
        The cost is the flip side of the same fact: nothing syncs between
        devices, and nothing survives an uninstall. See{" "}
        <InternalLink intent="update" currentPath={R.privacy} /> for why that
        makes overlay installs important.
      </p>

      <h2 id="permissions">Permissions, line by line</h2>
      <DataTable
        caption="Permissions requested by each StreamFlix app and what each is for"
        headers={["Permission", REBORN.shortName, V2.shortName, "Why"]}
        rows={[
          [
            "Internet",
            "Yes",
            "Yes",
            "Fetching catalog data and streams. The app is inert without it",
          ],
          [
            "Network state",
            "Yes",
            "Yes",
            "Detecting connectivity changes to pause or resume playback",
          ],
          [
            "Storage (scoped)",
            "Yes",
            "Yes",
            "Playback cache and offline downloads, inside the app's own directory only",
          ],
          [
            "Wake lock",
            "Yes",
            "Yes",
            "Preventing the screen sleeping during playback",
          ],
          [
            "Foreground service",
            "Yes",
            "Yes",
            "Keeping a download running while the app is open",
          ],
          [
            "Install packages",
            "Yes",
            "No",
            "Reborn's in-app updater. Needed because it is not on a store",
          ],
          [
            "Advertising ID",
            "No",
            "Yes",
            "Ad targeting. This is the main privacy difference between the two",
          ],
          [
            "Contacts / SMS / location",
            "No",
            "No",
            "Neither app requests these. If yours does, it is repackaged",
          ],
        ]}
      />
      <p>
        Check for yourself under Settings → Apps → StreamFlix → Permissions. The
        bottom row is the one that matters: no legitimate build of either app
        asks for contacts, SMS, call logs, or location, and their presence is
        decisive rather than suggestive. See{" "}
        <InternalLink intent="safe" currentPath={R.privacy} />.
      </p>

      <h2 id="who-sees">Who can see what</h2>
      <p>
        The useful mental model. Different parties see different things, and
        conflating them is why privacy discussion in this area gets muddled.
      </p>
      <DataTable
        caption="What each party in the chain can observe"
        headers={["Party", "What they see", "What they cannot see"]}
        rows={[
          [
            "The app developer",
            "Nothing for Reborn — there is no telemetry endpoint",
            "Your identity, your viewing, anything at all",
          ],
          [
            "The third-party provider",
            "Your IP address and which titles you requested from them",
            "Who you are — there is no account to attach it to",
          ],
          [
            "Your ISP",
            "Which servers you connect to and how much data flows",
            "The video content itself, where the connection is encrypted",
          ],
          [
            "Ad networks (StreamFlix 2.0 only)",
            "Advertising ID, device model, coarse location, app usage",
            "Your name, unless linked elsewhere in the ad ecosystem",
          ],
          [
            "A VPN provider, if you use one",
            "What your ISP otherwise would",
            "Depends entirely on their logging policy",
          ],
          [
            "This site",
            "Nothing about your viewing. We document the apps, we do not run them",
            "Anything you do inside the app",
          ],
        ]}
      />
      <p>
        The provider row deserves attention. You are not anonymous to the
        service actually serving the video — it sees your IP and your requests.
        It just cannot connect them to a person, because no identity was ever
        supplied. A VPN changes the IP part; see{" "}
        <InternalLink intent="vpn" currentPath={R.privacy} />.
      </p>

      <h2 id="ads">What ad-supported playback exposes</h2>
      <p>
        The clearest privacy divergence between the two apps, and the practical
        cost of StreamFlix 2.0&rsquo;s Play Store convenience.
      </p>
      <QuickSummary
        bullets={[
          "StreamFlix Reborn carries no advertising or analytics libraries in its own interface. There is no ad SDK to collect anything.",
          "StreamFlix 2.0 is ad-supported, so it embeds an ad SDK that collects your advertising ID, device model, and coarse location in the ordinary way.",
          "That is standard for free Android apps rather than unusual — but it is a real difference between the two.",
          "You can reset your advertising ID, or opt out of personalisation, in Android's privacy settings.",
          "Ads shown by a third-party provider during playback are separate again, and neither app controls them.",
        ]}
      >
        <p>
          If minimising data collection is the priority, Reborn is the clearly
          better choice, and this is one of the more concrete reasons why. See{" "}
          <InternalLink intent="reborn" currentPath={R.privacy} />.
        </p>
      </QuickSummary>
      <p>
        Worth noting the size connection: much of the difference between{" "}
        {REBORN.sizeLabel} and {V2.sizeLabel} is exactly these bundled
        advertising and analytics libraries. The larger download is partly the
        data collection.
      </p>

      <h2 id="local-data">What is stored on your device</h2>
      <ul>
        <li>
          <strong>Favourites and watchlist</strong> — a local database. Never
          uploaded.
        </li>
        <li>
          <strong>Watch history and resume positions</strong> — local, per
          title.
        </li>
        <li>
          <strong>Settings</strong> — provider choice, quality, subtitle
          preferences.
        </li>
        <li>
          <strong>Playback cache</strong> — temporary fragments. Safe to clear
          at any time.
        </li>
        <li>
          <strong>Downloads</strong> — in app-private storage, invisible to
          other apps and to file managers.
        </li>
      </ul>
      <p>
        Clearing cache removes only the temporary fragments. Clearing{" "}
        <em>data</em> removes everything above including downloads, which is
        worth remembering before using it as a troubleshooting step on{" "}
        <InternalLink intent="notWorking" currentPath={R.privacy} />.
      </p>

      <h2 id="compare">Compared with a licensed service</h2>
      <DataTable
        caption="Privacy properties compared: StreamFlix apps versus a licensed streaming service"
        headers={["", REBORN.shortName, V2.shortName, "Licensed service"]}
        rows={[
          ["Account required", "No", "No", "Yes"],
          ["Payment details held", "No", "No", "Yes"],
          ["Viewing history on a server", "No", "No", "Yes"],
          ["Cross-device profile", "No", "No", "Yes"],
          ["Ad tracking", "No", "Yes", "Varies by tier"],
          ["Data disclosable on request", "Nothing to disclose", "Ad data only", "Full viewing history"],
          ["Your data if the service closes", "Nothing existed", "Nothing beyond ad data", "Held until deleted"],
        ]}
      />
      <p>
        Read fairly, the no-account model is a genuine privacy advantage, and it
        is one of the few dimensions on which a free aggregator clearly beats a
        paid service. Every other dimension of that comparison is on{" "}
        <InternalLink intent="vsPaid" currentPath={R.privacy} />.
      </p>

      <h2 id="reduce">Reducing your exposure</h2>
      <ol>
        <li>
          <strong>Prefer Reborn if privacy is the priority.</strong> No ad SDK,
          no analytics, and auditable source code.
        </li>
        <li>
          <strong>Reset your advertising ID</strong> periodically in
          Android&rsquo;s privacy settings, and opt out of personalisation.
        </li>
        <li>
          <strong>Use a VPN if ISP visibility concerns you</strong> — accepting
          that you are moving trust to the VPN provider rather than removing it.
        </li>
        <li>
          <strong>Change your DNS</strong> to a resolver that does not log. Free,
          and it stops your ISP seeing every domain you look up.
        </li>
        <li>
          <strong>Clear cache periodically.</strong> Non-destructive, and it
          keeps the app&rsquo;s local footprint small.
        </li>
        <li>
          <strong>Only install from official sources.</strong> A repackaged
          build can add exactly the tracking this page says is absent — see{" "}
          <InternalLink intent="installVerify" currentPath={R.privacy} />.
        </li>
      </ol>
      <p>
        Our own handling of your data on this website — as distinct from the apps
        — is set out in the privacy policy linked in the footer.
      </p>
    </ClusterPage>
  );
}
