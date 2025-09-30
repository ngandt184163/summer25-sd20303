/**
 * 1. Lap trinh huong doi tuong (OOP): la cach
 * lap trinh mo phong moi thu thanh doi tuong để
 * dễ quẩn lí và tái sd
 *
 * 2. đối tượng: Một thực thể cụ thể có dữ liệu
 * và hành vi, ví dụ: người, oto, cái máy tính,..
 *
 * 3. một đối tượng được đặc trưng bởi 2 thành
 * phần
 * - thuộc tính: đặc điểm của đối tượng: màu
 * sắc, cân nặng, chiều cao, giới tính,...
 * - hành vi(phương thức): hành động của đối tượng,
 * ví dụ người nói chuyện, người học tập, người
 * làm viẹc, ô tô chuyển động, con ngựa chạy, ...
 */

/**
 * cac thanh phan cua mot doi tuong gom
 * 2 phan: khoa - gia tri, khoa la duy nhat
 */
let nva = {
  ten: "nguyen van a",
  tuoi: 23,
  email: "nva@gmail.com",
  study: function (monhoc) {
    // this chinh la doi tuong, this dang nam trong
    // doi tuong nao thi this chinh la doi tuong do
    // this o day chinh la nva
    console.log(this.ten + " dang hoc mon " + monhoc);
  },
};

let nvb = {
  ten: "nguyen van b",
  tuoi: 29,
  email: "nvb@gmail.com",
  study: function (monhoc) {
    // this chinh la doi tuong, this dang nam trong
    // doi tuong nao thi this chinh la doi tuong do
    // this o day chinh la nva
    console.log(this.ten + " dang hoc mon " + monhoc);
  },
};

console.log(nva, nvb);

console.log(nvb["ten"], nvb["tuoi"], nvb["email"], nvb["diem"]);
nvb.study("Lap trinh co so voi JAVASCRIPT");

/**
 * 4. Class ( lop ): la mot khuon mau de tao ra cac doi
 * tuong co cung thuoc tinh va phuong thuc
 */
function Student(ten, tuoi, email) {
  this.ten = ten;
  this.tuoi = tuoi;
  this.email = email;
  this.study = function (monhoc) {
    console.log(this.ten + " dang hoc mon " + monhoc);
  };
}

let nvc = new Student("nguyen van c", 28, "nvc@gmail.com");
let nvd = new Student("nguyen van d", 25, "nvd@gmail.com");
let nve = new Student("nguyen van e", 18, "nve@gmail.com");
console.log(nvc, nvd, nve);
console.log(nvc["ten"]);
// khai bao thuoc tinh avg moi cho doi tuong
nvc.avg = 9;
// update, ghi de gia tri cho thuoc tinh email
nvc.email = "hahaha@gmail.com";
console.log(nvc);

/** tao mang luu tru sinh vien
 * (sinh vien dang la doi tuong nen mang cua chung ta
 * se la mang cac doi tuong)
 */

let students = [
  nva,
  nvb,
  nvc,
  nvd,
  nve,
  new Student("nguyen van f", 19, "nvf@gmail.com"),
  new Student("nguyen van g", 21, "nvg@gmail.com"),
];
console.log(students);

/**
 * viet ham in ra danh sach sinh vien
 */
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
