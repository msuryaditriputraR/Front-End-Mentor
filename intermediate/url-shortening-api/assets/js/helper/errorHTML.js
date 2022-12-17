export default function errorHTML(errorEl, text) {
    errorEl.style.display = "inline";
    errorEl.innerHTML = `<i class='bx bx-error'></i> ${text}`;
}
