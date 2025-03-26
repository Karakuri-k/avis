function klikk() {
    const dropdownElm = document.querySelector(".dropdown-content")
    if (dropdownElm.style.display == "flex") {
        dropdownElm.style.display = "none"
    } else {
        dropdownElm.style.display = "flex"
    }
}

const darkModeKnapp = document.querySelector(".darkmodeContainer > i")

let light = true
darkModeKnapp.addEventListener("click", function() {
    console.log("trykket")
    if (light) {
        document.body.style.backgroundColor = "var(--darkMode)"
        light = false
    } else {
        document.body.style.backgroundColor = "var(--lightMode)"
        light = true
    }
})

const settings = document.getElementById("settingsBtn")
const settingsWindow = document.querySelector(".settingsWindow")

settings.addEventListener("click", function() {
    if (settingsWindow.style.right == "-300px") {
        settingsWindow.style.right = "0"
    } else {
        settingsWindow.style.right = "-300px"
    }

})