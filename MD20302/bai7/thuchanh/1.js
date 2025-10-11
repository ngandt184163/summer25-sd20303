let form = document.getElementById("myForm");
console.log(form);

let hoten = form.hoten; // lay ra the input name = hoten
let email = form.email; // lay ra the input name = email
let password = form.password; // lay ra the input name = password
let avatar = form.avatar; // lay ra the input name = avatar
console.log(hoten, email, password, avatar);

// lay ra cac the p chua loi
let err_hoten = document.getElementById("err_hoten");
let err_email = document.getElementById("err_email");
let err_password = document.getElementById("err_password");
let err_avatar = document.getElementById("err_avatar");
console.log(err_hoten, err_email, err_password, err_avatar);

// kich hoat su kien submit
form.onsubmit = function (e) {
  e.preventDefault(); // ngan chan hanh vi gui form mac dinh
  console.log(e);
  console.log(hoten.value, email.value, password.value, avatar.files);

  //   reset lai ttoan bo loi ve rong
  err_hoten.innerText = "";
  err_email.innerText = "";
  err_password.innerText = "";
  err_avatar.innerText = "";
  //   kiem tra du lieu trong ( 2 diem )
  if (hoten.value.trim() == "") {
    // alert("vui long nhap ho ten");
    err_hoten.innerText = "vui long nhap ho ten";
  } else if (email.value.trim() == "") {
    // alert("vui long nhap email");
    err_email.innerText = "vui long nhap email";
  } else if (password.value.trim() == "") {
    // alert("vui long nhap mat khau");
    err_password.innerText = "vui long nhap mat khau";
  } else if (avatar.files.length == 0) {
    // alert("vui long tai len anh");
    err_avatar.innerText = "vui long tai len anh";
  } else {
    alert("dang ky thanh cong");
  }
};

function sum(a, b, c) {
  console.log(arguments);
  let d = arguments[0] + arguments[1] + arguments[2];
  return d;
}

let result = sum(3, -7, 12);
console.log(result);
