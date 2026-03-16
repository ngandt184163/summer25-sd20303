/**
 * 1. ham la gi?
 * - la mot tap hop cac cau lenh
 * cung thuc hien mot chuc nang cu
 * the va duoc dat duoi mot cai
 * ten chung
 * + toi uu code, tranh lap lai
 * + de dang bao chi,
 * + tai sd lai doan code
 */
// ham sayHi
function sayHi() {
  console.log("xin chao cac ban");
  //   alert("xin chao cac ban");
}
// de chay ham thi chung ta can goi ham
sayHi();

// ham duoc khai bao, tinh tong a,b
function tong(a, b) {
  let sum = a + b;
  console.log("a+b=", sum);
}
tong(2, 3);

// tinh hieu a, b

let hieu = function (a, b) {
  let sub = a - b;
  console.log("a-b=", sub);
};
hieu(5, 3);
/**
 * 3.tham so la gia tri duoc truyen
 * vao ham khi khai bao ham
 * - doi so la gia tri truyen vao
 * khi goi ham
 */
function test(a, string) {
  console.log(a ** 2);
  console.log("hello " + string);
}

test(2, "world");
/**
 * 4.return: la tu khoa dung de tra
 * ve gia tri cua ham
 */
// ham tinh tich 2 so
function tich(a, b) {
  let mul = a * b;
  return mul;
}

let tichAB = tich(5, 4);
console.log(tichAB);

/**
 * 5. pham vi bien: la pham vi hoat
 * dong, noi ma bien co the truy cap va
 * sd duoc
 * - toan cuc: o dau cung co the truy
 * cap va sd duoc
 * - cuc bo: cho sd duoc trong cac
 * khoi code ({}), noi ma bien duoc
 * khai bai
 * - doi voi ham thi bien var chi
 * co pham vi trong ham
 */

{
  let number1 = 1;
  function test2() {
    let string1 = "hello" + number1;
    console.log(string1);
  }

  test2();
  console.log(string1);
}
