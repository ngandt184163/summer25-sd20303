// if else
let num1 = 10;
if (num1 % 2 == 0) {
  console.log(num1 + " la so chan");
} else {
  console.log(num1 + " la so le");
}

// // yeu cau nguoi dung nhap vao cac so tu 2- 7,
//  sau do in ra cac thu tuong ung trong tuan
// neu so lon hon 7 hoac nho hon 2 thi in ra loi so khong hop le

// let ngay = Number(prompt("nhap ngay tu 2-7"));

// if (ngay == 2) {
//   console.log("hom nay la thu 2");
// } else if (ngay == 3) {
//   console.log("hom nay la thu 3");
// } else if (ngay == 4) {
//   console.log("hom nay la thu 4");
// } else if (ngay == 5) {
//   console.log("hom nay la thu 5");
// } else if (ngay == 6) {
//   console.log("hom nay la thu 6");
// } else if (ngay == 7) {
//   console.log("hom nay la thu 7");
// } else {
//   console.log("so ngay khong hop le");
// }

// // bien doi doan code tren sang switch case
// switch (ngay) {
//   case 2:
//     console.log("hom nay la thu 2");
//     break;
//   case 3:
//     console.log("hom nay la thu 3");
//     break;
//   case 4:
//     console.log("hom nay la thu 4");
//     break;
//   case 5:
//     console.log("hom nay la thu 5");
//     break;
//   case 6:
//     console.log("hom nay la thu 6");
//     break;
//   case 7:
//     console.log("hom nay la thu 7");
//     break;
//   default:
//     console.log("so ngay khong hop le");
//     break;
// }

// vong lap while, do while, for
// yeu cau in ra cac so tu 1 den 10
let index = 11;
while (index <= 10) {
  console.log(index);
  ++index;
}

do {
  console.log(index);
  ++index;
} while (index <= 10);

// yeu cau nguoi dung nhap vao tu ban phim 1 so tu 2-7,
// neu hop le thi in ra so do va ket thuc vong lap
// neu khong hop le thi yeu cau nhap lai

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let arr1 = ["hoa", "ngoc", "hieu", "ha"];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// break, continue
// tim kiem va in ra chi so index cua ban ngoc trong mang arr1
let solanlap = 0;
for (let i = 0; i < arr1.length; i++) {
  solanlap++;
  if (arr1[i] == "ngoc") {
    console.log(i);
    break; // thoat khoi vong lap
  }
}
console.log(solanlap);

// in ra tat ca cac ban trong mang arr1, tru ban ngoc
solanlap = 0;
for (let i = 0; i < arr1.length; i++) {
  solanlap++;
  if (arr1[i] == "ngoc") {
    continue;
  }
  console.log(arr1[i]);
}

console.log(solanlap);
