let menu = document.querySelector(".menu");
let close = document.querySelector(".close");
let body =document.body;
menu.addEventListener("click", () => {
    body.classList.add("open");
});
close.addEventListener("click", () => {
    body.classList.remove("open");
});
