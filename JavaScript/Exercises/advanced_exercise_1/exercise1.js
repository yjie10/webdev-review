
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(a); // ✅3
}

//#2
// q2() must be run first and therefore a gets updated to 5
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a); // ❎0 -> 5
}

//#3
function q3() {
    window.a = "hello";
}

function q32() {
    alert(a); // "hello"
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a); // "test"
}

//#5
// with var keyword, if statements do not create a new scope
var a = 2;
if (true) {
    var a = 5;
    alert(a); // 5
}
alert(a); // 5

// #Y1 for own reference
// with let and const keyword, if statements does create a new scope
let b = 2;
if (true) {
    let b = 5;
    console.log(b);
}
console.log(b);

// w/ const
const c = 2;
if (true) {
    const c = 5;
    console.log(c);
}
console.log(c);