let form = document.getElementById("form");
console.log(form);

form.onsubmit = function (event) {
  // ngan chan hanh vi gui form mac dinh
  event.preventDefault();

  let email = form["email"].value.trim();
  let password = form["password"].value.trim();

  console.log(email);
  console.log(password);

  //   kiem tra tinh hop le cua du lieu
  let errEmail = document.getElementById("errEmail");
  let errPass = document.getElementById("errPass");
  //   reset lai thong bao loi
  errEmail.innerHTML = "";
  errPass.innerHTML = "";

  //   chuoi mat khau phai co it nhat 1 ky tu viet hoa
  let check = false; // mac dinh chuoi mat khau ban dau khong co ki tu viet hoa nao
  //   ngan123AcbGH@12
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "A" && password[i] <= "Z") {
      check = true;
      break;
    }
  }
  if (email == "") {
    // alert("vui long nhap email");
    errEmail.innerHTML = "vui long nhap email";
  } else if (!email.includes("@") || !email.includes(".")) {
    errEmail.innerHTML = "email khong hop le";
  } else if (password.length == 0) {
    // alert("vui long nhap mat khau");
    errPass.innerHTML = "vui long nhap mat khau";
  } else if (password.length < 6 || password.length > 20) {
    errPass.innerHTML = "mat khau phai tu 6 den 20 ky tu";
  } else if (!check) {
    errPass.innerHTML = "mat khau phai chua ki tu viet hoa";
  } else {
    alert("dang nhap thanh cong");
  }
};
