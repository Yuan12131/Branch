const http = require('http');

const server = http.createServer((a, b) => {
b.writeHead(200, {"Content-Type" : "text/plain"})
b.write("마루마루마루")
b.write("모다모다모다")
b.end();
});

server.listen(8019)