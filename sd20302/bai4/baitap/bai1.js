function dog(name, weight, color) {
  this.name = name;
  this.weight = weight;
  this.color = color;

  this.bark = function () {
    return "Gau gau!";
  };
}

let dog1 = new dog("cho1", 17, "do");
let dog2 = new dog("cho2", 20, "vang");
console.log(dog1.name);
console.log(dog1.bark());

console.log(dog2.name);
console.log(dog2.bark());

// PH59366
