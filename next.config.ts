import type { NextConfig } from "next";

if (
  process.env.NODE_ENV === "production" &&
  !process.env.NEXT_PUBLIC_SITE_URL &&
  !process.env.VERCEL_URL
) {
  console.warn(
    "NEXT_PUBLIC_SITE_URL is unset. Canonical tags, Open Graph, and robots will use a fallback origin.",
  );
}

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  agentRules: false,
  /**
   * Articles moved from root slugs to /post/<slug>, and /guides became /blog.
   * Permanent redirects preserve any link equity and stop old URLs 404ing.
   */
  async redirects() {
    const movedToPost = [
      "streamflix-reborn-apk",
      "streamflix-2-apk",
      "streamflix-apk-old-versions",
      "streamflix-apk-changelog",
      "streamflix-mod-apk",
      "how-to-install-streamflix-apk",
      "streamflix-for-firestick",
      "streamflix-for-android-tv",
      "streamflix-for-pc",
      "streamflix-for-ios",
      "streamflix-on-smart-tv",
      "how-to-use-streamflix",
      "streamflix-download-movies-offline",
      "streamflix-not-working",
      "streamflix-update-guide",
      "is-streamflix-apk-safe",
      "is-streamflix-legal",
      "streamflix-vpn-guide",
      "streamflix-permissions-and-privacy",
      "streamflix-alternatives",
      "best-free-movie-apks-for-android",
      "best-streaming-apks-for-android-tv",
      "streamflix-vs-paid-streaming-apps",
    ];
    return [
      { source: "/guides", destination: "/blog", permanent: true },
      ...movedToPost.map((slug) => ({
        source: `/${slug}`,
        destination: `/post/${slug}`,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Force one-click save; browser uses the URL basename (decoded) as the filename.
        source: "/releases/:file*",
        headers: [
          {
            key: "Content-Type",
            value: "application/vnd.android.package-archive",
          },
          {
            key: "Content-Disposition",
            value: "attachment",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
