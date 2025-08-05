let imga = document.getElementById("img");
imga.onclick = function () {
  if (imga.getAttribute("src") === "taixuong.jfif") {
    imga.setAttribute("src", "1.jfif");
  } else {
    imga.setAttribute("src", "taixuong.jfif");
  }
};

// diem cong binh thuong: Binh
