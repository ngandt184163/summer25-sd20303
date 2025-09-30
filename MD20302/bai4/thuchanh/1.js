/**
 * 1. lập trình hướng đối tượng (OOP): là cách
 * lập trình mô phỏng mọi thứ thành đối tượng để
 * dễ quản lí và tái sử dụng.
 *
 * 2. đối tượng: là một thực thể cụ thể có dữ liệu
 * và hành vi, ví dụ: người, con mèo, cái máy
 * tính, ...
 *
 * 3. đối tượng thì có 2 thành phần chính
 * - thuộc tính: là đặc điểm của đối tượng: màu
 * sắc, chiều cao, quê quán, giá cả, ...
 * - hành vi (phương thức): là hành động của
 * đối tượng, ví dụ: người làm việc, con trâu
 * thì gặm cỏ, ...
 */

/**khai báo đối tượng sinh viên */
let nva = {
  ten: "nguyen van a",
  tuoi: 24,
  email: "nva@gmail.com",
  study: function (monhoc) {
    /**
     * this dang nam trong doi tuong nao thi this
     * chinh la doi tuong do, o day this chinh la nva
     */
    console.log(this.ten + " dang hoc mon " + monhoc);
  },
};

let nvb = {
  ten: "nguyen van b",
  tuoi: 28,
  email: "nvb@gmail.com",

  study: function (monhoc) {
    /**
     * this dang nam trong doi tuong nao thi this
     * chinh la doi tuong do, o day this chinh la nva
     */
    console.log(this.ten + " dang hoc mon " + monhoc);
  },
};
console.log(nva, nvb);
console.log(nvb["ten"], nvb["tuoi"], nvb["email"], nvb["diem"]);
nvb.study("Lap trinh co so voi JAVASCRIPT");
// them thuoc tinh moi
nvb.diachi = "Ha noi";
// cap nhat, ghi de lai gia tri cho thuoc tinh tuoi
nvb.tuoi = 54;
console.log(nvb);
nvb.play = function () {
  console.log("choi co");
};

nvb.play();

/**
 * 4. lop(class): la khuon mau chung de tao ra cac
 * doi tuong co cung thuoc tinh va phuong thuc
 */
function Student(ten, tuoi, email) {
  this.ten = ten;
  this.tuoi = tuoi;
  this.email = email;
  this.study = function (monhoc) {
    console.log(this.ten + " dang hoc mon " + monhoc);
  };
}

let nvc = new Student("nguyen van c", 19, "nvc@gmail.com");
let nvd = new Student("nguyen van d", 32, "nvd@gmail.com");
let nve = new Student("nguyen van e", 43, "nve@gmail.com");

console.log(nvc, nvd, nve);

/**tao mang luu tru sinh vien */
let students = [
  nva,
  nvb,
  nvc,
  nvd,
  nve,
  new Student("nguyen van f", 63, "nvf@gmail.com"),
  new Student("nguyen van g", 47, "nvg@gmail.com"),
];
console.log(students);

// viet ham in ds sv
function renderStudentList(students) {
  for (let i = 0; i < students.length; i++) {
    document.write(`<div class="sv">
      <b>${students[i]["ten"]}</b>
      <i>${students[i]["tuoi"]}</i>
      <p>${students[i]["email"]}</p>
    </div>`);
  }
}

renderStudentList(students);
