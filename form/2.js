let form = document.getElementById("form");
console.log(form);

let soluong1 = form["soluong1"]; // lay dược thẻ input có name= "soluong1"
let soluong2 = form["soluong2"]; // lay dc gia tri ng dung nhap vào thẻ input có name = "soluong2"
let soluong3 = form["soluong3"];

let thanhtien1 = form["thanhtien1"];
let thanhtien2 = form["thanhtien2"];
let thanhtien3 = form["thanhtien3"];

let tongtien = form["tongtien"];

console.log(soluong1, soluong2, soluong3);
soluong1.onchange = function () {
  thanhtien1.value = soluong1.value * 1000;
  tongtien.value =
    Number(thanhtien1.value) +
    Number(thanhtien2.value) +
    Number(thanhtien3.value);
};

soluong2.onchange = function () {
  thanhtien2.value = soluong2.value * 500;
  tongtien.value =
    Number(thanhtien1.value) +
    Number(thanhtien2.value) +
    Number(thanhtien3.value);
};
soluong3.onchange = function () {
  thanhtien3.value = soluong3.value * 2000;
  tongtien.value =
    Number(thanhtien1.value) +
    Number(thanhtien2.value) +
    Number(thanhtien3.value);
};

form.onsubmit = function (event) {
  event.preventDefault();
  let name = form["name"].value.trim();
  let phone = form["phone"].value.trim();

  let errName = document.getElementById("errName");
  let errPhone = document.getElementById("errPhone");

  //   reset lai thong bao loi
  errName.innerHTML = "";
  errPhone.innerHTML = "";
  if (name == "") {
    errName.innerHTML = "vui long nhap ten khach hang";
  } else if (phone == "") {
    errPhone.innerHTML = "vui long nhap so dien thoai";
  } else {
    alert("dat hang thanh cong\n so tien phai tra la: " + tongtien.value);
  }
};
