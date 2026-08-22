import Image from "next/image";
import Link from "next/link";
import { Download, Menu } from "lucide-react";
import { NavLinks } from "@/components/NavLinks";
import { isPackageStaged } from "@/lib/releases";
import { STAGED_PACKAGE, stagedPackagePath } from "@/lib/package";
import { R } from "@/lib/routes";
import { LOGO_ALT, SITE_SHORT_NAME, SITE_TAGLINE, navItems } from "@/lib/site";

export function SiteHeader() {
  const available = isPackageStaged();
  const downloadHref = available ? stagedPackagePath() : `${R.home}#get-apk`;

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center gap-3"
          aria-label={LOGO_ALT}
        >
          <Image
            src="/logo.svg"
            alt={LOGO_ALT}
            width={40}
            height={40}
            className="rounded-lg"
            priority
            unoptimized
          />
          <span className="min-w-0">
            <span className="block font-serif text-xl leading-none tracking-tight text-paper">
              {SITE_SHORT_NAME}
            </span>
            <span className="mt-1 hidden max-w-[16rem] text-[11px] leading-snug text-paper/55 sm:block">
              {SITE_TAGLINE}
            </span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden flex-1 lg:block">
          <NavLinks
            items={navItems}
            className="flex items-center justify-center gap-1"
            linkClassName="rounded-md px-2.5 py-1.5 text-sm text-paper/80 transition hover:bg-white/5 hover:text-paper"
          />
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <a
            href={downloadHref}
            className="btn-download hidden px-3 py-2 text-sm lg:inline-flex"
            {...(available ? { download: STAGED_PACKAGE.fileName } : {})}
          >
            <Download className="h-4 w-4" aria-hidden />
            Download APK
          </a>
          <details className="relative lg:hidden">
            <summary className="flex list-none items-center rounded-md border border-white/15 p-2 text-paper [&::-webkit-details-marker]:hidden">
              <Menu className="h-5 w-5" aria-hidden />
              <span className="sr-only">Open menu</span>
            </summary>
            <div className="absolute right-0 mt-2 w-64 rounded-lg border border-line bg-ink p-2">
              <p className="px-3 py-2 text-[11px] leading-snug text-paper/55">
                {SITE_TAGLINE}
              </p>
              <NavLinks
                items={[
                  ...navItems,
                  { href: R.about, label: "About" },
                ]}
                className="flex flex-col"
                linkClassName="block rounded-md px-3 py-2 text-sm text-paper/90 hover:bg-white/5"
              />
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
