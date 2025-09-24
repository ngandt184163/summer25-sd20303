let drag = document.getElementById("drag");
let drop = document.getElementById("drop");
console.log(drag, drop);

// su kien dragstart kich hoat khi bat dau keo
drag.ondragstart = function (e) {
  // API dung de truyen du lieu giua drag va drop
  // setData: luu du lieu de lay khi drop
  e.dataTransfer.setData("text", drag.id);
};

drop.ondragover = function (e) {
  //  mac dinh nhieu phan tu khong cho phep
  //  drop nen goi ham nay de no cho phep
  e.preventDefault();
};

drop.ondrop = function (e) {
  e.preventDefault();
  //   khi tha ra lay du lieu o setData de truyen vao
  let data = e.dataTransfer.getData("text");
  //   gan phan tu duoc keo vao vung drop
  drop.appendChild(document.getElementById(data));
};

// -----------
// luu tru data
function saveData() {
  localStorage.setItem("username", "ngandt35");
}

// hien thi du lieu
function showData() {
  document.write(localStorage.getItem("username"));
}

// xoa du lieu khoi local storage
function clearData() {
  localStorage.removeItem("username");
}

// =====================
function getLocation() {
  // kiem tra xem trinh duyet co ho tro lay vi tri hay khong
  //  neu co thi goi ham showPos
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPos);
  } else {
    // neu khong ho tro thi hien thi thong bao cho ng dung
    alert("trinh duyet khong ho tro hien thi vi tri");
  }
}

// lấy vị trí hiện tại
function showPos(pos) {
  document.getElementById("vitri").innerHTML =
    "vi do: " + pos.coords.latitude + "kinh do: " + pos.coords.longitude;
}
