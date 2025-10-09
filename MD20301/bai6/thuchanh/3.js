let arr = [
  "./img/anh1.jfif", // index = 0
  "./img/anh2.jfif", // index = 1
  "./img/anh3.jfif", // index = 2
  "./img/anh4.jfif", // index = 3
  "./img/anh5.jfif", // index = 4
];

// gan index = 0 vi khoa cua mang chay tu 0
let index = 0;

// lay the img
let img = document.getElementById("img");
// ban dau gan anh dau tien
img.src = arr[index];

/**
 * de anh chuyen dong ta se dung ham setInterval
 * - ham nay se thuc hien 1 cong viec lap di lap
 * lai sau 1 khoang thoi gian giong nhau
 */

function chaytudong() {
  return setInterval(function () {
    /**
     * neu nhu index con nho hon do dai mang - 1
     * thi tang index len 1
     */
    if (index < arr.length - 1) {
      index++;
    } else {
      // neu index bang do dai mang - 1
      //  tuc la da chay den anh cuoi cung
      // thi ta gan lai index = 0 de chay lai tu dau
      index = 0;
    }

    // gan anh moi
    img.src = arr[index];
  }, 3000);
}

// goi ham de anh chay tu dong
let idSetInterval = chaytudong();

// =========================
let first = document.getElementById("first");
let stopp = document.getElementById("stop");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let start = document.getElementById("start");
let last = document.getElementById("last");

first.onclick = function () {
  index = 0;
  // gan anh moi
  img.src = arr[index];
};

last.onclick = function () {
  index = arr.length - 1;
  // gan anh moi
  img.src = arr[index];
};
prev.onclick = function () {
  index--;
  if (index < 0) {
    index = arr.length - 1;
  }
  img.src = arr[index];
};
next.onclick = function () {
  index++;
  if (index > arr.length - 1) {
    index = 0;
  }
  img.src = arr[index];
};

stopp.onclick = function () {
  // ham nay dung de xoa chay tu dong bang id khi
  // khoi tao setInterval chay tu dong
  clearInterval(idSetInterval);
};

start.onclick = function () {
  // goi lai ham chay tu dong
  idSetInterval = chaytudong();
};
