var fs = require('fs');
var path = require('path');

module.exports = function(d, e, cb) {
    fs.readdir(d, function(err, list) {
        if (err) { return cb(err); }
        var l = list.filter(function(f) {
            return path.extname(f) === '.' + e;
        });
        cb(null, l);
    });
};
