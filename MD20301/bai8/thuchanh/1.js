let p = document.getElementById("position");
let btn1 = document.getElementById("btn1");

btn1.onclick = function () {
  // kiem tra xem trinh duyet co ho tro
  // lay vi tri hay khong
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    p.innerText = "trinh duyet khong ho tro hien thi vi tri";
  }
};

// ham hien thi vi tri
function showPosition(position) {
  p.innerHTML =
    "Vi do: " +
    position.coords.latitude +
    "<br></br>" +
    "Kinh do: " +
    position.coords.longitude;
}

showData("hello my friend");

let myVideo = document.getElementById("myVideo");
let btnVideo = document.getElementById("btnVideo");

btnVideo.onclick = function playVideo() {
  if (myVideo.paused) {
    myVideo.play();
  } else {
    myVideo.pause();
  }
};
