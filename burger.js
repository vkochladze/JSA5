let burger = document.querySelector(".burger");
let xmark = document.querySelector(".xmark");
let nav = document.querySelector(".header_nav");

burger.addEventListener("click", () => {
  burger.style.display = "none";
  xmark.style.display = "block";
  nav.classList.add("show");
});

xmark.addEventListener("click", () => {
  burger.style.display = "block";
  xmark.style.display = "none";
  nav.classList.remove("show");
});
