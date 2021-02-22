const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  // darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      ringOpacity: ['hover', 'active'],
      colors: {
        b_petrol: {
          50: '#ebf2f4',
          100: '#d7e5e8',
          200: '#afcad2',
          300: '#86b0bb',
          400: '#5e95a5',
          500: '#367B8E',
          600: '#19434F',
          700: '#14363f',
          800: '#0f282f',
          900: '#0a1b20'
        },
        b_green: {
          50: '#e6f7f1',
          100: '#ccefe3',
          200: '#ccefe3',
          300: '#c4f5d7',
          400: '#a3e8be',
          500: '#55d487',
          600: '#01ad71',
          700: '#018a5a',
          800: '#016844',
          900: '#00452d'
        },
        b_lime: {
          50: '#fbfff2',
          100: '#f8ffe6',
          200: '#f1ffcd',
          300: '#eefbcd',
          400: '#e7ffac',
          500: '#dbff81',
          600: '#bfee4a',
          700: '#99be3b',
          800: '#738f2c',
          900: '#4c5f1e'
        },
        b_aqua: {
          50: '#f4fdfb',
          100: '#eefdfa',
          200: '#e9fcf8',
          300: '#e3fbf6',
          400: '#c9fff5',
          500: '#a3ffed',
          600: '#96e4d5',
          700: '#69a095',
          800: '#4b726b',
          900: '#2d4440'
        },
        b_blue: {},
        b_violet: {},
        b_coral: {},
        b_gray: {},
        dark: {
          50: '#fafafa',
          100: '#f3f3f3',
          200: '#e3e3e3',
          300: '#c6c6c6',
          400: '#9e9e9e',
          500: '#6e6e6e',
          600: '#434343',
          700: '#242424',
          800: '#121212',
          900: '#0d0d0d'
        },
        light: colors.trueGray,
        info: colors.blue,
        warning: colors.yellow,
        success: colors.green,
        danger: colors.red
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
