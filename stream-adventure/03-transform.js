var through = require('through');
upperThrough = through(function(buf) { this.queue(buf.toString().toUpperCase()); });
process.stdin.pipe(upperThrough).pipe(process.stdout);
