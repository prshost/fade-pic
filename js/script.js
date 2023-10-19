let bg = document.querySelector(".bg");

window.addEventListener("scroll", () => {
    let y = document.documentElement.scrollTop;
    bg.style.opacity = 1 - y /500;
})