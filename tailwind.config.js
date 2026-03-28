/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CCFF00", // Optic Yellow for tennis brand
        surface: "#111111", // Dark surface color
      }
    }
  },
  plugins: []
}