let img = document.querySelector(".img");
function sothich(dovat) {
  if (dovat === "game") {
    img.src =
      "https://cdn.xtmobile.vn/vnt_upload/news/06_2024/Top-game-xay-nha-mien-phi-hay-nhat-minecraft-xtmobile.jpg";
  } else {
    img.src =
      "https://file.hstatic.net/1000341630/file/05fda95a9f423b1c6253_0d6acd3d8516438da78aa9d2db1fe1d3_2048x2048.jpg";
  }
}

// PH64456

// bai tap 3
function kiemtra(a) {
  if (a % 2 == 0) {
    return true;
  }
  return false;
}
console.log(kiemtra(9));
console.group(kiemtra(10));
// kiemtra(10);
// kiemtra(11);
