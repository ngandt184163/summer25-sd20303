/*
1. ham la mot tap hop cac cau lenh cung
thuc hien mot chuc nang nao do, va duoc dat
duoi 1 ten chung
 - viet ham de tai su dung lai doan code, 
 - bao tri code sau nay
*/
// ham khong co tham so, khong tra ve
function sum() {
  let a = 2;
  let b = 3;
  let c = a + b;
  console.log(c);
}

sum();

// ham co tham so
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

function luythua(a) {
  let x = Math.pow(a, 2);
  return x;
}

let tong1 = sum3(2, 3);
console.log(tong1);

let luythua1 = luythua(tong1);
console.log(luythua1);

// ham in thong tin sinh vien
function showInfo(name, age, address) {
  console.log("Ten: " + name);
  console.log("Tuoi: " + age);
  console.log("Dia chi: " + address);
}

showInfo("Nguyen Van A", 18, "Ha Noi");
showInfo("Nguyen Van B", 20, "Ha Noi");
showInfo("Nguyen Van C", 22, "Ha Noi");

let xyz = "bien toan cuc";

// xu li su kien
function test() {
  alert("chao mung ban den voi trang web");
}

function test2() {
  alert("chuc mung ban da chien thang");
}
