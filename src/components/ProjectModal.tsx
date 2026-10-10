import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Lock, CheckCircle, Calendar, Sparkles, GraduationCap } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-lofi-card dark:bg-lofi-darkCard border border-lofi-border dark:border-lofi-darkBorder rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-lofi-subtle dark:hover:bg-lofi-darkSubtle transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header tags */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-pastel-lavender-badge text-pastel-lavender-text dark:bg-pastel-lavender-bg/40 dark:text-pastel-lavender-darkText border border-pastel-lavender-border/60">
              <Sparkles className="w-3 h-3" />
              <span>Proyecto Insignia</span>
            </span>
          )}
          {project.academic && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-pastel-matcha-badge text-pastel-matcha-text dark:bg-pastel-matcha-bg/40 dark:text-pastel-matcha-darkText border border-pastel-matcha-border/60">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{project.institution || 'Académico'}</span>
            </span>
          )}
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full bg-lofi-subtle dark:bg-lofi-darkSubtle">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          {project.title}
        </h2>
        {project.tagline && (
          <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mt-1">
            {project.tagline}
          </p>
        )}

        {/* Full description */}
        <div className="mt-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
          <p>{project.fullDescription}</p>
        </div>

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-6">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Aspectos Destacados & Arquitectura
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Grid */}
        <div className="mt-6 pt-5 border-t border-lofi-border dark:border-lofi-darkBorder">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
            Tecnologías Empleadas
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-lg font-medium bg-lofi-subtle dark:bg-lofi-darkSubtle text-slate-700 dark:text-slate-300 border border-lofi-border dark:border-lofi-darkBorder"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Metadata info */}
        <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>Última actualización: {project.updatedAt}</span>
          </span>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-5 border-t border-lofi-border dark:border-lofi-darkBorder flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 text-xs font-semibold shadow-sm transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Demo en Vivo</span>
              </a>
            )}

            {!project.isPrivate ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-lofi-subtle hover:bg-slate-200 dark:bg-lofi-darkSubtle dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-lofi-border dark:border-lofi-darkBorder transition"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Ver en GitHub</span>
              </a>
            ) : (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-lofi-subtle/70 dark:bg-lofi-darkSubtle/70 text-slate-500 text-xs font-medium">
                <Lock className="w-3.5 h-3.5" />
                <span>Repositorio Privado</span>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
