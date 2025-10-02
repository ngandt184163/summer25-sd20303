/**
 * 1.BOM la cac doi tuong ma js cung cap san
 * de nguoi dung thao tac voi trinh duyet,
 * cac doi tuong trong BOM cung cap cac thuoc
 * tinh va phuong thuc de thao tac voi trinh duyet
 */

// in ra cac doi tuong
console.dir(window);
// alert("xin chao");
// buoi sau demo lai
console.dir(history);
history.back();
console.dir(location);
console.log(location.href);
// chuyen huong bang cach su dung js
function truyCapDantri() {
  window.location.href = "https://dantri.vn/";
}
console.dir(screen);
console.log(screen.width, screen.height);

/**
 * 1. lay theo id: lay duoc phan tu dau tien co id
 * tuon ung
 */

let h3_1 = document.getElementById("td3");
console.log(h3_1);

/**
 * lay theo class: lay duoc danh sach cac phan tu co
 * cung class tuong ung, sd cu phap thao tac voi
 * phan tu mang de truy xuat phan tu mong muon
 */
let h3_2 = document.getElementsByClassName("td3");
console.log(h3_2);
let p = h3_2[1];
console.log(p);
console.log(p.innerText);

// thay doi van ban cua phan tu
p.innerHTML = "<i>hello world</i>";
console.log(p.innerText);
/**
 * lay theo tagname: lay duoc danh sach cac phan tu co
 * cung ten tuong ung, sd cu phap thao tac voi
 * phan tu mang de truy xuat phan tu mong muon
 */

let h3_3 = document.getElementsByTagName("h3");
console.log(h3_3);
console.log(h3_3[0]);
