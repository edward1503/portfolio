# Edward Portfolio

Portfolio of Nguyễn Đôn Đức (Edward), an AI researcher and engineer working on retrieval, LLM applications, adaptive learning, and quantitative research.

**Live site:** https://edward1503.github.io/portfolio/

## Design and content

The redesigned site takes cues from Dennis Snellenberg’s personal presence and typography, Seán Halpin’s visual project gallery, and Rauno Freiberg’s restrained interactions. Charcoal, white, cobalt, and pastel project surfaces frame the original portrait and real project artifacts. Inter and Space Grotesk are self-hosted with their SIL Open Font License files in `app/fonts/`.

Profile, project summaries, education, experience, skills, and honors live in `lib/profile.js`. Three featured projects have dedicated static case studies under `/work/`; three supporting projects link to their repositories. Original images can be enlarged in native modal dialogs. HotpotQA also offers a benchmark/console preview switch.

Biographical information was reconciled with the active LaTeX sections and the rendered CV in `D:\VSCODE\RESUME` on October 10, 2026. This includes the VinUniversity MSc starting September 2026, the Research Assistant role at CAIR, and TOEFL C1. Commented-out template entries are not treated as current resume information.

GitHub project descriptions were reviewed against repository documentation and implementation on October 10, 2026. VLearn identifies the team context and documented Full-stack & DevOps lead role. Preview provenance and evaluation context are stated on the case-study pages.

### Real preview assets

