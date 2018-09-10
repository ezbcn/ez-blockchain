import { createServer } from './server.js'

createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('Server TEST');
    response.end();
})
