//JavaScript Closures

//1- JavaScript variables can belong to the local or global scope.

var a = 10;
function fun() {
  console.log(a);
  var a = 34;
  console.log(a);
  b = 44;
}
fun();
console.log(a);
console.log(b);

//2-
const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

add();
add();
add();

// the counter is now 3
