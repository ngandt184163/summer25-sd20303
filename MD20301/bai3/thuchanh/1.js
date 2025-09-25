/**
 * 1. cau truc dieu khien: la tap hop cac cau lenh
 * quyet dinh luong thuc thi cua chuong trinh
 * (chay theo huong nao, lap lai bao nhieu lan)
 *
 * 2. Vong lap: no la 1 cau truc dieu khien
 * dac biet cho phep lap di lap lai mot khoi
 * lenh nhieu lan cho den khi dieu kien
 * khong con dung nua
 *
 * 3. dung cau truc dieu khien khi nao
 * - khi can chuong trinh ra quyet dinh
 * vd: dung thi lam gi, sai thi lam gi
 * - vong lap: dung khi can thuc hien lap lai
 * cung mot cong viec nhieu lan
 *
 * 4. nho co cau truc dieu khien ma chuong trinh
 * khong chay tuan tu tu tren xuong duoi ma co
 * the re nhanh, lap lai hoac dung lai dung luc
 */

// let tuoi = prompt("nhap tuoi cua ban");
// tuoi = Number(tuoi);
// console.log(typeof tuoi);
// if (tuoi >= 18) {
//   console.log("du tuoi di mua ruou");
// } else {
//   console.log("chua du tuoi di mua ruou");
// }

/**
 * nhap vao diem thi
 * 0 - nho hon 5 : diem yeu
 * 5 - nho hon 7 : diem trung binh
 * 7 - nho hon 9 : diem kha
 * 9 - tro len : diem gioi
 */
// let diem = Number(prompt("nhap diem: "));
// if (diem >= 0 && diem < 5) {
//   console.log("diem yeu");
// } else if (diem >= 5 && diem < 7) {
//   console.log("diem trung binh");
// } else if (diem >= 7 && diem < 9) {
//   console.log("diem kha");
// } else if (diem >= 9 && diem <= 10) {
//   console.log("diem gioi");
// } else {
//   console.log("diem khong hop le");
// }

/**
 * yc nguoi dung nhap vao cac so tu 2-8
 * chung ta se in ra thu trong tuan tuong ung
 */
// let thu = Number(prompt("nhap so  tu 2-8: "));
// switch (thu) {
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
//   case 8:
//     console.log("hom nay la chu nhat");
//     break;
//   default:
//     console.log("so khong hop le");
//     break;
// }

// chuyen doan code switch case thanh if else
// if (thu == 2) {
//   console.log("hom nay la thu 2");
// } else if (thu == 3) {
//   console.log("hom nay la thu 3");
// } else if (thu == 4) {
//   console.log("hom nay la thu 4");
// } else if (thu == 5) {
//   console.log("hom nay la thu 5");
// } else if (thu == 6) {
//   console.log("hom nay la thu 6");
// } else if (thu == 7) {
//   console.log("hom nay la thu 7");
// } else if (thu == 8) {
//   console.log("hom nay la chu nhat");
// } else {
//   console.log("so khong hop le");
// }

/**
 * 1. while: thuc hien lap di lap lai mot khoi lenh
 * cho den khi dieu kien khong con dung nua,
 * kiem tra dieu kien lap ngay tu lan lap dau
 * tien, sd trong truong hop chua biet truoc
 * so lan lap
 *
 * . do while: thuc hien lap di lap lai mot khoi lenh
 * cho den khi dieu kien khong con dung nua,
 * kiem tra dieu kien lap tu lan lap thu 2
 *
 * for: thuc hien lap di lap lai mot khoi lenh
 * cho den khi dieu kien khong con dung nua,
 * kiem tra dieu kien lap ngay tu lan lap dau
 * tien, thuong sd cho truong hop da biet
 * truoc so lan lap
 * */

/**
 * yc nguoi dung nhap vao mot so lon hon 10
 * neu nhap sai yeu cau nhap lai cho
 * den khi dung, in ra so nhap dung
 */
// let x;
// do {
//   x = Number(prompt("nhap so lon hon 10: "));
//   if (x >= 10) {
//     console.log("so nhap dung la: ", x);
//   } else {
//     alert("nhap lai");
//   }
// } while (x < 10);

/**yc ve nha: sd vong lap while in ra cac so tu 1-10 */

let students = ["hoa", "lan", "hieu", "hoa", "hung"];
console.log(students);
// in ra ds sv trong lop
// vong lap se lap 5 lan vi lop co 5 sv
/**
 * let i = 0: khoi tao bien chay i voi gia tri 0
 * vi khoa cua mang bat dau chay tu gia tri 0
 * i < students.length : la dieu de lap lai
 * khi nao i con nho hon do dai cua mang
 * thi luc do van con lap
 * i++: tang gia tri cua bien i sau moi lan lap
 */
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
// yc ve nha thuc hanh voi for in, for of, for each

/**
 * 1. break:dung de thoat khoi vong lap
 * 2. continue: dung de bo qua vong lap
 * hien thoi va nhay sang vong lap ke tiep
 */

// tim kiem nguoi co ten la lan trong mang va in ra
let solanlap = 0;
for (let i = 0; i < students.length; i++) {
  solanlap++;
  if (students[i] == "lan") {
    console.log("tim thay nguoi co ten la: " + students[i]);
    break;
  }
}
console.log("so lan lap: " + solanlap);
console.log("====================================");

// in ra ds sv trong lop tru ban ten la hoa
solanlap = 0;
for (let i = 0; i < students.length; i++) {
  solanlap++;
  if (students[i] == "hoa") {
    continue;
  }
  console.log(students[i]);
}
console.log("so lan lap: " + solanlap);
