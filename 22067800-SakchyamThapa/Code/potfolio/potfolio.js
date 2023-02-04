/*adding an event where each image has an different information*/
const person = document.querySelector(".images-container");
const img = document.querySelector(".imgpot");
const name = document.querySelector(".name");
const info1 = document.querySelector(".info1");
const year1 = document.querySelector(".year1");
const year2 = document.querySelector(".year2");
const year3 = document.querySelector(".year3");
const year4 = document.querySelector(".year4");
const year5 = document.querySelector(".year5");


person.addEventListener("click", (e) => {
  const el = e.target.closest(".person").dataset.img;
  img.src = el;
  name.textContent = e.target.closest(".person").dataset.name;
  info1.textContent = e.target.closest(".person").dataset.info1;
  year1.textContent = e.target.closest(".person").dataset.year1;
  year2.textContent = e.target.closest(".person").dataset.year2;
  year3.textContent = e.target.closest(".person").dataset.year3;
  year4.textContent = e.target.closest(".person").dataset.year4;
  year5.textContent = e.target.closest(".person").dataset.year5;
});
const loc1 = document.querySelector(".loc1");
const loc2 = document.querySelector(".loc2");
const loc3 = document.querySelector(".loc3");
const loc4 = document.querySelector(".loc4");
const loc5 = document.querySelector(".loc5");
const work1 = document.querySelector(".work1");
const work2 = document.querySelector(".work2");
const work3 = document.querySelector(".work3");
const work4 = document.querySelector(".work4");
const work5 = document.querySelector(".work5");
const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");
const t3 = document.querySelector(".t3");
const t4 = document.querySelector(".t4");
const t5 = document.querySelector(".t5");
person.addEventListener("click", (e) => {
  const el = e.target.closest(".person").dataset.img;
  img.src = el;
  loc1.textContent = e.target.closest(".person").dataset.loc1;
  loc2.textContent = e.target.closest(".person").dataset.loc2;
  loc3.textContent = e.target.closest(".person").dataset.loc3;
  loc4.textContent = e.target.closest(".person").dataset.loc4;
  loc5.textContent = e.target.closest(".person").dataset.loc5;
  work1.textContent = e.target.closest(".person").dataset.work1;
  work2.textContent = e.target.closest(".person").dataset.work2;
  work3.textContent = e.target.closest(".person").dataset.work3;
  work4.textContent = e.target.closest(".person").dataset.work4;
  work5.textContent = e.target.closest(".person").dataset.work5;
  t1.textContent = e.target.closest(".person").dataset.t1;
  t2.textContent = e.target.closest(".person").dataset.t2;
  t3.textContent = e.target.closest(".person").dataset.t3;
  t4.textContent = e.target.closest(".person").dataset.t4;
  t5.textContent = e.target.closest(".person").dataset.t5;
});
/*hamburgermenu adding an button wuth function*/
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
const walletBtn = document.querySelector(".wallet");
walletBtn.addEventListener("click", () => {
  alert("Wallet points coming soon");
});

const deta1 = document.querySelector(".deta1");
const deta2 = document.querySelector(".deta2");
const deta3 = document.querySelector(".deta3");
person.addEventListener("click", (e) => {
  const el = e.target.closest(".person").dataset.img;
  img.src = el;
  deta1.textContent = e.target.closest(".person").dataset.deta1;
  deta2.textContent = e.target.closest(".person").dataset.deta2;
  deta3.textContent = e.target.closest(".person").dataset.deta3;
} );