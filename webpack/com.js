/**
 * @deprecated webpack 的公共配置
 */

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/**
 * 当前的模式
 */
const ENV = {
    HOT: process.env.NODE_ENV === 'hot', // 热替换开发模式
    DEV: process.env.NODE_ENV === 'development', // 开发模式
    PRO: process.env.NODE_ENV === 'production', // 生产模式
}

/**
 * 公共路径
 */
const PATH = {
    ROOT: path.join(__dirname, '..'),
    SRC: path.join(__dirname, '..', 'src'),
    DIST: path.join(__dirname, '..', 'dist'),
}

/**
 * 公共配置
 */
const BASE = {
    output: {
        path: PATH.DIST,
        filename: ENV.PRO ? '[name].min.js' : '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    'style-loader',
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // post css
                    'postcss-loader',
                    // 将 Sass 编译成 CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 500 * 1024, // <=500kb 则使用 base64 （即，希望字体文件一直使用 base64 ，而不单独打包）
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json', 'scss', '.css'],
        alias: {
            '~': PATH.SRC,
        },
    },
    plugins: [new CleanWebpackPlugin()],
}

/**
 * 非热替换模式下的公共配置（dev 和 build 的公共配置）
 */
const NOT_HOT = {
    entry: {
        soundCode: path.join(PATH.SRC, 'index.js'),
    },
    externals: {
        wangeditor: {
            root: 'wangEditor',
            commonjs: 'wangeditor',
            commonjs2: 'wangeditor',
        },
    },
}

module.exports = { ENV, BASE, NOT_HOT, PATH }
