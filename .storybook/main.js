const path = require('path')

module.exports = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-controls'
  ],
  logLevel: 'debug',
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
