/**
 * 1. ham la 1 tap hop cac cau lenh cung thuc
 * hien 1 chuc nang nao do va duoc dat duoi 1
 * cai ten chung
 * - tai su dung lai doan code
 * - duy tri va bao tri sau nay
 */
let xyz = "bien toan cuc";
// ham khong tham so, khong co gia tri tra ve
function sum1() {
  let a = 2;
  let b = 3;
  let c = a + b;
  console.log(c);
}

sum1();
console.log(sum1());

// ham co tham so, khong co gia tri tra ve
function sum2(a, b) {
  let c = a + b;
  console.log(c);
}

sum2(2, 3);
sum2(5, 6);

// ham co gia tri tra ve
function sum3(a, b) {
  let c = a + b;
  return c;
}

let kq1 = sum3(2, 3);
let kq2 = sum3(kq1, kq1);
console.log(kq1, kq2);
// console.log(sum3(2, 3));

let x = 2;

function phamvibien() {
  let y = 3;
  console.log(y);
  console.log(x);
}
console.log(x);
// console.log(y);

function test1() {
  alert("chao mung ban den voi trang web");
}
function test2() {
  alert("xin chuc mung");
}
