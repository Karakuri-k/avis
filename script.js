
const dropdownElm = document.querySelector(".dropdown-content")
const sokeMotor = document.getElementById("sokeMotor")
const sokDropdown = document.querySelector(".sokDropdown")

let sakene=[
    "23andMe i krise - Frykt for misbruk av genetiske data",
    "Kineserne tetter luken i KI kappløpet med hjelp fra DeepSeek AI.",
    "Her ligger «internett»",
    "Nordmann klager inn OpenAI: ChatGPT påsto han hadde drept sine egne barn",
    "Personvern fiasko - eller rett og slett en dum feil?"   
]
let sakeneLink=[
    "23andme.html",
    "deepseekai.html",
    "fiberdør.html",
    "gptMord.html",
    "placeholder.html"
]

let sakeneLink=[
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

if(window.location.href.includes("sok")==false){
    console.log("du er ikke i sok.html")
    localStorage.clear()
} else{console.log("du er i sok")
    sakeneLink.forEach(element =>{
        
        if(localStorage.getItem(element)){
            let hidden = document.getElementById(element)
            hidden.style.display="none"
        }
    })
}

console.log(localStorage)
function klikk() {
    if (dropdownElm.style.display == "flex") {
        dropdownElm.style.display = "none"
    } else {
        dropdownElm.style.display = "flex"
    }
}

const darkModeKnapp = document.querySelector(".darkmodeContainer > i")
const navBar = document.querySelector("nav")
const settingsWindow = document.querySelector(".settingsWindow")
const p = document.querySelector(".darkmodeContainer")
const navOptions = document.querySelectorAll("nav a, nav button ")
const dropdownLinks = document.querySelectorAll(".dropdown-content a")
const dropdownLinkHovers = document.querySelectorAll(".dropdown-content a:hover")
const articles = document.querySelectorAll(".article") 
const footer = document.querySelector("footer")

let light = true
function darkModeLightMode() {
    if (light) {
        document.querySelector("body").classList.add("darkMode")
        document.querySelector(".logo").src = "bilder/logoDarkMode.svg"
        light = false
        localStorage.setItem("light", false)
    } else {
        document.querySelector("body").classList.remove("darkMode")
        document.querySelector(".logo").src = "bilder/logoLightMode.svg"
        light = true
        localStorage.setItem("light", true)
    }
}
window.onload = function() {
    if (localStorage.getItem("light") === "false") {
        light = true 
        darkModeLightMode()
    } 
}
darkModeKnapp.addEventListener("click", darkModeLightMode)

//ok, vi prøver classes i stedet
   


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

// til søkemotor
    sokeMotor.addEventListener('input', function(){
        //slette ekstra tekst og objekter
            sokDropdown.innerHTML=""
            skjulteElm= []

        let tittel = this.value.toLowerCase()
        for (let i = 0; i < sakene.length; i++) {
            const element = sakene[i];
            const link = sakeneLink[i]
            if (tittel == "") {
                console.log("No input provided");
                //askil. dette funker ikke. ingenting er faktisk ingenting for pcen. stakkars pc^- hilsen bendik
                //nå er det fikset - hilsen askil
            }
            else if(element.toLocaleLowerCase().includes(tittel)){
                let sokemotorSak = document.createElement("a")
                sokDropdown.appendChild(sokemotorSak)
                sokemotorSak.innerHTML= element
                sokemotorSak.href = "../artikler/"+link+".html"
            } else if(element.toLocaleLowerCase().includes(tittel)==false){
                skjulteElm.push(link)
            }
           
        
        }

    })
   function lagreElm(){
    
    skjulteElm.forEach(element => {
        localStorage.setItem(element,element)
    });
   }