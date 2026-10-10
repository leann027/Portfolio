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
      <div
        className="absolute -top-24 -left-20 w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] rounded-full bg-swatch-lavender/25 dark:bg-swatch-lavender/12 blur-[100px] sm:blur-[130px] animate-float-slow transform-gpu will-change-transform"
      />

      {/* Orbe 2: Durazno Cálido (Superior Derecha) */}
      <div
        className="absolute top-12 -right-24 w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full bg-swatch-peach/20 dark:bg-swatch-peach/10 blur-[90px] sm:blur-[120px] animate-float-reverse transform-gpu will-change-transform"
      />

      {/* Orbe 3: Menta Pastel (Centro / Flotante) */}
      <div
        className="absolute top-[40%] left-[15%] w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full bg-swatch-mint/20 dark:bg-swatch-mint/10 blur-[95px] sm:blur-[125px] animate-float-drift transform-gpu will-change-transform"
      />

      {/* Orbe 4: Manteca & Cielo Cálido (Inferior Derecha) */}
      <div
        className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-swatch-butter/25 dark:bg-swatch-sky/10 blur-[100px] sm:blur-[130px] animate-float-slow transform-gpu will-change-transform"
      />

      {/* Malla Sutil Anti-Fatiga: Suaviza la transición y da textura de papel lino mate */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-earth-light/20 to-earth-light/60 dark:via-earth-coffeeBg/20 dark:to-earth-coffeeBg/60 mix-blend-soft-light pointer-events-none" />
    </div>
  );
};
