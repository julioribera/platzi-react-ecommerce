/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Configura 'auto-fit' o 'auto-fill' con 'minmax' para un ancho de columna deseado
        "auto-fit": "repeat(auto-fit, minmax(220px, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(220px, 1fr))",
      },
    },
  },
  plugins: [],
};
