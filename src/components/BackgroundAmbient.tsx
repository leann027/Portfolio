import React from 'react';

/**
 * BackgroundAmbient
 * Componente de fondo dinámico ambiental con orbes pastel difusos flotantes.
 * Diseñado para eliminar la fatiga ocular, generar profundidad estética Lo-Fi
 * y funcionar a 60 FPS acelerado por hardware sin sobrecargar CPU/GPU.
 */
export const BackgroundAmbient: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden -z-10 select-none transition-opacity duration-700"
    >
      {/* Orbe 1: Lavanda Suave (Superior Izquierda) */}
      <div className="absolute -top-24 -left-20 w-96 h-96 sm:w-[480px] sm:h-[480px] rounded-full bg-swatch-lavender/20 dark:bg-swatch-lavender/10 blur-3xl animate-float-slow motion-reduce:animate-none" />

      {/* Orbe 2: Durazno Cálido (Superior Derecha) */}
      <div className="absolute top-12 -right-24 w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full bg-swatch-peach/18 dark:bg-swatch-peach/10 blur-3xl animate-float-reverse motion-reduce:animate-none" />

      {/* Orbe 3: Menta Pastel (Centro / Flotante) */}
      <div className="absolute top-[40%] left-[15%] w-80 h-80 sm:w-[400px] sm:h-[400px] rounded-full bg-swatch-mint/15 dark:bg-swatch-mint/10 blur-3xl animate-float-drift motion-reduce:animate-none" />

      {/* Orbe 4: Manteca & Cielo Cálido (Inferior Derecha) */}
      <div className="absolute bottom-[-10%] right-[10%] w-96 h-96 sm:w-[440px] sm:h-[440px] rounded-full bg-swatch-butter/20 dark:bg-swatch-sky/10 blur-3xl animate-float-slow motion-reduce:animate-none" />
    </div>
  );
};
