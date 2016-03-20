"use strict";
var file = '../data/iGurbani.sqlite';
var sqlite3 = require("sqlite3").verbose();

var db;

module.exports = Sabd;

function Sabd(vari) {
    console.log( vari);
    // db = new sqlite3.Database(file);
    //
    // console.log(db);
    return 'vaheguru';
}

Sabd.prototype.searchSabd = function (type, query) {

    return new Promise(function (fulfill, reject) {

        db.all('SELECT * FROM shabad where shabad_no=22', function (err, rows) {
            if (err) {
                console.error(err);
                closeDb();
                reject(err);
            }
            closeDb();
            fulfill(rows);
        });
    });
}

function closeDb() {
    console.log("closeDb");
    db.close();
}


// // Create new comment in your database and return its id
// exports.create = function(user, text, cb) {
//     var comment = {
//         user: user,
//         text: text,
//         date: new Date().toString()
//     }
//
//     db.save(comment, cb)
// }
//
// // Get a particular comment
// exports.get = function(id, cb) {
//     db.fetch({id:id}, function(err, docs) {
//         if (err) return cb(err)
//         cb(null, docs[0])
//     })
// }
//
// // Get all comments
// exports.all = function(cb) {
//     db.fetch({}, cb)
// }
//
// // Get all comments by a particular user
// exports.allByUser = function(user, cb) {
//     db.fetch({user: user}, cb)
// }