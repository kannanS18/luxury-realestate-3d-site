/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        realty: {
          bg: '#101114',
          surface: '#181A1F',
          'surface-hover': '#23262D',
          primary: '#C9A96E',
          'primary-hover': '#DFC38B',
          secondary: '#10B981',
          accent: '#E5C583',
          border: 'rgba(201, 169, 110, 0.25)',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Lato', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      }
    }
  },
  plugins: [],
};