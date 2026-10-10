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
    <footer className="border-t border-earth-sand/80 dark:border-earth-coffeeBorder/80 bg-earth-light dark:bg-earth-coffeeBg py-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-earth-sand dark:bg-earth-coffeeBorder text-earth-mocha dark:text-swatch-lavender-darkText flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4" />
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
              className="btn-tactile p-2 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-earth-sand/50 dark:hover:bg-earth-coffeeCard transition-colors"
              aria-label="Perfil de GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="btn-tactile flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-earth-linen dark:bg-earth-coffeeCard hover:bg-earth-sand/60 dark:hover:bg-earth-coffeeSubtle text-slate-700 dark:text-slate-200 border border-earth-sand dark:border-earth-coffeeBorder shadow-xs"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-earth-sand/60 dark:border-earth-coffeeBorder/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 gap-3">
          <p>© {new Date().getFullYear()} Leandro. Todos los derechos reservados.</p>
          <p>Diseño Lo-Fi cálido & pastel.</p>
        </div>
      </div>
    </footer>
  );
};
