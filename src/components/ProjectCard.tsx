import React from 'react';
import { ExternalLink, Github, Lock, Sparkles, GraduationCap, ArrowUpRight } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const getTechBadgeClass = (tech: string) => {
    const lower = tech.toLowerCase();
    if (lower.includes('python')) {
      return 'bg-pastel-peach-badge text-pastel-peach-text dark:bg-pastel-peach-bg/30 dark:text-pastel-peach-darkText border-pastel-peach-border/70 dark:border-pastel-peach-border/30';
    }
    if (lower.includes('react') || lower.includes('typescript') || lower.includes('vite')) {
      return 'bg-pastel-lavender-badge text-pastel-lavender-text dark:bg-pastel-lavender-bg/30 dark:text-pastel-lavender-darkText border-pastel-lavender-border/70 dark:border-pastel-lavender-border/30';
    }
    if (lower.includes('c ') || lower === 'c' || lower.includes('algoritmo') || lower.includes('punteros')) {
      return 'bg-pastel-matcha-badge text-pastel-matcha-text dark:bg-pastel-matcha-bg/30 dark:text-pastel-matcha-darkText border-pastel-matcha-border/70 dark:border-pastel-matcha-border/30';
    }
    if (lower.includes('actions') || lower.includes('n8n') || lower.includes('api')) {
      return 'bg-pastel-rose-badge text-pastel-rose-text dark:bg-pastel-rose-bg/30 dark:text-pastel-rose-darkText border-pastel-rose-border/70 dark:border-pastel-rose-border/30';
    }
    return 'bg-pastel-powder-badge text-pastel-powder-text dark:bg-pastel-powder-bg/30 dark:text-pastel-powder-darkText border-pastel-powder-border/70 dark:border-pastel-powder-border/30';
  };

  return (
    <article className="group flex flex-col justify-between rounded-3xl bg-lofi-card dark:bg-lofi-darkCard border border-lofi-border dark:border-lofi-darkBorder hover:border-slate-400/50 dark:hover:border-slate-500/50 transition-all duration-300 shadow-lofi hover:shadow-lofi-hover p-6 sm:p-7">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-pastel-lavender-badge text-pastel-lavender-text dark:bg-pastel-lavender-bg/40 dark:text-pastel-lavender-darkText border border-pastel-lavender-border/60">
                <Sparkles className="w-3 h-3" />
                <span>Insignia</span>
              </span>
            )}
            {project.academic && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-pastel-matcha-badge text-pastel-matcha-text dark:bg-pastel-matcha-bg/40 dark:text-pastel-matcha-darkText border border-pastel-matcha-border/60">
                <GraduationCap className="w-3 h-3" />
                <span>{project.institution || 'Académico'}</span>
              </span>
            )}
          </div>

          <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
            {project.isPrivate ? (
              <span className="inline-flex items-center gap-1 text-slate-400" title="Código privado">
                <Lock className="w-3 h-3" /> Privado
              </span>
            ) : (
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Público</span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>

        {project.tagline && (
          <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mt-1">
            {project.tagline}
          </p>
        )}

        {/* Short Description */}
        <p className="mt-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Technologies Pills */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className={`text-[11px] px-2.5 py-0.5 rounded-lg font-medium border ${getTechBadgeClass(tech)}`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[11px] px-2 py-0.5 rounded-lg font-medium bg-lofi-subtle dark:bg-lofi-darkSubtle text-slate-500">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card Actions */}
      <div className="mt-6 pt-4 border-t border-lofi-border/70 dark:border-lofi-darkBorder/70 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenDetails(project)}
          data-testid={`btn-details-${project.id}`}
          aria-label={`Ver especificaciones de ${project.title}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-300 transition-colors group/btn"
        >
          <span>Ver Especificaciones</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>

        <div className="flex items-center gap-1.5">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-lofi-subtle hover:bg-slate-200 dark:bg-lofi-darkSubtle dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
              title="Demo en Vivo"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {!project.isPrivate ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-lofi-subtle hover:bg-slate-200 dark:bg-lofi-darkSubtle dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
              title="Código en GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span
              className="p-2 rounded-xl bg-lofi-subtle/50 dark:bg-lofi-darkSubtle/50 text-slate-400 cursor-not-allowed"
              title="Repositorio Privado"
            >
              <Lock className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
