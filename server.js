'use strict';
const PORT = 9102;

var express = require('express');
var app = express();

var sabd = require('./models/sabd')();
console.log(JSON.stringify(sabd));


app.get('/', function (req, res) {
    res.send('Api for Sabd Desktop');
});

/**
 * search for a sabd
 */
app.get('/search/:type/:query', function (req, res) {

    console.log('Searching for', [req.params.type, req.params.query]);

    //validate search types
    let validSearchTypes = ['fls', 'flsa', 'gurmukhi', 'english'];
    if (validSearchTypes.indexOf(req.params.type) === -1) {
        let error = {"error": "not a valid search type: " + req.params.type};
        res.status(400).json(error);
    }

    // //execute the search
    // sabd.searchSabd(req.params.type, req.params.query)
    //     .then(
    //         function (output) {
    //             res.json(output);
    //         }
    //     )
    //     .catch(
    //         function (err) {
    //             res.status(400).json({'search error': JSON.stringify(err)})
    //         });

});

app.get('/sabd/:id', function (req, res) {


    res.send('Get Sabd ' + req.params.id);
});

app.listen(PORT, function () {
    console.log('Sabd REST API listening on TCP:' + PORT);
});