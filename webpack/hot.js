/**
 * @deprecated webpack 热替换开发环境
 */

const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmpWebpackPlugin = require('html-webpack-plugin')
const { BASE, PATH } = require('./com.js')

const HOT = {
    mode: 'development',
    entry: path.join(PATH.ROOT, 'hot-dev/index.js'),
    devtool: 'cheap-module-eval-source-map',
    // 开启 web 服务器（在 webpack-dev-server 中才会生效，即在开发环境中才会生效）
    devServer: {
        // 开启错误提示弹出层
        overlay: true,
        // 端口号
        port: 3000,
        // 在第一次启动服务时，自动打开浏览器并进行访问
        open: true,
        hot: true,
        // 即使热替换未生效，浏览器也不自动刷新
        hotOnly: false,
    },
    plugins: [
        new HtmpWebpackPlugin({
            template: path.join(PATH.ROOT, 'hot-dev/index.html'),
        }),
        // 热模块替换插件：与热替换合用，方便调试 CSS 时 HTML 不会更改
        new webpack.HotModuleReplacementPlugin(),
    ],
}

module.exports = merge(BASE, HOT)
