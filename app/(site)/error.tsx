"use client";

import { useEffect } from "react";
import Link from "next/link";
import { R } from "@/lib/routes";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-[60vh] max-w-xl flex-col justify-center px-4 py-16 text-center"
    >
      <p className="kicker">Error</p>
      <h1 className="mt-3 font-serif text-3xl text-paper sm:text-4xl">
        Something went wrong
      </h1>
      <p className="mt-4 text-zinc-400">
        That page failed to load. You can try again, or go back to a known
        article.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="btn-download px-4 py-2.5 text-sm"
        >
          Try again
        </button>
        <Link
          href={R.home}
          className="rounded-md border border-line px-4 py-2.5 text-sm text-paper hover:bg-white/5"
        >
          Download hub
        </Link>
        <Link
          href={R.blog}
          className="rounded-md border border-line px-4 py-2.5 text-sm text-paper hover:bg-white/5"
        >
          Blog index
        </Link>
      </div>
    </main>
  );
}
