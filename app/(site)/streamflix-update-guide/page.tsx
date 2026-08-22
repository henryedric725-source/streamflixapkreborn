import type { Metadata } from "next";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, Definition, QuickSummary } from "@/components/ContentBlocks";
import { StepCards } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { updateFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import type { HowToData } from "@/lib/schema";
import { REBORN, V2 } from "@/lib/variants";

const TITLE = "How to Update StreamFlix Safely";
const DESCRIPTION =
  "Overlay installs, the in-app updater, and signature mismatches. Update StreamFlix without losing favourites or downloads, and when to stay on an old build.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.update,
  dateModified: "2026-08-07",
  keywords: [
    "streamflix update",
    "update streamflix apk",
    "streamflix latest version update",
    "movie app download apk update",
    "streamflix signature error",
  ],
});

const toc = [
  { href: "#golden-rule", label: "The one rule" },
  { href: "#overlay", label: "How an overlay install works" },
  { href: "#steps", label: "Updating step by step" },
  { href: "#in-app", label: "The in-app updater" },
  { href: "#play", label: "Updating StreamFlix 2.0 via Play" },
  { href: "#signature", label: "Signature mismatch errors" },
  { href: "#should-you", label: "Should you update at all?" },
  { href: "#staying", label: "Staying on a build deliberately" },
];

const howTo: HowToData = {
  name: "Update StreamFlix without losing favourites",
  description:
    "Download the new package and install it over the existing app without uninstalling first.",
  path: R.update,
  fragment: "howto-update",
  totalTime: "PT3M",
  toolName: `${REBORN.name} v${REBORN.version}`,
  steps: [
    {
      name: "Do not uninstall the current version",
      text: "This is the step everything else depends on. Uninstalling deletes favourites, watch history and downloads, and there is no account to restore them from. Leave the existing app in place.",
    },
    {
      name: "Download the new package",
      text: "Fetch the newer APK and wait for the transfer to complete. A truncated file will fail to install and can leave you unable to reopen the old version cleanly.",
    },
    {
      name: "Open it and choose Update",
      text: "Android recognises the package name and offers Update rather than Install. Confirm it. Your existing data is preserved because the signing certificate matches.",
    },
    {
      name: "Verify the version and your data",
      text: "Open the app's settings, confirm the version reads what you installed, and check your favourites are still present. If they are gone, the install replaced rather than updated. The signature did not match.",
    },
  ],
};

