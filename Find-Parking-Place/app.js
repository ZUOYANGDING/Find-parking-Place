
/**
 * Generated Node.js application that can run on IBM Bluemix
 */

// var http = require("http");

// var appport = process.env.VCAP_APP_PORT || 8888;

// http.createServer(function(request, response) {

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Generated Node.js application that runs on IBM Bluemix\n");
//     response.write("hahaha test");
//     response.end();	

// }).listen(appport);
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.listen(3000);