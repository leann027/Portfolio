import React from 'react';
import { Mail, Github } from 'lucide-react';
import { UserProfile } from '../types/project';

interface AboutSectionProps {
  user: UserProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ user }) => {
  return (
    <section
      id="sobre-mi"
      className="py-16 sm:py-24 border-b border-slate-200 dark:border-brand-border/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Bio & Academics */}
          <div className="lg:col-span-7">
            <h2 className="mb-6 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance">
              Sobre Mí
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-brand-textMuted leading-relaxed max-w-[65ch]">
              <p>
                Soy estudiante de la carrera de{' '}
                <strong className="text-slate-900 dark:text-white">
                  Desarrollo de Software en el Terciario Urquiza
                </strong>{' '}
                (Rosario, Argentina). Mi objetivo es diseñar y construir software de calidad,
                combinando fundamentos de ciencias de la computación con las mejores prácticas del
                desarrollo moderno.
              </p>
              <p>
                A través de proyectos prácticos y la resolución de desafíos del curso{' '}
                <strong className="text-slate-900 dark:text-white">CS50 de Harvard</strong>, he
                profundizado en la manipulación de memoria de bajo nivel, punteros y análisis de
                algoritmos en <strong className="text-slate-900 dark:text-white">lenguaje C</strong>
                , así como en el diseño de aplicaciones modulares de escritorio orientadas a objetos
                y procesamiento de datos en{' '}
                <strong className="text-slate-900 dark:text-white">Python</strong>.
              </p>
              <p>
                En desarrollo web, creo experiencias interactivas modernas con{' '}
                <strong className="text-slate-900 dark:text-white">
                  React 19, Next.js y Three.js / WebGL
                </strong>
                , combinando gráficos 3D en tiempo real, análisis de audio y arquitectura modular
                con pruebas automatizadas e integración continua con GitHub Actions.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Card */}
          <section id="contacto" aria-labelledby="contacto-heading" className="lg:col-span-5">
            <div className="card-lift rounded-2xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border p-7 sm:p-8 shadow-xl space-y-6">
              <div>
                <h3
                  id="contacto-heading"
                  className="text-lg font-bold text-slate-900 dark:text-white mb-1"
                >
                  Contacto & Redes
                </h3>
                <p className="text-xs text-slate-600 dark:text-brand-textMuted">
                  Abierto a proyectos, prácticas profesionales y colaboración técnica.
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <a
                  href={`mailto:${user.email}`}
                  className="btn-tactile flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-brand-surface hover:bg-slate-100 dark:hover:bg-brand-surfaceAlt text-slate-800 dark:text-brand-text border border-slate-200 dark:border-brand-border hover:border-blue-500 dark:hover:border-brand-primary transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-brand-primary/10 text-blue-700 dark:text-brand-primary flex items-center justify-center shrink-0 border border-blue-300 dark:border-brand-primary/30">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-brand-textDim block font-semibold">
                      Correo Electrónico
                    </span>
                    <span className="font-semibold text-blue-700 dark:text-brand-primary truncate block">
                      {user.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`https://github.com/${user.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-brand-surface hover:bg-slate-100 dark:hover:bg-brand-surfaceAlt text-slate-800 dark:text-brand-text border border-slate-200 dark:border-brand-border hover:border-emerald-500 dark:hover:border-brand-secondary transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-brand-secondary/10 text-emerald-700 dark:text-brand-secondary flex items-center justify-center shrink-0 border border-emerald-300 dark:border-brand-secondary/30">
                    <Github className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-brand-textDim block font-semibold">
                      GitHub Oficial
                    </span>
                    <span className="font-semibold text-emerald-700 dark:text-brand-secondary truncate block">
                      github.com/{user.github}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
