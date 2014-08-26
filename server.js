// simple webserver using node.js and the express framework
'use strict';

var express = require('express');
var app = express();

app.use('/', express.static('./app'));

app.get('/', function(req, res) {
    res.send('index');
});

app.listen(8080);
console.log('Server started...listening on port 8080');
