---
name: Leandro Software Portfolio
description: Catálogo interactivo de ingeniería de software con estética cálida de cuaderno técnico en papel lino y acentos pastel curados.
colors:
  primary: '#826049'
  primary-soft: '#A8826B'
  secondary-lavender: '#C3A2E2'
  secondary-lavender-ink: '#5B3782'
  secondary-lavender-bg: '#F5EFFB'
  secondary-lavender-border: '#D8BFD8'
  secondary-lavender-dark: '#D9C2F0'
  tertiary-mint: '#136760'
  tertiary-mint-fill: '#72E0D5'
  tertiary-mint-bg: '#EAF8F7'
  tertiary-mint-border: '#A5E9E3'
  tertiary-mint-dark: '#86EFE6'
  tertiary-peach: '#8C3D18'
  tertiary-peach-fill: '#F4A582'
  tertiary-peach-bg: '#FDF4ED'
  tertiary-peach-border: '#F7C59F'
  tertiary-peach-dark: '#FBC4AA'
  tertiary-lemon: '#3D5C1E'
  tertiary-lemon-fill: '#C5E1A5'
  tertiary-lemon-bg: '#F5F9EE'
  tertiary-lemon-border: '#D9ECBF'
  tertiary-lemon-dark: '#D6EBB8'
  swatch-sky-bg: '#EEF7FC'
  swatch-sky-border: '#BFE0F2'
  swatch-sky-fill: '#A7D8F0'
  swatch-sky-ink: '#195B82'
  swatch-sky-dark: '#BFE4F6'
  swatch-butter-bg: '#FEFAED'
  swatch-butter-border: '#F6EABA'
  swatch-butter-fill: '#F3E5AB'
  swatch-butter-ink: '#7A6115'
  swatch-butter-dark: '#F7ECC0'
  swatch-rose-bg: '#FDF1F2'
  swatch-rose-border: '#F7B7BB'
  swatch-rose-fill: '#FFA69E'
  swatch-rose-ink: '#942E35'
  swatch-rose-dark: '#FFBEB8'
  neutral-canvas: '#F6F3EB'
  neutral-surface: '#ECE5D8'
  neutral-border: '#DFD6C5'
  neutral-taupe: '#BCB19D'
  neutral-ink-900: '#1A1716'
  neutral-ink-800: '#2D2826'
  neutral-ink-700: '#463F3C'
  neutral-ink-600: '#655C58'
  neutral-ink-500: '#8A807B'
  neutral-ink-400: '#ADA49E'
  dark-canvas: '#181519'
  dark-surface: '#221E25'
  dark-border: '#352E39'
  dark-subtle: '#2A252E'
typography:
  display:
    fontFamily: 'Plus Jakarta Sans, Inter, system-ui, sans-serif'
    fontSize: 'clamp(2.25rem, 5vw, 3.75rem)'
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: '-0.025em'
  headline:
    fontFamily: 'Plus Jakarta Sans, Inter, system-ui, sans-serif'
    fontSize: '1.875rem'
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: '-0.02em'
  title:
    fontFamily: 'Plus Jakarta Sans, Inter, system-ui, sans-serif'
    fontSize: '1.25rem'
    fontWeight: 700
    lineHeight: 1.35
  body:
    fontFamily: 'Plus Jakarta Sans, Inter, system-ui, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: 'JetBrains Mono, monospace'
    fontSize: '0.75rem'
    fontWeight: 600
    lineHeight: 1.4
rounded:
  md: '12px'
  lg: '16px'
  xl: '24px'
  full: '9999px'
spacing:
  xs: '6px'
  sm: '12px'
  md: '16px'
  lg: '24px'
  xl: '32px'
  section: '96px'
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '#FFFFFF'
    rounded: '{rounded.lg}'
    padding: '12px 24px'
  button-secondary:
    backgroundColor: '{colors.neutral-surface}'
    textColor: '{colors.neutral-ink-800}'
    rounded: '{rounded.lg}'
    padding: '12px 24px'
  card-project:
    backgroundColor: '{colors.neutral-surface}'
    textColor: '{colors.neutral-ink-800}'
    rounded: '{rounded.lg}'
    padding: '28px'
---

# Design System: Leandro Software Portfolio

## Overview

**Creative North Star: "El Cuaderno de Ingeniería en Papel Lino"**

