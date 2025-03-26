function klikk() {
    const dropdownElm = document.querySelector(".dropdown-content")
    if (dropdownElm.style.display == "flex") {
        dropdownElm.style.display = "none"
    } else {
        dropdownElm.style.display = "flex"
    }
}

const darkModeKnapp = document.querySelector(".darkmodeContainer > i")

darkModeKnapp.addEventListener("click", function() {
    console.log("trykket")
    document.body.style.backgroundColor = "red"
})