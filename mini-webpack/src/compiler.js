import { Compilation } from "./compilation.js"

export class Compiler {
  constructor(config) {
    const { entry, output } = config
    this._entry = entry
    this._output = output
  }

  run() {
    // 创建了一个compilation对象
    this._compilation = new Compilation({ entry: this._entry })
    this._compilation.make()
  }
}
