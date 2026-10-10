# SOP: Portfolio Data Pipeline & Interactive Web Application

## Goal
Establish a deterministic and reproducible workflow to collect, normalize, validate, and present Leandro's software projects (from GitHub API, `gh` CLI, and local repositories) into a modern, interactive web portfolio.

---

## 3-Layer Architecture Allocation

### Layer 1: Directive (This Document)
- Defines requirements, contracts, execution scripts, expected schemas, and edge cases.

### Layer 2: Orchestration (Agent Reasoning)
- Trigger data fetching via deterministic scripts.
- Validate dataset integrity.
- Build and verify the frontend application.
- Present code review briefings with test outputs.

### Layer 3: Execution (Deterministic Code)
- `execution/fetch_projects.py`: Python CLI utility to fetch, merge, and normalize project metadata from GitHub and local curated configs.
- `src/`: React + TypeScript + Tailwind CSS web application.
- `tests/`: Automated tests (`pytest` for dataset verification and data pipeline; `vitest` for frontend components).

---

## Technical Specifications & Contracts

### 1. Inputs
- **GitHub Account**: `leann027`
- **Authentication**: `gh` CLI or optional `GITHUB_TOKEN` in `.env`
- **Curation / Overrides Config**: `data/projects_config.json` (defines which projects are featured, custom descriptions in Spanish, tags, screenshots, demo links, and visibility).
- **Local Fallback Repositories**: `../ProyGesSoftware2`, `../Estructura-de-datos-y-algoritmos-I`, `../CS50`, etc.

### 2. Execution Tools
- `python3 execution/fetch_projects.py`:
  - Fetches repository metadata from GitHub via `gh repo list --json` or GitHub REST API.
  - Merges with `data/projects_config.json` for customized descriptions, technologies, highlights, and demo links.
  - Normalizes schemas and writes the final output to `src/data/projects.json` (deliverable) and temporary cache to `.tmp/github_cache.json`.
- `npm run test`:
  - Runs UI unit tests with `vitest`.
- `pytest tests/`:
  - Runs data validation tests verifying schema, non-empty fields, valid URLs, and category tags.
- `npm run build`:
  - Compiles the static portfolio bundle into `dist/`.

### 3. Expected Output Schema (`src/data/projects.json`)
```json
[
  {
    "id": "proyges-software-2",
    "title": "Sistema de Gestión de Software 2",
    "shortDescription": "Sistema de gestión y control de inventario con interfaz gráfica y reportes PDF.",
    "fullDescription": "Proyecto final de Gestión de Software 2 para Terciario Urquiza. Desarrollado en Python con arquitectura orientada a objetos, persistencia JSON y generación automática de reportes PDF.",
    "category": "desktop", // "desktop" | "web" | "algorithms" | "automation" | "academic"
    "languages": ["Python"],
    "technologies": ["Python", "Tkinter", "JSON", "ReportLab"],
    "githubUrl": "https://github.com/leann027/ProyGesSoftware2",
    "demoUrl": null,
    "featured": true,
    "academic": true,
    "institution": "Terciario Urquiza",
    "updatedAt": "2026-10-10"
  }
]
```

---

## Edge Cases & Mitigation Strategies

1. **Private Repositories on GitHub**:
   - *Issue*: Key projects (like Urquiza tertiary projects) are private on GitHub. Unauthenticated visitors to the public portfolio won't be able to open private GitHub links.
   - *Mitigation*: The curation config allows specifying whether a project link should display a "Repositorio Privado / Académico" badge, provide a demo/video/screenshots, or link to GitHub only if made public.
2. **GitHub API Rate Limiting**:
   - *Issue*: 60 unauthenticated requests/hour limit on GitHub REST API.
   - *Mitigation*: The execution script relies primarily on authenticated `gh` CLI (already logged in with valid token in keyring) or caches responses in `.tmp/github_cache.json`.
3. **Missing or Incomplete Repository Descriptions**:
   - *Issue*: Some repos lack descriptions or tags on GitHub.
   - *Mitigation*: `data/projects_config.json` acts as the source of truth for rich descriptions, categories, and highlights, gracefully falling back to GitHub metadata.
4. **Responsive Mobile & Performance Considerations**:
   - *Issue*: Portfolios viewed on mobile devices require touch-friendly filters and modals.
   - *Mitigation*: Mobile-first Tailwind CSS styling, responsive grid layout, and accessible modal navigation with ESC / outside click dismissal.
5. **Node.js 22+ Experimental LocalStorage Sandbox Quirks**:
   - *Issue*: Running tests or headless Node with unconfigured localStorage flags throws `SecurityError: Cannot initialize local storage without a --localstorage-file path`.
   - *Mitigation*: The React application wraps all `localStorage` access in defensive try/catch blocks with state fallbacks, and the Vitest test environment provides an in-memory mock in `tests/setup.ts`.
6. **Extensible Project Onboarding**:
   - *Procedure*: To add future projects, add an entry to `data/projects_config.json`, run `npm run data:fetch` (or let GitHub Actions run it on git push), and verify with `npm run data:test` and `npm test`.


