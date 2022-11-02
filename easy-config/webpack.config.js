const path = require("path")

module.exports = {
  mode: "none",
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "output")
  }
}
