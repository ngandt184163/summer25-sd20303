var bien3;
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

// 5.2. kieu du lieu number
let number1 = 5;
let number2 = 3.14;
console.log(number1, number2);
console.log(typeof number1, typeof number2);
let str5 = "xin chao"; // string

console.log(Number.isInteger(number1));
console.log(Number.isInteger(str5));

console.log(isNaN(number1)); // false
console.log(isNaN(number2)); // false
console.log(isNaN(str5)); // true
console.log(typeof str5); // true

// console.log(isNaN("hello")); // true
// if (isNaN(str5) === false) {
//   console.log("hehe");
// }

// if (isNaN(number1) === false) {
//   console.log("hehe");
// } else {
//   console.log("haha");
// }

// 5.3 boolean
let dung = true;
let sai = false;
console.log(dung, sai);
console.log(typeof dung, typeof sai);

// undefined va null
// 1. undefined: la kieu du lieu duoc js tu dong
// gan khi khai bao bien ma khong gan gia tri
// hoac chung ta gan gia tri la undefined
// hoac la mot thuoc tinh khong ton tai cua doi tuong
// hoac mot phan tu khong ton tai cua mang
let number3;
console.log(number3); // undefined
console.log(typeof number3); // undefined
// 2. null: la kieu du lieu do ltv tu gan
// voi muc dich rieng, thuong la bieu thi
// mot gia tri rong ( hoac khong co gia tri)
let number4 = null;
console.log(number4); // null
console.log(typeof number4); // object

// 6. mang
// 6.1: khai bao mang
let arr1 = ["xin chao", 6, true, null, undefined];
console.log(arr1);
let arr2 = new Array("xin chao", 6, true, null, undefined);
console.log(arr2);
// 6.2: truy cap phan tu trong mang
console.log(arr1[0]); // lay ra phan tu mang "xin chao"
console.log(arr1[2]); // lay ra phan tu mang true
arr1[0] = "xin chao cac ban"; // cap nhat lai gia tri phan tu mang
console.log(arr1[0]);

let a = 6;
a = "gan gia tri moi";
