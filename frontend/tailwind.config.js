/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5f63FF",
      },
      gridTemplateColumns: {  // correction de 'gridtTemplateColumns'
        auto: "repeat(auto-fill, minmax(200px, 1fr))",  // correction de 'lfr' par '1fr'
      },
    },
  },
  plugins: [],
}