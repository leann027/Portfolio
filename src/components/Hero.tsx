import React from 'react';
import { ArrowDown, Mail, Coffee, Code2, Terminal, MapPin } from 'lucide-react';
import { UserProfile } from '../types/project';

interface HeroProps {
  user: UserProfile;
  totalProjects: number;
}

export const Hero: React.FC<HeroProps> = ({ user, totalProjects }) => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-lofi-border/70 dark:border-lofi-darkBorder/70">
      {/* Lo-Fi Warm Pastel Glows */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-pastel-lavender-border/20 dark:bg-pastel-lavender-darkText/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-1/4 w-64 h-64 bg-pastel-peach-border/25 dark:bg-pastel-peach-darkText/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Lo-Fi Pill Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pastel-matcha-badge dark:bg-pastel-matcha-bg/30 text-pastel-matcha-text dark:text-pastel-matcha-darkText border border-pastel-matcha-border/80 dark:border-pastel-matcha-border/30">
              <Coffee className="w-3.5 h-3.5" />
              <span>Desarrollador de Software</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-pastel-lavender-badge dark:bg-pastel-lavender-bg/30 text-pastel-lavender-text dark:text-pastel-lavender-darkText border border-pastel-lavender-border/80 dark:border-pastel-lavender-border/30">
              <MapPin className="w-3.5 h-3.5" />
              <span>{user.location}</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Hola, soy{' '}
            <span className="underline decoration-wavy decoration-pastel-peach-border dark:decoration-pastel-peach-darkText/60 underline-offset-8">
              {user.name}
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
            {user.subtitle}
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            {user.bio} Construyo aplicaciones estructuradas, eficientes y modulares. Este portfolio interactivo es mi <strong className="text-slate-900 dark:text-slate-200">proyecto insignia</strong> para catalogar y visualizar mis desarrollos.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 font-semibold text-xs sm:text-sm shadow-lofi hover:shadow-lofi-hover transition-all"
            >
              <span>Explorar Proyectos ({totalProjects})</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-lofi-card dark:bg-lofi-darkCard hover:bg-lofi-subtle dark:hover:bg-lofi-darkSubtle text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm border border-lofi-border dark:border-lofi-darkBorder shadow-lofi transition-all"
            >
              <Mail className="w-4 h-4 text-pastel-peach-text dark:text-pastel-peach-darkText" />
              <span>Contactar</span>
            </a>
          </div>

          {/* Feature Badges */}
          <div className="mt-10 pt-6 border-t border-lofi-border/70 dark:border-lofi-darkBorder/70 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-lofi-card dark:bg-lofi-darkCard px-3 py-1 rounded-xl border border-lofi-border dark:border-lofi-darkBorder">
              <Code2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Python & C</span>
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-lofi-card dark:bg-lofi-darkCard px-3 py-1 rounded-xl border border-lofi-border dark:border-lofi-darkBorder">
              <Terminal className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>React, Vite & TS</span>
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-lofi-card dark:bg-lofi-darkCard px-3 py-1 rounded-xl border border-lofi-border dark:border-lofi-darkBorder">
              <Coffee className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>CI/CD GitHub Actions</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
