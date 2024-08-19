import Link from "./components/Link.js";
import data from "./stored/data.js";

const cardLinks = document.querySelector(".card__links");

for (const d of data) {
    cardLinks.appendChild(Link(d));
}
