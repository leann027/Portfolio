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
    expect(screen.queryByRole('button', { name: /nuevo proyecto/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /eliminar/i })).not.toBeInTheDocument();
  });

  it('allows live filtering by search query and shows empty state on unmatched query', () => {
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

  it('opens and closes project details modal via button click', () => {
    render(<App />);
    const detailButton = screen.getByTestId('btn-details-portfolio-hub');
    fireEvent.click(detailButton);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByText(/Aspectos Destacados & Arquitectura/i)).toBeInTheDocument();

    // Close modal
    const closeButton = screen.getByRole('button', { name: /Cerrar modal/i });
    fireEvent.click(closeButton);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes project details modal on Escape key press (keyboard navigation)', () => {
    render(<App />);
    const detailButton = screen.getByTestId('btn-details-portfolio-hub');
    fireEvent.click(detailButton);

    expect(screen.getByRole('dialog')).toBeInTheDocument();

    // Fire Escape keydown on window
    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('suppresses code links for private repositories in project cards and displays private indicator', () => {
    render(<App />);

    // Private project: proyges-software-2
    // Must NOT have a link to https://github.com/leann027/ProyGesSoftware2
    const links = screen.getAllByRole('link');
    const privateRepoLinks = links.filter((link) =>
      link.getAttribute('href')?.includes('ProyGesSoftware2')
    );
    expect(privateRepoLinks.length).toBe(0);

    // Should render private badges
    const privateBadges = screen.getAllByText(/Privado/i);
    expect(privateBadges.length).toBeGreaterThan(0);
  });

  it('suppresses code links for private repositories inside the detail modal', () => {
    render(<App />);
    // Open details for private academic project
    const detailButton = screen.getByTestId('btn-details-proyges-software-2');
    fireEvent.click(detailButton);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getAllByText(/Repositorio.*Privado/i).length).toBeGreaterThan(0);

    // Check that there is no GitHub anchor link for ProyGesSoftware2 inside the dialog
    const modalLinks = screen.getAllByRole('link');
    const privateModalLinks = modalLinks.filter((link) =>
      link.getAttribute('href')?.includes('ProyGesSoftware2')
    );
    expect(privateModalLinks.length).toBe(0);

    // Clean up: close modal
    fireEvent.keyDown(window, { key: 'Escape' });
  });

  it('renders functional GitHub links for public repositories with secure attributes', () => {
    render(<App />);
    const links = screen.getAllByRole('link');
    const portfolioGithubLink = links.find(
      (link) => link.getAttribute('href') === 'https://github.com/leann027/Portfolio'
    );
    expect(portfolioGithubLink).toBeDefined();
    expect(portfolioGithubLink).toHaveAttribute('target', '_blank');
    expect(portfolioGithubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders flagship project showcase with distinctive insignia and recruiter information', () => {
    render(<App />);
    // Flagship project title
    const flagshipTitle = screen.getByText(/Portfolio Interactivo & Motor de Proyectos/i);
    expect(flagshipTitle).toBeInTheDocument();

    // Insignia badge
    const insigniaBadges = screen.getAllByText(/Insignia/i);
    expect(insigniaBadges.length).toBeGreaterThan(0);

    // Action button to view specs
    expect(screen.getByTestId('btn-details-portfolio-hub')).toBeInTheDocument();
  });

  it('renders ambient background and status indicator', () => {
    const { container } = render(<App />);
    const ambientBg = container.querySelector('[aria-hidden="true"]');
    expect(ambientBg).toBeInTheDocument();
    expect(screen.getAllByText(/Desarrollador de Software/i).length).toBeGreaterThan(0);
  });
});
