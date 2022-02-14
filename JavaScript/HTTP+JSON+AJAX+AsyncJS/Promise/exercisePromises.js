// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('success'), 4000)
})

// #2) Run the above promise and make it console.log "success"
promise.then(resp => console.log(resp));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promiseShort = Promise.resolve(
  setTimeout(() => console.log('success'), 4000)
);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(console.log('Oops something went wrong'));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
}))
  .then(res => console.log(res)).catch(error => console.log(`error message: ${error}`));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?