// Ambient bindings for OpenNext on Cloudflare.
interface CloudflareEnv {
  RELEASES: R2Bucket;
  ASSETS: Fetcher;
  WORKER_SELF_REFERENCE: Fetcher;
  NEXT_PUBLIC_SITE_URL: string;
  SITEMAP_SECRET: string;
}
