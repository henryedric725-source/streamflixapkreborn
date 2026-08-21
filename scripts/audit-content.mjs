/**
 * Content and internal-linking audit.
 *
 * Enforces the cluster rules the site is built on:
 *   - every indexable path has a page file
 *   - every cluster page appears in the guide catalogue (no orphans)
 *   - every cluster page has at least two sibling links
 *   - no related link points at a path that does not exist
 *   - no two pages ship the same FAQ question
 *   - legal pages never leak into the sitemap
 *
 *   node scripts/audit-content.mjs
 */
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const SITE_DIR = join(ROOT, "app", "(site)");

const fail = [];
const warn = [];

function read(path) {
  return readFile(join(ROOT, path), "utf8");
}

/** Pull `key: "/value"` pairs out of the routes module without importing TS. */
function parseRoutes(source) {
  const start = source.indexOf("export const R = {");
  const body = source.slice(start, source.indexOf("} as const;", start));
  const out = {};
  for (const [, key, value] of body.matchAll(/(\w+):\s*"(\/[^"]*)"/g)) {
    out[key] = value;
  }
  return out;
}

async function listPageRoutes(dir, prefix = "") {
  const routes = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    // Route groups like "(site)" do not contribute a URL segment.
    const segment = entry.name.startsWith("(") ? "" : `/${entry.name}`;
    const next = join(dir, entry.name);
    const children = await readdir(next);
    if (children.includes("page.tsx")) routes.push(prefix + segment);
    routes.push(...(await listPageRoutes(next, prefix + segment)));
  }
  return routes;
}

async function main() {
  const routesSrc = await read("lib/routes.ts");
  const R = parseRoutes(routesSrc);

  /** Read one `export const NAME = [...]` array, bounded by its own closing bracket. */
  function parsePathArray(name) {
    const start = routesSrc.indexOf(`export const ${name}`);
    if (start === -1) throw new Error(`${name} not found in lib/routes.ts`);
    const end = routesSrc.indexOf("] as const;", start);
    const body = routesSrc.slice(start, end);
    return [...body.matchAll(/R\.(\w+)/g)].map((m) => R[m[1]]);
  }

  const clusterPaths = parsePathArray("CLUSTER_PATHS");
  const noIndexPaths = parsePathArray("NOINDEX_PATHS");

  const indexablePaths = [...clusterPaths, R.guides, R.about];

  // 1. Every indexable path has a page file.
  const onDisk = new Set(await listPageRoutes(SITE_DIR));
  onDisk.add("/"); // app/(site)/page.tsx
  for (const path of [...indexablePaths, ...noIndexPaths]) {
    if (!onDisk.has(path)) fail.push(`no page file for route ${path}`);
  }

  // 2. Pages on disk that no route declares.
  for (const path of onDisk) {
    if (![...indexablePaths, ...noIndexPaths].includes(path)) {
      warn.push(`page ${path} exists but is not in the route registry`);
    }
  }

  // 3. Every cluster page is in the guide catalogue (the home hub is the root).
  const guidesSrc = await read("lib/guides.ts");
  const catalogued = new Set(
    [...guidesSrc.matchAll(/href:\s*R\.(\w+)/g)].map((m) => R[m[1]]),
  );
  for (const path of clusterPaths) {
    if (path === R.home) continue;
    if (!catalogued.has(path)) fail.push(`orphan: ${path} is not in guides.ts`);
  }

  // 4. Related-links coverage and sibling count.
  const relatedSrc = await read("lib/related.ts");
  const blocks = [
    ...relatedSrc.matchAll(/\[?R\.(\w+)\]?:\s*\[([\s\S]*?)\n  \],/g),
  ];
  const covered = new Map();
  for (const [, key, body] of blocks) {
    covered.set(R[key], (body.match(/href:/g) ?? []).length);
  }
  for (const path of indexablePaths) {
    const count = covered.get(path);
    if (count === undefined) {
      fail.push(`no related-links entry for ${path}`);
    } else if (count < 2) {
      fail.push(`${path} has only ${count} sibling link(s); minimum is 2`);
    }
  }

  // 5. No related link points at a route that does not exist.
  const knownHrefs = new Set([...indexablePaths, ...noIndexPaths]);
  const linksSrc = await read("lib/links.ts");
  for (const [, key, value] of linksSrc.matchAll(
    /href:\s*(?:R\.(\w+)|`\$\{R\.(\w+)\}([^`]*)`)/g,
  )) {
    const base = R[key ?? value];
    if (base && !knownHrefs.has(base)) {
      fail.push(`link registry points at unknown route ${base}`);
    }
  }

  // 6. No duplicate FAQ questions across banks.
  const faqSrc = await read("lib/faqs.ts");
  const banks = [
    ...faqSrc.matchAll(
      /export const (\w+Faqs)(?::\s*FaqItem\[\])?\s*=\s*\[([\s\S]*?)\n\];/g,
    ),
  ];
  const seen = new Map();
  for (const [, name, body] of banks) {
    for (const [, question] of body.matchAll(/question:\s*"([^"]+)"/g)) {
      const key = question.toLowerCase();
      if (seen.has(key)) {
        fail.push(
          `duplicate FAQ question in ${name} and ${seen.get(key)}: "${question}"`,
        );
      } else {
        seen.set(key, name);
      }
    }
  }

  // 7. Legal pages must never appear in the sitemap.
  const siteSrc = await read("lib/site.ts");
  if (!siteSrc.includes("allIndexablePaths = INDEXABLE_PATHS")) {
    fail.push("allIndexablePaths no longer derives from INDEXABLE_PATHS");
  }
  for (const path of noIndexPaths) {
    if (indexablePaths.includes(path)) {
      fail.push(`noIndex path ${path} is also in INDEXABLE_PATHS`);
    }
  }

  // Report.
  console.log(
    `routes: ${indexablePaths.length} indexable, ${noIndexPaths.length} noindex`,
  );
  console.log(`cluster pages: ${clusterPaths.length}`);
  console.log(`FAQ questions: ${seen.size} unique across ${banks.length} banks`);
  for (const message of warn) console.warn(`warn  ${message}`);
  for (const message of fail) console.error(`FAIL  ${message}`);

  if (fail.length) {
    console.error(`\n${fail.length} problem(s) found.`);
    process.exit(1);
  }
  console.log("\nall checks passed");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
