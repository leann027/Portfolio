import React from 'react';
import { User, Mail, MapPin, Github, GraduationCap, Award } from 'lucide-react';
import { UserProfile } from '../types/project';

interface AboutSectionProps {
  user: UserProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ user }) => {
  return (
    <section id="sobre-mi" className="py-16 sm:py-24 border-b border-earth-sand/70 dark:border-earth-coffeeBorder/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Bio */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-swatch-lavender-bg text-swatch-lavender-text dark:bg-swatch-lavender-border/20 dark:text-swatch-lavender-darkText border border-swatch-lavender-border/70 mb-3">
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
              <div className="card-lift p-4 rounded-2xl bg-earth-linen/80 dark:bg-earth-coffeeCard border border-earth-sand dark:border-earth-coffeeBorder shadow-soft">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-swatch-lemon-darkText font-semibold text-xs sm:text-sm mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>Terciario Urquiza</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Tecnicatura Superior en Desarrollo de Software
                </p>
              </div>

              <div className="card-lift p-4 rounded-2xl bg-earth-linen/80 dark:bg-earth-coffeeCard border border-earth-sand dark:border-earth-coffeeBorder shadow-soft">
                <div className="flex items-center gap-2 text-earth-mocha dark:text-swatch-peach-darkText font-semibold text-xs sm:text-sm mb-1">
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
            <div className="card-lift rounded-3xl bg-earth-linen dark:bg-earth-coffeeCard border border-earth-sand dark:border-earth-coffeeBorder p-7 sm:p-8 shadow-soft">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Contacto & Redes</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Abierto a proyectos, prácticas profesionales y colaboración técnica.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${user.email}`}
                  className="btn-tactile flex items-center gap-3.5 p-3 rounded-2xl bg-earth-sand/50 dark:bg-earth-coffeeSubtle hover:bg-earth-sand dark:hover:bg-earth-coffeeBorder text-xs sm:text-sm text-slate-800 dark:text-slate-200 border border-earth-sand/70 dark:border-earth-coffeeBorder shadow-xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-swatch-lavender-bg text-swatch-lavender-text dark:bg-swatch-lavender-border/20 dark:text-swatch-lavender-darkText flex items-center justify-center shrink-0">
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
                  className="btn-tactile flex items-center gap-3.5 p-3 rounded-2xl bg-earth-sand/50 dark:bg-earth-coffeeSubtle hover:bg-earth-sand dark:hover:bg-earth-coffeeBorder text-xs sm:text-sm text-slate-800 dark:text-slate-200 border border-earth-sand/70 dark:border-earth-coffeeBorder shadow-xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-earth-mocha/20 text-earth-mocha dark:bg-earth-mocha/30 dark:text-swatch-peach-darkText flex items-center justify-center shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">GitHub</span>
                    <span className="font-medium">github.com/{user.github}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-earth-sand/50 dark:bg-earth-coffeeSubtle text-xs sm:text-sm text-slate-800 dark:text-slate-200 border border-earth-sand/70 dark:border-earth-coffeeBorder shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-swatch-mint-bg text-swatch-mint-text dark:bg-swatch-mint-border/20 dark:text-swatch-mint-darkText flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">Ubicación</span>
                    <span className="font-medium">{user.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-earth-sand/70 dark:border-earth-coffeeBorder/70 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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
