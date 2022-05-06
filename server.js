// var http = require("http");

// http.createServer(function (request, response) {

//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    response.end('Hello World\n');
// }).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');

const express = require("express");

const app = express();

//define port
const port=3000;

app.get("/", (req, res) => {

res.json({message:'Root page'})

})

//get example

app.get("/get-data", (req, res) => {

res.json({message:'Get JSON Example'})

})

//run the application
app.listen(port, () => {
  console.log(`running at port ${port}`);
});