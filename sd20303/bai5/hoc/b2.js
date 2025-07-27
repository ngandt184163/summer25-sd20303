// tra ve the dau tien co id = h1
let h1 = document.getElementById("h1");
console.log(h1);
// console.log(h1.parentNode);

// tra ve danh sach cac the co class = side-bar
let div1 = document.getElementsByClassName("side-bar");
console.log(div1);
console.log(div1[0]);
console.log(div1[1]);

// tra ve danh sach cac the co cung tagname = p
let p = document.getElementsByTagName("p");
console.log(p);
console.log(p[0]);
console.log(p[1]);

h1.innerHTML = "tim hieu ve dom";

let p1 = document.createElement("p");
p1.innerHTML = "nguyen van a";
h1.appendChild(p1);

let li = document.getElementsByTagName("li");
console.log(li);

let ul = document.getElementsByTagName("ul")[0];
console.log(ul);
let p2 = document.createElement("p");
p2.innerHTML = "nguyen van b";
ul.appendChild(p2);

let li1 = document.createElement("li");
li1.innerHTML = "nguyen van c";
ul.prepend(li1);

ul.removeChild(ul.firstElementChild);
console.log(ul.parentElement);
console.log(ul.firstChild);

let arr = ["html", "css", "js"];
for (let i = 0; i < arr.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = arr[i];
  ul.appendChild(li);
}
