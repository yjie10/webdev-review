// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((res, rej) => {
  setTimeout(res, 4000, 'success');
})

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("success");
//   }, 4000)
// });

// #2) Run the above promise and make it console.log "success"
promise.then((res, rej) => console.log(res));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

// Promise.resolve() method returns a Promise object that is resolved with a given value
const promise1 = Promise.resolve('success').then((res) => console.log(res));

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(() => console.log('Ooops something went wrong'));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url => fetch(url).then(res => res.json())))
  .then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
    console.log(results[3])
  })
  .catch(error => console.log(error))

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?