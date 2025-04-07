# Node.js To-Do API Server

A lightweight RESTful API server built with Node.js for managing to-do items. This server uses only built-in Node.js modules and provides basic CRUD operations for a to-do list.

## Repository

[GitHub Repository](https://github.com/Oscarpoco/general-server)

## Features

- **Create**: Add new to-do items to the list
- **Read**: Retrieve all to-do items
- **Update**: Modify existing to-do items by ID
- **Delete**: Remove to-do items by ID
- **In-Memory Storage**: To-do items are stored in memory (no database required)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Oscarpoco/general-server.git
cd general-server
```

2. Start the server:
```bash
node server.js
```

The server will run at http://localhost:5001.

## API Endpoints

### Create a To-Do Item
- **URL**: `/todos`
- **Method**: `POST`
- **Body**: JSON object with to-do item properties
- **Example**:
  ```bash
  curl -X POST http://localhost:5001/todos \
    -H "Content-Type: application/json" \
    -d '{"title": "Learn Node.js", "completed": false}'
  ```
- **Response**:
  ```json
  {
    "message": "To-do item created",
    "item": {
      "title": "Learn Node.js",
      "completed": false,
      "id": 1
    }
  }
  ```

### Get All To-Do Items
- **URL**: `/todos`
- **Method**: `GET`
- **Example**:
  ```bash
  curl http://localhost:5001/todos
  ```
- **Response**:
  ```json
  [
    {
      "title": "Learn Node.js",
      "completed": false,
      "id": 1
    }
  ]
  ```

### Update a To-Do Item
- **URL**: `/todos/:id`
- **Method**: `PUT`
- **Body**: JSON object with properties to update
- **Example**:
  ```bash
  curl -X PUT http://localhost:5001/todos/1 \
    -H "Content-Type: application/json" \
    -d '{"completed": true}'
  ```
- **Response**:
  ```json
  {
    "message": "To-do item updated",
    "item": {
      "title": "Learn Node.js",
      "completed": true,
      "id": 1
    }
  }
  ```

### Delete a To-Do Item
- **URL**: `/todos/:id`
- **Method**: `DELETE`
- **Example**:
  ```bash
  curl -X DELETE http://localhost:5001/todos/1
  ```
- **Response**:
  ```json
  {
    "message": "To-do item deleted",
    "item": {
      "title": "Learn Node.js",
      "completed": true,
      "id": 1
    }
  }
  ```

## How It Works

The server is built using Node.js's built-in `http` module. It handles different HTTP methods and routes to perform CRUD operations:

- All to-do items are stored in an in-memory array (`toDo`).
- Each to-do item is assigned a unique ID automatically.
- The server parses JSON request bodies for POST and PUT requests.
- Error handling is implemented for cases like item not found.

## Project Structure

```
general-server/
├── server.js              # Main server file with API logic
└── README.md              # Project documentation
```

## Limitations

- Data is stored in memory and will be lost when the server restarts.
- No authentication or authorization mechanisms.
- Limited error handling and validation.


## Author

Oscar Poco - [GitHub Profile](https://github.com/Oscarpoco)
