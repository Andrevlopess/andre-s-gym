/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", "sans-serif"]
      },
      backgroundImage:{
        'dumbell-banner' : "url(./src/assets/dumbellsBanner.svg)"
      },
      colors: {
        "zinc-901" : "#1A1A1D"
      }
    },
  },
  plugins: [],
}