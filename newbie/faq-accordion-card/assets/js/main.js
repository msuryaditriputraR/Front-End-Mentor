/* ==================== ACCORDION ===================== */
function toggleAccordion(accordionSelector, headerSelector, contentSelector) {
    const accordion = document.querySelectorAll(accordionSelector);
    const accordionHeader = document.querySelectorAll(headerSelector);

    accordionHeader.forEach((ah) => {
        ah.addEventListener("click", function () {
            const parent = this.parentElement;

            if (!parent.classList.contains("accordion-open")) {
                accordion.forEach((ac) => {
                    ac.classList.remove("accordion-open");
                    ac.querySelector(contentSelector).style.height = 0;
                });
            }

            parent.classList.toggle("accordion-open");

            const content = this.nextElementSibling;
            if (parent.classList.contains("accordion-open")) {
                content.style.height = content.scrollHeight + "px";
            } else {
                content.style.height = 0;
            }
        });
    });
}

toggleAccordion(
    ".card__accordion",
    ".card__accordion-header",
    ".card__accordion-content"
);
