//calling the file system(fs) module of nodejs
const fs = require("fs");
const fileName = "target.txt";

// to read a file with the readFile fs module asynchronously
fs.readFile(fileName, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

console.log("Node js programming");
