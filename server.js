
// IMPORT THE HTTP
const http = require('http');

// VARIABLES
const port = 5001;
const localhost = 'localhost';
let toDo = []; 

// CREATE SERVER
const server = http.createServer((req, res) => {
  // HANDLE REQUESTS

    // Handle POST request to create a new to-do item
    if (req.method === 'POST' && req.url === '/todos') {
        let body = '';

        // Collect the data chunks
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // When all data is received
        req.on('end', () => {
            const newTodo = JSON.parse(body); 
            newTodo.id = toDo.length + 1; 
            toDo.push(newTodo); 

            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'To-do item created', item: newTodo }));
        });
    }

    // Handle GET request to read all to-do items
    else if (req.method === 'GET' && req.url === '/todos') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(toDo)); // Return the list of to-do items
    }

    // Handle PUT request to update a to-do item by ID
    else if (req.method === 'PUT' && req.url.startsWith('/todos/')) {
        const id = parseInt(req.url.split('/')[2]); // Extract the ID from the URL
        let body = '';

        // Collect the data chunks
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // When all data is received
        req.on('end', () => {
            const updatedTodo = JSON.parse(body); 
            const index = toDo.findIndex(item => item.id === id); 

            if (index !== -1) {
                toDo[index] = { ...toDo[index], ...updatedTodo }; 
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'To-do item updated', item: toDo[index] }));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'To-do item not found' }));
            }
        });
    }

    // Handle DELETE request to remove a to-do item by ID
    else if (req.method === 'DELETE' && req.url.startsWith('/todos/')) {
        const id = parseInt(req.url.split('/')[2]); 
        const index = toDo.findIndex(item => item.id === id); 

        if (index !== -1) {
            const deletedTodo = toDo.splice(index, 1);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'To-do item deleted', item: deletedTodo[0] }));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'To-do item not found' }));
        }
    }

    // Handle unknown routes
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Invalid endpoint');
    }
});

// LISTENING THE SERVER
server.listen(port, localhost, () => {
    console.log(`Server running at http://${localhost}:${port}`);
});