El sistema visual combina la calidez táctil de un cuaderno de trabajo en papel lino mate con la precisión estructural de diagramas de arquitectura de software. En lugar de recurrir al frío negro sobre blanco o a los clichés neón de portafolios genéricos de desarrolladores, la interfaz recibe a reclutadores y líderes técnicos en un entorno sereno de tonos tierra (`earth`) donde los esquemas de memoria en C, flujos orientados a objetos en Python y pipelines CI/CD son los protagonistas.

La densidad está calibrada para una lectura ejecutiva rápida: el proyecto insignia (`FlagshipProject`) lidera la jerarquía con un diagrama arquitectónico a doble columna, seguido de controles de filtrado anclados y una cuadrícula de tarjetas técnicas con esquemas vectoriales dedicados. El modo oscuro traslada esta misma calidez hacia una paleta de café tostado nocturno (`coffeeBg` / `coffeeCard`), preservando el descanso visual y un contraste riguroso WCAG AA.

**Key Characteristics:**

- Superficies mate en tonos lino, avena y arena (`#F6F3EB`, `#ECE5D8`, `#DFD6C5`) en modo claro, y espresso nocturno (`#181519`, `#221E25`) en modo oscuro.
- Clasificación semántica por dominio técnico mediante pasteles curados de alto contraste (`swatch-lavender`, `swatch-mint`, `swatch-peach`, `swatch-lemon`, `swatch-sky`, `swatch-rose`).
- Esquemas técnicos renderizados en código (`ProjectVisual`) con notación monoespaciada (`JetBrains Mono`) para direcciones de memoria, complejidades Big-O y nodos de automatización.
- Interacción táctil con objetivos mínimos de 44×44px, respuesta física sutil (`.btn-tactile`, `.card-lift`) y respeto estricto por `prefers-reduced-motion`.

## Colors

La paleta equilibra una base neutra terrosa de baja fatiga ocular con acentos pastel semánticos cuyos textos están oscurecidos (modo claro) o aclarados (modo oscuro) para superar siempre el umbral WCAG AA de 4.5:1.

### Primary

- **Espresso Mocha** (`#826049`): Color de acción primaria en botones principales (`Explorar Proyectos`, `Ver Especificaciones Técnicas`), pastillas de categoría activa, indicador de foco e identidad de marca en modo claro.
- **Warm Caramel Mocha** (`#A8826B`): Acento secundario para subrayados decorativos, bordes en estado hover y sombras cálidas.

### Secondary

- **Curated Lavender** (`#C3A2E2` / tinta clara `#5B3782` / tinta oscura `#D9C2F0`): Acento principal en modo oscuro, insignia del proyecto destacado (`Proyecto Insignia`) y etiquetas del ecosistema React / TypeScript / Vite.

### Tertiary

- **Deep Technical Mint** (`#136760` / tinta oscura `#86EFE6`): Indicadores de estado activo, roles del desarrollador (`Rol del Desarrollador`) y proyectos de bajo nivel en lenguaje C y punteros.
- **Terracotta Peach** (`#8C3D18` / tinta oscura `#FBC4AA`): Categorización del stack Python, POO, Tkinter y generación de reportes.
- **Botanical Lemon** (`#3D5C1E` / tinta oscura `#D6EBB8`): Insignias de formación académica (`Terciario Urquiza`, `Harvard CS50`) y estado de producción.

### Neutral

- **Matte Linen Canvas** (`#F6F3EB`): Fondo principal de página en modo claro.
- **Oatmeal Cream Surface** (`#ECE5D8`): Superficie elevada para tarjetas de proyectos, barra de filtros, tarjetas de habilidades y modal de especificaciones.
- **Warm Sand Border** (`#DFD6C5`): Bordes estructurales de 1px y divisores de sección.
- **Espresso Ink** (`#1A1716`, `#2D2826`, `#655C58`): Escala tipográfica cálida para titulares (`ink-900`), cuerpo principal (`ink-800`) y metadatos secundarios (`ink-600`).
- **Nocturnal Coffee Surfaces** (`#181519`, `#221E25`, `#352E39`): Equivalentes de modo oscuro para lienzo principal, tarjetas y bordes.

### Named Rules

**The Token Purity Rule.** Nunca mezclar utilidades predeterminadas frías de Tailwind (`emerald-*`, `purple-*`) para textos o insignias; toda codificación cromática debe provenir de las escalas `earth` y `swatch` para mantener la temperatura cálida en ambos temas.
**The Dual-Theme Contrast Rule.** Ningún texto o conector esquemático puede usar `earth-darkMocha` (`#826049`) en modo oscuro sin un par explícito `dark:text-swatch-lavender-darkText` o `dark:text-stone-200` que garantice un contraste ≥ 4.5:1.

