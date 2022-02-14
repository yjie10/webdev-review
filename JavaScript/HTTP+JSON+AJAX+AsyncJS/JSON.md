# JSON

- can we just send any kind of data to the server? Not really. Backend server might be in a different lanaguage and not understand JavaScript or JavaScript object. 
- __text__ can be understand by all. We needed a standard way to send the data over the wires and receive it, and that's what __JSON__ is used for. 
- JSON: JavaScript Object Notation; is a syntax for storing and exchanging data. It is a text written with JS object notation. 
- it is not the only way, e.g. XML can used as well. But the standard is more towards JSON nowadays.

```
const obj = JSON.parse('{"name": "John", "age": "30"}'); // it will return an JS object
const myJSON = JSON.stringify(obj); // it will return JSON
```