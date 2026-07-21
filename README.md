# StudentRex

[![Static site CI](https://github.com/danieltalbert/studentrex-rexburg-guide/actions/workflows/pages.yml/badge.svg)](https://github.com/danieltalbert/studentrex-rexburg-guide/actions/workflows/pages.yml)
[![Live site](https://img.shields.io/badge/live-GitHub%20Pages-2ea44f)](https://danieltalbert.github.io/studentrex-rexburg-guide/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0b315d.svg)](LICENSE)

StudentRex is a responsive, accessible activity finder for students and residents around Rexburg, Idaho. It presents a small curated dataset with category filters, persistent preferences, local code-authored illustrations, and links to primary sources for time-sensitive trip details.

![StudentRex social preview](assets/social-preview.png)

## Highlights

- Mobile-first layout with keyboard-accessible navigation and filter controls.
- Data-driven activity cards rendered from a reusable ES module.
- Four activity categories and a saved filter preference via `localStorage`.
- Official-source links and a visible freshness disclaimer for hours, fees, access, and seasonal conditions.
- Zero third-party image hotlinks: every illustration is a repository-native SVG.
- Node's built-in test runner verifies dataset structure, source URLs, local assets, and filter behavior.

## Run locally

```powershell
python -m http.server 8000
```

Open `http://localhost:8000`. To run checks:

```powershell
npm test
npm run check
```

## Project structure

```text
index.html          landing page
activities.html     filterable discovery page
scripts/            activity data and interaction logic
styles/             responsive visual system
assets/             code-authored SVG illustrations and preview
tests/              data and filtering regression tests
docs/               original planning artifacts and wireframes
```

## Content note

Listings were reviewed in July 2026 against official or first-party sources. StudentRex is a discovery aid, not an authoritative schedule; visitors should follow each card's source link before traveling.

## Provenance and license

The project was extracted from the `wdd131-talbert` coursework repository with its path history intact, then prepared as a standalone portfolio application. Original code, documentation, and SVG artwork are licensed under the [MIT License](LICENSE).
