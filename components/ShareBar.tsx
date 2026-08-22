"use client";

import { useState } from "react";
import { Link2, Share2 } from "lucide-react";

const networks = [
  {
    name: "Facebook",
    href: (url: string, _title: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: "Twitter",
    href: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    name: "Threads",
    href: (url: string, title: string) =>
      `https://www.threads.net/intent/post?text=${encodeURIComponent(`${title} ${url}`)}`,
  },
  {
    name: "Pinterest",
    href: (url: string, title: string) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
  },
  {
    name: "Reddit",
    href: (url: string, title: string) =>
      `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  },
  {
    name: "WhatsApp",
    href: (url: string, title: string) =>
      `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
  },
  {
    name: "LinkedIn",
    href: (url: string, _title: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
] as const;

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
        {networks.map((network) => (
          <li key={network.name}>
            <a
              href={network.href(url, title)}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className={itemClass}
            >
              {network.name}
            </a>
          </li>
        ))}
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
