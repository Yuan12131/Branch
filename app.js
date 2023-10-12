const http = require('http');

const server = http.createServer((req, res) => {
res.writeHead(200, {"Content-Type" : "text/plain"})
res.write("향마루")
res.end();
});

server.listen(3500, (err) => {
  // if(!err){
  //   console.error("서버 안돌아감")
  // } else {
  //   console.log("3500포트에 돌아감 http://localhost:3500")
  // }
})