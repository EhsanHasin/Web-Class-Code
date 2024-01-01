// JavaScript Function Definitions
/*
JavaScript functions are defined with the function keyword.

You can use a function declaration or a function expression.
*/

//1- Function Declarations
function functionName(parameters) {
    // code to be executed
}

//2- Function Expressions
const x = function (a, b) {return a * b};

//* anonymous function (a function without a name)


//3- The Function() Constructor
const myFunction = new Function('a','b','c', 'return a + b + c');
console.log(myFunction(2,3,2));

//4- Function Hoisting
console.log('invoked: ',mul(5));

function mul(y) {
  return y * y;
}

//5- Self-Invoking Functions
(function(){
    console.log("logoooooed");
})();


//6- Arrow Functions
// ES5
var a = function(x, y) {
    return x * y;
  }
  
// ES6
const b = (x, y) => x * y;


//7- The arguments.length
function fun1(a, b) {
    console.log(arguments.length);
    console.log(arguments[0]);
}
fun1(143,22,2);

