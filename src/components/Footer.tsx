import React from 'react';
import { ArrowUp, Github, Sparkles } from 'lucide-react';

interface FooterProps {
  githubUser: string;
}

export const Footer: React.FC<FooterProps> = ({ githubUser }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-lofi-border/70 dark:border-lofi-darkBorder/70 bg-lofi-bg dark:bg-lofi-darkBg py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-pastel-lavender-badge text-pastel-lavender-text dark:bg-pastel-lavender-bg/30 dark:text-pastel-lavender-darkText flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Leandro (@{githubUser})
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Portfolio de Software • React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://github.com/${githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-lofi-subtle dark:hover:bg-lofi-darkSubtle transition-colors"
              aria-label="Perfil de GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-lofi-card dark:bg-lofi-darkCard hover:bg-lofi-subtle dark:hover:bg-lofi-darkSubtle text-slate-700 dark:text-slate-200 border border-lofi-border dark:border-lofi-darkBorder shadow-sm transition-colors"
            >
              <span>Subir</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-lofi-border/60 dark:border-lofi-darkBorder/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} Leandro. Todos los derechos reservados.</p>
          <p>Desarrollado con dedicación y diseño lo-fi pastel.</p>
        </div>
      </div>
    </footer>
  );
};
