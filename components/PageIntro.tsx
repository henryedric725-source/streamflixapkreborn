import Link from "next/link";
import { L, linkLabel } from "@/lib/links";
import { CONTENT_UPDATED, CONTENT_UPDATED_DISPLAY, PUBLISHER } from "@/lib/site";

export function TrustBar() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400">
      <time dateTime={CONTENT_UPDATED}>Updated {CONTENT_UPDATED_DISPLAY}</time>
      <span aria-hidden>,</span>
      <span>By {PUBLISHER}</span>
      <span aria-hidden>,</span>
      <Link href={L.about.href} className="hover:text-flame">
        {linkLabel("about", "body")}
      </Link>
    </div>
  );
}

export function DirectAnswer({
  kicker,
  title,
  answer,
}: {
  kicker: string;
  title: string;
  answer: string;
}) {
  return (
    <section className="direct-answer">
      <p className="kicker">{kicker}</p>
      <h1 className="mt-3 font-serif text-3xl leading-tight text-paper sm:text-4xl">
        {title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-zinc-200">{answer}</p>
    </section>
  );
}
