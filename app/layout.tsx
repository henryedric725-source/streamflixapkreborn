import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { graph, organizationNode, websiteNode } from "@/lib/schema";
import {
  DEFAULT_DESCRIPTION,
  HOME_TITLE,
  LOGO_ALT,
  PRIMARY_KEYWORDS,
  PUBLISHER,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | StreamFlix",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [...PRIMARY_KEYWORDS],
  applicationName: SITE_NAME,
  authors: [{ name: PUBLISHER, url: SITE_URL }],
  creator: PUBLISHER,
  publisher: PUBLISHER,
  category: "software",
  classification: "Android software documentation",
  // Declared explicitly rather than via the app/icon.png file convention, so
  // browsers get a size-matched raster instead of downscaling one 512px file.
  icons: {
    icon: [
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
      { url: "/logo.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon-32.png", type: "image/png" }],
  },
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  robots: {
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: LOGO_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [absoluteUrl("/opengraph-image")],
  },
  appleWebApp: {
    capable: false,
    title: SITE_NAME,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION ?? "",
    },
  },
  other: {
    language: SITE_LOCALE,
    "content-language": SITE_LOCALE,
    rating: "general",
    distribution: "global",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={SITE_LOCALE}
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <head>
        <meta name="bingbot" content="index, follow" />
        <meta name="slurp" content="index, follow" />
        <meta name="duckduckbot" content="index, follow" />
        <meta name="yandex" content="index, follow" />
        <meta name="baiduspider" content="index, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="StreamFlix APK blog"
          href="/blog/rss.xml"
        />
        <link rel="author" href="/humans.txt" />
        <link rel="alternate" type="text/plain" href="/llms.txt" />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={graph([organizationNode(), websiteNode()])} />
        {children}
      </body>
    </html>
  );
}
