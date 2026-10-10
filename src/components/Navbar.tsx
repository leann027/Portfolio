import React, { useState } from 'react';
import { Sun, Moon, Github, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  githubUser: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  toggleDarkMode,
  githubUser,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-lofi-bg/85 dark:bg-lofi-darkBg/85 border-b border-lofi-border/70 dark:border-lofi-darkBorder/70 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-pastel-lavender-badge dark:bg-pastel-lavender-bg/30 text-pastel-lavender-text dark:text-pastel-lavender-darkText flex items-center justify-center group-hover:rotate-6 transition-transform">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
            leann027<span className="text-purple-400 dark:text-purple-300">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs sm:text-sm font-medium text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            aria-label="Cambiar modo claro / oscuro"
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-lofi-subtle dark:text-slate-300 dark:hover:text-white dark:hover:bg-lofi-darkSubtle transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          <a
            href={`https://github.com/${githubUser}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white shadow-sm transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleDarkMode}
            aria-label="Cambiar modo claro / oscuro"
            className="p-2 rounded-xl text-slate-600 hover:bg-lofi-subtle dark:text-slate-300 dark:hover:bg-lofi-darkSubtle"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className="p-2 rounded-xl text-slate-600 hover:bg-lofi-subtle dark:text-slate-300 dark:hover:bg-lofi-darkSubtle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-lofi-border dark:border-lofi-darkBorder bg-lofi-bg dark:bg-lofi-darkBg px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-lofi-subtle dark:text-slate-200 dark:hover:bg-lofi-darkSubtle"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-lofi-border dark:border-lofi-darkBorder">
            <a
              href={`https://github.com/${githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white dark:bg-slate-800 text-xs font-semibold"
            >
              <Github className="w-4 h-4" />
              <span>Ver Perfil de GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
