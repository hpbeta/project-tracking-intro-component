const menuHamburguer = document.querySelector(".menu-hamburguer");
const navList = document.querySelector(".navigation");

menuHamburguer.addEventListener("click", () => {
  if (navList.classList.contains("mostrar")) {
    navList.classList.remove("mostrar");
    menuHamburguer.setAttribute("src", "./src/images/icon-close.svg");
  } else {
    navList.classList.add("mostrar");
    menuHamburguer.setAttribute("src", "./src/images/icon-hamburger.svg");
  }
});
