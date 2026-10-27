import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Project, SkillItem } from '../types/project';
import { useDialogBehavior, useExitTransition } from '../hooks/useModal';

interface CliQuickfindModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  skills: Record<'languages' | 'frameworks' | 'tools', SkillItem[]>;
  onSelectProject: (project: Project) => void;
  toggleDarkMode: () => void;
}

export const CliQuickfindModal: React.FC<CliQuickfindModalProps> = ({
  isOpen,
  onClose,
  projects,
  skills,
  onSelectProject,
  toggleDarkMode,
}) => {
  const { shown, isClosing } = useExitTransition(isOpen || null);
  const activeOpen = shown !== null;
  const [inputVal, setInputVal] = useState<string>('');
  const [cliHistory, setCliHistory] = useState<Array<{ cmd: string; result: React.ReactNode }>>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useDialogBehavior(activeOpen, containerRef, inputRef, onClose);

  useEffect(() => {
    if (!activeOpen) setInputVal('');
  }, [activeOpen]);

  if (!activeOpen) return null;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputVal.trim().toLowerCase();
    if (!query) return;

    if (query === 'clear' || query === 'cls') {
      setCliHistory([]);
      setInputVal('');
      return;
    }

    if (query === 'help') {
      setCliHistory((prev) => [
        ...prev,
        {
          cmd: query,
          result: (
            <div className="space-y-1 text-xs text-brand-text font-mono">
              <div>Comandos disponibles:</div>
              <div className="pl-3 space-y-0.5 text-brand-textMuted">
                <div>
                  <span className="text-brand-primary">projects</span> — Ver lista completa de
                  proyectos
                </div>
                <div>
                  <span className="text-brand-secondary">c-pointers</span> — Explicación técnica de
                  punteros y memoria
                </div>
                <div>
                  <span className="text-brand-purple">skills</span> — Tecnologías y herramientas
                  dominadas
                </div>
                <div>
                  <span className="text-brand-amber">theme</span> — Alternar entre modo claro y
                  oscuro
                </div>
                <div>
                  <span className="text-brand-rose">clear</span> — Limpiar historial del terminal
                </div>
              </div>
            </div>
          ),
        },
      ]);
      setInputVal('');
      return;
    }

    if (query === 'theme') {
      toggleDarkMode();
      setCliHistory((prev) => [
        ...prev,
        {
          cmd: query,
          result: (
            <div className="text-xs text-brand-secondary font-mono">
              ✓ Tema alternado correctamente.
            </div>
          ),
        },
      ]);
      setInputVal('');
      return;
    }

    if (query === 'skills') {
      const groups: Array<[string, SkillItem[]]> = [
        ['Lenguajes', skills.languages],
        ['Frameworks & UI', skills.frameworks],
        ['Herramientas & DevOps', skills.tools],
      ];
      setCliHistory((prev) => [
        ...prev,
        {
          cmd: query,
          result: (
            <div className="space-y-2 text-xs font-mono">
              {groups.map(([label, items]) => (
                <div key={label}>
                  <div className="text-brand-purple font-semibold">{label}</div>
                  <div className="pl-3 text-brand-textMuted">
                    {items.map((s) => s.name).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          ),
        },
      ]);
      setInputVal('');
      return;
    }

    if (query === 'c-pointers') {
      setCliHistory((prev) => [
        ...prev,
        {
          cmd: query,
          result: (
            <div className="p-2.5 rounded bg-brand-surface border border-brand-border space-y-1 text-[11px] font-mono">
              <div className="text-brand-primary font-bold">[C Memory Management]</div>
              <div className="text-brand-textMuted">
                Estructura: <code className="text-white">malloc()</code> reserva bytes contiguos en
                el Heap.
              </div>
              <div className="text-brand-textMuted">
                Un puntero almacena la dirección hexadecimal (
                <code className="text-brand-purple">0x...</code>) de memoria física.
              </div>
              <div className="text-brand-secondary">
                Regla de oro: Todo malloc debe tener su free() correspondiente para garantizar 0
                memory leaks.
              </div>
            </div>
          ),
        },
      ]);
      setInputVal('');
      return;
    }

    // Default search across projects
    const matches =
      query === 'projects'
        ? projects
        : projects.filter(
            (p) =>
              p.title.toLowerCase().includes(query) ||
              p.technologies.some((t) => t.toLowerCase().includes(query)) ||
              p.languages.some((l) => l.toLowerCase().includes(query))
          );

    setCliHistory((prev) => [
      ...prev,
      {
        cmd: query,
        result: (
          <div className="space-y-1.5 text-xs font-mono">
            {matches.length > 0 ? (
              <>
                <div className="text-brand-primary font-semibold">
                  ✓ Encontrados {matches.length} proyecto(s):
                </div>
                {matches.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onSelectProject(p);
                      onClose();
                    }}
                    className="w-full text-left p-2 rounded bg-brand-surface hover:bg-brand-surfaceAlt border border-brand-border hover:border-brand-primary flex items-center justify-between text-brand-text transition-colors cursor-pointer"
                  >
                    <span>{p.title}</span>
                    <span className="text-[10px] text-brand-secondary font-mono">Abrir ↵</span>
                  </button>
                ))}
              </>
            ) : (
              <div className="text-brand-rose">
                No se encontraron comandos o proyectos para: "{query}". Escribe{' '}
                <span className="underline">help</span> para ver opciones.
              </div>
            )}
          </div>
        ),
      },
    ]);
    setInputVal('');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cli-quickfind-title"
      className={`fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-[#090d13]/80 backdrop-blur-md ${
        isClosing ? 'animate-fade-out pointer-events-none' : 'animate-fade-in'
      }`}
      onClick={onClose}
    >
      <div
        ref={containerRef}
        className={`w-full max-w-2xl rounded-2xl bg-[#0c1017] border border-brand-border shadow-2xl overflow-hidden font-mono text-xs flex flex-col max-h-[80vh] ${
          isClosing ? 'animate-modal-pop-out' : 'animate-modal-pop'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLI Window Bar */}
        <div className="bg-brand-surface px-4 py-3 flex items-center justify-between border-b border-brand-border">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#f85149]" />
            <span className="w-3 h-3 rounded-full bg-[#d29922]" />
            <span className="w-3 h-3 rounded-full bg-[#3fb950]" />
            <span
              id="cli-quickfind-title"
              className="text-brand-textMuted ml-2 text-[11px] font-semibold"
            >
              CLI Quickfind — leann027@search
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-brand-textMuted hover:text-white transition-colors cursor-pointer"
            aria-label="Cerrar Quickfind"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search input form */}
        <form
          onSubmit={handleCommandSubmit}
          className="p-4 border-b border-brand-border/60 flex items-center gap-3 bg-brand-surfaceAlt/50"
        >
          <span className="text-brand-secondary font-bold text-sm">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Escribe un comando o tecnología (help, c-pointers, python, react)..."
            className="flex-1 bg-transparent border-none text-white text-xs font-mono placeholder:text-brand-textDim focus:outline-none"
          />
          <kbd className="px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-[10px] text-brand-textMuted">
            Enter ↵
          </kbd>
        </form>

        {/* History / Output View */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1 min-h-[180px] custom-scroll">
          {cliHistory.length === 0 ? (
            <div className="text-brand-textMuted space-y-2 py-2">
              <div className="text-white font-semibold">Sugerencias rápidas:</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setInputVal('help');
                    inputRef.current?.focus();
                  }}
                  className="p-2 rounded bg-brand-surface border border-brand-border text-left hover:border-brand-primary text-brand-primary text-[11px] cursor-pointer"
                >
                  ❯ help
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setInputVal('c-pointers');
                    inputRef.current?.focus();
                  }}
                  className="p-2 rounded bg-brand-surface border border-brand-border text-left hover:border-brand-secondary text-brand-secondary text-[11px] cursor-pointer"
                >
                  ❯ c-pointers
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setInputVal('Python');
                    inputRef.current?.focus();
                  }}
                  className="p-2 rounded bg-brand-surface border border-brand-border text-left hover:border-brand-amber text-brand-amber text-[11px] cursor-pointer"
                >
                  ❯ Python
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setInputVal('React');
                    inputRef.current?.focus();
                  }}
                  className="p-2 rounded bg-brand-surface border border-brand-border text-left hover:border-brand-purple text-brand-purple text-[11px] cursor-pointer"
                >
                  ❯ React
                </button>
              </div>
            </div>
          ) : (
            cliHistory.map((item, idx) => (
              <div
                key={idx}
                className="space-y-1.5 pb-2 border-b border-brand-border/40 last:border-b-0"
              >
                <div className="flex items-center gap-2 text-brand-textDim text-[11px]">
                  <span className="text-brand-secondary">❯</span>
                  <span className="text-white font-semibold">{item.cmd}</span>
                </div>
                <div>{item.result}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
