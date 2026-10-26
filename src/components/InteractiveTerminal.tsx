import React, { useState } from 'react';
import { Terminal as TerminalIcon, Copy, Check } from 'lucide-react';

interface TerminalTab {
  id: string;
  label: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('c-memory');
  const [copied, setCopied] = useState<boolean>(false);

  const tabs: TerminalTab[] = [
    {
      id: 'c-memory',
      label: 'valgrind_memcheck.c',
      command: 'valgrind --leak-check=full ./estructuras_datos',
      output: (
        <div className="space-y-1 text-brand-text font-mono text-[11px] leading-relaxed">
          <div className="text-brand-secondary">==48201== Memcheck, a memory error detector</div>
          <div className="text-brand-textMuted">
            ==48201== Command: ./build/linked_list_benchmark
          </div>
          <div className="text-brand-primary">
            [ALLOC] malloc(sizeof(Node) * 1024) at 0x7ffe4b20 ... OK
          </div>
          <div className="text-brand-primary">
            [TRAVERSE] Pointer traversal: 1,024 nodes validated in O(n)
          </div>
          <div className="text-brand-purple">
            [FREE] Deallocating heap memory safely (no dangling pointers)
          </div>
          <div className="pt-1.5 border-t border-brand-border/70 text-brand-secondary font-semibold">
            ==48201== All heap blocks were freed -- no leaks are possible
          </div>
          <div className="text-brand-textMuted">
            ==48201== ERROR SUMMARY: 0 errors from 0 contexts (suppressed: 0 from 0)
          </div>
        </div>
      ),
    },
    {
      id: 'profile',
      label: 'profile.json',
      command: 'cat ~/.dev/profile.json | jq .',
      output: (
        <div className="text-brand-text font-mono text-[11px] leading-snug">
          <pre className="overflow-x-auto">
            {`{
  "name": "Leandro",
  "github": "leann027",
  "education": [
    "Terciario Urquiza - Tecnicatura Sup. Desarrollo de Software",
    "Harvard University - CS50x Computer Science"
  ],
  "core_competencies": {
    "low_level": "C (pointers, dynamic memory, structs, GCC)",
    "backend_data": "Python 3 (OOP, Tkinter, ReportLab, JSON)",
    "frontend_web": "Next.js 16, React 19, Three.js (WebGL), TypeScript, Tailwind CSS"
  },
  "testing_methodology": "Vitest, axe-core (WCAG AA), GitHub Actions CI/CD"
}`}
          </pre>
        </div>
      ),
    },
    {
      id: 'pipeline',
      label: 'fetch_projects.py',
      command: 'python3 execution/fetch_projects.py --verify',
      output: (
        <div className="space-y-1 text-brand-text font-mono text-[11px] leading-relaxed">
          <div className="text-brand-primary">
            ❯ Reading config from data/projects_config.json...
          </div>
          <div className="text-brand-textMuted">
            [ETL] Validating schema constraints for 7 projects...
          </div>
          <div className="text-brand-secondary">
            ✓ Schema validated: all projects conform to ProjectModel
          </div>
          <div className="text-brand-textMuted">
            [GENERATE] Emitting deterministic artifact to src/data/projects.json...
          </div>
          <div className="text-brand-purple font-medium">
            [CI/CD] Build ready: 0 errors, determinism checksum verified (SHA-256)
          </div>
        </div>
      ),
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  const handleCopy = () => {
    navigator.clipboard?.writeText(currentTab.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl bg-[#070a0f] border border-brand-border shadow-2xl overflow-hidden font-mono text-xs w-full">
      {/* Terminal Title Bar */}
      <div className="bg-brand-surface px-4 py-2.5 flex items-center justify-between border-b border-brand-border">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#f85149] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#d29922] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#3fb950] inline-block" />
          <span className="text-brand-textMuted ml-2 text-[11px] font-mono">
            zsh — leann027@portfolio-edge
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block text-brand-textDim text-[10px]">
            bash / gcc 14.2 / python 3.12
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center bg-brand-surfaceAlt/60 border-b border-brand-border/80 px-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-2 text-[11px] font-mono border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === tab.id
                ? 'border-brand-primary text-brand-primary bg-brand-card/70 font-semibold'
                : 'border-transparent text-brand-textMuted hover:text-brand-text hover:bg-brand-surface/40'
            }`}
          >
            <TerminalIcon className="w-3 h-3" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Terminal Content */}
      <div className="p-4 sm:p-5 space-y-3 leading-relaxed text-brand-text">
        {/* Command line prompt with copy action */}
        <div className="flex items-center justify-between gap-2 bg-brand-surface/70 px-3 py-2 rounded border border-brand-border/60">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="text-brand-secondary font-bold">❯</span>
            <span className="text-white font-mono text-xs selection:bg-brand-primary selection:text-black">
              {currentTab.command}
            </span>
            <span className="inline-block w-2 h-4 bg-brand-primary animate-pulse" />
          </div>
          <button
            onClick={handleCopy}
            className="p-1 text-brand-textMuted hover:text-brand-primary transition-colors shrink-0 cursor-pointer"
            title="Copiar comando"
            aria-label="Copiar comando al portapapeles"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-brand-secondary" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Output pane */}
        <div className="p-3.5 rounded bg-[#090d13] border border-brand-border/50 min-h-[140px]">
          {currentTab.output}
        </div>

        {/* Quick action triggers */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px] font-mono text-brand-textMuted">
          <span className="text-brand-textDim">Ejecutar demo:</span>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'border-brand-primary/60 bg-brand-primary/10 text-brand-primary font-bold'
                  : 'border-brand-border bg-brand-surface text-brand-textMuted hover:text-white hover:border-brand-borderHover'
              }`}
            >
              {tab.label.replace('.json', '').replace('.c', '').replace('.py', '')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
