import Link from "next/link";
import { Download } from "lucide-react";
import { L, linkLabel } from "@/lib/links";
import { isPackageStaged } from "@/lib/releases";
import { STAGED_PACKAGE, stagedPackagePath } from "@/lib/package";
import { R } from "@/lib/routes";
import { REBORN, type AppVariant } from "@/lib/variants";

/**
 * Primary download button.
 *
 * Every button on the site serves the one staged package, so a visitor never
 * lands on a dead link. When no binary is staged the button degrades to the
 * on-page download section rather than pointing at a file that would 404, which
 * is the same condition that gates `downloadUrl` in the schema.
 */
export function DownloadCta({
  variant = REBORN,
  label,
  size = "lg",
  staged,
  showMeta = true,
}: {
  variant?: AppVariant;
  label?: string;
  size?: "lg" | "md";
  staged?: boolean;
  showMeta?: boolean;
}) {
  const available = staged ?? isPackageStaged();
  const href = available ? stagedPackagePath() : `${R.home}#get-apk`;
  return (
    <div className="not-prose flex flex-col gap-2">
      <a
        href={href}
        className={`btn-download ${
          size === "lg" ? "px-6 py-4 text-base" : "px-4 py-3 text-sm"
        }`}
        {...(available ? { download: STAGED_PACKAGE.fileName } : {})}
      >
        <Download className="h-5 w-5 shrink-0" aria-hidden />
        <span>{label ?? `Download ${variant.shortName}`}</span>
      </a>
      {showMeta ? (
        <p className="text-xs leading-5 text-zinc-400">
          {STAGED_PACKAGE.fileName}, {STAGED_PACKAGE.sizeLabel}, requires
          Android {STAGED_PACKAGE.minAndroid}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Sidebar spec card. Defaults to Reborn because it is the variant that runs on
 * the widest range of devices; pages about StreamFlix 2.0 pass their own.
 */
export function DownloadCard({
  variant = REBORN,
  staged,
}: {
  variant?: AppVariant;
  staged?: boolean;
}) {
  const available = staged ?? isPackageStaged();
  return (
    <aside id="page-download-card" className="card-panel p-5">
      <p className="kicker">Current package</p>
      <p className="mt-1 font-serif text-2xl text-paper">{variant.name}</p>
      <p className="mt-0.5 text-sm text-zinc-400">
        {variant.id === "reborn" ? `v${variant.version}` : `Build ${variant.version}`}
        , updated {variant.releasedOnDisplay}
      </p>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="text-zinc-400">Size</dt>
          <dd className="font-medium text-paper">{variant.sizeLabel}</dd>
        </div>
        <div>
          <dt className="text-zinc-400">Requires</dt>
          <dd className="font-medium text-paper">Android {variant.minAndroid}</dd>
        </div>
        <div>
          <dt className="text-zinc-400">Licence</dt>
          <dd className="font-medium text-paper">
            {variant.openSource ? "Apache 2.0" : "Proprietary"}
          </dd>
        </div>
        <div>
          <dt className="text-zinc-400">Account</dt>
          <dd className="font-medium text-paper">Not required</dd>
        </div>
      </dl>
      <div className="mt-5">
        <DownloadCta variant={variant} size="md" staged={available} />
      </div>
      <p className="mt-3 text-xs leading-5 text-zinc-400">
        {available
          ? "Served directly from this site. Verify the package name after install."
          : "The specification above is current. The button opens the download section until the binary is attached, so it never 404s."}{" "}
        <Link href={L.oldVersions.href} className="text-flame hover:underline">
          {linkLabel("oldVersions", "body")}
        </Link>
        .
      </p>
    </aside>
  );
}
