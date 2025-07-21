let student1 = {
  name: "Nguyen Van A",
  age: 25,
  address: "Ha Noi",
  gender: "male", // con trai

  work: function (job) {
    console.log(student1.name + " dang lam " + job);
  },
};

let student2 = {
  name: "Nguyen Van B",
  age: 25,
  address: "Ha Noi",
  gender: "male", // con trai

  work: function (job) {
    console.log(student2.name + " dang lam " + job);
  },
};
let student3 = {
  name: "Nguyen Van C",
  age: 25,
  address: "Ha Noi",
  gender: "male", // con trai

  work: function (job) {
    console.log(student3.name + " dang lam " + job);
  },
};
console.log(student1);
console.log(student2);
console.log(student3);

console.log(student3.name);
console.log(student3.age);
console.log(student3.address);
console.log(student3.gender);
student3.work("sinh vien");

// thay doi thong tin sinh vien (sd cu phap gan)
student3.age = 18;
console.log(student3);
// them thong tin sinh vien
student3.cpa = 2.99;
console.log(student3);

// tao lop sinh vien
function Student(name, age, address, gender) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.gender = gender;
  this.work = function (job) {
    console.log(this.name + " dang lam " + job);
  };
}
let student4 = new Student("Nguyen Van D", 25, "Ha Noi", "male");
let student5 = new Student("Nguyen Van E", 25, "Ha Noi", "female");
console.log(student4);
console.log(student5);

let arr_student = [
  student1,
  student2,
  student3,
  student4,
  student5,
  new Student("Nguyen Van F", 25, "Ha Noi", "female"),
];
console.log(arr_student);

for (let i = 0; i < arr_student.length; i++) {
  //   document.write(
  //     '<div class="std-info"><h2>' +
  //       arr_student[i].name +
  //       "</h2><h3>" +
  //       arr_student[i].age +
  //       "</h3><h4>" +
  //       arr_student[i].address +
  //       "</h4><h5>" +
  //       arr_student[i].gender +
  //       "</h5></div>"
  //   );

  document.write(`
  <div class="std-info">
      <h2>${arr_student[i].name}</h2>
      <h3>${arr_student[i].age}</h3>
      <h4>${arr_student[i].address}</h4>
      <h5>${arr_student[i].gender}</h5>
  </div>
  `);
}
