/**
 * Generates the logo and favicon set from a single vector master.
 *
 * The mark is a film strip in the site's accent red on a true-black rounded
 * tile, matching the supplied reference. Two variants are rendered:
 *
 *   detail  — 7 sprocket holes per rail, used at 180px and above
 *   compact — 5 larger holes and heavier rails, used at 48px and below,
 *             because the detailed rail turns to mush once a hole is under
 *             about 1.5 device pixels
 *
 *   node scripts/build-logo.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const RED = "#E8112D"; // --color-flame
const BG = "#000000"; // --color-ink

/**
 * Film-strip mark on a 480x480 canvas.
 *
 * Drawn as one red rounded rect with the holes and frames punched out through
 * a mask, so the black showing through is the page background rather than a
 * painted shape — the strip stays correct on any backdrop.
 */
function mark({ holes, holeSize, railInset, frameGap, radius, strokeInset }) {
  const X = 92;
  const Y = 124;
  const W = 296;
  const H = 240;

  // Sprocket rails, evenly distributed across the usable width.
  const usable = W - strokeInset * 2;
  const gap = (usable - holes * holeSize) / (holes - 1);
  const holeR = Math.round(holeSize * 0.22);
  const topY = Y + railInset;
  const bottomY = Y + H - railInset - holeSize;

  const sprockets = Array.from({ length: holes }, (_, i) => {
    const x = X + strokeInset + i * (holeSize + gap);
    return [topY, bottomY]
      .map(
        (y) =>
          `<rect x="${x.toFixed(1)}" y="${y}" width="${holeSize}" height="${holeSize}" rx="${holeR}" fill="black"/>`,
      )
      .join("");
  }).join("");

  // Two picture frames: a wide one and a narrower one, as in the reference.
  const frameY = topY + holeSize + railInset;
  const frameH = bottomY - railInset - frameY;
  const frameX = X + strokeInset;
  const frameW = usable;
  const leftW = Math.round((frameW - frameGap) * 0.615);
  const rightW = frameW - frameGap - leftW;
  const frameR = Math.round(holeSize * 0.12);

  const frames =
    `<rect x="${frameX}" y="${frameY}" width="${leftW}" height="${frameH}" rx="${frameR}" fill="black"/>` +
    `<rect x="${frameX + leftW + frameGap}" y="${frameY}" width="${rightW}" height="${frameH}" rx="${frameR}" fill="black"/>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="480" viewBox="0 0 480 480">
  <defs>
    <mask id="cut">
      <rect x="${X}" y="${Y}" width="${W}" height="${H}" rx="${radius}" fill="white"/>
      ${sprockets}
      ${frames}
    </mask>
  </defs>
  <rect width="480" height="480" fill="${BG}"/>
  <rect x="${X}" y="${Y}" width="${W}" height="${H}" rx="${radius}" fill="${RED}" mask="url(#cut)"/>
</svg>`;
}

const detail = mark({
  holes: 7,
  holeSize: 24,
  railInset: 18,
  frameGap: 22,
  radius: 26,
  strokeInset: 18,
});

const compact = mark({
  holes: 5,
  holeSize: 34,
  railInset: 22,
  frameGap: 22,
  radius: 30,
  strokeInset: 22,
});

/**
 * Everything lands in public/ and is declared explicitly in `metadata.icons`.
 * We deliberately do not use Next's app/icon.png file convention: it would
 * emit its own <link rel="icon"> alongside ours and duplicate the tags.
 */
const targets = [
  // Full detail for anywhere the mark is rendered large.
  { svg: detail, out: "public/logo.png", size: 512 },
  { svg: detail, out: "public/apple-touch-icon.png", size: 180 },
  { svg: detail, out: "public/favicon-192.png", size: 192 },
  // Compact for browser-tab sizes.
  { svg: compact, out: "public/favicon-48.png", size: 48 },
  { svg: compact, out: "public/favicon-32.png", size: 32 },
  { svg: compact, out: "public/favicon-16.png", size: 16 },
];

async function main() {
  await mkdir("public", { recursive: true });
  await writeFile(join("public", "logo.svg"), detail, "utf8");

  for (const { svg, out, size } of targets) {
    const info = await sharp(Buffer.from(svg))
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toFile(out);
    console.log(`${out.padEnd(28)} ${info.width}x${info.height}  ${info.size} B`);
  }
  console.log("public/logo.svg               vector master");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
