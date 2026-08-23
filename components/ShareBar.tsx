"use client";

import { useState } from "react";
import { Link2, Share2 } from "lucide-react";

/** Copy / native share only — no third-party share endpoints. */
export function ShareBar({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  async function nativeShare() {
    if (typeof navigator.share !== "function") {
      await copy();
      return;
    }
    try {
      await navigator.share({ title, url, text: title });
    } catch {
      /* user cancelled */
    }
  }

  const itemClass =
    "block w-full rounded-md border border-line px-3 py-2 text-left text-sm text-paper/90 hover:border-flame hover:text-paper";

  return (
    <aside
      className="card-panel border-flame/40 p-5"
      aria-label="Share this page"
    >
      <p className="kicker">Share</p>
      <ul className="mt-3 space-y-2">
        <li>
          <button type="button" onClick={copy} className={itemClass}>
            <span className="inline-flex items-center gap-1.5">
              <Link2 className="h-3.5 w-3.5" aria-hidden />
              {copied ? "Copied" : "Copy link"}
            </span>
          </button>
        </li>
        <li className="md:hidden">
          <button type="button" onClick={nativeShare} className={itemClass}>
            <span className="inline-flex items-center gap-1.5">
              <Share2 className="h-3.5 w-3.5" aria-hidden />
              More
            </span>
          </button>
        </li>
      </ul>
    </aside>
  );
}
