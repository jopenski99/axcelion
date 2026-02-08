/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2DD4BF",
        "background-dark": "#0A0C10",
        "surface-dark": "#12171D",
        "border-dark": "#1E293B",
      },
      fontFamily: {
        "mono": ["JetBrains Mono", "monospace"],
        "sans": ["Plus Jakarta Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}
