
const navMenu = document.getElementById("nav_menu"),
        navToggle = document.getElementById("nav_toggle_btn"),
        navClose = document.getElementById("nav_close_btn")

if (navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu")
    })
}

if (navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}

// remove menu mobile

const navLink = document.querySelectorAll(".nav-list-link")

const linkAction = () =>{
    const navMenu = document.getElementById("nav_menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

