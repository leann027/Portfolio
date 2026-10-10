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
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-500/10 dark:bg-brand-400/10 flex items-center justify-center text-brand-600 dark:text-brand-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Leandro (@{githubUser})
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Construido con React, TypeScript, Tailwind CSS & arquitectura de 3 capas.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://github.com/${githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Perfil de GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Leandro. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseñado para crecimiento continuo y modularidad.
          </p>
        </div>
      </div>
    </footer>
  );
};
