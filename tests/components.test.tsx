import { render, screen, fireEvent, within } from '@testing-library/react';
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
    expect(screen.getAllByText(/YourMusicVisualizer/i).length).toBeGreaterThan(0);
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
    const flagshipTitle = screen.getByText(/YourMusicVisualizer/i);
    expect(flagshipTitle).toBeInTheDocument();

    // Insignia badge
    const insigniaBadges = screen.getAllByText(/Insignia/i);
    expect(insigniaBadges.length).toBeGreaterThan(0);

    // Action button to view specs
    expect(screen.getByTestId('btn-details-your-music-visualizer')).toBeInTheDocument();

    // Flagship card elevation micro-interaction
    const flagshipCard = screen.getByTestId('flagship-project-card');
    expect(flagshipCard).toHaveClass('card-lift');
  });

  it('renders ambient background and status indicator', () => {
    const { container } = render(<App />);
    const ambientBg = container.querySelector('[aria-hidden="true"]');
    expect(ambientBg).toBeInTheDocument();
    expect(screen.getAllByText(/Desarrollador de Software/i).length).toBeGreaterThan(0);
  });

  it('removes ArchitectureVisualizer and GitActivityHeatmap from DOM and navigation', () => {
    render(<App />);

    // Assert that the removed sections are not present in the DOM
    expect(screen.queryByText(/Inspección de Arquitectura/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Actividad de Desarrollo/i)).not.toBeInTheDocument();
    expect(document.getElementById('architecture')).toBeNull();
    expect(document.getElementById('actividad')).toBeNull();

    // Assert that no navigation link targets these removed sections
    const links = screen.getAllByRole('link');
    const deadLinks = links.filter((link) => {
      const href = link.getAttribute('href');
      return href === '#architecture' || href === '#actividad';
    });
    expect(deadLinks.length).toBe(0);
  });

  it('restricts live demo links solely to active deployments (your-music-visualizer and portfolio-hub)', () => {
    render(<App />);

    // Live demo links MUST exist for your-music-visualizer
    const yourMusicDemo = screen.getByTestId('demo-link-your-music-visualizer');
    expect(yourMusicDemo).toBeInTheDocument();
    expect(yourMusicDemo).toHaveAttribute('href', 'https://your-music-visualizer.vercel.app');

    // Live demo link MUST exist for portfolio-hub
    const portfolioDemo = screen.getByTestId('demo-link-portfolio-hub');
    expect(portfolioDemo).toBeInTheDocument();
    expect(portfolioDemo).toHaveAttribute('href', 'https://leann027.github.io/Portfolio/');

    // Academic, algorithm, and desktop projects must NOT have live demo links in cards
    const noDemoProjectIds = [
      'algo-notebook',
      'proyges-software-2',
      'estructuras-datos-c',
      'cs50-harvard',
      'n8n-automation',
    ];
    noDemoProjectIds.forEach((id) => {
      expect(screen.queryByTestId(`demo-link-${id}`)).not.toBeInTheDocument();
    });

    // Verify inside modal: modal for project without live demo does NOT render demo button
    const algoDetailBtn = screen.getByTestId('btn-details-algo-notebook');
    fireEvent.click(algoDetailBtn);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.queryByTestId('modal-demo-link')).not.toBeInTheDocument();

    // Close modal
    fireEvent.keyDown(window, { key: 'Escape' });

    // Modal for project with live demo DOES render demo button
    const portfolioDetailBtn = screen.getByTestId('btn-details-portfolio-hub');
    fireEvent.click(portfolioDetailBtn);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    const modalDemoLink = screen.getByTestId('modal-demo-link');
    expect(modalDemoLink).toBeInTheDocument();
    expect(modalDemoLink).toHaveAttribute('href', 'https://leann027.github.io/Portfolio/');
    fireEvent.keyDown(window, { key: 'Escape' });
  });

  it('renders enhanced interactive terminal with modern tabs, command switching and copy feedback', () => {
    render(<App />);

    // Verify tabs exist with engineering content
    const webglTab = screen.getByRole('tab', { name: /novafy_audio_glsl\.ts/i });
    const cTab = screen.getByRole('tab', { name: /valgrind_memcheck\.c/i });
    const pyTab = screen.getByRole('tab', { name: /fetch_projects\.py/i });
    const profileTab = screen.getByRole('tab', { name: /profile\.json/i });

    expect(webglTab).toBeInTheDocument();
    expect(cTab).toBeInTheDocument();
    expect(pyTab).toBeInTheDocument();
    expect(profileTab).toBeInTheDocument();

    // Initial state: WebGL 3D & Audio reactive command and output
    expect(webglTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText(/--audio-reactive/i)).toBeInTheDocument();
    const panel = screen.getByRole('tabpanel');
    expect(within(panel).getByText(/Three\.js/i)).toBeInTheDocument();
    expect(within(panel).getByText(/48,000 Hz/i)).toBeInTheDocument();

    // Click C Memory tab
    fireEvent.click(cTab);
    expect(cTab).toHaveAttribute('aria-selected', 'true');
    expect(within(panel).getByText(/Memcheck, a memory error detector/i)).toBeInTheDocument();
    expect(within(panel).getByText(/malloc\(sizeof\(Node\) \* 1024\)/i)).toBeInTheDocument();
    expect(within(panel).getByText(/All 1,024 heap blocks were freed/i)).toBeInTheDocument();

    // Test Copy command feedback
    const copyButton = screen.getByRole('button', { name: /copiar comando al portapapeles/i });
    expect(copyButton).toBeInTheDocument();
    fireEvent.click(copyButton);
    expect(screen.getByText(/¡Copiado!/i)).toBeInTheDocument();

    // Click quick execution badge for fetch_projects
    const quickPythonBtn = screen.getByRole('button', { name: /▶ fetch_projects/i });
    fireEvent.click(quickPythonBtn);
    expect(pyTab).toHaveAttribute('aria-selected', 'true');
    expect(within(panel).getByText(/projects_config\.json/i)).toBeInTheDocument();

    // Click profile tab
    fireEvent.click(profileTab);
    expect(profileTab).toHaveAttribute('aria-selected', 'true');
    expect(within(panel).getByText(/"rol_objetivo"/i)).toBeInTheDocument();
    expect(
      within(panel).getByText(/"60 FPS GPU · WCAG AA a11y · Vitest 100%"/i)
    ).toBeInTheDocument();

    // Click quick execution badge for novafy
    const quickNovafyBtn = screen.getByRole('button', { name: /▶ novafy/i });
    fireEvent.click(quickNovafyBtn);
    expect(webglTab).toHaveAttribute('aria-selected', 'true');

    // Test re-execution click on already active tab
    fireEvent.click(quickNovafyBtn);
    expect(webglTab).toHaveAttribute('aria-selected', 'true');

    // Verify all quick execution buttons have extensions stripped cleanly
    expect(screen.getByRole('button', { name: /^▶ novafy_audio_glsl$/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^▶ valgrind_memcheck$/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^▶ fetch_projects$/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^▶ profile$/i })).toBeInTheDocument();
  });

  it('resiliently handles rapid project modal switching and preserves tabpanel a11y IDs', () => {
    render(<App />);

    // 1. Verify tabpanel and aria-controls match on InteractiveTerminal
    const tabs = screen.getAllByRole('tab');
    tabs.forEach((tab) => {
      expect(tab).toHaveAttribute('aria-controls', 'terminal-tabpanel');
    });
    const panel = screen.getByRole('tabpanel');
    expect(panel).toHaveAttribute('id', 'terminal-tabpanel');

    // 2. Open first project
    const btn1 = screen.getByTestId('btn-details-portfolio-hub');
    fireEvent.click(btn1);
    const dialog1 = screen.getByRole('dialog');
    expect(dialog1).toBeInTheDocument();
    expect(
      within(dialog1).getByRole('heading', { level: 3, name: /Portfolio Interactivo/i })
    ).toBeInTheDocument();

    // 3. Close with escape
    fireEvent.keyDown(window, { key: 'Escape' });

    // 4. Immediately open second project
    const btn2 = screen.getByTestId('btn-details-algo-notebook');
    fireEvent.click(btn2);
    const dialog2 = screen.getByRole('dialog');
    expect(dialog2).toBeInTheDocument();
    expect(
      within(dialog2).getByRole('heading', { level: 3, name: /AlgoNotebook/i })
    ).toBeInTheDocument();
  });
});
