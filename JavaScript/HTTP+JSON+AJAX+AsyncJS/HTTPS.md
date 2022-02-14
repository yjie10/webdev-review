# HTTP/HTTPS

- HTTP: a common language the client and server use to communicate.
- messages send by client, are usually called a __request__.
- messages send by the server, are usually called a __response__.

- languge to communicate with server (the main 4): __GET, POST, PUT, DELETE__. 

- GET: get something (e.g. a HTML file), the server responds. 
- POST: post something, sending some data to the server, and add the data. 
- PUT: send data to _update_ data that already exists in the server.
- DELETE: delete a piece of data on the server. 

- using Twitter as an example, the above would be: 
  > GET: receive Twitter feed of the day;
  > POST: created a new user and adding the user data to db;
  > PUT: editing the tweet that was already posted;
  > DELETE: delete user account or a tweet; 

- request data: server sends back 2 main things: 
  > __HTTP message__ (status e.g. 200 OK, 404 does not exist); 
  > __data__ such as HTML. 

- to send data; can be done through __query string__ or __body__ of the request. 
  > form method GET will result in query string (Query String Parameters), while POST will send the data in Form Data. 

- HTTPS - the 'S' means secure, which the communication between the browser and website are encrypted. 