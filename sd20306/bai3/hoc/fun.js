// 1. ham khong tham so, khong co gia tri tra ve
// bai toan thuc hien cong 2 so
function sum1() {
  let a = 2;
  let b = 3;
  let c = a + b;
  console.log(c);
}
// goi ham
sum1();

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
console.log(kq1);

console.log(sum2(5, 6));
console.log(sum3(5, 6));

// pham vi bien
var x;
let y;
const z = 0;

function test() {
  console.log(x, y, z);
}
test();
// console.log(c); // loi

// cai dat su kien
function test1() {
  //   alert("xin chao");
  document.write('<img src="hoahong.jfif" alt="" />');
}
