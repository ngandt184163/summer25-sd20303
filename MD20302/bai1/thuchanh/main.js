console.log("day la file main.js");

/**
 * chu thich trong js co 2 cach
 * 1. cach 1: dung // de chu thich tren 1 dong
 * 2. dung /* de chu thich tren nhieu dong
 *
 */

let a = 5; // bien a co gia tri la 5
let A = 10;
console.log(a);
console.log(A); // print trong c/c++

/**
 * chu thich tren nhieu dong
 * day la chu thich tren nhieu dong
 *
 */

// built in function
alert("xin chao");
console.error("loi cu phap");

let tuoi = prompt("b bao nhieu tuoi");
console.log(tuoi);

if (confirm("ban co muon xoa khong?")) {
  alert("ban da xoa");
} else {
  alert("ban da khong xoa");
}

// ham random ra so tu 0-1
let ran = Math.random();
console.log(ran);
console.log(Math.ceil(ran * 100));
console.log(Math.floor(ran * 100));
