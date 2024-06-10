(() => {
    const $counter = document.getElementById("js-counter-2");

    const clickHandler = () => {
        $counter.textContent = 1;
    }

    document.getElementById("js-reset-button-2").addEventListener("click", clickHandler)
})();