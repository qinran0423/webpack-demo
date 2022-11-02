const { merge } = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const common = require("./webpack.common")
const webpack = require("webpack")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [new OptimizeCssAssetsWebpackPlugin(), new TerserWebpackPlugin()]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: ["public"]
    }),
    new webpack.DefinePlugin({
      API_BASE_URL: "https://api.example.com"
    })
  ]
})
