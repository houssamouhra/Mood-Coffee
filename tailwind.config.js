/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#c06722",
        shade: "#864818",
      },
      fontFamily: {
        custom: ["myFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
