const dropdownMenu = document.querySelector('.hamburguer')
const navMenu = document.querySelector('.nav-menu')

let iconList = document.querySelector('.bi-list')
let closeMenu = document.querySelector('.bi-x-lg')

dropdownMenu.addEventListener('click', function() {
  navMenu.classList.toggle('active')
  iconList.classList.toggle('active')
  closeMenu.classList.toggle('active')
})

// scroll suave

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

// function nativeScroll(distanceFromTheTop) {
//   window.scroll({
//     top: distanceFromTheTop,
//     behavior: "smooth",
//   });
// }

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 72;
  smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}


// texting animation

const writeMessage = document.querySelector('.typing')

// Array with messages

const messages = [' Front-end Developer', ' UI/UX Design']

let messageIndex = 0
let characterIndex = 0
let currentMessage = ''
let currentCharacters = ''

// Function to type

const type = () => {

  const shouldTypeFirstMessage = messageIndex === messages.length

  if(shouldTypeFirstMessage) {
    messageIndex = 0
  }

  // Current message receive the first position in array (messageIndex)
  currentMessage = messages[messageIndex]

  /* Current characters receive the current message divided one 
    by one until it finish typing the message 
  */ 
  currentCharacters = currentMessage.slice(0, characterIndex++)

  // Type the message on screen
  writeMessage.textContent = currentCharacters

  const shouldChangeMessageToBeTyped = 
    currentCharacters.length === currentMessage.length

  if(shouldChangeMessageToBeTyped) {
    messageIndex++
    characterIndex = 0
  }
}

setInterval(type, 180)