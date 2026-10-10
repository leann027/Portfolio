import React from 'react';
import { User, Mail, MapPin, Github, GraduationCap, Award } from 'lucide-react';
import { UserProfile } from '../types/project';

interface AboutSectionProps {
  user: UserProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ user }) => {
  return (
    <section id="sobre-mi" className="py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60 mb-3">
              <User className="w-3.5 h-3.5 text-brand-500" />
              <span>Perfil Profesional</span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Sobre Mí & Trayectoria
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Soy estudiante de la carrera de <strong>Desarrollo de Software en el Terciario Urquiza</strong>. Mi enfoque técnico combina la solidez de los fundamentos de ciencias de la computación con las mejores prácticas de la ingeniería de software moderna.
              </p>
              <p>
                A través de proyectos prácticos y la resolución de desafíos del prestigioso curso <strong>CS50 de Harvard</strong>, he profundizado en la manipulación de memoria de bajo nivel y análisis de complejidad en <strong>lenguaje C</strong>, así como en el diseño de aplicaciones modulares orientadas a objetos y sistemas de gestión de datos en <strong>Python</strong>.
              </p>
              <p>
                Este portfolio interactivo representa mi primer gran proyecto integral, consolidando principios de arquitectura desacoplada, testing automatizado e integración continua (CI/CD) para recibir y organizar de forma escalable cada nuevo proyecto que desarrolle.
              </p>
            </div>

            {/* Quick Education Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5 text-brand-600 dark:text-brand-400 font-semibold text-sm mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>Terciario Urquiza</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Tecnicatura Superior en Desarrollo de Software (Rosario)
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5 text-amber-600 dark:text-amber-400 font-semibold text-sm mb-1">
                  <Award className="w-4 h-4" />
                  <span>CS50 Harvard University</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Introducción a las Ciencias de la Computación & Algoritmos
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Card */}
          <div id="contacto" className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-8 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold mb-2">Contacto & Redes</h3>
              <p className="text-xs text-slate-400 mb-6">
                Abierto a oportunidades de desarrollo, prácticas profesionales y colaboración técnica.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${user.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 transition text-sm text-slate-200 hover:text-white"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Correo Electrónico</span>
                    <span className="font-medium text-xs sm:text-sm">{user.email}</span>
                  </div>
                </a>

                <a
                  href={`https://github.com/${user.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 transition text-sm text-slate-200 hover:text-white"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-700/60 text-slate-300 flex items-center justify-center shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">GitHub</span>
                    <span className="font-medium text-xs sm:text-sm">github.com/{user.github}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/60 text-sm text-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">Ubicación</span>
                    <span className="font-medium text-xs sm:text-sm">{user.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Disponible para nuevos proyectos</span>
                </span>
                <span className="text-slate-500 font-mono">2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
