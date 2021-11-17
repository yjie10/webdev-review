// reference type
/**
 * objects are created by programmers and is not a primitive type, it's a reference type. 
*/

// context
/**
 * 
 */

// instantiation
/**
 * making instances for multiple objects. OOP concept. So don't have to write repeated code over and over again. 
 */
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  // method
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}. `);
  }
}

// class should always have constructor; constructors initialize the new object
class Wizard extends Player {
  constructor(name, type) {
    // in case of extend, need to call construtor from Player class; keyword is super();
    super(name, type);
  }

  play() {
    console.log(`WEEEE I'm a ${this.type}. `);
  }
}

const wizard1 = new Wizard("Beryl", "Preist");
const wizard2 = new Wizard("Sapphire", "Healer");

// Pass by Reference vs Pass by Value
// Primitive types - pass by value; Objects - pass by reference
var a = 5;

// if I do
var b = a; // it copies the a value, and then put it into a new memory space

// pass by value - copy the value and create it somewhere else in memory

let obj1 = { name: 'Beryl', password: "xiaolanwoyexihuanni" };
let obj2 = obj1;

obj2.password = 'xiaolanwoxihuanni';

console.log(obj1.password); // will get the updated password for both obj 1 and obj2

// pass by reference - pointing to the same memory address; 
// pass by reference pros: saving memory, not copying or cloning; cons: can cause unexpected bugs where something is changed but not aware of

// arrays are objects, and therefore they are pass by reference as well

// to clone an object
const obj = { a, b, c };
let clone = Object.assign({}, obj);
let clone2 = { ...obj } // spread operator; new, to clone an object

// object within object
const objdeep = {
  a,
  b,
  c: { deep: 'copy me' }
};

// when cloned, will only clone first level, meaning if c is changed, then it will affect the clone as well
// to solve this problem, we use json. 
let superClone = JSON.parse(JSON.stringify(objdeep));


// Type Coercion
// when doing comparison, one value will be converted into the same type by the js engine
// in js, when equlity (==) is used, it does type coercion
// it also happens in if statements. It does type coercion from numbers to boolean (1->true and 0->false)

// Do all languages have type coercion? - YES



//Evaluate these:
//#1
[2] === [2] // false
// { } === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 };
const object2 = object1; // { a: 5 }
const object3 = object2; // { a: 5 }
const object4 = { a: 5 };
object1.a = 4; // Object1=Object2=Object3: a: 4; Object4: a: 5


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  };
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color)
  };

  sound() {
    console.log(`Moo my name is ${this.name}, my type is ${this.type} and my color is ${this.color}. `);
  }
}

const cow1 = new Mamal("Moomoo", "cow", "black and white");