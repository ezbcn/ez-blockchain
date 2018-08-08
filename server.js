const http = require('http')
const port = 8080

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //Return the url part of the request object:
  res.write(req.url);
  res.end();
  
  



});

server.listen(process.env.PORT, process.env.IP);

console.log('RESTful API server started on: ' + process.env.IP);
console.log('RESTful API server started on: ' + process.env.PORT);
console.log(process.env);