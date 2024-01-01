//JavaScript Object Prototypes

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

//Using the prototype Property
Object.prototype.salary = 20000;

var p = new Person();
console.log(p.salary);

// Object.prototype.mine = 2023;

var d = new Date();
Date.prototype.mine = 2023;
console.log(d.mine);