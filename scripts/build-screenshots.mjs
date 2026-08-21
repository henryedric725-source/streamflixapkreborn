/**
 * Re-encodes the source store screenshots into web-sized WebP.
 *
 * The originals are 1.2–3.5 MB each at up to 3537px wide, which is far past what
 * any layout on this site renders. Portrait shots go to 720px wide, landscape to
 * 1280px. Output dimensions must stay in sync with `lib/screenshots.ts`.
 *
 *   node scripts/build-screenshots.mjs
 */
import { mkdir, readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const SRC_DIR = "/Users/mac/Downloads/Streamflix apk";
const OUT_DIR = join(process.cwd(), "public", "screenshots");

/** source basename -> output slug */
const MAP = {
  "stream flix home layout.webp": "streamflix-apk-home-layout",
  "streamflix different genre.webp": "streamflix-apk-genres",
  "streamflix add your favourite.webp": "streamflix-apk-add-favourites",
  "streamflix know details about content.webp": "streamflix-apk-content-details",
  "streamflix know the Details.webp": "streamflix-apk-title-details",
  "streamflix Wide Range content.webp": "streamflix-apk-wide-range-content",
  "streamflix latest content daily.webp": "streamflix-apk-latest-content-daily",
  "Streamflix movies & tv shows app.webp": "streamflix-apk-movies-tv-shows",
};

const PORTRAIT_WIDTH = 720;
const LANDSCAPE_WIDTH = 1280;

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const available = new Set(await readdir(SRC_DIR));
  let totalIn = 0;
  let totalOut = 0;

  for (const [source, slug] of Object.entries(MAP)) {
    if (!available.has(source)) {
      console.warn(`skip (missing): ${source}`);
      continue;
    }
    const srcPath = join(SRC_DIR, source);
    const outPath = join(OUT_DIR, `${slug}.webp`);

    const image = sharp(srcPath);
    const { width = 0, height = 0 } = await image.metadata();
    const target = height > width ? PORTRAIT_WIDTH : LANDSCAPE_WIDTH;

    const info = await image
      .resize({ width: target, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(outPath);

    totalIn += (await stat(srcPath)).size;
    totalOut += info.size;
    console.log(
      `${slug}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`,
    );
  }

  console.log(
    `\ntotal ${(totalIn / 1024 / 1024).toFixed(1)} MB -> ${(totalOut / 1024).toFixed(0)} KB`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
