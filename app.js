var express = require('express');
var app = express();
var http = require('http');
var fs = require("fs");

app.use(express.static(__dirname + "/public"));

app.get("/markers", function(httpRequest, httpResponse, next){
     httpResponse.sendFile(__dirname + "/public/markers.html");
});



app.get("/circles", function(httpRequest, httpResponse, next){
     httpResponse.sendFile(__dirname + "/public/circles.html");
});



app.get('/locations', function (httpRequest, httpResponse, next) {
   var data = fs.readFileSync("locations.json");
   httpResponse.end(data);
});

var server = app.listen(8081, function () {
  
  console.log("Server is listening");
})