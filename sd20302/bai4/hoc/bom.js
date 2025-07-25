console.dir(window);
// window.alert("xin chao");
// window.confirm("ban muon xoa");
// window.prompt("nhap ten cua ban");
console.log(window.innerHeight);
console.log(screen.width);
console.log(screen.height);
console.log(location.href);

alert("hehe");
// let id1 = setTimeout(function () {
//   console.log("hom nay la thu 5");
// }, 3000);

// let id2 = setTimeout(function () {
//   console.log("huhu");
// }, 1000);

// console.log(id1, id2);

let id3 = setTimeout(function () {
  console.log("xoa cai nay di");
}, 10000);

let id4 = setTimeout(function () {
  console.log("setTimeout 4");
  clearTimeout(id3);
}, 3000);

// tao dong ho dem giay tu 1- 10
let giay = 1;
let id5 = setInterval(function () {
  console.log(giay);
  if (giay == 10) {
    clearInterval(id5);
  }
  giay++;
}, 1000);
