//tao promt nhap n
window.onload = function () {
  let n = prompt("nhap n :");
  n = Number(n);

  if (isNaN(n)) {
    alert("nhap lai n");
  } else {
    if (n % 2 === 0) {
      alert("day la so chan");
    } else {
      alert("day la so le");
    }
  }
};
