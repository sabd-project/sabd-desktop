"use strict";
var file = '../test.db';

var sqlite3 = require("sqlite3").verbose();

var db = new sqlite3.Database(file);


module.exports.search = function (type, query) {

    console.log({'sat': query});
    return {'sat': query};
    return {type: query};
}

db.close();


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