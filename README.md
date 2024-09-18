# To-Do API
A simple Node.js server to manage a list of to-do items, supporting basic CRUD operations: Create, Read, Update, and Delete. The API uses HTTP requests to interact with the to-do list.

## Features
Create a new to-do item (POST)
Read all to-do items (GET)
Update an existing to-do item by ID (PUT)
Delete a to-do item by ID (DELETE)

## Prerequisites
Node.js installed on your machine.

## Installation
Clone the repository or download the project.
Open a terminal and navigate to the project folder.
Run the following command to install the dependencies (if needed):

npm install
Running the Server
To start the server, run the following command:
node server.js


The server will run on http://localhost:5001.

## API Endpoints
1. Create a To-Do Item
Method: POST
Endpoint: /todos
Body (JSON):
json

{
  "title": "Sample to-do item",
  "description": "Description of the to-do item"
}
Response:
json

{
  "message": "To-do item created",
  "item": {
    "id": 1,
    "title": "Sample to-do item",
    "description": "Description of the to-do item"
  }
}

2. Read All To-Do Items
Method: GET
Endpoint: /todos
Response:
json
Copy code
[
  {
    "id": 1,
    "title": "Sample to-do item",
    "description": "Description of the to-do item"
  }
]

3. Update a To-Do Item by ID
Method: PUT
Endpoint: /todos/:id
Body (JSON):
json

{
  "title": "Updated title",
  "description": "Updated description"
}
Response:
json

{
  "message": "To-do item updated",
  "item": {
    "id": 1,
    "title": "Updated title",
    "description": "Updated description"
  }
}

4. Delete a To-Do Item by ID
Method: DELETE
Endpoint: /todos/:id
Response:
json

{
  "message": "To-do item deleted",
  "item": {
    "id": 1,
    "title": "Sample to-do item",
    "description": "Description of the to-do item"
  }
}

Error Handling
If an invalid ID is provided for updating or deleting, the server will return:

json

{
  "message": "To-do item not found"
}
If an unknown route is accessed, the server will return:

plain/text

Invalid endpoint
