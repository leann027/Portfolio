import React from 'react';
import { ArrowDown, Mail, Coffee, Code2, Terminal, MapPin } from 'lucide-react';
import { UserProfile } from '../types/project';

interface HeroProps {
  user: UserProfile;
  totalProjects: number;
}

export const Hero: React.FC<HeroProps> = ({ user, totalProjects }) => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-earth-sand/70 dark:border-earth-coffeeBorder/70">
      {/* Warm Ambient Pastel Diffusions */}
      <div className="absolute top-8 left-1/4 w-80 h-80 bg-swatch-lavender/15 dark:bg-swatch-lavender/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-16 right-1/4 w-72 h-72 bg-swatch-peach/20 dark:bg-swatch-peach/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-6 left-1/3 w-64 h-64 bg-swatch-mint/15 dark:bg-swatch-mint/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Pill Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-swatch-lemon-bg text-swatch-lemon-text dark:bg-swatch-lemon-border/20 dark:text-swatch-lemon-darkText border border-swatch-lemon-border/70 dark:border-swatch-lemon-border/30 shadow-xs">
              <Coffee className="w-3.5 h-3.5" />
              <span>Desarrollador de Software</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium bg-swatch-lavender-bg text-swatch-lavender-text dark:bg-swatch-lavender-border/20 dark:text-swatch-lavender-darkText border border-swatch-lavender-border/70 dark:border-swatch-lavender-border/30 shadow-xs">
              <MapPin className="w-3.5 h-3.5" />
              <span>{user.location}</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Hola, soy{' '}
            <span className="underline decoration-wavy decoration-earth-mocha/70 dark:decoration-swatch-lavender/70 underline-offset-8">
              {user.name}
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
            {user.subtitle}
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            {user.bio} Construyo aplicaciones estructuradas, eficientes y modulares. Este portfolio interactivo es mi <strong className="text-slate-900 dark:text-slate-200">proyecto insignia</strong> para catalogar y visualizar mis desarrollos.
          </p>

          {/* Responsive Tactile CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#proyectos"
              className="btn-tactile inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-earth-mocha hover:bg-earth-darkMocha text-white font-semibold text-xs sm:text-sm shadow-soft hover:shadow-soft-hover"
            >
              <span>Explorar Proyectos ({totalProjects})</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contacto"
              className="btn-tactile inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-earth-linen dark:bg-earth-coffeeCard hover:bg-earth-sand/70 dark:hover:bg-earth-coffeeSubtle text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm border border-earth-sand dark:border-earth-coffeeBorder shadow-xs"
            >
              <Mail className="w-4 h-4 text-earth-mocha dark:text-swatch-peach-darkText" />
              <span>Contactar</span>
            </a>
          </div>

          {/* Interactive Feature Tags */}
          <div className="mt-10 pt-6 border-t border-earth-sand/70 dark:border-earth-coffeeBorder/70 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-earth-linen/80 dark:bg-earth-coffeeCard px-3 py-1.5 rounded-xl border border-earth-sand dark:border-earth-coffeeBorder shadow-xs hover:border-earth-mocha/50 transition-colors">
              <Code2 className="w-3.5 h-3.5 text-emerald-600 dark:text-swatch-lemon-darkText" />
              <span>Python & C</span>
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-earth-linen/80 dark:bg-earth-coffeeCard px-3 py-1.5 rounded-xl border border-earth-sand dark:border-earth-coffeeBorder shadow-xs hover:border-earth-mocha/50 transition-colors">
              <Terminal className="w-3.5 h-3.5 text-purple-600 dark:text-swatch-lavender-darkText" />
              <span>React, Vite & TypeScript</span>
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 bg-earth-linen/80 dark:bg-earth-coffeeCard px-3 py-1.5 rounded-xl border border-earth-sand dark:border-earth-coffeeBorder shadow-xs hover:border-earth-mocha/50 transition-colors">
              <Coffee className="w-3.5 h-3.5 text-earth-mocha dark:text-swatch-peach-darkText" />
              <span>CI/CD GitHub Actions</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
