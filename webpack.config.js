// ./webpack.config.js
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const RemoveCommentsPlugins = require("./src/plugins/remove-comments-plugin")

const path = require("path")
module.exports = {
  mode: "development",
  entry: "./src/main.js",

  output: {
    filename: "bundle.js",

    path: path.join(__dirname, "output")
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: ["html-loader", "./src/loader/markdown-loader"]
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
    new RemoveCommentsPlugins()
  ]
}