## Typography

**Display & Body Font:** `Plus Jakarta Sans` (con respaldo `Inter`, `system-ui`, `sans-serif`)  
**Label/Mono Font:** `JetBrains Mono` (con respaldo `monospace`)

**Character:** `Plus Jakarta Sans` aporta geometría limpia y amable para titulares y descripciones extensas, activando características OpenType (`cv02`, `cv03`, `cv04`, `cv11`, `tnum`), mientras que `JetBrains Mono` se reserva exclusivamente para datos técnicos reales: direcciones hexadecimales (`0x7ffee0`), complejidad asintótica (`O(log n)`), rutas y años.

### Hierarchy

- **Display** (`800`, `clamp(2.25rem, 5vw, 3.75rem)`, `line-height: 1.15`, `letter-spacing: -0.025em`): Titular principal del Hero (`Hola, soy Leandro`) con `text-balance`.
- **Headline** (`800`, `1.875rem` / `30px`, `line-height: 1.2`, `letter-spacing: -0.02em`): Encabezados de sección (`Proyectos & Desarrollos`, `Tecnologías & Entornos`, `Sobre Mí`) y título del modal.
- **Title** (`700`, `1.25rem` / `20px`, `line-height: 1.35`): Títulos de tarjetas de proyecto (`ProjectCard`) y bloques de contacto.
- **Body** (`400`–`500`, `0.875rem`–`1rem` / `14px`–`16px`, `line-height: 1.625`): Descripciones de proyectos y biografía técnica, restringidas a `max-w-2xl` (65–75ch).
- **Label / Technical Mono** (`600`, `0.6875rem`–`0.75rem` / `11px`–`12px`, `line-height: 1.4`): Etiquetas de tecnologías, metadatos de esquemas y encabezados en mayúsculas (`tracking-wider`).

### Named Rules

**The Honest Monospace Rule.** `JetBrains Mono` se utiliza únicamente para artefactos de código, notación algorítmica, rutas y marcas temporales; nunca como adorno en párrafos narrativos.

## Layout

El layout se organiza sobre un contenedor centrado de `max-w-6xl` (`1152px`) con padding horizontal fluido (`px-4 sm:px-6 lg:px-8`) y secciones delimitadas por bordes horizontales sutiles (`border-b border-earth-sand/70`) con ritmo vertical amplio (`py-16 sm:py-24`).

- **Estabilidad de Controles (Zero CLS):** En la sección `#proyectos`, la barra `<ProjectFilters />` precede siempre al banner `<FlagshipProject />` y a la cuadrícula de tarjetas, garantizando que el campo de búsqueda y los filtros de categoría nunca se desplacen verticalmente al filtrar.
- **Cuadrícula Adaptativa:** El proyecto insignia ocupa 12 columnas (`lg:col-span-7` para contenido y `lg:col-span-5` para el esquema técnico); el catálogo general fluye de 1 columna en móvil a 2 en tablet (`md:grid-cols-2`) y 3 en escritorio (`lg:grid-cols-3`) con `gap-6` (`24px`).

## Elevation & Depth

El sistema utiliza una estrategia híbrida de **capas tonales cálidas** combinadas con sombras difusas teñidas de tono mocha en modo claro y sombras profundas en modo oscuro.

### Shadow Vocabulary

- **Micro Elevation (`shadow-2xs` / `shadow-xs`)** (`0 1px 2px 0 rgba(168, 130, 107, 0.08)`): Elevación sutil para insignias, píldoras de tecnologías y campos de búsqueda en reposo.
- **Ambient Card (`shadow-soft`)** (`0 4px 20px -2px rgba(168, 130, 107, 0.08)`): Sombra base para tarjetas de proyecto y botones primarios.
- **Interactive Lift (`shadow-soft-hover` / `shadow-rim-card-hover`)** (`0 0 0 1.5px rgba(195, 162, 226, 0.5), 0 16px 32px -6px rgba(195, 162, 226, 0.2)`): Respuesta de elevación al pasar el cursor sobre tarjetas interactivas.

### Named Rules

**The Tinted Shadow Rule.** En modo claro, las sombras nunca usan gris/negro puro; se tiñen con `rgba(168, 130, 107, ...)` para integrarse orgánicamente con el fondo de papel lino.

