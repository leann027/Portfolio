import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  githubUser: string;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, githubUser }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-earth-light/85 dark:bg-earth-coffeeBg/85 border-b border-earth-sand/80 dark:border-earth-coffeeBorder transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="min-h-11 inline-flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-earth-sand dark:bg-earth-coffeeBorder text-earth-darkMocha dark:text-swatch-lavender-darkText flex items-center justify-center group-hover:scale-105 group-hover:rotate-12 transition-transform duration-300 shadow-xs">
            <Sparkles
              className="w-4 h-4 text-earth-darkMocha dark:text-swatch-lavender"
              aria-hidden="true"
            />
          </div>
          <span className="font-bold text-base sm:text-lg tracking-tight text-earth-ink-900 dark:text-stone-100">
            leann027<span className="text-earth-darkMocha dark:text-swatch-lavender">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Principal" className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="min-h-11 inline-flex items-center px-2 text-xs sm:text-sm font-medium text-earth-ink-700 hover:text-earth-darkMocha dark:text-stone-300 dark:hover:text-swatch-lavender-darkText transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-2 after:left-2 after:w-0 after:h-0.5 after:bg-earth-darkMocha dark:after:bg-swatch-lavender hover:after:w-[calc(100%-1rem)] after:transition-[width] after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Cambiar modo claro / oscuro"
            className="btn-tactile min-h-11 min-w-11 flex items-center justify-center rounded-xl text-earth-ink-700 hover:text-earth-ink-900 hover:bg-earth-sand/60 dark:text-stone-300 dark:hover:text-white dark:hover:bg-earth-coffeeCard"
          >
            {darkMode ? (
              <Sun
                className="w-4 h-4 text-swatch-butter animate-pulse-subtle hover:rotate-45 transition-transform duration-300"
                aria-hidden="true"
              />
            ) : (
              <Moon
                className="w-4 h-4 text-earth-darkMocha dark:text-swatch-butter hover:-rotate-12 transition-transform duration-300"
                aria-hidden="true"
              />
            )}
          </button>

          <a
            href={`https://github.com/${githubUser}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile min-h-11 inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-2xl bg-earth-darkMocha hover:bg-earth-ink-800 text-white shadow-soft hover:shadow-soft-hover"
          >
            <Github className="w-3.5 h-3.5" aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Cambiar modo claro / oscuro"
            className="btn-tactile min-h-11 min-w-11 flex items-center justify-center rounded-xl text-earth-ink-700 hover:text-earth-ink-900 hover:bg-earth-sand/60 dark:text-stone-300 dark:hover:text-white dark:hover:bg-earth-coffeeCard"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-swatch-butter" aria-hidden="true" />
            ) : (
              <Moon
                className="w-4 h-4 text-earth-darkMocha dark:text-swatch-butter"
                aria-hidden="true"
              />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            className="btn-tactile min-h-11 min-w-11 flex items-center justify-center rounded-xl text-earth-ink-700 hover:text-earth-ink-900 hover:bg-earth-sand/60 dark:text-stone-300 dark:hover:text-white dark:hover:bg-earth-coffeeCard"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Móvil"
          className="md:hidden border-b border-earth-sand dark:border-earth-coffeeBorder bg-earth-linen dark:bg-earth-coffeeBg px-4 pt-2 pb-6 space-y-2 animate-fade-up"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-11 flex items-center px-3.5 py-2.5 rounded-xl text-sm font-medium text-earth-ink-700 hover:text-earth-darkMocha dark:text-stone-300 dark:hover:text-swatch-lavender-darkText hover:bg-earth-sand/60 dark:hover:bg-earth-coffeeCard transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-earth-sand/60 dark:border-earth-coffeeBorder">
            <a
              href={`https://github.com/${githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile min-h-11 flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-earth-darkMocha hover:bg-earth-ink-800 text-white text-xs font-semibold shadow-sm"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              <span>Ver Perfil de GitHub</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
