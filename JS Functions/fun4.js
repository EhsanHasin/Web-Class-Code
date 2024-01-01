//JavaScript Function apply()

//1- With the apply() method, you can write a method that can be used on different objects.

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "Mary Doe":
person.fullName.apply(person1);

//2- The Difference Between call() and apply()
//The call() method takes arguments separately.
//The apply() method takes arguments as an array.

const operations = {
    add: function(x,y) {
        console.log(x + y);        
    },
    sub: function(x,y) {
        console.log(x - y);        
    },
}

const calculator = {

}

operations.add.apply(calculator, [2,3]);
operations.add.call(calculator, 2,4)


//
console.log(Math.max.apply(null, [4,5,6,4,3,4,5,9]));

