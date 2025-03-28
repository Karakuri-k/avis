function klikk() {
    const dropdownElm = document.querySelector(".dropdown-content")
    if (dropdownElm.style.display == "flex") {
        dropdownElm.style.display = "none"
    } else {
        dropdownElm.style.display = "flex"
    }
}

const darkModeKnapp = document.querySelector(".darkmodeContainer > i")
const navBar = document.querySelector("nav")
const settingsWindow = document.querySelector(".settingsWindow")
const p = document.querySelector("p")

let light = true

darkModeKnapp.addEventListener("click", function() {
    console.log("trykket")
    if (light) {
        document.body.style.backgroundColor = "var(--darkMode)"
        navBar.style.backgroundColor = "var(--darkAccent)"
        settingsWindow.style.backgroundColor = "var(--darkAccent)"
        p.style.color = "var(--lightMode)"

        light = false
    } else {
        document.body.style.backgroundColor = "var(--lightMode)"
        navBar.style.backgroundColor = "var(--lightAccent)"
        settingsWindow.style.backgroundColor = "var(--lightAccent)"
        p.style.color = "var(--darkMode)"
        light = true
    }
})

const settings = document.getElementById("settingsBtn")

settings.addEventListener("click", function() {
    if (settingsWindow.style.right == "-300px") {
        settingsWindow.style.right = "0"
    } else {
        settingsWindow.style.right = "-300px"
    }

})