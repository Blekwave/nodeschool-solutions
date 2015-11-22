var url = process.argv[2];

var http = require('http');

var req = http.get(url, function(res){
    res.setEncoding('utf8');
    var chunks = [];
    res.on('data', function(chunk){
        chunks.push(chunk);
    });
    res.on('end', function(){
        var string = chunks.join('');
        console.log(string.length);
        console.log(string);
    });
});

