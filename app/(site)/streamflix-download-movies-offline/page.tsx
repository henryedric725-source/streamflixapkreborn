import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, QuickSummary, SpecTable } from "@/components/ContentBlocks";
import { StepCards } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { VariantSupportStrip } from "@/components/VariantCompare";
import { offlineFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import type { HowToData } from "@/lib/schema";
import { REBORN, V2 } from "@/lib/variants";

const TITLE = "Download Movies Offline in StreamFlix: How It Actually Works";
const DESCRIPTION =
  "Offline downloads in StreamFlix explained: built into StreamFlix 2.0, provider-dependent in Reborn. Where files are stored, why some titles refuse, and how much space to budget.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.offline,
  keywords: [
    "streamflix download movies",
    "streamflix offline",
    "movie download apk free",
    "apk to watch free movies offline",
    "download movies apk android",
  ],
});

const toc = [
  { href: "#which", label: "Which app downloads reliably" },
  { href: "#how", label: "How to download a title" },
  { href: "#where", label: "Where the files go" },
  { href: "#refuse", label: "Why some titles refuse" },
  { href: "#storage", label: "How much space to budget" },
  { href: "#manage", label: "Managing your downloads" },
  { href: "#limits", label: "Limits worth knowing" },
];

const howTo: HowToData = {
  name: "Download a film for offline viewing in StreamFlix",
  description:
    "Open the title, choose Download, pick a quality, and wait for the transfer to complete before disconnecting.",
  path: R.offline,
  fragment: "howto-offline",
  totalTime: "PT10M",
  toolName: `${V2.name} build ${V2.version}`,
  steps: [
    {
      name: "Open the title's detail page",
      text: "Find the film or episode and open its detail view. The Download control sits alongside Play — in StreamFlix 2.0 it is always present, in Reborn it appears only when the serving provider supports it.",
    },
    {
      name: "Choose a quality before starting",
      text: "Pick the lowest quality you will actually tolerate. The difference between 1080p and 720p is roughly half the storage, and on a phone screen the visible difference is small.",
    },
    {
      name: "Stay connected until it finishes",
      text: "Leave the app open on Wi-Fi until the transfer completes. Interrupted downloads usually leave a broken entry rather than a resumable one, and that entry then has to be deleted manually.",
    },
    {
      name: "Verify it plays offline",
      text: "Turn off Wi-Fi and mobile data, then play the downloaded title. Confirming this before you actually need it is the difference between a working download and discovering on a flight that it was never complete.",
    },
  ],
};

