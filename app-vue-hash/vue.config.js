
const path = require('path')
const { name } = require('./package.json')

const isProd = process.env.NODE_ENV === 'production'

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/app-vue-hash',
  devServer: {
    port: 1111,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  chainWebpack: (config) => {
    // if (isProd) {
    //   config
    //     .optimization
    //     .minimize(true) // js文件最小化处理
    //     .splitChunks({ chunks: 'all' }) // 分割代码
    // }
    config.module
      .rule('fonts')
      .test(/.(ttf|otf|eot|woff|woff2)$/)
      .use('url-loader')
      .loader('url-loader')
      .tap(options => ({ name: '/fonts/[name].[hash:8].[ext]' }))
      .end()

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
  // 自定义webpack配置
  configureWebpack: {
    output: {
      library: `${name}`,
      libraryTarget: 'umd',// 把子应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
