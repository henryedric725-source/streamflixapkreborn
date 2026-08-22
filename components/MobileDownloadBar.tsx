import { MobileDownloadBarClient } from "@/components/MobileDownloadBarClient";
import { isPackageStaged } from "@/lib/releases";
import { STAGED_PACKAGE, stagedPackagePath } from "@/lib/package";
import { R } from "@/lib/routes";

export function MobileDownloadBar() {
  const staged = isPackageStaged();
  return (
    <MobileDownloadBarClient
      href={staged ? stagedPackagePath() : `${R.home}#get-apk`}
      fileName={staged ? STAGED_PACKAGE.fileName : undefined}
      label={`Download ${STAGED_PACKAGE.label}`}
    />
  );
}
