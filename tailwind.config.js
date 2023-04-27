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
          "1rem",
          {
            lineHeight: "1.5rem",
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
          grey_200: "#EEEEEE",
          grey_800: "#1A1A1A",
          grey_900: "#1F1F1F",
        },
        background: {
          light: "F2F2F2",
          noise_1: "url('/public/images/textures/noise1.png')",
          noise_2: "url('/public/images/textures/noise2.png')",
          noise_3: "url('/public/images/textures/noise3.png')",
          noise_4: "url('/public/images/textures/noise4.png')",
        },
      },
      animation: {
        spinSlow1: "spin1 2s linear infinite",
        spinSlow2: "spin2 2s linear infinite",
        spinSlow3: "spin3 2s linear infinite",
        spinSlow4: "spin4 2s linear infinite",
        noiseAnimation: "noiseAnimation 800ms linear infinite",
      },
      keyframes: {
        spin1: {
          "0%": { transform: "rotate(340deg)" },
          "100%": { transform: "rotate(-20deg)" },
        },
        spin2: {
          "0%": { transform: "rotate(-350deg)" },
          "100%": { transform: "rotate(10deg)" },
        },
        spin3: {
          "0%": { transform: "rotate(-20deg)" },
          "100%": { transform: "rotate(340deg)" },
        },
        spin4: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        noiseAnimation: {
          "0%": {
            "background-origin": "center",
            "background-size": "cover",
            "background-image": "url(/public/images/textures/noise1.png')",
          },
          "25%": {
            "background-origin": "center",
            "background-size": "cover",
            "background-image": "url(/public/images/textures/noise1.png')",
          },
          "26%": {
            "background-origin": "center",
            "background-size": "cover",
            "background-image": "url(/public/images/textures/noise2.png')",
          },
          "50%": {
            "background-origin": "center",
            "background-size": "cover",
            "background-image": "url(/public/images/textures/noise2.png')",
          },
          "51%": {
            "background-origin": "center",
            "background-size": "cover",
            "background-image": "url(/public/images/textures/noise3.png')",
          },
          "75%": {
            "background-origin": "center",
            "background-size": "cover",
            "background-image": "url(/public/images/textures/noise3.png')",
          },
          "76%": {
            "background-origin": "center",
            "background-size": "cover",
            "background-image": "url(/public/images/textures/noise4.png')",
          },
          "99%": {
            "background-origin": "center",
            "background-size": "cover",
            "background-image": "url(/public/images/textures/noise4.png')",
          },
          "100%": {
            "background-origin": "center",
            "background-size": "cover",
            "background-image": "url(/public/images/textures/noise1.png')",
          },
        },
      },
    },
  },
};
