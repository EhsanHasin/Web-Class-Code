//JavaScript Object Methods
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };


//1- What is this?


//2- Accessing Object Methods
console.log(person.fullName);
console.log(person.fullName());


//3- Adding a Method to an Object
person.printInfo = function(){
  console.log(this.id);
  console.log(this.firstName);
  console.log(this.lastName);
}


console.log(person);
person.printInfo();

