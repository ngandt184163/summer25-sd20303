let p = document.createElement("p");
p.textContent = "hi hi";
document.body.appendChild(p);
p.onmouseover = function () {
  p.style.backgroundColor = "red";
};
p.onmouseout = function () {
  p.style.backgroundColor = "";
};
