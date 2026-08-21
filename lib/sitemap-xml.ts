import { R } from "@/lib/routes";
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
const WEEKLY = new Set<string>([R.home, R.oldVersions, R.changelog, R.reborn, R.v2]);

export function buildSitemapXml() {
  const lastmod = CONTENT_UPDATED;
  const urls = allIndexablePaths
    .map((path) => {
      const loc = path === R.home ? SITE_URL : `${SITE_URL}${path}`;
      const priority =
        path === R.home ? "1.0" : WEEKLY.has(path) ? "0.9" : "0.7";
      const changefreq = WEEKLY.has(path) ? "weekly" : "monthly";
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function privateSitemapPath(secret: string) {
  return `/private-sitemap/${secret}`;
}

export function privateSitemapUrl(secret: string) {
  return `${SITE_URL}${privateSitemapPath(secret)}`;
}
