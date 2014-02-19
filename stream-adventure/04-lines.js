var split = require('split');
var through = require('through');

var count = 0;

process.stdin
    .pipe(split())
    .pipe(through(function(line) {
        if (count % 2 == 0) this.queue(line.toString().toLowerCase());
        else this.queue(line.toString().toUpperCase());
        count += 1;
        this.queue('\n');
    }))
    .pipe(process.stdout);
