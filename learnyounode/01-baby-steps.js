console.log(process.argv.splice(2).reduce(function(p, c, i, a) { return p + parseInt(c); }, 0));
