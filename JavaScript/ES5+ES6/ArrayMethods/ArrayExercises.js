// modzilla

// Add your code here
const myArray = ["apple", "oranges", "grapes"];
myArray[0] = "Apple";
myArray[1] = "Oranges";
myArray.unshift("Pears");

// Add your code here
let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
const myArray = myString.split("+");
const arrayLength = myArray.length;
const lastItem = myArray[arrayLength - 1];

// 分割线

let myArray = ["Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri"];

// Add your code here
myArray.pop();
myArray.push("Takato");
myArray.push("Girumon");
const myString = myArray.map((name, index) => `${name} (${index})`).join("-");