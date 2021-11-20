/**
 * A promise is an object that may produce a single value some time in the future:
 * either a result value, or a reason that it's not resolved (rejected)
 *
 * it can be in one of the 3 possible states: 1) fullfilled 2) rejected 3) pending
 * 
 * · good for async programming
 * 
 * A promise can succeed or fail only ONCE, useful when doing API calls
 * 
 **/

/**
 * Before Promises, we have callbacks: when something is done, execute this piece of code
 */

// example
el.addEventListener("click", submitForm); // callback is submitForm(); once user clicks, gonna answer with submitForm

// callback of pyramid of doom: nested callbacks, hard to read
movePlayer(100, 'Left', function () {
  movePlayer(400, 'Left', function () {
    movePlayer(10, 'Right', function () {
      movePlayer(330, 'Left', function () {
      });
    });
  });
});

// with Promise, the above code would look like this:
movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(330, 'Left')); // chaining


// #1
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('This Worked');
  } else {
    reject('Error');
  }
})

// to run
// promise.then(result => console.log(result));
promise.then(result => result + '!')
  .then(result2 => { console.log(result2) })
  .catch(() => console.log('error')); // .catch catches any of the errors that may happen between the chains of .then; 
// order of the catch does matter; it checks for errors that comes before it

// #2 - Promise.all
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'HIII');
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'HIII2');
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'HIII3');
})

Promise.all([promise2, promise3, promise4])
  .then(values => {
    console.log(values);
  }) // values will be returned in the same order


// w/ fetch
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url => {
  return fetch(url).then(res => res.json())
})).then(results => console.log(results))