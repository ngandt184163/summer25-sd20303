let email = document.getElementById("email");

email.onblur = function () {
  if (email.value.length < 5) {
    alert("Email phai co it nhat 5 ky tu");
  }
};

//PH59366
