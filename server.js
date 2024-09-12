
// IMPORT HTTP 
const http = require('http');


// DEFININIG MY PORT & HOSTNAME
const PORT = 5001;
const hostname = 'localhost';

// CREATED SERVER
const server = http.createServer((res) => {
  // 
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // MESSAGE DISPLAYED ON PORT
  res.end('Hello, world! This is a basic Node.js server.\n');
});

// LISTEN TO SPECIFIED PORT
server.listen(PORT, hostname, () => {
  console.log(`Server is running and listening on port http//${hostname}:${PORT}`);
});
