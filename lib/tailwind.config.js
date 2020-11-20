const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: '#f3faf7',
          100: '#def7ec',
          200: '#bcf0da',
          300: '#84e1bc',
          400: '#31c48d',
          500: '#0e9f6e',
          600: '#057a55',
          700: '#046c4e',
          800: '#03543f',
          900: '#014737',
        },
        secondary: {
          50: '#fafafa',
          100: '#f3f3f3',
          200: '#e3e3e3',
          300: '#c6c6c6',
          400: '#9e9e9e',
          500: '#6e6e6e',
          600: '#434343',
          700: '#242424',
          800: '#121212',
          900: '#0d0d0d',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
