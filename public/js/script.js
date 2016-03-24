"use strict";

var app = app || {};
const ENTER_KEY = 13;
const ESC_KEY = 27;
const API_URL = "http://localhost:9102";

window.onload = function () {

    //bind to search field and button
    var searchField = $('input#search');
    var searchButton = $('button#searchButton');
    var searchType = 'fls';

    searchField.keydown(function (e) {

        if (searchField.val().length > 0) {
            searchButton.prop('enabled', true);
            if (e.keyCode === ENTER_KEY) {
                search(searchField.val(), searchType);
            }
        }
        else {
            searchButton.prop('disabled', true);
        }
    });

    searchButton.click(function (e) {
        search(searchField.val(), searchType);
    });

};

/**
 * search for gurbani
 *
 * @param value
 * @param searchType
 */
function search(value, searchType) {
    console.debug('Searching for', value);

    jQuery.getJSON({
        url: API_URL + "/search/" + searchType + "/" + value,
        success: function (data) {
            renderResults(data);
        }
    });
}

function renderResults(data) {
    console.debug(data);
    var source = $("#tpl-search").html();
    var template = Handlebars.compile(source);
    var html = template(data);
    console.log(html)
}