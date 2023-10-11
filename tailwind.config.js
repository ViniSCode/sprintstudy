/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "392px",

      xs: "480px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1920px",

      xxl: "2560px",
    },

    extend: {
      transitionProperty: {
        filter: "filter",
      },
      fontFamily: {
        raleway: ["Raleway, sans-serif"],
        advent: ["var(--advent-pro)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        yellow: {
          500: "#DBFF00",
        },
        cyan: {
          500: "#00E0FF",
        },
        gray: {
          500: "#8F8F8F",
          600: "#2B2B2B",
          700: "#1D1D1D",
          900: "#121214",
        },
      },
    },
  },
  plugins: [nextui()],
};
