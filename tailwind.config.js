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
        lofi: {
          bg: '#faf7f2',
          card: '#ffffff',
          border: '#ece6dc',
          subtle: '#f4ede2',
          darkBg: '#16161e',
          darkCard: '#1f1f2c',
          darkBorder: '#2c2c3e',
          darkSubtle: '#262636',
        },
        pastel: {
          matcha: {
            bg: '#edf7ed',
            badge: '#dcfce7',
            border: '#bbf7d0',
            text: '#166534',
            darkText: '#86efac',
          },
          lavender: {
            bg: '#f5f3ff',
            badge: '#ede9fe',
            border: '#ddd6fe',
            text: '#5b21b6',
            darkText: '#c4b5fd',
          },
          peach: {
            bg: '#fff7ed',
            badge: '#ffedd5',
            border: '#fed7aa',
            text: '#9a3412',
            darkText: '#fdba74',
          },
          powder: {
            bg: '#f0f9ff',
            badge: '#e0f2fe',
            border: '#bae6fd',
            text: '#075985',
            darkText: '#7dd3fc',
          },
          rose: {
            bg: '#fdf2f8',
            badge: '#fce7f3',
            border: '#fbcfe8',
            text: '#9d174d',
            darkText: '#f472b6',
          },
          butter: {
            bg: '#fefce8',
            badge: '#fef9c3',
            border: '#fef08a',
            text: '#854d0e',
            darkText: '#fde047',
          },
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'lofi': '0 4px 20px -2px rgba(140, 130, 115, 0.08)',
        'lofi-hover': '0 10px 25px -4px rgba(140, 130, 115, 0.14)',
        'lofi-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.35)',
        'lofi-dark-hover': '0 10px 25px -4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
