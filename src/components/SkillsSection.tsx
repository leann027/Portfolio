import React from 'react';
import { Code, Layout, Wrench, Sparkles } from 'lucide-react';
import { SkillItem } from '../types/project';

interface SkillsSectionProps {
  skills: {
    languages: SkillItem[];
    frameworks: SkillItem[];
    tools: SkillItem[];
  };
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section
      id="habilidades"
      className="py-16 sm:py-24 border-b border-earth-sand/70 dark:border-earth-coffeeBorder/70"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-swatch-lemon-bg text-swatch-lemon-text dark:bg-swatch-lemon-border/20 dark:text-swatch-lemon-darkText border border-swatch-lemon-border/70 mb-3 badge-spring shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Habilidades Técnicas</span>
          </div>
          <h2 className="text-3xl font-extrabold text-earth-ink-900 dark:text-stone-100 tracking-tight">
            Tecnologías & Entornos
          </h2>
          <p className="mt-3 text-earth-ink-600 dark:text-stone-300 text-xs sm:text-sm">
            Stack tecnológico empleado en el desarrollo de software, algoritmos, aplicaciones de
            escritorio y desarrollo web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Lenguajes */}
          <div className="card-lift rounded-3xl bg-earth-linen/85 dark:bg-earth-coffeeCard border border-earth-sand dark:border-earth-coffeeBorder p-6 sm:p-7 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-swatch-peach-bg text-swatch-peach-text dark:bg-swatch-peach-border/20 dark:text-swatch-peach-darkText flex items-center justify-center shadow-xs">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-earth-ink-900 dark:text-stone-100">
                  Lenguajes
                </h3>
                <p className="text-[11px] text-earth-ink-600 dark:text-stone-300">
                  Bases y lógica central
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {skills.languages.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3.5 rounded-2xl bg-earth-sand/40 dark:bg-earth-coffeeSubtle/60 border border-earth-sand/60 dark:border-earth-coffeeBorder/60"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-earth-ink-800 dark:text-stone-200">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-swatch-peach-bg text-swatch-peach-text dark:bg-swatch-peach-border/30 dark:text-swatch-peach-darkText border border-swatch-peach-border/50">
                        {skill.level}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-earth-ink-700 dark:text-stone-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & UI */}
          <div className="card-lift rounded-3xl bg-earth-linen/85 dark:bg-earth-coffeeCard border border-earth-sand dark:border-earth-coffeeBorder p-6 sm:p-7 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-swatch-lavender-bg text-swatch-lavender-text dark:bg-swatch-lavender-border/20 dark:text-swatch-lavender-darkText flex items-center justify-center shadow-xs">
                <Layout className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-earth-ink-900 dark:text-stone-100">
                  Frameworks & UI
                </h3>
                <p className="text-[11px] text-earth-ink-600 dark:text-stone-300">
                  Bibliotecas e interfaces
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {skills.frameworks.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3.5 rounded-2xl bg-earth-sand/40 dark:bg-earth-coffeeSubtle/60 border border-earth-sand/60 dark:border-earth-coffeeBorder/60"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-earth-ink-800 dark:text-stone-200">
                      {skill.name}
                    </span>
                  </div>
                  <p className="text-[11px] text-earth-ink-700 dark:text-stone-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Herramientas & DevOps */}
          <div className="card-lift rounded-3xl bg-earth-linen/85 dark:bg-earth-coffeeCard border border-earth-sand dark:border-earth-coffeeBorder p-6 sm:p-7 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-swatch-sky-bg text-swatch-sky-text dark:bg-swatch-sky-border/20 dark:text-swatch-sky-darkText flex items-center justify-center shadow-xs">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-earth-ink-900 dark:text-stone-100">
                  Herramientas & Flujo
                </h3>
                <p className="text-[11px] text-earth-ink-600 dark:text-stone-300">
                  Control, CI/CD y entornos
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {skills.tools.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3.5 rounded-2xl bg-earth-sand/40 dark:bg-earth-coffeeSubtle/60 border border-earth-sand/60 dark:border-earth-coffeeBorder/60"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-earth-ink-800 dark:text-stone-200">
                      {skill.name}
                    </span>
                  </div>
                  <p className="text-[11px] text-earth-ink-700 dark:text-stone-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
