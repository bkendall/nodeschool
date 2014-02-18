var http = require('http');
var buff = '';

http.get(process.argv[2], function(resp) {
    resp.setEncoding('utf8');
    resp.on('data', function(d) { buff += d; });
    resp.on('end', function() {
        console.log(buff.length);
        console.log(buff);
    });
});
