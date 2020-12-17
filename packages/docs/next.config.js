const withTM = require('next-transpile-modules')(['@kai/ui'])

module.exports = withTM({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = { fs: 'empty' }
    }
    return config
  }
})
