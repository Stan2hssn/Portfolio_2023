const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-manrope)", ...fontFamily.sans],
      title: ["var(--font-zighead)", ...fontFamily.sans],
    },

    extend: {
      fontSize: {
        h1: [
          "10.25rem",
          {
            lineHeight: "10.7rem",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        h2: [
          "6rem",
          {
            lineHeight: "6.25rem",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        h3: [
          "1.5rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.03em",
            fontWeight: "400",
          },
        ],
        cta: [
          "1rem",
          {
            lineHeight: "1.3rem",
            letterSpacing: "0.03em",
            fontWeight: "300",
          },
        ],
        body: [
          "1rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.03em",
            fontWeight: "300",
            textTransform: "uppercase", //Ici text uppercase
          },
        ],
        cta: [
          "1rem",
          {
            lineHeight: "1.3rem",
            letterSpacing: "0.03em",
            fontWeight: "300",
          },
        ],
        cta: [
          "1rem",
          {
            lineHeight: "1.3rem",
            letterSpacing: "0.03em",
            fontWeight: "300",
          },
        ],
        cta: [
          "1rem",
          {
            lineHeight: "1.3rem",
            letterSpacing: "0.03em",
            fontWeight: "300",
          },
        ],
      },
    },
  },
  plugins: [],
};
