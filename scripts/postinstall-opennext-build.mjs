import { existsSync } from "node:fs";
import { execSync } from "node:child_process";

/**
 * Cloudflare Workers Builds runs `npm ci` then `npx wrangler deploy` with no
 * separate build step. OpenNext output must exist before deploy.
 * Skip locally and when output is already present (cached builds).
 */
const isCi = process.env.CI === "true" || process.env.CF_BUILD === "1";
const isCloudflareBuildHome =
  process.env.HOME?.includes("buildhome") ||
  process.cwd().includes("/opt/buildhome");
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const workerBundle = ".open-next/worker.js";

if (
  (!isCi && !isCloudflareBuildHome) ||
  isGitHubActions ||
  existsSync(workerBundle)
) {
  process.exit(0);
}

console.log("[postinstall] CI build: running opennextjs-cloudflare build...");
execSync("npx opennextjs-cloudflare build", { stdio: "inherit" });
