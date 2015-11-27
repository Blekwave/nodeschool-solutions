var http = require('http');
var through2map = require('through2-map');

var server = http.createServer(function (req, res){
    if (req.method == 'POST')
        return req.pipe(through2map(function(chunk){
            return chunk.toString('utf8').toUpperCase();
        })).pipe(res);
});
server.listen(process.argv[2]);
