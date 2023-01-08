var menuBtn = document.querySelector(".menu_btn");
var hamburger = document.querySelector(".menu_btn_burger");
var nav = document.querySelector(".nav");
var navMenu = document.querySelector(".nav_menu");
var navItems = document.querySelectorAll(".nav_items");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    navMenu.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    navMenu.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}
