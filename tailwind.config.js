/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfaf3',
          100: '#faf5e6',
          200: '#f3e6c0',
          300: '#ebd699',
          400: '#e4c673',
          500: '#d4af37', // Dorado oro principal
          600: '#b8941f',
          700: '#9c7916',
          800: '#805e0e',
          900: '#644306',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
