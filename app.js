//to create a server using the "express" package.
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000);

//to create a server using the http module
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("hello world from node js");
// });

//to access the server via localhost
// server.listen(3000);

// const { sum } = require("./helpers");

// const total = sum(10, 200);
// console.log("Total:", total);
