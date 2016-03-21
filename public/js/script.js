
function ready(fn) {
    if (document.readyState != 'loading'){
        startup();
    } else {
        document.addEventListener('DOMContentLoaded', startup);
    }
}

var app = app || {};
const ENTER_KEY = 13;
const ESC_KEY = 27;

function startup(){
    "use strict";

    $('input#search').onkeydown(function(e){

        if ($(e).keyCode===ENTER_KEY){
            console.log(e);
        }
    });
}
