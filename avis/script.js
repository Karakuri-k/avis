function klikk() {
    const dropdownElm = document.querySelector(".dropdown-content")
    if (dropdownElm.style.display == "flex") {
        dropdownElm.style.display = "none"
    } else {
        dropdownElm.style.display = "flex"
    }
}

const darkModeKnapp = document.querySelector(".darkmodeContainer > i")

let dark = false
darkModeKnapp.addEventListener("click", function() {
    console.log("trykket")
    if (!dark) {
        document.body.style.backgroundColor = "var(--darkMode)"
        dark = true
    } else {
        document.body.style.backgroundColor = "var(--lightMode)"
        dark = false
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