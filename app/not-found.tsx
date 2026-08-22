import type { Metadata } from "next";
import Link from "next/link";
import { MobileDownloadBar } from "@/components/MobileDownloadBar";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { R } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="mx-auto flex min-h-[70vh] max-w-xl flex-col justify-center px-4 pb-20 text-center"
      >
        <p className="kicker">404</p>
        <h1 className="mt-3 font-serif text-4xl text-paper">No page here</h1>
        <p className="mt-4 text-zinc-400">
          That URL is not one of our articles. Start from the download hub, the
          install guide, or the full index.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={R.home} className="btn-download px-4 py-2.5 text-sm">
            StreamFlix APK download
          </Link>
          <Link
            href={R.install}
            className="rounded-md border border-line px-4 py-2.5 text-sm text-paper hover:bg-white/5"
          >
            Install guide
          </Link>
          <Link
            href={R.blog}
            className="rounded-md border border-line px-4 py-2.5 text-sm text-paper hover:bg-white/5"
          >
            All articles
          </Link>
        </div>
      </main>
      <SiteFooter />
      <MobileDownloadBar />
    </>
  );
}
