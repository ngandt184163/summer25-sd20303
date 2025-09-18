/**
 * I. tu khoa khai bao bien
 * 1. var
 * - pham vi hoat dong: toan cuc,
 * co the truy cap o bat ki dau
 * - co the khai bao lai, co the  cap nhat
 * lai gia tri
 *
 * 2. let
 * pham vi hoat dong: trong khoi code(block code: {})
 * - khong the khai bao lai, co the cap nhat gia tri
 *
 * 3. const
 * pham vi hoat dong: trong khoi code(block code: {})
 * - khong the khai bao lai, khong the cap nhat gia tri
 *
 */

var bien1 = 4;
console.log(bien1);
var bien1 = "xin chao";
console.log(bien1);
bien1 = "xin chao cac ban";
console.log(bien1);

if (false) {
  var bien2 = 8;
  console.log(bien2);
} else {
  console.log(bien2);
}

let bien3 = 6;
bien3 = 90;
console.log(bien3);

const PI = 3.14;
PI = 4;
console.log(PI);
