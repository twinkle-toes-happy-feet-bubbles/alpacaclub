/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      colors: {
        primary: "#fcb900", // Yellow
        secondary: "#ff6900", // Orange
        accent1: "#f78da7", // Pink
        accent2: "#cf2e2e", // Red
      },
    },
  },
  plugins: [],
};