export default function UpdatePage() {
  return (
    <ClusterPage
      path={R.update}
      title={TITLE}
      description={DESCRIPTION}
      about={["digitalSignature", "apk"]}
      mentions={["sideloading", "googlePlay", "android"]}
      dateModified="2026-08-07"
      kicker="Updating"
      h1="How to Update StreamFlix Without Losing Your Data"
      answer="Install the new APK directly over the existing app without uninstalling first. Android performs an overlay install that preserves favourites, history and downloads as long as the signing certificate matches. Uninstalling first always loses everything, because there is no account to restore from."
      toc={toc}
      faqs={updateFaqs}
      howTo={howTo}
      takeaways={[
        "Never uninstall before updating. An overlay install preserves your data; a clean install deletes it permanently.",
        "Overlay installs only work when the signing certificate matches. Which is why a repackaged build can never be updated to the official one.",
        "Reborn has an in-app updater. StreamFlix 2.0 updates through Google Play if you installed it there.",
        "An update changes how the app searches, not what it can find. It never adds titles to the catalog.",
        "Staying on a build that works is a defensible choice, especially on older TV hardware.",
      ]}
    >
      <h2 id="golden-rule">The one rule</h2>
      <p>
        <strong>Do not uninstall before updating.</strong> Nearly every account
        of &ldquo;I updated StreamFlix and lost everything&rdquo; comes down to
        uninstalling first out of habit.
      </p>
      <p>
        With most apps that habit is harmless, because a cloud account restores
        your state on next sign-in. Neither StreamFlix app has an account.
        Favourites, watch history, downloads and settings exist in one place 
        your device, and uninstalling deletes all of it with no way back.
      </p>

      <h2 id="overlay">How an overlay install works</h2>
      <Definition term="Overlay install">
        Installing an APK over an app that is already present. Android replaces
        the code and keeps the app&rsquo;s data directory intact. It only
        permits this when the new package has the <em>same package name</em> and
        the <em>same signing certificate</em> as the installed one.
      </Definition>
      <p>
        Both conditions matter. The package name identifies the app; the
        certificate proves the update came from whoever built the original. If
        either differs, Android refuses rather than risking one app silently
        replacing another.
      </p>
      <p>
        This is also the mechanism that makes a repackaged build a permanent
        commitment: a mod is signed by whoever repackaged it, so nothing
        official can ever overlay it, and it can never overlay anything
        official. See <InternalLink intent="mod" currentPath={R.update} />.
      </p>

      <h2 id="steps">Updating step by step</h2>
      <StepCards
        items={howTo.steps.map((step, index) => ({
          n: String(index + 1).padStart(2, "0"),
          title: step.name,
          body: step.text,
        }))}
      />

      <h2 id="in-app">The in-app updater</h2>
      <p>
        StreamFlix Reborn checks for newer builds itself and offers to install
        them. This exists precisely because it is not on any store that would
        update it for you.
      </p>
      <QuickSummary
        bullets={[
          "It fetches the project's own signed build, which means the certificate matches and your data is preserved automatically.",
          "It still needs install-from-unknown-sources permission for the app itself, granted once.",
          "It will keep offering the newest build after you have deliberately rolled back. Decline it, or you undo the rollback.",
          "It cannot work on a repackaged build, because the signature will never match.",
        ]}
      >
        <p>
          For most people the in-app updater is the right route. It removes the
          chance of downloading from a mirror and getting a repackaged file. The
          exception is if you have deliberately stayed on an older build.
        </p>
      </QuickSummary>

      <h2 id="play">Updating StreamFlix 2.0 via Play</h2>
      <p>
        If you installed <InternalLink intent="v2" currentPath={R.update} />{" "}
        from Google Play, updates arrive on their own and none of the above
        applies. Play handles signing, data preservation, and rollout.
      </p>
      <p>
        The one thing Play cannot do is <em>downgrade</em>. If build{" "}
        {V2.version} misbehaves on your device, Play offers no route back. You
        must sideload the earlier build, which means enabling unknown sources for
        an app you otherwise never needed it for. Earlier builds are listed on{" "}
        <InternalLink intent="oldVersions" currentPath={R.update} />.
      </p>
      <p>
        If you sideloaded StreamFlix 2.0 rather than installing from Play, it
        will not update itself at all, and the overlay procedure above is your
        route.
      </p>

      <h2 id="signature">Signature mismatch errors</h2>
      <DataTable
        caption="Signature and update errors, what they mean, and how to resolve them"
        headers={["What you see", "What it means", "Resolution"]}
        rows={[
          [
            "App not installed. Signatures do not match",
            "Your existing copy was signed by a different party than the new file",
            "Uninstall the existing copy, then install the new one. Local data is lost",
          ],
          [
            "Update option missing; only Install is offered",
            "Android does not recognise it as the same app, usually a different package name",
            "Check you downloaded the right variant; the two apps are not interchangeable",
          ],
          [
            "It installs but favourites are gone",
            "It replaced rather than updated, because signatures differed",
            "Nothing recoverable. Use an official source from now on so signatures stay consistent",
          ],
          [
            "Downgrade refused",
            "Android blocks installing an older version code over a newer one",
            "Uninstall, then install the older build, accepting the data loss",
          ],
          [
            "In-app updater fails every time",
            "Your installed copy is repackaged, so the project's signature will never match",
            "Uninstall it and install an official build",
          ],
        ]}
      />
      <p>
        Every row above traces back to the same cause: a build signed by someone
        other than the developer. Verifying before you install prevents all of
        them. See{" "}
        <InternalLink intent="installVerify" currentPath={R.update} />.
      </p>

      <h2 id="should-you">Should you update at all?</h2>
      <p>
        Worth thinking about rather than doing reflexively, because updates here
        do something different from updates elsewhere.
      </p>
      <p>
        An update to an aggregator mainly changes provider scrapers. It does not
        add films: the catalog belongs to third parties and changes constantly
        regardless of your build. So an update can genuinely make things worse
        for you personally by dropping support for a source you relied on.
      </p>
      <DataTable
        caption="When to update StreamFlix and when to hold"
        headers={["Situation", "Recommendation"]}
        rows={[
          [
            "Sources that worked have stopped resolving",
            "Update. This is exactly what a new build fixes",
          ],
          [
            "Playback crashes or a specific bug affects you",
            "Update. Check the changelog first to confirm it is addressed",
          ],
          [
            "Everything currently works",
            "Optional. There is little to gain and a small chance of losing a working source",
          ],
          [
            "You are on a 1 GB TV box and it runs well",
            "Hold. Player changes between series can cost performance on constrained hardware",
          ],
          [
            "You just rolled back deliberately",
            "Do not update. Decline the in-app updater",
          ],
          [
            "You are several series behind",
            "Update. Old scrapers decay until the app finds almost nothing",
          ],
        ]}
      />

      <h2 id="staying">Staying on a build deliberately</h2>
      <p>
        A legitimate strategy that is worth doing properly rather than by
        neglect:
      </p>
      <ol>
        <li>
          <strong>Keep a copy of the APK you are on.</strong> If anything forces
          a reinstall, you can return to exactly the build that worked.
        </li>
        <li>
          <strong>Decline the in-app updater consistently.</strong> Accepting it
          once undoes the decision.
        </li>
        <li>
          <strong>Watch for decay.</strong> Sources quietly stopping is the
          signal that your build&rsquo;s scrapers have aged out and it is time to
          move.
        </li>
        <li>
          <strong>Know the cost.</strong> You are also declining player and
          parsing fixes, which is a real if modest trade in an app that fetches
          remote content.
        </li>
      </ol>
      <p>
        The archive exists for exactly this: every catalogued build with its
        size, requirement and what it is good for is on{" "}
        <InternalLink intent="oldVersions" currentPath={R.update} />, and
        release-by-release notes are on{" "}
        <InternalLink intent="changelog" currentPath={R.update} />.
      </p>
    </ClusterPage>
  );
}
