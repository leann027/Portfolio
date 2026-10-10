import React from 'react';
import { ArrowDown, Code2, Sparkles, FolderGit2, CheckCircle2 } from 'lucide-react';
import { UserProfile } from '../types/project';

interface HeroProps {
  user: UserProfile;
  totalProjects: number;
  onOpenAddGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ user, totalProjects, onOpenAddGuide }) => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
      {/* Background glowing gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-brand-500/20 to-indigo-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-500" />
            <span>Portfolio de Software & Hub Central de Proyectos</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-sky-500 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">{user.name}</span>.
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300">
            {user.title}
          </p>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {user.bio} Este portfolio interactivo es mi <strong className="text-slate-900 dark:text-slate-200">primer gran proyecto insignia</strong>, diseñado bajo una arquitectura limpia y extensible de 3 capas para exhibir este desarrollo y alojar futuros proyectos a medida que los construyo.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Explorar Proyectos ({totalProjects})</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenAddGuide}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-300 dark:border-slate-700 shadow-sm transition-all"
            >
              <Code2 className="w-4 h-4 text-brand-500" />
              <span>¿Cómo sumar futuros proyectos?</span>
            </button>
          </div>

          {/* Feature Highlights Badges */}
          <div className="mt-10 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Arquitectura 3 Capas</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>CI/CD con GitHub Actions</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Pipeline en Python + Vite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

