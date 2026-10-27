import React from 'react';
import { ArrowUp, Github } from 'lucide-react';

interface FooterProps {
  githubUser: string;
}

export const Footer: React.FC<FooterProps> = ({ githubUser }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-brand-border/80 py-8 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600 dark:text-brand-textMuted">
        <p>
          © {new Date().getFullYear()} Leandro · React, TypeScript y Vite, desplegado con GitHub
          Actions
        </p>

        <div className="flex items-center gap-3">
          <a
            href={`https://github.com/${githubUser}/Portfolio`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile inline-flex items-center gap-1.5 min-h-9 px-3 rounded-lg text-slate-700 hover:text-slate-900 dark:text-brand-text dark:hover:text-white hover:bg-slate-100 dark:hover:bg-brand-surface transition-colors"
          >
            <Github className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Código del sitio</span>
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="btn-tactile inline-flex items-center gap-1.5 min-h-9 px-3 rounded-lg text-slate-700 hover:text-slate-900 dark:text-brand-text dark:hover:text-white hover:bg-slate-100 dark:hover:bg-brand-surface transition-colors cursor-pointer"
          >
            <span>Subir</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
