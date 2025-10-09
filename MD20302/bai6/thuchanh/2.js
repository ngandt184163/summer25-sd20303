let arr = [
  "./img/anh1.jfif", // index = 0
  "./img/anh2.jfif", // index = 1
  "./img/anh3.jfif", // index = 2
  "./img/anh4.jfif", // index = 3
  "./img/anh5.jfif", // index = 4
];

// ban dau anh se la anh dau tien trong mang
let index = 0;
let img = document.getElementById("img");
// img.setAttribute("src", arr[index]);
img.src = arr[index];

function chaytudong() {
  return setInterval(function () {
    // kiem tra va thay doi anh
    index++;
    if (index == arr.length) {
      index = 0;
    }
    // gan anh moi
    img.src = arr[index];
  }, 3000);
}

let id = chaytudong();
// console.log(id);
// let id2 = setInterval(function () {}, 1000);
// console.log(id2);

let first = document.getElementById("first");
let stopp = document.getElementById("stopp");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let start = document.getElementById("start");
let last = document.getElementById("last");

first.onclick = function () {
  clearInterval(id);
  index = 0;
  img.src = arr[index];
  id = chaytudong();
};

last.onclick = function () {
  clearInterval(id);
  index = arr.length - 1;
  img.src = arr[index];
  id = chaytudong();
};

stopp.onclick = function () {
  // xoa chay tu dong
  if (id) {
    clearInterval(id);
  }
};

start.onclick = function () {
  // goi lai chay tu dong
  if (!id) {
    id = chaytudong();
  }
};

next.onclick = function () {
  clearInterval(id);
  index++;
  if (index == arr.length) {
    index = 0;
  }
  img.src = arr[index];
  id = chaytudong();
};
prev.onclick = function () {
  clearInterval(id);
  index--;
  if (index == -1) {
    index = arr.length - 1;
  }
  img.src = arr[index];
  id = chaytudong();
};
