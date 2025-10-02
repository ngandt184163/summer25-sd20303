/**
 * <!-- BOM la cac doi tuong ma js cung cap,
     cac doi tuong nay cung cap cac thuoc tinh
     va phuong thuc de nguoi dung thao tac 
     voi trinh duyet: lay chieu dai, chieu
     rong man hinh, do phan giai, lay lich su
     truy cap, lay duong dan hien tai, .... -->
 */

console.dir(window);
// alert("xin chao");
console.dir(history);
console.dir(location);
// dung de chuyen huong trong js
console.log(location.href);

function truyCapYoutube() {
  window.location.href = "https://www.youtube.com/";
}
console.dir(navigator);
console.log(screen.width);
console.log(screen.height);

/**
 * lay ra phan tu thong qua DOM
 */

/**
 * lay qua id: lay duoc phan tu dau tien co id
 * tuong ung
 */

let h3_1 = document.getElementById("td3");
console.log(h3_1);

/**
 * lay qua class: tra ve mot danh sach cac the
 * co cung class tuong ung, thao tac giong nhu
 * thao tac voi mang
 */
let h3_2 = document.getElementsByClassName("td3");
console.log(h3_2);
console.log(h3_2[0]);

/**
 * lay qua tagname: lay ra mot danh sach cac the
 * co cung ten tuong ung
 */

let h3_3 = document.getElementsByTagName("h3");
console.log(h3_3);
console.log(h3_3[0]);

// chen 1 doan text khac
h3_1.innerText = "xin chao cac ban";
h3_1.innerHTML = "<del>xin chao cac ban</del>";
h3_1.innerHTML = "<mark>xin chao cac ban</mark>";

/**
 * de giai quyet van de chen cua innerHTML
 * thi dung cac phuong thuc tao node va add node
 */

let b = document.createElement("b");
b.innerText = "hello world";
// them vao cuoi the h3
h3_1.appendChild(b);
let i = document.createElement("i");
i.innerText = "hahhaa";
// them vao dau the h3
h3_1.prepend(i);

// xoa phan tu
h3_1.removeChild(b);

let btn_fb = document.getElementById("btn-fb");
console.log(btn_fb);
// gan su kien click
btn_fb.onclick = function () {
  window.location.href = "https://www.facebook.com/";
};
