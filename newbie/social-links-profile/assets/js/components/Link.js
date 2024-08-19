export default function ({ href, icon, text }) {
    const a = document.createElement("a");

    a.href = href || "#";
    a.classList.add("card__link");
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");

    const i = document.createElement("i");
    i.classList.add(icon);

    a.append(i, text);

    return a;
}
