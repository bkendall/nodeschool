var http = require('http');
var async = require('async');

var myget = function(url, cb) {
    var buff = '';
    http.get(url, function(resp) {
        resp.setEncoding('utf8');
        resp.on('data', function(d) { buff += d; });
        resp.on('end', function() { cb(null, buff); });
    });
};

async.series([
    function(callback) { myget(process.argv[2], callback); },
    function(callback) { myget(process.argv[3], callback); },
    function(callback) { myget(process.argv[4], callback); }
    ],
    function(err, results) {
        if (err) return console.error('error...');
        results.forEach(function(r) { console.log(r); });
    });
