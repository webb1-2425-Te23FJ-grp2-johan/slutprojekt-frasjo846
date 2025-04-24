const navTitle = document.getElementById("nav-Title");
const navMenu = document.getElementById("nav-menu");
const dropdown = document.getElementById("content-drop-down");
const NavRebuildWith = 680;

navTitle.addEventListener("click", function() {
  navMenu.classList.toggle("hidden");
  dropdown.classList.toggle("invertscale");
});


checkScreenWidth();
function checkScreenWidth() {
  if (window.innerWidth > NavRebuildWith) {
    navTitle.classList.add("hidden"); // Use Tailwind's hidden class
    navMenu.classList.remove("hidden");
  } else {
    navTitle.classList.remove("hidden"); // Ensure it's visible on small screens
  }
}
 //check on page load