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
  const getTechBadgeClass = (tech: string) => {
    const lower = tech.toLowerCase();
    if (lower.includes('python')) {
      return 'bg-swatch-peach-bg text-swatch-peach-text border-swatch-peach-border/80 dark:bg-swatch-peach-border/20 dark:text-swatch-peach-darkText';
    }
    if (lower.includes('react') || lower.includes('typescript') || lower.includes('vite')) {
      return 'bg-swatch-lavender-bg text-swatch-lavender-text border-swatch-lavender-border/80 dark:bg-swatch-lavender-border/20 dark:text-swatch-lavender-darkText';
    }
    if (
      lower.includes('c ') ||
      lower === 'c' ||
      lower.includes('algoritmo') ||
      lower.includes('punteros')
    ) {
      return 'bg-swatch-mint-bg text-swatch-mint-text border-swatch-mint-border/80 dark:bg-swatch-mint-border/20 dark:text-swatch-mint-darkText';
    }
    if (lower.includes('actions') || lower.includes('n8n') || lower.includes('api')) {
      return 'bg-swatch-rose-bg text-swatch-rose-text border-swatch-rose-border/80 dark:bg-swatch-rose-border/20 dark:text-swatch-rose-darkText';
    }
    return 'bg-swatch-sky-bg text-swatch-sky-text border-swatch-sky-border/80 dark:bg-swatch-sky-border/20 dark:text-swatch-sky-darkText';
  };

  return (
    <article
      style={{ animationDelay: `${index * 70}ms` }}
      className="card-lift animate-fade-up group flex flex-col justify-between rounded-2xl bg-earth-linen/85 dark:bg-earth-coffeeCard/90 border border-earth-sand/90 dark:border-earth-coffeeBorder shadow-soft hover:shadow-rim-card-hover p-6 sm:p-7 relative"
    >
      <div>
        {/* Project Visual Schema */}
        {project.visualType && (
          <div className="mb-5">
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
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-swatch-mint-bg text-swatch-mint-text dark:bg-swatch-mint-border/20 dark:text-swatch-mint-darkText border border-swatch-mint-border/70">
                <Award className="w-3 h-3" aria-hidden="true" />
                <span>{project.role}</span>
              </span>
            )}
            {project.featured && !project.role && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-swatch-lavender-bg text-swatch-lavender-text dark:bg-swatch-lavender-border/20 dark:text-swatch-lavender-darkText border border-swatch-lavender-border/70">
                <Sparkles className="w-3 h-3 text-swatch-lavender" aria-hidden="true" />
                <span>Insignia</span>
              </span>
            )}
            {project.academic && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-swatch-lemon-bg text-swatch-lemon-text dark:bg-swatch-lemon-border/20 dark:text-swatch-lemon-darkText border border-swatch-lemon-border/70">
                <GraduationCap className="w-3 h-3" aria-hidden="true" />
                <span>{project.institution || 'Académico'}</span>
              </span>
            )}
          </div>

          <div className="text-[11px] font-medium text-earth-ink-600 dark:text-stone-300">
            {project.isPrivate ? (
              <span className="inline-flex items-center gap-1 text-earth-ink-700 dark:text-stone-300">
                <Lock className="w-3 h-3" aria-hidden="true" /> Privado
              </span>
            ) : (
              <span className="text-swatch-mint-text dark:text-swatch-mint-darkText font-medium">
                Público
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-earth-ink-900 dark:text-stone-100 group-hover:text-earth-darkMocha dark:group-hover:text-swatch-lavender text-balance">
          {project.title}
        </h3>

        {project.tagline && (
          <p className="text-xs font-semibold text-earth-darkMocha dark:text-swatch-lavender-darkText mt-1">
            {project.tagline}
          </p>
        )}

        {/* Short Description */}
        <p className="mt-3.5 text-xs sm:text-sm text-earth-ink-600 dark:text-stone-300 leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Technologies Pills */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className={`badge-spring text-[11px] px-2.5 py-0.5 rounded-xl font-medium border shadow-2xs ${getTechBadgeClass(tech)}`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="badge-spring text-[11px] px-2 py-0.5 rounded-xl font-medium bg-earth-sand/60 dark:bg-earth-coffeeSubtle text-earth-ink-700 dark:text-stone-300">
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
          className="btn-tactile min-h-11 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-earth-sand/55 dark:bg-earth-coffeeSubtle text-earth-ink-900 dark:text-stone-100 hover:bg-earth-darkMocha hover:text-white dark:hover:bg-swatch-lavender dark:hover:text-earth-ink-900 border border-earth-sand dark:border-earth-coffeeBorder group/btn shadow-2xs"
        >
          <span>Ver Especificaciones</span>
          <ArrowUpRight
            className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
            aria-hidden="true"
          />
        </button>

        <div className="flex items-center gap-1.5">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver demo en vivo de ${project.title}`}
              className="btn-tactile min-h-11 min-w-11 flex items-center justify-center rounded-xl bg-earth-sand/60 hover:bg-earth-taupe/40 dark:bg-earth-coffeeSubtle dark:hover:bg-earth-coffeeBorder text-earth-ink-800 dark:text-stone-200"
            >
              <ExternalLink
                className="w-4 h-4 text-earth-darkMocha dark:text-swatch-sky-darkText"
                aria-hidden="true"
              />
            </a>
          )}

          {!project.isPrivate ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver código en GitHub de ${project.title}`}
              className="btn-tactile min-h-11 min-w-11 flex items-center justify-center rounded-xl bg-earth-sand/60 hover:bg-earth-taupe/40 dark:bg-earth-coffeeSubtle dark:hover:bg-earth-coffeeBorder text-earth-ink-800 dark:text-stone-200"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>
          ) : (
            <span
              className="min-h-11 min-w-11 flex items-center justify-center rounded-xl bg-earth-sand/30 dark:bg-earth-coffeeSubtle/40 text-earth-ink-600 dark:text-stone-300 cursor-not-allowed"
              role="img"
              aria-label={`Repositorio privado para ${project.title}`}
            >
              <Lock className="w-4 h-4" aria-hidden="true" />
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
