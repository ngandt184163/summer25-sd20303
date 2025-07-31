let h2 = document.getElementById("tieude1");
console.log(h2);

h2.onclick = function () {
  h2.innerHTML = "<i>thay doi css thong qua dom</i>";
  //   h2.style.color = "red";
  //   h2.style.fontSize = "50px";
  //   h2.style.backgroundColor = "pink";
  h2.setAttribute(
    "style",
    "color: red; font-size: 50px; background-color: pink"
  );

  h2.setAttribute("class", "test1");
  h2.setAttribute("data-id", "1");
};

function test2(a) {
  console.log(a);
}

// backgoround-color => backgroundColor

let a = document.getElementById("link1");
console.log(a);
a.onmouseover = function () {
  //   a.setAttribute("href", "https://www.google.com");
  a.href = "https://www.google.com";
};

let li = document.getElementsByTagName("li");
console.log(li);
let menu = document.getElementsByClassName("menu");
console.log(menu);
menu = menu[0];
console.log(menu);

menu.onclick = function () {
  //   doi mau nen cho toan bo the li
  for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = "yellow";
  }
};

// them xoa class
let btn1 = document.getElementById("btn1");
console.log(btn1);
btn1.onclick = function () {
  btn1.classList.add("bong");
};

let btn2 = document.getElementById("btn2");
console.log(btn2);
btn2.onclick = function () {
  btn1.classList.remove("bong");
};

let btn3 = document.getElementById("btn3");
console.log(btn3);
// btn3.onclick = function () {
//   btn3.classList.toggle("bong");
// };

// xu li su kien
btn3.addEventListener("click", function () {
  btn3.classList.toggle("bong");
});

// thuc hanh lam slide show: chay tu dong
// hieu ung doi anh: tu thuc hanh
