let arr = [
  "./img/anh1.jfif",
  "./img/anh2.jfif",
  "./img/anh3.jfif",
  "./img/anh4.jfif",
  "./img/anh5.jfif",
];

let index = 0; // Biến để lưu chỉ số ảnh hiện tại va bat dau tu 0
let len = arr.length; // Lấy độ dài của mảng ảnh, so luong anh
let img = document.getElementById("img"); // Lấy thẻ img từ HTML
img.setAttribute("src", arr[index]); // Thiết lập ảnh đầu tiên

// cai dat mot ham de chay anh tu dong, tu dong
// thay doi anh sau 3 giay
function chaytudong() {
  return setInterval(function () {
    if (index >= len - 1) {
      index = 0; // Nếu đã đến ảnh cuối cùng, quay lại ảnh đầu tiên
    } else {
      index++; // Tăng chỉ số ảnh hiện tại
    }
    img.setAttribute("src", arr[index]); // Cập nhật ảnh hiển thị
  }, 3000); // thay doi anh sau 3 giay
}

let id_interval = chaytudong(); // Gọi hàm để bắt đầu slideshow

// nut next
let next = document.getElementById("next");
next.onclick = function () {
  clearInterval(id_interval); // Dừng slideshow hiện tại
  if (index >= len - 1) {
    index = 0; // Nếu đã đến ảnh cuối cùng, quay lại ảnh đầu tiên
  } else {
    index++; // Tăng chỉ số ảnh hiện tại
  }
  img.setAttribute("src", arr[index]); // Cập nhật ảnh hiển thị
  id_interval = chaytudong(); // Bắt đầu lại slideshow
};

// nut pre
let prev = document.getElementById("prev");
prev.onclick = function () {
  clearInterval(id_interval); // Dừng slideshow hiện tại
  if (index <= 0) {
    index = len - 1; // Nếu đã đến ảnh cuối cùng, quay lại ảnh đầu tiên
  } else {
    index--; // Tăng chỉ số ảnh hiện tại
  }
  img.setAttribute("src", arr[index]); // Cập nhật ảnh hiển thị
  id_interval = chaytudong(); // Bắt đầu lại slideshow
};
//stop
let stop = document.getElementById("stop");
stop.onclick = function () {
  clearInterval(id_interval);
  img.setAttribute("src", arr[index]);
};
//start
let start = document.getElementById("start");
start.onclick = function () {
  clearInterval(id_interval);
  img.setAttribute("src", arr[index]);
  id_interval = chaytudong();
};

// first

let first = document.getElementById("first");
let last = document.getElementById("last");

first.addEventListener("click", () => {
  clearInterval(id_interval);
  index = 0;
  img.setAttribute("src", arr[index]);
  id_interval = chaytudong();
});

last.addEventListener("click", () => {
  clearInterval(id_interval);
  index = len - 1;
  img.setAttribute("src", arr[index]);
  id_interval = chaytudong();
});
// ph64456
