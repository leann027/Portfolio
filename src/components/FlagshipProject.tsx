import React from 'react';
import { Sparkles, ArrowUpRight, ExternalLink, Github, CheckCircle, Award } from 'lucide-react';
import { Project } from '../types/project';
import { ProjectVisual } from './ProjectVisual';

interface FlagshipProjectProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const FlagshipProject: React.FC<FlagshipProjectProps> = ({ project, onOpenDetails }) => {
  return (
    <article
      data-testid="flagship-project-card"
      aria-labelledby="flagship-project-title"
      className="mb-12 rounded-2xl bg-white dark:bg-brand-card/95 border-2 border-blue-500/30 dark:border-brand-primary/40 shadow-xl hover:border-blue-600 dark:hover:border-brand-primary hover:shadow-[0_0_35px_rgba(88,166,255,0.12)] p-6 sm:p-8 lg:p-10 relative transition-all duration-300 group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Project Overview & Meta */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-blue-100 dark:bg-brand-primary/10 text-blue-800 dark:text-brand-primary border border-blue-300 dark:border-brand-primary/30 shadow-xs">
              <Sparkles
                className="w-3.5 h-3.5 text-blue-700 dark:text-brand-primary"
                aria-hidden="true"
              />
              <span>Proyecto Insignia</span>
            </span>

            {project.role && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-100 dark:bg-brand-secondary/10 text-emerald-800 dark:text-brand-secondary border border-emerald-300 dark:border-brand-secondary/30">
                <Award className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{project.role}</span>
              </span>
            )}

            <span className="text-xs font-mono font-medium text-amber-800 dark:text-brand-amber px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-brand-amber/10 border border-amber-300 dark:border-brand-amber/30">
              {project.status}
            </span>
          </div>

          <h3
            id="flagship-project-title"
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance group-hover:text-blue-700 dark:group-hover:text-brand-primary transition-colors"
          >
            {project.title}
          </h3>

          {project.tagline && (
            <p className="text-xs sm:text-sm font-semibold font-mono text-emerald-700 dark:text-brand-secondary">
              {project.tagline}
            </p>
          )}

          <p className="text-xs sm:text-sm text-slate-700 dark:text-brand-textMuted leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Key highlights preview */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1.5 pt-1">
              {project.highlights.slice(0, 3).map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-800 dark:text-brand-text font-sans"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 text-emerald-600 dark:text-brand-secondary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Skills Demonstrated */}
          {project.skillsDemonstrated && project.skillsDemonstrated.length > 0 && (
            <div className="pt-2">
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-brand-textDim mb-2">
                Habilidades Clave Demostradas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.skillsDemonstrated.map((skill) => (
                  <span
                    key={skill}
                    className="badge-spring text-[11px] font-mono px-2.5 py-1 rounded-lg font-medium bg-slate-100 dark:bg-brand-surface text-slate-800 dark:text-brand-text border border-slate-200 dark:border-brand-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenDetails(project)}
              data-testid={`btn-details-${project.id}`}
              className="btn-tactile min-h-11 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-brand-primary dark:text-black text-xs font-mono font-bold shadow-md cursor-pointer hover:bg-slate-800 dark:hover:bg-brand-primaryHover"
            >
              <span>Ver Especificaciones Técnicas</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>

            {project.githubUrl && !project.isPrivate && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile min-h-11 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-brand-surface hover:bg-slate-100 dark:hover:bg-brand-surfaceAlt text-slate-800 dark:text-brand-text text-xs font-mono font-medium border border-slate-200 dark:border-brand-border hover:border-blue-500 dark:hover:border-brand-primary"
              >
                <Github className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Ver Código Fuente</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile min-h-11 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-brand-surface hover:bg-slate-100 dark:hover:bg-brand-surfaceAlt text-slate-800 dark:text-brand-text text-xs font-mono font-medium border border-slate-200 dark:border-brand-border hover:border-emerald-500 dark:hover:border-brand-secondary"
              >
                <ExternalLink
                  className="w-3.5 h-3.5 text-emerald-600 dark:text-brand-secondary"
                  aria-hidden="true"
                />
                <span>Demo en Vivo</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Visual Architecture Preview */}
        <div className="lg:col-span-5 w-full">
          {project.visualType && (
            <ProjectVisual
              visualType={project.visualType}
              projectId={project.id}
              title={project.title}
              className="w-full shadow-lg"
            />
          )}
        </div>
      </div>
    </article>
  );
};
