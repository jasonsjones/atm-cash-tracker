// simple webserver using node.js and the express framework
'use strict';

var express = require('express');
var app = express();

app.use('/', express.static('./public'));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(8080);
console.log('Server started...listening on port 8080');
