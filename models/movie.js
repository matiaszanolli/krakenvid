'use strict';


var http = require('http');

var MovieModel = function () {
	var load = function(req, res, next) {
	    var id = req.params.id;
	    if (id) {
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
	}
};

module.exports = new MovieModel();