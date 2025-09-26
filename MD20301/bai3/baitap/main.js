let age = prompt("nhap tuoi cua ban");

age = Number(age);

if (age < 3) {
  console.log("free");
} else if (age < 12) {
  console.log("5$");
} else if (age < 65) {
  console.log("10$");
} else {
  console.log("7$");
}
