/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['var(--font-montserrat)'],
        Poppins: ['var(--font-poppins)'],
        Prata: ['var(--font-prata)'],
      }
    },
  },
  plugins: [],
};
