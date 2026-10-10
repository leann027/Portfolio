import React, { useState } from 'react';
import { X, Copy, Check, FileCode2, Rocket } from 'lucide-react';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddProjectModal: React.FC<AddProjectModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const templateSnippet = `{
  "id": "mi-nuevo-proyecto",
  "repoName": "MiNuevoProyecto",
  "title": "Nombre de Mi Nuevo Proyecto",
  "tagline": "Descripción breve y llamativa",
  "shortDescription": "Resumen conciso para la tarjeta del proyecto...",
  "fullDescription": "Explicación completa de qué resuelve, arquitectura y aprendizajes...",
  "category": "web", // o "desktop", "algorithms", "automation"
  "languages": ["Python", "TypeScript"],
  "technologies": ["Python", "FastAPI", "React", "Docker"],
  "githubUrl": "https://github.com/leann027/MiNuevoProyecto",
  "demoUrl": null,
  "isPrivate": false,
  "academic": false,
  "featured": true,
  "status": "Completado",
  "updatedAt": "2026-10-10",
  "highlights": [
    "Diseño de arquitectura limpia y modular",
    "Integración continua y testing automatizado"
  ]
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(templateSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
            <Rocket className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Cómo incorporar futuros proyectos
          </h2>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          Gracias a la <strong>arquitectura de 3 capas</strong> implementada, no necesitas escribir código HTML ni modificar componentes visuales para publicar tus futuros desarrollos.
        </p>

        {/* 3 Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-brand-600 text-white font-bold flex items-center justify-center mb-3 text-sm">
              1
            </div>
            <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">
              Crea tu Repositorio
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Sube tu proyecto a tu cuenta de GitHub (<code className="text-brand-500 font-mono">github.com/leann027</code>).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-brand-600 text-white font-bold flex items-center justify-center mb-3 text-sm">
              2
            </div>
            <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">
              Agrega la Configuración
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Pega la ficha de tu proyecto en el archivo <code className="text-brand-500 font-mono">data/projects_config.json</code>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800">
            <div className="w-8 h-8 rounded-lg bg-brand-600 text-white font-bold flex items-center justify-center mb-3 text-sm">
              3
            </div>
            <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-1">
              Despliegue Automático
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Ejecuta <code className="text-brand-500 font-mono">npm run data:fetch</code> o haz <code className="text-brand-500 font-mono">git push</code> para que GitHub Actions lo publique solo.
            </p>
          </div>
        </div>

        {/* JSON Template */}
        <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-4">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-brand-400" />
              <span>Plantilla JSON para copiar</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '¡Copiado!' : 'Copiar'}</span>
            </button>
          </div>
          <pre className="font-mono text-xs text-slate-300 overflow-x-auto max-h-56 p-1 scrollbar-thin">
            {templateSnippet}
          </pre>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
