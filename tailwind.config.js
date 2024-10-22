/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'dodgeroll-gold': '#F79F1A',
        "apiple-green": "#046E1B",
        "dire-wolf":"#292727"
      },
      fontFamily: {
        Montserrat:"Montserrat,sans-serif"
      },
      container: {
        center: true,
       padding:'2rem'
      }
    },
  },
  plugins: [],
}