//JavaScript Object Properties
const person = {
  fname: " John",
  lname: " Doe",
  age: 25,
};

//1- Accessing JavaScript Properties
console.log(person.fname);
console.log(person['fname']);

//2- JavaScript for...in Loop
for(let x in person){
    console.log(person[x]);
    // console.log(person.x);
}

//3- Adding New Properties
person.salay = 10000;
console.log(person);

//4- Deleting Properties
delete person.age;
delete person['fname'];
console.log(person);

//5- Nested Objects | Nested Arrays and Objects
const person2 = {
    fname: " John",
    lname: " Doe",
    age: 25,
    friends: [
        {
            fname: " Ahmad",
            lname: " Doe",
            age: 25,
          },
          {
            fname: " Karim",
            lname: " Doe",
            age: 25,
          },
          {
            fname: " Mahmood",
            lname: " Doe",
            age: 25,
          },
          {
            fname: " Safi",
            lname: " Doe",
            age: 25,
          },
          {
            fname: " New Fried",
            lname: " Doe",
            age: 25,
          }
    ]
  };
 
//   console.log(person2);
//   console.log(person2.friends[0].fname);
//   console.log(person2.friends[1].fname);
//   console.log(person2.friends[2].fname);
//   console.log(person2.friends[3].fname);

  for(let x in person2.friends){
    console.log(person2.friends[x].fname);
  }