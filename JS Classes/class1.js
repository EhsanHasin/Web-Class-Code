//JavaScript Classes

/*
ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
JavaScript Classes are templates for JavaScript Objects.
*/


//1- JavaScript Class Syntax
class ClassName {
    constructor() { }
}

//example
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
}


//2- Using a Class
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("BMW", 2019);



//3- The Constructor Method
/*
It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties
*/


//4- Class Methods

//example
class Person{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    info(){
        console.log(this.id +" : " + this.name);
    }
    getName(){
        return this.name;
    }
}

var p = new Person(1000, "Foo");
console.log(p.getName());