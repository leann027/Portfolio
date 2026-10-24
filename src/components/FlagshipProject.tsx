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
      className="mb-12 rounded-2xl bg-earth-linen/95 dark:bg-earth-coffeeCard/95 border-2 border-swatch-lavender/40 dark:border-swatch-lavender/30 shadow-soft hover:shadow-rim-card-hover p-6 sm:p-8 lg:p-10 relative transition-[box-shadow,border-color] duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Project Overview & Meta */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-swatch-lavender-bg text-swatch-lavender-text dark:bg-swatch-lavender-border/20 dark:text-swatch-lavender-darkText border border-swatch-lavender-border/70 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-swatch-lavender" aria-hidden="true" />
              <span>Proyecto Insignia</span>
            </span>

            {project.role && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-swatch-mint-bg text-swatch-mint-text dark:bg-swatch-mint-border/20 dark:text-swatch-mint-darkText border border-swatch-mint-border/70 shadow-xs">
                <Award className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{project.role}</span>
              </span>
            )}

            <span className="text-xs font-medium text-swatch-lemon-text dark:text-swatch-lemon-darkText px-2.5 py-0.5 rounded-full bg-swatch-lemon-bg dark:bg-swatch-lemon-border/20 border border-swatch-lemon-border/70">
              {project.status}
            </span>
          </div>

          <h3
            id="flagship-project-title"
            className="text-2xl sm:text-3xl font-extrabold text-earth-ink-900 dark:text-stone-100 tracking-tight text-balance"
          >
            {project.title}
          </h3>

          {project.tagline && (
            <p className="text-sm font-semibold text-earth-darkMocha dark:text-swatch-lavender-darkText">
              {project.tagline}
            </p>
          )}

          <p className="text-xs sm:text-sm text-earth-ink-600 dark:text-stone-300 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Key highlights preview */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1.5 pt-2">
              {project.highlights.slice(0, 3).map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-earth-ink-700 dark:text-stone-300"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 text-swatch-mint-text dark:text-swatch-mint-darkText shrink-0 mt-0.5"
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
              <span className="block text-[11px] font-bold uppercase tracking-wider text-earth-ink-700 dark:text-stone-300 mb-2">
                Habilidades Clave Demostradas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.skillsDemonstrated.map((skill) => (
                  <span
                    key={skill}
                    className="badge-spring text-[11px] px-2.5 py-1 rounded-xl font-medium bg-earth-sand/60 dark:bg-earth-coffeeSubtle text-earth-ink-800 dark:text-stone-200 border border-earth-sand dark:border-earth-coffeeBorder"
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
              className="btn-tactile min-h-11 inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-earth-darkMocha hover:bg-earth-ink-900 text-white text-xs font-semibold shadow-soft"
            >
              <span>Ver Especificaciones Técnicas</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile min-h-11 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-earth-linen dark:bg-earth-coffeeCard text-earth-ink-800 dark:text-stone-200 hover:bg-earth-sand/70 dark:hover:bg-earth-coffeeSubtle border border-earth-sand dark:border-earth-coffeeBorder text-xs font-semibold shadow-xs"
              >
                <ExternalLink
                  className="w-3.5 h-3.5 text-earth-darkMocha dark:text-swatch-peach-darkText"
                  aria-hidden="true"
                />
                <span>Demo en Vivo</span>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile min-h-11 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-earth-linen dark:bg-earth-coffeeCard text-earth-ink-800 dark:text-stone-200 hover:bg-earth-sand/70 dark:hover:bg-earth-coffeeSubtle border border-earth-sand dark:border-earth-coffeeBorder text-xs font-semibold shadow-xs"
            >
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Código en GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Visual Diagram */}
        <div className="lg:col-span-5">
          <ProjectVisual
            visualType={project.visualType}
            projectId={project.id}
            title={project.title}
            className="w-full h-full min-h-[220px]"
          />
        </div>
      </div>
    </article>
  );
};
