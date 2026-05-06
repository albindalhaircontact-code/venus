// Post-build helper for static hosts that don't auto-resolve `<dir>/index.html`
// (e.g. plain S3 + CloudFront with SPA fallback).
//
// Strategy:
//   1. Walk every `*.html` file in `out/`
//   2. Rewrite `href="/foo"` and `href="/foo/bar"` (extensionless internal links)
//      to `href="/foo.html"` and `href="/foo/bar.html"`
//   3. Skip `_next/*`, `#`, `mailto:`, `tel:`, external URLs, and links that already
//      have a file extension or query string fragment

import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = new URL("../out/", import.meta.url).pathname;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else if (e.isFile() && e.name.endsWith(".html")) files.push(full);
  }
  return files;
}

function rewriteHref(html) {
  // Match href|src="/path" where path doesn't contain ".", "?", "#", or start with "/_next"
  // (i.e. extensionless internal page links only)
  return html.replace(
    /(href|src)="(\/[a-z0-9][a-z0-9_\-\/]*)"/gi,
    (m, attr, path) => {
      if (path.startsWith("/_next/")) return m;
      if (path === "/favicon.ico" || path.endsWith(".ico") || path.endsWith(".png") || path.endsWith(".jpg")) return m;
      if (path === "/") return m;
      // extensionless internal route → append .html
      return `${attr}="${path}.html"`;
    }
  );
}

const files = await walk(ROOT);
let touched = 0;
for (const f of files) {
  const html = await readFile(f, "utf8");
  const rewritten = rewriteHref(html);
  if (rewritten !== html) {
    await writeFile(f, rewritten);
    touched++;
  }
}
console.log(`postbuild-flatten: rewrote ${touched}/${files.length} HTML files`);
