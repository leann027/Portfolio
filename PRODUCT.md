# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Usuarios principales:** Reclutadores técnicos, líderes de ingeniería y responsables de selección que evalúan el perfil de Leandro (`@leann027`, Rosario, Argentina) para puestos de desarrollo de software Junior/SSR o prácticas profesionales.
- **Situación y tarea:** Revisan el portfolio en pocos minutos buscando evidencia verificable de fundamentos de ciencias de la computación (C, algoritmos, gestión de memoria, estructuras de datos), desarrollo modular en Python y capacidad de entrega en producción con tecnologías web modernas (React, TypeScript, CI/CD).

## Product Purpose

- **Qué hace:** Plataforma web interactiva de solo lectura que centraliza, filtra y documenta los proyectos de software personales y académicos de Leandro.
- **Por qué existe:** Convertir repositorios técnicos y proyectos académicos en casos de estudio claros y explorables que demuestren criterio de ingeniería, arquitectura limpia y buenas prácticas sin requerir que el evaluador clone o ejecute cada proyecto localmente.
- **Qué significa el éxito:** Que un reclutador o líder técnico identifique rápidamente el proyecto insignia (`portfolio-hub`), comprenda el rol y las habilidades demostradas en cada desarrollo, explore las especificaciones técnicas en los modales y contacte a Leandro por correo electrónico o GitHub.

## Positioning

- **Mecanismo diferenciador:** Un catálogo de ingeniería impulsado por un pipeline de datos determinista en Python (`data/projects_config.json` → `execution/fetch_projects.py` → `src/data/projects.json`) y validado mediante suites automatizadas (Python `unittest`, Vitest, `axe-core` y GitHub Actions CI/CD), combinando proyectos de bajo nivel en C y sistemas de escritorio en Python con una interfaz React/TypeScript moderna.

## Operating Context

- **Flujo de actualización y despliegue:** Los datos canónicos viven en `data/projects_config.json`, se normalizan y enriquecen con `npm run data:fetch` (`execution/fetch_projects.py`), se validan con `npm run data:test` y `npm test`, y se despliegan en GitHub Pages mediante `.github/workflows/deploy.yml` (desarrollo en rama `master`, publicación en `main`).
- **Entorno de evaluación:** Navegadores de escritorio y móviles (360px a 1280px+), tanto en modo claro como oscuro con persistencia en `localStorage` y respeto por las preferencias del sistema (`prefers-color-scheme` y `prefers-reduced-motion`).

## Capabilities and Constraints

- **Arquitectura de solo lectura (View-Only):** Cero formularios públicos de mutación de proyectos, edición en vivo o backends de persistencia; toda modificación del catálogo ocurre a través del pipeline de datos en el repositorio.
- **Stack técnico:** React 18, TypeScript 5.7, Vite 6, Tailwind CSS 3.4, Lucide Icons y Python 3.12 para el pipeline de datos.
- **Exploración interactiva:** Destacado de proyecto insignia (`FlagshipProject`), filtrado reactivo por categorías (`all`, `web`, `desktop`, `algorithms`, `automation`) con conteo de proyectos, búsqueda instantánea por título/tecnologías/lenguajes, diagramas esquemáticos renderizados en código (`ProjectVisual`) y modales de especificación técnica (`ProjectModal`).
- **Privacidad de repositorios académicos:** Los proyectos marcados con `isPrivate: true` (como entregas del Terciario Urquiza o Harvard CS50) jamás deben exponer enlaces directos al código fuente; deben mostrar explícitamente el aviso de repositorio académico/privado protegido.
- **Idioma:** Español como único idioma de la interfaz, documentación de proyectos y microcopy.

## Brand Commitments

- **Identidad profesional:** Leandro (`@leann027`), Desarrollador de Software en Rosario, Argentina (`leandro28rc@gmail.com`), estudiante de la Tecnicatura Superior en Desarrollo de Software (Terciario Urquiza) con formación en CS50 (Harvard University).
- **Voz y tono:** Técnico, estructurado, honesto y directo; enfocado en evidenciar arquitectura, decisiones técnicas y habilidades reales sin hipérboles ni métricas fabricadas.

## Evidence on Hand

- **Datos canónicos y proyectos reales (`data/projects_config.json` y `src/data/projects.json`):**
  1. `portfolio-hub`: Portfolio Interactivo & Motor de Proyectos (React, TypeScript, Tailwind CSS, Vite, Python, GitHub Actions) — público, con demo en vivo (`https://leann027.github.io/Portfolio/`) y repositorio (`https://github.com/leann027/Portfolio`).
  2. `proyges-software-2`: Sistema de Gestión de Depósito e Inventario (Python 3, Tkinter, POO, JSON, ReportLab) — académico/privado (Terciario Urquiza).
  3. `estructuras-datos-c`: Estructuras de Datos y Algoritmos en C (C, punteros, memoria dinámica, GCC) — académico/privado (Terciario Urquiza).
  4. `cs50-harvard`: Desafíos de Ciencias de la Computación CS50 (C, Python, SQL) — académico/privado (Harvard CS50).
  5. `n8n-automation`: Automatización e Integraciones con n8n (n8n, TypeScript, REST APIs, Webhooks, JSON) — público (`https://github.com/leann027/n8n-prueba`).
- **Representaciones visuales:** Esquemas técnicos SVG/Tailwind generados por código en `src/components/ProjectVisual.tsx` para cada `visualType`.
- **Ausencias que no deben fabricarse:** No existen testimonios de clientes, métricas de tráfico/usuarios inventadas, certificaciones no listadas ni enlaces de demo en vivo para proyectos de escritorio/consola o repositorios académicos privados.

## Product Principles

1. **Evidencia técnica sobre afirmaciones vacías:** Cada proyecto debe explicitar el rol desempeñado, la arquitectura implementada y las habilidades técnicas demostradas mediante hechos verificables o esquemas claros.
2. **Determinismo de extremo a extremo:** El contenido mostrado en la interfaz siempre proviene del contrato de datos validado por el pipeline en Python y verificado por pruebas automatizadas antes de compilar.
3. **Escaneabilidad inmediata para reclutadores:** La jerarquía funcional prioriza que quién evalúa entienda en segundos qué construye Leandro, cuál es su proyecto insignia y cómo filtrar el catálogo por área técnica.
4. **Respeto estricto por la integridad académica:** Los repositorios privados de formación superior exponen su arquitectura y aprendizajes sin filtrar código protegido.

## Accessibility & Inclusion

- **Estándar requerido:** Cumplimiento WCAG AA (contraste mínimo 4.5:1 para texto normal y 3:1 para texto grande/componentes tanto en modo claro como oscuro), verificado con pruebas automatizadas (`axe-core` con cero violaciones críticas o serias).
- **Navegación por teclado y semántica:** Enlace de salto al contenido principal ("Saltar al contenido principal"), estructura de regiones ARIA y encabezados jerárquicos, atrapado y restauración de foco en `ProjectModal` con cierre mediante `Escape`, y soporte completo para `@media (prefers-reduced-motion: reduce)`.
