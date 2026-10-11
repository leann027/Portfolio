import React from 'react';
import { Search, X, Sparkles } from 'lucide-react';
import { Category } from '../types/project';

interface ProjectFiltersProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  projectCountsByCategory: Record<string, number>;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  projectCountsByCategory,
}) => {
  return (
    <div className="space-y-4 mb-8">
      {/* Search and filter info */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <label htmlFor="project-search" className="sr-only">
            Buscar proyectos
          </label>
          <div
            className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-earth-ink-500 dark:text-stone-400"
            aria-hidden="true"
          >
            <Search className="w-4 h-4" />
          </div>
          <input
            id="project-search"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por tecnología, lenguaje o nombre..."
            aria-label="Buscar proyectos por tecnología, lenguaje o nombre"
            className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm rounded-2xl bg-earth-linen/80 dark:bg-earth-coffeeCard border border-earth-sand dark:border-earth-coffeeBorder text-earth-ink-900 dark:text-stone-100 placeholder-earth-ink-500 dark:placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-earth-mocha/40 dark:focus:ring-swatch-lavender/40 shadow-xs transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-earth-ink-600 hover:text-earth-ink-900 dark:text-stone-300 dark:hover:text-stone-100 transition-colors"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5 text-xs font-medium text-earth-ink-600 dark:text-stone-300">
          <Sparkles className="w-3.5 h-3.5 text-earth-darkMocha dark:text-swatch-lavender-darkText" />
          <span>Filtro reactivo instantáneo</span>
        </div>
      </div>

      {/* Responsive Category Pills */}
      <div
        role="group"
        aria-label="Filtro de categorías de proyectos"
        className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap scrollbar-thin"
      >
        {categories.map((cat) => {
          const count = projectCountsByCategory[cat.id] ?? 0;
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              aria-pressed={isSelected}
              className={`btn-tactile badge-spring shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium transition-all ${
                isSelected
                  ? 'bg-earth-darkMocha text-white shadow-soft font-semibold scale-[1.02]'
                  : 'bg-earth-linen/85 dark:bg-earth-coffeeCard text-earth-ink-700 dark:text-stone-300 hover:bg-earth-sand dark:hover:bg-earth-coffeeSubtle border border-earth-sand dark:border-earth-coffeeBorder shadow-xs'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold transition-colors ${
                  isSelected
                    ? 'bg-white/25 text-white'
                    : 'bg-earth-sand/70 dark:bg-earth-coffeeSubtle text-earth-ink-700 dark:text-stone-300'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
