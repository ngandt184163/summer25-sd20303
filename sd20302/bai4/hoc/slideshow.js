let arr = [
  "./img/anh1.jfif",
  "./img/anh2.jfif",
  "./img/anh3.jfif",
  "./img/anh4.jfif",
];

let index = 0; // index cua mang bat dau tu 0
let len = arr.length; // so luong anh

setInterval(function () {
  if (index >= len) index = 0;
  document.write("<img src='" + arr[index] + "'>");
  index++;
}, 2000);
