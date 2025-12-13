/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          500: '#a0522d',
          700: '#8b3e2f',
        },
      },
    },
  },
  plugins: [],
}
