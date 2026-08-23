"use client";

import { useState } from "react";
import { Link2 } from "lucide-react";

/** Copy-link only — no third-party share endpoints. */
export function ShareRail({ url }: { url: string; title: string }) {
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

  return (
    <div className="share-rail">
      <div className="share-rail-panel">
        <p className="share-rail-label" aria-hidden>
          Share
        </p>
        <nav aria-label="Share this page" className="flex flex-col items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={copy}
            title={copied ? "Copied" : "Copy link"}
            aria-label={copied ? "Link copied" : "Copy link"}
            className="share-btn"
          >
            <Link2 className="h-[18px] w-[18px]" aria-hidden />
            <span className="sr-only">{copied ? "Copied" : "Copy link"}</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
