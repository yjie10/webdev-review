// change everything below to the newer Javascript!

// ✅let + const
//var a = 'test';
let a = "test";
//var b = true;
const b = true;
//var c = 789;
const c = 789;
a = 'test2';

// Destructuring
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// ✅Destructuring Sol
const { firstName, lastName, age, eyeColor } = person;

// Object properties
// if property and value are the same, can remove declarations
var a = 'test';
var b = true;
var c = 789;

var okObj = {
    a: a,
    b: b,
    c: c
};

// ✅Object properties Sol
const okObj = { a, b, c };

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// ✅Template strings Sol
const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

// ✅Default arguments Sol
function isValidAge(age = 10) {
    return age;
}

// Symbol - creates a completely unique type
// ✅Create a symbol: "This is my first Symbol"
const sym1 = Symbol("This is my first Symbol");

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// Arrow functions Sol
const whereAmI = (username, location) => (username && location) ? "I am not lost" : "I am totally lost!";