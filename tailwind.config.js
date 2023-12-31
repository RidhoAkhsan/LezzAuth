/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      inter: ['Inter','sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      backgroundColor: {
        custom: "#1F2025",
      },
    },
  },
  plugins: [],
};
