// cach tao mang thu nhat
let arr1 = [1, "nam", [3, 5], true, null, undefined];
console.log(arr1);
console.log(typeof arr1); // object
console.log(arr1.length); // 6
// cac tao mang thu hai
let arr2 = new Array("hoa", "hieu", "hoang", "tuan", "hoang", "huyen");
console.log(arr2);
console.log(typeof arr2); // object
console.log(arr2.length); // 4

// truy cap phan tu trong mang
console.log(arr2[1]); // hieu
console.log(arr2[0]); // hoa
// ghi de phan tu trong mang
arr2[1] = "hoang";
console.log(arr2[1]); // hoang
console.log(arr2);

// them phan tu vao mang
// 1. push : them vao cuoi mang
arr2.push("duyen");
arr2.push("lam");
console.log(arr2); // ["hoa", "hoang", "tuan", "huyen", "duyen", "lam"]
// 2. unshift : them vao dau mang
arr2.unshift("thao");
console.log(arr2); // ["thao", "hoa", "hoang", "t
// 3. splice : them vao vi tri bat ky
// splice(vi tri, so phan tu can xoa, phan tu can them)
arr2.splice(3, 0, "nam", "linh");
console.log(arr2); //
// ["thao", "hoa", "hoang", "nam", "tuan", "huyen", "duyen", "lam"]

// xoa phan tu trong mang
// 1. pop : xoa phan tu cuoi mang
arr2.pop();
console.log(arr2); // ["thao", "hoa", "hoang", "nam", "tuan", "huyen", "duyen"]
// 2. shift : xoa phan tu dau mang
arr2.shift();
console.log(arr2); // ["hoa", "hoang", "nam", "tuan
// 3. splice : xoa phan tu tai vi tri bat ky
arr2.splice(2, 1); // xoa phan tu tai vi tri 2, xoa nam
console.log(arr2); // ["hoa", "hoang", "tuan", "huyen", "duyen"]

// tim kiem phan tu trong mang

// 1. indexOf : tim kiem phan tu dau tien trong mang
// console.log(arr2.indexOf("ngan")); // 1
// if (arr2.indexOf("ngan") === -1) {
//   console.log("khong tim thay phan tu ngan");
// } else {
//   console.log("tim thay phan tu ngan");
// }
console.log(arr2.indexOf("hoang"));
console.log(arr2[1]);
console.log(arr2.lastIndexOf("hoang"));
console.log(arr2[1]);

// ep kieu
// 1. ngam dinh
let x = 5;
let y = "10";

// 2. ep kieu tuong minh
let z = String("45");
let p = Number(y);
console.log(typeof z); // string
console.log(typeof p); // number

let arr3 = "xin chao cac ban";
// ep kieu tu string sang mang
let arr4 = arr3.split(" ");
console.log(arr4); // ["xin", "chao", "cac", "ban"]
// ep kieu tu mang sang string
console.log(arr4.join("")); // "xin chao cac ban"

if (!false) {
  console.log("hello world");
}

let o = +6; // toan tu +
let l = -6; // toan tu -

o++; // toan tu tang 1, o = o + 1
console.log(o); // 7
l--; // toan tu giam 1, l = l - 1
console.log(l); // -7

// bien o dang co gia tri la 7
console.log(o++); // 7, in ra gia tri truoc khi tang
console.log(o); // 8,
