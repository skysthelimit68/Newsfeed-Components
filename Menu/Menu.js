
let menu1Button = document.querySelector(".menu1Button");
let menu2Button = document.querySelector(".menu2Button");

menu1Button.addEventListener("click", (event) => {
  menu.setAttribute("class", "menu menu1");
})

menu2Button.addEventListener("click", (event) => {
  menu.setAttribute("class", "menu menu2");
})

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  if(menu.classList.contains("menu1")){
    menu.classList.toggle("menu--open");
  } else {
    menu.classList.toggle("menu2--open");
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMenu();
})

let allElements = document.querySelectorAll("div");
allElements.forEach(elem => {
  if(!elem.classList.contains("menu")){
    elem.addEventListener("click", (event) => {
          if(menu.classList.contains("menu--open")) {
            menu.classList.toggle("menu--open");
          } else if(menu.classList.contains("menu2--open")){
            menu.classList.toggle("menu2--open");
          }
        })
    }
})

