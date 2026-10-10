import React, { useState, useEffect, useMemo } from 'react';
import portfolioDataRaw from './data/projects.json';
import { PortfolioData, Project } from './types/project';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectFilters } from './components/ProjectFilters';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { AddProjectModal } from './components/AddProjectModal';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { Sparkles, PlusCircle, SearchX } from 'lucide-react';

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

  // Modal states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAddGuideOpen, setIsAddGuideOpen] = useState<boolean>(false);

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

  // Filtered projects
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        githubUser={data.user.github}
        onOpenAddGuide={() => setIsAddGuideOpen(true)}
      />

      <main className="flex-1">
        <Hero
          user={data.user}
          totalProjects={data.projects.length}
          onOpenAddGuide={() => setIsAddGuideOpen(true)}
        />

        {/* Projects Section */}
        <section id="proyectos" className="py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                <span>Explorador Interactivo</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Proyectos & Desarrollos
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                Explora el portfolio insignia y la base de código. Utiliza los filtros y la búsqueda reactiva para ver especificaciones y arquitectura.
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

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onOpenDetails={(p) => setSelectedProject(p)}
                  />
                ))}

                {/* Add Next Project Card */}
                <div
                  onClick={() => setIsAddGuideOpen(true)}
                  className="cursor-pointer group flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-400 bg-white/50 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-900 transition-all text-center min-h-[300px]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <PlusCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">
                    Próximo Proyecto en Construcción
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mb-4">
                    Este portfolio fue diseñado con un pipeline extensible para integrar nuevos proyectos en segundos.
                  </p>
                  <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 group-hover:underline">
                    Ver cómo agregar proyectos →
                  </span>
                </div>
              </div>
            ) : (
              <div className="py-16 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400 mb-4">
                  <SearchX className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  No se encontraron proyectos con ese criterio
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
                  Prueba modificando la búsqueda o seleccionando otra categoría.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-5 px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-semibold hover:bg-brand-500 transition"
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

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <AddProjectModal
        isOpen={isAddGuideOpen}
        onClose={() => setIsAddGuideOpen(false)}
      />
    </div>
  );
};
