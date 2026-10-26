import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import axe from 'axe-core';
import { App } from '../src/App';

describe('Automated Accessibility Audits (axe-core)', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });
  });

  it('verifies 0 critical or serious axe violations in light mode', async () => {
    document.documentElement.classList.remove('dark');
    const { container } = render(<App />);

    const results = await axe.run(container, {
      rules: {
        // In JSDOM, color-contrast requires full browser CSS layout engine
        'color-contrast': { enabled: false },
      },
    });

    const severeViolations = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );
    expect(severeViolations).toEqual([]);
  });

  it('verifies 0 critical or serious axe violations in dark mode', async () => {
    document.documentElement.classList.add('dark');
    const { container } = render(<App />);

    const results = await axe.run(container, {
      rules: {
        'color-contrast': { enabled: false },
      },
    });

    const severeViolations = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );
    expect(severeViolations).toEqual([]);
    document.documentElement.classList.remove('dark');
  });

  it('verifies 0 critical or serious axe violations when project modal is open', async () => {
    document.documentElement.classList.remove('dark');
    const { container } = render(<App />);

    const detailButton = screen.getByTestId('btn-details-portfolio-hub');
    fireEvent.click(detailButton);
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    const results = await axe.run(container, {
      rules: {
        'color-contrast': { enabled: false },
      },
    });

    const severeViolations = results.violations.filter(
      (v) => v.impact === 'critical' || v.impact === 'serious'
    );
    expect(severeViolations).toEqual([]);
  });

  it('validates modal accessibility dialog contracts and flags pending M3 attributes', () => {
    render(<App />);
    const detailButton = screen.getByTestId('btn-details-portfolio-hub');
    fireEvent.click(detailButton);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-project-title');
  });

  it('verifies 0 axe violations across all interactive terminal tabs', async () => {
    const { container } = render(<App />);

    const tabNames = [
      /novafy_audio_glsl\.ts/i,
      /valgrind_memcheck\.c/i,
      /fetch_projects\.py/i,
      /profile\.json/i,
    ];

    for (const name of tabNames) {
      const tab = screen.getByRole('tab', { name });
      await act(async () => {
        fireEvent.click(tab);
        await new Promise((resolve) => setTimeout(resolve, 200));
      });
      expect(tab).toHaveAttribute('aria-selected', 'true');

      const results = await axe.run(container, {
        rules: {
          'color-contrast': { enabled: false },
        },
      });

      const severeViolations = results.violations.filter(
        (v) => v.impact === 'critical' || v.impact === 'serious'
      );
      expect(severeViolations).toEqual([]);
    }
  });

  it('supports keyboard navigation (ArrowRight, ArrowLeft, Home, End) across terminal tablist', () => {
    render(<App />);

    const webglTab = screen.getByRole('tab', { name: /novafy_audio_glsl\.ts/i });
    const cTab = screen.getByRole('tab', { name: /valgrind_memcheck\.c/i });
    const pyTab = screen.getByRole('tab', { name: /fetch_projects\.py/i });
    const profileTab = screen.getByRole('tab', { name: /profile\.json/i });

    expect(webglTab).toHaveAttribute('aria-selected', 'true');

    // ArrowRight moves from webgl to cTab
    fireEvent.keyDown(webglTab, { key: 'ArrowRight', code: 'ArrowRight' });
    expect(cTab).toHaveAttribute('aria-selected', 'true');

    // ArrowRight moves from cTab to pyTab
    fireEvent.keyDown(cTab, { key: 'ArrowRight', code: 'ArrowRight' });
    expect(pyTab).toHaveAttribute('aria-selected', 'true');

    // ArrowLeft moves back to cTab
    fireEvent.keyDown(pyTab, { key: 'ArrowLeft', code: 'ArrowLeft' });
    expect(cTab).toHaveAttribute('aria-selected', 'true');

    // End key moves to last tab (profileTab)
    fireEvent.keyDown(cTab, { key: 'End', code: 'End' });
    expect(profileTab).toHaveAttribute('aria-selected', 'true');

    // Home key moves to first tab (webglTab)
    fireEvent.keyDown(profileTab, { key: 'Home', code: 'Home' });
    expect(webglTab).toHaveAttribute('aria-selected', 'true');
  });
});

describe('Milestone 2 A11y Semantics & Motion Controls', () => {
  it('renders skip link targeting #proyectos with accessible hidden/focus classes', () => {
    render(<App />);
    const skipLink = screen.getByRole('link', { name: /saltar al contenido principal/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#proyectos');
    expect(skipLink).toHaveClass('sr-only');
  });

  it('renders search input with explicit accessible label and aria-label', () => {
    render(<App />);
    const searchInput = screen.getByRole('textbox', {
      name: /buscar proyectos/i,
    });
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('id', 'project-search');
    expect(screen.getByLabelText(/buscar proyectos/i)).toBe(searchInput);
  });

  it('toggles aria-pressed on category filter buttons', () => {
    render(<App />);
    const allButton = screen.getByRole('button', { name: /todos/i });
    expect(allButton).toHaveAttribute('aria-pressed', 'true');
  });

  it('manages aria-expanded and dynamic aria-label on mobile menu button', () => {
    render(<App />);
    const menuBtn = screen.getByLabelText(/abrir menú de navegación/i);
    expect(menuBtn).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(menuBtn);
    expect(screen.getByLabelText(/cerrar menú de navegación/i)).toBeInTheDocument();
    expect(menuBtn).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(menuBtn);
    expect(screen.getByLabelText(/abrir menú de navegación/i)).toBeInTheDocument();
    expect(menuBtn).toHaveAttribute('aria-expanded', 'false');
  });

  it('contains semantic #contacto section with accessible heading label', () => {
    render(<App />);
    const contactSection = document.getElementById('contacto');
    expect(contactSection).toBeInTheDocument();
    expect(contactSection?.tagName.toLowerCase()).toBe('section');
    expect(contactSection).toHaveAttribute('aria-labelledby', 'contacto-heading');
  });

  it('configures BackgroundAmbient with motion-reduce:animate-none classes', () => {
    const { container } = render(<App />);
    const orbs = container.querySelectorAll('.motion-reduce\\:animate-none');
    expect(orbs.length).toBe(4);
  });
});
