xyz = "hello";
console.log(xyz);

let form = document.getElementById("form");
console.log(form);
let err_ten = document.getElementById("err_ten");
let err_email = document.getElementById("err_email");
let err_mk = document.getElementById("err_matkhau");
let err_sdt = document.getElementById("err_sdt");
console.log(err_ten, err_email, err_mk, err_sdt);

let ten = form["ten"]; // cach lay the input theo ten
ten.onblur = function (event) {
  console.log(event);
  if (ten.value.length < 3 || ten.length > 20) {
    // alert("Ten phai tu 3 den 20 ky tu");
    err_ten.innerHTML = "Ten phai tu 3 den 20 ky tu";
  }
};

form.onsubmit = function (event) {
  // ngan chan hanh dong mac dinh cua form
  event.preventDefault();
  // xoa toan bo thong bao loi
  err_ten.innerHTML = "";
  err_email.innerHTML = "";
  err_mk.innerHTML = "";
  err_sdt.innerHTML = "";
  // ======================
  console.log(event);
  let ten = form["ten"].value;
  let email = form["email"].value;
  let mk = form["matkhau"].value;
  let sdt = form["sdt"].value;

  console.log(ten, email, mk, sdt);
  //   kiem tra tinh hop le cua du lieu
  if (ten === "") {
    // alert("Ten khong duoc de trong");
    err_ten.innerHTML = "Ten khong duoc de trong";
  } else if (email === "") {
    // alert("Email khong duoc de trong");
    // err_ten.innerHTML = "";
    err_email.innerHTML = "Email khong duoc de trong";
  } else if (mk.length === 0) {
    // alert("Mat khau khong duoc de trong");
    // err_email.innerHTML = "";
    err_mk.innerHTML = "Mat khau khong duoc de trong";
  } else if (mk.length < 8 || mk.length > 20) {
    // alert("Mat khau phai tu 8 den 20 ky tu");
    err_mk.innerHTML = "Mat khau phai tu 8 den 20 ky tu";
  } else if (sdt.length === 0) {
    // alert("So dien thoai khong duoc de trong");
    // err_mk.innerHTML = "";
    err_sdt.innerHTML = "So dien thoai khong duoc de trong";
  } else {
    alert("Dang ky thanh cong");
  }
};
