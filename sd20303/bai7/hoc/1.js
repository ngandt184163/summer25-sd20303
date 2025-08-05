let form = document.getElementById("form");
console.log(form);

let ten = form["ten"]; // day la the input
ten.onchange = function () {
  // ten.value la gia tri cua the input
  if (ten.value.length < 3 || ten.length > 20) {
    alert("Ten phai tu 3 den 20 ky tu");
  }
};

// cai dat du kien submit
form.onsubmit = function (event) {
  // ngan chan hanh dong mac dinh cua trinh duyet
  event.preventDefault();
  console.log(event);

  let ten = form["ten"].value;
  let email = form["email"].value;
  let sdt = form["sdt"].value;
  let mk = form["mk"].value;
  console.log(ten, email, sdt, mk);

  // kiem tra tinh hop le cua du lieu
  let err_ten = document.getElementById("err_ten");
  let err_email = document.getElementById("err_email");
  let err_sdt = document.getElementById("err_sdt");
  let err_mk = document.getElementById("err_mk");

  if (ten === "") {
    // alert("Ten khong duoc de trong");
    err_ten.innerHTML = "Ten khong duoc de trong";
  } else if (email === "") {
    err_ten.innerHTML = "";
    // alert("Email khong duoc de trong");
    err_email.innerHTML = "Email khong duoc de trong";
  } else if (sdt.length === 0) {
    err_email.innerHTML = "";
    // alert("So dien thoai khong duoc de trong");
    err_sdt.innerHTML = "So dien thoai khong duoc de trong";
  } else if (mk.length === 0) {
    err_sdt.innerHTML = "";
    // alert("Mat khau khong duoc de trong");
    err_mk.innerHTML = "Mat khau khong duoc de trong";
  } else if (mk.length < 8 || mk.length > 20) {
    // alert("Mat khau phai tu 8 den 20 ky tu");
    err_mk.innerHTML = "Mat khau phai tu 8 den 20 ky tu";
  } else {
    // neu tat ca deu hop le thi in ra thong bao
    alert("Dang ky thanh cong");
  }
};

function test(a, b, c, d) {
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[2]);
  console.log(c);
}

test(5, 6, 7, 8); // in ra 4 tham so
