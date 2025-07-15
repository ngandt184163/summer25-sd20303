// 1. mang: la kieu du lieu luu tru nhieu gia tri
let arr1 = [1, "nam", true, null, undefined, [1, 2, 3]];
console.log(arr1);
console.log(typeof arr1); // object
// length: so luong phan tu trong mang
console.log(arr1.length); // 6
// truy cap phan tu trong mang
console.log(arr1[1]); // "nam"
console.log(arr1[5]); // [1, 2, 3]
// cach khai bao mang thu 2
let arr2 = new Array("hoa", "ngoc", "hieu", "ha");
console.log(arr2);
console.log(arr2[2]); // "hieu"

// ghi de phan tu trong mang
arr2[2] = "hoang";
console.log(arr2);

// them phan tu vao cuoi mang
arr2.push("huy");
console.log(arr2); // ["hoa", "ngoc", "hoang", "ha
// them phan tu vao dau mang
arr2.unshift("thao");
console.log(arr2); // ["thao", "hoa", "ngoc", "hoang", "ha", "huy"]

// them phan tu vao vi tri bat ky trong mang
// splice: (vi tri, so luong xoa, gia tri them)
arr2.splice(3, 0, "lan", "le", "hoa");
console.log(arr2); // ["thao", "hoa", "lan", "ngoc", "hoang", "ha", "huy"]

// xoa phan tu trong mang
// xoa phan tu cuoi mang
arr2.pop();
console.log(arr2); // ["thao", "hoa", "lan", "ngoc", "hoang", "ha"]
// xoa phan tu dau mang
arr2.shift();
console.log(arr2); // ["hoa", "lan", "ngoc", "hoang

// xoa phan tu tai vi tri bat ky trong mang
arr2.splice(0, 2, "hoang");
console.log(arr2); // ["lan", "ngoc", "hoang", "ha"]

// tim kiem phan tu trong mang
console.log(arr2.indexOf("hoang")); // 0
console.log(arr2.lastIndexOf("hoang"));
console.log(arr2.indexOf("ngan")); // -1 (khong tim thay)

// ep kieu
// 1. ep kieu ngam dinh
let x = 5; // number
let y = "10"; // string
console.log(typeof x); // number
console.log(typeof y); // string
// 2. ep kieu tuong minh
let z = Number(100);
let t = Boolean(true); // false, 1: true
let u = String("hello world");
console.log(typeof z); // number
console.log(typeof t); // boolean
console.log(typeof u); // string

// bien chuoi thanh mang
let str = "xin chao cac ban";
let arr3 = str.split(" "); // tach chuoi thanh mang theo khoang trang
console.log(arr3); // ["xin", "chao", "cac", "ban"]
console.log(arr3.join("-")); // noi mang thanh chuoi, cach nhau boi khoang trang

if (true || false || false) {
  console.log("hello world");
}

if (!false) {
  console.log("i'm die");
}

let c = 6; // : +
let d = -6; // : -

c++; // c = c + 1;
d--; // d = d - 1;
console.log(c); // 7
console.log(d); // -7

++c; // c = c + 1;
--d; // d = d - 1;

console.log(c); // 8
console.log(d); // -8
console.log(c++); // 8 (in ra 8, sau do c = 9)
console.log(c);
