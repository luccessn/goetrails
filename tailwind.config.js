const { heroui } = require("@heroui/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
    },
    screens: {
      ssm: "480px",
      smm: "600px",
      sm: "740px",
      mmd: "840px",
      md: "910px",

      lg: "1024px",

      xl: "1280px",

      xxl: "1555px",
      xxxl: "1650px",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
// tailwind.config.js
