var fs = require('fs');

var file_path = process.argv[2];

var newlines = fs.readFile(file_path, 'utf8', function(err, data){
    if (err) throw err;
    var newlines = data.split("\n").length - 1;
    console.log(newlines);
});

