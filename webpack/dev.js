/**
 * @deprecated webpack 普通开发环境
 */

const { merge } = require("webpack-merge")
const { BASE, NOT_HOT } = require("./com.js")

// development
const DEV = {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
}

module.exports = merge(BASE, NOT_HOT, DEV)
