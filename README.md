# Leandro (@leann027) - Portfolio de Software & Hub de Proyectos

Plataforma web interactiva desarrollada con **React**, **TypeScript**, **Tailwind CSS** y **Vite**, respaldada por una **arquitectura de 3 capas** y un pipeline determinista en **Python** con integración y despliegue continuo (**CI/CD**) mediante **GitHub Actions** en **GitHub Pages**.

---

## 🌟 Proyecto Insignia

Este portfolio constituye mi **primer gran proyecto insignia**: fue concebido no solo como una tarjeta de presentación, sino como un **motor extensible de proyectos** capaz de catalogar, enriquecer con datos de GitHub y presentar futuros desarrollos de software de forma completamente automatizada.

### Características Principales
- ⚡ **Filtrado Reactivo en Tiempo Real**: Filtrado instantáneo por tecnologías, lenguajes (Python, C, TypeScript, SQL, etc.) y categorías.
- 🔍 **Búsqueda en Vivo**: Búsqueda por palabras clave con resultados instantáneos.
- 📑 **Modales de Especificación Técnica**: Detalle de arquitectura, aprendizajes y enlaces a repositorios / demos en vivo.
- 🌓 **Soporte de Tema Oscuro / Claro**: Detección automática y persistencia con `localStorage`.
- 📱 **Diseño Mobile-First**: 100% responsivo y optimizado con Tailwind CSS.
- 🚀 **Despliegue Continuo (CI/CD)**: Pipeline con GitHub Actions que valida datos, ejecuta pruebas unitarias y compila a GitHub Pages con cada `push`.

---

## 🏛️ Arquitectura de 3 Capas (`Agents.md`)

El repositorio sigue estrictamente los principios de ingeniería definidos en [`Agents.md`](Agents.md):

```
Portfolio/
├── directives/               # Layer 1: SOPs y especificaciones operativas (Markdown)
│   └── portfolio_pipeline.md
├── execution/                # Layer 3: Scripts deterministas de procesamiento
│   └── fetch_projects.py     # Script Python para sincronización e ingesta de datos
├── data/                     # Configuración y metadatos curados de proyectos
│   └── projects_config.json
├── src/                      # Layer 3: Aplicación Frontend interactiva
│   ├── components/           # Componentes UI (Navbar, Hero, Cards, Modals, Skills)
│   ├── data/                 # Dataset normalizado (projects.json)
│   ├── types/                # Contratos e interfaces estrictas de TypeScript
│   ├── App.tsx
│   └── main.tsx
├── tests/                    # Suites de pruebas automatizadas
│   ├── test_projects_data.py # Pruebas unitarias de esquema y contratos (Python)
│   └── components.test.tsx   # Pruebas de integración y componentes UI (Vitest)
└── .github/workflows/        # Pipeline de CI/CD para GitHub Pages
    └── deploy.yml
```

---

## 🚀 Cómo Ejecutar en Local

### Prerrequisitos
- Node.js (v18+)
- Python (v3.10+)

### Pasos
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/leann027/Portfolio.git
   cd Portfolio
   ```

2. Instalar dependencias de frontend:
   ```bash
   npm install
   ```

3. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## 🧪 Pruebas Automatizadas

El proyecto cuenta con doble verificación automatizada:

1. **Validación de Datos & Esquema (Python)**:
   ```bash
   npm run data:test
   # o: python3 -m unittest discover tests -v
   ```

2. **Pruebas de Componentes UI (Vitest & Testing Library)**:
   ```bash
   npm test
   ```

3. **Compilación de Producción**:
   ```bash
   npm run build
   ```

---

## ➕ Cómo Incorporar Futuros Proyectos

Gracias al pipeline determinista, agregar un nuevo proyecto toma menos de 1 minuto sin tocar código HTML ni componentes React:

1. Agrega la ficha del proyecto en `data/projects_config.json`:
   ```json
   {
     "id": "mi-nuevo-proyecto",
     "repoName": "MiNuevoProyecto",
     "title": "Nombre del Proyecto",
     "shortDescription": "Resumen conciso...",
     "category": "web",
     "languages": ["Python", "TypeScript"],
     "technologies": ["FastAPI", "React", "PostgreSQL"],
     "githubUrl": "https://github.com/leann027/MiNuevoProyecto",
     "featured": true,
     "highlights": ["Arquitectura modular", "Testing automatizado"]
   }
   ```
2. Ejecuta la sincronización:
   ```bash
   npm run data:fetch
   ```
3. Haz `git commit` y `git push`. GitHub Actions se encargará de ejecutar las pruebas y desplegar la versión actualizada automáticamente.

---

## 📬 Contacto
- **Autor**: Leandro ([@leann027](https://github.com/leann027))
- **Email**: `leandro28rc@gmail.com`
- **Ubicación**: Rosario, Argentina
