import React, { useEffect, useRef } from 'react';
import {
  X,
  ExternalLink,
  Github,
  Lock,
  CheckCircle,
  Calendar,
  Sparkles,
  GraduationCap,
  Award,
} from 'lucide-react';
import { Project } from '../types/project';
import { ProjectVisual } from './ProjectVisual';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    // Save previous active element for focus restoration
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Lock body scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button initially
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      // Restore focus
      previousFocusRef.current?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-earth-ink-900/70 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-earth-linen dark:bg-earth-coffeeCard border border-earth-sand dark:border-earth-coffeeBorder rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden my-8 animate-fade-up max-h-[90vh] overflow-y-auto scrollbar-thin"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Cerrar modal"
          className="btn-tactile absolute top-5 right-5 p-2 rounded-full text-earth-ink-600 hover:text-earth-ink-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-earth-sand/60 dark:hover:bg-earth-coffeeSubtle transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual schematic preview */}
        {project.visualType && (
          <div className="mb-6">
            <ProjectVisual
              visualType={project.visualType}
              projectId={project.id}
              title={project.title}
              className="w-full h-44 sm:h-48"
            />
          </div>
        )}

        {/* Header tags */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-swatch-lavender-bg text-swatch-lavender-text dark:bg-swatch-lavender-border/20 dark:text-swatch-lavender-darkText border border-swatch-lavender-border/70">
              <Sparkles className="w-3 h-3 text-swatch-lavender" />
              <span>Proyecto Insignia</span>
            </span>
          )}
          {project.academic && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-swatch-lemon-bg text-swatch-lemon-text dark:bg-swatch-lemon-border/20 dark:text-swatch-lemon-darkText border border-swatch-lemon-border/70">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{project.institution || 'Académico'}</span>
            </span>
          )}
          <span className="text-xs font-medium text-earth-ink-700 dark:text-stone-200 px-2.5 py-0.5 rounded-full bg-earth-sand/60 dark:bg-earth-coffeeSubtle border border-earth-sand/70 dark:border-earth-coffeeBorder">
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h2
          id="modal-project-title"
          className="text-2xl sm:text-3xl font-extrabold text-earth-ink-900 dark:text-stone-100"
        >
          {project.title}
        </h2>
        {project.tagline && (
          <p className="text-xs font-semibold text-earth-darkMocha dark:text-swatch-lavender-darkText mt-1">
            {project.tagline}
          </p>
        )}

        {/* Recruiter Role Callout */}
        {project.role && (
          <div className="mt-4 p-3.5 rounded-2xl bg-swatch-mint-bg dark:bg-swatch-mint-border/15 border border-swatch-mint-border/50 flex items-center gap-3">
            <Award className="w-4 h-4 text-swatch-mint-text dark:text-swatch-mint-darkText shrink-0" />
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-swatch-mint-text dark:text-swatch-mint-darkText">
                Rol del Desarrollador
              </span>
              <span className="text-xs font-semibold text-earth-ink-900 dark:text-stone-100">
                {project.role}
              </span>
            </div>
          </div>
        )}

        {/* Full description */}
        <div className="mt-5 text-xs sm:text-sm text-earth-ink-600 dark:text-stone-300 leading-relaxed space-y-3">
          <p>{project.fullDescription}</p>
        </div>

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-6">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-earth-darkMocha dark:text-swatch-lavender-darkText mb-3">
              Aspectos Destacados & Arquitectura
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-earth-ink-700 dark:text-stone-200"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-swatch-mint-darkText shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Demonstrated Skills Callout */}
        {project.skillsDemonstrated && project.skillsDemonstrated.length > 0 && (
          <div className="mt-6 pt-5 border-t border-earth-sand/70 dark:border-earth-coffeeBorder/70">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-earth-ink-700 dark:text-stone-300 mb-2">
              Habilidades Técnicas Demostradas
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.skillsDemonstrated.map((skill) => (
                <span
                  key={skill}
                  className="badge-spring text-xs px-2.5 py-1 rounded-xl font-medium bg-earth-sand/60 dark:bg-earth-coffeeSubtle text-earth-ink-800 dark:text-stone-200 border border-earth-sand dark:border-earth-coffeeBorder"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Grid */}
        <div className="mt-5 pt-4 border-t border-earth-sand/70 dark:border-earth-coffeeBorder/70">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-earth-ink-700 dark:text-stone-300 mb-2">
            Tecnologías Empleadas
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="badge-spring text-xs px-2.5 py-1 rounded-xl font-medium bg-earth-sand/50 dark:bg-earth-coffeeSubtle text-earth-ink-700 dark:text-stone-200 border border-earth-sand dark:border-earth-coffeeBorder"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Metadata info */}
        <div className="mt-4 flex items-center gap-4 text-xs text-earth-ink-600 dark:text-stone-300">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>Última actualización: {project.updatedAt}</span>
          </span>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-5 border-t border-earth-sand/70 dark:border-earth-coffeeBorder/70 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-earth-darkMocha hover:bg-earth-ink-800 text-white text-xs font-semibold shadow-soft"
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
                className="btn-tactile inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-earth-sand/60 hover:bg-earth-taupe/40 dark:bg-earth-coffeeSubtle dark:hover:bg-earth-coffeeBorder text-earth-ink-800 dark:text-stone-200 text-xs font-semibold border border-earth-sand dark:border-earth-coffeeBorder transition"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Ver en GitHub</span>
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-earth-sand/30 dark:bg-earth-coffeeSubtle/40 text-earth-ink-700 dark:text-stone-300 text-xs font-medium border border-earth-sand/50 dark:border-earth-coffeeBorder">
                <Lock className="w-3.5 h-3.5" />
                <span>Repositorio Académico / Privado — Código protegido</span>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="btn-tactile px-4 py-2 rounded-xl text-xs font-medium text-earth-ink-700 hover:text-earth-ink-900 dark:text-stone-300 dark:hover:text-stone-100 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
