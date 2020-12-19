const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  logLevel: 'debug',
  addons: [],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader')
        }
      ],
      include: [path.resolve(__dirname, '../src')]
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  }
}
