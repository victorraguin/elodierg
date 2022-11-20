/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Valky: ["Valky", "sans-serif"],
        Ambit: ["Ambit", "sans-serif"],
      },
    },
  },
  plugins: [],
}