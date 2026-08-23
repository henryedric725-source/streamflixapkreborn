import Image from "next/image";
import Link from "next/link";
import {
  LOGO_ALT,
  SITE_NAME,
  SITE_TAGLINE,
  legalLinks,
  quickLinks,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-paper/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label={LOGO_ALT}>
            <Image
              src="/logo.svg"
              alt={LOGO_ALT}
              width={40}
              height={40}
              className="rounded-lg"
              unoptimized
            />
            <span className="font-serif text-lg text-paper">{SITE_NAME}</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-6">{SITE_TAGLINE}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-flame">
            Quick Links
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-paper" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-flame">
            Legal Pages
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-paper" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-flame">
            Note
          </p>
          <p className="mt-3 text-xs leading-5 text-paper/50">
            Installing third-party APK files carries risk. Scan the APK, then
            read the safety notes before enabling unknown sources. This catalog
            does not host patched or cracked APKs.
          </p>
        </div>
      </div>
    </footer>
  );
}
