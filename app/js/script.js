
function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

var app = app || {};
const ENTER_KEY = 13;
const ESC_KEY = 27;

function startup(){
    "use strict";

    // kick things off by creating the `App`
    new app.AppView();

    var Sambd = Backbone.Collection.extend({
        url: '/sabd'
    });

}
