let h2 = document.getElementById("tieude2");
console.log(h2);

// xu li su kien
h2.onclick = function () {
  // sau khi click vao h2, ham nay se dc
  // thuc hien
  h2.innerHTML = "<i>tieu de 2</i>";
  //   thay doi chu thanh mau do
  //   h2.style.color = "red";
  //   //   font-size, background-color => backgroundColor
  //   h2.style.fontSize = "50px";
  //   h2.style.backgroundColor = "yellow";
  h2.setAttribute(
    "style",
    "color: red; font-size: 50px; background-color: yellow"
  );
  h2.setAttribute("class", "tieude2");
  let a = document.getElementById("link1");
  a.setAttribute("href", "https://www.google.com");
  a.setAttribute("data-id", "1");
  console.log(a.getAttribute("data-id"));
};

function test2(el) {
  console.log(el); // in ra the h3
}

// thay doi css cho 1 phan tu, 1 nhom phan tu
// them, xoa class,
// xu li su kien

let li = document.getElementsByTagName("li");
console.log(li);
let menu = document.getElementsByClassName("menu");
console.log(menu);
menu = menu[0];
console.log(menu); // se la the div.menu

menu.onmouseover = function () {
  for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = "pink";
  }
};

//
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let h4 = document.getElementById("tieude4");
btn1.onclick = function () {
  h4.classList.add("mau-nen");
};
btn2.onclick = function () {
  h4.classList.remove("mau-nen");
};

let btn3 = document.getElementById("btn3");
// btn3.onclick = function () {
//   h4.classList.toggle("mau-nen");
// };

// cach thu 3: xu li su kien
btn3.addEventListener("click", function () {
  h4.classList.toggle("mau-nen");
});
