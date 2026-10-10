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
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por tecnología, lenguaje o nombre..."
            className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm rounded-2xl bg-lofi-card dark:bg-lofi-darkCard border border-lofi-border dark:border-lofi-darkBorder text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pastel-lavender-border dark:focus:ring-pastel-lavender-text shadow-lofi transition"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Filtro reactivo</span>
        </div>
      </div>

      {/* Lo-Fi Category Pills */}
      <div className="flex flex-wrap gap-2 pt-1">
        {categories.map((cat) => {
          const count = projectCountsByCategory[cat.id] ?? 0;
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                isSelected
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-sm'
                  : 'bg-lofi-card dark:bg-lofi-darkCard text-slate-600 dark:text-slate-300 hover:bg-lofi-subtle dark:hover:bg-lofi-darkSubtle border border-lofi-border dark:border-lofi-darkBorder'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isSelected
                    ? 'bg-white/20 text-white dark:bg-slate-900/20 dark:text-slate-900'
                    : 'bg-lofi-subtle dark:bg-lofi-darkSubtle text-slate-500 dark:text-slate-400'
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
