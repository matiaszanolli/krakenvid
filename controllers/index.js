'use strict';


var IndexModel = require('../models/index');
var flux = require('flux');


module.exports = function (app) {

    var model = new IndexModel();

    app.get('/', function (req, res) {
		flux.acquire('ubuntu 11.04', function(err) {
		    if (err) {
		        console.log('there was an error: ' + err.message);
		    }
		    else {
		        console.log('ubuntu torrent downloaded!');
		    }
		});
    });

};
