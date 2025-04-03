const menuTitle = document.getElementById("menu-content");
const navMenu = document.getElementById("nav-menu");
const dropdown = document.getElementById("content-drop-down");

menuTitle.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  dropdown.classList.toggle("arrowmove");
});
