let p = document.getElementById("position");
let btn1 = document.getElementById("btn1");

btn1.onclick = function () {
  // kiem tra xem trinh duyet co ho tro khong
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    // neu trinh duyet k ho tro thi thong bao
    p.innerText = "trinh duyet khong ho tro vi tri";
  }
};

function showPosition(position) {
  p.innerHTML =
    "Vi do: " +
    position.coords.latitude +
    "<br></br>" +
    "Kinh Do: " +
    position.coords.longitude;
}

showData("hello cac ban");
