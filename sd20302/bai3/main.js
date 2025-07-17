let dung = true;
let sai = false;

if (sai) {
  //  neu dk dung doan code duoi day se duoc thuc thi
  console.log("dieu kien da dung, doan code duoc thuc thi");
} else {
  console.log("dieu kien sai, doan code khong duoc thuc thi");
}

let num1 = 3;
console.log(num1);
// dieu kien sai se bo qua vong lap

// if ket hop nhieu doan code if else
// var ngay = Number(prompt("nhap thu: "));
// console.log(typeof ngay);
// if (ngay == "2") {
//   console.log("thu 2");
// } else if (ngay === 3) {
//   console.log("thu 3");
// } else if (ngay == "4") {
//   console.log("thu 4");
// } else if (ngay == "5") {
//   console.log("thu 5");
// } else if (ngay == "6") {
//   console.log("thu 6");
// } else if (ngay == "7") {
//   console.log("thu 7");
// } else {
//   console.log("khong phai thu hop le");
// }

// // switch case

// switch (ngay) {
//   case 2:
//     console.log("thu 2");
//     break;
//   case 3:
//     console.log("thu 3");
//     break;
//   case 4:
//     console.log("thu 4");
//     break;
//   case 5:
//     console.log("thu 5");
//     break;
//   case 6:
//     console.log("thu 6");
//     break;
//   case 7:
//     console.log("thu 7");
//     break;
//   default:
//     console.log("khong phai thu hop le");
//     break;
// }

// vong lap while, do while

let num2 = 1;
while (num2 <= 10) {
  console.log(num2);
  ++num2;
}

// yeu cau nguoi dung nhap vao cac so tu 2-7 sau do se in
// ra thu tuong ung, neu nguoi dung nhap sai thi yeu cau nhap lai

// vong lap for: thuong dung de duyet qua mang
let arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// tim so 3 trong mang arr1 sau do in ra,k co thi thong bao k tim thay
let solanlap = 0;
for (let i = 0; i < arr1.length; i++) {
  solanlap++;
  if (arr1[i] == 3) {
    console.log(arr1[i]);
    // break;
  }
}

console.log(solanlap);

// duyet mang arr1, neu phan tu co gia tri = 3
// thi bo qua, con lai thi in ra phan tu mang do
solanlap = 0;
for (let i = 0; i < arr1.length; i++) {
  solanlap++;
  if (arr1[i] == 3) {
    continue;
  }
  console.log(arr1[i]);
}

console.log(solanlap);
