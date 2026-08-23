// Ambient bindings for OpenNext on Cloudflare (no R2 binding required).
interface CloudflareEnv {
  ASSETS: Fetcher;
  WORKER_SELF_REFERENCE: Fetcher;
  NEXT_PUBLIC_SITE_URL: string;
  NEXT_PUBLIC_RELEASES_BASE_URL: string;
  SITEMAP_SECRET: string;
}
