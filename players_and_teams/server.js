var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

app.use(bodyParser.json());

app.listen(port, function(){
	console.log('PLAYER AND TEAMS listening on ${port}');
})

