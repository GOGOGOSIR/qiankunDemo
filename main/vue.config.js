const path = require('path')
const { name } = require('./package.json')

const isProd = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // transpileDependencies: ['single-spa', 'qiankun', 'import-html-entry'],
  chainWebpack: (config) => {
    // if (isProd) {
    //   config
    //     .optimization
    //     .minimize(true) // js文件最小化处理
    //     .splitChunks({ chunks: 'all' }) // 分割代码
    // }

    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    config.resolve.alias.set('@', resolve('src'))
    // config.resolve.alias.set('~Agent', resolve('../saas-agent/src'))
    // config.resolve.alias.set('~Trade', resolve('../saas-trade/src'))
    config.externals({
      vue: 'Vue',
      'vue-router': 'VueRouter',
      // vuex: 'Vuex',
      // axios: 'axios',
      // 'element-ui': 'Element'
    })
    config.devtool('source-map')
  },
};

