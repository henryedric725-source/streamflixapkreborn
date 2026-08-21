import { Globe, RefreshCw, Server, ShieldQuestion } from "lucide-react";

/**
 * Explains the aggregator model, which is the single most useful thing a reader
 * can understand about StreamFlix Reborn: it is why the catalog changes without
 * an app update, why individual titles fail, and why "switch provider" fixes
 * most complaints.
 */

const concepts = [
  {
    icon: Globe,
    title: "Providers are third parties",
    body:
      "A provider is an external site the app knows how to search. Reborn ships support for more than 20 of them across several languages. None of them belong to the app, and none of them are hosted by it.",
  },
  {
    icon: Server,
    title: "Servers are links within a provider",
    body:
      "Once a title is found, the provider usually offers several playback servers. If one stalls or refuses, you switch to the next from inside the player rather than abandoning the title.",
  },
  {
    icon: RefreshCw,
    title: "The catalog changes without an update",
    body:
      "Because the index lives with the providers, titles appear and vanish while your installed version stays the same. An app update changes how it searches, not what exists.",
  },
  {
    icon: ShieldQuestion,
    title: "Nothing is verified for you",
    body:
      "The app cannot tell you whether a given stream is licensed, and it does not claim to. That judgement stays with you, which is why the legality question is about the streams rather than the software.",
  },
];

export function ProviderGrid() {
  return (
    <div className="not-prose mt-5 grid gap-3 sm:grid-cols-2">
      {concepts.map((item) => (
        <article
          key={item.title}
          className="rounded-xl border border-line bg-panel p-4"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-flame/15 text-flame">
            <item.icon className="h-5 w-5" aria-hidden strokeWidth={2} />
          </span>
          <h3 className="mt-3 text-sm font-semibold text-paper">{item.title}</h3>
          <p className="mt-1.5 text-sm leading-6 text-zinc-400">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
