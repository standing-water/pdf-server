var http = require("http");
var fs = require("fs");
var express = require("express");
var cors = require("cors");
// var server = http.createServer();

var app = express();
app.use(cors());

app.get("/", function(req, res) {
  console.log("TES");
  fs.readFile("./sample.pdf", function(err, data) {
    res.writeHead(200, { "Content-Type": "application/pdf" });
    res.write(data);
    res.end();
  });
});

app.listen(7070, function() {
  console.log("server start");
});
