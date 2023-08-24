(() => {
    const start = Date.now();
    let form = document.querySelector("form");
    form.onsubmit = (e) => {
        const now = Date.now();
        if (now - start < 3000) {
            e.preventDefault();
            return false;
        }
        // send form
        form.action="https://airform.io/contact@acaos.io";
        form.method="post";
        form.target="_blank"
    };
})();