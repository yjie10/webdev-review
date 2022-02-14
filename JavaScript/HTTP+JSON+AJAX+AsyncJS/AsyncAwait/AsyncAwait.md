# Async Await

- ES8, build on top of promises. 
- Async function is a function that returns a promise. 
- makes code easier to read. 

```
async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}
```

- convert Promise.all in previous example (Promise notes) to async function. 

```
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async () => {
  const [ users, posts, albums ] = await Promise.all(urls.map(url => 
  fetch(url).then(resp => resp.json())))
  console.log(users);
  console.log(posts);
  console.log(albums);
}

getData();
```

- to catch error, we can use the try and catch block. 