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
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1920px",
        // => @media (min-width: 1920px) { ... }
        "4xl": "2560px",
        // => @media (min-width: 2560px) { ... }
      },
      colors: {
        secondary: {
          DEFAULT: "#58623D",
        },
      },
    },
    plugins: [],
  },
};
