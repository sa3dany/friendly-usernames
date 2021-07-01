const { assignWith } = require("lodash");

const colors = require("tailwindcss/colors");
const { theme } = require("tailwindcss/defaultConfig");

module.exports = {
  mode: "jit",
  purge: ["./components/**/*.{js,jsx}", "./pages/**/*.{js,jsx}"],
  darkMode: "media",
  theme: {
    extend: {
      // https://tailwindcss.com/docs/customizing-colors
      colors: {
        gray: colors.coolGray,
      },
      fontFamily: {
        sans: [...theme.fontFamily.sans],
      },
    },

    // https://tailwindcss.com/docs/customizing-spacing
    spacing: assignWith({}, theme.spacing, (_, value) => {
      if (value.endsWith("px")) return value;
      return `${parseFloat(value) * 16}px`;
    }),
  },

  plugins: [],
};
