let canvas = document.getElementById("canvas");
// lay kieu ve 2d
let ctx = canvas.getContext("2d");
canvas.width = 500; // chieu dai khung
canvas.height = 400; // chieu rong khung
// tao vien mau do net lien cho khung
canvas.style.border = "1px solid red";

// viet chu
ctx.fillStyle = "red"; // chon mau chu
ctx.font = "30px Arial"; // chon font va co chu
// viet chu va chon vi tri dat chu
ctx.fillText("Hello World", 100, 100);

// ve hinh
ctx.strokeStyle = "violet";
ctx.strokeRect(300, 200, 100, 100);

// ve hinh chu nhat, ve duong thang, ve
// cung tron, ve chu rong, ve hinh thang
