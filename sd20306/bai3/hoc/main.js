// 1. if else
if (3 < 2) {
  // true
  // dieu kien ma dung thi doan code duoi day
  // se duoc thuc hien
  console.log(" 3 lon hon 2");
} else {
  // false
  // dieu kien ma sai thi doan code duoi day
  // se duoc thuc hien
  console.log(" 3 nho hon 2");
}

// yeu cau ng dung nhap vao cac so tu 2-7
// sau do ban in ra thu tuong ung trong tuan

// let ngay = Number(prompt("nhap ngay tu 2-7"));
// console.log(typeof ngay);
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
//   console.log("nhap sai thu");
// }

// // 2.switch case
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
//     console.log("nhap sai thu");
//     break;
// }

// in ra cac so tu 1 den 10;
let i = 1;
while (i <= 10) {
  // dieu kien dung, doan code duoi day duoc
  // thuc thi
  console.log(i);
  ++i;
}

i = 1;
do {
  console.log(i);
  ++i;
} while (i <= 10);

// yc ng dung nhap vao cac so tu 2-7
// neu nhap dung thi in ra so do, neu nhap sai
// thi yc nhap lai

// let a = Number(prompt("nhap so tu 2-7"));
// if (a == 2) {
//   alert("hom nay la thu 2");
// }
// if (a == 3) {
//   alert("hom nay la thu 3");
// }
// if (a == 4) {
//   alert("hom nay la thu 4");
// }
// if (a == 5) {
//   alert("hom nay la thu 5");
// }
// if (a == 6) {
//   alert("hom nay la thu 6");
// }
// if (a == 7) {
//   alert("hom nay la thu 7");
// }
// while (a < 2 || a > 7) {
//   alert("nhap lai");
//   a = prompt("nhap so tu 2-7");
// }
// if (typeof a == "string") {
//   alert("Nhap tu 2-7");
//   a = prompt("nhap so tu 2-7");
// }

// console.log(a);

// let x;

// do {
//   x = Number(prompt("nhap so tu 2-7"));
//   if (x < 2 || x > 7) {
//     alert("nhap lai");
//   } else {
//     console.log(x);
//   }
// } while (x < 2 || x > 7);

// ph57969

// for: thuong su dung de duyet mang
let arr1 = [1, 2, 3, 4, 5];
// for (khoi tao gia ; dieu kien thuc hien ; thay doi gia) {
//   // neu dieu kien dung thi doan code duoc thuc hien
//   console.log(khoi tao gia);
// }

for (let index = 0; index < arr1.length; index++) {
  console.log(arr1[index]);
  6;
}

// for in, for of, for each; ve nha tim hieu them
for (let index = 1; index <= 10; index++) {
  console.log(index);
}

// tim va in ra phan tu mang co gia tri bang 3 dau tien
let solanlap = 0;
for (let index = 0; index < arr1.length; index++) {
  solanlap++;
  if (arr1[index] == 3) {
    console.log(arr1[index]);
    break;
  }
}
console.log("so lan lap la: " + solanlap);

// in ra cac phan tu mang co gia tri khac 3
solanlap = 0;
for (let index = 0; index < arr1.length; index++) {
  solanlap++;
  if (arr1[index] == 3) {
    continue;
  }
  console.log(arr1[index]);
}
console.log("so lan lap la: " + solanlap);
