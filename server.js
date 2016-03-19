'use strict';
const PORT = 9101;

var express = require('express');
var app = express();

var sabd = 'models/sabd.js';


app.get('/', function (req, res) {
    res.send('Api for Sabd Desktop');
});

app.get('/search/:type/:query', function (req, res) {


    var output = sabd.search(req.params.type, req.params.query);

    console.log(output);
    //var output={'sat':'sri'};
    res.send(JSON.stringify(output));
});

app.get('/sabd/:id', function (req, res) {


    res.send('Get Sabd ' + req.params.id);
});

app.listen(PORT, function () {
    console.log('Sabd REST API listening on TCP:' + PORT);
});