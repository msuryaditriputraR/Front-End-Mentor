/* ==================== HANDLE RATING SUBMIt ===================== */

// SELECT ELEMENT

const card = document.getElementById("card"),
    formRating = document.getElementById("card-form"),
    radiosRating = document.querySelectorAll("[name=rating]"),
    spanResult = document.getElementById("result-rating");

// Check if Radios Rating Exist
if (radiosRating) {
    // CHANGE STATE WHEN RADIO CLICKED
    radiosRating.forEach((radio) => {
        radio.addEventListener("change", function () {
            // REMOVE STATE IN OTHER RADIOS
            const labelActive = document.querySelector("label.active");

            if (labelActive) labelActive.classList.remove("active");

            // ADD ACTIVE STATE WHEN RADIO IS CHOOSE
            this.nextElementSibling.classList.add("active");
        });
    });
}

// HANDLE SUBMIT FUNCTION
function handleSubmit(e) {
    // RESET DEFAULT BEHAVIOR
    e.preventDefault();

    // ADD CLASS CSS TO CARD
    card.classList.add("submit");

    // ADD VALUE TO SPAN
    spanResult.innerText =
        document.querySelector("label.active").previousElementSibling.value;

    // RETURN TO INITIAL STATE
    setTimeout(() => {
        card.classList.remove("submit");
        const labelActive = document.querySelector("label.active");

        if (labelActive) labelActive.classList.remove("active");
    }, 5000);
}

// check if formRating Exist
if (formRating) {
    // HANDLE WHEN FORM SUBMIT
    formRating.addEventListener("submit", handleSubmit);
}
