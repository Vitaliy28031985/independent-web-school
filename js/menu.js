const container = document.querySelector(".header-menu-container");
const open = document.querySelector(".header-menu-button");
const close = document.querySelector(".header-menu-button-clos");

container.classList.add('is-hidden');

const toggleMenu = () => {
    container.classList.toggle("is-hidden");
}

open.addEventListener("click", toggleMenu);
close.addEventListener("click", toggleMenu);




