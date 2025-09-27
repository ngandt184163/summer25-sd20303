/**
 * 1. ham: la mot tap hop cac cau lenh,
 * cung thuc hien 1 chuc nang va duoc dat duoi
 * 1 cai ten chung(ten ham);
 * - sd ham de tai sd lai doan ma, bao tri,
 * nang cap sau nay de dang hon
 * - co 2 loai ham
 * + ham co san(built in function):
 * la ham do js dinh nghia san, chi can goi
 * va dung;
 * + ng dung tu dinh nghia(hom nay hoc):
 * khi ma js khong co san thi chung ta tu
 * di dinh nghia nen ham
 *  ++ cac loai ham: ham khong co tham so,
 *  ham co tham so, ham khong co gia tri
 *  tra ve, ham co gia tri tra ve.
 */

/** in ra thong tin cua sinh vien
 * ten: nguyen van a
 * tuoi: 19
 * lop: MD20302
 * diem so: 6.5
 */

function showInfo() {
  console.log("ten: " + "nguyen van a");
  console.log("tuoi: " + 19);
  console.log("lop: " + "MD20302");
  console.log("diem so: " + 6.5);
}
// de ham thuc thi thi can goi ham
showInfo();
/**
 * - ham khong co tham so: la ham co
 * cap ngoac () rong
 * - ham khong co gia tri tra ve: la
 * ham khong co tu khoa return trong ham
 */
console.log(showInfo());

function showInfo1(user) {
  console.log("ten: " + user[0]);
  console.log("tuoi: " + user[1]);
  console.log("lop: " + user[2]);
  console.log("diem so: " + user[3]);
  console.log("------------------");
}

let nvb = ["nguyen van b", 20, "MD20301", 9];
let nvc = ["nguyen van c", 23, "MD20303", 10];
let nvd = ["nguyen van d", 29, "MD20305", 4];
showInfo1(nvb);
showInfo1(nvc);
showInfo1(nvd);
let test = showInfo1(nvb);
console.log(test);

/** yc viet ham tinh tong 2 so */
function sum(a, b) {
  let c = a + b;
  return c;
}
// sau khi cong thi ket qua duoc luu tru
// trong bien sum1
let sum1 = sum(2, 3); // gia tri cua bien c
let sum2 = sum(5, 6);

console.log(sum1);
console.log(sum2);

/**
 * - ham co tra ve: su dung khi ket qua
 * cua ham con can de su dung tiep cho
 * cac phep toan phia sau, hoac
 * de luu tru vao database
 * - ham khong tra ve: thuong thi la cac
 * ham show, in thong tin, sau khi xem xong
 * thi khong can dun nua nen khong can
 * tra ve
 */

/**
 * 2. pham vi bien
 * - khong quan tam den tu khoa khai bao bien
 * la gi
 * - co 2 pham vi bien
 * + toan cuc: khai bao o ben ngoai,
 * co the truy cap o bat ki dau
 * + cuc bo: khai bao ben trong cac block
 * code, cho hoat dong trong block code do
 */

/**
 * x la bien toan cuc, duoc khai bao o
 * ben ngoai file js, co dang duoc truy cap
 * tu ben trong khoi if ma khong bi loi
 */
let x = 3;
if (x < 10) {
  /**
   * y la bien cuc bo, duoc khai bao
   * trong block code cua cau truc if,
   * no co the hoat dong trong khoi {}
   * nay cua if ma khong bi loi, ngoai ra
   * khong the truy cap duoc o bat o dau
   */
  let y = x + 100;
  console.log(y);
}

// console.log(y); // loi y chua dc khai bao

/**
 * 3. xu li su kien: gan truc tiep
 * su kien do vao the html thong qua thuoc
 * tinh lien quan den su kien
 */
function welcome() {
  alert("chao mung den voi trang web");
}

function rechuot() {
  alert("hi hihihiihihihihihih");
}
