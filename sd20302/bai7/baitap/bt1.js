let form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let ten = form["ten"].value;

  if (!ten) {
    alert("Tên không được để trống");
  }
});
