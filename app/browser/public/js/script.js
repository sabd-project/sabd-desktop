"use strict";

var app = app || {};
const ENTER_KEY = 13;
const ESC_KEY = 27;
const API_URL = "http://localhost:9103";
var open = require("open");

//on window load
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
            if (data) {
                renderSearchResults(data);
            }
        }
    });
}

/**
 * render the search results into html and inject into the DOM
 * @TODO catch errors
 * @param data
 */
function renderSearchResults(data) {
    //pre-compile dust.js templates
    let template = document.getElementById('tpl-search-results').textContent;
    var compiled = dust.compile(template, 'search-results');
    dust.loadSource(compiled);   // Register the template with Dust
    console.log(dust);
    // Render the search results template
    dust.render('search-results', data, function (err, out) {
        //TODO catch err
        document.getElementById('results').innerHTML = out;
        //add onclick listener to each sabd returned
        $('div.sabd').click(function (el) {
            let sabdNumber = $(this).data('shabad_no');
            if (sabdNumber) {
                //connect to api and get browser to open sabd url
                open(API_URL + "/sabd/" + sabdNumber);
            }
            else {
                alert('cannot find that sabad ' + sabdNumber);
            }
        });

    });
}

