let student1 = {
  name: "nguyen van a",
  age: 18,
  address: "thanh hoa",
  work: function (job) {
    console.log(student1.name + " dang " + job + " o " + student1.address);
  },
};

let student2 = {
  name: "nguyen van b",
  age: 23,
  address: "da nang",
  work: function (job) {
    console.log(student2.name + " dang " + job + " o " + student2.address);
  },
};

let student3 = {
  name: "nguyen van c",
  age: 24,
  address: "ha giang",
  work: function (job) {
    console.log(student3.name + " dang " + job + " o " + student3.address);
  },
};

console.log(student1);
console.log(student2);
console.log(student3);

console.log(student3.name);
console.log(student3.age);
console.log(student3.address);
student3.work("sinh vien");

// thay doi thong tin (gan lai gia tri)
student3.name = "Dinh Van Nam";
console.log(student3.name);
student3.work("sinh vien");

// them thong tin : cpa
student3.cpa = 3.2;
console.log(student3);

// class: la khuon mau(thiet ke mau) de tao ra cac doi tuong co cung cau truc

function Student(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.work = function (job) {
    console.log(this.name + " dang " + job + " o " + this.address);
  };
}

let student4 = new Student("nguyen van d", 25, "ha noi");
let student5 = new Student("nguyen van e", 30, "ha tay");
console.log(student4, student5);

// quan ly lop sinh vien
let arr_student = [
  student1,
  student2,
  student3,
  student4,
  student5,
  new Student("nguyen van f", 25, "ha nam"),
];

console.log(arr_student);

// duyet mang student de in ra man hinh
for (let i = 0; i < arr_student.length; i++) {
  document.write(
    "<div class='std-info'><h1>" +
      arr_student[i].name +
      "</h1><h2>" +
      arr_student[i].age +
      "</h2><h3>" +
      arr_student[i].address +
      "</h3></div>"
  );
  //   arr_student[i].work("sinh vien");
}
