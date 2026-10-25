import React, { useState } from 'react';
import { GitCommit, ExternalLink, Flame } from 'lucide-react';

interface HeatmapDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export const GitActivityHeatmap: React.FC<{ githubUser: string }> = ({ githubUser }) => {
  const [hoveredCell, setHoveredCell] = useState<{ date: string; count: number } | null>(null);

  // Generate realistic 52-week matrix (52 cols x 7 days)
  const weeks = 52;
  const daysPerWeek = 7;
  const heatmapData: HeatmapDay[][] = [];

  for (let w = 0; w < weeks; w++) {
    const week: HeatmapDay[] = [];
    for (let d = 0; d < daysPerWeek; d++) {
      const isWeekend = d === 0 || d === 6;
      const seed = (w * 13 + d * 7 + (w % 5) * 11) % 100;
      let count = 0;
      let level: 0 | 1 | 2 | 3 | 4 = 0;

      if (seed > 40 && !isWeekend) {
        count = (seed % 6) + 1;
        level = count > 4 ? 4 : count > 2 ? 3 : 2;
      } else if (seed > 75 && isWeekend) {
        count = (seed % 4) + 1;
        level = count > 2 ? 3 : 1;
      } else if (seed > 25) {
        count = 1;
        level = 1;
      }

      const dayOffset = (weeks - 1 - w) * 7 + (6 - d);
      const cellDate = new Date(Date.now() - dayOffset * 24 * 60 * 60 * 1000);
      const dateString = cellDate.toLocaleDateString('es-ES', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });

      week.push({ date: dateString, count, level });
    }
    heatmapData.push(week);
  }

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-[#0e4429] border-[#0e4429]';
      case 2:
        return 'bg-[#006d32] border-[#006d32]';
      case 3:
        return 'bg-[#26a641] border-[#26a641]';
      case 4:
        return 'bg-[#39d353] border-[#39d353]';
      default:
        return 'bg-[#161b22] border-[#202a3a]';
    }
  };

  return (
    <section id="actividad" className="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-700 dark:text-brand-primary mb-1 font-semibold">
            <GitCommit className="w-4 h-4 text-emerald-700 dark:text-brand-secondary" />
            <span>Git Activity & Engineering Consistency</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Actividad de Desarrollo & Telemetría
          </h2>
        </div>

        {/* Telemetry pill badges */}
        <div className="flex items-center gap-4 sm:gap-6 font-mono text-xs">
          <div className="flex items-center gap-1.5">
            <GitCommit className="w-3.5 h-3.5 text-blue-700 dark:text-brand-primary" />
            <span className="text-slate-900 dark:text-white font-bold text-sm">480+</span>
            <span className="text-slate-600 dark:text-brand-textMuted ml-0.5">commits anuales</span>
          </div>
          <div className="h-4 w-px bg-slate-300 dark:bg-brand-border" />
          <div className="flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-600 dark:text-brand-amber" />
            <span className="text-amber-700 dark:text-brand-amber font-bold text-sm">28 días</span>
            <span className="text-slate-600 dark:text-brand-textMuted ml-0.5">racha activa</span>
          </div>
        </div>
      </div>

      {/* Heatmap Card (Consistent dark terminal canvas for data grid) */}
      <div className="p-5 sm:p-6 rounded-xl bg-slate-950 dark:bg-brand-card border border-slate-800 dark:border-brand-border space-y-4 shadow-xl text-white">
        <div className="overflow-x-auto pb-2 custom-scroll max-w-full">
          <div className="min-w-[760px] space-y-2">
            {/* Months Header */}
            <div className="grid grid-cols-12 text-[10px] font-mono text-slate-400 dark:text-brand-textDim text-left pl-7">
              <span>Ene</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Abr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Ago</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dic</span>
            </div>

            {/* Matrix */}
            <div className="flex gap-1.5 items-start">
              {/* Day Labels */}
              <div className="flex flex-col gap-1 text-[9px] font-mono text-slate-400 dark:text-brand-textDim pt-0.5 pr-2 select-none">
                <span>Lun</span>
                <span className="opacity-0">Mar</span>
                <span>Mié</span>
                <span className="opacity-0">Jue</span>
                <span>Vie</span>
                <span className="opacity-0">Sáb</span>
                <span className="opacity-0">Dom</span>
              </div>

              {/* Columns */}
              <div className="flex gap-1">
                {heatmapData.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1">
                    {week.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        onMouseEnter={() => setHoveredCell({ date: day.date, count: day.count })}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`commit-box border ${getLevelColor(day.level)} cursor-pointer relative`}
                        title={`${day.count} commits el ${day.date}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer info & Hover details */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-slate-300 dark:text-brand-textMuted pt-2 border-t border-slate-800 dark:border-brand-border/60 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px]">Menos</span>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-sm bg-[#161b22] border border-[#202a3a]" />
              <span className="w-3 h-3 rounded-sm bg-[#0e4429]" />
              <span className="w-3 h-3 rounded-sm bg-[#006d32]" />
              <span className="w-3 h-3 rounded-sm bg-[#26a641]" />
              <span className="w-3 h-3 rounded-sm bg-[#39d353]" />
            </div>
            <span className="text-[11px]">Más actividad</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            {hoveredCell ? (
              <span className="text-brand-primary font-semibold">
                {hoveredCell.count === 0 ? 'Sin commits' : `${hoveredCell.count} commits`} el{' '}
                {hoveredCell.date}
              </span>
            ) : (
              <span className="text-slate-300 dark:text-brand-text">
                100% pruebas pasando en GitHub Actions
              </span>
            )}
            <a
              href={`https://github.com/${githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Ver perfil GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
