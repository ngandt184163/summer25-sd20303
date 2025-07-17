// 1. kieu du lieu number
let num1 = 10;
let num2 = 3.14;
console.log(typeof num1); // 10
console.log(typeof num2); // 3.14

if (Number.isInteger(num1)) {
  console.log(`${num1} is an integer.`);
  console.log(num1 + " is an integer.");
}
if (Number.isInteger(num2)) {
  console.log(`${num2} is an integer.`);
}
console.log(isNaN("num1"));
if (isNaN(num1)) {
  console.log(`${num1} is NaN.`);
}

// 2. bolean
let dung = true;
let sai = false;
console.log(typeof dung); // boolean
console.log(typeof sai); // boolean

// 3. undefine: la kieu du lieu duoc khai bao nhung chua duoc khoi tao
let num3;
console.log(num3); // undefined
// 4. null: la kieu du lieu duoc khoi tao nhung khong co gia tri
let num4 = null;
console.log(num4); // null

// 5. mang: la kieu du lieu chua nhieu gia tri
let arr1 = [1, "chi", true, null, [1, 2, 3], undefined];
console.log(typeof arr1); // [1, "chi", true, null, [1, 2, 3], undefined]
console.log(arr1); // 1
let arr2 = new Array("hieu", "chi", "linh", "hoa");
console.log(typeof arr2); // [1, "chi", true, null, [1, 2, 3], undefined]
console.log(arr2); // 1
console.log(arr2.length); // 4

// + truy cap phan tu trong mang
console.log(arr2[1]); // "chi"
console.log(arr2[3]); // "hoa"
console.log(arr2[10]); // undefined
// + thay doi gia tri phan tu trong mang ( gan )
arr2[1] = "le";
console.log(arr2); // "le"
arr2[10] = "tai";
console.log(arr2); // "tai"
console.log(arr2[6]); // undefined

// them phan tu vao mang
let arr3 = ["hieu", "chi", "linh", "hoa"];
arr3.unshift("nam"); // them vao dau mang
console.log(arr3); // "nam"
arr3.push("lan"); // them vao cuoi mang
console.log(arr3); // "lan"
arr3.splice(1, 0, "ha", "trung", "ngoc"); // them vao vi tri bat ki
console.log(arr3); // "ha"

// xoa phan tu mang
arr3.shift(); // xoa phan tu dau mang
console.log(arr3);
arr3.pop(); // xoa phan tu cuoi mang
console.log(arr3);
arr3.splice(1, 2); // xoa phan tu bat ki
console.log(arr3);

// xoa chi ra khoi mang, sau do them lien va loan
arr3.splice(2, 1, "lien", "lan");
console.log(arr3);

let arr4 = arr2.concat(arr3);
console.log(arr4);

console.log(arr4.indexOf("hieu"));
console.log(arr4.lastIndexOf("hieu")); // tra ve vi tri cuoi cung cua indexOf("hieu"));

// ep kieu
let num5 = 8; // ep kieu ngam dinh
let num6 = Number(10); // ep kieu tuong minh
console.log(typeof num5); // number
console.log(typeof num6); // number
let str1 = "100"; // string
let num7 = Number(str1); // number
console.log(typeof str1); // string
console.log(typeof num7); // number
console.log(str1, num7); // 100

// cac gia tri truthy va falsy:
// cau hoi: liet ke cac gia tri falsy
let num8 = 1;
let x = Boolean(num8);
console.log(x);
let y = String(num8);
console.log(typeof y);

//
if (false || false || false) {
  console.log("true");
} else {
  console.log("false");
}
console.log(true && true && true);
console.log(!true);
console.log(!false);

let num10 = 4;
let num11 = -6;
console.log(num10);
++num10;
console.log(num10); // 5
--num11;
console.log(num11); // -7

console.log(num10++); // 5
console.log(num10); //6
