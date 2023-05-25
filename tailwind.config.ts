import type  { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: (value) => ({
      // ...value.theme("fontFamily"),
      // // ...theme("fontFamily"),
      virgil: ["Virgil", "sans-serif"],
    }),
    backgroundColor: (value) => ({
      // ...value.theme("colors"),
      "black-home": "#0D1210",
      black: "#121212",
      white: "#fafaf9",
    }),
    extend: {
      spacing: {
        "80vh": "80vh",
      },
    },
  },
  variants: {},
  plugins: [],
} satisfies Config;