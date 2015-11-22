var path = process.argv[2];
var ext = process.argv[3];

var fs = require('fs');

fs.readdir(path, function(err, files){
    if (err) throw err;
    files.filter(function(element){
        return element.endsWith('.' + ext);
    }).forEach(function(element){
        console.log(element);
    });
});
