let box1 = document.getElementById("box1");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

// xu li su kien bang ham addEventListener
btn1.addEventListener("click", function () {
  // khi click vao btn1 thi se them class red
  // cho box1
  box1.classList.add("red");
});

btn2.addEventListener("click", function () {
  // khi click vao btn2 thi se xoa class red
  // khoi box1
  box1.classList.remove("red");
});

let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function () {
  // khi click vao btn2 thi kiem tra neu box1 da
  //   co class red thi xoa di, chua co thi them vao
  box1.classList.toggle("red");
});

let btn4 = document.getElementById("btn4");
let menu = document.getElementById("menu");
btn4.addEventListener("click", function () {
  menu.classList.toggle("none");
});
