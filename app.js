//to create a server using the "express" package.
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.listen(3000);

//calling the file system(fs) module of nodejs
const fs = require("fs");
const fileName = "target.txt";

//to watch for changes in the target.txt file
fs.watch(fileName, () => console.log(`File Changed!`));
