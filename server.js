'use strict';
const PORT = 9100;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/search/:type/:query', function (req, res) {


    res.send('Hello World!' + req.params.type);
});

app.listen(PORT, function () {
    console.log('Example app listening on TCP:' + PORT);
});