let lis = document.getElementsByTagName("li");
let ul = document.getElementById("myList");

// ul.onclick = function() {

// }

ul.addEventListener("mouseover", function () {
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = "yellow";
  }
});

// ==================
let box1 = document.getElementById("box1");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.onclick = function () {
  // them class red cho box 1
  box1.classList.add("red");
};

btn2.onclick = function () {
  // xoa class red khoi box 1
  box1.classList.remove("red");
};

btn3.onclick = function () {
  // them class red cho box 1 neu chua co
  // xoa class red neu dang co
  box1.classList.toggle("red");
};

let menu = document.getElementById("menu");
let btn4 = document.getElementById("btn4");

btn4.addEventListener("click", function () {
  menu.classList.toggle("none");
});