export default function OfflinePage() {
  return (
    <ClusterPage
      path={R.offline}
      title={TITLE}
      description={DESCRIPTION}
      kicker="Offline viewing"
      h1="Downloading Movies for Offline Viewing in StreamFlix"
      answer="StreamFlix 2.0 has offline downloading built in and it works on any title in its catalog. In StreamFlix Reborn it depends entirely on whether the provider serving a title supports downloading, so treat it there as a bonus rather than a feature you can rely on."
      toc={toc}
      faqs={offlineFaqs}
      howTo={howTo}
      downloadVariant={V2}
      takeaways={[
        "StreamFlix 2.0 downloads reliably. StreamFlix Reborn downloads only when the serving provider allows it.",
        "Files are saved into the app's own storage, so they never appear in your gallery or a file manager.",
        "Uninstalling the app deletes every download with it. There is no account and no backup.",
        "Budget 700 MB to 1.5 GB per feature at 1080p. Choosing 720p roughly halves that.",
        "Verify a download plays with the network off before you rely on it — a partial download looks complete until you try.",
      ]}
    >
      <h2 id="which">Which app downloads reliably</h2>
      <VariantSupportStrip
        rebornSupported={false}
        v2Supported
        context="guaranteed offline downloads"
      />
      <p>
        The strip above is deliberately blunt. Reborn <em>can</em> download —
        many providers support it and it works well when they do — but you
        cannot count on it for any given title, because the capability belongs
        to the third-party source rather than to the app.
      </p>
      <p>
        StreamFlix 2.0 serves from its own catalog, so downloading is a feature
        it controls end to end. If offline viewing is the reason you are
        installing anything, that is the variant to install. See{" "}
        <InternalLink intent="v2" currentPath={R.offline} />.
      </p>
      <SpecTable
        caption="Offline download support compared between the two StreamFlix apps"
        rows={[
          ["Built-in downloading", `${V2.shortName}: yes. ${REBORN.shortName}: provider dependent`],
          ["Quality selection", "Both, where the source offers more than one"],
          ["Storage location", "The app's own private storage, in both"],
          ["Visible in a file manager", "No, in both"],
          ["Survives uninstall", "No, in both"],
          ["Expiry", "None — downloads are not licensed and do not time out"],
          ["Download queue", `${V2.shortName}: yes. ${REBORN.shortName}: one at a time`],
        ]}
      />

      <h2 id="how">How to download a title</h2>
      <StepCards
        items={howTo.steps.map((step, index) => ({
          n: String(index + 1).padStart(2, "0"),
          title: step.name,
          body: step.text,
        }))}
      />

      <h2 id="where">Where the files go</h2>
      <p>
        Into the app&rsquo;s own private storage directory, not your Downloads
        folder. This surprises people, so the consequences are worth listing:
      </p>
      <ul>
        <li>
          <strong>They do not appear in your gallery.</strong> Android&rsquo;s
          media scanner does not index app-private storage.
        </li>
        <li>
          <strong>A file manager will not find them.</strong> Modern Android
          scopes app storage so other apps cannot browse it.
        </li>
        <li>
          <strong>You cannot copy one to a computer.</strong> There is no
          accessible path to copy from.
        </li>
        <li>
          <strong>Uninstalling deletes all of them.</strong> Android removes
          app-private storage with the app, and there is no account to restore
          from.
        </li>
        <li>
          <strong>Clearing app data deletes them too.</strong> Worth remembering
          before you clear data as a troubleshooting step — see{" "}
          <InternalLink intent="notWorking" currentPath={R.offline} />.
        </li>
      </ul>
      <p>
        This is normal for streaming apps rather than a limitation specific to
        StreamFlix. Licensed services do the same thing for licensing reasons;
        these apps do it because scoped storage is simply how modern Android
        works.
      </p>

      <h2 id="refuse">Why some titles refuse</h2>
      <DataTable
        caption="Reasons a StreamFlix download fails or is unavailable, with fixes"
        headers={["Symptom", "Cause", "Fix"]}
        rows={[
          [
            "No Download button on the title (Reborn)",
            "The serving provider streams only",
            "Switch provider or server for that title and check again",
          ],
          [
            "Download starts then stops at a percentage",
            "Source dropped, or the connection was interrupted",
            "Delete the partial entry and restart, ideally on a different server",
          ],
          [
            "Download completes but will not play",
            "The file was truncated without reporting an error",
            "Delete it and download again at a lower quality",
          ],
          [
            "Not enough storage",
            "Less free space than the file needs plus working room",
            "Free space, or choose a lower quality",
          ],
          [
            "Download vanished after an update",
            "App data was cleared, or the app was reinstalled rather than updated",
            "Not recoverable. Install over the top next time rather than uninstalling",
          ],
          [
            "Queue stalls on the second item",
            "Reborn downloads one at a time",
            "Let the first finish, or use StreamFlix 2.0 for a real queue",
          ],
        ]}
      />

      <h2 id="storage">How much space to budget</h2>
      <DataTable
        caption="Approximate storage per title by quality"
        headers={["Content", "1080p", "720p", "480p"]}
        rows={[
          ["Feature film (~2 hours)", "1.2–1.5 GB", "600–800 MB", "300–400 MB"],
          ["Short film (~90 minutes)", "800 MB–1.1 GB", "450–600 MB", "220–300 MB"],
          ["TV episode (~45 minutes)", "400–600 MB", "220–300 MB", "110–160 MB"],
          ["Full season (10 episodes)", "4–6 GB", "2.2–3 GB", "1.1–1.6 GB"],
        ]}
      />
      <QuickSummary
        bullets={[
          "720p is the sweet spot on a phone — roughly half the storage of 1080p, with little visible difference at that screen size.",
          "Leave headroom. Android needs working space, and a device running near full behaves badly in general.",
          "A season at 1080p will fill a 64 GB phone faster than expected once the OS and your other apps are accounted for.",
          "An SD card does not help — app-private storage is on internal storage regardless.",
        ]}
      >
        <p>
          Choosing a lower quality before downloading is by far the most
          effective way to fit more on a limited device, and it is a decision you
          cannot revisit afterwards without re-downloading.
        </p>
      </QuickSummary>

      <h2 id="manage">Managing your downloads</h2>
      <ul>
        <li>
          <strong>Find them in the app&rsquo;s downloads section</strong>, not
          in a system folder. That is the only interface to them.
        </li>
        <li>
          <strong>Delete from inside the app.</strong> There is no other way to
          remove an individual file.
        </li>
        <li>
          <strong>Clear failed entries.</strong> Partial downloads occupy space
          and will not resume; deleting and restarting is faster than waiting.
        </li>
        <li>
          <strong>Check total usage</strong> under Settings → Apps → StreamFlix →
          Storage, which shows the real figure including cache.
        </li>
        <li>
          <strong>Cache is separate from downloads.</strong> Clearing cache is
          safe; clearing data deletes your downloads.
        </li>
      </ul>

      <h2 id="limits">Limits worth knowing</h2>
      <p>
        Being honest about where offline viewing here falls short of a licensed
        service:
      </p>
      <ul>
        <li>
          <strong>No cross-device access.</strong> Downloads live on one device
          and cannot follow you, because there is no account.
        </li>
        <li>
          <strong>No guaranteed availability.</strong> A title you can download
          today may have no downloadable source next week, since the source is a
          third party.
        </li>
        <li>
          <strong>Quality is the source&rsquo;s.</strong> If the provider only
          carries 720p, that is what downloads, regardless of the setting.
        </li>
        <li>
          <strong>No background downloading in Reborn.</strong> Leaving the app
          usually interrupts the transfer.
        </li>
        <li>
          <strong>Nothing is recoverable.</strong> Uninstall, clear data, or a
          factory reset and every download is gone permanently.
        </li>
      </ul>
      <p>
        If dependable offline viewing genuinely matters — a long flight, a
        commute with no signal — that is one of the clearest cases where a paid
        service earns its cost. That comparison is on{" "}
        <InternalLink intent="vsPaid" currentPath={R.offline} />.
      </p>
    </ClusterPage>
  );
}
