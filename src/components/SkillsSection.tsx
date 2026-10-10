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
    <section id="habilidades" className="py-16 sm:py-24 border-b border-lofi-border/70 dark:border-lofi-darkBorder/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-pastel-matcha-badge dark:bg-pastel-matcha-bg/30 text-pastel-matcha-text dark:text-pastel-matcha-darkText border border-pastel-matcha-border/80 dark:border-pastel-matcha-border/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Habilidades Técnicas</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tecnologías & Entornos
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            Stack tecnológico empleado en el desarrollo de software, algoritmos, aplicaciones de escritorio y desarrollo web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Lenguajes */}
          <div className="rounded-3xl bg-lofi-card dark:bg-lofi-darkCard border border-lofi-border dark:border-lofi-darkBorder p-6 shadow-lofi">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-2xl bg-pastel-peach-badge dark:bg-pastel-peach-bg/30 text-pastel-peach-text dark:text-pastel-peach-darkText flex items-center justify-center">
                <Code className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">Lenguajes</h3>
                <p className="text-[11px] text-slate-400">Bases y sintaxis central</p>
              </div>
            </div>

            <div className="space-y-3">
              {skills.languages.map((skill) => (
                <div key={skill.name} className="p-3 rounded-2xl bg-lofi-subtle/50 dark:bg-lofi-darkSubtle/50 border border-lofi-border/50 dark:border-lofi-darkBorder/50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200">{skill.name}</span>
                    {skill.level && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-pastel-peach-badge text-pastel-peach-text dark:bg-pastel-peach-bg/30 dark:text-pastel-peach-darkText">
                        {skill.level}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & UI */}
          <div className="rounded-3xl bg-lofi-card dark:bg-lofi-darkCard border border-lofi-border dark:border-lofi-darkBorder p-6 shadow-lofi">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-2xl bg-pastel-lavender-badge dark:bg-pastel-lavender-bg/30 text-pastel-lavender-text dark:text-pastel-lavender-darkText flex items-center justify-center">
                <Layout className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">Frameworks & UI</h3>
                <p className="text-[11px] text-slate-400">Bibliotecas e interfaces</p>
              </div>
            </div>

            <div className="space-y-3">
              {skills.frameworks.map((skill) => (
                <div key={skill.name} className="p-3 rounded-2xl bg-lofi-subtle/50 dark:bg-lofi-darkSubtle/50 border border-lofi-border/50 dark:border-lofi-darkBorder/50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200">{skill.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Herramientas & DevOps */}
          <div className="rounded-3xl bg-lofi-card dark:bg-lofi-darkCard border border-lofi-border dark:border-lofi-darkBorder p-6 shadow-lofi">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-2xl bg-pastel-powder-badge dark:bg-pastel-powder-bg/30 text-pastel-powder-text dark:text-pastel-powder-darkText flex items-center justify-center">
                <Wrench className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">Herramientas & Flujo</h3>
                <p className="text-[11px] text-slate-400">Control, CI/CD y entornos</p>
              </div>
            </div>

            <div className="space-y-3">
              {skills.tools.map((skill) => (
                <div key={skill.name} className="p-3 rounded-2xl bg-lofi-subtle/50 dark:bg-lofi-darkSubtle/50 border border-lofi-border/50 dark:border-lofi-darkBorder/50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200">{skill.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
