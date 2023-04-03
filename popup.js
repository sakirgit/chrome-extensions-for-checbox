        document.querySelector("#copy-button").addEventListener("click", () => {
            navigator.clipboard.readText().then((text) => {
                document.querySelector("#title").textContent = text;
            });
        });