import React, { useEffect, useRef } from 'react';
import {
  X,
  ExternalLink,
  Github,
  Lock,
  CheckCircle,
  Sparkles,
  GraduationCap,
  Award,
  ShieldCheck,
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

    previousFocusRef.current = document.activeElement as HTMLElement;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

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
      previousFocusRef.current?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#090d13]/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-[#0c1017] border border-brand-border rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden my-8 animate-fade-up max-h-[90vh] overflow-y-auto custom-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold bg-brand-primary/10 text-brand-primary border border-brand-primary/30">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Insignia</span>
              </span>
            )}
            {project.role && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/30">
                <Award className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{project.role}</span>
              </span>
            )}
            {project.academic && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full font-medium bg-brand-amber/10 text-brand-amber border border-brand-amber/30">
                <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{project.institution || 'Académico'}</span>
              </span>
            )}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal de detalles"
            className="btn-tactile p-2 rounded-xl bg-brand-surface hover:bg-brand-surfaceAlt text-brand-textMuted hover:text-white border border-brand-border shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Visual representation */}
        {project.visualType && (
          <div className="mb-6">
            <ProjectVisual
              visualType={project.visualType}
              projectId={project.id}
              title={project.title}
              className="w-full"
            />
          </div>
        )}

        {/* Title */}
        <h3
          id="modal-project-title"
          className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
        >
          {project.title}
        </h3>

        {project.tagline && (
          <p className="mt-1 text-sm font-semibold font-mono text-brand-secondary">
            {project.tagline}
          </p>
        )}

        {/* Full description */}
        <p className="mt-4 text-xs sm:text-sm text-brand-textMuted leading-relaxed">
          {project.fullDescription}
        </p>

        {/* Architecture & Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-6 pt-5 border-t border-brand-border/60">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-primary mb-3">
              Aspectos Destacados & Arquitectura
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((h, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-brand-text leading-relaxed"
                >
                  <CheckCircle
                    className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills Demonstrated */}
        {project.skillsDemonstrated && project.skillsDemonstrated.length > 0 && (
          <div className="mt-6 pt-5 border-t border-brand-border/60">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-textDim mb-3">
              Competencias Verificadas
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.skillsDemonstrated.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-brand-surface text-brand-text border border-brand-border"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="mt-6 pt-5 border-t border-brand-border/60">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-textDim mb-3">
            Stack Tecnológico & Lenguajes
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.languages.map((l) => (
              <span
                key={l}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-brand-primary/10 text-brand-primary border border-brand-primary/30"
              >
                {l}
              </span>
            ))}
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-brand-surfaceAlt text-brand-text border border-brand-border"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons & Private Notice */}
        <div className="mt-8 pt-5 border-t border-brand-border flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono">
            {project.isPrivate ? (
              <div className="flex items-center gap-2 text-brand-amber">
                <Lock className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Repositorio Académico Privado</span>
              </div>
            ) : (
              <span className="text-brand-secondary flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Código Abierto Verificado</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && !project.isPrivate && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-surface hover:bg-brand-surfaceAlt text-brand-text text-xs font-mono border border-brand-border hover:border-brand-primary"
              >
                <Github className="w-3.5 h-3.5" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-black text-xs font-mono font-bold"
              >
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Demo en Vivo</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="btn-tactile px-4 py-2 rounded-xl bg-brand-surface hover:bg-brand-surfaceAlt text-brand-textMuted hover:text-white text-xs font-mono border border-brand-border cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
