import createHeading from "./heading.js"
import about from "./about.md"
import "./index.css"
import createEditor from "./editor"
let div = document.createElement("div")
div.innerHTML = about
document.body.append(div)

const heading = createHeading()

document.body.append(heading)

const editor = createEditor()
document.body.appendChild(editor)

let lastEditor = editor
console.log(editor)
module.hot.accept("./editor", () => {
  document.body.removeChild(lastEditor) // 移除之前创建的元素
  lastEditor = createEditor() // 用新模块创建新元素
  document.body.appendChild(lastEditor)
})
