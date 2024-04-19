let timer;
window.addEventListener("scroll", () => {
    document.querySelector("#element").classList.remove("opacity");
    clearTimeout(timer);
    timer = setTimeout(() => {
        document.querySelector("#element").classList.add("opacity");
    }, 2000);
})

document.querySelector("#element").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
})