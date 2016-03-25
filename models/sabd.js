"use strict";
/**
 * constructor
 * inject in db
 */
function Sabd() {
    var db;
}

Sabd.prototype.search = function (type, query) {
    let searchAsciiCodes = '';

    for (let i = 0, len = query.length; i < len; i++) {
        let tmp = query.charCodeAt(i);
        if (tmp < 100) { //0 pad numbers less than 100
            tmp = '0' + tmp
        }
        searchAsciiCodes += tmp + ',';
    }
    searchAsciiCodes = searchAsciiCodes.substr(0, searchAsciiCodes.length - 1) + '%';  //strip trailing comma and add a %

    var db = this.db;
    var sql = "SELECT _id, shabad_no, source_id, ang_id, writer_id, raag_id, gurmukhi, english_ssk, transliteration " +
        "FROM shabad where first_ltr_start like ?";

    return new Promise(function (fulfill, reject) {
        db.all(sql, searchAsciiCodes, function (err, rows) {
            if (err) {
                reject(err);
            }
         
            fulfill({'results':rows});
        });
    });
};

module.exports = new Sabd();
