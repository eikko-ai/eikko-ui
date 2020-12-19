const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.js'],
  // stories: ['../src/**/*.stories.tsx'],
  logLevel: 'debug',
  addons: []
  // webpackFinal: (config) => {
  // config.module.rules.push({
  // include: [path.resolve(__dirname, '../src')]
  //   test: /\.(ts|tsx)$/,
  //   use: [
  //     {
  //       loader: require.resolve('ts-loader')
  //     }
  //   ]
  // })
  // config.resolve.extensions.push('.ts', '.tsx')
  // return config
  // }
}
