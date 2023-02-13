//to create a server
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("hello world from node js");
});

//to access the server via localhost
server.listen(3000);

const { sum } = require("./helpers");

const total = sum(10, 200);
console.log("Total:", total);
