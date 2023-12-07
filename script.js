const title = document.querySelector(".title");
const image = document.querySelector(".image");

title.style.color = "red";
title.style.fontSize = "30px";

image.style.width = "700px";

for (let i = 1; i < 4; i++) {
  const pDiv = document.querySelector(".pDiv");
  let p = document.createElement("p");

  p.textContent = "text";

  document.body.children[i].appendChild(p);
}

const box = document.querySelector(".box");
let a = document.createElement("a");

a.href = "https://google.com";
a.target = "_blank";
a.textContent = " google link ";

box.appendChild(a);
