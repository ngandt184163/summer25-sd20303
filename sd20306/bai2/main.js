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
