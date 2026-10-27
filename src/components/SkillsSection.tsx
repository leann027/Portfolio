import React, { useMemo } from 'react';
import { Project, SkillItem } from '../types/project';

interface SkillsSectionProps {
  skills: {
    languages: SkillItem[];
    frameworks: SkillItem[];
    tools: SkillItem[];
  };
  projects: Project[];
  onOpenProject: (project: Project) => void;
}

const GROUPS: Array<{ key: keyof SkillsSectionProps['skills']; label: string }> = [
  { key: 'languages', label: 'Lenguajes' },
  { key: 'frameworks', label: 'Frameworks & UI' },
  { key: 'tools', label: 'Herramientas & DevOps' },
];

// Compact labels for the evidence chips; falls back to the full title for new projects
const SHORT_TITLES: Record<string, string> = {
  'your-music-visualizer': 'YourMusicVisualizer',
  'algo-notebook': 'AlgoNotebook',
  'portfolio-hub': 'Portfolio',
  'proyges-software-2': 'Inventario Tkinter',
  'estructuras-datos-c': 'Estructuras en C',
  'cs50-harvard': 'CS50',
  'n8n-automation': 'n8n',
};

// "Python 3" → "python", "C99" → "c", "Next.js 16" → "next.js"
const normalize = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/\s*\d+$/, '');

/** Projects whose technologies or languages include any part of the skill name. */
const findEvidence = (skillName: string, projects: Project[]) => {
  const tokens = skillName.split(/\s+[/&]\s+/).map(normalize);
  return projects.filter((p) =>
    [...p.technologies, ...p.languages].some((tech) => {
      const t = normalize(tech);
      return tokens.some((token) => t === token || t.startsWith(`${token} `));
    })
  );
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  skills,
  projects,
  onOpenProject,
}) => {
  const groups = useMemo(
    () =>
      GROUPS.map((group) => ({
        ...group,
        items: skills[group.key].map((skill) => ({
          skill,
          evidence: findEvidence(skill.name, projects),
        })),
      })),
    [skills, projects]
  );

  return (
    <section
      id="habilidades"
      className="py-16 sm:py-24 border-b border-slate-200 dark:border-brand-border/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tecnologías & Entornos
          </h2>
          <p className="mt-2 text-slate-700 dark:text-brand-textMuted text-sm leading-relaxed">
            Cada tecnología enlaza a los proyectos donde la apliqué, para que puedas verificarla en
            el código y la arquitectura.
          </p>
        </div>

        <div className="space-y-12">
          {groups.map((group) => (
            <div key={group.key}>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-300 dark:border-brand-border">
                {group.label}
              </h3>

              <ul className="divide-y divide-slate-200 dark:divide-brand-border/60">
                {group.items.map(({ skill, evidence }) => (
                  <li
                    key={skill.name}
                    className="py-4 grid grid-cols-1 lg:grid-cols-[16rem_1fr_minmax(0,18rem)] gap-x-8 gap-y-2"
                  >
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="font-mono font-semibold text-sm text-slate-900 dark:text-white">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-[11px] text-slate-600 dark:text-brand-textMuted">
                          {skill.level}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-slate-700 dark:text-brand-textMuted leading-relaxed">
                      {skill.description}
                    </p>

                    {evidence.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 lg:justify-end lg:self-start">
                        {evidence.map((project) => (
                          <button
                            key={project.id}
                            type="button"
                            onClick={() => onOpenProject(project)}
                            aria-label={`Ver ${project.title}, donde se aplica ${skill.name}`}
                            className="btn-tactile px-2 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-brand-surface text-blue-800 dark:text-brand-primary border border-slate-200 dark:border-brand-border hover:border-blue-500 dark:hover:border-brand-primary transition-colors cursor-pointer"
                          >
                            {SHORT_TITLES[project.id] ?? project.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
