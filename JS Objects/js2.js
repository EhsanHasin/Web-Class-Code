//Creating a JavaScript Object

//----1
var a = {age: 25, name: "Ahmad", isMarried: true};
a.sallary = 45;
console.log(a);

//----2
var b = new Object();
b.age = 46;
b.sallary = 70000;
b.isMarried = false;
console.log(b);


//----3
function Person(id, name, age, sallary) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.sallary = sallary;
}
var c = new Person(2000, "Foo", 34, 3000000);
console.log(c);


//----4
var d = Object.create({id: 1000});
d.age = 66;
d.sallary = 2999999;
console.log(d);