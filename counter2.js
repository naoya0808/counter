(() => {
    const $counter = document.getElementById("js-counter-2");

    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        if($targetButton.textContent === "+"){
            $counter.textContent = currentCount * 2;
        }
    }

    for (let index = 0; index < document.getElementsByClassName("js-button-2").length; index++) {
        document.getElementsByClassName("js-button-2")[index].addEventListener("click", (e) => clickHandler(e))
    }
})();