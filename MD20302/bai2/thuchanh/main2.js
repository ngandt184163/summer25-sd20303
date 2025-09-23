// 5.1.1: String: luu tru du lieu dang chuoi, ki tu
let str1 = "chuoi 1";
let str2 = "chuoi 2";
let str3 = `chuoi 3`;

console.log(typeof str1, typeof str2, typeof str3);

//5.1.2: thuoc tinh length: tra ve do dai chuoi
let str4 = "      diNh thi ngaN      ";
console.log(str4.length);
console.log(str4);
//loai bo khoang trang thua o dau va cuoi chuoi
str4 = str4.trim();
console.log(str4.length);
console.log(str4);
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());

// 5.2: Number: kieu so
let number1 = 2;
let number2 = 3.14;
console.log(number1, number2);
console.log(typeof number1, typeof number2);

let str5 = "ngandt35";
console.log(Number.isInteger(number1));
console.log(Number.isInteger(number2));
console.log(Number.isInteger(str5));

console.log(isNaN(number1)); // false
console.log(isNaN(number2)); // false
console.log(isNaN(str5)); // true

// 5.3. boolean: keu du lieu chi co 2 gia tri
// true/false(dung/sai)
let dung = true;
let sai = false;
console.log(dung, sai);
console.log(typeof dung, typeof sai);

/**
 * 5.4 undefined: la kieu du lieu do ng dung tu
 * gan hoac do js tu dong gan khi 1 bien duoc
 * khai bao nhung chua duoc gian gia tri
 * - phan tu mang chua duoc gan gia tri
 * - thuoc tinh cua doi tuong chua duoc
 * gan gia tri
 * - ham khong tra ve gia tri
 */

let number3;
console.log(number3);
console.log(typeof number3);

/**
 * 5.5 null: la kieu du lieu rong, hoac khong
 * co gia tri gi, do nguoi dung tu gan voi muc
 * dich rieng hoac muon xoa gia tri cua bien
 */

let number4 = null; // co the hieu la khong co gia tri gi
console.log(typeof number4);

// 6. mang
// 6.1 : khai bao mang
let arr1 = ["xin chao", 2, false, undefined, null];
console.log(arr1);
let arr2 = new Array("xin chao", 2, false, undefined, null);
console.log(arr2);
console.log(typeof arr1);

console.log(arr1[0]); //in ra phan tu mang co gia tri "xin chao"
console.log(arr1[2]); //in ra phan tu mang co gia tri false
arr1[10] = 10;
console.log(arr1[10]);
arr1[7] = 7;
console.log(arr1);

arr1[0] = "xin chao cb";
console.log(arr1[0]);
console.log(arr1);

let xxx = 6;
xxx = 90;
