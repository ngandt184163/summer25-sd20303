let arr1 = ["xin chao", 67, true, null, undefined];
console.log(arr1);

console.log(arr1[4]);
arr1[4] = "hello";
console.log(arr1[4]);
console.log(arr1.length);

let students = ["lan", "hieu", "tuan", "nam", "duyen"];

// them phan tu vao cuoi mang: push
students.push("hoang");
console.log(students);

// them phan tu vao dau mang: unshift
students.unshift("lien");
console.log(students);
/**
 * them phan tu vao vi tri bat ki: splice
 * - tham so 1: vi tri bat dau thao tac
 * - tham so 2: so luong phan tu can xoa
 * tinh tu vi tri bat dau thao tac
 * - tham so thu 3 tro di: cac phan tu duoc them
 * vao mang tu vi tri bat dau thao tac
 */
students.splice(1, 0, "hien");
console.log(students);

// xoa phan tu vao cuoi mang: pop
students.pop();
console.log(students);

// xoa phan tu vao dau mang: shift
students.shift();
console.log(students);

// xoa phan tu vao vi tri bat ki: splice
students.splice(4, 1);
console.log(students);
// tim xem hieu co o trong ds sv hay khong
let hieu = students.indexOf("hieu");
console.log(hieu);
console.log(students[hieu]);

/**
 * ep kieu co 2 loai
 * 1. ngam dinh: se tu dong gan dua tren gia tri
 * ma nguoi dung gan cho bien khi khai bao bien
 * 2. tuong minh: trong truong hop can thiet,
 * nguoi dung muon ep 1 gia tri da co kieu du lieu
 * nay sang 1 kieu du lieu khac
 */
let x = 4; // number
let str1 = "xin chao"; // string
let num1 = "123"; // string
console.log(typeof num1);
let num2 = Number(num1);
console.log(typeof num2);
let num3 = Number("100");

let a = Boolean("");

// ve nha thuc hanh ham split va join o slide 2 trang 28

/**
 * - && : chi dung khi tat ca cac dieu kien phai dung
 * sai khi it nhat 1 dieu kien sai
 * - || : dung khi it nhat 1 dieu kien la dung
 * sai khi tat ca cac dieu kien deu sai
 * - !: phu dinh nguoc lai, dang dung thanh sai
 * dang sai thanh dung
 */

let d = +100;
let e = -100;
/**
 * + toan tu ++: cong them 1 don vi vao bien dang
 * duoc thao tac
 * d++ == d = d + 1
 * ++d == d = d + 1
 * + toan tu --: tru 1 don vi vao bien dang duoc
 * thao tac
 * d-- == d = d - 1
 * --d == d = d - 1
 */

console.log(d++);
console.log(d);
let m = 10;
let n = 20;
let p = m + ++n;
console.log(p);
