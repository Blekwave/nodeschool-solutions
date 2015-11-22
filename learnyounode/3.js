var fs = require('fs');

var file_path = process.argv[2];

var newlines = fs.readFileSync(file_path, 'utf8').split('\n').length - 1;

console.log(newlines);
