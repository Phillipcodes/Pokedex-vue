/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Haupt-HTML-Datei
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Alle Dateien im src-Ordner, die Tailwind-Klassen enthalten können
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}