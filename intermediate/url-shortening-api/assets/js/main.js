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

/* ==================== HANDLE SUBMIT ===================== */
const shorterForm = document.getElementById("shorter-form");

if (shorterForm) {
    shorterForm.addEventListener("submit", function (e) {
        // NO RELOAD AFTER SUBMIT CLICKED
        e.preventDefault();

        // SELECT INPUT
        const input = this.querySelector("#shorter-input");

        // CHECK INPUT VALUE
        if (!input.value) {
            // CHANGE BORDER OF INPUT
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        }
    });
}
