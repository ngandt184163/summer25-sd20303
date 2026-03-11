console.log("buoi so 2");

// quy tac dat ten bien
// let 1abc; // loi sd so o dau
// let a bc; // loi co dau cach
// let return; // loi sd tu khoa he thong

let phi_thanh_toan;
let phiThanhToan;

// khai bao bien kieu string
let ten = "Nguyen Van An";
let tuoi = `20`;
// kiem tra kieu du lieu cua bien
console.log(typeof ten, typeof tuoi);

// khai bao bien kieu number
let nam_sinh = 2000;
const PI = 3.14;
console.log(typeof nam_sinh, typeof PI);

// khai bao bien kieu boolean
let dung = true;
let sai = false;
console.log(typeof dung, typeof sai);

// undefine: la gia tri ma JS tu dong
// gan cho bien khi co bien duoc khoi
// tao nhung chua duoc gan gia tri
let a;
console.log(a); // undefined

/**
 * null: la gia tri ma ltv chu dong gan
 * cho bien khi muon xoa gia tri, hoac
 * don gian la bien do khong co gia tri
 * gi nen gan la null
 */

let ho_ten = "Dinh Thi Ngan";
// sau mot hoi sd thi toi khong can nua
ho_ten = null;
console.log(ho_ten);

// toan tu so hoc
console.log("5+3=", 5 + 3);
console.log("10-4=", 10 - 4);
console.log("6*2=", 6 * 2);
console.log("12/3=", 12 / 3);
console.log("10%3=", 10 % 3);
let count = 10;
count++; // count tang len 1 don vi
console.log(count); // 11
count--; // count giam 1 don vi
console.log(count); //

// toan tu gan: luon xuat hien dau bang
// gan o day la gan gia tri
// gan gia tri cua bien nay cho bien kia
// co the la gan luon, hoac gan sau qua
// trinh tinh toan
let x = 5;
let y;
// gan gia tri cua x cho y
y = x; // y = 5
console.log("y = ", y); // 5
// gan gia tri x cho x sau khi giam di
// 1 don vi
x -= 1; // x = x -1
console.log("x = ", x); // 4
// gan lai gia tri cua x cho x sau
// khi tang len y don vi
x += y; // x = x + y
console.log("x = ", x);

// toan tu so sanh
// gan lai gia tri cho bien x = 5
x = 5;
console.log(x, "kieu du lieu: ", typeof x);
/**
 * so sanh sd == : la chi so sanh ve
 * gia tri
 */
console.log("x==5? ", x == "5"); // true
/**
 * so sanh sd === : la so sanh ve
 * ca gia tri va kieu du lieu
 */
console.log("x===5? ", x === "5");
console.log("x!=5? ", x != 5);
console.log("x!==5? ", x !== 5);
console.log("x>5? ", x > 5);
console.log("x<5? ", x < 5);
console.log("x>=5? ", x >= 5);
console.log("x<=5? ", x <= 5);

// toan tu logic
/**
 * toan tu phu dinh: se phu dinh dung
 * thanh sai, sai thanh dung
 */
let isTrue = true;
let isFalse = false;

console.log("phu dinh cua dung", !isTrue); // false
console.log("phu dinh cua sai", !isFalse); // true

/**
 * toan tu &&
 * + tra ve dung khi tat ca cac phep so sanh
 * deu dung
 * + tra ve sai khi chi can 1 phep so sanh
 * sai
 */

console.log("dung && sai", isTrue && isFalse);
console.log("dung && dung", isTrue && isTrue);
console.log("sai && sai", isFalse && isFalse);

/**
 * toan tu ||
 * + tra ve dung khi co it nhat 1 phep so
 * sanh la dung
 * + tra ve sai khi tat ca deu sai
 */
console.log("dung || sai", isTrue || isFalse);
console.log("dung || dung", isTrue || isTrue);
console.log("sai || sai", isFalse || isFalse);

// toan tu dieu kien
let age = 10;
let duTuoiMuaRuou = age >= 18 ? "Du tuoi mua ruou" : "Chua du tuoi";
console.log(duTuoiMuaRuou);

let gv;
let kq = gv ?? "NganDT35";
console.log(kq);

// toan tu optional chaining
let tom = {
  ten: "Tom",
  tuoi: 1,
  giong: "Meo Ba Tu",
  hoat_dong: function () {
    console.log(this.ten + " dang nam ngu");
  },
};

/**
 * truy cap ten cua tom
 * neu nhu thuoc tinh ten khong ton
 * tai thi se khong bi loi (undefined),
 * neu co ton tai thi hien thi
 * binh thuong
 */
console.log(tom?.ten);
console.log(tom?.can_nang);
