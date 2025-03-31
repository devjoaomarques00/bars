const xmark = document.querySelector("#xmark");
const bars = document.querySelector("#bars")
const aside = document.querySelector(".aside-bar")

bars.addEventListener("click", () => {
    aside.style.display = "block";
})

xmark.addEventListener("click", () => {
    aside.style.display = "none";
})
