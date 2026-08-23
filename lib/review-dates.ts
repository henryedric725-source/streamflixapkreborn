import { R } from "@/lib/routes";
import { CONTENT_UPDATED } from "@/lib/site";

/**
 * Per-page review dates. Mirrors the `dateModified` passed to pageMetadata /
 * ClusterPage so RSS and any non-page consumers can resolve freshness without
 * scraping page modules.
 */
export const PAGE_REVIEW_DATES: Record<string, string> = {
  [R.home]: "2026-08-22",
  [R.reborn]: "2026-08-21",
  [R.v2]: "2026-08-20",
  [R.oldVersions]: "2026-08-18",
  [R.mod]: "2026-08-14",
  [R.install]: "2026-08-17",
  [R.firestick]: "2026-08-16",
  [R.androidTv]: "2026-08-15",
  [R.pc]: "2026-08-12",
  [R.ios]: "2026-08-11",
  [R.smartTv]: "2026-08-13",
  [R.howToUse]: "2026-08-10",
  [R.offline]: "2026-08-09",
  [R.notWorking]: "2026-08-08",
  [R.update]: "2026-08-07",
  [R.safe]: "2026-08-06",
  [R.legal]: "2026-08-05",
  [R.vpn]: "2026-08-04",
  [R.alternatives]: "2026-08-02",
  [R.bestTvApks]: "2026-07-31",
  [R.vsPaid]: "2026-07-30",
  [R.blog]: "2026-08-22",
  [R.about]: "2026-08-22",
};

export function reviewDateFor(path: string): string {
  return PAGE_REVIEW_DATES[path] ?? CONTENT_UPDATED;
}
