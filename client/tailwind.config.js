/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      'color-primary': '#00aeef',
      'color-secondary': '#36517e',
    },
    fontFamily: {
      main: ['Roboto', 'sans-serif'],
      mini: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["light"],
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}