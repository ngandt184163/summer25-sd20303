// lay phan tu bang id
let h2 = document.getElementById("tieude1");
console.log(h2);

// lay phan tu bang class, lay danh sach cac phan tu co
// cung class = abc
let hon_hop = document.getElementsByClassName("abc");
console.log(hon_hop);

console.log(hon_hop.length);
let h3 = hon_hop[0];
let p1 = hon_hop[1];
let div1 = hon_hop[2];
console.log(h3);
console.log(p1);
console.log(div1);
// lay tat ca cac phan tu co tagname = p
let p = document.getElementsByTagName("p");
console.log(p);
let p2 = p[0];
let p3 = p[1];
console.log(p2, p3.innerText);

// thuc hanh voi bien h2
// function test1() {
//   h2.innerHTML = "<i>hom nay la thu 5</i>";
//   h2.innerHTML =
//     "<p style='color: red'>test</p><p style='color: orange'>test</p>";
// }

// them phan tu bang ham appendChild
// tao phan tu va them phan tu vao the
let p4 = document.createElement("p");
p4.innerHTML = "test 1";
h2.appendChild(p4);
let a = document.createElement("a");
a.href = "https://www.google.com";
a.innerHTML = "google";
h2.appendChild(a);
// xoa phan tu khoi DOM
// h2.removeChild(p4);

// lay ra phan tu con dau, con cuoi,
// lay danh sach attributes,
// lay danh sach node con, node cha
// xu ly su kien bang DOM

// them con cho the h2
let div2 = document.createElement("div");
div2.innerHTML = "the div thu 2";
h2.appendChild(div2);

let p5 = document.createElement("p");
p5.innerHTML = "lorem ipsum 5";
h2.prepend(p5);
let firstChild = h2.firstElementChild;
let lastChild = h2.lastElementChild;
console.log(firstChild, lastChild);
console.log(h2.firstChild.firstChild);
console.log(h2.attributes);
console.log(h2.parentElement);
console.log(h2.childNodes);

// xu li su kien
h2.onclick = function () {
  h2.innerHTML = "<i>hom nay la thu 5</i>";
  h2.innerHTML =
    "<p style='color: red'>test</p><p style='color: orange'>test</p>";
};

function test1(el) {
  console.log(el);
}
