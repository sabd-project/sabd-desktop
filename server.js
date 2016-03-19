'use strict';
const PORT = 9101;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Api for Sabd Desktop');
});

app.get('/search/:type/:query', function (req, res) {


    res.send('searching: ' + req.params.type + ' ' + req.params.query);
});

app.get('/sabd/:id', function (req, res) {


    res.send('Get Sabd ' + req.params.id);
});

app.listen(PORT, function () {
    console.log('Sabd REST API listening on TCP:' + PORT);
});