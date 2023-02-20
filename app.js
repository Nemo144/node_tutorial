//calling the file system(fs) module of nodejs
const fs = require("fs");
const fileName = "target.txt";

//creating a function to handle the error in the readFile fs method
const errHandler = (err) => console.log(err);

//creating a function to handle the success outcome
const dataHandler = (data) => console.log(data.toString());

// to read a file with the readFile fs module asynchronously
fs.readFile(fileName, (err, data) => {
  if (err) errHandler(err);
  dataHandler(data);
});

console.log("Node js programming");
