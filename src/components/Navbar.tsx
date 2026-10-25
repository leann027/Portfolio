import React, { useState, useEffect } from 'react';
import { Sun, Moon, Github, Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  githubUser: string;
  onOpenCliQuickfind?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  toggleDarkMode,
  githubUser,
  onOpenCliQuickfind,
}) => {
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
    { label: './proyectos', href: '#proyectos' },
    { label: './arquitectura', href: '#architecture' },
    { label: './actividad', href: '#actividad' },
    { label: './habilidades', href: '#habilidades' },
    { label: './sobre-mi', href: '#sobre-mi' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-[#090d13]/90 border-b border-slate-200 dark:border-brand-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 font-mono text-base font-bold text-blue-700 dark:text-brand-primary hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span className="text-emerald-700 dark:text-brand-secondary">&gt;</span>
            <span>dev://{githubUser}</span>
          </a>

          <div className="hidden xl:flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-brand-surface border border-emerald-600/30 dark:border-brand-secondary/30 text-[11px] font-mono text-emerald-800 dark:text-brand-secondary font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-brand-secondary animate-pulse" />
            <span>disponible para desarrollo</span>
          </div>
        </div>

        {/* Desktop Navigation Links (hidden on mobile/tablet to eliminate horizontal overflow) */}
        <nav aria-label="Principal" className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-slate-700 hover:text-blue-700 dark:text-brand-textMuted dark:hover:text-brand-primary transition-colors py-1 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* CLI Quickfind trigger */}
          {onOpenCliQuickfind && (
            <button
              type="button"
              onClick={onOpenCliQuickfind}
              className="btn-tactile flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-brand-surface border border-slate-200 dark:border-brand-border text-slate-700 dark:text-brand-textMuted hover:border-blue-500 dark:hover:border-brand-primary/60 text-xs font-mono transition-colors cursor-pointer"
              title="Abrir CLI Quickfind (⌘K)"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-700 dark:text-brand-secondary" />
              <span>Buscar</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-brand-border border border-slate-200 dark:border-transparent text-[10px] text-slate-700 dark:text-brand-text font-semibold">
                ⌘K
              </kbd>
            </button>
          )}

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Cambiar modo claro / oscuro"
            className="btn-tactile min-h-9 min-w-9 p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-brand-textMuted dark:hover:text-white dark:hover:bg-brand-surface border border-transparent hover:border-slate-200 dark:hover:border-brand-border transition-colors cursor-pointer"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-brand-amber animate-pulse-subtle" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4 text-blue-700" aria-hidden="true" />
            )}
          </button>

          {/* GitHub direct link */}
          <a
            href={`https://github.com/${githubUser}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-brand-surfaceAlt dark:text-brand-primary border border-slate-900 dark:border-brand-border hover:bg-slate-800 dark:hover:border-brand-primary text-xs font-mono font-medium dark:hover:bg-brand-primaryGlow transition-all"
          >
            <Github className="w-3.5 h-3.5" aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Hamburger & Theme Trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Cambiar modo claro / oscuro"
            className="btn-tactile min-h-10 min-w-10 flex items-center justify-center rounded-xl text-slate-700 hover:text-slate-900 dark:text-brand-textMuted dark:hover:text-white"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-brand-amber" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4 text-blue-700" aria-hidden="true" />
            )}
          </button>

          {onOpenCliQuickfind && (
            <button
              type="button"
              onClick={onOpenCliQuickfind}
              aria-label="Buscar en terminal"
              className="btn-tactile min-h-10 min-w-10 flex items-center justify-center rounded-xl text-blue-700 dark:text-brand-primary hover:bg-slate-100 dark:hover:bg-brand-surface"
            >
              <Terminal className="w-4 h-4" />
            </button>
          )}

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            className="btn-tactile min-h-10 min-w-10 flex items-center justify-center rounded-xl text-slate-800 dark:text-brand-text"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-brand-border bg-white/95 dark:bg-brand-surface/95 backdrop-blur-xl px-4 py-4 space-y-3 font-mono text-xs animate-fade-up">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-800 dark:text-brand-text hover:text-blue-700 dark:hover:text-brand-primary hover:bg-slate-100 dark:hover:bg-brand-card transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-brand-border flex items-center justify-between">
            <a
              href={`https://github.com/${githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-700 dark:text-brand-primary font-bold py-1"
            >
              <Github className="w-4 h-4" />
              <span>Ver GitHub Oficial</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
