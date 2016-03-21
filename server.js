'use strict';
const PORT = 9102;

//http://timjrobinson.com/how-to-structure-your-nodejs-models-2/

var express = require('express');
var app = express();
var sqlite3 = require("sqlite3").verbose();

var db=new sqlite3.Database('./data/iGurbani.sqlite');
var sabd = require('./models/sabd');
sabd.db = db;

app.get('/', function (req, res) {
    res.send('Api for Sabd Desktop');
});

/**
 * search for a sabd
 */
app.get('/search/:type/:query', function (req, res) {

    console.log('Searching for', [req.params.type, req.params.query]);

    if (!req.params.query) {
        res.status(400).json({"error": "You must supply a query"});
    }
    //validate search types
    let validSearchTypes = ['fls', 'flsa', 'gurmukhi', 'english'];
    if (validSearchTypes.indexOf(req.params.type) === -1) {
        let error = {"error": "not a valid search type: " + req.params.type};
        res.status(400).json(error);
    }

    //execute the search
    sabd.search(req.params.type, req.params.query)
        .then(
            function (output) {
                console.log('Found Sabd for', req.params, output.length);
                res.json(output);
            }
        )
        .catch(
            function (err) {
                console.error('Error finding Sabd', err);
                res.status(400).json({'search error': err.message})
            });

});

app.get('/sabd/:id', function (req, res) {


    res.send('Get Sabd ' + req.params.id);
});

app.listen(PORT, function () {
    console.log('Sabd REST Api listening on TCP:' + PORT);
});

process.on('exit', function() {
    // Add shutdown logic here.
    db.close();
    console.log('Shutdown');
});