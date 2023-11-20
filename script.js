const dropdownMenu = document.querySelector('.hamburguer')
const navMenu = document.querySelector('.nav-menu')

let iconList = document.querySelector('.bi-list')
let closeMenu = document.querySelector('.bi-x-lg')

dropdownMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active')
    iconList.classList.toggle('active')
    closeMenu.classList.toggle('active')
})


// DARK MODE 

const changeTheme = document.querySelector('#change-theme')

function toggleDarkMode() {
    document.body.classList.toggle('dark')
}

changeTheme.addEventListener("change", function() {
    toggleDarkMode()
})

