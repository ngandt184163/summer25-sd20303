let h3 = document.getElementById("td3");
let h4 = document.getElementById("td4");
console.log(h3, h4);

// thay doi van ban
h3.innerText = "hello world";
// in ra noi dung
console.log(h4.textContent);
// thay doi noi dung bang the html
// h4.innerHTML = "<mark>xin chao</mark>";
// h4.innerHTML = "<i>in nghieng</i>";

// de giai quyet van de ghi de toan bo cua
// innerHTML ta su dung cach sau

// buoc 1: tao phan tu se them
let mark = document.createElement("mark");
mark.innerText = "xin chao";
let i = document.createElement("i");
i.innerText = "in nghieng";

// buoc 2: them vao phan tu cha
h4.appendChild(mark); // them vao cuoi
h4.prepend(i); // them vao dau

// xoa mark ra khoi h4
h4.removeChild(mark);

// xu li su kien

let btn1 = document.getElementById("btn1");
console.log(btn1);
// gan su kien click cho btn1
btn1.onclick = function () {
  let h2 = document.getElementById("td2");
  h2.innerText = "ABCXYZ";
};

// con co the su dung DOM de thay doi CSS
let p = document.getElementById("p1");
let btn2 = document.getElementById("btn2");
console.log(p, btn2);

btn2.onclick = function () {
  //   p.style.backgroundColor = "yellow";
  //   p.style.fontSize = "30px";

  // sd ham setAttribute de thay doi CSS
  p.setAttribute("style", "background-color: yellow; font-size: 30px;");
};

// ngoai ra setAttribute con dung de thay doi cac thuoc tinh khac
// nhu id, class, href, src, alt, .... hoac la
// cac thuoc tinh tu dinh nghia
let h5 = document.getElementById("td5");
console.log(h5);
// them class=td5 vao the h5
h5.setAttribute("class", "td5");
h5.setAttribute("data-id", "id12345");
// lay gia tri thuoc tinh
console.log(h5.getAttribute("class"));
console.log(h5.getAttribute("data-id"));

// thuc hanh them voi the input, a, img
