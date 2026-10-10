import React, { useState, useEffect, useMemo } from 'react';
import portfolioDataRaw from './data/projects.json';
import { PortfolioData, Project } from './types/project';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectFilters } from './components/ProjectFilters';
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

  return (
    <div className="min-h-screen bg-lofi-bg dark:bg-lofi-darkBg text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        githubUser={data.user.github}
      />

      <main className="flex-1">
        <Hero
          user={data.user}
          totalProjects={data.projects.length}
        />

        {/* Projects Section */}
        <section id="proyectos" className="py-16 sm:py-24 border-b border-lofi-border/70 dark:border-lofi-darkBorder/70">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-pastel-lavender-badge dark:bg-pastel-lavender-bg/30 text-pastel-lavender-text dark:text-pastel-lavender-darkText border border-pastel-lavender-border/80 dark:border-pastel-lavender-border/30 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Explorador de Software</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Proyectos & Desarrollos
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                Catálogo de proyectos personales y académicos. Filtra por tecnología o busca por palabras clave para ver especificaciones y código.
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

            {/* Projects Grid (Pure Visualization) */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onOpenDetails={(p) => setSelectedProject(p)}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center rounded-3xl bg-lofi-card dark:bg-lofi-darkCard border border-lofi-border dark:border-lofi-darkBorder p-8 shadow-lofi">
                <div className="w-10 h-10 rounded-2xl bg-lofi-subtle dark:bg-lofi-darkSubtle flex items-center justify-center mx-auto text-slate-400 mb-3">
                  <SearchX className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  No se encontraron proyectos con ese criterio
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                  Prueba modificando el texto de búsqueda o seleccionando otra categoría.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-1.5 rounded-full bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition"
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
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
