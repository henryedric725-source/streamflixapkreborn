import { MobileDownloadBarClient } from "@/components/MobileDownloadBarClient";
import { isVariantStaged } from "@/lib/releases";
import { REBORN, variantApkPath } from "@/lib/variants";
import { R } from "@/lib/routes";

export function MobileDownloadBar() {
  const staged = isVariantStaged(REBORN);
  return (
    <MobileDownloadBarClient
      href={staged ? variantApkPath(REBORN) : `${R.home}#get-apk`}
      fileName={staged ? REBORN.fileName : undefined}
      label={`Download ${REBORN.shortName} v${REBORN.version}`}
    />
  );
}
