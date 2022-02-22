const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 100
}

// for loops
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

// for each
basket.forEach(item => console.log(item));

// for of
for (item of basket) {
  console.log(item);
}

// for in - works with objects
for (item in detailedBasket) {
  console.log(item); // logs the key / obj properties
}

Object.keys(detailedBasket); // logs the keys / obj properties
Object.values(detailedBasket); // logs the value, in this case 5, 10, 100
Object.entries(detailedBasket); // logs 2 arrays with key and value