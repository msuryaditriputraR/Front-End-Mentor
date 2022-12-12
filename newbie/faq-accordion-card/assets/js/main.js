/* ==================== ACCORDION ===================== */
function toggleAccordion(headerSelector) {
    const accordionHeader = document.querySelectorAll(headerSelector);

    accordionHeader.forEach((ah) => {
        ah.addEventListener("click", function () {
            this.parentElement.classList.toggle("accordion-open");
        });
    });
}

toggleAccordion(".card__accordion-header");
