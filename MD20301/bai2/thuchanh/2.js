let arr1 = ["ngan", true, 3, null, undefined];
console.log(arr1);

console.log(arr1[2]); // truy cap phan tu co gia tri la 3
console.log(arr1.length); // tra ve so luong phan tu mang

// / mang ds sinh vien
let students = ["ngan", "hoa", "hieu", "lan", "tung"];
console.log(students);

// them 1 phan tu vao cuoi mang
students.push("thang");
console.log(students);
// them 1 phan tu vao dau mang
students.unshift("hong");
console.log(students);
// them vao vi tri bat ki
//**
// 1. tham so dau tien: vi tri khoa bat dau thao tac
// 2. tham so thu 2: so luong phan tu can xoa sau vi
// khoa bat dau thao tac
// 3. tham so thu 3 tro di: danh sach cac phan tu se them
// vao mang tu vi tri khoa bat dau */
students.splice(1, 0, "hai", "hung", "huong");
console.log(students);

// xoa cuoi mang: pop()
students.pop();
console.log(students);
// xoa dau mang: shift()
students.shift();
console.log(students);
// xoa o vi tri bat ki: splice();
students.splice(1, 1);
console.log(students);

// tim kiem phan tu trong mang: indexOf()
// tra ve vi tri dau tien duoc tim thay

// console.log(students.indexOf("hoa")); // 3
let hoa = students.indexOf("hoa");
console.log(students[hoa]); // hoa

/**ep kieu co 2 loai
 * 1. ngam dinh: khi khai bao bien js se
 * tu dong ep kieu dua tren gia tri gan cho bien do
 * 2. tuong minh: su dung ham ho tro trong cac truong
 * hop nguoi dung muon ep kieu tu 1 trong so cac
 * kieu da co san
 */
let a = 3; // number
let dung = false; // boolean
let num1 = "123"; // string
console.log(typeof num1);
let num2 = Number(num1);
console.log(typeof num2);
let num3 = Number("100");

let xyz = -100;
let t = +100;
console.log(xyz++);
console.log(xyz);
