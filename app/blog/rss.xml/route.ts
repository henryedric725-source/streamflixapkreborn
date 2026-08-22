import { allPosts, postCategories } from "@/lib/blog";
import { SITE_AUTHOR } from "@/lib/author";
import { R } from "@/lib/routes";
import {
  CONTENT_UPDATED,
  DEFAULT_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toUTCString();
}

/**
 * RSS 2.0 feed for the blog. A feed is the standard machine-readable surface
 * for a post index — feed readers, aggregators, and several answer engines
 * consume it in preference to scraping the HTML index.
 */
export function GET() {
  const categoryOf = (href: string) =>
    postCategories.find((category) =>
      category.posts.some((post) => post.href === href),
    )?.name;

  const items = allPosts
    .map((post) => {
      const url = absoluteUrl(post.href);
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(post.summary)}</description>
      <pubDate>${rfc822(CONTENT_UPDATED)}</pubDate>
      <dc:creator>${escapeXml(SITE_AUTHOR.name)}</dc:creator>${
        categoryOf(post.href)
          ? `\n      <category>${escapeXml(categoryOf(post.href) as string)}</category>`
          : ""
      }
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(`${SITE_NAME} blog`)}</title>
    <link>${escapeXml(absoluteUrl(R.blog))}</link>
    <atom:link href="${escapeXml(`${SITE_URL}/blog/rss.xml`)}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(DEFAULT_DESCRIPTION)}</description>
    <language>en</language>
    <lastBuildDate>${rfc822(CONTENT_UPDATED)}</lastBuildDate>
    <generator>Next.js</generator>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
