# Promise

- before promises, we have callbacks, also known as pyramid of doom (nested functions). 

```
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('it works');
  } else {
  reject('error, it does not work')
  } 
})

promise.then(result => console.log(result));
```

- promises can be chained using __.then()__.
- with promises, we have __.catch()__ to catch an error in between any promise .then() chain. 


```
Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
})).then(res => console.log(res))
```