const path = require('path')
const { name } = require('./package.json')

const isProd = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
    config.resolve.alias.set('@', resolve('src'))
    config.externals({
      vue: 'Vue',
      'vue-router': 'VueRouter',
    })
    config.devtool('source-map')
  },
};

