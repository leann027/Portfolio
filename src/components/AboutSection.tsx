import React from 'react';
import { Mail, MapPin, Github, GraduationCap, Award } from 'lucide-react';
import { UserProfile } from '../types/project';

interface AboutSectionProps {
  user: UserProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ user }) => {
  return (
    <section
      id="sobre-mi"
      className="py-16 sm:py-24 border-b border-earth-sand/70 dark:border-earth-coffeeBorder/70"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Bio */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-earth-sand/60 dark:border-earth-coffeeBorder/60">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-earth-ink-900 dark:text-stone-100 tracking-tight text-balance">
                Sobre Mí
              </h2>
              <span className="font-mono text-[11px] font-semibold px-3 py-1 rounded-xl bg-earth-linen dark:bg-earth-coffeeCard text-earth-ink-700 dark:text-stone-300 border border-earth-sand dark:border-earth-coffeeBorder">
                PERFIL // FORMACIÓN
              </span>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-earth-ink-700 dark:text-stone-300 leading-relaxed max-w-[65ch]">
              <p>
                Soy estudiante de la carrera de{' '}
                <strong>Desarrollo de Software en el Terciario Urquiza</strong> (Rosario,
                Argentina). Mi objetivo es diseñar y construir software de calidad, combinando
                fundamentos de ciencias de la computación con las mejores prácticas del desarrollo
                moderno.
              </p>
              <p>
                A través de proyectos prácticos y la resolución de desafíos del curso{' '}
                <strong>CS50 de Harvard</strong>, he profundizado en la manipulación de memoria de
                bajo nivel, punteros y análisis de algoritmos en <strong>lenguaje C</strong>, así
                como en el diseño de aplicaciones modulares de escritorio orientadas a objetos y
                procesamiento de datos en <strong>Python</strong>.
              </p>
              <p>
                Me enfoco en el desarrollo con arquitectura modular, diseño responsivo, pruebas
                automatizadas e integración continua con GitHub Actions para entregar software
                robusto y mantenible.
              </p>
            </div>

            {/* Education Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card-lift p-4 rounded-2xl bg-earth-linen/85 dark:bg-earth-coffeeCard border border-earth-sand dark:border-earth-coffeeBorder shadow-soft">
                <div className="flex items-center gap-2 text-swatch-lemon-text dark:text-swatch-lemon-darkText font-semibold text-xs sm:text-sm mb-1">
                  <GraduationCap className="w-4 h-4" aria-hidden="true" />
                  <span>Terciario Urquiza</span>
                </div>
                <p className="text-[11px] text-earth-ink-700 dark:text-stone-300">
                  Tecnicatura Superior en Desarrollo de Software
                </p>
              </div>

              <div className="card-lift p-4 rounded-2xl bg-earth-linen/80 dark:bg-earth-coffeeCard border border-earth-sand dark:border-earth-coffeeBorder shadow-soft">
                <div className="flex items-center gap-2 text-earth-darkMocha dark:text-swatch-peach-darkText font-semibold text-xs sm:text-sm mb-1">
                  <Award className="w-4 h-4" aria-hidden="true" />
                  <span>CS50 Harvard University</span>
                </div>
                <p className="text-[11px] text-earth-ink-700 dark:text-stone-300">
                  Fundamentos Computacionales, Algoritmos & C
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Card */}
          <section id="contacto" aria-labelledby="contacto-heading" className="lg:col-span-5">
            <div className="card-lift rounded-2xl bg-earth-linen/85 dark:bg-earth-coffeeCard border border-earth-sand dark:border-earth-coffeeBorder p-7 sm:p-8 shadow-soft">
              <h3
                id="contacto-heading"
                className="text-lg font-bold text-earth-ink-900 dark:text-stone-100 mb-1"
              >
                Contacto & Redes
              </h3>
              <p className="text-xs text-earth-ink-600 dark:text-stone-300 mb-6">
                Abierto a proyectos, prácticas profesionales y colaboración técnica.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${user.email}`}
                  className="btn-tactile flex items-center gap-3.5 p-3 rounded-2xl bg-earth-sand/50 dark:bg-earth-coffeeSubtle hover:bg-earth-sand dark:hover:bg-earth-coffeeBorder text-xs sm:text-sm text-earth-ink-800 dark:text-stone-200 border border-earth-sand/70 dark:border-earth-coffeeBorder shadow-xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-swatch-lavender-bg text-swatch-lavender-text dark:bg-swatch-lavender-border/20 dark:text-swatch-lavender-darkText flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-earth-ink-700 dark:text-stone-300 block font-semibold">
                      Correo
                    </span>
                    <span className="font-medium truncate block">{user.email}</span>
                  </div>
                </a>

                <a
                  href={`https://github.com/${user.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile flex items-center gap-3.5 p-3 rounded-2xl bg-earth-sand/50 dark:bg-earth-coffeeSubtle hover:bg-earth-sand dark:hover:bg-earth-coffeeBorder text-xs sm:text-sm text-earth-ink-800 dark:text-stone-200 border border-earth-sand/70 dark:border-earth-coffeeBorder shadow-xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-earth-mocha/20 text-earth-darkMocha dark:bg-earth-mocha/30 dark:text-swatch-peach-darkText flex items-center justify-center shrink-0">
                    <Github className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-earth-ink-700 dark:text-stone-300 block font-semibold">
                      GitHub
                    </span>
                    <span className="font-medium">github.com/{user.github}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-earth-sand/50 dark:bg-earth-coffeeSubtle text-xs sm:text-sm text-earth-ink-800 dark:text-stone-200 border border-earth-sand/70 dark:border-earth-coffeeBorder shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-swatch-mint-bg text-swatch-mint-text dark:bg-swatch-mint-border/20 dark:text-swatch-mint-darkText flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-earth-ink-700 dark:text-stone-300 block font-semibold">
                      Ubicación
                    </span>
                    <span className="font-medium">{user.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-earth-sand/70 dark:border-earth-coffeeBorder/70 flex items-center justify-between text-xs text-earth-ink-600 dark:text-stone-300">
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full bg-swatch-mint-text dark:bg-swatch-mint animate-pulse"
                    aria-hidden="true"
                  />
                  <span>Disponible para nuevos desafíos</span>
                </span>
                <span className="font-mono text-[11px]">2026</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
