let btn1 = document.getElementById("btn1");
console.log(btn1);
let h3 = document.getElementById("td3");
console.log(h3);
// gan su kien click cho btn1
btn1.onclick = function () {
  h3.style.backgroundColor = "yellow";
  h3.style.fontSize = "30px";

  //cach 2 sd setAttribute
  //   h3.setAttribute("style", "text-align: center; font-style: italic;");
};

// thay doi css cho ds li
let lis = document.getElementsByTagName("li"); // tra ve ds the li
console.log(lis);
let btn2 = document.getElementById("btn2");
console.log(btn2);
btn2.onclick = function () {
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.fontSize = "40px";
  }
};

btn2.setAttribute("class", "btn2");
btn2.setAttribute("data-id", "id12345");
console.log(btn2.getAttribute("data-id"));

let a = document.getElementById("ytb");
let img = document.getElementById("img");
console.log(a, img);

a.setAttribute("href", "https://www.youtube.com/");
img.setAttribute("src", "bc.png");
