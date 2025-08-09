let form = document.getElementById("form");
console.log(form);

form.onsubmit = function (event) {
  // ngan chan hanh dong gui du lieu mac dinh cua trinh duyet
  event.preventDefault();

  let avt = form["avt"].files[0]; // lay phan tu dau tien trong mang
  console.log(avt);

  //   kiem tra xem co tap tin nao duoc chon hay khong
  if (avt) {
    console.log("Ten tap tin:", avt.name);
    console.log("Kich thuoc tap tin:", avt.size, "bytes");

    if (avt.type !== "image/jpeg") {
      alert("Tap tin phai la dinh dang anh");
    }

    // chi duoc tai len tap tin co kich thuoc toi da 2MB
    if (avt.size > 2 * 1024 * 1024) {
      alert("Tap tin phai co kich thuoc toi da 2MB");
    }
  } else {
    alert("Khong co tap tin nao duoc chon");
  }
};

// lay vi tri nguoi dung
let btn = document.getElementById("btn");

btn.onclick = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Trinh duyet khong ho tro vi tri");
  }
};

function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  console.log("Vi tri hien tai:", lat, long);
  alert("Vi tri hien tai: " + lat + ", " + long);
}

let play = document.getElementById("play");
let pause = document.getElementById("pause");
let video = document.getElementById("video");

play.onclick = function () {
  video.play();
};
pause.onclick = function () {
  video.pause();
};
