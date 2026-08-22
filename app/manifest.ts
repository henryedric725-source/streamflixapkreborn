import type { MetadataRoute } from "next";
import { DEFAULT_DESCRIPTION, SITE_LOCALE, SITE_NAME, SITE_SHORT_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_SHORT_NAME,
    description: DEFAULT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#E8112D",
    icons: [
      { src: "/favicon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    lang: SITE_LOCALE,
    categories: ["entertainment", "utilities"],
  };
}
