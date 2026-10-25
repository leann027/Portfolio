import React from 'react';
import {
  ArrowDown,
  Mail,
  Terminal as TerminalIcon,
  MapPin,
  Workflow,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { UserProfile } from '../types/project';
import { InteractiveTerminal } from './InteractiveTerminal';

interface HeroProps {
  user: UserProfile;
  totalProjects: number;
  onOpenCliQuickfind?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ user, totalProjects, onOpenCliQuickfind }) => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 border-b border-slate-200 dark:border-brand-border/70 grid-bg-glow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bio & Core Engineering Focus */}
          <div className="lg:col-span-7 space-y-6">
            {/* Developer Status & Git Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-brand-surface border border-slate-200 dark:border-brand-border font-mono text-xs text-blue-700 dark:text-brand-primary shadow-sm">
                <span className="text-emerald-700 dark:text-brand-secondary font-bold">❯</span>
                <span className="font-semibold">github.com/{user.github}</span>
                <span className="text-slate-400 dark:text-brand-textDim">•</span>
                <span className="text-slate-600 dark:text-brand-textMuted flex items-center gap-1 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-brand-secondary animate-pulse" />
                  <span>Disponible para roles Jr/SSR</span>
                </span>
              </div>

              <span className="badge-spring inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-brand-surfaceAlt border border-slate-200 dark:border-brand-border text-slate-700 dark:text-brand-textMuted">
                <MapPin
                  className="w-3.5 h-3.5 text-amber-600 dark:text-brand-amber"
                  aria-hidden="true"
                />
                <span>{user.location}</span>
              </span>
            </div>

            {/* Title / Main Greeting */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] text-balance">
                Hola, soy{' '}
                <span className="relative inline-block text-blue-700 dark:text-brand-primary drop-shadow-[0_0_20px_rgba(88,166,255,0.25)]">
                  {user.name}
                </span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-bold text-slate-800 dark:text-brand-text tracking-tight font-mono">
                {user.title} //{' '}
                <span className="text-emerald-700 dark:text-brand-secondary">{user.subtitle}</span>
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-700 dark:text-brand-textMuted leading-relaxed max-w-[62ch]">
              {user.bio} Construyo aplicaciones estructuradas, eficientes y modulares, enfocadas en
              buenas prácticas y código limpio.
            </p>

            {/* Engineering Metrics Summary Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="p-3 rounded-lg bg-white dark:bg-brand-surface/90 border border-slate-200 dark:border-brand-border shadow-xs">
                <div className="flex items-center gap-1.5 text-blue-700 dark:text-brand-primary font-mono text-lg font-bold">
                  <CheckCircle2
                    className="w-4 h-4 text-blue-700 dark:text-brand-primary"
                    aria-hidden="true"
                  />
                  <span>100%</span>
                </div>
                <div className="text-[11px] text-slate-600 dark:text-brand-textMuted font-mono mt-0.5 font-medium">
                  Tests Vitest
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white dark:bg-brand-surface/90 border border-slate-200 dark:border-brand-border shadow-xs">
                <div className="flex items-center gap-1.5 text-emerald-700 dark:text-brand-secondary font-mono text-lg font-bold">
                  <ShieldCheck
                    className="w-4 h-4 text-emerald-700 dark:text-brand-secondary"
                    aria-hidden="true"
                  />
                  <span>WCAG AA</span>
                </div>
                <div className="text-[11px] text-slate-600 dark:text-brand-textMuted font-mono mt-0.5 font-medium">
                  0 Errores axe
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white dark:bg-brand-surface/90 border border-slate-200 dark:border-brand-border shadow-xs">
                <div className="flex items-center gap-1.5 text-purple-700 dark:text-brand-purple font-mono text-lg font-bold">
                  <TerminalIcon
                    className="w-4 h-4 text-purple-700 dark:text-brand-purple"
                    aria-hidden="true"
                  />
                  <span>0{totalProjects}</span>
                </div>
                <div className="text-[11px] text-slate-600 dark:text-brand-textMuted font-mono mt-0.5 font-medium">
                  Proyectos
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white dark:bg-brand-surface/90 border border-slate-200 dark:border-brand-border shadow-xs">
                <div className="flex items-center gap-1.5 text-amber-700 dark:text-brand-amber font-mono text-lg font-bold">
                  <Workflow
                    className="w-4 h-4 text-amber-700 dark:text-brand-amber"
                    aria-hidden="true"
                  />
                  <span>CI/CD</span>
                </div>
                <div className="text-[11px] text-slate-600 dark:text-brand-textMuted font-mono mt-0.5 font-medium">
                  GitHub Actions
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#proyectos"
                className="btn-tactile min-h-11 px-5 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-brand-primary dark:text-black font-bold text-xs sm:text-sm hover:bg-slate-800 dark:hover:bg-brand-primaryHover transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(88,166,255,0.2)]"
              >
                <span>Explorar Proyectos ({totalProjects})</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#contacto"
                className="btn-tactile min-h-11 px-5 py-2.5 rounded-xl bg-white dark:bg-brand-surfaceAlt border border-slate-200 dark:border-brand-border hover:border-blue-500 dark:hover:border-brand-primary/60 text-slate-800 dark:text-brand-text text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-amber-600 dark:text-brand-amber" aria-hidden="true" />
                <span>Contactar</span>
              </a>

              {onOpenCliQuickfind && (
                <button
                  type="button"
                  onClick={onOpenCliQuickfind}
                  className="hidden sm:inline-flex btn-tactile min-h-11 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-brand-surface border border-slate-200 dark:border-brand-border hover:border-blue-500 dark:hover:border-brand-primary text-slate-700 dark:text-brand-textMuted hover:text-slate-900 dark:hover:text-white text-xs font-mono items-center gap-2 transition-colors cursor-pointer"
                  title="Abrir CLI Quickfind (⌘K)"
                >
                  <TerminalIcon className="w-3.5 h-3.5 text-emerald-700 dark:text-brand-secondary" />
                  <span>CLI Quickfind</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border text-[10px] text-slate-600 dark:text-brand-textDim font-bold">
                    ⌘K
                  </kbd>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Live Interactive Terminal Box */}
          <aside aria-label="Terminal interactivo y ficha técnica" className="lg:col-span-5 w-full">
            <InteractiveTerminal />
          </aside>
        </div>
      </div>
    </section>
  );
};
