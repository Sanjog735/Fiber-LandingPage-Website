"use-sctrict";

const menuBtn = document.querySelector(".header__mobile-nav");
const header = document.querySelector(".header");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
