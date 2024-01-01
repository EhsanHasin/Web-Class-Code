//JavaScript Object Constructors

function Person(i, n, a) {
  this.id = i;
  this.name = n,
  this.age = a,
  this.info = function(){
    console.log(this.id + " " + this.name);
  }
}

var p = new Person(1000, "Foo");
var q = new Person(2000, "Bar");
var r = new Person(3000, "Baz");
var s = new Person();

console.log(s);



//Object Types (Blueprints) (Classes)



//Adding a Property to an Object
p.age = 25;
console.log(p);



//Adding a Method to an Object
p.info = function() {
  console.log(this.id + " " + this.name);
}

p.info();
s.info();



//Adding a Property to a Constructor



//Adding a Method to a Constructor