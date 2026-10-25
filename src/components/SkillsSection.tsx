import React from 'react';
import { Code, Layout, Wrench, Cpu } from 'lucide-react';
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
      className="py-16 sm:py-24 border-b border-slate-200 dark:border-brand-border/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-5 border-b border-slate-200 dark:border-brand-border">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-700 dark:text-brand-primary mb-1.5 font-semibold">
              <Cpu className="w-4 h-4 text-emerald-700 dark:text-brand-secondary" />
              <span>Technical Skills & Tooling Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Tecnologías & Entornos
            </h2>
            <p className="mt-2 text-slate-700 dark:text-brand-textMuted text-xs sm:text-sm leading-relaxed">
              Stack tecnológico empleado en desarrollo de software, algoritmos, aplicaciones de
              escritorio y desarrollo web.
            </p>
          </div>
          <div className="shrink-0 font-mono text-[11px] font-semibold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-brand-surface text-emerald-700 dark:text-brand-secondary border border-slate-200 dark:border-brand-border self-start sm:self-auto">
            MATRIZ // {skills.languages.length + skills.frameworks.length + skills.tools.length}{' '}
            TECNOLOGÍAS
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Lenguajes */}
          <div className="card-lift rounded-xl bg-white dark:bg-brand-card/90 border border-slate-200 dark:border-brand-border p-6 shadow-md">
            <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-200 dark:border-brand-border/70">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-brand-secondary/10 text-emerald-700 dark:text-brand-secondary border border-emerald-300 dark:border-brand-secondary/30 flex items-center justify-center">
                  <Code className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">Lenguajes</h3>
                  <p className="text-[11px] text-slate-500 dark:text-brand-textMuted font-mono">
                    Bases y lógica central
                  </p>
                </div>
              </div>
              <span className="font-mono text-[10px] font-bold text-slate-600 dark:text-brand-textMuted">
                01
              </span>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-brand-border/60">
              {skills.languages.map((skill) => (
                <div key={skill.name} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white font-mono">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-brand-secondary/10 text-emerald-800 dark:text-brand-secondary border border-emerald-200 dark:border-brand-secondary/30">
                        {skill.level}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-brand-textMuted leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & UI */}
          <div className="card-lift rounded-xl bg-white dark:bg-brand-card/90 border border-slate-200 dark:border-brand-border p-6 shadow-md">
            <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-200 dark:border-brand-border/70">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-brand-primary/10 text-blue-700 dark:text-brand-primary border border-blue-300 dark:border-brand-primary/30 flex items-center justify-center">
                  <Layout className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    Frameworks & UI
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-brand-textMuted font-mono">
                    Bibliotecas e interfaces
                  </p>
                </div>
              </div>
              <span className="font-mono text-[10px] font-bold text-slate-600 dark:text-brand-textMuted">
                02
              </span>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-brand-border/60">
              {skills.frameworks.map((skill) => (
                <div key={skill.name} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white font-mono">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-brand-primary/10 text-blue-800 dark:text-brand-primary border border-blue-200 dark:border-brand-primary/30">
                        {skill.level}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-brand-textMuted leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Herramientas & Entornos */}
          <div className="card-lift rounded-xl bg-white dark:bg-brand-card/90 border border-slate-200 dark:border-brand-border p-6 shadow-md">
            <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-200 dark:border-brand-border/70">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-brand-amber/10 text-amber-700 dark:text-brand-amber border border-amber-300 dark:border-brand-amber/30 flex items-center justify-center">
                  <Wrench className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    Herramientas & DevOps
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-brand-textMuted font-mono">
                    Control y despliegue
                  </p>
                </div>
              </div>
              <span className="font-mono text-[10px] font-bold text-slate-600 dark:text-brand-textMuted">
                03
              </span>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-brand-border/60">
              {skills.tools.map((skill) => (
                <div key={skill.name} className="py-3 first:pt-0 last:pb-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white font-mono">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-brand-amber/10 text-amber-800 dark:text-brand-amber border border-amber-200 dark:border-brand-amber/30">
                        {skill.level}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-brand-textMuted leading-relaxed">
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
