//1- Function Parameters and Arguments
function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}

// functionName(value1, value2, value3);
// functionName(2,3,4);


//2 - The Arguments Object
x = sumAll(1, 123, 500, 115, 44, 88,2,3,4,5,6,7,8,89,9);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
