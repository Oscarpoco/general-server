# Node.js To-Do List API

## Overview
This project sets up a basic server using Node.js to manage a list of to-do items. The server handles incoming requests, processes the data in chunks, and performs CRUD operations (Create, Read, Update, and Delete) on the to-do list.

### 1. Setup Basic Server
We use the built-in http module in Node.js to create the server. The server listens for incoming requests and handles them appropriately.

Server Setup Example:

const http = require('http');

let ToDoItems = [];

const server = http.createServer((req, res) => {
  // Request handling logic
});


In this setup:

* ToDoItems: This array will store all to-do items.
* http.createServer: Creates the server to handle incoming requests.


### 2. Chunk Processing
In Node.js, incoming data is processed in chunks. When a user sends data (such as creating a to-do item), it's sent in small pieces (chunks). These chunks need to be combined into one piece before they can be processed.

Chunk Handling Example:

let body = '';

req.on('data', chunk => {
    body += chunk.toString();
});

Explanation:
* req.on('data', chunk): This event is triggered every time a chunk of data is received.

* body += chunk.toString();: Converts each chunk of data into a string and appends it to the body variable.

### 3. When the Data Processing is Done
Once all the chunks are received, Node.js triggers the 'end' event. This is where we can parse the data and perform operations like adding a new to-do item.

Example of Processing Complete Data:

req.on('end', () => {
    const addToDo = JSON.parse(body); // Parse the received JSON data

    ToDoItems.push(addToDo); // Add the new to-do item to the list
});

Explanation:
* req.on('end'): This event is triggered when all data chunks are received.
* JSON.parse(body): Converts the string body into a JavaScript object (since the data was sent as JSON).
* ToDoItems.push(addToDo): Adds the parsed to-do item to the ToDoItems array.

## CURL

* Invoke-WebRequest -Uri http://localhost:5001/todos -Method POST -Headers @{"Content-Type"="application/json"} -Body '{"title": "Buy milk", "description": "Buy 2 liters of milk"}'

* Invoke-WebRequest -Uri http://localhost:5001/todos -Method GET

* Invoke-WebRequest -Uri http://localhost:5001/todos/1 -Method PUT -Headers @{"Content-Type"="application/json"} -Body '{"title": "Buy groceries", "description": "Buy from supermarket"}'

* Invoke-WebRequest -Uri http://localhost:5001/todos/1 -Method DELETE
