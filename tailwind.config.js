/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // DevKernel Dark & Technical Glass System (Inspirado en Stitch)
        brand: {
          bg: '#090d13',
          surface: '#0e141d',
          surfaceAlt: '#141b26',
          card: '#121924',
          cardHover: '#182232',
          border: '#202a3a',
          borderHover: '#34455f',
          primary: '#58a6ff',
          primaryHover: '#79b8ff',
          primaryGlow: 'rgba(88, 166, 255, 0.15)',
          secondary: '#3fb950',
          secondaryGlow: 'rgba(63, 185, 80, 0.15)',
          purple: '#bc8cff',
          purpleGlow: 'rgba(188, 140, 255, 0.15)',
          amber: '#d29922',
          amberGlow: 'rgba(210, 153, 34, 0.15)',
          rose: '#f85149',
          text: '#f0f6fc',
          textMuted: '#9ba7b6',
          textDim: '#8b96a5',
        },
        // Paleta Neutra Terrosa / Lino con soporte para modo claro & compatibilidad
        earth: {
          light: '#F8FAFC', // Slate 50 limpio para descanso visual
          linen: '#F1F5F9', // Slate 100 suave
          sand: '#E2E8F0', // Slate 200 border
          taupe: '#94A3B8', // Slate 400
          mocha: '#58A6FF', // Dev primary accent
          darkMocha: '#0F172A', // Slate 900
          ink: {
            900: '#0F172A',
            800: '#1E293B',
            700: '#334155',
            600: '#475569',
            500: '#64748B',
            400: '#94A3B8',
          },
          coffeeBg: '#090D13', // DevKernel dark canvas
          coffeeCard: '#121924', // DevKernel card
          coffeeBorder: '#202A3A', // DevKernel border
          coffeeSubtle: '#141B26', // DevKernel subtle surface
        },
        // Acentos Pastel Curados (Extraídos de la Imagen 2)
        swatch: {
          lavender: {
            bg: '#F5EFFB',
            border: '#D8BFD8',
            DEFAULT: '#C3A2E2',
            text: '#5B3782',
            darkText: '#D9C2F0',
          },
          peach: {
            bg: '#FDF4ED',
            border: '#F7C59F',
            DEFAULT: '#F4A582',
            text: '#8C3D18',
            darkText: '#FBC4AA',
          },
          mint: {
            bg: '#EAF8F7',
            border: '#A5E9E3',
            DEFAULT: '#72E0D5',
            text: '#136760',
            darkText: '#86EFE6',
          },
          lemon: {
            bg: '#F5F9EE',
            border: '#D9ECBF',
            DEFAULT: '#C5E1A5',
            text: '#3D5C1E',
            darkText: '#D6EBB8',
          },
          sky: {
            bg: '#EEF7FC',
            border: '#BFE0F2',
            DEFAULT: '#A7D8F0',
            text: '#195B82',
            darkText: '#BFE4F6',
          },
          butter: {
            bg: '#FEFAED',
            border: '#F6EABA',
            DEFAULT: '#F3E5AB',
            text: '#7A6115',
            darkText: '#F7ECC0',
          },
          rose: {
            bg: '#FDF1F2',
            border: '#F7B7BB',
            DEFAULT: '#FFA69E',
            text: '#942E35',
            darkText: '#FFBEB8',
          },
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        '2xs': '0 1px 1px 0 rgba(168, 130, 107, 0.05)',
        xs: '0 1px 2px 0 rgba(168, 130, 107, 0.08)',
        soft: '0 4px 20px -2px rgba(168, 130, 107, 0.08)',
        'soft-hover': '0 12px 28px -4px rgba(168, 130, 107, 0.16)',
        'soft-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.45)',
        'soft-dark-hover': '0 12px 28px -4px rgba(0, 0, 0, 0.65)',
        'glow-mocha': '0 0 25px -4px rgba(168, 130, 107, 0.35)',
        'glow-lavender': '0 0 25px -4px rgba(195, 162, 226, 0.35)',
        'rim-card': '0 0 0 1px rgba(168, 130, 107, 0.15), 0 8px 24px -4px rgba(168, 130, 107, 0.1)',
        'rim-card-hover':
          '0 0 0 1.5px rgba(195, 162, 226, 0.5), 0 16px 32px -6px rgba(195, 162, 226, 0.2)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-slow': 'floatSlow 18s ease-in-out infinite alternate',
        'float-reverse': 'floatReverse 22s ease-in-out infinite alternate',
        'float-drift': 'floatDrift 26s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        floatSlow: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(45px, 35px) scale(1.08)' },
          '100%': { transform: 'translate(-30px, 50px) scale(0.96)' },
        },
        floatReverse: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-40px, -45px) scale(1.06)' },
          '100%': { transform: 'translate(35px, -25px) scale(0.94)' },
        },
        floatDrift: {
          '0%': { transform: 'translate(0px, 0px) scale(0.95)' },
          '50%': { transform: 'translate(30px, -35px) scale(1.05)' },
          '100%': { transform: 'translate(-25px, 20px) scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
