let arr = [2, 5, 7, 9, 1];
let max = arr[0];
let sum = 0;

function bai7() {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  document.writeln("Tong = " + sum);
  document.writeln("So lon nhat = " + max);
}
//PH48680
