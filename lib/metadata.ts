import type { Metadata } from "next";
import { SITE_AUTHOR } from "@/lib/author";
import { categoryOf } from "@/lib/blog";
import { R, isPostPath } from "@/lib/routes";
import {
  CONTENT_UPDATED,
  DATE_PUBLISHED,
  DEFAULT_DESCRIPTION,
  HOME_TITLE,
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
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  absoluteTitle?: boolean;
  noIndex?: boolean;
  /** ISO date this page's facts were last reviewed. */
  dateModified?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const modified = dateModified ?? CONTENT_UPDATED;
  const isArticle = path !== R.home;
  const section = categoryOf(path)?.name;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    authors: [{ name: SITE_AUTHOR.name, url: SITE_AUTHOR.url }],
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: { index: false, follow: true },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    alternates: {
      canonical: url,
      // Single-language site: x-default points at the same URL so hreflang is
      // well-formed rather than absent.
      languages: { "x-default": url, en: url },
      ...(path === R.blog
        ? { types: { "application/rss+xml": absoluteUrl("/blog/rss.xml") } }
        : {}),
    },
    openGraph: {
      type: isArticle ? "article" : "website",
      url,
      siteName: SITE_NAME,
      title,
      description,
      locale: "en_US",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${title}`,
        },
      ],
      ...(isArticle
        ? {
            publishedTime: DATE_PUBLISHED,
            modifiedTime: modified,
            authors: [SITE_AUTHOR.url],
            ...(section ? { section } : {}),
            ...(keywords?.length ? { tags: keywords } : {}),
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    other: {
      "og:url": url,
      "article:modified_time": modified,
      ...(isPostPath(path) ? { "article:published_time": DATE_PUBLISHED } : {}),
    },
  };
}

export const homeTitle = HOME_TITLE;
export const homeDescription = DEFAULT_DESCRIPTION;
