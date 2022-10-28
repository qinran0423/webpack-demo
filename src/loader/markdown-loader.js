const { marked } = require("marked")

module.exports = (source) => {
  let html = marked.parse(source)
  return html
}
