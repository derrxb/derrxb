module.exports = {
  mode: "jit",
  purge: ["./app/**/*.tsx", "./app/**/*.jsx", "./app/**/*.js", "./app/**/*.ts"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      black: "#0D1210",
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
