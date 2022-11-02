// ./webpack.config.js
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const RemoveCommentsPlugins = require("./src/plugins/remove-comments-plugin")
const webpack = require("webpack")
const path = require("path")
module.exports = {
  devServer: {
    port: 9000,
    hot: true
  },
  mode: "production",
  entry: "./src/main.js",
  devtool: "source-map",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "output")
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: ["html-loader", "./src/loader/markdown-loader"]
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack Plugin Sample",
      template: "./src/index.html"
    }),
    // 用于生成 about.html
    new HtmlWebpackPlugin({
      filename: "about.html"
    }),
    new RemoveCommentsPlugins(),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true, // 打包结果中只导出外部用到的成员
    minimize: false, // 压缩打包结果
    concatenateModules: true
  }
}
