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
    case 'portfolio-hub':
      return (
        <div
          role="img"
          aria-label={`Esquema arquitectónico de ${title}`}
          className={`relative overflow-hidden rounded-2xl bg-earth-sand/30 dark:bg-earth-coffeeSubtle/50 border border-earth-sand/70 dark:border-earth-coffeeBorder p-4 flex flex-col justify-between ${className}`}
        >
          {/* Browser header wireframe */}
          <div className="flex items-center justify-between border-b border-earth-sand/60 dark:border-earth-coffeeBorder pb-2.5 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-swatch-rose/60 dark:bg-swatch-rose/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-swatch-butter/80 dark:bg-swatch-butter/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-swatch-mint/80 dark:bg-swatch-mint/50" />
            </div>
            <div className="px-3 py-0.5 rounded-md bg-earth-linen dark:bg-earth-coffeeCard text-[10px] font-mono text-earth-ink-700 dark:text-stone-300 border border-earth-sand/50 dark:border-earth-coffeeBorder">
              leann027.dev/portfolio
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
          </div>

          {/* Architecture diagram wireframe */}
          <div className="grid grid-cols-12 gap-2 my-1">
            <div className="col-span-4 p-2 rounded-xl bg-swatch-lavender-bg dark:bg-swatch-lavender-border/15 border border-swatch-lavender-border/50 flex flex-col justify-center items-center text-center">
              <span className="text-[10px] font-bold text-swatch-lavender-text dark:text-swatch-lavender-darkText">
                React 18 + TS
              </span>
              <span className="text-[9px] text-earth-ink-700 dark:text-stone-300 font-mono mt-0.5 font-medium">
                Vite + Tailwind
              </span>
            </div>
            <div className="col-span-4 p-2 rounded-xl bg-swatch-mint-bg dark:bg-swatch-mint-border/15 border border-swatch-mint-border/50 flex flex-col justify-center items-center text-center">
              <span className="text-[10px] font-bold text-swatch-mint-text dark:text-swatch-mint-darkText">
                Python Engine
              </span>
              <span className="text-[9px] text-earth-ink-700 dark:text-stone-300 font-mono mt-0.5 font-medium">
                projects_config
              </span>
            </div>
            <div className="col-span-4 p-2 rounded-xl bg-swatch-peach-bg dark:bg-swatch-peach-border/15 border border-swatch-peach-border/50 flex flex-col justify-center items-center text-center">
              <span className="text-[10px] font-bold text-swatch-peach-text dark:text-swatch-peach-darkText">
                GitHub Actions
              </span>
              <span className="text-[9px] text-earth-ink-700 dark:text-stone-300 font-mono mt-0.5 font-medium">
                CI/CD Pages
              </span>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[10px] text-earth-ink-700 dark:text-stone-400 font-mono">
            <span>● 100% Determinista</span>
            <span>● WCAG AA Certificado</span>
          </div>
        </div>
      );

    case 'proyges-software-2':
      return (
        <div
          role="img"
          aria-label={`Esquema de arquitectura de software para ${title}`}
          className={`relative overflow-hidden rounded-2xl bg-earth-sand/30 dark:bg-earth-coffeeSubtle/50 border border-earth-sand/70 dark:border-earth-coffeeBorder p-4 flex flex-col justify-between ${className}`}
        >
          {/* Desktop App Window Header */}
          <div className="flex items-center justify-between border-b border-earth-sand/60 dark:border-earth-coffeeBorder pb-2 mb-3">
            <span className="text-[11px] font-semibold text-earth-ink-800 dark:text-stone-200 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded bg-earth-darkMocha" />
              Gestión de Stock v2.4 (Tkinter)
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-swatch-peach-bg text-swatch-peach-text dark:bg-swatch-peach-border/20 dark:text-swatch-peach-darkText border border-swatch-peach-border/40 font-mono">
              OOP Python
            </span>
          </div>

          {/* Inventory Schema Visual */}
          <div className="space-y-1.5 my-1">
            <div className="flex items-center justify-between p-1.5 rounded-lg bg-earth-linen/80 dark:bg-earth-coffeeCard text-[10px] border border-earth-sand/50 dark:border-earth-coffeeBorder">
              <span className="font-mono text-earth-ink-700 dark:text-stone-200">
                [SKU-1029] Entrada Pallet A
              </span>
              <span className="text-emerald-800 dark:text-swatch-mint-darkText font-semibold">
                +450 un.
              </span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-lg bg-earth-linen/80 dark:bg-earth-coffeeCard text-[10px] border border-earth-sand/50 dark:border-earth-coffeeBorder">
              <span className="font-mono text-earth-ink-700 dark:text-stone-200">
                [SKU-0841] Auditoría Depósito
              </span>
              <span className="text-earth-ink-800 dark:text-swatch-peach-darkText font-semibold">
                OK / Auditado
              </span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-lg bg-earth-linen/80 dark:bg-earth-coffeeCard text-[10px] border border-earth-sand/50 dark:border-earth-coffeeBorder">
              <span className="font-mono text-earth-ink-700 dark:text-stone-200">
                [REPORT] Generación PDF Ejecutivo
              </span>
              <span className="text-swatch-lavender-text dark:text-swatch-lavender-darkText font-semibold">
                ReportLab Engine
              </span>
            </div>
          </div>

          <div className="mt-2.5 flex items-center justify-between text-[10px] text-earth-ink-700 dark:text-stone-400 font-mono">
            <span>● Persistencia JSON</span>
            <span>● Valuación Automática</span>
          </div>
        </div>
      );

    case 'estructuras-datos-c':
      return (
        <div
          role="img"
          aria-label={`Diagrama de punteros y memoria para ${title}`}
          className={`relative overflow-hidden rounded-2xl bg-earth-sand/30 dark:bg-earth-coffeeSubtle/50 border border-earth-sand/70 dark:border-earth-coffeeBorder p-4 flex flex-col justify-between ${className}`}
        >
          {/* Header Pointer Notation */}
          <div className="flex items-center justify-between border-b border-earth-sand/60 dark:border-earth-coffeeBorder pb-2 mb-3">
            <span className="text-[11px] font-mono text-earth-ink-800 dark:text-stone-200 font-bold">
              malloc(sizeof(Node)) & Punteros
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-swatch-mint-bg text-swatch-mint-text dark:bg-swatch-mint-border/20 dark:text-swatch-mint-darkText border border-swatch-mint-border/40 font-mono">
              Lenguaje C
            </span>
          </div>

          {/* Linked Nodes Visual Representation */}
          <div className="flex items-center justify-between gap-1 my-2">
            <div className="flex-1 p-2 rounded-xl bg-earth-linen/90 dark:bg-earth-coffeeCard border border-earth-sand/70 dark:border-earth-coffeeBorder text-center">
              <span className="block text-[9px] font-mono text-earth-ink-700 dark:text-stone-300 font-semibold">
                0x7ffee0
              </span>
              <span className="block text-xs font-mono font-bold text-earth-ink-900 dark:text-stone-100">
                [Data: 42]
              </span>
              <span className="block text-[9px] font-mono text-emerald-800 dark:text-swatch-mint-darkText font-semibold">
                *next →
              </span>
            </div>
            <span className="text-earth-darkMocha font-mono text-xs">→</span>
            <div className="flex-1 p-2 rounded-xl bg-earth-linen/90 dark:bg-earth-coffeeCard border border-earth-sand/70 dark:border-earth-coffeeBorder text-center">
              <span className="block text-[9px] font-mono text-earth-ink-700 dark:text-stone-300 font-semibold">
                0x7ffee8
              </span>
              <span className="block text-xs font-mono font-bold text-earth-ink-900 dark:text-stone-100">
                [Data: 89]
              </span>
              <span className="block text-[9px] font-mono text-emerald-800 dark:text-swatch-mint-darkText font-semibold">
                *next →
              </span>
            </div>
            <span className="text-earth-darkMocha font-mono text-xs">→</span>
            <div className="flex-1 p-2 rounded-xl bg-earth-linen/90 dark:bg-earth-coffeeCard border border-earth-sand/70 dark:border-earth-coffeeBorder text-center">
              <span className="block text-[9px] font-mono text-earth-ink-700 dark:text-stone-300 font-semibold">
                0x7ffef0
              </span>
              <span className="block text-xs font-mono font-bold text-earth-ink-900 dark:text-stone-100">
                [NULL]
              </span>
              <span className="block text-[9px] font-mono text-earth-ink-700 dark:text-stone-400 font-semibold">
                Terminador
              </span>
            </div>
          </div>

          <div className="mt-2.5 flex items-center justify-between text-[10px] text-earth-ink-700 dark:text-stone-400 font-mono">
            <span>● Control Manual de Memoria</span>
            <span>● Valgrind: 0 Leaks</span>
          </div>
        </div>
      );

    case 'cs50-harvard':
      return (
        <div
          role="img"
          aria-label={`Esquema de algoritmos y complejidad computacional para ${title}`}
          className={`relative overflow-hidden rounded-2xl bg-earth-sand/30 dark:bg-earth-coffeeSubtle/50 border border-earth-sand/70 dark:border-earth-coffeeBorder p-4 flex flex-col justify-between ${className}`}
        >
          {/* CS50 Header */}
          <div className="flex items-center justify-between border-b border-earth-sand/60 dark:border-earth-coffeeBorder pb-2 mb-3">
            <span className="text-[11px] font-bold text-earth-ink-800 dark:text-stone-200">
              Harvard CS50: Algoritmos & Eficiencia
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-swatch-lemon-bg text-swatch-lemon-text dark:bg-swatch-lemon-border/20 dark:text-swatch-lemon-darkText border border-swatch-lemon-border/40 font-mono">
              O(log n)
            </span>
          </div>

          {/* Algorithm Tree Schematic */}
          <div className="grid grid-cols-3 gap-2 my-1 text-center font-mono">
            <div className="p-2 rounded-xl bg-earth-linen/80 dark:bg-earth-coffeeCard border border-earth-sand/60 dark:border-earth-coffeeBorder">
              <span className="text-[9px] text-earth-ink-700 dark:text-stone-300 font-semibold block">
                Búsqueda Binaria
              </span>
              <span className="text-xs font-bold text-earth-ink-900 dark:text-swatch-peach-darkText">
                O(log n)
              </span>
            </div>
            <div className="p-2 rounded-xl bg-earth-linen/80 dark:bg-earth-coffeeCard border border-earth-sand/60 dark:border-earth-coffeeBorder">
              <span className="text-[9px] text-earth-ink-700 dark:text-stone-300 font-semibold block">
                Merge Sort
              </span>
              <span className="text-xs font-bold text-swatch-lavender-text dark:text-swatch-lavender-darkText">
                O(n log n)
              </span>
            </div>
            <div className="p-2 rounded-xl bg-earth-linen/80 dark:bg-earth-coffeeCard border border-earth-sand/60 dark:border-earth-coffeeBorder">
              <span className="text-[9px] text-earth-ink-700 dark:text-stone-300 font-semibold block">
                Hash Table
              </span>
              <span className="text-xs font-bold text-emerald-800 dark:text-swatch-mint-darkText">
                O(1) Promedio
              </span>
            </div>
          </div>

          <div className="mt-2.5 flex items-center justify-between text-[10px] text-earth-ink-700 dark:text-stone-400 font-mono">
            <span>● Harvard University</span>
            <span>● C & Algoritmos Base</span>
          </div>
        </div>
      );

    case 'n8n-automation':
      return (
        <div
          role="img"
          aria-label={`Flujo de nodos de automatización para ${title}`}
          className={`relative overflow-hidden rounded-2xl bg-earth-sand/30 dark:bg-earth-coffeeSubtle/50 border border-earth-sand/70 dark:border-earth-coffeeBorder p-4 flex flex-col justify-between ${className}`}
        >
          {/* n8n Flow Header */}
          <div className="flex items-center justify-between border-b border-earth-sand/60 dark:border-earth-coffeeBorder pb-2 mb-3">
            <span className="text-[11px] font-bold text-earth-ink-800 dark:text-stone-200">
              Pipeline de Integraciones & Webhooks
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-swatch-rose-bg text-swatch-rose-text dark:bg-swatch-rose-border/20 dark:text-swatch-rose-darkText border border-swatch-rose-border/40 font-mono">
              n8n Workflow
            </span>
          </div>

          {/* Node graph flow schematic */}
          <div className="flex items-center justify-between gap-1.5 my-2">
            <div className="flex-1 p-2 rounded-xl bg-swatch-sky-bg dark:bg-swatch-sky-border/15 border border-swatch-sky-border/50 text-center">
              <span className="block text-[9px] text-earth-ink-700 dark:text-stone-300 font-mono font-semibold">
                Trigger
              </span>
              <span className="block text-[11px] font-bold text-swatch-sky-text dark:text-swatch-sky-darkText">
                Webhook HTTP
              </span>
            </div>
            <span className="text-earth-darkMocha font-mono text-xs">→</span>
            <div className="flex-1 p-2 rounded-xl bg-swatch-lavender-bg dark:bg-swatch-lavender-border/15 border border-swatch-lavender-border/50 text-center">
              <span className="block text-[9px] text-earth-ink-700 dark:text-stone-300 font-mono font-semibold">
                Lógica
              </span>
              <span className="block text-[11px] font-bold text-swatch-lavender-text dark:text-swatch-lavender-darkText">
                Transform JSON
              </span>
            </div>
            <span className="text-earth-darkMocha font-mono text-xs">→</span>
            <div className="flex-1 p-2 rounded-xl bg-swatch-mint-bg dark:bg-swatch-mint-border/15 border border-swatch-mint-border/50 text-center">
              <span className="block text-[9px] text-earth-ink-700 dark:text-stone-300 font-mono font-semibold">
                Destino
              </span>
              <span className="block text-[11px] font-bold text-swatch-mint-text dark:text-swatch-mint-darkText">
                API Dispatch
              </span>
            </div>
          </div>

          <div className="mt-2.5 flex items-center justify-between text-[10px] text-earth-ink-700 dark:text-stone-400 font-mono">
            <span>● 0 Errores de Sincronización</span>
            <span>● 100% Sin Fuga de Datos</span>
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
