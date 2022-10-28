module.exports = class RemoveCommentsPlugins {
  apply(compiler) {
    console.log("removecommentsPlugin 启动")
    compiler.hooks.emit.tap("RemoveCommetsPlugin", (compilation) => {
      for (const name in compilation.assets) {
        if (name.endsWith(".js")) {
          const contents = compilation.assets[name].source()
          const noCommets = contents.replace(/\/\*{2,}\/\s?/g, "")
          compilation.assets[name] = {
            source: () => noCommets,
            size: () => noCommets.length
          }
        }
      }
    })
  }
}
