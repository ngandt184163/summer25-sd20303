function inbangcuuchuong() {
  let n = document.getElementById("n").value;
  let ketqua = document.getElementById("ketqua");

  //   if (isNaN(n) || n > 0 || n < 10) {
  //     return;
  //   }

  for (let i = 0; i <= 10; i++) {
    ketqua.innerHTML += n + "x" + i + "=" + n * i;
  }
}
