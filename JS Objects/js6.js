//JavaScript Display Objects

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

/*
Some common solutions to display JavaScript objects are:

Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()
Displaying the Object using JSON.stringify()
*/

//1- Displaying Object Properties
console.log('Id of this person is '+ person.name);


//2- Displaying the Object in a Loop
for(let property in person){
    console.log(person[property]);
}

//3- Using Object.values()
console.log(Object.values(person));


//4- Using JSON.stringify()
console.log(JSON.stringify(person));