## Shapes

El lenguaje formal emplea esquinas generosamente redondeadas que refuerzan la sensación táctil y acogedora sin perder estructura:

- **Contenedores y Tarjetas (`rounded-2xl` / `16px`):** Aplicado a `ProjectCard`, `FlagshipProject`, `ProjectModal`, tarjetas de habilidades y diagramas `ProjectVisual`.
- **Botones y Controles (`rounded-xl` a `rounded-2xl` / `12px`–`16px`):** Botones de acción primaria, buscador y enlaces de contacto.
- **Insignias de Estado (`rounded-full` / `9999px`):** Píldoras semánticas de rol, estado e institución académica.

## Components

### Buttons (`.btn-tactile`)

- **Shape:** Esquinas redondeadas (`12px`–`16px`) con área interactiva mínima garantizada de `44×44px` (`min-h-11`).
- **Primary:** Fondo `#826049` (`earth-darkMocha`), texto blanco seminegrita (`12px`–`14px`), padding `12px 24px` y sombra `shadow-soft`.
- **Hover / Focus:** Desplazamiento vertical `-2px` (`hover:-translate-y-0.5`), compresión táctil `scale(0.98)` al hacer clic y anillo `:focus-visible` de 2px con offset de 2px (con respaldo `outline` nativo para `forced-colors: active`).
- **Secondary / Icon:** Fondo `#ECE5D8` (`earth-linen`) o `#221E25` (`earth-coffeeCard`) con borde `#DFD6C5` (`earth-sand`).

### Chips & Category Filters

- **Style:** Píldoras interactivas (`min-h-11 px-4 py-2.5 rounded-2xl`) con contador numérico integrado en cápsula interior.
- **State:** Comunica selección mediante `aria-pressed="true"`, cambiando a fondo `#826049` y texto blanco.

### Cards (`ProjectCard` & `FlagshipProject`)

- **Corner Style:** Radio de `16px` (`rounded-2xl`).
- **Background:** `#ECE5D8` al 85–95% en modo claro; `#221E25` al 90–95% en modo oscuro.
- **Shadow Strategy:** `shadow-soft` en reposo, transicionando a `shadow-rim-card-hover` con elevación `-4px` en hover.
- **Internal Padding:** `24px` a `28px` (`p-6 sm:p-7`).

### Technical Schematics (`ProjectVisual`)

- **Purpose:** Componente de firma que reemplaza capturas genéricas por un diagrama arquitectónico en código específico para cada proyecto (`portfolio-hub`, `proyges-software-2`, `estructuras-datos-c`, `cs50-harvard`, `n8n-automation`), etiquetado semánticamente con `role="img"` y `aria-label`.

### Accessible Modal (`ProjectModal`)

- **Structure:** Barra superior dedicada que separa las insignias de estado y el botón de cierre (`44×44px`) de la vista previa `ProjectVisual`, con trampa de foco, cierre con `Escape`, restauración de foco al botón disparador y jerarquía estricta `<h2>` → `<h3>`.

## Do's and Don'ts

### Do:

- **Do** mantener todos los controles interactivos (botones de icono, filtros, enlaces de tarjeta, cierre de modal) con un área mínima de `44×44px` (`min-h-11 min-w-11` o `min-h-11`).
- **Do** proporcionar `aria-label` descriptivos con el nombre del proyecto en los enlaces de iconos de cada tarjeta (`Ver código en GitHub de ...`, `Ver demo en vivo de ...`).
- **Do** mantener `<ProjectFilters />` por encima de `<FlagshipProject />` para evitar desplazamientos de layout (CLS) durante la búsqueda o filtrado.
- **Do** preservar las transiciones no vestibulares de color y opacidad (`120ms`) bajo `@media (prefers-reduced-motion: reduce)` mientras se desactivan todas las animaciones espaciales e infinitas.

### Don't:

- **Don't** exponer enlaces a repositorios en tarjetas o modales cuando `project.isPrivate` sea `true`.
- **Don't** añadir etiquetas tipo _kicker_ o _eyebrow_ decorativas por encima de los encabezados de sección `<h2>`.
- **Don't** usar `transition-all` ni mantener `will-change-transform` permanente en elementos decorativos en reposo.
- **Don't** usar `title` como único mecanismo de nombre accesible en controles o enlaces de solo icono.
