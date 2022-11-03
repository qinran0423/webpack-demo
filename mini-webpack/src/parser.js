import { parse as parseBabel } from "@babel/parser"
import rawTraverse from "@babel/traverse"
const traverse = rawTraverse.default
export function parse(source) {
  const dependencies = []
  const ast = parseBabel(source, {
    sourceType: "module"
  })

  traverse(ast, {
    ImportDeclaration: function ({ node }) {
      dependencies.push(node.source.value)
    }
  })

  return {
    source,
    dependencies
  }
}
