// function sayHello(name) {
//   if (name === undefined) {
//     console.log("Hello world");
//   } else {
//     console.log("Hello" + name);
//   }
// }
// sayHello(" Dat");
// sayHello();

function sayHi(name = "World") {
  console.log("Hello " + name);
}

sayHi("Nam");
sayHi();
