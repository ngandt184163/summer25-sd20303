console.log("hello JS");

/**
 * 1. bien la noi luu tru du lieu
 * de thao tac va xu li trong chuong
 * trinh
 *
 * 2. khai bao bien: co 3 tu khoa
 * khai bao bien
 *
 * - var:
 *  + co the khai bao lai
 *  + co the gan lai gia tri
 *  + pham vi hd la toan cuc
 * (co the truy cap va sd o bat cu dau)
 * - let:
 *  + khong the khai bao lai
 *  + co the gan lai gia tri
 *  + pham vi hd la cuc bo
 * (chi truy cap duoc trong pham vi
 * khoi lenh duoc khai bao)
 * - const:
 *  + khong the khai bao lai
 *  + khong the gan lai gia tri
 *  + pham vi hd la cuc bo
 * (chi truy cap duoc trong pham vi
 * khoi lenh duoc khai bao)
 */
// khai bao bien voi var
var number1 = 10;
// khai bao lai bien number1
var number1 = 20; // khong co loi
console.log(number1);
// gan lai gia tri cho number1
number1 = 30;
console.log(number1);

// khai bao bien voi let
let number2 = 1;
// khai bao lai bien number2
// let number2 = 2; // loi
// gan lai gia tri cho number2
number2 = 2;
console.log(number2);

// khai bao bien voi const
const number3 = 100;
// khai bao lai bien number3
// const number3 = 200; // loi
// gan lai gia tri cho number3
// number3 = 300;
// console.log(number3);

// tao 1 khoi code gia dinh
{
  var a = 10;
  let b = 20;
  const c = 30;
  // in ra o day khon co loi vi dang
  // nam trong khoi code cua no
  console.log(a);
  console.log(b);
  console.log(c);
  {
    // sd trong khoi code con k loi
    console.log(a);
    console.log(b);
    console.log(c);
  }
}

console.log(a);
// console.log(b); // loi chua dinh nghia
// console.log(c); // loi chua dinh nghia

// dat ten bien
// let 1abc; // loi co so o dau
// let a bc; // loi co khoang trang
// let if; // loi trung tu khoa

let phiThanhToan;
let phi_thanh_toan;

// khai bao bien kieu string
let ten = "nguyen van hoa";
let nam_sinh = `1996`;
// ham kiem tra kieu du lieu
console.log(typeof ten, typeof nam_sinh);

// khai bao bien kieu number
let age = 30;
const PI = 3.14;
console.log(typeof age, typeof PI);

// khai bao bien kieu boolean
let dung = true;
let sai = false;
console.log(typeof dung, typeof sai);

// undefined: la gia tri duoc js gan cho
// bien duoc khai bao nhung chua duoc
// gan gia tri
console.log(phiThanhToan, phi_thanh_toan);

// null: la gi tri dc ltv gan chu dong
// cho bien  voi muc dich rieng
let bienNull = null;
console.log(bienNull);

// toan tu so hoc
console.log(5 + 3, 10 - 4, 6 * 2, 3 ** 2, 12 / 3, 10 % 3);
let count = 10;
count++; // count tang len 1 don vi
console.log(count); // 11
count--; // count giam xuong 1 don vi
console.log(count); // 10

// toan tu gan (gan gia tri)
let x = 5;
let y;
// gan bien x cho bien y
y = x; // y = 5
console.log(y);
// gan x giam 1 don vi cho x
x -= 1; // x = x -1
console.log(x);
// gan x tang 1 don vi cho x
x += 1; // x = x + 1
console.log(x);

// toan tu so sanh
// x = 5
console.log(typeof x);
console.log("x==5? ", x == "5");
console.log("x===5? ", x === "5");
console.log("x!=5? ", x != 5);
console.log("x!==5? ", x !== 5);
console.log("x<5? ", x < 5);
console.log("x>5? ", x > 5);
console.log("x<=5? ", x <= 5);
console.log("x>=5? ", x >= 5);

// toan tu logic
/**
 * toan tu &&: tra ve 2 gia tri true
 * va false
 * + tra ve true neu tat ca cac gia tri
 * deu dung
 * + tra ve false khi chi can 1 gia
 * tri la sai
 */
let isTrue = true;
let isFalse = false;
let kiemTra = isFalse && isFalse;
console.log(kiemTra);

/**
 * toan tu ||: tra ve 2 gia tri true
 * va false
 * + tra ve true it nhat 1 gia tri la
 * dung
 * + tra ve false tat ca cac gia tri
 * deu sai
 */
let abc = 9;
kiemTra = isTrue || isTrue || abc;
console.log(kiemTra);
//  ve nha tim kiem gia tri
// truthy va falsy trong JS

// toan tu phu dinh !
// phu ding dung thanh sai va sai thanh dung
console.log(!true); // false
console.log(!false); // true
