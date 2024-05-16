// Create web server
// Create a web server that listens on port 3000 and serves a file called comments.js. The file should contain the following content:
// [
//     {
//         "id": 1,
//         "username": "dstrus",
//         "comment": "This is a comment"
//     },
//     {
//         "id": 2,
//         "username": "dstrus",
//         "comment": "This is another comment"
//     }
// ]
// The server should respond with the contents of the file when a GET request is made to /comments.
// The server should respond with a 404 status code when a GET request is made to any other path.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/comments') {
        fs.readFile('comments.js', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(3000);