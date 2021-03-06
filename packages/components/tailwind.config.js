const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const brandColors = {
  b_petrol: {
    50: '#ebf2f4',
    100: '#d7e5e8',
    200: '#afcad2',
    300: '#86b0bb',
    400: '#5e95a5',
    500: '#367b8e',
    600: '#19434f',
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
  b_blue: {
    50: '#e7e8ff',
    100: '#cfd1fe',
    200: '#b6b9fe',
    300: '#9ea2fd',
    400: '#868bfd',
    500: '#5c63ff',
    600: '#4a4fcc',
    700: '#373b99',
    800: '#252866',
    900: '#121433'
  },
  b_violet: {
    50: '#f8f7ff',
    100: '#f5f2ff',
    200: '#f1eeff',
    300: '#eeeaff',
    400: '#e1dcf8',
    500: '#d8ceff',
    600: '#c2b8ed',
    700: '#9b93be',
    800: '#615c77',
    900: '#27252f'
  },
  b_coral: {
    50: '#fbf5f0',
    100: '#f9f1ea',
    200: '#f8efe7',
    300: '#f7ede4',
    400: '#f6ebe1',
    500: '#f0c4ba',
    600: '#ff785b',
    700: '#cc6049',
    800: '#994837',
    900: '#663024'
  },
  b_gray: {
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
  }
}

const themeColors = {
  ...brandColors,

  background: {
    DEFAULT: brandColors.b_gray[100],
    light: brandColors.b_gray[100],
    dark: brandColors.b_gray[900]
  },

  primary: brandColors.b_petrol,
  secondary: brandColors.b_green,

  light: colors.trueGray,
  dark: brandColors.b_gray,
  info: colors.blue,
  warning: colors.yellow,
  success: colors.green,
  danger: colors.red,

  whiteAlpha: {
    50: 'rgba(255, 255, 255, 0.04)',
    100: 'rgba(255, 255, 255, 0.06)',
    200: 'rgba(255, 255, 255, 0.08)',
    300: 'rgba(255, 255, 255, 0.16)',
    400: 'rgba(255, 255, 255, 0.24)',
    500: 'rgba(255, 255, 255, 0.36)',
    600: 'rgba(255, 255, 255, 0.48)',
    700: 'rgba(255, 255, 255, 0.64)',
    800: 'rgba(255, 255, 255, 0.80)',
    900: 'rgba(255, 255, 255, 0.92)'
  },

  blackAlpha: {
    50: 'rgba(0, 0, 0, 0.04)',
    100: 'rgba(0, 0, 0, 0.06)',
    200: 'rgba(0, 0, 0, 0.08)',
    300: 'rgba(0, 0, 0, 0.16)',
    400: 'rgba(0, 0, 0, 0.24)',
    500: 'rgba(0, 0, 0, 0.36)',
    600: 'rgba(0, 0, 0, 0.48)',
    700: 'rgba(0, 0, 0, 0.64)',
    800: 'rgba(0, 0, 0, 0.80)',
    900: 'rgba(0, 0, 0, 0.92)'
  }
}

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      ringOpacity: ['hover', 'active'],
      animation: {
        'spin-slow': 'spin 2000ms linear infinite',
        'spin-fast': 'spin 500ms linear infinite'
      },
      colors: themeColors
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },
  plugins: [require('@tailwindcss/forms')]
}

module.exports.themeColors = themeColors
