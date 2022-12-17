export default function getShortLink(link) {
    const url = `https://api.shrtco.de/v2/shorten?url=${link}`;

    return fetch(url);
}
