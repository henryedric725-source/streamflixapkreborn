// Ambient bindings for OpenNext on Cloudflare.
// R2Bucket / Fetcher come from the Workers runtime; declare minimally for tsc.
interface R2ObjectBody {
  readonly size: number;
  readonly body: ReadableStream;
  readonly httpEtag?: string;
  readonly httpMetadata?: {
    contentType?: string;
    contentDisposition?: string;
  };
}

interface R2Bucket {
  get(key: string): Promise<R2ObjectBody | null>;
}

interface CloudflareEnv {
  RELEASES: R2Bucket;
  ASSETS: Fetcher;
  WORKER_SELF_REFERENCE: Fetcher;
  NEXT_PUBLIC_SITE_URL: string;
  SITEMAP_SECRET: string;
}
