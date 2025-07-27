// lay thong qua id
let h1 = document.getElementById("h2");
console.log(h1);
console.log(h1.parentNode);

// lay thong qua class
let h2 = document.getElementsByClassName("h2")[0];
console.log(h2);
console.log(h2.attributes);

// lay thong qua tag name
let h3 = document.getElementsByTagName("h2")[0];
console.log(h3);
console.log(h3.attributes);

let li1 = document.getElementsByClassName("sub-nav-li");
console.log(li1);

let li2 = document.getElementsByTagName("li");
console.log(li2);
console.log(li1[3]);

// loi
// let test = document.getElementById("test");
// console.log(test);
// test.style.color = "red";

// thuc hanh thao tac voi the h2
console.log(h2.innerHTML);
h2.innerHTML = "<i>hello world</i>";
console.log(h2.attributes);

let ul = document.getElementById("sub-nav-ul");
console.log(ul);
// console.log(ul.children[0]);
// console.log(ul.children[3]);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

let div = document.getElementById("div2");
console.log(div);

let h5 = document.createElement("h5");
h5.innerHTML = "<del>tieu de 5</del>";
div.appendChild(h5);
let h6 = document.createElement("h6");
h6.innerHTML = "tieu de 6";
div.prepend(h6);
h5.innerHTML = "<del>tieu de 5 moi</del>";
// xoa element
// div.removeChild(h5);
let p1 = document.getElementById("p1");
div.removeChild(p1);
