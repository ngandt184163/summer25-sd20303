let a = prompt("Nhap tuoi :");
if (!Number(a)) {
  console.log("Vui long nhap tuoi");
} else if (a < 3) {
  console.log("Mien phi");
} else if (a < 12) {
  console.log("5$");
} else if (a < 65) {
  console.log("10$");
} else {
  console.log("7$");
}

let arr = ["html", "css", "javascript", "nodejs"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (const o of arr) {
  console.log(o.toUpperCase());
}
//Trung Kien
