const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new VueLoaderPlugin()
]

let config

config = merge(baseConfig, {
  entry: {
    app: path.join(__dirname, '../client/server-entry.js'),
    vendor: ['vue']
  },
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          ExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: defaultPlugins.concat([
    new ExtractPlugin({
      filename: '[name].[contenthash:8].css'
    })
  ]),
  optimization: {
    splitChunks: {
      cacheGroups: {                  // 这里开始设置缓存的 chunks
        commons: {
          chunks: 'initial',      // 必须三选一： "initial" | "all" | "async"(默认就是异步)
          minSize: 0,             // 最小尺寸，默认0,
          minChunks: 2,           // 最小 chunk ，默认1
          maxInitialRequests: 5   // 最大初始化请求书，默认1
        },
        vendor: {
          test: /node_modules/,   // 正则规则验证，如果符合就提取 chunk
          chunks: 'initial',      // 必须三选一： "initial" | "all" | "async"(默认就是异步)
          name: 'vendor',         // 要缓存的 分隔出来的 chunk 名称
          priority: 10,           // 缓存组优先级
          enforce: true
        }
      }
    },
    runtimeChunk: true
  }
})

module.exports = config
