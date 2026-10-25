import React from 'react';
import { ArrowUp, Github, Terminal } from 'lucide-react';

interface FooterProps {
  githubUser: string;
}

export const Footer: React.FC<FooterProps> = ({ githubUser }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-brand-border/80 bg-white/90 dark:bg-brand-bg/90 backdrop-blur-md py-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-brand-surface border border-slate-200 dark:border-brand-border text-blue-700 dark:text-brand-primary flex items-center justify-center shadow-xs">
              <Terminal className="w-4 h-4 text-emerald-700 dark:text-brand-secondary" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono">
                Leandro (@{githubUser})
              </p>
              <p className="text-[11px] text-slate-600 dark:text-brand-textMuted font-mono">
                Portfolio de Software • React 18, TypeScript, Tailwind CSS & Vite
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href={`https://github.com/${githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile min-h-9 min-w-9 p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-brand-textMuted dark:hover:text-white dark:hover:bg-brand-surface border border-slate-200 dark:border-brand-border/60 transition-colors"
              aria-label="Perfil de GitHub"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="btn-tactile inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-brand-surface dark:hover:bg-brand-surfaceAlt text-slate-800 dark:text-brand-text border border-slate-200 dark:border-brand-border hover:border-blue-500 dark:hover:border-brand-primary transition-colors cursor-pointer"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-brand-border/50 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 dark:text-brand-textDim gap-3">
          <p>
            © {new Date().getFullYear()} Leandro. Arquitectura limpia & desarrollo determinista.
          </p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-700 dark:text-brand-secondary font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-brand-secondary animate-pulse" />
              <span>WCAG AA 100% compliant</span>
            </span>
            <span>•</span>
            <span className="text-slate-600 dark:text-brand-textMuted">
              DevKernel Design System
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
