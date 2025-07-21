let student = {
  name: "do chi cong",
  age: 19,
  grade: 9,
  study: function () {
    console.log(this.name + " dang hoc");
  },
};

function changGrade() {
  let n = parseFloat(prompt("nhap diem: "));
  student.grade = n;
  console.log(student);
}
