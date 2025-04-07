
const dropdownElm = document.querySelector(".dropdown-content")
const sokeMotor = document.getElementById("sokeMotor")
const sokDropdown = document.querySelector(".sokDropdown")

let sakene = [
    "23andMe i krise - Frykt for misbruk av genetiske data",
    "Kineserne tetter luken i KI kappløpet med hjelp fra DeepSeek AI.",
    "Her ligger «internett»",
    "Nordmann klager inn OpenAI: ChatGPT påsto han hadde drept sine egne barn",
    "Personvern fiasko - eller rett og slett en dum feil?",
    'Forfattere protesterer mot Meta: "Vi må si ifra"',
    "Facebook stopper målrettede annonser mot britisk kvinne etter rettslig kamp"


]


let sakeneLink = [
    "23andme",
    "deepseekai",
    "fiberdør",
    "gptMord",
    "signalApp",
    "metaprotest",
    "facebookannonser"
]
//objekter som skal lagres og ikke skal vises i sok.html
let skjulteElm = []

if (window.location.href.includes("sok") == false) {
    console.log("du er ikke i sok.html")

} else {
    console.log("du er i sok")
    sakeneLink.forEach(element => {

        if (localStorage.getItem(element)) {
            let hidden = document.getElementById(element)
            hidden.style.display = "none"
            localStorage.removeItem(element)
        }
    })
}

console.log(localStorage)
function klikk() {
    if (dropdownElm.style.left == "0px") {
        console.log("style left 0")
        dropdownElm.style.left = "-300px"
    } else {
        console.log("style left -300")
        dropdownElm.style.left = "0"
    }
}

const darkModeKnapp = document.querySelector(".darkmodeContainer > i")
const settingsWindow = document.querySelector(".settingsWindow")
const darkModeTekst = document.querySelector(".darkmodeContainer > p")
const darkModeIcon = document.querySelector(".darkmodeContainer > i")


let light = true
function darkModeLightMode() {
    if (light) {
        document.querySelector("body").classList.add("darkMode")
        document.querySelector(".logo").src = "./bilder/logoDarkMode.svg"
        darkModeTekst.innerHTML = "Light Mode"
        darkModeIcon.classList.remove("fa-moon")
        darkModeIcon.classList.add("fa-sun")
        light = false
        localStorage.setItem("light", false)
    } else {
        document.querySelector("body").classList.remove("darkMode")
        document.querySelector(".logo").src = "./bilder/logoLightMode.svg"
        darkModeTekst.innerHTML = "Dark Mode"
        darkModeIcon.classList.remove("fa-sun")
        darkModeIcon.classList.add("fa-moon")
        light = true
        localStorage.setItem("light", true)
    }
}
window.onload = function () {
    if (localStorage.getItem("light") === "false") {
        light = true
        darkModeTekst.innerHTML = "Light Mode"
        darkModeIcon.classList.remove("fa-moon")
        darkModeIcon.classList.add("fa-sun")
        darkModeLightMode()
    } else {
        darkModeTekst.innerHTML = "Dark Mode"
        darkModeIcon.classList.remove("fa-sun")
        darkModeIcon.classList.add("fa-moon")
    }
}
darkModeKnapp.addEventListener("click", darkModeLightMode)

//ok, vi prøver classes i stedet



const settings = document.querySelector(".settings")

settings.addEventListener("click", function () {
    console.log("trykket settings")
    if (settingsWindow.style.right == "0px") {
        console.log("style right 0")
        settingsWindow.style.right = "-300px"
    } else {
        console.log("style right -300")
        settingsWindow.style.right = "0"
    }

})

// til søkemotor
sokeMotor.addEventListener('input', function () {
    //slette ekstra tekst og objekter
    sokDropdown.innerHTML = ""
    skjulteElm = []

    let tittel = this.value.toLowerCase()
    for (let i = 0; i < sakene.length; i++) {
        const element = sakene[i];
        const link = sakeneLink[i]
        if (tittel == "") {
            console.log("No input provided");
            //askil. dette funker ikke. ingenting er faktisk ingenting for pcen. stakkars pc^- hilsen bendik
            //nå er det fikset - hilsen askil
            //tusen takk - hilsen karen
        }
        else if (element.toLocaleLowerCase().includes(tittel)) {
            let sokemotorSak = document.createElement("a")
            sokDropdown.appendChild(sokemotorSak)
            sokemotorSak.innerHTML = element
            sokemotorSak.href = "avis/artikler/" + link + ".html"
        } else if (element.toLocaleLowerCase().includes(tittel) == false) {
            skjulteElm.push(link)
        }


    }

})

function lagreElm() {

    skjulteElm.forEach(element => {
        localStorage.setItem(element, element)
    });
}