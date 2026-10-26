import React from 'react';
import {
  ExternalLink,
  Github,
  Lock,
  Sparkles,
  GraduationCap,
  ArrowUpRight,
  Award,
} from 'lucide-react';
import { Project } from '../types/project';
import { ProjectVisual } from './ProjectVisual';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails, index = 0 }) => {
  return (
    <article
      style={{ animationDelay: `${index * 60}ms` }}
      className="card-lift animate-fade-up group flex flex-col justify-between rounded-xl bg-white dark:bg-brand-card/90 border border-slate-200 dark:border-brand-border hover:border-blue-500/60 dark:hover:border-brand-primary/60 hover:shadow-[0_0_24px_rgba(88,166,255,0.08)] p-6 transition-all relative overflow-hidden shadow-sm"
    >
      <div>
        {/* Project Visual Schema */}
        {project.visualType && (
          <div className="mb-4">
            <ProjectVisual
              visualType={project.visualType}
              projectId={project.id}
              title={project.title}
              className="w-full"
            />
          </div>
        )}

        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.role && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-100 dark:bg-brand-secondary/10 text-emerald-800 dark:text-brand-secondary border border-emerald-300 dark:border-brand-secondary/30">
                <Award className="w-3 h-3" aria-hidden="true" />
                <span>{project.role}</span>
              </span>
            )}
            {project.featured && !project.role && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-100 dark:bg-brand-primary/10 text-blue-800 dark:text-brand-primary border border-blue-300 dark:border-brand-primary/30">
                <Sparkles
                  className="w-3 h-3 text-blue-700 dark:text-brand-primary"
                  aria-hidden="true"
                />
                <span>Insignia</span>
              </span>
            )}
            {project.academic && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-100 dark:bg-brand-amber/10 text-amber-800 dark:text-brand-amber border border-amber-300 dark:border-brand-amber/30">
                <GraduationCap className="w-3 h-3" aria-hidden="true" />
                <span>{project.institution || 'Académico'}</span>
              </span>
            )}
          </div>

          <div className="text-[11px] font-mono">
            {project.isPrivate ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 dark:bg-brand-surface border border-slate-200 dark:border-brand-border text-slate-700 dark:text-brand-textMuted font-medium">
                <Lock className="w-3 h-3" aria-hidden="true" /> Privado
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-100 dark:bg-brand-secondary/10 border border-emerald-300 dark:border-brand-secondary/30 text-emerald-800 dark:text-brand-secondary font-semibold">
                Público
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-brand-primary transition-colors text-balance">
          {project.title}
        </h3>

        {/* Tagline */}
        {project.tagline && (
          <p className="mt-1 text-xs font-mono text-emerald-700 dark:text-brand-secondary font-semibold">
            {project.tagline}
          </p>
        )}

        {/* Description */}
        <p className="mt-2 text-xs text-slate-700 dark:text-brand-textMuted leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Key Highlights box */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-3 p-3 rounded-lg bg-slate-50 dark:bg-brand-surface/80 border border-slate-200 dark:border-brand-border/60 text-[11px] font-mono space-y-1">
            {project.highlights.slice(0, 2).map((h, idx) => (
              <div
                key={idx}
                className="flex items-start gap-1.5 text-slate-700 dark:text-brand-text"
              >
                <span className="text-blue-600 dark:text-brand-primary font-bold">›</span>
                <span className="truncate">{h}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech stack pills */}
        <div className="mt-3.5 flex flex-wrap gap-1.5 font-mono text-[11px]">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-slate-100 dark:bg-brand-surfaceAlt border border-slate-200 dark:border-brand-border text-slate-700 dark:text-brand-text font-medium"
            >
              {tech}
            </span>
          ))}
          {project.languages.map((lang) => (
            <span
              key={lang}
              className="px-2 py-0.5 rounded bg-blue-50 dark:bg-brand-primary/10 border border-blue-200 dark:border-brand-primary/30 text-blue-800 dark:text-brand-primary font-semibold"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-5 pt-3.5 border-t border-slate-200 dark:border-brand-border/60 flex items-center justify-between">
        <button
          onClick={() => onOpenDetails(project)}
          data-testid={`btn-details-${project.id}`}
          className="btn-tactile inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-700 hover:text-blue-900 dark:text-brand-primary dark:hover:text-white transition-colors cursor-pointer"
        >
          <span>Especificaciones</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && !project.isPrivate && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded text-slate-600 hover:text-slate-900 dark:text-brand-textMuted dark:hover:text-brand-primary hover:bg-slate-100 dark:hover:bg-brand-surface border border-transparent hover:border-slate-200 dark:hover:border-brand-border transition-all"
              title="Código fuente en GitHub"
              aria-label={`Ver código fuente de ${project.title}`}
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`demo-link-${project.id}`}
              className="p-1.5 rounded text-slate-600 hover:text-emerald-700 dark:text-brand-textMuted dark:hover:text-brand-secondary hover:bg-slate-100 dark:hover:bg-brand-surface border border-transparent hover:border-slate-200 dark:hover:border-brand-border transition-all"
              title="Ver demostración en vivo"
              aria-label={`Ver demo en vivo de ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
