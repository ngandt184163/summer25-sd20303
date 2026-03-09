console.log("hello world");

console.log("hom nay troi mua");

/**
 * 1. bien la noi luu tru du lieu de thao
 * tac va xu li trong chuong trinh
 * 2. khai bao bien
 * - co 3 tu khoa de khai bao bien
 * + var: bien co the khai bao lai,
 * co the duoc gan lai va bien nay co pham
 * vi toan cuc(tuc la o dau trong file cung
 * se su dung duoc bien do)
 * + let: bien khong the khai bao lai, co the
 * duoc gan lai gia tri, co pham vi hoat
 * dong la cuc bo( chi su dung duoc trong cac
 * khoi lenh {})
 * +const: khong the khai bao lai,
 * khong the gan lai gia tri, co pham vi hoat
 * dong la cuc bo( chi su dung duoc trong cac
 * khoi lenh {})
 */

var number1 = 10;
var number1 = 20;
console.log(number1);

number1 = 30;
console.log(number1);

let number2 = 1;
number2 = 2;
console.log(number2);

const number3 = 100;
// number3 = 1000;
// console.log(number3);

{
  var name = "Ngan";
  let MAX = 100;
  const PI = 3.14;
}
// console.log(PI);
console.log(name);
console.log(MAX);
