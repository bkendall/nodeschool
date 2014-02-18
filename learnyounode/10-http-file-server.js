var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res) {
    var buff = '';
    var stream = fs.createReadStream(process.argv[3]);
    stream.setEncoding('utf8');
    stream.on('data', function(d) { buff += d; });
    stream.on('end', function() { res.end(buff); });
});
server.listen(process.argv[2]);
