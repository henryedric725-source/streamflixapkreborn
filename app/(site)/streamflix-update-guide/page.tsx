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
    "streamflix update latest version",
    "streamflix latest version apk",
    "streamflix apk latest version",
    "streamflix 1.7.117",
    "streamflix in-app update",
    "streamflix signature error",
    "streamflix update",
    "update streamflix apk",
    "movie app download apk update",
  ],
});

const toc = [
  { href: "#quick-summary", label: "Quick summary" },
  { href: "#latest", label: "The latest version right now" },
  { href: "#check-version", label: "Checking which version you have" },
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
      mentions={[
        "sideloading",
        "googlePlay",
        "android",
        "github",
        "playProtect",
        "openSource",
        "malware",
      ]}
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
        `The current builds are StreamFlix Reborn v${REBORN.version}, released ${REBORN.releasedOnDisplay}, and StreamFlix 2.0 build ${V2.version}, released ${V2.releasedOnDisplay}.`,
        "Check your installed version inside the app's own settings, not on the download page you used. Mirrors advertise versions they do not actually serve.",
        "Reborn's in-app updater fetches the project's own signed build, which is why it never triggers a signature error.",
        "StreamFlix 1.7.117 is an older Reborn build that download sites still advertise as current. It is not, and its scrapers have aged.",
      ]}
    >
      <QuickSummary
        bullets={[
          `Current builds: StreamFlix Reborn v${REBORN.version}, ${REBORN.sizeLabel}, released ${REBORN.releasedOnDisplay}, package ${REBORN.packageName}.`,
          `StreamFlix 2.0 build ${V2.version}, ${V2.sizeLabel}, released ${V2.releasedOnDisplay}, package ${V2.packageName}.`,
          "Reborn updates itself through an in-app updater or a manual overlay install. StreamFlix 2.0 updates through Google Play if you installed it there.",
          "An overlay install keeps favourites, history and downloads. Uninstalling first loses all of them permanently, because no account exists.",
          "A signature error always means the two files were signed by different parties, which is a repackaging problem rather than a bug.",
          "Version numbers advertised by mirror sites are frequently stale. Verify in the app's settings after installing, never on the download page.",
        ]}
      >
        <p>
          To update StreamFlix to the latest version, install the new APK
          directly over the existing app without uninstalling. Android preserves
          your data whenever the signing certificate matches.
        </p>
        <p>
          Which route you take depends on the app. StreamFlix Reborn checks for
          newer builds itself and can install them, since it is on no store that
          would do it for you. StreamFlix 2.0 is on Google Play, so a Play
          install updates silently and a sideloaded copy never updates at all.
        </p>
      </QuickSummary>

      <h2 id="latest">The latest version right now</h2>
      <p>
        Two different apps ship under the StreamFlix name, so there are two
        current versions and they are not comparable. The figures below are the
        ones we verify against the developers&rsquo; own distribution points.
      </p>
      <DataTable
        caption="Current StreamFlix versions, sizes and requirements"
        headers={["", REBORN.shortName, V2.shortName]}
        rows={[
          ["Latest version", `v${REBORN.version}`, `Build ${V2.version}`],
          ["Released", REBORN.releasedOnDisplay, V2.releasedOnDisplay],
          ["Download size", REBORN.sizeLabel, V2.sizeLabel],
          ["Requires Android", REBORN.minAndroid, V2.minAndroid],
          ["Package name", REBORN.packageName, V2.packageName],
          ["Update route", "In-app updater, or a manual overlay install", "Google Play, or manual if sideloaded"],
          ["Source of truth", "GitHub releases", "The Google Play listing"],
        ]}
      />
      <p>
        Older Reborn builds keep circulating as though they were current, and
        1.7.117 is the one that appears most often on download pages. It is a
        genuine build rather than a fake, but it is well behind v
        {REBORN.version}, and its provider scrapers have had time to age out.
        Older builds are catalogued with their sizes and requirements on{" "}
        <InternalLink intent="oldVersionsDirectory" currentPath={R.update} />.
      </p>
      <p>
        Treat the version printed on a download page as a claim, not a fact. A
        mirror can label a listing 1.7.230 and serve something older, and
        nothing on the page will show it. The check that settles it takes twenty
        seconds and is in the next section.
      </p>

      <h2 id="check-version">Checking which version you have</h2>
      <p>
        Check inside the app rather than trusting the source you installed from.
        Both apps display their build in their own settings, and Android
        displays it independently, which is the more reliable of the two.
      </p>
      <ol>
        <li>
          <strong>Android&rsquo;s own record:</strong> Settings, Apps, then the
          app, then App details. The version shown there comes from the
          installed package and cannot be dressed up by a download page.
        </li>
        <li>
          <strong>Inside the app:</strong> open settings and scroll to the about
          or version entry. Useful confirmation, and it is where Reborn&rsquo;s
          update check lives.
        </li>
        <li>
          <strong>Confirm the package name at the same time.</strong> It must
          read <code>{REBORN.packageName}</code> or{" "}
          <code>{V2.packageName}</code>. Anything else is a different app
          wearing the name.
        </li>
        <li>
          <strong>Compare the size against the published figure.</strong>{" "}
          {REBORN.sizeLabel} and {V2.sizeLabel} respectively. A build several
          megabytes larger has had something added to it.
        </li>
      </ol>
      <p>
        Doing this after every manual update is the habit that catches a
        repackaged file before it matters. Google Play Protect catches some of
        them, but a repackaged build carrying no malware scans perfectly clean
        while still being signed by a stranger. The full verification routine is
        on <InternalLink intent="safe" currentPath={R.update} />.
      </p>

      <h2 id="golden-rule">The one rule</h2>
      <p>
        <strong>Do not uninstall before updating.</strong> Nearly every account
        of &ldquo;I updated StreamFlix and lost everything&rdquo; comes down to
        uninstalling first out of habit.
      </p>
      <p>
        With most apps that habit is harmless, because a cloud account restores
        your state on next sign-in. Neither StreamFlix app has an account.
        Favourites, watch history, downloads and settings exist in exactly one
        place, your device, and uninstalling deletes all of it with no way back.
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
      <p>
        For most people the in-app updater is the right route. It removes the
        chance of downloading from a mirror and getting a repackaged file. The
        exception is if you have deliberately stayed on an older build.
      </p>
      <ul>
        <li>
          <strong>It fetches the project&rsquo;s own signed build</strong>, so
          the certificate matches and your data is preserved automatically.
        </li>
        <li>
          <strong>It still needs install-from-unknown-sources permission</strong>{" "}
          for the app itself, granted once.
        </li>
        <li>
          <strong>It keeps offering the newest build after a rollback.</strong>{" "}
          Decline it, or you undo the rollback you just performed.
        </li>
        <li>
          <strong>It cannot work on a repackaged build</strong>, because the
          project&rsquo;s signature will never match a stranger&rsquo;s.
        </li>
        <li>
          <strong>It is not a store.</strong> Nothing screens the update the way
          Google Play would, which is why the version check above is worth
          doing.
        </li>
      </ul>
      <DataTable
        caption="The in-app updater compared with installing a downloaded APK by hand"
        headers={["", "In-app updater", "Manual overlay install"]}
        rows={[
          ["Where the file comes from", "The project's own release channel", "Whichever mirror you chose"],
          ["Signature match", "Guaranteed, so data is always preserved", "Only if the mirror served an unmodified build"],
          ["Repackaging risk", "None in practice", "The main risk in sideloading"],
          ["Choice of version", "Newest only", "Any build you can find, including older ones"],
          ["Works after a rollback", "Yes, and it will undo the rollback", "Yes, and it respects your choice"],
          ["Available in StreamFlix 2.0", "No. Google Play does this instead", "Yes, if you sideloaded it"],
        ]}
      />

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
        <InternalLink
          intent="oldVersions"
          context="generic"
          currentPath={R.update}
        />
        .
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
        <InternalLink intent="oldVersionsDirectory" currentPath={R.update} />,
        and the safe downgrade procedure is under{" "}
        <InternalLink intent="rollback" context="generic" currentPath={R.update} />
        .
      </p>
    </ClusterPage>
  );
}
