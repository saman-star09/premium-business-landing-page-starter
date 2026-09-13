/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Central brand palette — swap these values to re-theme the entire
        // site for a new client. Every component references `brand` /
        // `accent` / `ink` instead of hardcoded Tailwind colors.
        // Currently set to a warm, neutral beige/caramel theme (no purple).
        brand: {
          50: '#fbf7f1',
          100: '#f5ecdd',
          200: '#e9d4b3',
          300: '#dbb884',
          400: '#cc9c5c',
          500: '#b8823f',
          600: '#9c6934',
          700: '#7d532c',
          800: '#664429',
          900: '#553a25',
          950: '#2f1e13',
        },
        accent: {
          50: '#fbf8f2',
          100: '#f4ebd8',
          200: '#e7d3a9',
          300: '#d7b374',
          400: '#c8974f',
          500: '#ba8038',
          600: '#9d672d',
          700: '#7e5127',
          800: '#664224',
          900: '#553820',
          950: '#2e1c10',
        },
        ink: {
          50: '#faf9f7',
          100: '#f2efe9',
          200: '#e4ded2',
          300: '#d0c6b3',
          400: '#a99d87',
          500: '#83786a',
          600: '#655c50',
          700: '#4f473e',
          800: '#362f28',
          900: '#241f1a',
          950: '#14110d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out both',
        'fade-in-up': 'fade-in-up 0.7s ease-out both',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
