/* ==================== CREATE RADIOS ===================== */

function createRadio(name, index) {
    // Create Fragment as a container
    const fragment = document.createDocumentFragment();

    // create input tag and adding its attribute
    const input = document.createElement("input");
    input.type = "radio";
    input.name = name;
    input.id = `${name}-${index}`;
    input.className = "card__radio";
    input.value = index;

    // create label tag and adding its attribute
    const label = document.createElement("label");
    label.innerText = index;
    label.htmlFor = input.id;
    label.className = "card__label";

    // Add Input and Label to fragment element
    fragment.append(input, label);

    return fragment;
}

// ADD RADIO TO DOM

// Select radios container
const radios = document.getElementById("card-radios");

// Looping according to the number
let i = 1;
while (i <= 5) {
    // append radio fragment to radios
    radios.appendChild(createRadio("rating", i));
    i++;
}

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
