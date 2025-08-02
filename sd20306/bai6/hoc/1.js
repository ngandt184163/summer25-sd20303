let h2 = document.getElementById("tieude1");
console.log(h2);

h2.onclick = function () {
  // doi mau nen cho the h2
  //   h2.style.backgroundColor = "blueviolet";
  //   h2.style.color = "yellow";
  //   //   font-size => fontSize
  //   h2.style.fontSize = "50px";
  h2.setAttribute(
    "style",
    "background-color: blueviolet; color: yellow; font-size: 50px;"
  );
  h2.setAttribute("class", "tieude2");
  let a = document.getElementById("link1");
  a.setAttribute("href", "https://www.facebook.com");
  a.setAttribute("target", "_blank");
  a.setAttribute("data-id", "100");
  console.log(a.getAttribute("data-id"));
};
// thay doi css cho 1 ds cac phan tu
// them, xoa, sua class cho phan tu
// xu li su kien
// slide show, hieu anh re chuot doi anh
