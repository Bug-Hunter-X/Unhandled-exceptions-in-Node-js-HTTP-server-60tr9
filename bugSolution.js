const http = require('http');

const requestListener = function (req, res) {
  try {
    // Your request handling logic here
    res.writeHead(200);
    res.end('Hello, World!');
  } catch (err) {
    console.error('Request error:', err);
    res.writeHead(500, {
      'Content-Type': 'text/plain'
    });
    res.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

// Handle server errors
server.on('error', err => {
  console.error('Server error:', err);
  // Take appropriate action based on the error
});

server.listen(8080);
console.log('Server is running on port 8080');