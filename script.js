const transitions = ["cornerSwipe", "sideSwipe", "topSwipe", "grayscaleTopSwipe", "gradientSwipe1", "gradientSwipe2", "rocketShip", "starGrow", "starShrink", "circleGrow", "circleShrink"]

function injectMockPages(transitions) {
  for (let i = 0; i < transitions.length; i++) {
    const transition = transitions[i]

    const oldPage = document.createElement("div")
    oldPage.classList.add("oldPage")
    oldPage.classList.add("box")
    oldPage.classList.add(transition)
    oldPage.style = `top:${i * 150}px;`
    oldPage.innerText = "#demo"
    document.getElementById("mockPagesContainer").appendChild(oldPage)

    const newPage = document.createElement("div")
    newPage.classList.add("newPage")
    newPage.classList.add("box")
    newPage.classList.add(transition)
    newPage.style = `top:${i * 150}px;`
    newPage.innerText = "New page"
    document.getElementById("mockPagesContainer").appendChild(newPage)

    const button = document.createElement("button")
    button.style = `position:absolute;top:${i * 150 + 100}px;left:0px;`
    button.innerText = `Toggle new page with ${transition} transition`
    button.addEventListener("click", () => { toggleVisible(`.newPage.${transition}`) })
    document.getElementById("mockPagesContainer").appendChild(button)

    const stylesheet = document.createElement("link")
    stylesheet.rel = "stylesheet"
    stylesheet.type = "text/css"
    stylesheet.href = `styles/${transition}.css`
    document.head.appendChild(stylesheet)
  }
}

function toggleVisible(selector) {
  document.querySelector(selector).classList.toggle('visible')
}

injectMockPages(transitions)