import type { Metadata } from "next";
import { AppScreenshot } from "@/components/AppScreenshot";
import { ClusterPage } from "@/components/ClusterPage";
import { DataTable, QuickSummary } from "@/components/ContentBlocks";
import { FeatureCards, Roadmap, SettingCards } from "@/components/HomeSections";
import { InternalLink } from "@/components/InternalLink";
import { ProviderGrid } from "@/components/ProviderGrid";
import { howToUseFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/metadata";
import { R } from "@/lib/routes";
import type { HowToData } from "@/lib/schema";
import { screenshots } from "@/lib/screenshots";
import { REBORN } from "@/lib/variants";

const TITLE = "How to Use StreamFlix: Full Setup Guide";
const DESCRIPTION =
  "Set up providers, switch servers when a stream stalls, load subtitles, pick audio tracks and build a watchlist in both StreamFlix apps.";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: R.howToUse,
  dateModified: "2026-08-10",
  keywords: [
    "how to use streamflix",
    "streamflix settings",
    "streamflix subtitles",
    "streamflix change server",
    "streamflix watchlist",
  ],
});

const toc = [
  { href: "#first-five", label: "The first five minutes" },
  { href: "#providers", label: "Choosing a provider" },
  { href: "#servers", label: "Switching servers mid-stream" },
  { href: "#subtitles", label: "Subtitles and audio tracks" },
  { href: "#quality", label: "Quality and playback settings" },
  { href: "#watchlist", label: "Watchlist, favourites and resume" },
  { href: "#browsing", label: "Finding something to watch" },
  { href: "#habits", label: "Habits that make it work" },
];

const setupHowTo: HowToData = {
  name: "Set up StreamFlix after installing",
  description:
    "Choose a provider, set default quality, configure subtitles, and confirm playback before you settle in.",
  path: R.howToUse,
  fragment: "howto-setup",
  totalTime: "PT5M",
  toolName: `${REBORN.name} v${REBORN.version}`,
  steps: [
    {
      name: "Open settings and check the provider",
      text: "Before browsing anything, open settings and look at which provider is selected. The default is not always the best for your region, and reviewing it here prevents most 'nothing plays' frustration later.",
    },
    {
      name: "Set your default playback quality",
      text: "Reborn defaults to 1080p where the source supports it. On a slow connection or a metered one, drop this to 720p. It prevents the buffering that people otherwise blame on the app.",
    },
    {
      name: "Configure subtitles before you need them",
      text: "Set your preferred subtitle language, and on Reborn set size, colour and background. On a TV, doing this in advance saves fiddling with a remote mid-film.",
    },
    {
      name: "Test with something popular",
      text: "Play a well-known recent title first. If a popular film will not resolve, the problem is the provider or your connection, not the specific title you actually wanted.",
    },
  ],
};

