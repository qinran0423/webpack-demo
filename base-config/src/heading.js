// ./src/heading.js

export default () => {
  const element = document.createElement("h2")

  element.textContent = "Hello iiieeeeewerwersadas"

  element.addEventListener("click", () => alert("Hello webpack"))

  return element
}
