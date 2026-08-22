import { R } from "@/lib/routes";
import { screenshots } from "@/lib/screenshots";
import { CONTENT_UPDATED, SITE_URL, allIndexablePaths } from "@/lib/site";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Pages whose facts move with each app release get a tighter crawl signal. */
const WEEKLY = new Set<string>([R.home, R.oldVersions, R.oldVersions, R.reborn, R.v2]);

export function buildSitemapXml() {
  const lastmod = CONTENT_UPDATED;
  const urls = allIndexablePaths
    .map((path) => {
      const loc = path === R.home ? SITE_URL : `${SITE_URL}${path}`;
      const priority =
        path === R.home ? "1.0" : WEEKLY.has(path) ? "0.9" : "0.7";
      const changefreq = WEEKLY.has(path) ? "weekly" : "monthly";
      // The hub renders the full screenshot gallery, so it carries the image
      // entries. Declaring them everywhere would just duplicate the same set.
      const images =
        path === R.home
          ? Object.values(screenshots)
              .map(
                (shot) => `
    <image:image>
      <image:loc>${escapeXml(`${SITE_URL}${shot.src}`)}</image:loc>
      <image:title>${escapeXml(shot.alt)}</image:title>
    </image:image>`,
              )
              .join("")
          : "";
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${images}
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;
}

export function privateSitemapPath(secret: string) {
  return `/private-sitemap/${secret}`;
}

export function privateSitemapUrl(secret: string) {
  return `${SITE_URL}${privateSitemapPath(secret)}`;
}
