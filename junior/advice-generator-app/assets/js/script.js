/* === DECLARATION ELEMENT === */
const adviceTag = document.getElementById("advice__tag");
const qoute = document.querySelector(".advice__qoute").querySelector("p");
const btnDice = document.querySelector(".advice__dice");

/* === FUNCTION GET ADVICE === */
const getAdvice = () => {
    const url = "https://api.adviceslip.com/advice";

    fetch(url, { cache: "no-cache" })
        .then((respon) => respon.json())
        .then((data) => data.slip)
        .then((slip) => {
            adviceTag.innerText = slip.id;
            qoute.innerText = slip.advice;
        })
        .catch((error) => {
            console.error(error);
        });
};

/* === EVENT HANDLER === */
window.addEventListener("load", getAdvice);
btnDice.addEventListener("click", getAdvice);
