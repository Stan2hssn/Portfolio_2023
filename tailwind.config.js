const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
      title: ["var(--font-title)", ...fontFamily.sans],
    },

    extend: {
      fontSize: {
        h1: [
          "10.25rem",
          {
            lineHeight: "10.7rem",
            letterSpacing: "0.02em",
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
          },
        ],
        nav: [
          ".9rem",
          {
            lineHeight: ".9rem",
            letterSpacing: "0.03em",
            fontWeight: "600",
          },
        ],
        separator: [
          "1.25rem",
          {
            lineHeight: "1.7rem",
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
        description_sm: [
          "0.8rem",
          {
            lineHeight: "1.1rem",
            letterSpacing: "0.03em",
            fontWeight: "700",
          },
        ],
        description_lg: [
          "1.25rem",
          {
            lineHeight: "1.6rem",
            letterSpacing: "0.03em",
            fontWeight: "700",
          },
        ],
        detail: [
          "0.6rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0.03em",
            fontWeight: "300",
          },
        ],
      },
      colors: {
        content: {
          grey_100: "#F2F2F2",
          grey_800: "#1A1A1A",
          grey_900: "#1F1F1F",
        },
        background: {
          light: "F2F2F2",
        },
      },
    },
  },
};
