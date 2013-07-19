var fs = require('fs');
var rest = require('restler');
var URL_DEFAULT = "http://stark-stream-6086.herokuapp.com";

var htmldata;
rest.get(URL_DEFAULT).on('complete', function(data, response) {
        console.log(data);
    });

