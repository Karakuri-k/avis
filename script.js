
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
    "placeholder.html",
    "signalApp.html"
]

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

onload = darkModeLightMode() 

function darkModeLightMode() {
    if (light == true) {
        document.body.style.backgroundColor = "var(--darkMode)"
        navBar.style.backgroundColor = "var(--darkAccent)"
        settingsWindow.style.backgroundColor = "var(--darkAccent)"
        p.style.color = "var(--darkModeText)"
        navOptions.forEach((navOption) => {
            navOption.style.color = "var(--teal)"
        });
        dropdownElm.style.backgroundColor = "var(--darkAccent)"
        dropdownLinks.forEach((dropdownLink) => {
            dropdownLink.style.color = "var(--darkModeText)"
            dropdownLink.onmouseenter = function(){
                console.log("mouse enter")
                dropdownLink.color = "var(--teal)"
            };
        });
        articles.forEach((article) => {
            article.style.backgroundColor = "var(--darkAccent)"
            article.style.color = "var(--darkModeText)"
        });
        footer.style.color = "var(--darkModeText)"
        document.querySelector(".logo").src = "bilder/logoDarkMode.svg"
        document.querySelector("body.hovedside").style.background = 'url("bilder/backgroundImgDark.svg") no-repeat fixed center'
        light = false
        localStorage.setItem("light", false)
    } else {
        document.body.style.backgroundColor = "var(--lightMode)"
        navBar.style.backgroundColor = "var(--lightAccent)"
        settingsWindow.style.backgroundColor = "var(--lightAccent)"
        p.style.color = "var(--lightModeText)"
        navOptions.forEach((navOption) => {
            navOption.style.color = "var(--purple)"
        });
        dropdownElm.style.backgroundColor = "var(--lightAccent)"
        dropdownLinks.forEach((dropdownLink) => {
            dropdownLink.style.color = "var(--lightModeText)"
            dropdownLink.onmouseenter = function(){
                console.log("mouse enter")
                dropdownLink.color = "var(--purple)"
            };
        });
        articles.forEach((article) => {
            article.style.backgroundColor = "white"
            article.style.color = "var(--lightModeText)"
        });
        footer.style.color = "var(--lightModeText)"
        document.querySelector(".logo").src = "bilder/logoLightMode.svg"
        document.querySelector("body.hovedside").style.background = 'url("bilder/backgroundImgLight.svg") no-repeat fixed center'
        light = true
        localStorage.setItem("light", true)
    }
}
darkModeKnapp.addEventListener("click", darkModeLightMode())

//ok, vi prøver classes i stedet
dropdownLinks.forEach(dropdownLink => dropdownLink.addEventListener("mouseenter", function() {
    console.log("mouse enter");
    if (light) {
        dropdownLink.style.color = "var(--purple)";
    } else {
        dropdownLink.style.color = "var(--teal)";
    }
}));
dropdownLinks.forEach(dropdownLink => dropdownLink.addEventListener("mouseleave", function() {
    console.log("mouse enter");
    if (light) {
        dropdownLink.style.color = "var(--lightmodeText";
    } else {
        dropdownLink.style.color = "var(--darkModeText)";
    }
}));    


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
        //slette ekstra tekst
            sokDropdown.innerHTML=""
        let tittel = this.value.toLowerCase()
        for (let i = 0; i < sakene.length; i++) {
            const element = sakene[i];
            const link = sakeneLink[i]
            if (tittel== ""){
                console.log(ingenting)
                //askil. dette funker ikke. ingenting er faktisk ingenting for pcen. stakkars pc^- hilsen bendik
            }
            else if(element.toLocaleLowerCase().includes(tittel)){
                let sokemotorSak = document.createElement("a")
                sokDropdown.appendChild(sokemotorSak)
                sokemotorSak.innerHTML= element
                sokemotorSak.href = "../artikler/"+link
            }
           
        
        }
    })