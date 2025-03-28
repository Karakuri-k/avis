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
const navOptions = document.querySelectorAll("nav a, nav button ")

let light = true

darkModeKnapp.addEventListener("click", function() {
    console.log("trykket")
    if (light) {
        document.body.style.backgroundColor = "var(--darkMode)"
        navBar.style.backgroundColor = "var(--darkAccent)"
        settingsWindow.style.backgroundColor = "var(--darkAccent)"
        p.style.color = "var(--darkModeText)"
        navOptions.forEach((navOption) => {
            navOption.style.color = "var(--teal)"
          });

        light = false
    } else {
        document.body.style.backgroundColor = "var(--lightMode)"
        navBar.style.backgroundColor = "var(--lightAccent)"
        settingsWindow.style.backgroundColor = "var(--lightAccent)"
        p.style.color = "var(--lightModeText)"
        navOptions.forEach((navOption) => {
            navOption.style.color = "var(--purple)"
          });
        light = true
    }
})

const settings = document.querySelector(".settings")

settings.addEventListener("click", function() {
    console.log("trykket settings")
    if (settingsWindow.style.right == "0px") {
        console.log("style right 0")
        settingsWindow.style.right = "-300px"
    } else {
        console.log("style right -300")
        settingsWindow.style.right = "0"
    }

})