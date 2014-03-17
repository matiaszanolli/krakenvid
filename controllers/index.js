'use strict';


// var MovieModel = require('../models/movie');
var http = require('http');
var movie = require('models/movie');
console.log(movie);
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
		        //console.log(model.MovieList[0]);
		    });
		}).on('error', function(e) {
		      console.log("Got error: ", e);
		});
		res.render('index', model);
    });
    app.get('/download/:id', function(req, res, next) {
	    var id = req.params.id;
	    if (id) {
	    	var url = 'http://yts.re/api/movie.json?id='+id;
	    	http.get(url, function(res) {
			    var body = '';

			    res.on('data', function(chunk) {
			        body += chunk;
			    });

			    res.on('end', function() {
			        var jsonResponse = JSON.parse(body)
			        console.log(jsonResponse);
			    });
			}).on('error', function(e) {
			      console.log("Error loading movie data: ", e);
			});
	    } else {
	        next();
	    }
	}, function (req, res) {
    	console.log(id);
		var model = {};
		res.render('download', model);
    });

};
