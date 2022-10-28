import createHeading from "./heading.js"
import about from "./about.md"

let div = document.createElement("div")
div.innerHTML = about
document.body.append(div)

const heading = createHeading()

document.body.append(heading)
