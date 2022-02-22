/* === DOM SELECTION === */
const share = document.querySelector(".share");
const btnShare = document.getElementById("btn-share");

btnShare.addEventListener("click", function (e) {
    e.stopPropagation();
    share.classList.add("active");
    this.className = "card__share bg-dark";
    this.firstElementChild.classList.add("icon-light");
    this.firstElementChild.classList.remove("icon-dark");
});

document.addEventListener("click", function () {
    share.classList.remove("active");
    btnShare.className = "card__share bg-light";
    btnShare.firstElementChild.classList.add("icon-dark");
    btnShare.firstElementChild.classList.remove("icon-light");
});
