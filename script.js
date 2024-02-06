const transitions = ["cornerSwipe", "sideSwipe", "topSwipe", "gradientSwipe1", "gradientSwipe2", "rocketShip", "starGrow", "starShrink", "circleGrow", "circleShrink"]

function injectMockPages(transitions) {
  for (let i = 0; i < transitions.length; i++) {
    const transition = transitions[i]

    const oldPage = document.createElement("div")
    oldPage.classList.add("oldPage")
    oldPage.classList.add("box")
    oldPage.style = `top:${i * 150}px;`
    oldPage.innerText = "#demo"
    document.getElementById("mockPagesContainer").appendChild(oldPage)

    const newPage = document.createElement("div")
    newPage.classList.add("newPage")
    newPage.classList.add("box")
    newPage.id = transition
    newPage.style = `top:${i * 150}px;`
    newPage.innerText = "New page"
    document.getElementById("mockPagesContainer").appendChild(newPage)

    const button = document.createElement("button")
    button.style = `position:absolute;top:${i * 150 + 100}px;left:0px;`
    button.innerText = `Toggle new page ${transition}`
    button.addEventListener("click", () => { toggleVisible(transition) })
    document.getElementById("mockPagesContainer").appendChild(button)

    const stylesheet = document.createElement("link")
    stylesheet.rel = "stylesheet"
    stylesheet.type = "text/css"
    stylesheet.href = `styles/${transition}.css`
    document.head.appendChild(stylesheet)
  }
}

function toggleVisible(id) {
  document.getElementById(id).classList.toggle('visible')
}

injectMockPages(transitions)