import React, { useEffect, useRef } from 'react';

/**
 * BackgroundAmbient
 * Fondo reactivo avanzado con canvas interactivo acelerado por hardware.
 * Responde de manera orgánica al movimiento del cursor mediante interpolación (lerp)
 * y cálculo de proximidad a una retícula digital/constelación de nodos técnicos,
 * emulando el sustrato computacional de la estética DevKernel Dark de Stitch.
 *
 * Respeta estrictamente prefers-reduced-motion (WCAG 2.2 SC 2.3.3).
 */
export const BackgroundAmbient: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePos = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
  });
  const isReducedMotion = useRef<boolean>(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    isReducedMotion.current = motionQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion.current = e.matches;
    };
    motionQuery.addEventListener('change', handleMotionChange);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.targetX = e.clientX;
      mousePos.current.targetY = e.clientY;
      // Initialize on first move if offscreen
      if (mousePos.current.x < 0) {
        mousePos.current.x = e.clientX;
        mousePos.current.y = e.clientY;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Node grid points for reactive constellation
    const spacing = 72; // Distance between grid intersections

    const render = () => {
      if (isReducedMotion.current) {
        ctx.clearRect(0, 0, width, height);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse position towards target
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.08;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.08;

      const isDark = document.documentElement.classList.contains('dark');

      const mx = mousePos.current.x;
      const my = mousePos.current.y;
      const radius = 220; // Interaction radius

      // Draw reactive grid intersection points
      const startX = (mx % spacing) - spacing;
      const startY = (my % spacing) - spacing;

      for (let x = startX - radius; x < mx + radius; x += spacing) {
        for (let y = startY - radius; y < my + radius; y += spacing) {
          if (x < 0 || x > width || y < 0 || y > height) continue;

          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < radius) {
            const intensity = (1 - dist / radius) * (isDark ? 0.45 : 0.25);
            ctx.beginPath();
            ctx.arc(x, y, 1.5 + intensity * 2, 0, Math.PI * 2);
            ctx.fillStyle = isDark
              ? `rgba(88, 166, 255, ${intensity})`
              : `rgba(15, 23, 42, ${intensity * 0.7})`;
            ctx.fill();

            // Connect nearest nodes to cursor with subtle hairline
            if (dist < radius * 0.5) {
              const lineAlpha = (1 - dist / (radius * 0.5)) * (isDark ? 0.18 : 0.1);
              ctx.beginPath();
              ctx.moveTo(mx, my);
              ctx.lineTo(x, y);
              ctx.strokeStyle = isDark
                ? `rgba(88, 166, 255, ${lineAlpha})`
                : `rgba(15, 23, 42, ${lineAlpha})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }
      }

      // Reactive cursor glow halo
      if (mx > 0 && my > 0) {
        const glowGradient = ctx.createRadialGradient(mx, my, 0, mx, my, 280);
        if (isDark) {
          glowGradient.addColorStop(0, 'rgba(88, 166, 255, 0.07)');
          glowGradient.addColorStop(0.5, 'rgba(63, 185, 80, 0.03)');
          glowGradient.addColorStop(1, 'rgba(9, 13, 19, 0)');
        } else {
          glowGradient.addColorStop(0, 'rgba(88, 166, 255, 0.05)');
          glowGradient.addColorStop(0.6, 'rgba(188, 140, 255, 0.02)');
          glowGradient.addColorStop(1, 'rgba(248, 250, 252, 0)');
        }
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(mx, my, 280, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden -z-10 select-none transition-opacity duration-700"
    >
      {/* Interactive reactive canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ willChange: 'transform' }}
      />

      {/* Orbe 1: Cian / Azul Primario (Superior Izquierda con glow reactivo) */}
      <div className="absolute -top-32 -left-20 w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] rounded-full bg-brand-primary/10 dark:bg-brand-primary/8 blur-[100px] animate-float-slow motion-reduce:animate-none" />

      {/* Orbe 2: Esmeralda / Terminal (Superior Derecha) */}
      <div className="absolute top-16 -right-24 w-80 h-80 sm:w-[480px] sm:h-[480px] rounded-full bg-brand-secondary/10 dark:bg-brand-secondary/8 blur-[100px] animate-float-reverse motion-reduce:animate-none" />

      {/* Orbe 3: Púrpura / Arquitectura (Centro-Inferior) */}
      <div className="absolute top-[48%] left-[10%] w-80 h-80 sm:w-[440px] sm:h-[440px] rounded-full bg-brand-purple/10 dark:bg-brand-purple/6 blur-[90px] animate-float-drift motion-reduce:animate-none" />

      {/* Orbe 4: Ámbar / Compilación (Fondo Inferior) */}
      <div className="absolute bottom-[-10%] right-[12%] w-96 h-96 sm:w-[460px] sm:h-[460px] rounded-full bg-brand-amber/10 dark:bg-brand-amber/6 blur-[110px] animate-float-slow motion-reduce:animate-none" />
    </div>
  );
};
