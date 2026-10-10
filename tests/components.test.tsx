import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { App } from '../src/App';

describe('Interactive Portfolio UI (Pure Visualization)', () => {
  beforeEach(() => {
    // Mock matchMedia
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

  it('renders Leandro profile and flagship portfolio project', () => {
    render(<App />);
    expect(screen.getByText(/Hola, soy/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Leandro/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Portfolio Interactivo & Motor de Proyectos/i)).toBeInTheDocument();
  });

  it('is strictly a visualization portfolio with no public add project buttons', () => {
    render(<App />);
    expect(screen.queryByText(/\+ Agregar Proyecto/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/¿Cómo sumar futuros proyectos\?/i)).not.toBeInTheDocument();
  });

  it('allows live filtering by search query', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Buscar por tecnología, lenguaje o nombre/i);

    // Type "Python"
    fireEvent.change(searchInput, { target: { value: 'Python' } });

    // Should display Python projects
    expect(screen.getByText(/Sistema de Gestión de Depósito e Inventario/i)).toBeInTheDocument();

    // Type non-existent query
    fireEvent.change(searchInput, { target: { value: 'NonExistentFramework999' } });
    expect(screen.getByText(/No se encontraron proyectos con ese criterio/i)).toBeInTheDocument();
  });

  it('opens and closes project details modal', () => {
    render(<App />);
    const detailButton = screen.getByTestId('btn-details-portfolio-hub');
    fireEvent.click(detailButton);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/Aspectos Destacados & Arquitectura/i)).toBeInTheDocument();

    // Close modal
    const closeButton = screen.getByRole('button', { name: /Cerrar modal/i });
    fireEvent.click(closeButton);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders ambient background and status indicator', () => {
    const { container } = render(<App />);
    const ambientBg = container.querySelector('[aria-hidden="true"]');
    expect(ambientBg).toBeInTheDocument();
    expect(screen.getByText(/Desarrollador de Software/i)).toBeInTheDocument();
  });
});
