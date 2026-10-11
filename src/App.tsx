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
import { Sparkles, SearchX } from 'lucide-react';

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
  // Dark mode state with safe persistence
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
      // Category filter
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      if (!matchesCategory) return false;

      // Search query filter
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
    <div className="relative min-h-screen bg-earth-light/85 dark:bg-earth-coffeeBg text-earth-ink-800 dark:text-stone-200 flex flex-col font-sans transition-colors duration-500 selection:bg-swatch-lavender/50">
      {/* Skip to Main Content Link (Bypass Navigation) */}
      <a
        href="#proyectos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2.5 rounded-xl bg-earth-darkMocha text-white text-xs font-semibold shadow-lg outline-none ring-2 ring-earth-sand ring-offset-2 transition-transform"
      >
        Saltar al contenido principal
      </a>

      {/* Dynamic Lo-Fi Ambient Background */}
      <BackgroundAmbient />

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} githubUser={data.user.github} />

      <main className="flex-1">
        <Hero user={data.user} totalProjects={data.projects.length} />

        {/* Projects Section */}
        <section
          id="proyectos"
          tabIndex={-1}
          className="py-16 sm:py-24 border-b border-earth-sand/70 dark:border-earth-coffeeBorder/70 relative focus:outline-none"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-swatch-lavender-bg text-swatch-lavender-text dark:bg-swatch-lavender-border/20 dark:text-swatch-lavender-darkText border border-swatch-lavender-border/70 mb-3 badge-spring shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-swatch-lavender" />
                <span>Explorador de Software</span>
              </div>
              <h2 className="text-3xl font-extrabold text-earth-ink-900 dark:text-stone-100 tracking-tight">
                Proyectos & Desarrollos
              </h2>
              <p className="mt-3 text-earth-ink-600 dark:text-stone-300 text-xs sm:text-sm leading-relaxed">
                Catálogo de proyectos personales y académicos. Filtra por tecnología o busca por
                palabras clave para ver especificaciones y código.
              </p>
            </div>

            {/* Flagship Project Dedicated Banner */}
            {showFlagship && flagshipProject && (
              <FlagshipProject
                project={flagshipProject}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            )}

            <ProjectFilters
              categories={data.categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              projectCountsByCategory={categoryCounts}
            />

            {/* Projects Grid (Pure Visualization) */}
            {gridProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="card-lift py-16 text-center rounded-3xl bg-earth-linen dark:bg-earth-coffeeCard border border-earth-sand dark:border-earth-coffeeBorder p-8 shadow-soft">
                <div className="w-10 h-10 rounded-2xl bg-earth-sand/60 dark:bg-earth-coffeeSubtle flex items-center justify-center mx-auto text-earth-ink-600 dark:text-stone-300 mb-3">
                  <SearchX className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-earth-ink-900 dark:text-stone-100">
                  No se encontraron proyectos con ese criterio
                </h3>
                <p className="text-xs text-earth-ink-700 dark:text-stone-300 mt-1 max-w-sm mx-auto">
                  Prueba modificando el texto de búsqueda o seleccionando otra categoría.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="btn-tactile mt-4 px-5 py-2 rounded-2xl bg-earth-darkMocha hover:bg-earth-ink-800 text-white text-xs font-semibold shadow-soft"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </section>

        <SkillsSection skills={data.skills} />

        <AboutSection user={data.user} />
      </main>

      <Footer githubUser={data.user.github} />

      {/* Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
