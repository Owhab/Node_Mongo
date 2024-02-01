const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
});

server.listen(4000);
console.log("Server is listening on port: 4000");
