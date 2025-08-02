let arr = [
  "../img/anh1.jfif", // index 0
  "../img/anh2.jfif", // index 1
  "../img/anh3.jfif", // index 2
  "../img/anh4.jfif", // index 3
  "../img/anh5.jfif", // index 4
];

let index = 0; // chi so index cua mang bat dau tu 0
let len = arr.length; // so luong anh trong mang: len = 5
let img = document.getElementById("img"); // lay the img trong html
img.src = arr[index]; // gan anh dau tien vao the img
// img.setAttribute("src", arr[index]); // gan thuoc tinh src cho the img

function chaytudong() {
  return setInterval(function () {
    if (index < len - 1) {
      index++; // tang index len 1
      img.src = arr[index]; // gan anh tiep theo vao the img
    } else {
      index = 0; // neu index bang len - 1 thi gan lai index = 0
      img.src = arr[index]; // gan anh dau tien vao the img
    }
  }, 3000); // thuc hien ham moi 3 giay
}

let id_interval = chaytudong(); // bat dau chay tu dong

// nut next
let next = document.getElementById("next");
next.onclick = function () {
  clearInterval(id_interval); // dung chay tu dong
  if (index < len - 1) {
    index++; // tang index len 1
    img.src = arr[index]; // gan anh tiep theo vao the img
  } else {
    index = 0; // neu index bang len - 1 thi gan lai index = 0
    img.src = arr[index]; // gan anh dau tien vao the img
  }
  id_interval = chaytudong(); // bat dau chay tu dong lai
};
// nut prev
let pre = document.getElementById("pre");
pre.onclick = function () {
  clearInterval(id_interval); // dung chay tu dong
  if (index > 0) {
    index--; // giam index xuong 1
    img.src = arr[index]; // gan anh truoc do vao the img
  } else {
    index = len - 1; // neu index bang 0 thi gan lai index = len - 1
    img.src = arr[index]; // gan anh cuoi cung vao the img
  }
  id_interval = chaytudong(); // bat dau chay tu dong lai
};

//btn start
let start = document.getElementById("start");
start.onclick = function () {
  clearInterval(id_interval); // dung chay tu dong
  id_interval = chaytudong(); // bat dau chay tu dong lai
};

//btn stop
let stop = document.getElementById("stop");
stop.onclick = function () {
  clearInterval(id_interval); // dung chay tu dong
  id_interval = null; // gan id_interval = null de khong chay tu dong nua
};
//PH58408

//btn fisrt
let first = document.getElementById("first");
first.onclick = function () {
  index = 0;
  img.src = arr[index];
};

//btn last
let last = document.getElementById("last");
last.onclick = function () {
  index = len - 1;
  img.src = arr[index];
};
//ph59756
