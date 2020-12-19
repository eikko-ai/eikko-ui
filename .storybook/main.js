const path = require('path')

module.exports = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
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
      include: [path.resolve(__dirname, '../components')]
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  }
}
