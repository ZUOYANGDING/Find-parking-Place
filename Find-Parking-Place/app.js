
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
var routes = require('./routes');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');

var errorHandler = require('errorhandler');
var app = express();


app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
	app.use(errorHandler());
}

app.get('/', routes.index);








app.listen(app.get('port'));