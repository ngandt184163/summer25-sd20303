/**
 * toan tu spread va rest
 * -spread: dung de trai cac phan
 * tu cua mang, chuoi, doi tuong, ...
 * - rest: dung de gom nhieu gia
 * tri lai thanh 1 mang
 */
let a = [1, 2, 3];
let b = [...a];
console.log(b);

let [first, ...other] = [10, 20, 30, 40];
console.log(first);
console.log(other);

/**
 * 2. cau truc dieu khien: dung de
 * dieu khien luong thuc thi cua
 * chuong trinh
 * - if else: dieu khien voi 2 truong
 * hop, neu dung thi chay khoi lenh
 * trong if, neu sai chay khoi lenh
 * trong else (neu co else)
 * - if else long nhau: sd khi co
 * nhieu hon 2 truong hop
 * - switch case: sd trong truong hop
 * co nhieu hon 2 dieu kien, nhung gia
 * tri so sanh phai la gia tri don gian,
 * la cac gia tri kieu nguyen thuy
 * (number, string, boolean, ...)
 *
 */

let age = 12;
if (age >= 18) {
  // dk dung thi thuc hien
  console.log("du tuoi mua ruou");
}
// else {
//   // dk sai thi thuc hien
//   console.log("chua du tuoi");
// }

/**
 * yeu cau benh nhan lua chon lich
 * kham tu thu 2-7, neu chon dung
 * thi hien thi lich thanh cong,
 * neu chon chua dung thi thong
 * bao lua chon chua hop le
 */
let lich_kham = prompt("lua chon lich kham");
if (lich_kham == 2) {
  console.log("ban da dat lich thanh cong vao thu 2");
} else if (lich_kham == 3) {
  console.log("ban da dat lich thanh cong vao thu 3");
} else if (lich_kham == 4) {
  console.log("ban da dat lich thanh cong vao thu 4");
} else if (lich_kham == 5) {
  console.log("ban da dat lich thanh cong vao thu 5");
} else if (lich_kham == 6) {
  console.log("ban da dat lich thanh cong vao thu 6");
} else if (lich_kham == 7) {
  console.log("ban da dat lich thanh cong vao thu 7");
} else {
  console.log("lua chon khong hop le");
}

// viet lai lich kham duoi dang switch case
console.log(typeof lich_kham);
switch (lich_kham) {
  case "2":
    console.log("dat lich thanh cong vao thu 2");
    break;
  case "3":
    console.log("dat lich thanh cong vao thu 3");
    break;
  case "4":
    console.log("dat lich thanh cong vao thu 4");
    break;
  case "5":
    console.log("dat lich thanh cong vao thu 5");
    break;
  case "6":
    console.log("dat lich thanh cong vao thu 6");
    break;
  case "7":
    console.log("dat lich thanh cong vao thu 7");
    break;
  default:
    console.log("lua chon khong hop le");
    break;
}

/**
 * vong lap: khi muon lap lai 1
 * khoi code nao do trong mot
 * dieu kien gia dinh la dung
 * thi ta sd vong lap (lap di lap
 * lai den khi nao dieu kien
 * con dung)
 * 1. for: sd khi biet truoc so lan
 * lap (thuong dung de duyet mang)
 * 2. while: dung khi chua biet truoc
 * so lan lap, chi chay khi dk dung
 * 3. do while: dung khi chua biet
 * truoc si lan lap, se chay it nhat
 * 1 lan cho du dk sai
 * 4. for of: duyet qua gia tri cua
 * mang, doi tuong, map, ....
 * 5. for in: duyet qua khoa(key) cua
 * mang, doi tuong, map, ....
 */

/**
 * in ra cac so tu 1-10
 * truong hop nay ta biet se lap
 * 10 lan
 */

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let j = 1;
do {
  console.log("da vao do while");
  console.log(j);
} while (j < 0);

while (j < 0) {
  console.log("da vao while");
  console.log(j);
}

let students = ["hoa", "lan", "nhu", "ngoc"];
console.log(students);
for (let item of students) {
  console.log(item);
}

for (let key in students) {
  console.log(key);
}

/**
 * tu khoa break, continue
 * - break: dung de thoat khoi vong lap
 * - continue: dung de bo qua vong lap
 * hien thoi va tiep tuc vong lap tiep theo
 */

// in ra so tu 1-10, neu gap so 5 thi k in
let so_lan_lap = 0;
for (let i = 1; i <= 10; i++) {
  so_lan_lap++;
  if (i == 5) {
    continue;
    // sau khi continue duoc chay
    // thi no se bo qua tat ca cac doan
    // code con lai sau do trong vong lap
    // hien thoi va nhay sang vong lap tiep
    // theo
  }
  console.log(i);
}
console.log("so lan lap: ", so_lan_lap);
