import React, { useState } from 'react';
import { Cpu, Workflow, Database, Code2 } from 'lucide-react';

export const ArchitectureVisualizer: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'c-memory' | 'python-pipeline' | 'oop-inventory'>(
    'c-memory'
  );

  return (
    <section
      id="architecture"
      className="py-16 sm:py-20 bg-slate-50 dark:bg-brand-surface/50 border-y border-slate-200 dark:border-brand-border/70 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200 dark:border-brand-border">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-700 dark:text-brand-primary mb-1.5 font-semibold">
              <span className="material-symbols-outlined text-[16px] text-emerald-700 dark:text-brand-secondary">
                account_tree
              </span>
              <span>Computer Science & Systems Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Inspección de Arquitectura & Fundamentos
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-brand-textMuted mt-1 max-w-2xl leading-relaxed">
              Demostración interactiva de gestión manual de memoria en C, concurrencia determinista
              y pipelines de automatización en Python.
            </p>
          </div>

          {/* Mode Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white dark:bg-brand-card border border-slate-200 dark:border-brand-border text-xs font-mono shadow-xs">
            <button
              onClick={() => setActiveMode('c-memory')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeMode === 'c-memory'
                  ? 'bg-slate-900 text-white dark:bg-brand-primary dark:text-black font-bold shadow-xs'
                  : 'text-slate-700 hover:text-slate-900 dark:text-brand-textMuted dark:hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Memoria & C</span>
            </button>
            <button
              onClick={() => setActiveMode('python-pipeline')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeMode === 'python-pipeline'
                  ? 'bg-slate-900 text-white dark:bg-brand-primary dark:text-black font-bold shadow-xs'
                  : 'text-slate-700 hover:text-slate-900 dark:text-brand-textMuted dark:hover:text-white'
              }`}
            >
              <Workflow className="w-3.5 h-3.5" />
              <span>Pipeline Python</span>
            </button>
            <button
              onClick={() => setActiveMode('oop-inventory')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeMode === 'oop-inventory'
                  ? 'bg-slate-900 text-white dark:bg-brand-primary dark:text-black font-bold shadow-xs'
                  : 'text-slate-700 hover:text-slate-900 dark:text-brand-textMuted dark:hover:text-white'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>POO & Tkinter</span>
            </button>
          </div>
        </div>

        {/* Dynamic Architectural Blueprint Display */}
        {activeMode === 'c-memory' && (
          <div className="p-6 rounded-xl bg-[#080c12] border border-brand-border font-mono text-xs space-y-6 text-white shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-brand-border/60 text-brand-textMuted text-[11px]">
              <span className="flex items-center gap-2 text-brand-secondary font-semibold">
                <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
                Simulación: Asignación Dinámica de Lista Enlazada (Heap vs Stack)
              </span>
              <span className="text-brand-textMuted">GCC 14.2 • C99/C11 • Valgrind Clean</span>
            </div>

            {/* Architecture Nodes / Stages */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Stack Frame */}
              <div className="p-4 rounded-lg bg-brand-surface border border-brand-border space-y-2">
                <div className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">
                  01. Stack Frame
                </div>
                <div className="font-bold text-white text-sm">Puntero Head</div>
                <p className="text-[11px] text-brand-textMuted font-sans leading-relaxed">
                  Variable local en el marco de ejecución:{' '}
                  <code className="text-brand-primary">Node* head</code> almacena la dirección base
                  del primer nodo en el Heap.
                </p>
                <div className="mt-2 pt-2 border-t border-brand-border/60 text-[10px] text-brand-textMuted">
                  Dirección: <span className="text-brand-purple font-semibold">0x7ffe4200</span>
                </div>
              </div>

              {/* Node 1 in Heap */}
              <div className="p-4 rounded-lg bg-brand-surface border border-brand-secondary/40 space-y-2 shadow-[0_0_15px_rgba(63,185,80,0.06)]">
                <div className="text-[10px] font-bold text-brand-secondary uppercase tracking-wider">
                  02. Heap Allocation
                </div>
                <div className="font-bold text-white text-sm">Nodo A (Val: 10)</div>
                <p className="text-[11px] text-brand-textMuted font-sans leading-relaxed">
                  Asignado con <code className="text-brand-secondary">malloc(sizeof(Node))</code>.
                  Contiene <code className="text-brand-amber">int data = 10</code> y puntero{' '}
                  <code className="text-brand-primary">next</code>.
                </p>
                <div className="mt-2 pt-2 border-t border-brand-border/60 text-[10px] text-brand-textMuted">
                  Heap Addr: <span className="text-brand-secondary font-semibold">0x0040a120</span>{' '}
                  → next: 0x0040a150
                </div>
              </div>

              {/* Node 2 in Heap */}
              <div className="p-4 rounded-lg bg-brand-surface border border-brand-purple/40 space-y-2">
                <div className="text-[10px] font-bold text-brand-purple uppercase tracking-wider">
                  03. Link Traversal
                </div>
                <div className="font-bold text-white text-sm">Nodo B (Val: 20)</div>
                <p className="text-[11px] text-brand-textMuted font-sans leading-relaxed">
                  Enlazado determinista en O(1) tiempo de inserción. Recorrido seguro verificando
                  que <code className="text-brand-purple">curr != NULL</code>.
                </p>
                <div className="mt-2 pt-2 border-t border-brand-border/60 text-[10px] text-brand-textMuted">
                  Heap Addr: <span className="text-brand-purple font-semibold">0x0040a150</span> →
                  next: NULL
                </div>
              </div>

              {/* Free & Dealloc */}
              <div className="p-4 rounded-lg bg-brand-surface border border-brand-amber/40 space-y-2">
                <div className="text-[10px] font-bold text-brand-amber uppercase tracking-wider">
                  04. Memory Deallocation
                </div>
                <div className="font-bold text-white text-sm">Liberación Total</div>
                <p className="text-[11px] text-brand-textMuted font-sans leading-relaxed">
                  Paso iterativo con puntero auxiliar para liberar memoria con{' '}
                  <code className="text-brand-amber">free()</code> sin pérdida de referencias ni
                  memory leaks.
                </p>
                <div className="mt-2 pt-2 border-t border-brand-border/60 text-[10px] text-brand-textMuted">
                  Resultado: <span className="text-brand-secondary font-bold">0 bytes lost</span>
                </div>
              </div>
            </div>

            {/* Code Snippet from C Data Structures */}
            <div className="bg-[#0b1017] rounded-lg p-4 border border-brand-border">
              <div className="flex items-center justify-between text-brand-textMuted mb-2 pb-2 border-b border-brand-border/60 text-[11px]">
                <span className="flex items-center gap-1.5 text-brand-primary">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>
                    src/linked_list.c — Implementación de lista enlazada y liberación segura
                  </span>
                </span>
                <span className="text-brand-secondary font-semibold">CS50 & Terciario Urquiza</span>
              </div>
              <pre className="text-brand-text text-[11px] leading-relaxed overflow-x-auto">
                <code>{`typedef struct Node {
    int data;
    struct Node* next;
} Node;

// Inserción segura al inicio en tiempo O(1)
bool push(Node** head_ref, int new_data) {
    Node* new_node = (Node*) malloc(sizeof(Node));
    if (new_node == NULL) return false; // Protección contra OOM
    
    new_node->data = new_data;
    new_node->next = (*head_ref);
    (*head_ref) = new_node;
    return true;
}

// Liberación recursiva/iterativa previniendo Dangling Pointers
void free_list(Node* head) {
    Node* current = head;
    while (current != NULL) {
        Node* next = current->next;
        free(current);
        current = next;
    }
}`}</code>
              </pre>
            </div>
          </div>
        )}

        {activeMode === 'python-pipeline' && (
          <div className="p-6 rounded-xl bg-[#080c12] border border-brand-border font-mono text-xs space-y-6 text-white shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-brand-border/60 text-brand-textMuted text-[11px]">
              <span className="flex items-center gap-2 text-brand-primary font-semibold">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                Pipeline Determinista: Build-Time Data Sync en Python
              </span>
              <span className="text-brand-textMuted">Python 3.12 • Unittest • CI/CD</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-brand-surface border border-brand-border space-y-2">
                <div className="text-[10px] font-bold text-brand-amber uppercase tracking-wider">
                  01. Canonical Source
                </div>
                <div className="font-bold text-white text-sm">data/projects_config.json</div>
                <p className="text-[11px] text-brand-textMuted font-sans leading-relaxed">
                  Almacén central canónico. Define metadatos, banderas de privacidad, institución
                  académica y ordenamiento.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-brand-surface border border-brand-secondary/40 space-y-2">
                <div className="text-[10px] font-bold text-brand-secondary uppercase tracking-wider">
                  02. Python ETL Processor
                </div>
                <div className="font-bold text-white text-sm">execution/fetch_projects.py</div>
                <p className="text-[11px] text-brand-textMuted font-sans leading-relaxed">
                  Valida reglas de negocio con unittests, sanitiza enlaces privados y compila{' '}
                  <code className="text-brand-secondary">projects.json</code> para consumo tipado en
                  React.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-brand-surface border border-brand-primary/40 space-y-2">
                <div className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">
                  03. Automated Quality Gate
                </div>
                <div className="font-bold text-white text-sm">Vitest + axe-core CI</div>
                <p className="text-[11px] text-brand-textMuted font-sans leading-relaxed">
                  20 pruebas unitarias y de accesibilidad WCAG AA ejecutadas en cada commit mediante
                  GitHub Actions.
                </p>
              </div>
            </div>

            <div className="bg-[#0b1017] rounded-lg p-4 border border-brand-border">
              <div className="flex items-center justify-between text-brand-textMuted mb-2 pb-2 border-b border-brand-border/60 text-[11px]">
                <span className="flex items-center gap-1.5 text-brand-secondary">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>execution/fetch_projects.py — Validación de esquema canónico</span>
                </span>
                <span className="text-brand-primary font-semibold">Determinismo Garantizado</span>
              </div>
              <pre className="text-brand-text text-[11px] leading-relaxed overflow-x-auto">
                <code>{`def process_projects(config_path: Path, output_path: Path) -> dict:
    with open(config_path, "r", encoding="utf-8") as f:
        raw_config = json.load(f)

    # Validar integridad estructural
    validate_schema(raw_config)
    
    # Procesar y proteger repositorios académicos privados
    processed = []
    for item in raw_config["projects"]:
        project = normalize_project_data(item)
        if project["isPrivate"]:
            # Sanitizar estrictamente URLs externas
            project["githubUrl"] = ""
            project["demoUrl"] = None
        processed.append(project)

    output = {
        "metadata": {"generatedAt": datetime.now(timezone.utc).isoformat(), "total": len(processed)},
        "projects": processed
    }
    return write_deterministic_json(output, output_path)`}</code>
              </pre>
            </div>
          </div>
        )}

        {activeMode === 'oop-inventory' && (
          <div className="p-6 rounded-xl bg-[#080c12] border border-brand-border font-mono text-xs space-y-6 text-white shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-brand-border/60 text-brand-textMuted text-[11px]">
              <span className="flex items-center gap-2 text-brand-purple font-semibold">
                <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
                Arquitectura de Software: Sistema de Inventario & Depósito (ProyGes)
              </span>
              <span className="text-brand-textMuted">Python 3 • Tkinter • ReportLab • JSON</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-brand-surface border border-brand-border space-y-2">
                <div className="text-[10px] font-bold text-brand-purple uppercase tracking-wider">
                  Capa de Modelo
                </div>
                <div className="font-bold text-white text-sm">Entidades POO</div>
                <p className="text-[11px] text-brand-textMuted font-sans leading-relaxed">
                  Clases <code className="text-brand-purple">Producto</code>,{' '}
                  <code className="text-brand-purple">MovimientoStock</code> y{' '}
                  <code className="text-brand-purple">Proveedor</code> con validación estricta de
                  tipos.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-brand-surface border border-brand-secondary/40 space-y-2">
                <div className="text-[10px] font-bold text-brand-secondary uppercase tracking-wider">
                  Capa de Control
                </div>
                <div className="font-bold text-white text-sm">GestorInventario</div>
                <p className="text-[11px] text-brand-textMuted font-sans leading-relaxed">
                  Lógica de negocio desacoplada: control de stock mínimo, auditoría transaccional y
                  persistencia JSON atómica.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-brand-surface border border-brand-primary/40 space-y-2">
                <div className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">
                  Capa de Presentación
                </div>
                <div className="font-bold text-white text-sm">Tkinter + ReportLab</div>
                <p className="text-[11px] text-brand-textMuted font-sans leading-relaxed">
                  Vistas modulares de escritorio con generación de reportes ejecutivos vectoriales
                  en PDF de alta resolución.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
