import type { Metadata } from "next";
import {
  CONTENT_UPDATED,
  DATE_PUBLISHED,
  DEFAULT_DESCRIPTION,
  HOME_TITLE,
  SITE_LOCALE,
  SITE_NAME,
  absoluteUrl,
} from "@/lib/site";

const ogImageUrl = absoluteUrl("/opengraph-image");

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  absoluteTitle = false,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  absoluteTitle?: boolean;
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    robots: noIndex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : undefined,
    alternates: { canonical: url },
    openGraph: {
      type: path === "/" ? "website" : "article",
      url: path === "/" ? absoluteUrl("/") : url,
      siteName: SITE_NAME,
      title,
      description,
      locale: SITE_LOCALE.replace("-", "_"),
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} catalog`,
        },
      ],
      ...(path === "/"
        ? {}
        : {
            publishedTime: DATE_PUBLISHED,
            modifiedTime: CONTENT_UPDATED,
          }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    other: {
      "og:url": url,
      "article:modified_time": CONTENT_UPDATED,
    },
  };
}

export const homeTitle = HOME_TITLE;
export const homeDescription = DEFAULT_DESCRIPTION;
