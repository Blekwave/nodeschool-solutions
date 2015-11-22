var http = require('http');

function collectString(url, callback){
    http.get(url, function(res){
        res.setEncoding('utf8');
        var chunks = [];
        res.on('data', function(chunk){
            chunks.push(chunk);
        });
        res.on('end', function(){
            var string = chunks.join('');
            callback(string);
        });
    });
}

var finished = 0;
var strings = [];

process.argv.slice(2).forEach(function(e, i, a){
    collectString(e, function(string){
        strings[i] = string;
        if (++finished === a.length){
            strings.forEach(function(e){
                console.log(e);
            });
        }
    });
})


