# Portfolio de Software — Leandro (@leann027)

[![Test & Deploy](https://github.com/leann027/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/leann027/Portfolio/actions/workflows/deploy.yml)

Catálogo interactivo de mis proyectos de software: aplicaciones web, sistemas de escritorio en Python, algoritmos y estructuras de datos en C y automatizaciones. Cada proyecto documenta el rol que tuve, la arquitectura y las decisiones técnicas, sin necesidad de clonar ni ejecutar nada.

**Demo:** [leann027.github.io/Portfolio](https://leann027.github.io/Portfolio/)

---

## Qué incluye

- **Catálogo filtrable.** Búsqueda instantánea por título, tecnología o lenguaje y filtros por categoría (Web, Escritorio, Algoritmos, Automatización).
- **Fichas técnicas.** Un modal por proyecto con arquitectura, aspectos destacados, competencias y enlaces al código y a la demo cuando son públicos.
- **Esquemas generados en código.** Cada proyecto tiene un diagrama SVG/Tailwind propio (`ProjectVisual`): heap y punteros en C, el pipeline de datos, flujos de webhooks, etc.
- **Tecnologías con evidencia.** Cada tecnología enlaza a los proyectos que la usan, calculado a partir de los datos del catálogo.
- **Terminal interactiva.** Widget en el hero con comandos reales de los proyectos (WebGL/audio, Valgrind sobre C, el pipeline en Python).
- **Paleta de comandos (⌘K / Ctrl+K).** Búsqueda tipo terminal con los comandos `help`, `projects`, `skills`, `c-pointers`, `theme` y `clear`.
- **Accesibilidad.** Objetivo WCAG AA en modo claro y oscuro: foco atrapado y restaurado en los diálogos, cierre con `Escape`, enlace para saltar al contenido y soporte de `prefers-reduced-motion`.
- **Repositorios académicos protegidos.** Los proyectos marcados como privados muestran su arquitectura pero nunca enlazan al código fuente.

## Arquitectura

El contenido no se edita en la interfaz: sale de un pipeline de datos determinista que se valida antes de compilar.

```
data/projects_config.json      fuente canónica, editada a mano
        │
        ▼
execution/fetch_projects.py    normaliza y enriquece con metadatos de GitHub (gh CLI, con caché)
        │
        ▼
src/data/projects.json         contrato de datos tipado que consume la app
        │
        ▼
React + TypeScript (Vite)      sitio estático desplegado en GitHub Pages
```

Si `gh` no está disponible o falla, el script continúa con los datos del config, así que el build no depende de la red.

## Stack

| Área             | Tecnologías                                                  |
| ---------------- | ------------------------------------------------------------ |
| Frontend         | React 18, TypeScript 5, Vite 6, Tailwind CSS 3, Lucide Icons |
| Pipeline de datos | Python 3.12                                                 |
| Calidad          | Vitest, React Testing Library, axe-core, `unittest`, ESLint, Prettier |
| CI/CD y hosting  | GitHub Actions, GitHub Pages                                 |

## Estructura

```
Portfolio/
├── data/projects_config.json     # Fuente canónica de proyectos, skills y perfil
├── execution/fetch_projects.py   # Pipeline de normalización
├── src/
│   ├── components/               # Navbar, Hero, catálogo, modales, terminal, skills
│   ├── hooks/useModal.ts         # Transición de salida y comportamiento accesible de diálogos
│   ├── data/projects.json        # Dataset generado por el pipeline
│   ├── types/                    # Contratos TypeScript
│   └── App.tsx
├── tests/
│   ├── components.test.tsx       # Integración de UI
│   ├── a11y.test.tsx             # Auditorías axe-core en claro, oscuro, modal y terminal
│   └── test_projects_data.py     # Esquema e integridad de datos
└── .github/workflows/deploy.yml  # Tests, build y despliegue
```

## Desarrollo local

Requisitos: Node.js 22 y Python 3.12.

```bash
git clone https://github.com/leann027/Portfolio.git
cd Portfolio
npm install
npm run dev
```

| Comando                 | Qué hace                                         |
| ----------------------- | ------------------------------------------------ |
| `npm run dev`           | Servidor de desarrollo con HMR                   |
| `npm run build`         | Chequeo de tipos y build de producción           |
| `npm test`              | Tests de UI y accesibilidad (Vitest)             |
| `npm run lint`          | ESLint sin warnings permitidos                   |
| `npm run format:check`  | Verificación de formato con Prettier             |
| `npm run data:fetch`    | Regenera `src/data/projects.json` desde el config |
| `npm run data:test`     | Tests de integridad de datos en Python           |

### Agregar un proyecto

1. Agregar la entrada en `data/projects_config.json`.
2. Ejecutar `npm run data:fetch` y `npm run data:test`.
3. Si el proyecto tiene un `visualType` nuevo, agregar su esquema en `src/components/ProjectVisual.tsx`.

## Integración y despliegue

Cada push a `main` ejecuta el workflow [`deploy.yml`](.github/workflows/deploy.yml):

1. Regenera los datos con el pipeline en Python y corre sus tests.
2. Instala dependencias y ejecuta ESLint, Prettier y Vitest (incluidas las auditorías de accesibilidad).
3. Compila el sitio y lo publica en GitHub Pages.

Si cualquier paso falla, no se despliega.

## Contacto

- **Email:** [leandro28rc@gmail.com](mailto:leandro28rc@gmail.com)
- **GitHub:** [@leann027](https://github.com/leann027)
- **Ubicación:** Rosario, Argentina
