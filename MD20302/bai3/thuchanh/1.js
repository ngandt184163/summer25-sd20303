/**
 * 1. cau truc dieu khien: la tap hop cac cau lenh
 * quyet dinh luong thuc thi cua chuong trinh
 * (chay theo huong nao, lap lai bao nhieu lan)
 *
 * 2. vong lap la 1 cau truc dieu khien dac biet
 * cho phep lap di lap lai mot khoi lenh cho den
 * khi dieu kien khong con dung nua
 *
 * 3. dung cac cau truc dieu khien trong truong
 * hop:
 * - khi can chuong trinh ra quyet dinh
 * vd( dung thi lam gi, sai thi lam gi)
 * - vong lap: dung khi can thuc hien lap di lap
 * lai cung 1 cong viec( lap di lap lai 1 doan
 * ma)
 *
 * 4. nho co cau truc dieu khien ma chuong trinh
 * khong chay tuan tu tu tren xuong duoi ma co the
 * re nhanh, lap lai, dung dung luc
 */

/**
 * yc ng dung nhap vao cac so tu 2-8
 * sau do in ra cac thu tuong ung trong tuan
 */
// let thu = prompt("nhap so tu 2-8:");
// // sau khi ep sang kieu number thi gan lai cho
// // bien thu
// thu = Number(thu);
// console.log(typeof thu);2

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

// // doi sang cau tru switch case
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
//     console.log("so k hop le");
//     break;
// }

/**
 * if else: su dung cho cac dieu kien phuc tap
 * ket hop nhieu dieu xu li, toan tu lai voi nhau
 * switch case: dung cho cac truong hop dieu
 * kien so sanh don gian, thuong la lien quan
 * den kieu string, number
 */

/**
 * nhap vao diem so tu 0-10
 *  diem >=0 && diem < 5: diem yeu
 * diem >= 5 && diem < 7: diem trung binh
 * diem >= 7 && diem < 9: diem kha
 * diem >= 9 && diem <= 10: diem gioi
 *
 */

// let diem = Number(prompt("nhap diem 0 - 10: "));

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
 * 1. while: lap di lap lai 1 khoi lenh
 * cho den khi dieu kien lap k con dung nua,
 * se kiem tra dieu kien lap ngay tu lan lap
 * dau tien, sd trong truong hop chua biet
 * truoc so lan lap
 *
 * 2. do while: lap di lap lai 1 khoi lenh
 * cho den khi dieu kien lap k con dung nua,
 * se kiem tra dieu kien lap tu lan lap
 * thu 2, sd trong truong hop chua biet
 * truoc so lan lap
 *
 * 3. for: lap di lap lai 1 khoi lenh
 * cho den khi dieu kien lap k con dung nua
 * se kiem tra dieu kien lap ngay tu lan lap
 * dau tien, sd cho truong hop biet truoc so lan
 * lap ( thuong sd cho mang)
 */

/**
 * yc nguoi dung nhap vao mot so lon hon 10
 * neu nhap sai yeu cau nhap lai cho den khi
 * dung, neu nhap dung thi in ra so do
 */

// let x;
// do {
//   x = Number(prompt(" nhap so lon hon 10: "));
//   if (x < 10) {
//     alert("nhap lai");
//   } else {
//     console.log("so da nhap dung: " + x);
//   }
// } while (x < 10);

/**
 * sd vong lap while de giai quyet bai toan sau
 * yc in ra cac so chan nho hon 10;
 */

let students = ["hoa", "lan", "ha", "hoa", "hung"];
console.log(students);
/**
 * in ra ds sinh vien trong lop
 * vi ds sv da biet truoc co bao nhieu ban
 * moi ban se tuong ung voi 1 lan lap lai
 * khoi lenh => sd vong for la hop li
 */
/**
 * for (khoi tao bien chay; dieu kien lap, buoc nhay) {
}
 * 1. khoi tao bien chay
 * let i = 0;// 
 * 2. dieu kien lap: i < students.length
 * lap khi gia tri cua i con nho hon so luong
 * phan tu mang
 * 3. buoc nhay: i++
 * moi lan lap thi tang bien i them 1 don vi
 */

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

console.log("====================================");
/**
 * tim va in ra ban ten la "lan" trong lop hoc
 */

let solanlap = 0;
for (let i = 0; i < students.length; i++) {
  solanlap++;
  if (students[i] == "lan") {
    console.log(students[i]);
    // lap tuc thoat khoi vong lap khi
    // tim thay "lan"
    break;
  }
}
console.log("so lan lap: " + solanlap);

console.log("====================================");
/**
 * in ra tat ca sinh vien trong lop
 * tru ban ten "hoa"
 */

solanlap = 0; // gan lai gia tri bang 0 cho bien
for (let i = 0; i < students.length; i++) {
  solanlap++;
  if (students[i] == "hoa") {
    // bo qua vong lap hien tai khi tim
    // thay "hoa", cu the la bo qua tat ca cac
    // cau lenh con lai cua vong lap do
    // sau cau lenh continue;
    continue;
  }
  console.log(students[i]);
}
console.log("so lan lap: " + solanlap);
