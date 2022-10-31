export default () => {
  const editorElement = document.createElement("div")

  editorElement.contentEditable = true
  editorElement.className = "editor"

  editorElement.innerText = "3333331111114234234324werwe"
  console.log("editor init completed")

  return editorElement
}
