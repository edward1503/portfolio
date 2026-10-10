import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const prefix = process.env.GITHUB_PAGES === "true" ? "/portfolio" : "";
const html = fs.readFileSync("out/index.html", "utf8");
const css = fs.readFileSync("app/globals.css", "utf8");
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, "All IDs must be unique");
for (const match of html.matchAll(/href="#([^"]+)"/g))
  assert(ids.includes(match[1]), `Missing anchor #${match[1]}`);
for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]*)/g)) {
  const url = match[1];
  assert(
    url.startsWith(prefix + "/"),
    `Asset must use configured base path: ${url}`,
  );
  const local = path.join("out", url.slice(prefix.length));
  assert(fs.existsSync(local), `Missing exported asset: ${url}`);
}
assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, "One main heading");
for (const match of html.matchAll(/aria-labelledby="([^"]+)"/g))
  for (const id of match[1].split(/\s+/))
    assert(ids.includes(id), `Missing accessible section heading #${id}`);
assert(
  html.includes('<link rel="canonical" href="https://edward1503.github.io/portfolio/"'),
  "Canonical public URL",
);
const structuredData = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/);
assert(structuredData, "Profile structured data");
assert.equal(JSON.parse(structuredData[1])["@type"], "Person", "Valid profile structured data");
assert(html.includes("Skip to content"), "Keyboard skip link");
assert(
  html.includes('aria-label="Primary navigation"'),
  "Named main navigation",
);
assert(
  html.includes("200-query dev pilot"),
  "Benchmark qualification retained",
);
assert(html.includes("full-support Recall@10"), "Benchmark metric retained");
assert(
  !html.includes("ScrollEffects"),
  "No hidden-content animation dependency",
);
assert(!css.includes("opacity: 0"), "Content is visible by default");
assert(css.includes("prefers-reduced-motion"), "Reduced-motion support");
assert(css.includes("focus-visible"), "Visible keyboard focus");
assert(css.includes("max-width: 700px"), "Mobile layout breakpoint");
const projectCount = (html.match(/class="project-card"/g) || []).length;
assert(projectCount > 0, "Selected projects are present");
assert.equal(
  (html.match(/<details\b/g) || []).length,
  projectCount,
  "Native technical detail disclosures",
);
assert.equal(
  (html.match(/<summary\b/g) || []).length,
  projectCount,
  "Accessible disclosure labels",
);
for (const tag of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g))
  assert(tag[0].includes("noopener noreferrer"), "External links use safe rel");
for (const tag of html.matchAll(/<img\b[^>]*>/g))
  assert(/alt="[^"]+"/.test(tag[0]), "Informative image alternative");
console.log(
  `PASS: exported assets, ${ids.length} anchors/IDs, headings, metadata, benchmark qualifiers, disclosures, and static accessibility checks (${prefix || "root"} base path)`,
);
