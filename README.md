# Leandro (@leann027) - Portfolio de Software

Plataforma web interactiva desarrollada con **React**, **TypeScript**, **Tailwind CSS** y **Vite**, con una estética **lo-fi pastel**, modo oscuro/claro y despliegue continuo (**CI/CD**) mediante **GitHub Actions** en **GitHub Pages**.

---

## 🌟 Proyecto Insignia

Este portfolio constituye mi **primer gran proyecto insignia**: una plataforma interactiva diseñada para catalogar, explorar y exhibir mis desarrollos de software (sistemas de escritorio en Python, algoritmos y estructuras de datos en C, aplicaciones web y automatizaciones).

### Características Principales

- 🎨 **Estética Lo-Fi Pastel**: Diseño cálido, moderno y visualmente acogedor con paleta de tonos pastel y soporte completo de tema claro y oscuro con persistencia.
- ⚡ **Filtrado Reactivo en Tiempo Real**: Búsqueda instantánea y filtros dinámicos por categorías (Web, Escritorio, Algoritmos, Automatización) y tecnologías.
- 📑 **Modales de Especificación Técnica**: Fichas detalladas con arquitectura, aspectos destacados, tecnologías y enlaces al repositorio y demo.
- 📱 **Diseño 100% Responsivo**: Mobile-first optimizado con Tailwind CSS.
- 🚀 **Despliegue Continuo (CI/CD)**: Pipeline con GitHub Actions que valida datos, ejecuta pruebas unitarias y compila a GitHub Pages con cada `push` tanto en la rama `main` como en `master`.

---

## 🛠️ Stack Tecnológico

- **Frontend**: React 18, TypeScript, Tailwind CSS, Lucide Icons, Vite
- **Testing**: Vitest, React Testing Library, Python Unittest
- **Pipeline de Datos**: Python 3.12 (normalización y enriquecimiento de metadatos)
- **CI/CD & Hosting**: GitHub Actions, GitHub Pages

---

## 📁 Estructura del Proyecto

```
Portfolio/
├── data/                     # Configuración central y metadatos de proyectos
│   └── projects_config.json
├── execution/                # Script de normalización e ingesta de datos
│   └── fetch_projects.py
├── src/                      # Código fuente de la aplicación React
│   ├── components/           # Componentes UI (Navbar, Hero, Cards, Modals, Skills)
│   ├── data/                 # Dataset normalizado (projects.json)
│   ├── types/                # Interfaces y contratos TypeScript
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tests/                    # Suites de pruebas automatizadas
│   ├── test_projects_data.py # Pruebas de esquema e integridad de datos
│   └── components.test.tsx   # Pruebas de integración UI (Vitest)
└── .github/workflows/        # Automatización de testing y despliegue
    └── deploy.yml
```

---

## 🚀 Cómo Ejecutar en Local

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/leann027/Portfolio.git
   cd Portfolio
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## 🧪 Pruebas Automatizadas

1. **Validación de Datos (Python)**:

   ```bash
   npm run data:test
   ```

2. **Pruebas de Componentes UI (Vitest)**:

   ```bash
   npm test
   ```

3. **Compilación de Producción**:
   ```bash
   npm run build
   ```

---

## 📬 Contacto

- **Desarrollador**: Leandro ([@leann027](https://github.com/leann027))
- **Email**: `leandro28rc@gmail.com`
- **Ubicación**: Rosario, Argentina
