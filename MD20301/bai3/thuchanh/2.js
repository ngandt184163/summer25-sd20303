/**
 * I. Ham: la mot tap hop cac cau lenh
 * cung thuc hien 1 chuc nang va duoc dat duoi
 * mot cai ten chung (ten ham)
 * - dung ham de: tai sd lai ma nguon, bao tri,
 * sua doi ma nguon de dang hon
 *
 * - co 2 loai ham
 * + ham co san (built in function): la ham do
 * js dinh nghia san de thuc hien 1 chuc nang
 * nao do, chung ta chi can goi va sd
 * + nguoi dung tu dinh nghia: khi js khong co
 * san ham ma minh mong muon, thi luc do chung
 * ta se tu dinh nghia ham theo chuc nang rieng
 *   ----- ham khong co tham so, ham khong tra ve,
 * ham co tham so, ham co co tra
 *
 */

/** viet ham in ra thong tin sinh vien
 * nguyen van a, lop MD20302, diem so: 7
 */
/**
 * 1. ham khong co tham so
 * cap ngoac () la rong
 * 2. ham khong co gia tri tra ve
 * la ham khong co tu khoa return trong ham
 */
function showInfo() {
  console.log("ho ten: " + "nguyen van a");
  console.log("Lop: " + "MD20302");
  console.log("diem so: " + 7);
}

showInfo();
console.log(showInfo());

function showInfo1(user) {
  console.log("ho ten: " + user[0]);
  console.log("Lop: " + user[1]);
  console.log("diem so: " + user[2]);
  console.log("==================");
}

let nva = ["nguyen van a", "MD20302", 7];
let nvb = ["nguyen van b", "MD20301", 9];
let nvc = ["nguyen van c", "MD20305", 8.5];

showInfo1(nva);
showInfo1(nvb);
showInfo1(nvc);

/**
 * viet 1 ham tinh tong 2 so va tra ve tong
 * do bang tu khoa return, sau do sd tong
 * do viet ham tinh binh phuong cua no
 *
 * 1. ham khong co gia tri tra ve: khi ket
 * qua tra ve la khong can thiet, khong can
 * luu tru, khong can cho cac phep toan phia
 * sau, thuong la cac ham show, in thong tin
 * de quan sat
 *
 * 2. ham co gia tri tra ve: khi ket qua
 * tra ve la can thiet, can luu tru, can cho
 * cac phep toan phia sau
 */

function sum(a, b) {
  let c = a + b;
  return c;
}

console.log(sum(2, 3));
console.log(sum(5, 6));

function binhphuong(sum) {
  let bp = sum * sum;
  return bp;
}
/**
 * sau khi ham sum(2, 3) duoc tinh toan
 * thi ket qua tra ve duoc luu vao bien sum1
 */
let sum1 = sum(2, 3);
let sum2 = sum(5, 6);
// console.log(binhphuong(sum(2, 3)));
// console.log(binhphuong(sum(5, 6)));
console.log(binhphuong(sum1));
console.log(binhphuong(sum2));

/**
 * 2. pham vi bien
 * + toan cuc: khai bao o ben ngoai
 * tat ca cac block code(khai bao truc tiep
 * trong file .js)
 * + cuc bo: khao bao ben trong block code
 * the hien bang dau {}
 */

/**
 * 3. su li su kien: gan truc tiep vao
 * the html thong qua thuoc tinh ve su kien
 * ++ su kien thuong la cac hanh dong, thao
 * tac cua nguoi dung tren trang web
 * - onclick
 * - onmouseover
 * - onmouseout
 * - onchange
 * - onblur
 */

function bam() {
  alert("xin chao ban");
}

function rechuot() {
  alert("hahahhahahahaha hahahaha");
}
