import React from 'react';
import { ExternalLink, Github, Lock, Sparkles, GraduationCap, ChevronRight } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const getTechColorClass = (tech: string) => {
    const lower = tech.toLowerCase();
    if (lower.includes('python')) return 'bg-yellow-50 text-yellow-700 dark:bg-yellow-950/40 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800/60';
    if (lower.includes('react') || lower.includes('typescript') || lower.includes('vite')) return 'bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300 border-sky-200 dark:border-sky-800/60';
    if (lower.includes('c ') || lower === 'c' || lower.includes('algoritmo')) return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60';
    if (lower.includes('actions') || lower.includes('n8n')) return 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 border-purple-200 dark:border-purple-800/60';
    return 'bg-slate-100 text-slate-700 dark:bg-slate-800/60 dark:text-slate-300 border-slate-200 dark:border-slate-700';
  };

  return (
    <article className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-400/50 transition-all duration-200 shadow-sm hover:shadow-md p-6">
      <div>
        {/* Top badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60">
                <Sparkles className="w-3 h-3 text-brand-500" />
                <span>Insignia</span>
              </span>
            )}
            {project.academic && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
                <GraduationCap className="w-3 h-3 text-amber-500" />
                <span>{project.institution || 'Académico'}</span>
              </span>
            )}
          </div>

          <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
            {project.isPrivate ? (
              <span className="inline-flex items-center gap-1 text-slate-500" title="Código académico privado">
                <Lock className="w-3 h-3" /> Privado
              </span>
            ) : (
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Público</span>
            )}
          </div>
        </div>

        {/* Project Title and Tagline */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {project.title}
        </h3>

        {project.tagline && (
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mt-1">
            {project.tagline}
          </p>
        )}

        {/* Short Description */}
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tech badges */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className={`text-xs px-2.5 py-0.5 rounded-md font-medium border ${getTechColorClass(tech)}`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs px-2 py-0.5 rounded-md font-medium bg-slate-100 dark:bg-slate-800 text-slate-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card Footer with Actions */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenDetails(project)}
          aria-label={`Ver especificaciones de ${project.title}`}
          data-testid={`btn-details-${project.id}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
        >
          <span>Ver Especificaciones</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
              title="Abrir Demo en Vivo"
            >
              <ExternalLink className="w-4 h-4 text-brand-500" />
            </a>
          )}

          {!project.isPrivate ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
              title="Ver en GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          ) : (
            <span
              className="p-2 rounded-lg bg-slate-100/60 dark:bg-slate-800/40 text-slate-400 cursor-not-allowed"
              title="Repositorio Académico Privado"
            >
              <Lock className="w-4 h-4" />
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
