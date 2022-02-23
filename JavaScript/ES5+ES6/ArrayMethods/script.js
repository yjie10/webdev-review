// map, filter, reduce, find, includes

const myArray = [1, 2, 3, 5, 7, 9];

// map - returns a new array
const newMapArray = myArray.map((element) => element + 1);

// filter - similar to map, also returns a new array
const newFilterArray = myArray.filter(() => el > 2); // whatever is true is kept in the array

// includes - checks if the element we pass in exists in the array
const newIncludesArray = myArray.includes(3); // returns true since 3 exists in array
const newIncludesArray2ndParam = myArray.includes(2, 3) // 2nd param (optional) is the index we want to start searching
// object is unique; it gets its own reference in memory

// everytime an object is instantiated, JS is storing that object as a brand new reference in memory
// JS is not comparing the value, it is comparing if the reference in the memory is the same

// 
