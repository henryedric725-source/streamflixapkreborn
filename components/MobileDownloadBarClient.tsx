"use client";

import { Download } from "lucide-react";
import { useEffect, useState } from "react";

const DOWNLOAD_ANCHORS = [
  "#hero-download",
  "#download",
  "#get-apk",
  "#page-download-card",
] as const;

function isDownloadBlockVisible() {
  return DOWNLOAD_ANCHORS.some((selector) => {
    const element = document.querySelector(selector);
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
  });
}

function hasDownloadAnchor() {
  return DOWNLOAD_ANCHORS.some((selector) => document.querySelector(selector));
}

export function MobileDownloadBarClient({
  href,
  fileName,
  label,
}: {
  href: string;
  /** Absent when the binary is not staged, which also drops the download attr. */
  fileName?: string;
  label: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("hero-download");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setVisible(rect.bottom <= 0);
        return;
      }

      if (hasDownloadAnchor()) {
        setVisible(!isDownloadBlockVisible() && window.scrollY > 120);
        return;
      }

      setVisible(window.scrollY > window.innerHeight * 0.5);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-line bg-ink/95 px-3 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 ease-out lg:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
    >
      <a
        href={href}
        className="btn-download w-full py-3 text-sm"
        tabIndex={visible ? 0 : -1}
        {...(fileName ? { download: fileName } : {})}
      >
        <Download className="h-4 w-4" aria-hidden />
        {label}
      </a>
    </div>
  );
}
