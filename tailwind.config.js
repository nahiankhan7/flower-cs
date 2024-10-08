/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html", "./dist/test.html"],
  theme: {
    extend: {
      fontFamily: {
        sub: ["Lato", "sans-serif"],
        head: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
