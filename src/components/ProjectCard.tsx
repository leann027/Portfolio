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
      return 'bg-swatch-peach-bg text-swatch-peach-text border-swatch-peach-border/80 dark:bg-swatch-peach-border/20 dark:text-swatch-peach-darkText';
    }
    if (lower.includes('react') || lower.includes('typescript') || lower.includes('vite')) {
      return 'bg-swatch-lavender-bg text-swatch-lavender-text border-swatch-lavender-border/80 dark:bg-swatch-lavender-border/20 dark:text-swatch-lavender-darkText';
    }
    if (lower.includes('c ') || lower === 'c' || lower.includes('algoritmo') || lower.includes('punteros')) {
      return 'bg-swatch-mint-bg text-swatch-mint-text border-swatch-mint-border/80 dark:bg-swatch-mint-border/20 dark:text-swatch-mint-darkText';
    }
    if (lower.includes('actions') || lower.includes('n8n') || lower.includes('api')) {
      return 'bg-swatch-rose-bg text-swatch-rose-text border-swatch-rose-border/80 dark:bg-swatch-rose-border/20 dark:text-swatch-rose-darkText';
    }
    return 'bg-swatch-sky-bg text-swatch-sky-text border-swatch-sky-border/80 dark:bg-swatch-sky-border/20 dark:text-swatch-sky-darkText';
  };

  return (
    <article className="card-lift group flex flex-col justify-between rounded-3xl bg-earth-linen/80 dark:bg-earth-coffeeCard border border-earth-sand dark:border-earth-coffeeBorder shadow-soft p-6 sm:p-7">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-swatch-lavender-bg text-swatch-lavender-text dark:bg-swatch-lavender-border/20 dark:text-swatch-lavender-darkText border border-swatch-lavender-border/70">
                <Sparkles className="w-3 h-3 text-swatch-lavender" />
                <span>Insignia</span>
              </span>
            )}
            {project.academic && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-swatch-lemon-bg text-swatch-lemon-text dark:bg-swatch-lemon-border/20 dark:text-swatch-lemon-darkText border border-swatch-lemon-border/70">
                <GraduationCap className="w-3 h-3" />
                <span>{project.institution || 'Académico'}</span>
              </span>
            )}
          </div>

          <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
            {project.isPrivate ? (
              <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400" title="Código privado">
                <Lock className="w-3 h-3" /> Privado
              </span>
            ) : (
              <span className="text-emerald-700 dark:text-swatch-mint-darkText font-medium">Público</span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-earth-mocha dark:group-hover:text-swatch-lavender transition-colors duration-200">
          {project.title}
        </h3>

        {project.tagline && (
          <p className="text-xs font-semibold text-earth-mocha dark:text-swatch-lavender-darkText mt-1">
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
              className={`text-[11px] px-2.5 py-0.5 rounded-xl font-medium border shadow-2xs ${getTechBadgeClass(tech)}`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[11px] px-2 py-0.5 rounded-xl font-medium bg-earth-sand/60 dark:bg-earth-coffeeSubtle text-slate-600 dark:text-slate-400">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card Actions */}
      <div className="mt-6 pt-4 border-t border-earth-sand/70 dark:border-earth-coffeeBorder/70 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenDetails(project)}
          data-testid={`btn-details-${project.id}`}
          aria-label={`Ver especificaciones de ${project.title}`}
          className="btn-tactile inline-flex items-center gap-1.5 text-xs font-semibold text-earth-mocha dark:text-swatch-lavender-darkText hover:text-earth-darkMocha dark:hover:text-white transition-colors group/btn"
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
              className="btn-tactile p-2 rounded-xl bg-earth-sand/60 hover:bg-earth-taupe/40 dark:bg-earth-coffeeSubtle dark:hover:bg-earth-coffeeBorder text-slate-800 dark:text-slate-200 transition-colors"
              title="Demo en Vivo"
            >
              <ExternalLink className="w-3.5 h-3.5 text-earth-mocha dark:text-swatch-sky-darkText" />
            </a>
          )}

          {!project.isPrivate ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile p-2 rounded-xl bg-earth-sand/60 hover:bg-earth-taupe/40 dark:bg-earth-coffeeSubtle dark:hover:bg-earth-coffeeBorder text-slate-800 dark:text-slate-200 transition-colors"
              title="Código en GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span
              className="p-2 rounded-xl bg-earth-sand/30 dark:bg-earth-coffeeSubtle/40 text-slate-400 cursor-not-allowed"
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
