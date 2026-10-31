import React, { useEffect, useRef } from 'react';

/**
 * Performance-optimized Cursor Glow:
 * Uses direct DOM manipulation via requestAnimationFrame instead of React state,
 * eliminating 100+ unnecessary component re-renders per second on mousemove.
 */
export default function CursorGlow() {
  const glowRef = useRef(null);
  const posRef = useRef({ x: -500, y: -500 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Only enable on fine pointer desktop devices
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const glowEl = glowRef.current;
    if (!glowEl) return;

    let isVisible = false;

    const render = () => {
      if (glowEl) {
        glowEl.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
        if (!isVisible) {
          glowEl.style.opacity = '1';
          isVisible = true;
        }
      }
      rafRef.current = null;
    };

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(render);
      }
    };

    const onLeave = () => {
      if (glowEl) {
        glowEl.style.opacity = '0';
        isVisible = false;
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      id="cursor-glow"
      style={{
        opacity: 0,
        pointerEvents: 'none',
        willChange: 'transform',
        position: 'fixed',
        left: 0,
        top: 0,
        transition: 'opacity 0.25s ease',
      }}
      aria-hidden="true"
    />
  );
}
