
const dropdownElm = document.querySelector(".dropdown-content")

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
const article = document.querySelector("main.article") 
const footer = document.querySelector("footer")

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
        dropdownElm.style.backgroundColor = "var(--darkAccent)"
        dropdownLinks.forEach((dropdownLink) => {
            dropdownLink.style.color = "var(--darkModeText)"
            dropdownLink.onmouseenter = function(){
                console.log("mouse enter")
                dropdownLink.color = "var(--teal)"
            };
        });
        article.style.backgroundColor = "var(--darkAccent)"
        article.style.color = "var(--darkModeText)"
        footer.style.color = "var(--darkModeText)"
        light = false
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
        article.style.backgroundColor = "white"
        article.style.color = "var(--lightModeText)"
        footer.style.color = "var(--lightModeText)"

        light = true
    }
})
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