import http from 'http';

const hostname = '127.0.0.1';

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello, world")
  
});

server.listen(port, hostname, () => {
  console.log(`Listening on Port ${port}`);
});

