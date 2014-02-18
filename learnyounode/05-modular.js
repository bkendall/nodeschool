var mymodule = require('./05-module.js');

mymodule(process.argv[2], process.argv[3], function(err, data) {
    if (err) { console.log('error. sorry son.'); }
    else { data.forEach(function(d) { console.log(d); }); }
});
