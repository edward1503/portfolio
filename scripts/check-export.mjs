import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const prefix = process.env.GITHUB_PAGES === "true" ? "/portfolio" : "";
const routes = ["", "work/vlearn/", "work/hotpotqa/", "work/air-quality/"];
const pages = routes.map((route) => ({ route, html: fs.readFileSync(path.join("out", route, "index.html"), "utf8") }));
let assets = 0;
for (const { route, html } of pages) {
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, route + ": unique IDs");
  for (const match of html.matchAll(/href="#([^"]+)"/g))
    assert(ids.includes(match[1]), route + ": missing anchor " + match[1]);
  for (const match of html.matchAll(/aria-labelledby="([^"]+)"/g))
    for (const id of match[1].split(/\s+/))
      assert(ids.includes(id), route + ": missing accessible label " + id);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, route + ": one main heading");
  assert.equal((html.match(/<main(?:\s|>)/g) || []).length, 1, route + ": one main landmark");
  assert(html.includes("Skip to content"), route + ": keyboard skip link");
  assert(html.includes('aria-label="Primary navigation"'), route + ": named navigation");
  const canonical = "https://edward1503.github.io/portfolio/" + route;
  assert(html.includes('<link rel="canonical" href="' + canonical + '"'), route + ": canonical URL");
  for (const match of html.matchAll(/(?:src|href)="(\/[^"#?]*)/g)) {
    const url = match[1];
    assert(url.startsWith(prefix + "/"), route + ": base path " + url);
    const local = path.join("out", decodeURIComponent(url.slice(prefix.length)));
    assert(fs.existsSync(local), route + ": missing export " + url);
    if (fs.statSync(local).isDirectory()) assert(fs.existsSync(path.join(local, "index.html")), route + ": invalid static route " + url);
    assets++;
  }
  for (const tag of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g))
    assert(tag[0].includes("noopener noreferrer"), route + ": external link rel");
  for (const tag of html.matchAll(/<img\b[^>]*>/g))
    assert(/alt="[^"]+"/.test(tag[0]), route + ": informative image alt");
  assert(html.includes("<dialog"), route + ": preview enlargement available");
}
const home = pages[0].html;
for (const id of ["projects", "about", "experience", "contact"]) assert(home.includes('id="' + id + '"'), "Home section " + id);
assert.equal((home.match(/class="work-card /g) || []).length, 3, "Three featured case studies");
assert.equal((home.match(/class="exploration-card"/g) || []).length, 3, "Three supporting projects");
assert(home.includes("7,405 test queries"), "Homepage benchmark context");
assert(pages[2].html.includes("51.75%") && pages[2].html.includes("60.08%"), "Source-backed test result");
assert(pages[2].html.includes("0.76s") && pages[2].html.includes("1.60s"), "Latency tradeoff retained");
assert(pages[1].html.includes("local development version"), "VLearn preview provenance");
assert(pages[3].html.includes("original architecture diagram"), "Architecture preview provenance");
const data = home.match(/<script type="application\/ld\+json">([^<]+)<\/script>/);
assert(data && JSON.parse(data[1])["@type"] === "Person", "Valid profile structured data");
const css = fs.readFileSync("app/globals.css", "utf8");
assert(css.includes("prefers-reduced-motion"), "Reduced motion support");
assert(css.includes("focus-visible"), "Visible keyboard focus");
assert(css.includes("max-width: 700px"), "Mobile breakpoint");
console.log("PASS: " + pages.length + " static pages, " + assets + " local links/assets, metadata, image alternatives, project provenance and benchmark context (" + (prefix || "root") + ")");
