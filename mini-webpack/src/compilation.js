import fs from "fs"
import { parse } from "./parser.js"

export class Compilation {
  constructor({ entry }) {
    this._entry = entry
  }

  make() {
    function _buildModule(fileName) {
      let sourceCode = fs.readFileSync(fileName, { encoding: "utf-8" })
      console.log(sourceCode)

      const assets = parse(sourceCode)
      console.log(assets)
      return {}
    }

    _buildModule(this._entry)
  }
}
