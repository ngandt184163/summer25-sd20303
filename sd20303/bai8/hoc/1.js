// let x = 2;
// let y = "hello";
// console.log(x + y); // This will log "2hello" because of type coercion
// console.log(typeof x); // This will log "number"

// let z = 3.14;
// let t = y * z;
// console.log(t); // This will log "hello3.14" because of type coercion

// xyz = "hello world";
// console.log(xyz); // This will log "hello world"

// bai so 8
let form = document.getElementById("form");
console.log(form);

form.onsubmit = function (event) {
  // ngan chan hanh vi gui form mac dinh
  event.preventDefault();

  let avt = form["avt"].files;
  avt = avt[0]; // lay file dau tien trong danh sach file
  console.log(avt);
  //   console.log("Ten tap tin:", avt.name, avt.size, avt.type);

  //   kie tra tinh hop le cua du lieu
  if (!avt) {
    alert("Khong co tap tin nao duoc chon");
  } else if (avt.type !== "image/jpeg") {
    alert("Tap tin phai la dinh dang anh");
  } else if (avt.size > 500 * 1024) {
    alert("Tap tin chi co kich thuoc toi da 500KB");
  }
};

let btn = document.getElementById("btn");
btn.onclick = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Trình duyệt của bạn không hỗ trợ geolocation");
  }
};

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  alert(
    "Vị trí hiện tại: " +
      position.coords.latitude +
      ", " +
      position.coords.longitude
  );
}

let video = document.getElementById("video");
let play = document.getElementById("play");
let pause = document.getElementById("pause");

play.onclick = function () {
  video.play();
};

pause.onclick = function () {
  video.pause();
};
