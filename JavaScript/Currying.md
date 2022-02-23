# Currying

- currying is the technique of translating the evaluation of a function, that takes multiple arguments, into evaluating a sequence of functions, each with a single argument (one parameter at a time).

```
const mutiply = (a, b) => a * b;

// with currying
const curriedMultiply = (a) => (b) => a * b;
curriedMutiply(5)(3);
```

- this is useful because now we can create utility functions based on the curriedMultiply. 

```
const curriedMultiplyBy5 = curriedMultiply(5);

curriedMultiplyBy5(4); // 20
```

- instead of running the function over and over, now we have the piece of data stored. 
