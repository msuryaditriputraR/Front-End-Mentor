/* === DOM SELECTION === */
const share = document.querySelector(".share");
const btnShare = document.getElementById("btn-share");

btnShare.addEventListener("click", function (e) {
    e.stopPropagation();
    share.classList.add("active");
});

document.addEventListener("click", function () {
    share.classList.remove("active");
});
