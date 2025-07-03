var ten = "Nguyen Van A";
let tuoi = 18;
// gia tri true la nam, false la nu
const giotinh = true;

console.log(ten, tuoi, giotinh);

console.log(typeof ten); // string
console.log(typeof tuoi); // number
console.log(typeof giotinh); // boolean

// tu khoa var: co pham vi global, co the khai bao lai
var x;
var a = 5;
var a = "abc";
console.log(a); // abc

// tu khoa let: co pham vi block, khong the khai bao lai
// let b = 8;
// let b = "hihi";
let y;

// const: co pham vi block, khong the khai bao lai, khong the gan lai gia tri
const max = 100;
const min = 10;

// function test() {
//   let hihi = 5;
//   console.log(a);
// }
// test();
// console.log(hihi); // Uncaught ReferenceError: hihi is not defined

// kieu du lieu trong javascript
let ten1 = "Nguyen Van B"; //12
console.log(typeof ten1);
console.log(ten1);

// thuoc tinh length : tra ve do dai cua chuoi
console.log(ten1.length);

// concat: noi chuoi
// toUpperCase: chuyen chuoi ve in hoa
// toLowerCase: chuyen chuoi ve in thuong
console.log(ten1.toUpperCase()); // NGUYEN VAN B
console.log(ten1.toLowerCase()); // nguyen van b
let tuoi1 = "tuoi 18";
console.log(ten1.concat(" ", tuoi1)); // tuoi 18 Nguyen Van B

// number
let so1 = 1;
let so2 = 2.5;
console.log(so1, so2); // 3.5

console.log(Number.isInteger(so1)); // true
console.log(Number.isInteger(so2)); // false

console.log(isNaN(so1)); // false
console.log(isNaN("abc")); // true

// bigint: kieu du lieu so nguyen lon hon so nguyen thong thuong

// boolean: kieu du lieu logic, chi co hai gia tri true va false
let dung = true;
let sai = false;
console.log(dung, sai); // true false
console.log(typeof dung); // boolean
console.log(typeof sai); // boolean

// undefined, null

let num1;

let num2 = null;

console.log(num1); // undefined
console.log(num2); // null
