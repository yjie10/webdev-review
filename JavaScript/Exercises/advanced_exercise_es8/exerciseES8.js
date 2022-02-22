// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
// String padding

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// Sol
// total spaces used including the string
turtle.padStart(8);
rabbit.padStart(8)

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');


// #3) Get the below object to go from:

// Object.values & Object.entries

let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

// looping through object in the past
Object.keys(obj).forEach((key, index) => console.log(key, obj[key]));

// with Object.values & Object.entries
Object.values(obj).forEach(value => console.log(value));

Object.entries(obj).forEach(value => console.log(value));

Object.entries(obj).map(value => value.join(' ')).join(' ');



