/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // make sure Tailwind scans your React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}