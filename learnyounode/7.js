// I know about http.get, but I haven't gotten to use http.request yet, and I
// feel like I should learn how to.

var url_to_parse = process.argv[2];

var http = require('http');
var url = require('url');

var parsed = url.parse(url_to_parse);
var options = {
    host: parsed.hostname,
    port: parsed.port
}

var req = http.request(options, function(res){
    res.setEncoding('utf8');
    res.on('data', function(chunk){
        console.log(chunk);
    });
});

req.end();

