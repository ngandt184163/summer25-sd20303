let form = document.getElementById("myForm");
console.log(form);

// lay ra cac the input trong form
let hoten = form.hoten;
let email = form.email;
let password = form.password;
let avt = form.avt;
// lay ra cac the p chua loi
let err_hoten = document.getElementById("err_hoten");
let err_email = document.getElementById("err_email");
let err_passsword = document.getElementById("err_password");
let err_avt = document.getElementById("err_avt");
console.log(err_hoten, err_email, err_passsword, err_avt);

console.log(hoten, email, password, avt);
form.onsubmit = function (e) {
  e.preventDefault(); // chan su kien submit mac dinh cua form
  console.log(e);
  console.log(hoten.value, email.value, password.value, avt.files);

  // reset lai toan bo loi ve rong
  err_hoten.innerText = "";
  err_email.innerText = "";
  err_passsword.innerText = "";
  err_avt.innerText = "";

  //   kiem tra tinh hop le cua du lieu
  // 1. kiem tra du lieu trong ( 2 diem )
  if (hoten.value.trim() == "") {
    // alert("vui long nhap ho ten");
    err_hoten.innerText = "vui long nhap ho ten";
  } else if (email.value.trim().length == 0) {
    // alert("vui long nhap email");
    err_email.innerText = "vui long nhap email";
  } else if (password.value.trim().length == 0) {
    // alert("vui long nhap password");
    err_passsword.innerText = "vui long nhap password";
  } else if (
    password.value.trim().length < 8 ||
    password.value.trim().length > 20
  ) {
    // alert("vui long nhap password tu 8 den 20 ky tu");
    err_passsword.innerText = "vui long nhap password tu 8 den 20 ky tu";
  } else if (avt.files.length == 0) {
    // alert("vui long tai len anh");
    err_avt.innerText = "vui long tai len anh";
  } else {
    alert("ban da dang ky thanh cong");
  }
};

password.onblur = function () {
  // kiem tra tinh hop le cua du lieu
  password.value = password.value.trim();
  // let msg ="";
  // if (password.value.length < 8 || password.value.length > 20) {
  //   err_passsword.innerText = "vui long nhap password tu 8 den 20 ky tu";
  // }
  //pass<3 tb mk yeeu
  if (password.value.length < 3) {
    err_passsword.innerText = "mk yeu";
    err_passsword.style.color = "red";
  } //3 <= password < 8 : mật khẩu trung bìn
  else if (password.value.length >= 3 && password.value.length < 8) {
    err_passsword.innerText = "mk trung binh";
    err_passsword.style.color = "yellow";
  } else {
    err_passsword.innerText = "mk manh";
    err_passsword.style.color = "green";
  }
};

// function sum(a, b, c) {
//   console.log(arguments);
//   let d = arguments[0] + arguments[1] + arguments[2];
//   return d;
// }

// let d = sum(1, 8, -5);
// console.log(d);
