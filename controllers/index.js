'use strict';


// var MovieModel = require('../models/movie');
var http = require('http');

module.exports = function (app) {
	var model = {};
    app.get('/', function (req, res) {
    	var url = 'http://yts.re/api/list.json';
    	http.get(url, function(res) {
		    var body = '';

		    res.on('data', function(chunk) {
		        body += chunk;
		    });

		    res.on('end', function() {
		        var jsonResponse = JSON.parse(body)
		        model = jsonResponse;
		        console.log(model.MovieList[0]);
		    });
		}).on('error', function(e) {
		      console.log("Got error: ", e);
		});
		res.render('index', model);
    });

};
