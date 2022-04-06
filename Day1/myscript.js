let x = 10;
let y = 6;
let a = x + y;
let b = x - y;
let c = x * y;
let d = x / y;
let e = x % y;
document.getElementById("add").innerHTML = x + " + " + y + " = " + a;
document.getElementById("sub").innerHTML = x + " - " + y + " = " + b;
document.getElementById("div").innerHTML = x + " * " + y + " = " + c;
document.getElementById("mul").innerHTML = x + " / " + y + " = " + d;
document.getElementById("rem").innerHTML = x + " % " + y + " = " + e;


const cars = ["Audi", "Volvo", "BMW"];
document.getElementById("car").innerHTML = cars;
cars.push("Ford");


const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
document.getElementById("fullname").innerHTML =
  person.firstName + " " + person.lastName;
document.getElementById("age").innerHTML =
  person.firstName + " is " + person.age + " years old.";
document.getElementById("eye").innerHTML =
  person.firstName + " has " + person.eyeColor + " colored eyes.";