import copyLink from "../helper/copyLink.js";

export default function cardResult(originalLink, shortLink) {
    const cardClassname = "shorter__card";

    // CREATE P TAG FOR ORIGINAL LINK
    const originalLinkP = document.createElement("p");

    originalLinkP.className = cardClassname + "-original";
    originalLinkP.setAttribute("title", originalLink);
    originalLinkP.innerText = originalLink;

    // CREATE P TAG FOR SHORT LINK
    const shortLinkP = document.createElement("p");

    shortLinkP.className = cardClassname + "-short";
    shortLinkP.innerText = shortLink;

    // CREATE HR TAG
    const hr = document.createElement("hr");

    hr.className = cardClassname + "-hr";

    // CREATE BUTTON COPY
    const btnCopy = document.createElement("button");

    btnCopy.className = cardClassname + "-btn";
    btnCopy.innerText = "Copy";
    btnCopy.addEventListener("click", function () {
        copyLink(this, shortLink);
    });

    const card = document.createElement("div");

    card.className = cardClassname;
    card.append(originalLinkP, hr, shortLinkP, btnCopy);

    return card;
}
