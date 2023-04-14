/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'nunito': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#2C3878',
        'secondary': '#3C3C3C'
      },
    },
  },
  plugins: [],
}