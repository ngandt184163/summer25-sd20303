// 1. tao doi tuong sinh vien
let student1 = {
  name: "nguyen van a",
  age: 19,
  address: "ha noi",
  khoahoc: "k20",
  dangkylop: function (khoahoc) {
    console.log(this.name + " dang ky lop " + khoahoc + "thanh cong");
  },
  huylop: function (khoahoc) {
    console.log(this.name + " huy lop " + khoahoc + "thanh cong");
  },
  baoluu: function (kyhoc) {
    console.log(this.name + " bao luu lop " + kyhoc + "thanh cong");
  },
};

// 1. tao doi tuong sinh vien
let student2 = {
  name: "nguyen van b",
  age: 19,
  address: "ha noi",
  khoahoc: "k19",
  dangkylop: function (khoahoc) {
    console.log(this.name + " dang ky lop " + khoahoc + "thanh cong");
  },
  huylop: function (khoahoc) {
    console.log(this.name + " huy lop " + khoahoc + "thanh cong");
  },
  baoluu: function (kyhoc) {
    console.log(this.name + " bao luu lop " + kyhoc + "thanh cong");
  },
};

// 1. tao doi tuong sinh vien
let student3 = {
  name: "nguyen van c",
  age: 29,
  address: "ha noi",
  khoahoc: "k20.3",
  dangkylop: function (khoahoc) {
    console.log(student3.name + " dang ky lop " + khoahoc + " thanh cong");
  },
  huylop: function (khoahoc) {
    console.log(this.name + " huy lop " + khoahoc + " thanh cong");
  },
  baoluu: function (kyhoc) {
    console.log(this.name + " bao luu ky " + kyhoc + " thanh cong");
  },
};

console.log(student1);
console.log(student2);
console.log(student3);

console.log(student3.name, student3.address);
student3.huylop("lap trinh co so voi js");
student3.baoluu("3");

// 2. tao lop

function Student(name, age, address, khoahoc) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.khoahoc = khoahoc;
  this.dangkylop = function (khoahoc) {
    console.log(this.name + " dang ky lop " + khoahoc + " thanh cong");
  };
  this.huylop = function (khoahoc) {
    console.log(this.name + " huy lop " + khoahoc + " thanh cong");
  };
  this.baoluu = function (kyhoc) {
    console.log(this.name + " bao luu lop " + kyhoc + " thanh cong");
  };
}

let student4 = new Student("nguyen van d", 19, "ha noi", "k20");
let student5 = new Student("nguyen van e", 22, "ha noi", "k20.3");
console.log(student4, student5);
student5.dangkylop("Lap trinh JAVA");
console.log(student5.khoahoc);

// mang luu tru sinh vien
let arr_student = [
  student1,
  student2,
  student3,
  student4,
  student5,
  new Student("nguyen van f", 19, "ha noi", "k19"),
];
console.log(arr_student);

console.log(arr_student[5].name);

// in danh sach sinh vien ra man hinh
for (let index = 0; index < arr_student.length; index++) {
  document.write(`<div class="student-info">
      <h3>${arr_student[index].name}</h3>
      <h4>${arr_student[index].age}</h4>
      <h5>${arr_student[index].address}</h5>
      <h6>${arr_student[index].khoahoc}</h6>
  </div>`);
  //   document.write(
  //     '<div class="student-info"><h3>' +
  //       arr_student[index].name +
  //       "</h3><h4>" +
  //       arr_student[index].age +
  //       "</h4><h5>" +
  //       arr_student[index].address +
  //       "</h5><h6>" +
  //       arr_student[index].khoahoc +
  //       "</h6></div>"
  //   );
}
