import { useEffect, useRef, useState, RefObject } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches);

/**
 * Keeps rendering the last non-null `value` for `duration` ms after it becomes null,
 * so the exit animation can play. The parent state stays the single source of truth:
 * reopening during the fade-out simply cancels the pending unmount.
 */
export function useExitTransition<T>(value: T | null, duration = 160) {
  const [shown, setShown] = useState<T | null>(value);

  // Sync incoming values during render (always the freshest object, even with the same id)
  if (value !== null && value !== shown) {
    setShown(value);
  }

  const isClosing = value === null && shown !== null;

  useEffect(() => {
    if (!isClosing) return;
    if (prefersReducedMotion()) {
      setShown(null);
      return;
    }
    const timer = setTimeout(() => setShown(null), duration);
    return () => clearTimeout(timer);
  }, [isClosing, duration]);

  return { shown, isClosing };
}

// Shared across every open dialog so stacked modals don't restore each other's overflow
let scrollLockCount = 0;
let originalBodyOverflow = '';

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Dialog accessibility while `active`: body scroll lock, initial focus, Escape handling,
 * Tab focus trap inside `containerRef`, and focus restoration on deactivation.
 */
export function useDialogBehavior(
  active: boolean,
  containerRef: RefObject<HTMLElement>,
  initialFocusRef: RefObject<HTMLElement>,
  onEscape: () => void
) {
  const onEscapeRef = useRef(onEscape);
  onEscapeRef.current = onEscape;

  useEffect(() => {
    if (!active) return;

    const previousFocus = document.activeElement as HTMLElement | null;

    if (scrollLockCount === 0) {
      originalBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    scrollLockCount++;

    const timer = setTimeout(() => {
      initialFocusRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscapeRef.current();
        return;
      }

      if (e.key === 'Tab' && containerRef.current) {
        const focusableElements = containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const container = containerRef.current;

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);

      scrollLockCount--;
      if (scrollLockCount === 0) {
        document.body.style.overflow = originalBodyOverflow;
      }

      // Don't steal focus from another dialog that opened while this one was fading out
      const current = document.activeElement;
      if (!current || current === document.body || container?.contains(current)) {
        previousFocus?.focus?.();
      }
    };
  }, [active, containerRef, initialFocusRef]);
}
