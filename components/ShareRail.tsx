"use client";

import { useState } from "react";
import { Link2 } from "lucide-react";

const networks = [
  {
    name: "Facebook",
    label: "Share this page: Facebook",
    href: (url: string, _title: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden fill="currentColor">
        <path d="M13.5 8.5V6.75c0-.69.56-1.25 1.25-1.25h2V2h-3.25C11.43 2 9.5 3.93 9.5 6.25V8.5H7v3.25h2.5V22h4V11.75h2.69l.31-3.25H13.5z" />
      </svg>
    ),
  },
  {
    name: "X",
    label: "Share this page: X",
    href: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden fill="currentColor">
        <path d="M17.53 3h3.08l-6.73 7.69L21.5 21h-6.06l-4.74-5.52L4.9 21H1.8l7.2-8.23L2.5 3h6.2l4.28 5.02L17.53 3zm-1.07 16.2h1.71L7.74 4.67H5.9l10.56 14.53z" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    label: "Share this page: Pinterest",
    href: (url: string, title: string) =>
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.12 2.51 7.65 6.08 9.17-.08-.74-.02-1.63.19-2.43.2-.85 1.35-5.72 1.35-5.72s-.34-.68-.34-1.69c0-1.58.92-2.76 2.06-2.76.97 0 1.44.73 1.44 1.6 0 .98-.62 2.44-.95 3.8-.27 1.14.58 2.07 1.72 2.07 2.06 0 3.65-2.17 3.65-5.31 0-2.78-2-4.73-4.86-4.73-3.31 0-5.25 2.48-5.25 5.04 0 .99.38 2.05 1.07 2.63.12.1.14.19.1.29l-.39 1.57c-.06.25-.2.31-.46.19-1.72-.8-2.8-3.31-2.8-5.34 0-4.35 3.16-8.34 9.1-8.34 4.78 0 8.49 3.41 8.49 7.96 0 4.75-3 8.58-7.16 8.58-1.4 0-2.72-.73-3.17-1.6l-.86 3.28c-.31 1.21-1.15 2.73-1.71 3.65C9.67 21.96 10.81 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    label: "Share this page: WhatsApp",
    href: (url: string, title: string) =>
      `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: "Reddit",
    label: "Share this page: Reddit",
    href: (url: string, title: string) =>
      `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden fill="currentColor">
        <path d="M14.25 9.75A1.5 1.5 0 1115.75 8a1.5 1.5 0 01-1.5 1.75zM9 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm8.25 3.38c0 .58-.06 1.14-.17 1.68a9.77 9.77 0 01-3.41 5.47 9.93 9.93 0 01-5.67 1.77 9.93 9.93 0 01-5.67-1.77 9.77 9.77 0 01-3.41-5.47 8.53 8.53 0 01-.17-1.68c0-2.93 2.37-5.3 5.3-5.3.98 0 1.9.27 2.69.73 1.04-.66 2.27-1.05 3.59-1.05 3.58 0 6.47 2.89 6.47 6.47v.08h.06c.85.13 1.5.88 1.5 1.77 0 .98-.79 1.77-1.77 1.77-.73 0-1.36-.45-1.62-1.08a7.6 7.6 0 01-2.94.59 7.6 7.6 0 01-2.94-.59c-.26.63-.89 1.08-1.62 1.08-.98 0-1.77-.79-1.77-1.77 0-.89.65-1.64 1.5-1.77h.06v-.08zM19.5 11.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM4.75 11.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
      </svg>
    ),
  },
] as const;

export function ShareRail({ url, title }: { url: string; title: string }) {
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
    <div className="share-rail" aria-hidden>
      <div className="share-rail-panel">
        <p className="share-rail-label">Share</p>
        <nav aria-label="Share this page" className="flex flex-col items-center gap-1.5 sm:gap-2">
          {networks.map((network) => (
            <a
              key={network.name}
              href={network.href(url, title)}
              target="_blank"
              rel="nofollow noopener noreferrer"
              title={network.label}
              aria-label={network.label}
              className="share-btn"
            >
              {network.icon}
            </a>
          ))}
          <button
            type="button"
            onClick={copy}
            title="Copy link"
            aria-label="Copy link"
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