| Local asset | Source and scope |
| --- | --- |
| `public/portrait.jpg` | Original personal photograph. |
| `public/projects/vlearn-interface.png` | Unmodified public-facing development interface from `D:\VSCODE\VINAI\project-2\frontend\.ai-log\welcome-education-blue-wait.png`. The local checkout remote is `a20-ai-thuc-chien/project-2`; this is a later development phase than the earlier linked public team repository. Contains no learner records. |
| `public/projects/retrieval-console.png` | [Original repository screenshot](https://github.com/edward1503/vdt-meeting-search/blob/a207b9dc2fa490293aea10e7a9893fa3c788d647/output/playwright/status-compact-v2-1366x768.png), showing a **nano corpus** configuration. |
| `public/projects/retrieval-benchmark.png` | [Original benchmark chart](https://github.com/edward1503/vdt-meeting-search/blob/a207b9dc2fa490293aea10e7a9893fa3c788d647/submission/slide_assets/03_main_benchmark_full_support.png). Full-support Recall@10, **7,405 `beir/hotpotqa/test` queries**: baseline 51.75%, bridge-aware 60.08%; p95 latency 0.76s vs 1.60s. Verified against the [baseline JSON](https://github.com/edward1503/vdt-meeting-search/blob/a207b9dc2fa490293aea10e7a9893fa3c788d647/evaluation/results/hotpotqa_full/test_full/tv_hybrid_test_full.json) and [bridge-aware JSON](https://github.com/edward1503/vdt-meeting-search/blob/a207b9dc2fa490293aea10e7a9893fa3c788d647/evaluation/results/hotpotqa_full/test_full/tv_bridge_title_entities_rrf_beam1_terms6_test_full.json). This replaces the older homepage dev-pilot result. |
| `public/projects/air-quality-architecture.png` | [Original architecture artifact](https://res.cloudinary.com/dptjhpkmv/image/upload/v1776009361/AWS-Project-CLF-Trang-2.drawio_1_im4ck4.png) linked in the project README. This is an architecture diagram, not a deployed dashboard screenshot. |

| Project | Reviewed source |
| --- | --- |
| VLearn | [Team and architecture](https://github.com/edward1503/vlearn-adaptive/blob/5be3df08f04396545e6283b5adb774a85b490e72/README.md) |
| Vietnamese Legal RAG | [Project overview](https://github.com/edward1503/Data-Science-AI-Engineering-Personal-Projects/blob/fffb5bac4824efa83264e1c55db50c056d6fe276/Agentic%20RAG%20in%20Vietnamese%20Law%20Documents/README.md), [agent routing](https://github.com/edward1503/Data-Science-AI-Engineering-Personal-Projects/blob/fffb5bac4824efa83264e1c55db50c056d6fe276/Agentic%20RAG%20in%20Vietnamese%20Law%20Documents/src/agents/rag_agent.py) |
| Air Quality Pipeline | [Project overview](https://github.com/edward1503/Data-Science-AI-Engineering-Personal-Projects/blob/fffb5bac4824efa83264e1c55db50c056d6fe276/AWS%20Data%20Pipeline/README.md), [quality checks](https://github.com/edward1503/Data-Science-AI-Engineering-Personal-Projects/blob/fffb5bac4824efa83264e1c55db50c056d6fe276/AWS%20Data%20Pipeline/lamdas/quality_data/lamda_function.py), [orchestration](https://github.com/edward1503/Data-Science-AI-Engineering-Personal-Projects/blob/fffb5bac4824efa83264e1c55db50c056d6fe276/AWS%20Data%20Pipeline/step_functions/pipeline_orchestation.json) |
| Explainable credit risk | [Team and project overview](https://github.com/edward1503/xAI-credit-risk/blob/8d6bf56f6c4aa093ee085931a6c0b71e44ffd20f/README.md), [explanation API](https://github.com/edward1503/xAI-credit-risk/blob/8d6bf56f6c4aa093ee085931a6c0b71e44ffd20f/api/app.py) |
| FPT time-series forecasting | [Research overview](https://github.com/edward1503/Data-Science-AI-Engineering-Personal-Projects/blob/fffb5bac4824efa83264e1c55db50c056d6fe276/Long-Time%20Series-Forecast%20with%20RevIN%20and%20Regime%20Switch/README.md), [experiment notebook](https://github.com/edward1503/Data-Science-AI-Engineering-Personal-Projects/blob/fffb5bac4824efa83264e1c55db50c056d6fe276/Long-Time%20Series-Forecast%20with%20RevIN%20and%20Regime%20Switch/FPT_LTSF_GridSearch_Extended.ipynb) |

All content is visible by default. The mobile menu, preview switch, and native dialogs support keyboard interaction. The site includes visible focus, a skip link, labeled sections, responsive layouts, and reduced-motion support. Canonical, Open Graph, Twitter, and Person metadata are included. Case studies have their own titles, canonical URLs, and preview images.

### Motion

Headlines and content reveal once as they enter the viewport, using Intersection Observer and the Web Animations API. Desktop adds browser-native scroll timelines for the hero, magnetic controls, and a restrained preview tilt. Pointer updates are scheduled only during hover; there is no JavaScript scroll listener or idle animation loop. Mobile uses shorter 14px reveals, skips magnetic/tilt/parallax, and removes backdrop blur. Reduced-motion preferences disable these effects, including when changed at runtime. Content remains readable without JavaScript; focus cancels an entering animation, and route changes clean up observers, animations, and pointer listeners.

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

The build exports to `out/`, with `/portfolio` as its base path and trailing-slash routes for static hosting. The export check verifies all four pages, local asset and route destinations, unique IDs and anchors, headings, labels, metadata, preview alternatives, provenance, and benchmark qualifiers. It does not replace visual or interactive browser review.

For a root-path build in PowerShell, run `Remove-Item Env:GITHUB_PAGES -ErrorAction SilentlyContinue` before building and checking. This static export can be served by a static HTTP server; `next start` does not serve exported sites.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`. The workflow installs from the lockfile, builds for GitHub Pages, runs the export check, and publishes `out/` to `gh-pages`. GitHub Pages then runs its own deployment workflow. The repository's Pages source must remain `gh-pages` at `/`.

Only the application source, original portrait, project artifacts, and licensed local fonts are committed. Imported rebuild copies, archives, obsolete interface files, local build artifacts, and browser review files are removed after verification. Ignore rules also prevent temporary files from being committed in later runs.
