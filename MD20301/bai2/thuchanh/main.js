var a = 5;
let b = "hello";
const c = true;

console.log(a, b, c);

/**
 * I. phan biet 3 tu khoa khai bao bien
 * 1. var
 * - pham vi: toan cuc, co the truy cap o bat ky dau
 * - co the khai bao lai va cap nhat lai gia tri
 *
 * 2. let
 * - pham vi: cuc bo, chi hoat dong trong khoi lenh
 * co dau {}
 * - khong the khai bao lai, co the cap nhat lai
 * gia tri
 *
 * 3. const
 * - pham vi: cuc bo, chi hoat dong trong khoi lenh
 * co dau {}
 * - khong the khai bao lai, khong the cap nhat lai
 * gia tri
 */

var bien1 = 10;
console.log(bien1); // 10
var bien1 = "xin chao";
console.log(bien1); // xin chao
bien1 = "xin chao cac ban";
console.log(bien1); // xin chao cac ban

let bien2 = true; // {}
console.log(bien2); // true
bien2 = "haha";
console.log(bien2); // haha

if (false) {
  var bien3 = 2;
  console.log(bien3); // 2
} else {
  console.log(bien3); // loi
}
var f;
let d;
const PI = 3.14;

// 5.1 kieu du lieu string
let str1 = "ngUyen Van a  ";
let str2 = `nguyen van b`;
let str3 = "nguyen van c";
console.log(str1, str2, str3);
console.log(typeof str1, typeof str2, typeof str3);
// 5.1.2: thuoc tinh length: tra ve do dai cua chuoi
console.log(str1.length);
// 5.1.3: mot so phuong thuc lam viec voi chuoi
// concat: noi chuoi
let str4 = str2.concat(str1); // nguyen van a  nguyen van b
console.log(str4);
console.log(str1.toLocaleUpperCase());
console.log(str1.toLocaleLowerCase());
// trim(): loai bo ki tu trang thua o dau va
// cuoi chuoi
let hoten = "   nguyen van a   ";
console.log(hoten);
console.log(hoten.length);
hoten = hoten.trim();
console.log(hoten.length);
console.log(hoten);
