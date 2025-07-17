let day;
do {
  day = Number(prompt("Nhap ngay trong tuan"));
  if (day < 1 || day > 7) {
    alert("Nhap lai ngay trong tuan");
  } else {
    console.log(day);
  }

  //   if (day >= 1 && day <= 7) {
  //     console.log(day);
  //   }
} while (day < 1 || day > 7);
