window.onload = function() {
    if (typeof(Storage) != "undefined") {
        let color = localStorage.color
        if (color) {
            document.body.style.backgroundColor = color
        }
    } else {
        document.write("Sem suporte para Web Storage")
    }
    if (typeof(Storage) != "undefined") {
        let color2 = localStorage.color2
        if (color2) {
            document.body.style.color = color2
        }
    } else {
        document.write("Sem suporte para Web Storage")
    }
    if (typeof(Storage) != "undefined") {
        let letter = localStorage.letra
        if (letter) {
            document.body.style.fontSize = letter
        }
    } else {
        document.write("Sem suporte para Web Storage")
    }
    if (typeof(Storage) != "undefined") {
        let line = localStorage.linha
        if (line) {
            document.body.style.lineHeight = line
        }
    } else {
        document.write("Sem suporte para Web Storage")
    }
    if (typeof(Storage) != "undefined") {
        let font = localStorage.fonte
        if (font) {
            document.body.style.fontFamily = font
        }
    } else {
        document.write("Sem suporte para Web Storage")
    }
    let buttons = document.querySelectorAll(".colors")
    for (let button of buttons) {
        button.addEventListener("click", event => {
            let color = event.target.innerHTML
            localStorage.setItem("color", color)
            document.body.style.backgroundColor = color
        })
    }
    let letters = document.querySelectorAll(".word")
    for (let button of letters) {
        button.addEventListener("click", event => {
            let color2 = event.target.innerHTML
            localStorage.setItem("color2", color2)
            document.body.style.color = color2
        })
    }
    let sizes = document.querySelectorAll(".size")
    for (let button of sizes) {
        button.addEventListener("click", event => {
            let letter = event.target.innerHTML
            localStorage.setItem("letra", letter)
            document.body.style.fontSize = letter
        })
    }
    let espacos = document.querySelectorAll(".espaco")
    for (let button of espacos) {
        button.addEventListener("click", event => {
            let line = event.target.innerHTML
            localStorage.setItem("linha", line)
            document.body.style.lineHeight = line
        })
    }
    let fontes = document.querySelectorAll(".fonte")
    for (let button of fontes) {
        button.addEventListener("click", event => {
            let font = event.target.innerHTML
            localStorage.setItem("fonte", font)
            document.body.style.fontFamily = font
        })
    }
}