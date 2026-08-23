import type { Metadata } from "next";
import { AppScreenshot } from "@/components/AppScreenshot";
import { ClusterPage } from "@/components/ClusterPage";
import {
  DataTable,
  Definition,
  QuickSummary,
} from "@/components/ContentBlocks";
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
    "streamflix app interface",
    "streamflix providers",
    "streamflix best provider",
    "streamflix which provider to choose",
    "what is the best provider for streamflix",
    "best english provider for streamflix",
    "streamflix choose a provider",
    "streamflix reborn best provider",
    "how to share or copy movie url in streamflix app",
    "streamflix buddy system",
    "streamflix schedule",
    "streamflix anime",
    "streamflix movies and tv shows",
    "streamflix leaving soon list",
    "streamflix settings",
    "streamflix subtitles",
    "streamflix change server",
    "streamflix watchlist",
  ],
});

const toc = [
  { href: "#quick-summary", label: "Quick summary" },
  { href: "#interface", label: "The StreamFlix app interface" },
  { href: "#first-five", label: "The first five minutes" },
  { href: "#providers", label: "Choosing a provider" },
  { href: "#best-provider", label: "Which provider is the best one" },
  { href: "#anime", label: "Anime, regional and language providers" },
  { href: "#servers", label: "Switching servers mid-stream" },
  { href: "#subtitles", label: "Subtitles and audio tracks" },
  { href: "#quality", label: "Quality and playback settings" },
  { href: "#watchlist", label: "Watchlist, favourites and resume" },
  { href: "#browsing", label: "Finding something to watch" },
  { href: "#share", label: "Sharing or copying a title link" },
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
      mentions={[
        "android",
        "bufferingTerm",
        "androidTv",
        "tmdb",
        "dns",
        "vpn",
        "privacy",
        "reddit",
      ]}
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
        "Provider choice is a switch, not a permanent setting. Change it as often as you like, and nothing you have saved is affected.",
        "Match the provider to the content: a TMDB-backed English provider for Hollywood titles, a dedicated anime provider for anime, a regional provider for Spanish, French, Italian or German audio.",
        "The Movies, TV shows and Anime tabs are drawn from whichever provider is selected, so the whole catalog changes when you switch.",
        "Share a title with the Android share sheet from its detail page. It copies a link to the title, not to the video file.",
      ]}
      featureAside={<AppScreenshot shot={screenshots.genres} size="feature" priority />}
    >
      <QuickSummary
        bullets={[
          "Open settings and set the provider before browsing. It decides what the app can find, how fast it resolves, and which language the audio arrives in.",
          "Use the source and server menu inside the player when a stream stalls. Backing out to the catalog loses your place and fixes nothing.",
          "The Movies, TV shows and Anime tabs are the provider's catalog, not the app's. Switching provider replaces all of them at once.",
          "Set subtitle language and styling in advance. Adjusting them mid-film with a TV remote is the worst time to discover the menu.",
          "Share or copy a title link from the detail page through the Android share sheet. The link points at the title, never at the video file.",
          "Nothing is stored on a server. Favourites, resume positions and settings live on the device and disappear with an uninstall.",
        ]}
      >
        <p>
          To use StreamFlix, open settings and choose a provider that matches
          what you watch, then switch server inside the player whenever a stream
          stalls. Those two controls cover most of the app.
        </p>
        <p>
          Everything else is browsing. StreamFlix Reborn shows a home screen of
          rows, tabs for movies, TV shows and anime, a search field and a
          watchlist, all of it filled by the provider you selected. StreamFlix
          2.0 drops the provider selector and serves one fixed catalog instead,
          so its interface is shorter but also less adjustable.
        </p>
      </QuickSummary>

      <Definition term="StreamFlix app interface">
        The StreamFlix app interface is the browsing and playback layer that
        sits in front of a provider. In StreamFlix Reborn it is a home screen of
        content rows, separate Movies, TV shows and Anime sections, a search
        field, a watchlist, a settings screen holding the provider selector, and
        a player carrying the source, subtitle, audio track and quality menus.
        None of the listings belong to the app itself: each one is drawn live
        from the selected provider, which is why the same install looks
        different after a single settings change.
      </Definition>

      <h2 id="interface">The StreamFlix app interface</h2>
      <p>
        Learning where things are takes about two minutes and removes most of
        the friction people report. The layout below is StreamFlix Reborn on a
        phone; the Android TV build carries the same sections arranged for a
        D-pad.
      </p>
      <DataTable
        caption="Sections of the StreamFlix Reborn interface and what each one does"
        headers={["Section", "What it holds", "Worth knowing"]}
        rows={[
          [
            "Home",
            "Rows of popular, recent and recommended titles",
            "Rebuilt from the provider, so it changes when you switch provider and again when the provider updates",
          ],
          [
            "Movies",
            "The provider's film catalog, usually filterable by genre",
            "Genre browsing is faster than search when you have no title in mind",
          ],
          [
            "TV shows",
            "Series with season and episode listings",
            "Episode numbering comes from the provider and is occasionally wrong on general-purpose sources",
          ],
          [
            "Anime",
            "A separate section where the provider supplies one",
            "Only populated by providers that carry anime. A general English provider leaves it thin",
          ],
          [
            "Search",
            "Title lookup across the selected provider only",
            "Exact titles work best. Search does not span every provider at once",
          ],
          [
            "Watchlist and history",
            "Saved titles and resume positions",
            "Stored on the device with no account behind it, so nothing syncs and nothing survives an uninstall",
          ],
          [
            "Schedule or agenda",
            "An episode release calendar, where the provider publishes one",
            "Common on anime providers, rare on general film providers",
          ],
          [
            "Leaving soon",
            "Titles the provider has flagged for removal",
            "A provider-supplied list rather than an app feature, so it is absent on most sources",
          ],
          [
            "Settings",
            "Provider selector, quality, subtitle and player options",
            "The provider selector is the highest-value control in the app",
          ],
        ]}
      />
      <p>
        Two of those sections confuse people because they come and go. A
        schedule and a leaving-soon list are published by some providers and not
        by others, so their absence is not a missing feature or a broken build.
        Switch to a provider that supplies them and the sections fill in.
      </p>

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
        <InternalLink intent="oldVersions" currentPath={R.howToUse} /> entries
        actually are.
      </p>
      <p>
        StreamFlix 2.0 works differently: it serves from its own catalog and has
        no provider picker. If nothing plays there, the problem is the
        app&rsquo;s backend or your connection, not a setting you can change.
      </p>
      <Definition term="StreamFlix provider">
        A provider is an external streaming site that StreamFlix Reborn knows
        how to query. The app ships support for more than 20 of them and holds
        no video of its own, so the selected provider supplies the catalog, the
        artwork, the episode numbering and the playback links. Choosing one is a
        switch rather than a commitment: it changes instantly, it can be changed
        back, and it leaves your watchlist, resume positions and settings
        untouched.
      </Definition>
      <p>
        That last point is the one worth internalising. People treat the
        provider list as a setup decision they have to get right once. It is
        closer to a channel selector, and the readers who get the most out of
        the app are the ones who change it several times a week.
      </p>

      <h2 id="best-provider">Which provider is the best one</h2>
      <p>
        There is no permanent best provider for StreamFlix, and any page naming
        one is describing a single week. Providers are independent sites with
        their own uptime, their own catalogs and their own regional blocks, and
        none of them answer to the app.
      </p>
      <p>
        What does hold steady is the match between provider type and content
        type. Pick by what you are trying to watch and you will be right far
        more often than by copying a name from a forum post.
      </p>
      <DataTable
        caption="Which StreamFlix provider type to choose by what you want to watch"
        headers={["What you want", "Provider type", "Why it fits"]}
        rows={[
          [
            "Recent Hollywood films and mainstream series",
            "A TMDB-backed English provider",
            "Metadata comes from The Movie Database, so titles, years, posters and episode lists match what you expect",
          ],
          [
            "Anime, subbed or dubbed",
            "A dedicated anime provider",
            "Season and episode numbering follows the series properly, and simulcast episodes appear far sooner",
          ],
          [
            "Spanish, French, Italian or German audio",
            "The regional provider for that language",
            "Original-language audio and native subtitles, rather than an English release with a translated title",
          ],
          [
            "Older or obscure films",
            "A second general provider as a fallback",
            "Back catalogs differ sharply between providers, so a miss on one is often a hit on the next",
          ],
          [
            "Anything that refuses to resolve",
            "Any other provider, then any other server",
            "Two switches take about ten seconds and resolve more failures than every other fix combined",
          ],
        ]}
      />
      <p>
        The best English provider for you is whichever one resolves a
        well-known test title fastest today. Run that test yourself: pick a film
        everybody has heard of, try it against three providers in turn, and keep
        the quickest. It takes two minutes and it beats any recommendation,
        because provider health varies by country and changes week to week.
      </p>
      <p>
        If every provider fails on every title, stop switching. That pattern
        points at your connection rather than the app, and it is usually a
        Domain Name System resolver that blocks provider domains. Changing DNS
        or testing through a VPN settles it in a minute. See{" "}
        <InternalLink intent="vpn" currentPath={R.howToUse} />.
      </p>

      <h2 id="anime">Anime, regional and language providers</h2>
      <p>
        Reborn&rsquo;s provider list is not 20 versions of the same thing. It
        splits into a few families, and knowing which family you are in explains
        most of what you see on screen.
      </p>
      <DataTable
        caption="Families of provider in StreamFlix Reborn and what each is good for"
        headers={["Family", "Typical content", "Trade-off"]}
        rows={[
          [
            "General English, TMDB-backed",
            "Mainstream films and series with clean metadata",
            "Broadest catalog, but the busiest, so servers stall more often at peak times",
          ],
          [
            "Anime specialists",
            "Seasonal anime, subbed and dubbed, with a release schedule",
            "Excellent numbering and fast episodes, almost nothing outside anime",
          ],
          [
            "Spanish language",
            "Latin American and Spanish releases with original audio",
            "Strong regional catalog, weaker on recent English-language titles",
          ],
          [
            "French, Italian and German",
            "Local releases and dubs for each language",
            "The reliable route to native audio, with smaller catalogs than the English providers",
          ],
          [
            "Regional and niche sources",
            "Country-specific catalogs and older material",
            "Fills gaps the large providers miss, at the cost of less consistent uptime",
          ],
        ]}
      />
      <p>
        Switching between families is how the app earns its keep. Watch a series
        on an anime provider in the evening, switch to a TMDB-backed English
        provider for a film afterwards, and switch again for a Spanish title at
        the weekend. Nothing is lost in either direction, and subtitles are
        selected per title inside the player regardless of which provider served
        it.
      </p>

      <h2 id="servers">Switching servers mid-stream</h2>
      <p>
        The single most useful habit for this class of app, and the reason most
        &ldquo;StreamFlix is broken&rdquo; reports are not about StreamFlix.
      </p>
      <p>
        A stream stalling is normal in an aggregator, because the stream belongs
        to a third party who may be overloaded or offline. Treating it as a
        two-tap fix rather than a fault changes the experience entirely.
      </p>
      <ul>
        <li>
          <strong>Open the source or server menu during playback.</strong> It
          sits in the player controls, not in settings.
        </li>
        <li>
          <strong>Pick a different entry from the list.</strong> Playback
          restarts on the new source, usually within seconds.
        </li>
        <li>
          <strong>Do not back out to the catalog first.</strong> You lose your
          place and gain nothing.
        </li>
        <li>
          <strong>If three or four servers fail on one title</strong>, that
          title has no working source at the moment. Try another title, or
          another provider.
        </li>
        <li>
          <strong>If every server fails on every title</strong>, the problem is
          your connection or your DNS resolver rather than the app.
        </li>
      </ul>
      <p>
        Buffering that survives every server switch is a different problem.
        The data buffer is being starved by the connection rather than by the
        source, and that is diagnosed on{" "}
        <InternalLink intent="buffering" currentPath={R.howToUse} />.
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
        <InternalLink intent="safe" currentPath={R.howToUse} />, and a
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

      <h2 id="share">Sharing or copying a title link</h2>
      <p>
        To share or copy a movie URL in the StreamFlix app, open the title&rsquo;s
        detail page and use the share control, which hands the link to
        Android&rsquo;s system share sheet. From there you can send it to a
        messaging app, or choose Copy to put it on the clipboard.
      </p>
      <p>
        What travels is a link to the title, not to the video. Anyone you send
        it to needs StreamFlix installed and a working provider of their own for
        it to open anything, and if their selected provider does not carry that
        title they will see nothing. Nobody receives a file, and nothing is
        uploaded anywhere, which is also why this costs you no privacy.
      </p>
      <ol>
        <li>
          <strong>Open the title.</strong> The share control lives on the detail
          page, alongside Play and the watchlist button, not inside the player.
        </li>
        <li>
          <strong>Choose the share icon.</strong> Android&rsquo;s share sheet
          opens with your usual targets.
        </li>
        <li>
          <strong>Pick Copy to clipboard</strong> if you want the raw link
          rather than a chat message.
        </li>
        <li>
          <strong>On a TV, expect less.</strong> Android TV and Fire TV builds
          have no useful share sheet, so copy links from a phone instead.
        </li>
      </ol>
      <p>
        This is also the honest answer to the buddy-system question that
        circulates about StreamFlix. Neither app has a watch-together mode,
        synchronised playback, friend lists or profiles, because neither app has
        accounts to hang them on. Passing a title link through the share sheet
        and pressing play at the same time is the whole of it.
      </p>

      <h2 id="habits">Habits that make it work</h2>
      <p>
        Almost everything that goes wrong with an aggregator is a source problem
        wearing the costume of an app problem. Once switching sources is
        reflexive rather than a last resort, the app becomes considerably more
        pleasant.
      </p>
      <ul>
        <li>
          <strong>Switch server first, always</strong>, before restarting,
          reinstalling or concluding that anything is broken.
        </li>
        <li>
          <strong>Test with a popular title</strong> when something seems wrong.
          It separates a provider problem from a title problem in one attempt.
        </li>
        <li>
          <strong>Change provider as freely as you change channel.</strong>{" "}
          Nothing you have saved depends on which one is selected.
        </li>
        <li>
          <strong>Keep the previous build available.</strong> When an update
          drops a provider you relied on, rolling back is a two-minute fix.
        </li>
        <li>
          <strong>Lower the default quality on a weak connection</strong> rather
          than tolerating constant buffering.
        </li>
        <li>
          <strong>Do not uninstall to fix things.</strong> It rarely helps and
          it deletes everything you have saved.
        </li>
      </ul>
      <p>
        Symptom-by-symptom diagnosis for everything else is on{" "}
        <InternalLink intent="notWorking" currentPath={R.howToUse} />, and
        offline saving is covered on{" "}
        <InternalLink intent="offline" currentPath={R.howToUse} />.
      </p>
    </ClusterPage>
  );
}
