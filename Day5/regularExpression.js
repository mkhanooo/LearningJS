

let reg = /khan/g; //g is for global
reg = /khan/i; // case insensitive
reg = /khan/m; // multi line
reg = /Khan/gim; // case insensitive and multi line
console.log(reg);
console.log(reg.source); // to get the source of the regular expression

let s = "khan is a good man. khan is good man";

let result = reg.exec(s);
console.log(result);
result = reg.exec(s);
console.log(result);
result = reg.exec(s);
console.log(result);

