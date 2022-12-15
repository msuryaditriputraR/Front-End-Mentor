/*==================== MENU SHOW / HIDDEN ====================*/
const toggleMenu = (toggleId, menuId) => {
    const toggle = document.getElementById(toggleId),
        menu = document.getElementById(menuId);

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("show-menu");
        });
    }
};

toggleMenu("nav-toggle", "nav-menu");
