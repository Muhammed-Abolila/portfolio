/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",              
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        firstBgColor:"var(--firstBgColor)",
        secondBgColor:"var(--secondBgColor)",
        identityColor:"var(--identityColor)",
        mainColor:"var(--mainColor)",
        grayColor:"var(--grayColor)",
      }
    },
  },
  plugins: [],
}