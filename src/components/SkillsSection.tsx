import React from 'react';
import { Code, Layout, Wrench, CheckCircle } from 'lucide-react';
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
    <section id="habilidades" className="py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 mb-3">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Habilidades Técnicas</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tecnologías & Herramientas
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Stack tecnológico empleado en el desarrollo de software, algoritmos, aplicaciones de escritorio y desarrollo web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lenguajes */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Lenguajes</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Bases y sintaxis central</p>
              </div>
            </div>

            <div className="space-y-4">
              {skills.languages.map((skill) => (
                <div key={skill.name} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">{skill.name}</span>
                    {skill.level && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {skill.level}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & UI */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                <Layout className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Frameworks & UI</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Bibliotecas e interfaces</p>
              </div>
            </div>

            <div className="space-y-4">
              {skills.frameworks.map((skill) => (
                <div key={skill.name} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">{skill.name}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Herramientas & DevOps */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Herramientas & Flujo</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Control, CI/CD y entornos</p>
              </div>
            </div>

            <div className="space-y-4">
              {skills.tools.map((skill) => (
                <div key={skill.name} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">{skill.name}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

