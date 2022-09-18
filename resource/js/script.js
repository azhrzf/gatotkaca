const input = document.querySelector(".input-search")
const container = document.querySelector(".container")
const jumpscare = document.querySelector(".jumpscare")
const audio = document.getElementById("audio-menggatot")

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault()
        spook()
    }
})

const spook = () => {
    if (input.value === "") {

    }
    container.setAttribute("style", "display:none")
    jumpscare.setAttribute("style", "display:block")
    audio.play()
    endSpook()
}

const endSpook = () => {
    const menggatotTimeout = setTimeout(menggatotNone, 15000);
}

const menggatotNone = () => {
    container.setAttribute("style", "display:grid")
    jumpscare.setAttribute("style", "display:none")
    audio.pause()
}