var path = process.argv[2];
var ext = process.argv[3];

var readdirfiltered = require('./6m.js');

readdirfiltered(path, ext, function(err, data){
    if (err) console.log(err);
    data.forEach(function(element){
        console.log(element);
    });
});


