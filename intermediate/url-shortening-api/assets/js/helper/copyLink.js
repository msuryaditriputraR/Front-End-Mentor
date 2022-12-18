export default async function copyLink(btn, text) {
    try {
        await navigator.clipboard.writeText(text);

        btn.classList.add("copy");
        btn.innerText = "Copied";

        setTimeout(() => {
            btn.classList.remove("copy");
            btn.innerText = "Copy";
        }, 3000);
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
}
