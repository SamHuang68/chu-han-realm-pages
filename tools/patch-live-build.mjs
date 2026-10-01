#!/usr/bin/env node
/**
 * Idempotent in-place patch for the committed chu-han-realm-pages static export.
 * Run from the repo root: node tools/patch-live-build.mjs [--check]
 *
 * Does not create or modify sw.js, _headers, sitemap.xml, or _redirects.
 * No secrets. No absolute local paths.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CHECK = process.argv.includes("--check");
const OLD_ORIGIN = "https://samhuang68.github.io/chu-han-realm-pages/";
const SITE = "https://arcade.samhuang68.org";
const NEW_ORIGIN = `${SITE}/`;
const ICON_HREF = "/chu-han-realm-pages/favicon.svg";
const HEAD_ICON = `<link rel="shortcut icon" href="${ICON_HREF}"/>`;
const HALL_LABEL = "回到多元遊戲大廳首頁";
const CSS_PATH = "_next/static/css/index.BK9Gmuws.css";
const HALL_JS = "_next/static/chunks/page-BrEta2iZ.js";

const ROUTES = [
  "banqi",
  "bigtwo",
  "billiards",
  "brick-breaker",
  "chess",
  "go",
  "gomoku",
  "mahjong13",
  "mahjong16",
  "pixel-dungeon",
  "reversi",
  "snake",
  "sokoban",
  "space-invaders",
  "spirit-maze",
  "sudoku",
  "tank-battle",
  "tetris",
  "texas-holdem",
  "twenty-forty-eight",
  "xiangqi",
];

const ICON_KEY = {
  index: "14",
  banqi: "9",
  bigtwo: "9",
  billiards: "12",
  "brick-breaker": "9",
  chess: "9",
  go: "9",
  gomoku: "9",
  mahjong13: "9",
  mahjong16: "9",
  "pixel-dungeon": "9",
  reversi: "9",
  snake: "9",
  sokoban: "9",
  "space-invaders": "9",
  "spirit-maze": "14",
  sudoku: "9",
  "tank-battle": "14",
  tetris: "9",
  "texas-holdem": "9",
  "twenty-forty-eight": "9",
  xiangqi: "9",
  "404": "14",
};

const PAGES = [
  { id: "index", html: "index.html", rsc: "index.rsc", url: `${SITE}/`, music: 0, hall: true },
  ...ROUTES.map((route) => ({
    id: route,
    html: `${route}/index.html`,
    rsc: `${route}.rsc`,
    url: `${SITE}/${route}/`,
    music: 1,
    hall: false,
  })),
];

const OLD_FONTS = [
  '@font-face{font-family:Noto Serif TC;src:url(/chu-han-realm-pages/_next/static/fonts/noto-serif-tc-400.woff2)format("woff2");font-style:normal;font-weight:400;font-display:swap}',
  '@font-face{font-family:Noto Serif TC;src:url(/chu-han-realm-pages/_next/static/fonts/noto-serif-tc-700.woff2)format("woff2");font-style:normal;font-weight:700;font-display:swap}',
  '@font-face{font-family:Noto Sans TC;src:url(/chu-han-realm-pages/_next/static/fonts/noto-sans-tc-400.woff2)format("woff2");font-style:normal;font-weight:400;font-display:swap}',
  '@font-face{font-family:Noto Sans TC;src:url(/chu-han-realm-pages/_next/static/fonts/noto-sans-tc-700.woff2)format("woff2");font-style:normal;font-weight:700;font-display:swap}',
].join("");

const NEW_FONTS = [
  '@font-face{font-family:Noto Serif TC;src:local("Noto Serif TC"),local("NotoSerifTC-Regular"),local("Noto Serif CJK TC"),local("Source Han Serif TC"),url(/chu-han-realm-pages/_next/static/fonts/noto-serif-tc-400.woff2)format("woff2");font-style:normal;font-weight:400;font-display:optional}',
  '@font-face{font-family:Noto Serif TC;src:local("Noto Serif TC Bold"),local("NotoSerifTC-Bold"),local("Noto Serif CJK TC Bold"),local("Source Han Serif TC Bold"),url(/chu-han-realm-pages/_next/static/fonts/noto-serif-tc-700.woff2)format("woff2");font-style:normal;font-weight:700;font-display:optional}',
].join("");

const OLD_MUSIC = ".game-music-tab>b,.game-music-tab>i{display:none}";
const NEW_MUSIC = ".game-music-tab>b{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.game-music-tab>i{display:none}";
const OLD_TAB = ".game-music-tab{border-radius:22px;grid-template-columns:1fr;place-items:center;width:44px;min-height:44px;padding:0}";
const NEW_TAB = ".game-music-tab{position:relative;border-radius:22px;grid-template-columns:1fr;place-items:center;width:44px;min-height:44px;padding:0}";
const MUSIC_BUTTON = '<button type="button" class="game-music-tab" aria-expanded="false" aria-controls="game-music-panel">';
const HALL_HTML = ` aria-label="${HALL_LABEL}"`;
const HALL_JS_LIT = `,"aria-label":\`${HALL_LABEL}\``;

const errors = [];

function fail(file, edit, found, expected) {
  errors.push(`${file} :: ${edit} :: found ${found} expected ${expected}`);
}

function count(text, needle) {
  if (!needle) return 0;
  let n = 0;
  let i = 0;
  while ((i = text.indexOf(needle, i)) !== -1) {
    n += 1;
    i += needle.length;
  }
  return n;
}

function mustExist(rel) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs) || !fs.statSync(abs).isFile()) {
    fail(rel, "exists", "missing", "file");
    return false;
  }
  return true;
}

function readFile(rel) {
  const buf = fs.readFileSync(path.join(ROOT, rel));
  if (buf.length >= 3 && buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf) {
    fail(rel, "encoding", "UTF-8 BOM", "UTF-8 no BOM");
  }
  const raw = buf.toString("utf8");
  const crlf = raw.includes("\r\n");
  const lfOnly = raw.includes("\n") && !crlf;
  if (crlf && raw.replace(/\r\n/g, "").includes("\n")) fail(rel, "eol", "mixed", "CRLF or LF");
  return { text: raw.replace(/\r\n/g, "\n"), eol: crlf ? "\r\n" : "\n", hadNewline: raw.includes("\n") || lfOnly };
}

function headTags(url) {
  return `<link rel="canonical" href="${url}"/><meta property="og:url" content="${url}"/>`;
}

function rscTags(url) {
  return `["$","link","canonical",{"rel":"canonical","href":"${url}"}],["$","meta","og-url",{"property":"og:url","content":"${url}"}],`;
}

function rscIcon(key) {
  return `["$","link","${key}",{"rel":"shortcut icon","href":"${ICON_HREF}"}]`;
}

function encodeJsonString(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function replaceExpected(text, file, edit, needle, replacement, expected) {
  const found = count(text, needle);
  if (found === expected) return { text: text.split(needle).join(replacement), applied: expected };
  if (found === 0) return { text, applied: 0 };
  fail(file, edit, found, `${expected} or already 0`);
  return { text, applied: 0 };
}

function insertOnce(text, file, edit, anchor, insertion) {
  const already = count(text, insertion);
  const found = count(text, anchor);
  if (already === 1 && found === 1) return { text, applied: 0 };
  if (already === 0 && found === 1) {
    const at = text.indexOf(anchor);
    return { text: text.slice(0, at) + insertion + text.slice(at), applied: 1 };
  }
  fail(file, edit, `anchor ${found} insertion ${already}`, "anchor 1 and insertion 0 or 1");
  return { text, applied: 0 };
}

function extractPushes(html) {
  const marker = ".rsc.push(";
  const args = [];
  let i = 0;
  while ((i = html.indexOf(marker, i)) !== -1) {
    let j = i + marker.length;
    if (html[j] !== '"') {
      fail("inline", "push-arg", html.slice(j, j + 12), 'leading "');
      return [];
    }
    const start = j;
    j += 1;
    while (j < html.length) {
      const c = html[j];
      if (c === "\\") {
        j += 2;
        continue;
      }
      if (c === '"') break;
      j += 1;
    }
    if (html[j] !== '"') {
      fail("inline", "push-arg", "unterminated", "closed JSON string");
      return [];
    }
    args.push(html.slice(start, j + 1));
    i = j + 1;
  }
  return args;
}

function jsonRows(rsc) {
  const rows = [];
  for (const line of rsc.split("\n")) {
    if (!line) continue;
    const colon = line.indexOf(":");
    if (colon < 0) {
      rows.push(null);
      continue;
    }
    const payload = line.slice(colon + 1);
    if (payload.startsWith("{") || payload.startsWith("[")) rows.push(payload);
  }
  return rows;
}

function patchHtml(page, text) {
  const edits = [];
  let next = text;
  const urlSwap = replaceExpected(next, page.html, "og-image-prefix", OLD_ORIGIN, NEW_ORIGIN, 4);
  next = urlSwap.text;
  if (urlSwap.applied) edits.push("url x4");
  const head = insertOnce(next, page.html, "head-canonical", HEAD_ICON, headTags(page.url));
  next = head.text;
  if (head.applied) edits.push("canonical+og:url head");
  const encodedAnchor = encodeJsonString(rscIcon(ICON_KEY[page.id]));
  const encodedTags = encodeJsonString(rscTags(page.url));
  const inline = insertOnce(next, page.html, "inline-canonical", encodedAnchor, encodedTags);
  next = inline.text;
  if (inline.applied) edits.push("canonical+og:url inline");
  const music = count(next, MUSIC_BUTTON);
  if (music !== page.music) fail(page.html, "music-tab", music, page.music);
  if (page.hall) {
    const hall = replaceExpected(next, page.html, "hall-brand-aria", HALL_HTML, "", 1);
    next = hall.text;
    if (hall.applied) edits.push("drop hall aria-label");
  }
  return { text: next, edits };
}

function patchRsc(page, text) {
  const edits = [];
  let next = text;
  const urlSwap = replaceExpected(next, page.rsc, "og-image-prefix", OLD_ORIGIN, NEW_ORIGIN, 2);
  next = urlSwap.text;
  if (urlSwap.applied) edits.push("url x2");
  const anchor = rscIcon(ICON_KEY[page.id]);
  const inserted = insertOnce(next, page.rsc, "rsc-canonical", anchor, rscTags(page.url));
  next = inserted.text;
  if (inserted.applied) edits.push("canonical+og:url");
  return { text: next, edits };
}

function patch404(text) {
  const edits = [];
  let next = text;
  const urlSwap = replaceExpected(next, "404.html", "og-image-prefix", OLD_ORIGIN, NEW_ORIGIN, 4);
  next = urlSwap.text;
  if (urlSwap.applied) edits.push("url x4");
  if (count(next, HEAD_ICON) !== 1) fail("404.html", "shortcut-icon", count(next, HEAD_ICON), 1);
  if (count(next, 'rel="canonical"') !== 0) fail("404.html", "canonical", count(next, 'rel="canonical"'), 0);
  return { text: next, edits };
}

function patchCss(text) {
  const edits = [];
  let next = text;
  if (next.startsWith(NEW_FONTS) && !next.includes("@font-face{font-family:Noto Sans TC")) {
    edits.push("fonts already optional");
  } else if (next.startsWith(OLD_FONTS)) {
    next = NEW_FONTS + next.slice(OLD_FONTS.length);
    edits.push("serif optional+local, drop sans face");
  } else {
    fail(CSS_PATH, "font-face", next.slice(0, 80), "old or new font block");
  }
  const music = replaceExpected(next, CSS_PATH, "music-tab-clip", OLD_MUSIC, NEW_MUSIC, 1);
  next = music.text;
  if (music.applied) edits.push("music-tab clip");
  const tab = replaceExpected(next, CSS_PATH, "music-tab-position", OLD_TAB, NEW_TAB, 1);
  next = tab.text;
  if (tab.applied) edits.push("music-tab position");
  return { text: next, edits: edits.filter((e) => !e.endsWith("already optional")) };
}

function patchHallJs(text) {
  const edits = [];
  const hall = replaceExpected(text, HALL_JS, "hall-brand-aria", HALL_JS_LIT, "", 1);
  if (hall.applied) edits.push("drop hall aria-label");
  return { text: hall.text, edits };
}

function verify(planned) {
  const htmlById = new Map(PAGES.map((page) => [page.id, planned.get(page.html)]));
  const rscById = new Map(PAGES.map((page) => [page.id, planned.get(page.rsc)]));
  for (const page of PAGES) {
    const html = htmlById.get(page.id);
    const rsc = rscById.get(page.id);
    if (count(html, OLD_ORIGIN) !== 0) fail(page.html, "verify-origin", count(html, OLD_ORIGIN), 0);
    if (count(rsc, OLD_ORIGIN) !== 0) fail(page.rsc, "verify-origin", count(rsc, OLD_ORIGIN), 0);
    const head = headTags(page.url);
    if (count(html, head) !== 1) fail(page.html, "verify-head", count(html, head), 1);
    if (count(html, 'rel="canonical"') !== 1) fail(page.html, "verify-canonical-count", count(html, 'rel="canonical"'), 1);
    if (count(html, 'property="og:url"') !== 1) fail(page.html, "verify-ogurl-count", count(html, 'property="og:url"'), 1);
    if (!html.includes(head + HEAD_ICON)) fail(page.html, "verify-head-anchor", "missing", "canonical before shortcut icon");
    const tags = rscTags(page.url);
    const anchor = rscIcon(ICON_KEY[page.id]);
    if (count(rsc, tags + anchor) !== 1) fail(page.rsc, "verify-rsc", count(rsc, tags + anchor), 1);
    if (count(html, encodeJsonString(tags + anchor)) !== 1) fail(page.html, "verify-inline", count(html, encodeJsonString(tags)), 1);
    const pushes = extractPushes(html);
    let joined = "";
    for (const arg of pushes) {
      try {
        joined += JSON.parse(arg);
      } catch (error) {
        fail(page.html, "verify-push-json", error.message, "JSON.parse");
      }
    }
    if (joined !== rsc) fail(page.html, "verify-inline-equals-rsc", joined.length, rsc.length);
    for (const row of jsonRows(rsc)) {
      if (row == null) {
        fail(page.rsc, "verify-row", "no colon", "id:payload");
        continue;
      }
      try {
        JSON.parse(row);
      } catch (error) {
        fail(page.rsc, "verify-row-json", error.message, "JSON.parse");
      }
    }
    if (count(html, MUSIC_BUTTON) !== page.music) fail(page.html, "verify-music", count(html, MUSIC_BUTTON), page.music);
  }
  const missing = planned.get("404.html");
  if (count(missing, OLD_ORIGIN) !== 0) fail("404.html", "verify-origin", count(missing, OLD_ORIGIN), 0);
  if (count(missing, 'rel="canonical"') !== 0 || count(missing, "og:url") !== 0) {
    fail("404.html", "verify-no-canonical", "present", "absent");
  }
  const css = planned.get(CSS_PATH);
  if (!css.startsWith(NEW_FONTS)) fail(CSS_PATH, "verify-fonts", css.slice(0, 40), "new font block");
  if (css.includes("@font-face{font-family:Noto Sans TC")) fail(CSS_PATH, "verify-sans", "present", "deleted");
  if (count(css, NEW_MUSIC) !== 1 || count(css, OLD_MUSIC) !== 0) fail(CSS_PATH, "verify-music-clip", count(css, NEW_MUSIC), 1);
  if (count(css, NEW_TAB) !== 1) fail(CSS_PATH, "verify-music-position", count(css, NEW_TAB), 1);
  const hallJs = planned.get(HALL_JS);
  if (count(hallJs, HALL_JS_LIT) !== 0) fail(HALL_JS, "verify-hall", count(hallJs, HALL_JS_LIT), 0);
  if (count(htmlById.get("index"), HALL_HTML) !== 0) fail("index.html", "verify-hall", count(htmlById.get("index"), HALL_HTML), 0);
  if (count(htmlById.get("index"), 'class="hall-brand"') !== 1) fail("index.html", "verify-hall-class", "missing", 1);
}

function main() {
  if (OLD_FONTS.length !== 704) fail(CSS_PATH, "font-block-length", OLD_FONTS.length, 704);
  if (ROUTES.length !== 21) fail("routes", "count", ROUTES.length, 21);
  const targets = [
    ...PAGES.flatMap((page) => [page.html, page.rsc]),
    "404.html",
    CSS_PATH,
    HALL_JS,
  ];
  for (const rel of targets) mustExist(rel);
  if (errors.length) {
    for (const error of errors) console.error(`FAIL ${error}`);
    process.exit(1);
  }
  const originals = new Map();
  const planned = new Map();
  const notes = new Map();
  for (const page of PAGES) {
    const html = readFile(page.html);
    const rsc = readFile(page.rsc);
    originals.set(page.html, html);
    originals.set(page.rsc, rsc);
    const htmlPlan = patchHtml(page, html.text);
    const rscPlan = patchRsc(page, rsc.text);
    planned.set(page.html, htmlPlan.text);
    planned.set(page.rsc, rscPlan.text);
    notes.set(page.html, htmlPlan.edits);
    notes.set(page.rsc, rscPlan.edits);
  }
  const missing = readFile("404.html");
  originals.set("404.html", missing);
  const missingPlan = patch404(missing.text);
  planned.set("404.html", missingPlan.text);
  notes.set("404.html", missingPlan.edits);
  const css = readFile(CSS_PATH);
  originals.set(CSS_PATH, css);
  const cssPlan = patchCss(css.text);
  planned.set(CSS_PATH, cssPlan.text);
  notes.set(CSS_PATH, cssPlan.edits);
  const hallJs = readFile(HALL_JS);
  originals.set(HALL_JS, hallJs);
  const hallPlan = patchHallJs(hallJs.text);
  planned.set(HALL_JS, hallPlan.text);
  notes.set(HALL_JS, hallPlan.edits);
  if (!errors.length) verify(planned);
  if (errors.length) {
    for (const error of errors) console.error(`FAIL ${error}`);
    console.error("wrote nothing");
    process.exit(1);
  }
  const changed = [];
  for (const [rel, next] of planned) {
    if (next !== originals.get(rel).text) changed.push(rel);
  }
  if (CHECK) {
    if (!changed.length) {
      console.log("check ok: already patched, nothing to write");
      process.exit(0);
    }
    console.log(`check pending: ${changed.length} file(s)`);
    for (const rel of changed) console.log(`  ${rel}: ${(notes.get(rel) || []).join(", ") || "content"}`);
    process.exit(1);
  }
  if (!changed.length) {
    console.log("already patched: 0 files changed");
    process.exit(0);
  }
  for (const rel of changed) {
    const { eol } = originals.get(rel);
    const body = eol === "\r\n" ? planned.get(rel).replace(/\n/g, "\r\n") : planned.get(rel);
    fs.writeFileSync(path.join(ROOT, rel), body, "utf8");
  }
  console.log(`changed ${changed.length} file(s)`);
  for (const rel of changed) console.log(`  ${rel}: ${notes.get(rel).join(", ")}`);
}

main();
