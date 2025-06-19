import http from 'http';
const host = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
  
  res.end('Hello, World\n');
});
server.listen(port, host, () => {
  console.log(`your server is running `);
});
