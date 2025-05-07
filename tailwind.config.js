/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "links-animation": {
          "0%": { transform: "translateY(7px)" },
          "100%": { transform: "translateY(3px)" },
        },
      },
      animation: {
        "links-animation": "links-animation 0.2s alternate 4",
      },
      colors: {
        firstBgColor: "var(--firstBgColor)",
        secondBgColor: "var(--secondBgColor)",
        identityColor: "var(--identityColor)",
        mainColor: "var(--mainColor)",
        grayColor: "var(--grayColor)",
      },
    },
  },
  plugins: [],
};
