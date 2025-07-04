/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f7f5',
          100: '#e1ece6',
          200: '#c3d8cd',
          300: '#a6c3b4',
          400: '#89af9b',
          500: '#759c8a',
          600: '#5c7c6d',
          700: '#445d51',
          800: '#2c3d35',
          900: '#1a241f',
        },
      },
    },
  },
  plugins: [],
};
