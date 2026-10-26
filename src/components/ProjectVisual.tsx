import React from 'react';
import { ProjectVisualType } from '../types/project';

interface ProjectVisualProps {
  visualType?: ProjectVisualType | string;
  projectId: string;
  title: string;
  className?: string;
}

/**
 * ProjectVisual
 * Representación visual vectorial y esquemática diseñada en SVG y Tailwind CSS.
 * Cada proyecto cuenta con un diagrama técnico personalizado y estilizado
 * acorde a la paleta Lo-Fi cálida y tonos pastel, transmitiendo el dominio de ingeniería.
 */
export const ProjectVisual: React.FC<ProjectVisualProps> = ({
  visualType,
  title,
  className = '',
}) => {
  switch (visualType) {
    case 'your-music-visualizer':
      return (
        <div
          role="img"
          aria-label={`Visualización 3D y análisis de audio para ${title}`}
          className={`relative overflow-hidden rounded-2xl bg-earth-sand/35 dark:bg-earth-coffeeSubtle/60 border border-earth-sand/80 dark:border-earth-coffeeBorder p-4 sm:p-5 flex flex-col justify-between gap-3 bg-blueprint-grid ${className}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-earth-sand/70 dark:border-earth-coffeeBorder pb-2.5">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-brand-primary animate-pulse"
                aria-hidden="true"
              />
              <span className="text-[11px] font-bold text-earth-ink-800 dark:text-stone-200 font-mono">
                WebGL 3D · Novafy Engine
              </span>
            </div>
            <span className="px-2 py-0.5 rounded bg-swatch-lavender-bg text-swatch-lavender-text dark:bg-swatch-lavender-border/20 dark:text-swatch-lavender-darkText border border-swatch-lavender-border/50 font-mono text-[10px] font-semibold">
              Three.js + R3F
            </span>
          </div>

          {/* Central 3D Cosmos & Audio Waveform Preview */}
          <div className="p-3 rounded-xl bg-earth-linen/95 dark:bg-earth-coffeeCard/95 border border-earth-sand/70 dark:border-earth-coffeeBorder flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-wider">
              <span className="font-bold text-earth-ink-800 dark:text-stone-200">
                Espectro FFT 64 Bandas · Audio Reactivo
              </span>
              <span className="text-blue-700 dark:text-brand-primary font-semibold">
                60 FPS GPU
              </span>
            </div>

            {/* Stylized Simulated FFT Equalizer Bars */}
            <div
              className="flex items-end justify-between gap-1 h-12 px-2 py-1 bg-slate-900/5 dark:bg-black/30 rounded-lg"
              aria-hidden="true"
            >
              {[35, 60, 85, 50, 95, 70, 100, 80, 55, 90, 65, 80, 45, 60].map((h, i) => (
                <div
                  key={i}
                  className="w-full rounded-xs transition-all duration-300"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i === 6 ? '#58a6ff' : i % 2 === 0 ? '#3fb950' : '#bc8cff',
                    opacity: 0.85,
                  }}
                />
              ))}
            </div>

            {/* Orbital Parameters & Pipeline Row */}
            <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[9px]">
              <div className="p-1.5 rounded-lg bg-earth-sand/50 dark:bg-earth-coffeeSubtle border border-earth-sand/60 dark:border-earth-coffeeBorder">
                <span className="text-earth-ink-600 dark:text-stone-400 block font-medium">
                  Singularidad
                </span>
                <span className="font-bold text-earth-ink-900 dark:text-brand-primary">
                  GLSL Shader
                </span>
              </div>
              <div className="p-1.5 rounded-lg bg-earth-sand/50 dark:bg-earth-coffeeSubtle border border-earth-sand/60 dark:border-earth-coffeeBorder">
                <span className="text-earth-ink-600 dark:text-stone-400 block font-medium">
                  Cinemática
                </span>
                <span className="font-bold text-emerald-700 dark:text-brand-secondary">
                  GSAP Arc
                </span>
              </div>
              <div className="p-1.5 rounded-lg bg-earth-sand/50 dark:bg-earth-coffeeSubtle border border-earth-sand/60 dark:border-earth-coffeeBorder">
                <span className="text-earth-ink-600 dark:text-stone-400 block font-medium">
                  Audio Engine
                </span>
                <span className="font-bold text-purple-700 dark:text-brand-purple">Web Audio</span>
              </div>
            </div>
          </div>

          {/* Footer Verification Strip */}
          <div className="pt-2 border-t border-earth-sand/60 dark:border-earth-coffeeBorder flex items-center justify-between text-[9px] font-mono text-earth-ink-700 dark:text-stone-300">
            <span>React 19 · Next.js 16 · Three.js</span>
            <span className="text-emerald-700 dark:text-swatch-mint-darkText font-semibold">
              ✓ Desplegado en Vercel
            </span>
          </div>
        </div>
      );

    case 'algo-notebook':
      return (
        <div
          role="img"
          aria-label={`Laboratorio de algoritmos para ${title}`}
          className={`relative overflow-hidden rounded-2xl bg-earth-sand/35 dark:bg-earth-coffeeSubtle/60 border border-earth-sand/80 dark:border-earth-coffeeBorder p-4 sm:p-5 flex flex-col justify-between gap-3 bg-blueprint-grid ${className}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-earth-sand/70 dark:border-earth-coffeeBorder pb-2.5">
            <span className="text-[11px] font-bold text-earth-ink-800 dark:text-stone-200 font-mono">
              Engineering Lab · DSA Visualizer
            </span>
            <span className="px-2 py-0.5 rounded bg-swatch-lemon-bg text-swatch-lemon-text dark:bg-swatch-lemon-border/20 dark:text-swatch-lemon-darkText border border-swatch-lemon-border/50 font-mono text-[10px] font-semibold">
              C99 & Python
            </span>
          </div>

          {/* Dual Code / Visual Comparison */}
          <div className="p-3 rounded-xl bg-earth-linen/95 dark:bg-earth-coffeeCard/95 border border-earth-sand/70 dark:border-earth-coffeeBorder space-y-2">
            <div className="flex items-center justify-between text-[9px] font-mono text-earth-ink-600 dark:text-stone-300">
              <span className="font-bold text-earth-ink-800 dark:text-stone-200">
                Sincronización Políglota de Algoritmos
              </span>
              <span className="text-emerald-700 dark:text-swatch-mint-darkText font-semibold">
                rAF 60 FPS
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
              <div className="p-2 rounded-lg bg-earth-sand/40 dark:bg-earth-coffeeSubtle border border-earth-sand/60 dark:border-earth-coffeeBorder">
                <div className="text-[9px] text-blue-800 dark:text-swatch-sky-darkText font-bold mb-1">
                  C (Bajo Nivel)
                </div>
                <div className="text-earth-ink-800 dark:text-stone-200 text-[10px]">
                  <code>Node* next;</code>
                  <div className="text-[9px] text-earth-ink-600 dark:text-stone-400">
                    malloc / free
                  </div>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-earth-sand/40 dark:bg-earth-coffeeSubtle border border-earth-sand/60 dark:border-earth-coffeeBorder">
                <div className="text-[9px] text-amber-800 dark:text-swatch-peach-darkText font-bold mb-1">
                  Python 3 (POO)
                </div>
                <div className="text-earth-ink-800 dark:text-stone-200 text-[10px]">
                  <code>self.next = node</code>
                  <div className="text-[9px] text-earth-ink-600 dark:text-stone-400">
                    Garbage Collector
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Verification Strip */}
          <div className="pt-2 border-t border-earth-sand/60 dark:border-earth-coffeeBorder flex items-center justify-between text-[9px] font-mono text-earth-ink-700 dark:text-stone-300">
            <span>React 19 · Vite · Tailwind · PWA</span>
            <span className="text-emerald-700 dark:text-swatch-mint-darkText font-semibold">
              ✓ Traza Paso a Paso
            </span>
          </div>
        </div>
      );

    case 'portfolio-hub':
      return (
        <div
          role="img"
          aria-label={`Esquema arquitectónico de ${title}`}
          className={`relative overflow-hidden rounded-2xl bg-earth-sand/35 dark:bg-earth-coffeeSubtle/60 border border-earth-sand/80 dark:border-earth-coffeeBorder p-4 sm:p-5 flex flex-col justify-between gap-3 bg-blueprint-grid ${className}`}
        >
          {/* Browser header wireframe */}
          <div className="flex items-center justify-between border-b border-earth-sand/70 dark:border-earth-coffeeBorder pb-2.5">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-swatch-rose/70 dark:bg-swatch-rose/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-swatch-butter/90 dark:bg-swatch-butter/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-swatch-mint/80 dark:bg-swatch-mint/60" />
            </div>
            <div className="px-3 py-0.5 rounded-md bg-earth-linen dark:bg-earth-coffeeCard text-[10px] font-mono font-semibold text-earth-ink-700 dark:text-stone-300 border border-earth-sand/60 dark:border-earth-coffeeBorder">
              leann027.dev/portfolio
            </div>
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full bg-swatch-mint-text/80 dark:bg-swatch-mint/80 animate-pulse"
            />
          </div>

          {/* Deterministic Data Pipeline Row */}
          <div className="p-2.5 rounded-xl bg-earth-linen/90 dark:bg-earth-coffeeCard/90 border border-earth-sand/70 dark:border-earth-coffeeBorder">
            <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-wider text-earth-ink-600 dark:text-stone-300 mb-1.5">
              <span className="font-bold text-earth-ink-800 dark:text-stone-200">
                Pipeline Determinista de Datos
              </span>
              <span className="text-swatch-mint-text dark:text-swatch-mint-darkText font-semibold">
                Build-Time Sync
              </span>
            </div>
            <div className="flex items-center justify-between gap-1 text-[9px] sm:text-[10px] font-mono">
              <span className="px-1.5 sm:px-2 py-1 rounded-lg bg-earth-sand/50 dark:bg-earth-coffeeSubtle text-earth-ink-800 dark:text-stone-200 whitespace-nowrap">
                config.json
              </span>
              <span
                className="text-earth-darkMocha dark:text-swatch-lavender-darkText font-bold shrink-0"
                aria-hidden="true"
              >
                →
              </span>
              <span className="px-1.5 sm:px-2 py-1 rounded-lg bg-swatch-mint-bg dark:bg-swatch-mint-border/15 text-swatch-mint-text dark:text-swatch-mint-darkText font-semibold whitespace-nowrap border border-swatch-mint-border/40">
                fetch_projects.py
              </span>
              <span
                className="text-earth-darkMocha dark:text-swatch-lavender-darkText font-bold shrink-0"
                aria-hidden="true"
              >
                →
              </span>
              <span className="px-1.5 sm:px-2 py-1 rounded-lg bg-earth-sand/50 dark:bg-earth-coffeeSubtle text-earth-ink-800 dark:text-stone-200 whitespace-nowrap">
                projects.json
              </span>
            </div>
          </div>

          {/* Architecture diagram wireframe */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            <div className="min-w-0 px-1.5 py-2.5 sm:p-2.5 rounded-xl bg-swatch-lavender-bg dark:bg-swatch-lavender-border/15 border border-swatch-lavender-border/60 flex flex-col justify-center items-center text-center">
              <span className="text-[10px] font-bold text-swatch-lavender-text dark:text-swatch-lavender-darkText leading-tight">
                React 18 + TS
              </span>
              <span className="text-[9px] text-earth-ink-700 dark:text-stone-300 font-mono mt-0.5 font-medium leading-tight">
                Vite + Tailwind
              </span>
            </div>
            <div className="min-w-0 px-1.5 py-2.5 sm:p-2.5 rounded-xl bg-swatch-mint-bg dark:bg-swatch-mint-border/15 border border-swatch-mint-border/60 flex flex-col justify-center items-center text-center">
              <span className="text-[10px] font-bold text-swatch-mint-text dark:text-swatch-mint-darkText leading-tight">
                Python Engine
              </span>
              <span className="text-[9px] text-earth-ink-700 dark:text-stone-300 font-mono mt-0.5 font-medium leading-tight truncate max-w-full">
                projects.json
              </span>
            </div>
            <div className="min-w-0 px-1.5 py-2.5 sm:p-2.5 rounded-xl bg-swatch-peach-bg dark:bg-swatch-peach-border/15 border border-swatch-peach-border/60 flex flex-col justify-center items-center text-center">
              <span className="text-[10px] font-bold text-swatch-peach-text dark:text-swatch-peach-darkText leading-tight">
                GitHub Actions
              </span>
              <span className="text-[9px] text-earth-ink-700 dark:text-stone-300 font-mono mt-0.5 font-medium leading-tight">
                CI/CD Pages
              </span>
            </div>
          </div>

          {/* Verification Status Strip */}
          <div className="pt-2 border-t border-earth-sand/60 dark:border-earth-coffeeBorder flex items-center justify-between text-[9px] font-mono text-earth-ink-700 dark:text-stone-300">
            <span>✓ unittest (7/7)</span>
            <span>✓ Vitest + axe (20/20)</span>
            <span className="text-swatch-mint-text dark:text-swatch-mint-darkText font-semibold">
              ✓ SSG Read-Only
            </span>
          </div>
        </div>
      );

    case 'proyges-software-2':
      return (
        <div
          role="img"
          aria-label={`Esquema de arquitectura de software para ${title}`}
          className={`relative overflow-hidden rounded-2xl bg-earth-sand/35 dark:bg-earth-coffeeSubtle/60 border border-earth-sand/80 dark:border-earth-coffeeBorder p-4 flex flex-col justify-between gap-2.5 bg-blueprint-grid ${className}`}
        >
          {/* Desktop App Window Header */}
          <div className="flex items-center justify-between border-b border-earth-sand/70 dark:border-earth-coffeeBorder pb-2">
            <span className="text-[11px] font-bold text-earth-ink-800 dark:text-stone-200 flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded bg-earth-darkMocha dark:bg-swatch-peach"
              />
              Gestión de Stock v2.4 (Tkinter)
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-swatch-peach-bg text-swatch-peach-text dark:bg-swatch-peach-border/20 dark:text-swatch-peach-darkText border border-swatch-peach-border/50 font-mono font-semibold">
              OOP Python
            </span>
          </div>

          {/* Inventory Schema Visual */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-earth-linen/90 dark:bg-earth-coffeeCard text-[10px] border border-earth-sand/60 dark:border-earth-coffeeBorder">
              <span className="font-mono text-earth-ink-700 dark:text-stone-200">
                [SKU-1029] Entrada Pallet A
              </span>
              <span className="text-swatch-mint-text dark:text-swatch-mint-darkText font-mono font-bold">
                +450 un.
              </span>
            </div>
            <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-earth-linen/90 dark:bg-earth-coffeeCard text-[10px] border border-earth-sand/60 dark:border-earth-coffeeBorder">
              <span className="font-mono text-earth-ink-700 dark:text-stone-200">
                [SKU-0841] Auditoría Depósito
              </span>
              <span className="text-earth-ink-800 dark:text-swatch-peach-darkText font-mono font-semibold">
                OK / Auditado
              </span>
            </div>
            <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-earth-linen/90 dark:bg-earth-coffeeCard text-[10px] border border-earth-sand/60 dark:border-earth-coffeeBorder">
              <span className="font-mono text-earth-ink-700 dark:text-stone-200">
                [REPORT] Generación PDF Ejecutivo
              </span>
              <span className="text-swatch-lavender-text dark:text-swatch-lavender-darkText font-mono font-semibold">
                ReportLab Engine
              </span>
            </div>
          </div>
        </div>
      );

    case 'estructuras-datos-c':
      return (
        <div
          role="img"
          aria-label={`Diagrama de punteros y memoria para ${title}`}
          className={`relative overflow-hidden rounded-2xl bg-earth-sand/35 dark:bg-earth-coffeeSubtle/60 border border-earth-sand/80 dark:border-earth-coffeeBorder p-4 flex flex-col justify-between gap-2.5 bg-blueprint-grid ${className}`}
        >
          {/* Header Pointer Notation */}
          <div className="flex items-center justify-between border-b border-earth-sand/70 dark:border-earth-coffeeBorder pb-2">
            <span className="text-[11px] font-mono text-earth-ink-800 dark:text-stone-200 font-bold">
              malloc(sizeof(Node)) & Punteros
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-swatch-mint-bg text-swatch-mint-text dark:bg-swatch-mint-border/20 dark:text-swatch-mint-darkText border border-swatch-mint-border/50 font-mono font-semibold">
              Lenguaje C
            </span>
          </div>

          {/* Linked Nodes Visual Representation */}
          <div className="flex items-center justify-between gap-1.5 py-1">
            <div className="flex-1 min-w-0 p-2 rounded-xl bg-earth-linen/95 dark:bg-earth-coffeeCard border border-earth-sand/80 dark:border-earth-coffeeBorder text-center">
              <span className="block text-[9px] font-mono text-earth-ink-700 dark:text-stone-300 font-semibold">
                0x7ffee0
              </span>
              <span className="block text-xs font-mono font-bold text-earth-ink-900 dark:text-stone-100 mt-0.5">
                [Data: 42]
              </span>
              <span className="block text-[9px] font-mono text-swatch-mint-text dark:text-swatch-mint-darkText font-semibold mt-0.5">
                *next →
              </span>
            </div>
            <span
              className="text-earth-darkMocha dark:text-swatch-lavender-darkText font-mono text-xs font-bold"
              aria-hidden="true"
            >
              →
            </span>
            <div className="flex-1 min-w-0 p-2 rounded-xl bg-earth-linen/95 dark:bg-earth-coffeeCard border border-earth-sand/80 dark:border-earth-coffeeBorder text-center">
              <span className="block text-[9px] font-mono text-earth-ink-700 dark:text-stone-300 font-semibold">
                0x7ffee8
              </span>
              <span className="block text-xs font-mono font-bold text-earth-ink-900 dark:text-stone-100 mt-0.5">
                [Data: 89]
              </span>
              <span className="block text-[9px] font-mono text-swatch-mint-text dark:text-swatch-mint-darkText font-semibold mt-0.5">
                *next →
              </span>
            </div>
            <span
              className="text-earth-darkMocha dark:text-swatch-lavender-darkText font-mono text-xs font-bold"
              aria-hidden="true"
            >
              →
            </span>
            <div className="flex-1 min-w-0 p-2 rounded-xl bg-earth-linen/95 dark:bg-earth-coffeeCard border border-earth-sand/80 dark:border-earth-coffeeBorder text-center">
              <span className="block text-[9px] font-mono text-earth-ink-700 dark:text-stone-300 font-semibold">
                0x7ffef0
              </span>
              <span className="block text-xs font-mono font-bold text-earth-ink-900 dark:text-stone-100 mt-0.5">
                [NULL]
              </span>
              <span className="block text-[9px] font-mono text-earth-ink-700 dark:text-stone-300 font-semibold mt-0.5">
                Terminador
              </span>
            </div>
          </div>

          <div className="pt-1.5 border-t border-earth-sand/60 dark:border-earth-coffeeBorder flex items-center justify-between text-[9px] font-mono text-earth-ink-700 dark:text-stone-300">
            <span>Heap Allocation · GCC</span>
            <span className="text-swatch-mint-text dark:text-swatch-mint-darkText font-semibold">
              free(node) verificado
            </span>
          </div>
        </div>
      );

    case 'cs50-harvard':
      return (
        <div
          role="img"
          aria-label={`Esquema de algoritmos y complejidad computacional para ${title}`}
          className={`relative overflow-hidden rounded-2xl bg-earth-sand/35 dark:bg-earth-coffeeSubtle/60 border border-earth-sand/80 dark:border-earth-coffeeBorder p-4 flex flex-col justify-between gap-2.5 bg-blueprint-grid ${className}`}
        >
          {/* CS50 Header */}
          <div className="flex items-center justify-between border-b border-earth-sand/70 dark:border-earth-coffeeBorder pb-2">
            <span className="text-[11px] font-bold text-earth-ink-800 dark:text-stone-200">
              Harvard CS50: Algoritmos & Eficiencia
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-swatch-lemon-bg text-swatch-lemon-text dark:bg-swatch-lemon-border/20 dark:text-swatch-lemon-darkText border border-swatch-lemon-border/50 font-mono font-semibold">
              O(log n)
            </span>
          </div>

          {/* Algorithm Tree Schematic */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 py-1 text-center font-mono">
            <div className="min-w-0 p-2.5 rounded-xl bg-earth-linen/95 dark:bg-earth-coffeeCard border border-earth-sand/70 dark:border-earth-coffeeBorder">
              <span className="text-[9px] text-earth-ink-700 dark:text-stone-300 font-semibold block">
                Búsqueda Binaria
              </span>
              <span className="text-xs font-bold text-earth-ink-900 dark:text-swatch-peach-darkText mt-1 block">
                O(log n)
              </span>
            </div>
            <div className="min-w-0 p-2.5 rounded-xl bg-earth-linen/95 dark:bg-earth-coffeeCard border border-earth-sand/70 dark:border-earth-coffeeBorder">
              <span className="text-[9px] text-earth-ink-700 dark:text-stone-300 font-semibold block">
                Merge Sort
              </span>
              <span className="text-xs font-bold text-swatch-lavender-text dark:text-swatch-lavender-darkText mt-1 block">
                O(n log n)
              </span>
            </div>
            <div className="min-w-0 p-2.5 rounded-xl bg-earth-linen/95 dark:bg-earth-coffeeCard border border-earth-sand/70 dark:border-earth-coffeeBorder">
              <span className="text-[9px] text-earth-ink-700 dark:text-stone-300 font-semibold block">
                Hash Table
              </span>
              <span className="text-xs font-bold text-swatch-mint-text dark:text-swatch-mint-darkText mt-1 block">
                O(1) Promedio
              </span>
            </div>
          </div>

          <div className="pt-1.5 border-t border-earth-sand/60 dark:border-earth-coffeeBorder flex items-center justify-between text-[9px] font-mono text-earth-ink-700 dark:text-stone-300">
            <span>Problem Sets 1–9 · C, Python, SQL</span>
            <span className="text-swatch-lemon-text dark:text-swatch-lemon-darkText font-semibold">
              CS50x Verified
            </span>
          </div>
        </div>
      );

    case 'n8n-automation':
      return (
        <div
          role="img"
          aria-label={`Flujo de nodos de automatización para ${title}`}
          className={`relative overflow-hidden rounded-2xl bg-earth-sand/35 dark:bg-earth-coffeeSubtle/60 border border-earth-sand/80 dark:border-earth-coffeeBorder p-4 flex flex-col justify-between gap-2.5 bg-blueprint-grid ${className}`}
        >
          {/* n8n Flow Header */}
          <div className="flex items-center justify-between border-b border-earth-sand/70 dark:border-earth-coffeeBorder pb-2">
            <span className="text-[11px] font-bold text-earth-ink-800 dark:text-stone-200">
              Pipeline de Integraciones & Webhooks
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-swatch-rose-bg text-swatch-rose-text dark:bg-swatch-rose-border/20 dark:text-swatch-rose-darkText border border-swatch-rose-border/50 font-mono font-semibold">
              n8n Workflow
            </span>
          </div>

          {/* Node graph flow schematic */}
          <div className="flex items-center justify-between gap-1.5 py-1">
            <div className="flex-1 min-w-0 p-2.5 rounded-xl bg-swatch-sky-bg dark:bg-swatch-sky-border/15 border border-swatch-sky-border/60 text-center">
              <span className="block text-[9px] text-earth-ink-700 dark:text-stone-300 font-mono font-semibold">
                Trigger
              </span>
              <span className="block text-[11px] font-bold text-swatch-sky-text dark:text-swatch-sky-darkText mt-0.5">
                Webhook HTTP
              </span>
            </div>
            <span
              className="text-earth-darkMocha dark:text-swatch-lavender-darkText font-mono text-xs font-bold"
              aria-hidden="true"
            >
              →
            </span>
            <div className="flex-1 min-w-0 p-2.5 rounded-xl bg-swatch-lavender-bg dark:bg-swatch-lavender-border/15 border border-swatch-lavender-border/60 text-center">
              <span className="block text-[9px] text-earth-ink-700 dark:text-stone-300 font-mono font-semibold">
                Lógica
              </span>
              <span className="block text-[11px] font-bold text-swatch-lavender-text dark:text-swatch-lavender-darkText mt-0.5">
                Transform JSON
              </span>
            </div>
            <span
              className="text-earth-darkMocha dark:text-swatch-lavender-darkText font-mono text-xs font-bold"
              aria-hidden="true"
            >
              →
            </span>
            <div className="flex-1 min-w-0 p-2.5 rounded-xl bg-swatch-mint-bg dark:bg-swatch-mint-border/15 border border-swatch-mint-border/60 text-center">
              <span className="block text-[9px] text-earth-ink-700 dark:text-stone-300 font-mono font-semibold">
                Destino
              </span>
              <span className="block text-[11px] font-bold text-swatch-mint-text dark:text-swatch-mint-darkText mt-0.5">
                API Dispatch
              </span>
            </div>
          </div>

          <div className="pt-1.5 border-t border-earth-sand/60 dark:border-earth-coffeeBorder flex items-center justify-between text-[9px] font-mono text-earth-ink-700 dark:text-stone-300">
            <span>Event-Driven REST Payloads</span>
            <span className="text-swatch-rose-text dark:text-swatch-rose-darkText font-semibold">
              Retry & Validation
            </span>
          </div>
        </div>
      );

    default:
      return (
        <div
          role="img"
          aria-label={`Representación de ${title}`}
          className={`p-4 rounded-2xl bg-earth-sand/30 dark:bg-earth-coffeeSubtle/50 border border-earth-sand/70 dark:border-earth-coffeeBorder text-center text-xs text-earth-ink-600 dark:text-stone-300 ${className}`}
        >
          {title}
        </div>
      );
  }
};
