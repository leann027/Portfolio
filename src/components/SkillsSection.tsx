import React from 'react';
import { Code, Layout, Wrench } from 'lucide-react';
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-5 border-b border-earth-sand/60 dark:border-earth-coffeeBorder/60">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-earth-ink-900 dark:text-stone-100 tracking-tight text-balance">
              Tecnologías & Entornos
            </h2>
            <p className="mt-2.5 text-earth-ink-600 dark:text-stone-300 text-xs sm:text-sm leading-relaxed">
              Stack tecnológico empleado en el desarrollo de software, algoritmos, aplicaciones de
              escritorio y desarrollo web.
            </p>
          </div>
          <div className="shrink-0 font-mono text-[11px] font-semibold px-3 py-1.5 rounded-xl bg-earth-linen dark:bg-earth-coffeeCard text-earth-ink-700 dark:text-stone-300 border border-earth-sand dark:border-earth-coffeeBorder self-start sm:self-auto">
            MATRIZ // {skills.languages.length + skills.frameworks.length + skills.tools.length}{' '}
            TECNOLOGÍAS
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Lenguajes */}
          <div className="card-lift rounded-2xl bg-earth-linen/90 dark:bg-earth-coffeeCard border border-earth-sand dark:border-earth-coffeeBorder p-6 sm:p-7 shadow-soft">
            <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-earth-sand/70 dark:border-earth-coffeeBorder">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-swatch-peach-bg text-swatch-peach-text dark:bg-swatch-peach-border/20 dark:text-swatch-peach-darkText border border-swatch-peach-border/60 flex items-center justify-center shadow-xs">
                  <Code className="w-5 h-5" aria-hidden="true" />
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
              <span className="font-mono text-[10px] font-bold text-earth-ink-600 dark:text-stone-300">
                01
              </span>
            </div>

            <div className="divide-y divide-earth-sand/60 dark:divide-earth-coffeeBorder/60">
              {skills.languages.map((skill) => (
                <div key={skill.name} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-earth-ink-900 dark:text-stone-100">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-swatch-peach-bg text-swatch-peach-text dark:bg-swatch-peach-border/30 dark:text-swatch-peach-darkText border border-swatch-peach-border/50">
                        {skill.level}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-earth-ink-600 dark:text-stone-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & UI */}
          <div className="card-lift rounded-2xl bg-earth-linen/90 dark:bg-earth-coffeeCard border border-earth-sand dark:border-earth-coffeeBorder p-6 sm:p-7 shadow-soft">
            <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-earth-sand/70 dark:border-earth-coffeeBorder">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-swatch-lavender-bg text-swatch-lavender-text dark:bg-swatch-lavender-border/20 dark:text-swatch-lavender-darkText border border-swatch-lavender-border/60 flex items-center justify-center shadow-xs">
                  <Layout className="w-5 h-5" aria-hidden="true" />
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
              <span className="font-mono text-[10px] font-bold text-earth-ink-600 dark:text-stone-300">
                02
              </span>
            </div>

            <div className="divide-y divide-earth-sand/60 dark:divide-earth-coffeeBorder/60">
              {skills.frameworks.map((skill) => (
                <div key={skill.name} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-earth-ink-900 dark:text-stone-100">
                      {skill.name}
                    </span>
                  </div>
                  <p className="text-[11px] text-earth-ink-600 dark:text-stone-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Herramientas & DevOps */}
          <div className="card-lift rounded-2xl bg-earth-linen/90 dark:bg-earth-coffeeCard border border-earth-sand dark:border-earth-coffeeBorder p-6 sm:p-7 shadow-soft">
            <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-earth-sand/70 dark:border-earth-coffeeBorder">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-swatch-sky-bg text-swatch-sky-text dark:bg-swatch-sky-border/20 dark:text-swatch-sky-darkText border border-swatch-sky-border/60 flex items-center justify-center shadow-xs">
                  <Wrench className="w-5 h-5" aria-hidden="true" />
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
              <span className="font-mono text-[10px] font-bold text-earth-ink-600 dark:text-stone-300">
                03
              </span>
            </div>

            <div className="divide-y divide-earth-sand/60 dark:divide-earth-coffeeBorder/60">
              {skills.tools.map((skill) => (
                <div key={skill.name} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-earth-ink-900 dark:text-stone-100">
                      {skill.name}
                    </span>
                  </div>
                  <p className="text-[11px] text-earth-ink-600 dark:text-stone-300 leading-relaxed">
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