export default function HowToUsePage() {
  return (
    <ClusterPage
      path={R.howToUse}
      title={TITLE}
      description={DESCRIPTION}
      about={["streaming", "subtitles"]}
      mentions={["android", "bufferingTerm", "androidTv"]}
      dateModified="2026-08-10"
      kicker="Using the app"
      h1="How to Use StreamFlix Properly"
      answer="Open settings and check your provider before you browse. That single step prevents most playback complaints. Then learn the source and server picker inside the player: when a stream stalls, switching server fixes it far more often than restarting the app or reinstalling it."
      toc={toc}
      faqs={howToUseFaqs}
      howTo={setupHowTo}
      takeaways={[
        "Check the provider setting before browsing. The default is not always the best for your region, and most 'nothing plays' reports trace back to it.",
        "Switching server inside the player is the single most useful skill. A title that fails on one server usually plays on the next.",
        "A stream failing is a provider problem, not an app problem, reinstalling the app achieves nothing.",
        "Set subtitle preferences before you need them, especially on a TV where adjusting mid-film means fighting a remote.",
        "There is no account, so favourites and history are local. They do not sync, and they do not survive an uninstall.",
      ]}
      featureAside={<AppScreenshot shot={screenshots.genres} size="feature" priority />}
    >
      <h2 id="first-five">The first five minutes</h2>
      <Roadmap
        items={setupHowTo.steps.map((step, index) => ({
          n: String(index + 1).padStart(2, "0"),
          title: step.name,
          body: step.text,
        }))}
      />

      <h2 id="providers">Choosing a provider</h2>
      <p>
        This is the setting that matters most and the one almost nobody touches.
        In StreamFlix Reborn, the provider determines what the app can find and
        how reliably it plays.
      </p>
      <ProviderGrid />
      <p>
        Practical advice: try two or three providers against the same
        well-known title and see which resolves fastest. That takes a couple of
        minutes and tells you more than any recommendation, because provider
        health varies by region and changes over time.
      </p>
      <p>
        If a provider that used to work stops resolving anything, it has
        probably changed shape and needs an updated scraper. That is what most{" "}
        <InternalLink intent="changelog" currentPath={R.howToUse} /> entries
        actually are.
      </p>
      <p>
        StreamFlix 2.0 works differently: it serves from its own catalog and has
        no provider picker. If nothing plays there, the problem is the
        app&rsquo;s backend or your connection, not a setting you can change.
      </p>

      <h2 id="servers">Switching servers mid-stream</h2>
      <p>
        The single most useful habit for this class of app, and the reason most
        &ldquo;StreamFlix is broken&rdquo; reports are not about StreamFlix.
      </p>
      <QuickSummary
        bullets={[
          "Open the source or server menu during playback. It is in the player controls, not in settings.",
          "Pick a different entry from the list. Playback restarts on the new source, usually within seconds.",
          "Do not back out to the catalog first. You lose your place and gain nothing.",
          "If three or four servers all fail on one title, that title genuinely has no working source right now. Try a different one.",
          "If every server fails on every title, the problem is your connection or DNS, not the app.",
        ]}
      >
        <p>
          A stream stalling is normal in an aggregator, because the stream
          belongs to a third party who may be overloaded or offline. Treating it
          as a two-tap fix rather than a fault changes the experience entirely.
        </p>
      </QuickSummary>
      <p>
        Buffering that survives every server switch is a different problem 
        see <InternalLink intent="buffering" currentPath={R.howToUse} />.
      </p>

      <h2 id="subtitles">Subtitles and audio tracks</h2>
      <FeatureCards
        items={[
          {
            title: "Selecting a subtitle track",
            body: "Open the subtitle menu during playback and choose from what the source offers. Availability is per title and per provider, so a language in settings is not a guarantee on every film.",
          },
          {
            title: "Styling subtitles (Reborn)",
            body: "Size, colour and background are all adjustable. On a TV viewed from three metres, this is the difference between readable and useless.",
          },
          {
            title: "Audio track selection",
            body: "Where a source carries multiple audio tracks, pick between them rather than accepting the first. Useful for original-language audio on dubbed releases.",
          },
          {
            title: "When no subtitles appear",
            body: "The source has none. Switch server for the same title: a different source frequently carries a subtitle track the first one lacked.",
          },
          {
            title: "Subtitles out of sync",
            body: "A property of that particular source rather than the app. Switching server is the fix, not adjusting a delay setting.",
          },
          {
            title: "StreamFlix 2.0 languages",
            body: "Eight built in: English, Hindi, Bengali, Spanish, French, Korean, Tamil and Telugu, notably strong South Asian coverage.",
          },
        ]}
      />

      <h2 id="quality">Quality and playback settings</h2>
      <SettingCards
        items={[
          {
            title: "Default quality",
            value: "1080p",
            body: "Reborn's default where the source supports it. Drop to 720p on a slow or metered connection. It prevents more buffering than any other single change.",
          },
          {
            title: "Playback speed",
            value: "0.5×-2×",
            body: "Adjustable, which is unusual in this category. Genuinely useful for long-form content.",
          },
          {
            title: "Hardware decoding",
            value: "On by default",
            body: "Leave it on. Turn it off only if you get audio with a black screen, which indicates your device cannot decode that codec in hardware.",
          },
        ]}
      />
      <p>
        Quality is ultimately a property of the source, not a setting you
        control. Asking for 1080p from a source that only carries 720p produces
        720p. This is the structural difference from a licensed service, and it
        is covered on{" "}
        <InternalLink intent="vsPaid" currentPath={R.howToUse} />.
      </p>

      <h2 id="watchlist">Watchlist, favourites and resume</h2>
      <DataTable
        caption="How saved data behaves in each StreamFlix app"
        headers={["Feature", "Behaviour", "Survives uninstall?"]}
        rows={[
          ["Favourites / watchlist", "Saved on the device, no account involved", "No"],
          ["Resume position", "Tracked per title automatically", "No"],
          ["Watch history", "Local only, never uploaded", "No"],
          ["Downloads", "Stored in the app's own storage", "No"],
          ["Provider and quality settings", "Local preferences", "No"],
          ["Sync between devices", "Not available. There is no account", "n/a"],
        ]}
      />
      <p>
        Everything is local. That is a privacy advantage. There is no profile
        anywhere to leak, as covered on{" "}
        <InternalLink intent="privacy" currentPath={R.howToUse} />, and a
        practical disadvantage, because nothing transfers to a new device and an
        uninstall is final.
      </p>
      <p>
        This is why <InternalLink intent="update" currentPath={R.howToUse} />{" "}
        insists on installing over the top rather than uninstalling first.
      </p>

      <h2 id="browsing">Finding something to watch</h2>
      <ul>
        <li>
          <strong>Genre browsing</strong> is the fastest route when you do not
          have a title in mind. Two taps: category, then title.
        </li>
        <li>
          <strong>Search</strong> works best with exact titles. Partial or
          approximate names depend on how the provider indexed them, which
          varies.
        </li>
        <li>
          <strong>The detail page</strong> carries runtime, release year,
          original language, and a rating before you commit: worth reading, as
          catalog artwork in this category is frequently mislabelled.
        </li>
        <li>
          <strong>Rows change on their own.</strong> The catalog belongs to the
          providers, so what appears shifts without any app update.
        </li>
      </ul>

      <h2 id="habits">Habits that make it work</h2>
      <QuickSummary
        bullets={[
          "Switch server first, always. Before restarting, reinstalling, or concluding anything is broken.",
          "Test with a popular title when something seems wrong: it isolates provider problems from title problems.",
          "Keep the previous build available. When an update drops a provider you relied on, rolling back is a two-minute fix.",
          "Lower the default quality on a weak connection rather than tolerating constant buffering.",
          "Do not uninstall to fix things. It rarely helps and it deletes everything you have saved.",
        ]}
      >
        <p>
          Almost everything that goes wrong with an aggregator is a source
          problem wearing the costume of an app problem. Once switching sources
          is reflexive rather than a last resort, the app becomes considerably
          more pleasant.
        </p>
      </QuickSummary>
      <p>
        Symptom-by-symptom diagnosis for everything else is on{" "}
        <InternalLink intent="notWorking" currentPath={R.howToUse} />, and
        offline saving is covered on{" "}
        <InternalLink intent="offline" currentPath={R.howToUse} />.
      </p>
    </ClusterPage>
  );
}
