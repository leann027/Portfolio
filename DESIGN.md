---
name: Leandro Software Engineering Portfolio - DevKernel Dark
description: Sistema DevKernel Dark para un portfolio técnico de solo lectura. Fondo reactivo por canvas, terminal interactiva en el hero, catálogo de proyectos con esquemas en código y una matriz de tecnologías enlazada a los proyectos que las demuestran.
colors:
  # DevKernel Dark Canvas & Surfaces (Inspirado en Stitch)
  canvas: '#090D13'
  surface: '#0E141D'
  surface-alt: '#141B26'
  card: '#121924'
  card-hover: '#182232'
  border: '#202A3A'
  border-hover: '#34455F'

  # Syntax & Engineering Accents
  primary: '#58A6FF' # Cyan / Developer Blue
  primary-glow: 'rgba(88, 166, 255, 0.15)'
  secondary: '#3FB950' # Terminal Emerald / Success
  secondary-glow: 'rgba(63, 185, 80, 0.15)'
  purple: '#BC8CFF' # Lilac / Architecture
  purple-glow: 'rgba(188, 140, 255, 0.15)'
  amber: '#D29922' # Compilation Amber / Warnings
  amber-glow: 'rgba(210, 153, 34, 0.15)'
  rose: '#F85149' # Valgrind / Errors

  # Typography Tones
  text-primary: '#F0F6FC'
  text-muted: '#9BA7B6'
  text-dim: '#8B96A5'

  # Light Mode Equivalents (WCAG AA Compliant >= 4.5:1)
  light-canvas: '#F8FAFC'
  light-surface: '#FFFFFF'
  light-card: '#FFFFFF'
  light-border: '#E2E8F0'
  light-text-primary: '#0F172A'
  light-text-muted: '#475569'
  light-primary: '#1D4ED8'
  light-secondary: '#047857'
typography:
  display:
    fontFamily: 'Plus Jakarta Sans, Inter, system-ui, sans-serif'
    fontSize: 'clamp(2.5rem, 5vw, 4rem)'
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: '-0.03em'
  headline:
    fontFamily: 'Plus Jakarta Sans, Inter, system-ui, sans-serif'
    fontSize: '2rem'
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: '-0.02em'
  code:
    fontFamily: 'JetBrains Mono, monospace'
    fontSize: '0.8125rem'
    fontWeight: 500
    lineHeight: 1.5
  label:
    fontFamily: 'JetBrains Mono, monospace'
    fontSize: '0.6875rem'
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: '0.04em'
rounded:
  sm: '4px'
  md: '8px'
  lg: '12px'
  xl: '16px'
  full: '9999px'
components:
  reactive-canvas:
    physics: 'Interpolación suave (lerp 0.08) hacia coordenadas del cursor'
    interaction: 'Retícula de nodos enlazados con radio de influencia de 220px'
    motion-support: 'Desactivado automáticamente bajo prefers-reduced-motion'
  interactive-terminal:
    shell: 'zsh — leann027@portfolio-edge'
    tabs: ['novafy_audio_glsl.ts', 'valgrind_memcheck.c', 'fetch_projects.py', 'profile.json']
    features: 'Pestañas con navegación por flechas, salida coloreada por tokens y copia del comando con estado real de éxito o error'
  cli-quickfind:
    trigger: '⌘K / Ctrl+K o botón Buscar de la barra de navegación'
    commands: ['help', 'c-pointers', 'theme', 'clear', '<búsqueda por título, tecnología o lenguaje>']
  skills-evidence:
    layout: 'Lista agrupada (Lenguajes, Frameworks & UI, Herramientas & DevOps) sin tarjetas: nombre, nivel, descripción y proyectos'
    evidence: 'Cada tecnología enlaza a los proyectos cuyo technologies/languages la incluye; el clic abre su ProjectModal'
  modals:
    behavior: 'useExitTransition (fade-out de 160ms, el estado del padre es la única fuente de verdad) y useDialogBehavior (focus trap, Escape, bloqueo de scroll con contador compartido)'
---

# DevKernel Dark Design System

## 1. Filosofía de Diseño

Inspirado en la estética **DevKernel Dark** generada en Google Stitch para perfiles técnicos de ingeniería de software. Combina el rigor de una estación de trabajo de sistemas (terminal, editor de código, telemetría Git) con componentes web modernos, fluidos y de altísimo contraste.

## 2. Fondos Reactivos (Hardware-Accelerated Canvas)

Un sustrato interactivo implementado en HTML5 Canvas (`BackgroundAmbient.tsx`):

- Mapea el cursor en tiempo real calculando la proximidad a nodos de una retícula técnica a intervalos regulares.
- Dibuja conexiones tenues y pulsos de luz en azul cian (`#58A6FF`) y esmeralda (`#3FB950`).
- Respeta la accesibilidad desactivando el bucle de renderizado cuando el sistema solicita `prefers-reduced-motion`.

## 3. Toques Únicos de Demostración de Conocimientos

1. **Interactive Terminal Hero Widget:** Demuestra WebGL/audio, análisis de memoria en C con Valgrind y el pipeline de datos en Python mediante comandos ejecutables en un clic.
2. **CLI Quickfind (⌘K):** Paleta de comandos tipo terminal con búsqueda de proyectos, soporte de teclado y semántica de diálogo accesible.
3. **Matriz de tecnologías con evidencia:** Cada tecnología lista los proyectos donde se aplica, de modo que toda afirmación del perfil es verificable en un clic.
4. **Esquemas de proyecto en código (`ProjectVisual`):** Diagramas SVG/Tailwind por proyecto (heap y punteros en C, pipeline determinista, flujo de webhooks) en lugar de capturas.

## 4. Reglas de Contenido

- Cada dato aparece una sola vez: disponibilidad en el hero, ubicación en el hero, contacto en `#contacto`.
- Sin métricas sobre el propio sitio (porcentajes de tests, cumplimiento WCAG) presentadas como logros en la interfaz; esa evidencia vive en el proyecto `portfolio-hub` y en el repositorio.
- Sin etiquetas decorativas sobre los títulos de sección ni chapitas de conteo (`CATÁLOGO // 07`); el título y una descripción breve bastan.
