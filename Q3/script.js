const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

//wait for a mouse click to activate the hamburger
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
//wait for a mouse click on the active menu to remove it
document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    }))