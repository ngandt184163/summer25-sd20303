document.getElementById("changerbtl").addEventListener("click", function () {
  const randumcolor = "#" + Math.floor(Math.random() * 16677215).toString(16);
  document.body.style.backgroundColor = randumcolor;
});
