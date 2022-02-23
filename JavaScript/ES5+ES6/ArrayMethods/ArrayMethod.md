### Reduce
- reduce is a great method to use for two things:
  > we want to end up with one value (e.g. summing up all values in an array)


- takes two arguments:
  > first argument is a function, that has two parameters: 
    I. accumulator: accumulated value of calling this function on every element before the one we are currently on. 
    II. second parameter is the element itself. 
  > second argument is the initial value of the accumulator;

  ```
  const myArray = [1, 2, 3, 5, 7, 9];
  const newReduceArray = myArray.reduce(((accumulator, currentEl) => accumulator + currentEl), 0);
  // 27
  ```
  // the first iteration, accumulator is the initial value 0, and the current element is 1, so 0 + 1 gives 1; and then accumulator gets what's returned on the last function call; 
  // it gets a value of 1 on the 2nd iteration. 