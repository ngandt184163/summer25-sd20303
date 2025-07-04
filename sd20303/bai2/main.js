var ten = "Nguyen Van A";
let tuoi = 25;
var test1;
// gioi tinh la true thi se la nam, false thi la nu
const gioitinh = true;

console.log(ten, tuoi, gioitinh);
console.log(typeof ten, typeof tuoi, typeof gioitinh);

// phan biet var, let, const
//  var: khai bao bien co the thay doi gia tri, co the khai bao lai
//  co pham vi toan cuc, co the truy cap o bat ky dau
var bien1 = 9;
bien1 = 10;
var bien1 = "Hello World"; // co the khai bao lai
console.log(bien1); // "Hello World"
//  let: khai bao bien co the thay doi gia tri, khong the khai bao lai
//  co pham vi khoi ( block), chi truy cap o trong khoi do
let bien2 = 20;
bien2 = 30;
let test2;
// let bien2 = "hahhaha";

function test() {
  let bientest = "Hello";
  console.log(bien1);
  console.log(bientest);
}
test();
console.log(bien2); // 30
// console.log(bientest);

//  const: khai bao bien khong the thay doi gia tri,
// khong the khai bao lai
// pham vi block nhu tu khoa let, khi bao bao phai gan ngay gia tri
const PI = 3.14;
const MAX = 100;
// MAX = 200; // khong the gan lai gia tri cho MAX
console.log(MAX); // 100

//  cac kieu du lieu trong javascript
// 1. string
let bien3 = "nguyen van ann";
console.log(typeof bien1); // string

// thuoc tinh : length: tra ve do dai cua chuoi
console.log(bien3.length); // 12
// toUpperCase: chuyen chuoi ve chu hoa
console.log(bien3.toUpperCase()); // NGUYEN VAN ANN
// toLowerCase: chuyen chuoi ve chu thuong
console.log(bien3.toLowerCase()); // nguyen van ann
let bien4 = "nam nay 18 tuoi";
console.log(bien3.concat("", bien4)); // nguyen van annnam nay 18 tuoi

// 2. number
let x = 3;
let y = 6.5;
console.log(typeof x); // number
console.log(typeof y); // number

console.log(Number.isInteger(x)); // true
console.log(Number.isInteger(y)); // false

console.log(isNaN(bien4)); // true
console.log(isNaN(x)); // false

// 3. boolean: nhan 2 gia tri true va false
let istrue = true;
let isfalse = false;
console.log(typeof istrue); // boolean
console.log(typeof isfalse); // boolean

// 4. undefined: bien chua duoc khoi tao gia tri
let bien6;
console.log(bien6); // undefined

// 5. null: la bien rong va duoc chu dong gan gia tri null
let bien7 = null;
console.log(bien7); // object (do loi cua javascript)
