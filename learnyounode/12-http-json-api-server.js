var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var q = url.parse(req.url, true);
    var d = new Date(q.query.iso);
    if (q.pathname === '/api/parsetime') {
        res.end(JSON.stringify({
            'hour': d.getHours(),
            'minute': d.getMinutes(),
            'second': d.getSeconds()
        }));
    } else if (q.pathname === '/api/unixtime') {
        res.end(JSON.stringify({
            'unixtime': d.getTime()
        }));
    }
    res.end();
});
server.listen(process.argv[2]);
