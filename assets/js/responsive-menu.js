
const hamburguer = document.querySelector(".hamburguer");
const navBar = document.querySelector(".nav-bar")
const Bar = document.querySelector(".bar")


hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navBar.classList.toggle("active");
    Bar.classList.toggle("active");
})



