// Setter
var Person = {
    name: "mdkhan",
    age: 25,
    get getname() {
        return this.name.toUpperCase();
    }
}
console.log(Person.getname);

// Getter

var PersonTwo = {
    name: "MD Khan",
    age: 24,
    set setName(n) {
        return this.name = n.toUpperCase();
    },
}
PersonTwo.setName = "Ahmad Khan";
console.log(PersonTwo);