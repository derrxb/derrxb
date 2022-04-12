module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.tsx",
    "./app/**/*.jsx",
    "./app/**/*.js",
    "./app/**/*.ts",
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
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
};
