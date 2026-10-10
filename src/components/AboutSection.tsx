import React from 'react';
import { User, Mail, MapPin, Github, GraduationCap, Award } from 'lucide-react';
import { UserProfile } from '../types/project';

interface AboutSectionProps {
  user: UserProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ user }) => {
  return (
    <section id="sobre-mi" className="py-16 sm:py-24 border-b border-lofi-border/70 dark:border-lofi-darkBorder/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-pastel-lavender-badge dark:bg-pastel-lavender-bg/30 text-pastel-lavender-text dark:text-pastel-lavender-darkText border border-pastel-lavender-border/80 dark:border-pastel-lavender-border/30 mb-3">
              <User className="w-3.5 h-3.5" />
              <span>Perfil & Trayectoria</span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Sobre Mí
            </h2>

            <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Soy estudiante de la carrera de <strong>Desarrollo de Software en el Terciario Urquiza</strong> (Rosario, Argentina). Mi objetivo es diseñar y construir software de calidad, combinando fundamentos de ciencias de la computación con las mejores prácticas del desarrollo moderno.
              </p>
              <p>
                A través de proyectos prácticos y la resolución de desafíos del curso <strong>CS50 de Harvard</strong>, he profundizado en la manipulación de memoria de bajo nivel, punteros y análisis de algoritmos en <strong>lenguaje C</strong>, así como en el diseño de aplicaciones modulares de escritorio orientadas a objetos y procesamiento de datos en <strong>Python</strong>.
              </p>
              <p>
                Este portfolio interactivo representa mi primer gran proyecto integral, consolidando arquitectura modular, diseño responsivo, pruebas automatizadas y despliegue continuo con GitHub Actions para centralizar y exhibir mis desarrollos.
              </p>
            </div>

            {/* Education Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-lofi-card dark:bg-lofi-darkCard border border-lofi-border dark:border-lofi-darkBorder shadow-lofi">
                <div className="flex items-center gap-2 text-pastel-matcha-text dark:text-pastel-matcha-darkText font-semibold text-xs sm:text-sm mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>Terciario Urquiza</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Tecnicatura Superior en Desarrollo de Software
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-lofi-card dark:bg-lofi-darkCard border border-lofi-border dark:border-lofi-darkBorder shadow-lofi">
                <div className="flex items-center gap-2 text-pastel-peach-text dark:text-pastel-peach-darkText font-semibold text-xs sm:text-sm mb-1">
                  <Award className="w-4 h-4" />
                  <span>CS50 Harvard University</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Fundamentos Computacionales, Algoritmos & C
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Card */}
          <div id="contacto" className="lg:col-span-5">
            <div className="rounded-3xl bg-lofi-card dark:bg-lofi-darkCard border border-lofi-border dark:border-lofi-darkBorder p-7 sm:p-8 shadow-lofi">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Contacto & Redes</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Abierto a proyectos, prácticas profesionales y colaboración técnica.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${user.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-lofi-subtle/70 dark:bg-lofi-darkSubtle/70 hover:bg-lofi-subtle dark:hover:bg-lofi-darkSubtle transition text-xs sm:text-sm text-slate-700 dark:text-slate-200 border border-lofi-border/60 dark:border-lofi-darkBorder/60"
                >
                  <div className="w-8 h-8 rounded-xl bg-pastel-lavender-badge text-pastel-lavender-text dark:bg-pastel-lavender-bg/30 dark:text-pastel-lavender-darkText flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Correo</span>
                    <span className="font-medium truncate block">{user.email}</span>
                  </div>
                </a>

                <a
                  href={`https://github.com/${user.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-lofi-subtle/70 dark:bg-lofi-darkSubtle/70 hover:bg-lofi-subtle dark:hover:bg-lofi-darkSubtle transition text-xs sm:text-sm text-slate-700 dark:text-slate-200 border border-lofi-border/60 dark:border-lofi-darkBorder/60"
                >
                  <div className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">GitHub</span>
                    <span className="font-medium">github.com/{user.github}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-lofi-subtle/70 dark:bg-lofi-darkSubtle/70 text-xs sm:text-sm text-slate-700 dark:text-slate-200 border border-lofi-border/60 dark:border-lofi-darkBorder/60">
                  <div className="w-8 h-8 rounded-xl bg-pastel-matcha-badge text-pastel-matcha-text dark:bg-pastel-matcha-bg/30 dark:text-pastel-matcha-darkText flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Ubicación</span>
                    <span className="font-medium">{user.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-lofi-border/70 dark:border-lofi-darkBorder/70 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Disponible para nuevos desafíos</span>
                </span>
                <span className="font-mono text-[11px]">2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
