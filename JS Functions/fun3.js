//JavaScript Function call()

//With the call() method, you can write a method that can be used on different objects.

const p1 = {
    name: "Foo",
    age: 25,
    info: function(){
        console.log(`${this.name}, you are ${this.age} years old`);
    },
    setName: function(name){
        this.name = name;
    }
};

p1.info();

const p2 = {
    name: "Bar",
    age: 35,
};

p1.info.call(p2);
p1.setName.call(p2,"Baz");
p1.info.call(p2);