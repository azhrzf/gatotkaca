const spook = () => {
    document.querySelector(".container").setAttribute("style", "display:none")
    document.querySelector(".jumpscare").setAttribute("style", "display:block")
    document.getElementById("audio-menggatot").play()
    endSpook()
}

const endSpook = () => {
    const menggatotTimeout = setTimeout(menggatotNone, 15000);
}

const menggatotNone = () => {
    document.querySelector(".container").setAttribute("style", "display:grid")
    document.querySelector(".jumpscare").setAttribute("style", "display:none")
    document.getElementById("audio-menggatot").pause()
}