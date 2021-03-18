const defaultTheme = require('tailwindcss/defaultTheme')
const { themeColors } = require('../components/tailwind.config')

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      ringOpacity: ['hover', 'active'],
      colors: themeColors
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    }
  },
  plugins: []
}
