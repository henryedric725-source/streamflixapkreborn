import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";
import { L, linkLabel } from "@/lib/links";
import { R } from "@/lib/routes";
import { isVariantStaged } from "@/lib/releases";
import { REBORN, variantApkPath, type AppVariant } from "@/lib/variants";

/**
 * Primary download button for one variant.
 *
 * When the binary is not staged the button degrades to the on-page download
 * section rather than pointing at a file that would 404 — the same condition
 * that gates `downloadUrl` in the SoftwareApplication schema.
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
  const available = staged ?? isVariantStaged(variant);
  const href = available ? variantApkPath(variant) : `${R.home}#get-apk`;
  return (
    <div className="flex flex-col gap-2">
      <a
        href={href}
        className={`btn-download ${
          size === "lg" ? "px-6 py-3.5 text-base" : "px-4 py-2.5 text-sm"
        }`}
        {...(available ? { download: variant.fileName } : {})}
      >
        <Download className="h-5 w-5" aria-hidden />
        {label ?? `Download ${variant.shortName} ${variant.id === "reborn" ? `v${variant.version}` : `build ${variant.version}`}`}
      </a>
      {showMeta ? (
        <p className="text-xs text-zinc-400">
          {variant.sizeLabel} &middot; Android {variant.minAndroid} &middot;{" "}
          <span className="font-mono">{variant.packageName}</span>
        </p>
      ) : null}
    </div>
  );
}

/** The official distribution points for a variant. Always nofollow. */
export function OfficialSources({ variant }: { variant: AppVariant }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {variant.sources.map((source) => (
        <li key={source.url}>
          <a
            href={source.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1.5 text-xs text-zinc-300 transition hover:border-flame hover:text-paper"
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            {source.name}
          </a>
        </li>
      ))}
    </ul>
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
  const available = staged ?? isVariantStaged(variant);
  return (
    <aside id="page-download-card" className="card-panel p-5">
      <p className="kicker">Current package</p>
      <p className="mt-1 font-serif text-2xl text-paper">{variant.name}</p>
      <p className="mt-0.5 text-sm text-zinc-400">
        {variant.id === "reborn" ? `v${variant.version}` : `Build ${variant.version}`} &middot;{" "}
        {variant.releasedOnDisplay}
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
        <DownloadCta variant={variant} size="md" staged={available} showMeta={false} />
      </div>
      <p className="mt-3 text-xs leading-5 text-zinc-400">
        {available
          ? `Serving ${variant.fileName}. Verify the package name after install.`
          : "The specification above is current. The button opens the download section until the binary is attached, so it never 404s."}{" "}
        <Link href={L.oldVersions.href} className="text-flame hover:underline">
          {linkLabel("oldVersions", "body")}
        </Link>
        .
      </p>
    </aside>
  );
}
