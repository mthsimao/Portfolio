const dropdownMenu = document.querySelector('.hamburguer')
const navMenu = document.querySelector('.nav-menu')

dropdownMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active')
    iconList.classList.toggle('active')
    closeMenu.classList.toggle('active')
})

// scroll suave

const menuLinks = document.querySelector('.menu a[href^="#"]')



function getDistanceFromTheTop(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
    event.preventDefault();
}



menuLinks.forEach( (link) => {
    link.addEventListener('click', scrollToSection);
});