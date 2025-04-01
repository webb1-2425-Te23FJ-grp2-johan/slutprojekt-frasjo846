const menuTitle = document.getElementById("menu-content");
        const navMenu = document.getElementById("nav-menu");

        menuTitle.addEventListener("click", () => {
            navMenu.classList.toggle("hidden");
        });