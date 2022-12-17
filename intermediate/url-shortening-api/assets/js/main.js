import getShortLink from "./api/getShortLink.js";
import errorHTML from "./helper/errorHTML.js";

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
        const errorEl = this.querySelector("#error-message");

        // CHECK INPUT VALUE
        if (validateInput(input.value)) {
            // GET SHORT URL
            getShortLink(input.value)
                .then((response) => response.json())
                .then((result) => result.result.short_link)
                .then((sl) => console.log(sl));
        }

        input.addEventListener("input", function () {
            // CHECK INPUT VALUE
            validateInput(this.value);
        });

        function validateInput(value) {
            const regex = new RegExp("^https?://");

            if (!value) {
                // CHANGE BORDER OF INPUT
                input.classList.add("error");
                // ADD ERROR MESSAGE
                errorHTML(errorEl, "Please add a link");

                return false;
            }
            // CHECK IF VALUE IS VALID URL
            else if (!value.match(regex)) {
                errorHTML(errorEl, "Please enter a valid URL");
                return false;
            }
            // VALUE IS VALID URL
            else {
                input.classList.remove("error");
                errorEl.style.display = "none";

                return true;
            }
        }
    });
}
