import React, { useState, useEffect, useMemo } from 'react';
import portfolioDataRaw from './data/projects.json';
import { PortfolioData, Project } from './types/project';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BackgroundAmbient } from './components/BackgroundAmbient';
import { ProjectFilters } from './components/ProjectFilters';
import { FlagshipProject } from './components/FlagshipProject';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { CliQuickfindModal } from './components/CliQuickfindModal';
import { SearchX } from 'lucide-react';

const data = portfolioDataRaw as unknown as PortfolioData;

const getInitialTheme = (): boolean => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  } catch {
    // Fallback if localStorage is inaccessible
  }
  return true;
};

export const App: React.FC = () => {
  // Dark mode state with safe persistence (DevKernel defaults to sleek dark mode)
  const [darkMode, setDarkMode] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      try {
        window.localStorage?.setItem('theme', 'dark');
      } catch {
        // Ignore
      }
    } else {
      document.documentElement.classList.remove('dark');
      try {
        window.localStorage?.setItem('theme', 'light');
      } catch {
        // Ignore
      }
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // CLI Quickfind Modal state
  const [cliQuickfindOpen, setCliQuickfindOpen] = useState<boolean>(false);

  // Global ⌘K shortcut listener
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCliQuickfindOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Filter & Search states
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected project for details modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Flagship project identifier
  const flagshipProject = useMemo(() => data.projects.find((p) => p.featured) || null, []);
  const showFlagship =
    selectedCategory === 'all' && !searchQuery.trim() && flagshipProject !== null;

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: data.projects.length };
    data.categories.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = data.projects.filter((p) => p.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Filtered projects list
  const filteredProjects = useMemo(() => {
    return data.projects.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchTagline = (p.tagline || '').toLowerCase().includes(q);
      const matchShortDesc = p.shortDescription.toLowerCase().includes(q);
      const matchTech = p.technologies.some((t) => t.toLowerCase().includes(q));
      const matchLang = p.languages.some((l) => l.toLowerCase().includes(q));

      return matchTitle || matchTagline || matchShortDesc || matchTech || matchLang;
    });
  }, [selectedCategory, searchQuery]);

  // Projects to display in the standard grid
  const gridProjects = useMemo(() => {
    if (showFlagship && flagshipProject) {
      return filteredProjects.filter((p) => p.id !== flagshipProject.id);
    }
    return filteredProjects;
  }, [filteredProjects, showFlagship, flagshipProject]);

  return (
    <div className="relative min-h-screen bg-earth-light dark:bg-brand-bg text-earth-ink-800 dark:text-brand-text flex flex-col font-sans selection:bg-brand-primary selection:text-black transition-colors duration-300">
      {/* Skip to Main Content Link (Bypass Navigation) */}
      <a
        href="#proyectos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2.5 rounded-xl bg-brand-primary text-black text-xs font-bold font-mono shadow-xl outline-none ring-2 ring-brand-secondary ring-offset-2 transition-transform"
      >
        Saltar al contenido principal
      </a>

      {/* Dynamic Hardware-Accelerated Reactive Canvas Background */}
      <BackgroundAmbient />

      {/* Navbar with DevKernel styling and CLI search */}
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        githubUser={data.user.github}
        onOpenCliQuickfind={() => setCliQuickfindOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section with Interactive Terminal */}
        <Hero user={data.user} />

        {/* Projects Section */}
        <section
          id="proyectos"
          tabIndex={-1}
          className="py-16 sm:py-24 border-b border-brand-border/70 relative focus:outline-none"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight text-balance">
                Proyectos & Desarrollos
              </h2>
              <p className="mt-2 text-slate-700 dark:text-brand-textMuted text-sm leading-relaxed">
                Proyectos personales y académicos. Cada uno documenta el rol, la arquitectura y las
                decisiones técnicas detrás del código.
              </p>
            </div>

            <ProjectFilters
              categories={data.categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              projectCountsByCategory={categoryCounts}
            />

            {/* Flagship Project Dedicated Banner */}
            {showFlagship && flagshipProject && (
              <FlagshipProject
                project={flagshipProject}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            )}

            {/* Projects Grid */}
            {gridProjects.length > 0 ? (
              <div
                key={selectedCategory}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7"
              >
                {gridProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onOpenDetails={(p) => setSelectedProject(p)}
                  />
                ))}
              </div>
            ) : (
              <div className="card-lift py-16 text-center rounded-2xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border p-8 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-brand-surface border border-slate-200 dark:border-brand-border flex items-center justify-center mx-auto text-slate-500 dark:text-brand-textMuted mb-3">
                  <SearchX className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  No se encontraron proyectos con ese criterio
                </h3>
                <p className="text-xs text-slate-600 dark:text-brand-textMuted mt-1 max-w-sm mx-auto">
                  Prueba modificando el texto de búsqueda o seleccionando otra categoría.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="btn-tactile mt-4 min-h-11 px-5 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-brand-primary dark:text-black text-xs font-mono font-bold shadow-md cursor-pointer hover:bg-slate-800 dark:hover:bg-brand-primaryHover"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Skills & Domain Matrix */}
        <SkillsSection
          skills={data.skills}
          projects={data.projects}
          onOpenProject={(p) => setSelectedProject(p)}
        />

        {/* About & Contact Section */}
        <AboutSection user={data.user} />
      </main>

      {/* Footer */}
      <Footer githubUser={data.user.github} />

      {/* Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* CLI Quickfind Modal */}
      <CliQuickfindModal
        isOpen={cliQuickfindOpen}
        onClose={() => setCliQuickfindOpen(false)}
        projects={data.projects}
        onSelectProject={(p) => setSelectedProject(p)}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
  );
};
