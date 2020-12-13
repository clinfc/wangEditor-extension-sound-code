/**
 * @deprecated webpack 生产环境
 */

const { merge } = require('webpack-merge')
const { BASE, NOT_HOT } = require('./com.js')

// production
const PRO = {
    mode: 'production',
    devtool: 'source-map',
}

module.exports = merge(BASE, NOT_HOT, PRO)
