const hamburguer = document.querySelector('.hamburguer')
const navMenu = document.querySelector('.nav-menu')

hamburguer.addEventListener('click', function(){
    hamburguer.classList.toggle('active')
    navMenu.classList.toggle('active')
})

// DARK MODE 

const changeTheme = document.querySelector('#change-theme')

function toggleDarkMode() {
    document.body.classList.toggle('dark')
}

changeTheme.addEventListener("change", function() {
    toggleDarkMode()
})