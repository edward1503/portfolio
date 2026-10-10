# Edward Portfolio

Portfolio of Nguyễn Đôn Đức (Edward), an AI researcher and engineer working on retrieval, LLM applications, adaptive learning, and quantitative research.

**Live site:** https://edward1503.github.io/portfolio/

## Design and content

The site follows the downloaded editorial rebuild: warm ivory, forest green, serif headlines, compact navigation, and selected work before experience and research. It uses a local portrait and system fonts, so viewing the page does not require an external font or image service.

Profile, project summaries, education, experience, skills, and honors live in `lib/profile.js`. Project diagrams are illustrative system overviews. The HotpotQA result is labeled as a **200-query dev pilot, full-support Recall@10**, with a link to the evaluation record.

Biographical information was reconciled with the active LaTeX sections and the rendered CV in `D:\VSCODE\RESUME` on October 10, 2026. This includes the VinUniversity MSc starting September 2026, the Research Assistant role at CAIR, and TOEFL C1. Commented-out template entries are not treated as current resume information.

All content is visible by default. Technical details use native disclosures, with keyboard focus, a skip link, labeled sections, responsive layouts, and reduced-motion support. Canonical, Open Graph, Twitter, and Person metadata are included.

## Local development

Use Node.js 22 to match GitHub Actions.

```powershell
npm ci
npm run dev
```

Open http://localhost:3000. Stop the development server before producing a build.

## Build and check GitHub Pages

```powershell
$env:GITHUB_PAGES = 'true'
npm run build
npm run test:export
```

For macOS/Linux:

```sh
GITHUB_PAGES=true npm run build
GITHUB_PAGES=true npm run test:export
```

The build exports to `out/`, with `/portfolio` as its base path. The export check verifies local asset destinations, unique IDs and anchors, section labels, metadata, benchmark qualifiers, and native disclosures. It does not replace visual or interactive browser review.

For a root-path build in PowerShell, run `Remove-Item Env:GITHUB_PAGES -ErrorAction SilentlyContinue` before building and checking. This static export can be served by a static HTTP server; `next start` does not serve exported sites.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`. The workflow installs from the lockfile, builds for GitHub Pages, runs the export check, and publishes `out/` to `gh-pages`. GitHub Pages then runs its own deployment workflow. The repository's Pages source must remain `gh-pages` at `/`.

Only the integrated application source and local portrait are committed. Imported rebuild copies, archives, old empty asset/component directories, local build artifacts, and browser review files are removed after verification. Ignore rules also prevent these temporary files from being committed in later runs.
