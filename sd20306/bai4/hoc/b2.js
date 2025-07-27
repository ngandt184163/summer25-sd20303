console.dir(window);
console.dir(document);

// window.name = "test name";
// console.log(window.name);

// window.alert("xin chao");

// let xoa = window.confirm("ban muon xoa");

// console.log(xoa);

// screen
console.log(screen.width);
console.log(screen.height);
console.log(screen.pixelDepth);

// location
console.log(location.href);
console.log(location.host);
console.log(location.pathname);

// history
// console.log(history.back());
// console.log(history.forward());
console.log(history.length);

// thuc hanh voi cac ham thoi gian

let id1 = setTimeout(function () {
  alert("quang cao dau goi dau");
}, 5000);
console.log("cho quang cao");

console.log(id1);
let id2 = setTimeout(function () {
  clearTimeout(id1);
  console.log("xoa quang cao thanh cong");
}, 3000);
console.log(id2);

let i = 1;
let id3 = setInterval(function () {
  console.log("xin chao" + i);
  i++;
}, 3000);

// lam dong ho dem nguoc tu 10 - 0
let j = 10;
let id4 = setInterval(function () {
  document.write(j + "<br>");
  j--;
  if (j == -1) {
    clearInterval(id4);
  }
}, 1000);
