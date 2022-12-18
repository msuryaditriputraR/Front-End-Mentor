export default async function copyLink(btn, text) {
    try {
        // COPY TO CLIPBOARD
        await navigator.clipboard.writeText(text);

        // STYLING BTN WHEN COPIED
        btn.classList.add("copy");
        btn.innerText = "Copied";

        // RETURN STYLE TO INITIAL
        setTimeout(() => {
            btn.classList.remove("copy");
            btn.innerText = "Copy";
        }, 3000);
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
}
