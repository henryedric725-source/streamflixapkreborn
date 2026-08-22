/**
 * Removes the em-dash habit from the prose.
 *
 * The copy leaned on " — " as a catch-all connector, which reads as a tic and
 * flattens the relationship between clauses. Each one is replaced with the
 * punctuation that actually fits:
 *
 *   full independent clause follows  ->  ". " and capitalise
 *   list or appositive follows       ->  ": "
 *   modifier or aside follows        ->  ", "
 *
 * Also normalises en-dash numeric ranges to plain hyphens and middot
 * separators to commas.
 *
 *   node scripts/clean-typography.mjs [--dry]
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";

const DRY = process.argv.includes("--dry");
const ROOTS = ["app", "lib", "components"];

/** Finite verbs and modals. Their presence early means a clause, not a phrase. */
const VERBS = new Set(
  `is are was were be been being has have had do does did will wo would can could may
   might must should shall gets get got goes go went makes make made takes take took
   needs need runs run ran works work worked comes come came carries carry stays stay
   keeps keep kept means mean meant costs cost gives give gave shows show showed
   leaves leave left sits sit sat lives live lets let brings bring turns turn behaves
   behave appears appear happens happen exists exist depends depend applies apply
   changes change changed breaks break broke fails fail failed varies vary differs
   differ matters matter counts count helps help stops stop stopped starts start
   arrives arrive covers cover indexes index installs install expects expect assumes
   assume requires require allows allow prevents prevent removes remove adds add
   affects affect reflects reflect follows follow explains explain describes describe
   states state says say tells tell wins win loses lose beats beat holds hold`
    .split(/\s+/)
    .filter(Boolean),
);

/** Imperatives that open an instruction. */
const IMPERATIVES = new Set(
  `install use check try switch pick choose open close enable disable delete clear
   restart reinstall download upload verify confirm compare read see treat expect
   assume avoid prefer keep leave move set turn put run go stop start look find
   contact email report scan walk`.split(/\s+/).filter(Boolean),
);

/** Words that introduce a modifier or aside rather than a new clause. */
const MODIFIERS = new Set(
  `including such especially particularly typically usually often sometimes mostly
   largely generally normally arguably notably even not no nor and or but with
   without for in on at by from about after before while during unless whereas
   although though because since so then than as via per plus minus up down over
   under between across around near despite given assuming barring failing`
    .split(/\s+/)
    .filter(Boolean),
);

function isClause(rest) {
  const words = rest.split(/\s+/).slice(0, 5).map((w) => w.replace(/[^\w']/g, "").toLowerCase());
  if (!words.length) return false;
  if (IMPERATIVES.has(words[0])) return true;
  // A finite verb within the opening words signals a full clause.
  return words.slice(0, 4).some((w) => VERBS.has(w));
}

function isModifier(rest) {
  const first = rest.split(/\s+/)[0]?.replace(/[^\w']/g, "").toLowerCase() ?? "";
  if (MODIFIERS.has(first)) return true;
  // Present participle opening an aside: "compared, including ...".
  return /^[a-z]+ing\b/.test(rest);
}

function capitalise(rest) {
  return rest.replace(/^([a-z])/, (m) => m.toUpperCase());
}

function convert(text) {
  let changed = 0;

  // PAIRED dashes first. " — aside — " brackets a parenthetical, so both marks
  // become commas. Handling these before single dashes is essential: treating
  // each mark independently turns the aside into a sentence fragment.
  // Bounded to one line and to a short span so it cannot span two separate asides.
  let out = text.replace(
    /( — )([^—\n]{1,120}?)( — )/g,
    (_m, _open, inner) => {
      changed += 2;
      return `, ${inner}, `;
    },
  );

  // Remaining single spaced em-dash acting as a connector.
  out = out.replace(/ — (\S)/g, (_m, next, offset, whole) => {
    const rest = whole.slice(offset + 3);
    changed += 1;
    if (isModifier(rest)) return `, ${next}`;
    if (isClause(rest)) return `. ${capitalise(next)}`;
    return `: ${next}`;
  });
  // Any stragglers: unspaced or line-wrapped.
  out = out.replace(/\s*—\s*/g, (m) => {
    changed += 1;
    return m.includes("\n") ? m.replace("—", "") : ", ";
  });
  // Numeric ranges read plainer with a hyphen than an en dash.
  out = out.replace(/(\d)\s*–\s*(\d)/g, (_m, a, b) => {
    changed += 1;
    return `${a}-${b}`;
  });
  out = out.replace(/–/g, () => {
    changed += 1;
    return "-";
  });
  // Middot separators in data strings. Collapse any padding so we do not leave
  // a double space behind.
  out = out.replace(/\s*·\s*/g, () => {
    changed += 1;
    return ", ";
  });
  return { out, changed };
}

async function walk(dir, acc = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, acc);
    else if ([".ts", ".tsx"].includes(extname(entry.name))) acc.push(full);
  }
  return acc;
}

async function main() {
  const files = (await Promise.all(ROOTS.map((r) => walk(r)))).flat();
  let touched = 0;
  let total = 0;
  for (const file of files) {
    const src = await readFile(file, "utf8");
    // Only touch string/JSX content, never the JSDoc and // comments: those are
    // notes to developers and rewriting them adds noise to the diff.
    const segments = src.split(/(\/\*[\s\S]*?\*\/|\/\/[^\n]*)/g);
    let changed = 0;
    const out = segments
      .map((seg, i) => {
        if (i % 2 === 1) return seg; // captured comment
        const r = convert(seg);
        changed += r.changed;
        return r.out;
      })
      .join("");
    if (!changed || out === src) continue;
    if (!DRY) await writeFile(file, out, "utf8");
    touched += 1;
    total += changed;
    console.log(`${String(changed).padStart(3)}  ${file}`);
  }
  console.log(`\n${total} replacements across ${touched} files${DRY ? " (dry run)" : ""}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
