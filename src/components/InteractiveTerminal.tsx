import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal as TerminalIcon,
  Copy,
  Check,
  Sparkles,
  Cpu,
  Workflow,
  Braces,
  Play,
} from 'lucide-react';

interface TerminalTab {
  id: string;
  label: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  command: string;
  commandTokens: Array<{ text: string; colorClass: string }>;
  execTime: string;
  output: React.ReactNode;
}

// Static tab definitions, kept outside the component so they aren't rebuilt on every render
const tabs: TerminalTab[] = [
  {
    id: 'webgl-audio',
    label: 'novafy_audio_glsl.ts',
    badge: 'WebGL 3D · Audio',
    icon: Sparkles,
    command: 'npx novafy --render=webgl3d --fft=64-band --audio-reactive',
    commandTokens: [
      { text: 'npx', colorClass: 'text-brand-purple font-semibold' },
      { text: 'novafy', colorClass: 'text-brand-primary font-bold' },
      { text: '--render=', colorClass: 'text-brand-textMuted' },
      { text: 'webgl3d', colorClass: 'text-brand-secondary font-semibold' },
      { text: '--fft=', colorClass: 'text-brand-textMuted' },
      { text: '64-band', colorClass: 'text-amber-400 font-semibold' },
      { text: '--audio-reactive', colorClass: 'text-brand-primaryHover' },
    ],
    execTime: '0.38ms',
    output: (
      <div className="space-y-1.5 font-mono text-[11px] sm:text-xs leading-relaxed text-brand-text break-words">
        <div className="flex items-start gap-2 animate-fade-in">
          <span className="shrink-0 px-1.5 py-0.2 rounded bg-brand-primary/15 text-brand-primary font-bold text-[10px] border border-brand-primary/30">
            GPU::INIT
          </span>
          <span className="text-white">
            WebGL 2.0 context mounted via <span className="text-brand-primary">Three.js</span> &{' '}
            <span className="text-brand-purple">React Three Fiber</span> ... OK
          </span>
        </div>

        <div className="flex items-start gap-2 animate-fade-in [animation-delay:40ms]">
          <span className="shrink-0 px-1.5 py-0.2 rounded bg-brand-purple/15 text-brand-purple font-bold text-[10px] border border-brand-purple/30">
            SHADERS
          </span>
          <span className="text-brand-text">
            Compilando <code className="text-brand-primary">accretion_disk.frag</code> &{' '}
            <code className="text-brand-primary">singularity.vert</code> (GLSL relativista) ...{' '}
            <span className="text-brand-secondary font-semibold">0.42ms</span>
          </span>
        </div>

        <div className="flex items-start gap-2 animate-fade-in [animation-delay:80ms]">
          <span className="shrink-0 px-1.5 py-0.2 rounded bg-brand-secondary/15 text-brand-secondary font-bold text-[10px] border border-brand-secondary/30">
            AUDIO::DSP
          </span>
          <span className="text-brand-text">
            Web Audio API AudioContext linked @{' '}
            <span className="text-brand-secondary font-semibold">48,000 Hz</span> (Analizador FFT{' '}
            <span className="text-amber-400 font-semibold">64 bandas</span> activo)
          </span>
        </div>

        <div className="flex items-start gap-2 animate-fade-in [animation-delay:120ms]">
          <span className="shrink-0 px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-400 font-bold text-[10px] border border-amber-500/30">
            GSAP::ARC
          </span>
          <span className="text-brand-textMuted">
            Cinemáticas orbitales calculadas: curvas Bézier en arco para vuelo 3D continuo
          </span>
        </div>

        <div className="pt-2 mt-2 border-t border-brand-border/80 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono animate-fade-in [animation-delay:160ms]">
          <span className="text-brand-secondary font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
            12,500 partículas instanciadas · 60.0 FPS estable
          </span>
          <span className="text-brand-textMuted">Draw calls: 4 | Latencia: 5.2ms</span>
        </div>
      </div>
    ),
  },
  {
    id: 'c-memory',
    label: 'valgrind_memcheck.c',
    badge: 'C99 · Memoria & DSA',
    icon: Cpu,
    command: 'gcc -std=c99 -Wall -Wextra dsa_tree.c -o dsa && valgrind --leak-check=full ./dsa',
    commandTokens: [
      { text: 'gcc', colorClass: 'text-brand-purple font-semibold' },
      { text: '-std=c99', colorClass: 'text-amber-400 font-semibold' },
      { text: '-Wall -Wextra', colorClass: 'text-brand-textMuted' },
      { text: 'dsa_tree.c', colorClass: 'text-white' },
      { text: '&&', colorClass: 'text-brand-primary' },
      { text: 'valgrind', colorClass: 'text-brand-primary font-bold' },
      { text: '--leak-check=full', colorClass: 'text-brand-secondary' },
      { text: './dsa', colorClass: 'text-brand-purple font-semibold' },
    ],
    execTime: '1.24ms',
    output: (
      <div className="space-y-1.5 font-mono text-[11px] sm:text-xs leading-relaxed text-brand-text break-words">
        <div className="text-brand-secondary font-semibold flex items-center gap-1 animate-fade-in">
          <span>==48201==</span>
          <span>Memcheck, a memory error detector (C99 & Valgrind)</span>
        </div>

        <div className="flex items-start gap-2 animate-fade-in [animation-delay:40ms]">
          <span className="shrink-0 px-1.5 py-0.2 rounded bg-brand-primary/15 text-brand-primary font-bold text-[10px] border border-brand-primary/30">
            ALLOC
          </span>
          <span className="text-white">
            <code className="text-brand-primary font-bold">malloc(sizeof(Node) * 1024)</code> at
            0x7ffe4b20 ...{' '}
            <span className="text-brand-secondary font-semibold">OK (Bytes alineados)</span>
          </span>
        </div>

        <div className="flex items-start gap-2 animate-fade-in [animation-delay:80ms]">
          <span className="shrink-0 px-1.5 py-0.2 rounded bg-brand-purple/15 text-brand-purple font-bold text-[10px] border border-brand-purple/30">
            TRAVERSE
          </span>
          <span className="text-brand-text">
            Árbol binario balanceado: 1,024 nodos recorridos en{' '}
            <span className="text-brand-purple font-semibold">O(log n)</span>
          </span>
        </div>

        <div className="flex items-start gap-2 animate-fade-in [animation-delay:120ms]">
          <span className="shrink-0 px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-400 font-bold text-[10px] border border-amber-500/30">
            FREE
          </span>
          <span className="text-brand-text">
            Recorrido post-orden liberando memoria en heap de forma segura (sin dangling pointers)
          </span>
        </div>

        <div className="pt-2 mt-2 border-t border-brand-border/80 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono animate-fade-in [animation-delay:160ms]">
          <span className="text-brand-secondary font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
            All 1,024 heap blocks were freed -- 0 leaks, 0 errors
          </span>
          <span className="text-brand-textMuted">ERROR SUMMARY: 0 errors from 0 contexts</span>
        </div>
      </div>
    ),
  },
  {
    id: 'pipeline',
    label: 'fetch_projects.py',
    badge: 'Python ETL · CI/CD',
    icon: Workflow,
    command: 'python3 execution/fetch_projects.py --verify-determinism',
    commandTokens: [
      { text: 'python3', colorClass: 'text-brand-purple font-semibold' },
      { text: 'execution/fetch_projects.py', colorClass: 'text-brand-primary font-bold' },
      { text: '--verify-determinism', colorClass: 'text-brand-secondary font-semibold' },
    ],
    execTime: '0.19ms',
    output: (
      <div className="space-y-1.5 font-mono text-[11px] sm:text-xs leading-relaxed text-brand-text break-words">
        <div className="flex items-start gap-2 animate-fade-in">
          <span className="shrink-0 px-1.5 py-0.2 rounded bg-brand-primary/15 text-brand-primary font-bold text-[10px] border border-brand-primary/30">
            CONFIG
          </span>
          <span className="text-white">
            Cargando esquema determinista desde{' '}
            <code className="text-brand-primary">data/projects_config.json</code>
          </span>
        </div>

        <div className="flex items-start gap-2 animate-fade-in [animation-delay:40ms]">
          <span className="shrink-0 px-1.5 py-0.2 rounded bg-brand-secondary/15 text-brand-secondary font-bold text-[10px] border border-brand-secondary/30">
            ETL
          </span>
          <span className="text-brand-text">
            Validando constraints para 7 proyectos ...{' '}
            <span className="text-brand-secondary font-semibold">100% Schema Conformance</span>
          </span>
        </div>

        <div className="flex items-start gap-2 animate-fade-in [animation-delay:80ms]">
          <span className="shrink-0 px-1.5 py-0.2 rounded bg-brand-purple/15 text-brand-purple font-bold text-[10px] border border-brand-purple/30">
            HASH
          </span>
          <span className="text-brand-text">
            Verificando checksum SHA-256: determinismo criptográfico validado
          </span>
        </div>

        <div className="flex items-start gap-2 animate-fade-in [animation-delay:120ms]">
          <span className="shrink-0 px-1.5 py-0.2 rounded bg-amber-500/15 text-amber-400 font-bold text-[10px] border border-amber-500/30">
            EMIT
          </span>
          <span className="text-brand-textMuted">
            Generando catálogo inmutable en{' '}
            <code className="text-brand-text">src/data/projects.json</code>
          </span>
        </div>

        <div className="pt-2 mt-2 border-t border-brand-border/80 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono animate-fade-in [animation-delay:160ms]">
          <span className="text-brand-secondary font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
            Build ready: 0 errores · GitHub Actions deployment verificado
          </span>
          <span className="text-brand-textMuted">Exit Code: 0</span>
        </div>
      </div>
    ),
  },
  {
    id: 'profile',
    label: 'profile.json',
    badge: 'Stack · Perfil',
    icon: Braces,
    command: 'cat ~/.dev/profile.json | jq .focus',
    commandTokens: [
      { text: 'cat', colorClass: 'text-brand-purple font-semibold' },
      { text: '~/.dev/profile.json', colorClass: 'text-white' },
      { text: '|', colorClass: 'text-brand-primary' },
      { text: 'jq', colorClass: 'text-brand-primary font-bold' },
      { text: '.focus', colorClass: 'text-amber-400 font-semibold' },
    ],
    execTime: '0.08ms',
    output: (
      <div className="font-mono text-[11px] sm:text-xs leading-snug text-brand-text">
        <pre className="p-1 font-mono text-[11px] sm:text-xs leading-snug animate-fade-in">
          <span className="text-brand-textMuted">{'{'}</span>
          {'\n  '}
          <span className="text-brand-primary">"ingeniero"</span>
          <span className="text-brand-textMuted">: </span>
          <span className="text-emerald-300">"Leandro"</span>
          <span className="text-brand-textMuted">,</span>
          {'\n  '}
          <span className="text-brand-primary">"rol_objetivo"</span>
          <span className="text-brand-textMuted">: </span>
          <span className="text-emerald-300">"Desarrollador de Software"</span>
          <span className="text-brand-textMuted">,</span>
          {'\n  '}
          <span className="text-brand-primary">"especialidades"</span>
          <span className="text-brand-textMuted">: {'['}</span>
          {'\n    '}
          <span className="text-amber-300">"WebGL 3D & Shaders GLSL (Three.js, R3F)"</span>
          <span className="text-brand-textMuted">,</span>
          {'\n    '}
          <span className="text-amber-300">"Web Audio API & DSP (FFT Espectral)"</span>
          <span className="text-brand-textMuted">,</span>
          {'\n    '}
          <span className="text-amber-300">"Sistemas C99 (Punteros, Memoria Heap, GCC)"</span>
          <span className="text-brand-textMuted">,</span>
          {'\n    '}
          <span className="text-amber-300">"React 19, TypeScript & Tailwind CSS"</span>
          {'\n  '}
          <span className="text-brand-textMuted">{']'},</span>
          {'\n  '}
          <span className="text-brand-primary">"estandares_calidad"</span>
          <span className="text-brand-textMuted">: </span>
          <span className="text-brand-purple">"60 FPS GPU · WCAG AA a11y · Vitest 100%"</span>
          {'\n'}
          <span className="text-brand-textMuted">{'}'}</span>
        </pre>
      </div>
    ),
  },
];

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('webgl-audio');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [execKey, setExecKey] = useState<number>(0);
  const execTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (execTimerRef.current) clearTimeout(execTimerRef.current);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  const handleSelectTab = (tabId: string, forceReplay: boolean = false) => {
    if (tabId === activeTab && !forceReplay) return;
    setIsExecuting(true);
    setActiveTab(tabId);
    setExecKey((prev) => prev + 1);
    if (execTimerRef.current) clearTimeout(execTimerRef.current);
    execTimerRef.current = setTimeout(() => {
      setIsExecuting(false);
    }, 180);
  };

  const fallbackCopy = (text: string): boolean => {
    if (typeof document === 'undefined') return false;
    const previousFocus = document.activeElement as HTMLElement | null;
    const textArea = document.createElement('textarea');
    try {
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.top = '0';
      textArea.style.left = '-9999px';
      textArea.style.opacity = '0';
      textArea.style.pointerEvents = 'none';
      textArea.setAttribute('readonly', '');
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return document.execCommand('copy');
    } catch {
      return false;
    } finally {
      textArea.remove();
      // Return focus to the copy button so keyboard users keep their place
      previousFocus?.focus?.();
    }
  };

  const handleCopy = async () => {
    const text = currentTab.command;
    let success = false;
    if (
      typeof navigator !== 'undefined' &&
      navigator.clipboard?.writeText &&
      typeof window !== 'undefined' &&
      window.isSecureContext
    ) {
      try {
        await navigator.clipboard.writeText(text);
        success = true;
      } catch {
        success = fallbackCopy(text);
      }
    } else {
      success = fallbackCopy(text);
    }
    setCopyStatus(success ? 'copied' : 'error');
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    copyTimerRef.current = setTimeout(() => setCopyStatus('idle'), 2000);
  };

  const handleTabKeyDown = (e: React.KeyboardEvent, currentId: string) => {
    const currentIndex = tabs.findIndex((t) => t.id === currentId);
    let nextIndex = -1;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = tabs.length - 1;
    }

    if (nextIndex !== -1) {
      const nextTab = tabs[nextIndex];
      handleSelectTab(nextTab.id);
      const nextEl = document.getElementById(`terminal-tab-${nextTab.id}`);
      nextEl?.focus();
    }
  };

  return (
    <div className="rounded-2xl bg-[#070a0f] border border-slate-700/60 dark:border-brand-border shadow-2xl dark:shadow-[0_0_35px_rgba(88,166,255,0.12)] overflow-hidden font-mono text-xs w-full max-w-full min-w-0 transition-all duration-300">
      {/* Terminal Title Bar */}
      <div className="bg-[#0e141d] px-3.5 sm:px-4 py-2.5 flex items-center justify-between border-b border-brand-border select-none">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {/* macOS traffic light controls with subtle hover micro-interaction */}
          <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#f85149] inline-block transition-transform hover:scale-110" />
            <span className="w-3 h-3 rounded-full bg-[#d29922] inline-block transition-transform hover:scale-110" />
            <span className="w-3 h-3 rounded-full bg-[#3fb950] inline-block transition-transform hover:scale-110" />
          </div>

          <div className="flex items-center gap-2 ml-2 min-w-0 flex-1">
            <TerminalIcon className="w-3.5 h-3.5 text-brand-primary shrink-0" aria-hidden="true" />
            <span className="text-slate-300 dark:text-brand-text text-[11px] font-mono font-semibold truncate">
              zsh — leann027@portfolio-edge
            </span>
            <span className="hidden md:inline-flex items-center gap-1 px-1.5 py-0.2 rounded bg-brand-surfaceAlt text-brand-secondary border border-brand-secondary/30 text-[9px] font-bold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse" />
              ONLINE
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-brand-textMuted font-mono shrink-0 pl-2">
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-brand-surfaceAlt/80 border border-brand-border/60">
            WebGL 2.0 / GCC 14 / Py 3.12
          </span>
          <span className="text-brand-secondary font-mono">exit: 0</span>
        </div>
      </div>

      {/* Interactive Tabs Row */}
      <div
        role="tablist"
        aria-label="Pestañas de la terminal interactiva"
        className="flex items-center bg-[#090d13] border-b border-brand-border/80 px-2 overflow-x-auto custom-scroll min-w-0"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls="terminal-tabpanel"
              id={`terminal-tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleSelectTab(tab.id)}
              onKeyDown={(e) => handleTabKeyDown(e, tab.id)}
              className={`group flex items-center gap-2 px-3 py-2.5 text-[11px] font-mono border-b-2 transition-all whitespace-nowrap cursor-pointer shrink-0 focus:outline-none focus:ring-1 focus:ring-brand-primary/50 ${
                isActive
                  ? 'border-brand-primary text-brand-primary bg-brand-card/90 font-bold shadow-sm'
                  : 'border-transparent text-slate-400 dark:text-brand-textMuted hover:text-white hover:bg-brand-surface/50'
              }`}
            >
              <Icon
                className={`w-3.5 h-3.5 transition-colors ${
                  isActive
                    ? 'text-brand-primary'
                    : 'text-slate-500 dark:text-brand-textDim group-hover:text-brand-primary'
                }`}
              />
              <span>{tab.label}</span>
              <span
                className={`hidden md:inline-block text-[9px] px-1.5 py-0.2 rounded font-mono ${
                  isActive
                    ? 'bg-brand-primary/20 text-brand-primary border border-brand-primary/40'
                    : 'bg-brand-surface border border-brand-border text-brand-textMuted'
                }`}
              >
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Terminal Main Body */}
      <div
        id="terminal-tabpanel"
        role="tabpanel"
        aria-labelledby={`terminal-tab-${currentTab.id}`}
        className="p-3.5 sm:p-5 space-y-3 leading-relaxed text-brand-text min-w-0"
      >
        {/* Command Line Prompt with syntax highlighting & copy action */}
        <div className="relative flex items-center justify-between gap-2 bg-[#0c1017] px-3.5 py-2.5 rounded-xl border border-brand-border/80 shadow-inner min-w-0">
          <div
            tabIndex={0}
            role="region"
            aria-label="Comando interactivo"
            className="flex items-center gap-2 overflow-x-auto custom-scroll py-0.5 min-w-0 flex-1 focus:outline-none focus:ring-1 focus:ring-brand-primary/40 rounded"
          >
            <span className="text-brand-secondary font-bold text-sm shrink-0">❯</span>
            <div className="flex items-center gap-1.5 font-mono text-xs whitespace-nowrap">
              {currentTab.commandTokens.map((token, idx) => (
                <span key={idx} className={token.colorClass}>
                  {token.text}
                </span>
              ))}
            </div>
            {/* Blinking cursor */}
            <span
              className="inline-block w-2 h-4 bg-brand-primary animate-terminal-blink shadow-[0_0_8px_rgba(88,166,255,0.6)] shrink-0"
              aria-hidden="true"
            />
          </div>

          <div className="flex items-center gap-1.5 shrink-0 pl-2 border-l border-brand-border/60">
            <span className="hidden sm:inline-block text-[10px] text-brand-textDim font-mono">
              {currentTab.execTime}
            </span>
            <button
              onClick={handleCopy}
              className={`btn-tactile relative p-1.5 rounded-lg border transition-all cursor-pointer ${
                copyStatus === 'copied'
                  ? 'bg-brand-secondary/20 border-brand-secondary/60 text-brand-secondary'
                  : copyStatus === 'error'
                    ? 'bg-brand-rose/20 border-brand-rose/60 text-brand-rose'
                    : 'bg-brand-surface border-brand-border text-brand-textMuted hover:text-brand-primary hover:border-brand-primary/50'
              }`}
              title="Copiar comando"
              aria-label="Copiar comando al portapapeles"
            >
              {copyStatus === 'copied' ? (
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-brand-secondary" aria-hidden="true" />
                  <span className="text-[10px] font-bold text-brand-secondary pr-0.5">
                    ¡Copiado!
                  </span>
                </div>
              ) : copyStatus === 'error' ? (
                <span className="text-[10px] font-bold text-brand-rose px-0.5">
                  No se pudo copiar
                </span>
              ) : (
                <Copy className="w-3.5 h-3.5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Output pane with high-contrast syntax tokens */}
        <div
          key={`${currentTab.id}-${execKey}`}
          tabIndex={0}
          role="region"
          aria-label="Salida del comando"
          className={`p-3.5 sm:p-4 rounded-xl bg-[#090d13] border border-brand-border/70 min-h-[160px] flex flex-col justify-between overflow-x-auto custom-scroll focus:outline-none focus:ring-1 focus:ring-brand-primary/40 transition-all duration-200 ${
            isExecuting ? 'opacity-60 scale-[0.99]' : 'opacity-100 scale-100'
          }`}
        >
          {currentTab.output}
        </div>

        {/* Tactile quick command execution bar */}
        <div className="pt-1 flex flex-wrap items-center gap-2 text-[10px] font-mono">
          <span className="text-slate-400 dark:text-brand-textDim font-semibold flex items-center gap-1">
            <Play className="w-3 h-3 text-emerald-500" aria-hidden="true" />
            <span>Comandos rápidos:</span>
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectTab(tab.id, true)}
                  className={`btn-tactile px-2.5 py-1 rounded-lg border text-[10px] font-mono font-medium transition-all cursor-pointer flex items-center gap-1 ${
                    isSelected
                      ? 'border-brand-primary/80 bg-brand-primary/15 text-brand-primary font-bold shadow-[0_0_12px_rgba(88,166,255,0.25)]'
                      : 'border-brand-border bg-brand-surface/90 text-slate-300 dark:text-brand-textMuted hover:text-white hover:border-brand-borderHover hover:bg-brand-surfaceAlt'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span className="text-brand-secondary font-bold">▶</span>
                  <span>{tab.label.replace(/\.[^/.]+$/, '')}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
