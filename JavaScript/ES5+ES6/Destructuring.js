// Destructuring

const obj = {
  player: "bobby",
  exp: 100,
  wizardLevel: false
}

// normally we would assign properties to variables this way
const player = obj.player;
const exp = obj.exp;
let wizardLevel = obj.wizardLevel;

// but with destructuring, we can do this:
const { player, exp } = obj;

// Object Properties - can have dynamic properties
const name = "John Snow";
const obj = {
  [name]: "John Smith"
}