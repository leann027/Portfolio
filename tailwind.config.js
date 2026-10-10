/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta Neutra Terrosa / Lino (Extraída de la Imagen 1)
        earth: {
          light: '#F5F5EB',   // Off-white eggshell
          linen: '#EFE7DA',   // Warm oatmeal
          sand: '#E1DACA',    // Soft sand stone
          taupe: '#C1B6A3',   // Muted warm taupe
          mocha: '#B3907A',   // Warm terracotta / caramel mocha accent
          darkMocha: '#8A6750',
          coffeeBg: '#181519',// Dark mode nocturnal warm background
          coffeeCard: '#231F25',
          coffeeBorder: '#342F38',
          coffeeSubtle: '#2B262E',
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
        'soft': '0 4px 20px -2px rgba(179, 144, 122, 0.10)',
        'soft-hover': '0 12px 28px -4px rgba(179, 144, 122, 0.20)',
        'soft-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.45)',
        'soft-dark-hover': '0 12px 28px -4px rgba(0, 0, 0, 0.65)',
        'glow-mocha': '0 0 25px -4px rgba(179, 144, 122, 0.35)',
        'glow-lavender': '0 0 25px -4px rgba(195, 162, 226, 0.35)',
      },
      animation: {
        'fade-up': 'fadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}
