import { getCloudflareContext } from "@opennextjs/cloudflare";
import { buildSitemapXml } from "@/lib/sitemap-xml";

export const dynamic = "force-dynamic";

async function readSitemapSecret() {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const fromBinding = (env as { SITEMAP_SECRET?: string }).SITEMAP_SECRET;
    if (fromBinding) return fromBinding;
  } catch {
    // Fall back to process.env when not running on Cloudflare.
  }

  return process.env.SITEMAP_SECRET;
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ token: string }> },
) {
  const secret = await readSitemapSecret();
  const { token } = await context.params;

  if (!secret || token !== secret) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(buildSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "private, no-store",
    },
  });
}
