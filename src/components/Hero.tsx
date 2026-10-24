import React from 'react';
import {
  ArrowDown,
  Mail,
  Coffee,
  Code2,
  Terminal,
  MapPin,
  Cpu,
  Workflow,
  ShieldCheck,
} from 'lucide-react';
import { UserProfile } from '../types/project';

interface HeroProps {
  user: UserProfile;
  totalProjects: number;
}

export const Hero: React.FC<HeroProps> = ({ user, totalProjects }) => {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 border-b border-earth-sand/70 dark:border-earth-coffeeBorder/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Identity & Primary CTAs */}
          <div className="lg:col-span-7">
            {/* Pill Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="badge-spring inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-swatch-lemon-bg text-swatch-lemon-text dark:bg-swatch-lemon-border/20 dark:text-swatch-lemon-darkText border border-swatch-lemon-border/70 dark:border-swatch-lemon-border/30 shadow-xs">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-swatch-mint-text opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-swatch-mint-text dark:bg-swatch-mint"></span>
                </span>
                <Coffee className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Desarrollador de Software</span>
              </span>

              <span className="badge-spring inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium bg-swatch-lavender-bg text-swatch-lavender-text dark:bg-swatch-lavender-border/20 dark:text-swatch-lavender-darkText border border-swatch-lavender-border/70 dark:border-swatch-lavender-border/30 shadow-xs">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{user.location}</span>
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-earth-ink-900 dark:text-stone-100 leading-[1.12] text-balance">
              Hola, soy{' '}
              <span className="relative inline-block px-2 -mx-1 rounded-lg bg-swatch-peach/30 dark:bg-swatch-lavender/15 border-b-2 border-earth-darkMocha dark:border-swatch-lavender text-earth-ink-900 dark:text-stone-100">
                {user.name}
              </span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl font-semibold text-earth-ink-800 dark:text-stone-200 tracking-tight text-balance">
              {user.subtitle}
            </p>

            <p className="mt-4 text-sm sm:text-base text-earth-ink-600 dark:text-stone-300 leading-relaxed max-w-[62ch]">
              {user.bio} Construyo aplicaciones estructuradas, eficientes y modulares, enfocadas en
              buenas prácticas y código limpio.
            </p>

            {/* Responsive Tactile CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#proyectos"
                className="btn-tactile min-h-11 group/cta inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-earth-darkMocha hover:bg-earth-ink-800 text-white font-semibold text-xs sm:text-sm shadow-soft hover:shadow-soft-hover"
              >
                <span>Explorar Proyectos ({totalProjects})</span>
                <ArrowDown
                  className="w-4 h-4 group-hover/cta:translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </a>

              <a
                href="#contacto"
                className="btn-tactile min-h-11 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-earth-linen dark:bg-earth-coffeeCard hover:bg-earth-sand/70 dark:hover:bg-earth-coffeeSubtle text-earth-ink-800 dark:text-stone-200 font-semibold text-xs sm:text-sm border border-earth-sand dark:border-earth-coffeeBorder shadow-xs"
              >
                <Mail
                  className="w-4 h-4 text-earth-darkMocha dark:text-swatch-peach-darkText"
                  aria-hidden="true"
                />
                <span>Contactar</span>
              </a>
            </div>

            {/* Interactive Feature Tags */}
            <div className="mt-9 pt-6 border-t border-earth-sand/70 dark:border-earth-coffeeBorder/70 flex flex-wrap items-center gap-2.5">
              <span className="badge-spring inline-flex items-center gap-1.5 text-xs font-medium text-earth-ink-700 dark:text-stone-300 bg-earth-linen/90 dark:bg-earth-coffeeCard px-3 py-1.5 rounded-xl border border-earth-sand dark:border-earth-coffeeBorder shadow-xs">
                <Code2
                  className="w-3.5 h-3.5 text-swatch-lemon-text dark:text-swatch-lemon-darkText"
                  aria-hidden="true"
                />
                <span>Python & C</span>
              </span>

              <span className="badge-spring inline-flex items-center gap-1.5 text-xs font-medium text-earth-ink-700 dark:text-stone-300 bg-earth-linen/90 dark:bg-earth-coffeeCard px-3 py-1.5 rounded-xl border border-earth-sand dark:border-earth-coffeeBorder shadow-xs">
                <Terminal
                  className="w-3.5 h-3.5 text-swatch-lavender-text dark:text-swatch-lavender-darkText"
                  aria-hidden="true"
                />
                <span>React, Vite & TypeScript</span>
              </span>

              <span className="badge-spring inline-flex items-center gap-1.5 text-xs font-medium text-earth-ink-700 dark:text-stone-300 bg-earth-linen/90 dark:bg-earth-coffeeCard px-3 py-1.5 rounded-xl border border-earth-sand dark:border-earth-coffeeBorder shadow-xs">
                <Coffee
                  className="w-3.5 h-3.5 text-earth-darkMocha dark:text-swatch-peach-darkText"
                  aria-hidden="true"
                />
                <span>CI/CD GitHub Actions</span>
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Engineering Dossier Card */}
          <aside aria-label="Ficha de arquitectura y enfoque técnico" className="lg:col-span-5">
            <div className="rounded-2xl bg-earth-linen/95 dark:bg-earth-coffeeCard/95 border border-earth-sand dark:border-earth-coffeeBorder shadow-soft p-5 sm:p-6 bg-blueprint-grid">
              {/* Blueprint Header Bar */}
              <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-earth-sand/80 dark:border-earth-coffeeBorder">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="w-2.5 h-2.5 rounded-full bg-earth-darkMocha dark:bg-swatch-lavender"
                  />
                  <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-earth-ink-800 dark:text-stone-200">
                    FICHA TÉCNICA // ARQUITECTURA
                  </span>
                </div>
                <span className="shrink-0 whitespace-nowrap font-mono text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-earth-sand/70 dark:bg-earth-coffeeSubtle text-earth-ink-700 dark:text-stone-300 border border-earth-sand dark:border-earth-coffeeBorder">
                  CS50x · Urquiza
                </span>
              </div>

              {/* Three Architectural Pillars */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-earth-light/90 dark:bg-earth-coffeeSubtle/80 border border-earth-sand/80 dark:border-earth-coffeeBorder flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-swatch-mint-bg text-swatch-mint-text dark:bg-swatch-mint-border/20 dark:text-swatch-mint-darkText border border-swatch-mint-border/60 flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-earth-ink-900 dark:text-stone-100">
                        Bajo Nivel & Algoritmos
                      </span>
                      <span className="shrink-0 whitespace-nowrap font-mono text-[10px] font-semibold text-swatch-mint-text dark:text-swatch-mint-darkText">
                        01 · C / CS50
                      </span>
                    </div>
                    <p className="text-[11px] text-earth-ink-600 dark:text-stone-300 mt-0.5 leading-snug">
                      Punteros, memoria dinámica (malloc/free), estructuras enlazadas y análisis
                      asintótico.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-earth-light/90 dark:bg-earth-coffeeSubtle/80 border border-earth-sand/80 dark:border-earth-coffeeBorder flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-swatch-peach-bg text-swatch-peach-text dark:bg-swatch-peach-border/20 dark:text-swatch-peach-darkText border border-swatch-peach-border/60 flex items-center justify-center shrink-0 mt-0.5">
                    <Workflow className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-earth-ink-900 dark:text-stone-100">
                        Backend, Escritorio & Datos
                      </span>
                      <span className="shrink-0 whitespace-nowrap font-mono text-[10px] font-semibold text-swatch-peach-text dark:text-swatch-peach-darkText">
                        02 · Python
                      </span>
                    </div>
                    <p className="text-[11px] text-earth-ink-600 dark:text-stone-300 mt-0.5 leading-snug">
                      Arquitectura POO, interfaces Tkinter, reportes ejecutivos PDF y flujos
                      deterministas.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-earth-light/90 dark:bg-earth-coffeeSubtle/80 border border-earth-sand/80 dark:border-earth-coffeeBorder flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-swatch-lavender-bg text-swatch-lavender-text dark:bg-swatch-lavender-border/20 dark:text-swatch-lavender-darkText border border-swatch-lavender-border/60 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-earth-ink-900 dark:text-stone-100">
                        Web Moderna & Calidad CI/CD
                      </span>
                      <span className="shrink-0 whitespace-nowrap font-mono text-[10px] font-semibold text-swatch-lavender-text dark:text-swatch-lavender-darkText">
                        03 · React / TS
                      </span>
                    </div>
                    <p className="text-[11px] text-earth-ink-600 dark:text-stone-300 mt-0.5 leading-snug">
                      Componentes tipados, pruebas automatizadas (Vitest + axe-core) y despliegue en
                      GitHub Actions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Blueprint Telemetry Footer */}
              <div className="mt-4 pt-3.5 border-t border-earth-sand/80 dark:border-earth-coffeeBorder grid grid-cols-3 gap-2 text-center font-mono">
                <div className="px-2 py-1.5 rounded-lg bg-earth-sand/40 dark:bg-earth-coffeeSubtle/60">
                  <span className="block text-xs font-bold text-earth-ink-900 dark:text-stone-100">
                    {totalProjects}
                  </span>
                  <span className="block text-[9px] uppercase tracking-wider text-earth-ink-700 dark:text-stone-300">
                    Proyectos
                  </span>
                </div>
                <div className="px-2 py-1.5 rounded-lg bg-earth-sand/40 dark:bg-earth-coffeeSubtle/60">
                  <span className="block text-xs font-bold text-swatch-mint-text dark:text-swatch-mint-darkText">
                    WCAG AA
                  </span>
                  <span className="block text-[9px] uppercase tracking-wider text-earth-ink-700 dark:text-stone-300">
                    Accesibilidad
                  </span>
                </div>
                <div className="px-2 py-1.5 rounded-lg bg-earth-sand/40 dark:bg-earth-coffeeSubtle/60">
                  <span className="block text-xs font-bold text-swatch-lavender-text dark:text-swatch-lavender-darkText">
                    CI/CD
                  </span>
                  <span className="block text-[9px] uppercase tracking-wider text-earth-ink-700 dark:text-stone-300">
                    Automatizado
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
