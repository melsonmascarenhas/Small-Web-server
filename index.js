const fs = require("fs");
const http = require('http');
const { hostname } = require("os");
port="80";



const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

server.listen(port, hostname, () => {
  console.log("Server: http://localhost:"+port+"/");
});