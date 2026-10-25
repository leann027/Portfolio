---
name: Leandro Software Engineering Portfolio - DevKernel Dark
description: Rediseño técnico de alto nivel basado en la arquitectura DevKernel Dark y Technical Glass Minimalism de Stitch, con fondos interactivos reactivos por hardware, terminal interactivo en vivo, matriz de actividad Git y visualizador de arquitectura de memoria en C y pipelines Python.
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
    fontFamily: 'Inter, system-ui, sans-serif'
    fontSize: 'clamp(2.5rem, 5vw, 4rem)'
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: '-0.03em'
  headline:
    fontFamily: 'Inter, system-ui, sans-serif'
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
    tabs: ['valgrind_memcheck.c', 'profile.json', 'fetch_projects.py']
    features: 'Ejecución interactiva con simulación de heap allocation y Valgrind 0 leaks'
  cli-quickfind:
    trigger: '⌘K / Ctrl+K o clic en botón de búsqueda'
    commands: ['help', 'projects', 'c-pointers', 'skills', 'theme', 'clear']
  architecture-visualizer:
    modes: ['Gestión de Memoria en C', 'Pipeline Python Determinista', 'POO & Tkinter']
  activity-heatmap:
    matrix: '52 semanas x 7 días con 5 niveles de luminancia'
    telemetry: 'Racha activa, commits anuales y tasa de aprobación de pruebas'
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

1. **Interactive Terminal Hero Widget:** Demuestra dominio de Valgrind, análisis de memoria dinámica en C y pipelines de automatización en Python con comandos ejecutables en un solo clic.
2. **CLI Quickfind (⌘K):** Buscador tipo terminal y paleta de comandos interactiva con soporte de teclado y accesibilidad aria.
3. **Inspección de Arquitectura de Memoria (Stack vs Heap):** Visualización interactiva de nodos enlazados, punteros y desasignación limpia para evitar dangling pointers y memory leaks.
4. **Matriz Anual de Actividad Git:** Mapa de calor de 52 semanas con 5 niveles de luminancia y tooltips interactivos.
