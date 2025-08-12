let form = document.getElementById("form");
console.log(form);

form.onsubmit = function (event) {
  // ngan chan hanh dong gui du lieu mac dinh cua trinh duyet
  event.preventDefault();

  let avt = form["avt"].files;
  console.log(avt);
  avt = avt[0];
  console.log(avt);

  //   kiem tra tinh hop le cua du lieu
  if (!avt) {
    alert("Khong co tap tin nao duoc chon");
  } else if (avt.type !== "image/jpeg") {
    alert("Tap tin phai la dinh dang anh");
  }
  //   kich thuoc toi da cua anh la 500KB
  else if (avt.size > 500 * 1024) {
    alert("Tap tin chi co kich thuoc toi da 500KB");
  } else {
    alert("Da cap nhat thanh cong");
  }
};

// lay vi tri nguoi dung
let btn = document.getElementById("btn");

btn.onclick = function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  });
};

// media on page
let video = document.getElementById("video");
let play = document.getElementById("play");
let pause = document.getElementById("pause");

play.onclick = function () {
  video.play();
};
pause.onclick = function () {
  video.pause();
};
