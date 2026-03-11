console.log("buoi so 2");

/**
 * 1. bien la noi luu tru cac du lieu
 * dung de thao tac va xu li trong
 * chuong trinh
 *
 * 2. khai bao du lieu
 * - co 3 tu khoa khai bao
 * + var
 *    . co the khao bao lai
 *    . co the gan lai gia tri
 *    . pham vi hoat dong toan cuc
 * ( o cho nao cung co the truy cap duoc)
 * + let
 *  . khong the khai bao lai
 *  . co the gan lai gia tri
 *  . pham vi hoat dong cuc bo
 * ( chi hd trong khoi code co khai bao no)
 * + const
 *  . khong the khai bao lai
 *  . khong the gan lai gia tri
 *  . pham vi hoat dong cuc bo
 * ( chi hd trong khoi code co khai bao no)
 */

// khai bao bien num1
var num1 = 10;
// khai bao lai bien num1
var num1 = 20; // khon co loi
console.log(num1);
// gan lai gia tri cho num1
num1 = 30;
console.log(num1);

// khai bao bien num2
let num2 = 1;
// let num2 = 2; // khai bao lai bi loi
// gan lai gia tri cho num2
num2 = 2;
console.log(num2);

// khai bao bien num3
const num3 = 100;
// const num3 = 200; // khai bao lai bi loi
// gan lai gia tri cho num3
// num3 = 300;
// console.log(num3); // co loi

// pham vi hd
{
  var num4 = 97;
  let num5 = 98;
  const num6 = 99;
  console.log(num4);
  console.log(num5);
  console.log(num6);
  {
    console.log(num5);
    console.log(num6);
  }
}
console.log(num4);
// console.log(num5); // num5 is not defined
// console.log(num6); // num6 is not defined

// quy tac dat ten bien
let ho_ten;
let hoTen;
let phiThanhToan;
// let return; // loi

/**
 * kieu du lieu
 */
// kieu string (chuoi)
let ten = "Dinh Van Hung";
let soTien = "100"; // string
console.log(ten, soTien);
// ham kieu tra kieu du lieu: typeof
console.log(typeof ten, typeof soTien); // string

// khai bao bien kieu number
let tuoi = 20;
const PI = 3.14;

console.log(tuoi, PI);
console.log(typeof tuoi, typeof PI); // number

// khai bao du lieu kieu boolean
let dung = true;
let sai = false;
console.log(dung, sai);
console.log(typeof dung, typeof sai); // boolean

//
let a;
console.log(a); // undefined

// bien null: do ltv chu dong gan
let b = null;
console.log(b);

// toan tu so hoc
console.log(5 + 3, 10 - 4, 6 * 2, 3 ** 2, 12 / 3, 10 % 3);
let count = 10;
count++;
console.log(count); // 11
count--;
console.log(count); // 10

// toan tu gan ( luon xuat hien dau bang)
// khai bao bien x,y
let x = 5;
let y;
// gan gia tri cua x cho y
y = x; // y = 5
// tang gia tri cua x len 1 va gan lai cho x
x += 1; // x = x + 1
console.log(x); // 6
// giam gia tri cua x xuong 1 va gan lai cho x
x -= 1; // x = x - 1
console.log(x); // 5
// nhan gia tri cua x voi 2 va gan lai cho x
x *= 2; // x = x * 2
console.log(x); // 10
// chia gia tri cua x cho 2 va gan lai cho x
x /= 2; // x = x / 2
console.log(x); // 5
// ...............................

// toan tu so sanh
console.log("x==5", x == 5); // true
console.log("x===5", x === 5); // true
console.log("x!=5", x != 5); // false
console.log("x!==5", x !== 5); // false
console.log("x>5", x > 5); // false
console.log("x<5", x < 5); // false
console.log("x>=5", x >= 5); // true
console.log("x<=5", x <= 5); // true

// toan tu logic
let isTrue = true;
let isFalse = false;
/**
 * toan tu va ( &&): se tra ve dung neu nhu
 * tat ca cac phep so sanh deu tra ve dung,
 * se tra ve sai neu nhu co it nhat 1 phep so
 * sanh tra ve sai
 */
// ve nha tra cuu khai niem ve truthy va falsy
console.log(isTrue && isTrue);
console.log(isFalse && isFalse);
console.log(isFalse && isTrue);

/**
 * toan tu hoac ( ||): se tra ve dung neu
 * nhu co it nhat 1 phep so sanh tra ve dung,
 * se sai khi tat ca cac phep so sanh deu sai
 */
console.log(isTrue || isTrue); // true
console.log(isFalse || isFalse); // false
console.log(isFalse || isTrue); // true

// toan tu dieu kien
let age = 18;
let dieuKienMuaRuou = age >= 18 ? "Duoc mua ruou" : "Chua du tuoi";
console.log(dieuKienMuaRuou);

let name;
let NAME = name ?? "NganDT35";
console.log(NAME);
