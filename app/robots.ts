import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/releases/", "/sitemap.xml"],
      },
      { userAgent: "Googlebot", allow: "/", disallow: ["/releases/", "/sitemap.xml"] },
      { userAgent: "Bingbot", allow: "/", disallow: ["/releases/", "/sitemap.xml"] },
      { userAgent: "Slurp", allow: "/", disallow: ["/releases/", "/sitemap.xml"] },
      { userAgent: "DuckDuckBot", allow: "/", disallow: ["/releases/", "/sitemap.xml"] },
      { userAgent: "Yandex", allow: "/", disallow: ["/releases/", "/sitemap.xml"] },
      { userAgent: "Baiduspider", allow: "/", disallow: ["/releases/", "/sitemap.xml"] },
    ],
    host: SITE_URL,
    // No public sitemap — it is served only at /private-sitemap/<secret>.
  };
}
