import React from 'react';
import { Search, X } from 'lucide-react';
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
      {/* Search Input Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <label htmlFor="project-search" className="sr-only">
            Buscar proyectos
          </label>
          <div
            className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-textMuted"
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
            className="w-full min-h-11 pl-10 pr-11 py-2 text-xs font-mono rounded-xl bg-brand-surface border border-brand-border text-brand-text placeholder-brand-textDim focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 min-w-11 min-h-11 flex items-center justify-center text-brand-textMuted hover:text-white transition-colors cursor-pointer"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills (Inspirado en Stitch) */}
      <div
        role="group"
        aria-label="Filtro de categorías de proyectos"
        className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap text-xs font-mono"
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
              className={`btn-tactile badge-spring shrink-0 min-h-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                isSelected
                  ? 'bg-brand-primary text-black font-bold border-brand-primary shadow-sm'
                  : 'bg-brand-surface border-brand-border text-brand-textMuted hover:text-white hover:border-brand-borderHover'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold transition-colors ${
                  isSelected ? 'bg-black/20 text-black' : 'bg-brand-card text-brand-textDim'
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
