// console.dir(window);
// window.alert("xin chao");
// window.name = "Bom";
// console.log(window.document);
// console.log(window.screen.width);
// console.log(window.screen.height);

// document.write("version: " + navigator.version + "<br>");
// document.write("cookieEnabled: " + navigator.cookieEnabled);

// console.log(location.href);
// console.log(location.port);
// console.log(history.back());

// ham thao tac ve thoi gian
// let id1 = setTimeout(function () {
//   alert("xin chao");
// }, 10000);

// console.log(id1); //1
// let id2 = setTimeout(function () {
//   clearTimeout(id1);
//   console.log("xoa settimeout 1 thanh cong");
// }, 5000);
// console.log(id2); //2

// ham setInterval
// in ra cac so tu 1-10
let i = 1;
let id3 = setInterval(function () {
  console.log(i);
  i++;
  if (i > 10) {
    clearInterval(id3);
  }
}, 1000);
