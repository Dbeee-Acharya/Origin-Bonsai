const person = document.querySelector(".images-container");
const img = document.querySelector(".imgpot");
const name = document.querySelector(".name");
const info = document.querySelector(".info");

person.addEventListener("click", (e) => {
  const el = e.target.closest(".person").dataset.img;
  img.src = el;
  name.textContent = e.target.closest(".person").dataset.name;
  info.textContent = e.target.closest(".person").dataset.info;
});
const button = document.querySelector(".menubutton");
const background = document.querySelector(".menu");
let isShowing = true;

button.addEventListener("click", function () {
  if (isShowing) {
    background.style.position = "absolute";
    background.style.display = "flex";
    isShowing = false;
  } else {
    background.style.position = "relative";
    background.style.display = "none";
    isShowing = true;
  }
});
