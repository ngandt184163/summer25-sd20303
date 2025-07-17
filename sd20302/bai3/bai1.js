let age = prompt("Nhap vao tuoi cua ban: ");

age = Number(age);

if (isNaN(age) || age < 0) {
  alert("Nhap tuoi hop le, la so lon hon 0");
} else if (age < 3) {
  alert("Mien phi");
} else if (age < 12) {
  alert("Gia 5$");
} else if (age < 65) {
  alert("Gia 10$");
} else {
  alert("Gia 7$");
}

// PH59366
