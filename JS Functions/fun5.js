//JavaScript Function bind()

//1- With the bind() method, an object can borrow a method from another object.


const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
    add: function (x,y) {
      console.log(x+y);
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);
  let x = person.add.bind(member);
  console.log(fullName());
  x(6,6);
  // member.x(9,9);
