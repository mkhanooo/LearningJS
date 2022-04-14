

//Object Destructuring
let person = {name: "Peter", age: 28};
let {name, age} = person; // Object destructuring assignment
console.log(name, age);


//Array Destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits; // Array destructuring assignment
console.log(a, b);


// ES6 Arrow Function
let sum = (a, b) => a + b;
console.log(sum(1, 2));

//simple function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
