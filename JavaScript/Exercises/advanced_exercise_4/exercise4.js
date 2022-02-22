//Solve these problems:

// Closure - child scope always has access to the parent scope, but not vice-versa. Parent does not have access to the child scope. 
// Currying - converts a function that takes multiple arguments into taking one at a time. 
// Composing - act of putting 2 functions together to form a third function where the output of 1 function is the input of the other. 

//#1 Create a one line function that adds adds two parameters
const sum = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) // 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) // 31

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) // 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) // add5 -> 10 + 5 = 15; add1 -> 15 + 1 = 16

//What are the two elements of a pure function?
// avoiding side effects and always return the same result (deterministic)