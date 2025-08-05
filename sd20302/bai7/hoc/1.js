let form = document.getElementById("form");
console.log(form);

let mk = form["matkhau"];
mk.onblur = function () {
  console.log("Mật khẩu đã mất focus");
  if (mk.value.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự");
  }
};

let sdt = form["sdt"];
sdt.onchange = function () {
  console.log("Số điện thoại đã thay đổi");
  if (sdt.value.length < 10 || sdt.value.length > 11) {
    alert("Số điện thoại phải có từ 10 đến 11 ký tự");
  }
};

form.addEventListener("submit", function (event) {
  // ngan chặn hành động gui fomr mặc định của form
  event.preventDefault();
  console.dir(event);
  console.dir(event.target);
  let ten = form["ten"].value;
  let email = form["email"].value;
  let sdt = form["sdt"].value;
  let mk = form["matkhau"].value;
  console.log(ten, email, sdt, mk);
  //kiem tra tinh hop le cua du lieu tren form
  let err_ten = document.getElementById("err-ten");
  let err_email = document.getElementById("err-email");
  let err_sdt = document.getElementById("err-sdt");
  let err_matkhau = document.getElementById("err-matkhau");
  if (ten === "") {
    // alert("Tên không được để trống");
    err_ten.innerHTML = "Tên không được để trống";
  } else if (ten.length < 3 || ten.length > 20) {
    // alert("Tên phải từ 3 đến 20 ký tự");
    err_ten.innerHTML = "Tên phải từ 3 đến 20 ký tự";
  } else if (email === "") {
    err_ten.innerHTML = "";
    // alert("Email không được để trống");
    err_email.innerHTML = "Email không được để trống";
  } else if (sdt.length == 0) {
    err_email.innerHTML = "";
    // alert("Số điện thoại không được để trống");
    err_sdt.innerHTML = "Số điện thoại không được để trống";
  } else if (mk.length == 0) {
    err_sdt.innerHTML = "";
    // alert("Mật khẩu không được để trống");
    err_matkhau.innerHTML = "Mật khẩu không được để trống";
  } else {
    // nếu dữ liệu hợp lệ thì gửi đi
    alert("Dữ liệu hợp lệ, gửi đi");
    // có thể gọi hàm gửi dữ liệu lên server ở đây
  }
});

function test(a, b, c, d) {
  console.log(arguments[3]);
  console.log(arguments.length);
}

test(1, 2, 3, 4);
