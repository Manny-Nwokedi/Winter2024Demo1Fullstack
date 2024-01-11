const http = require('http');
const port = 3010;

const server = http.createServer((req, res) => {
    res.end('Hello World!');
});
res.end('Hello World!');

server.listen(port, () => {
    console.log(`Httpserver running at port ${port}`);
});   
