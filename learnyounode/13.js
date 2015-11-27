var http = require('http');
var parse = require('url').parse;

function parsetime(iso) {
    var d = new Date(iso);
    return {
        "hour": d.getHours(),
        "minute": d.getMinutes(),
        "second": d.getSeconds()
    };
}

function unixtime(iso) {
    return {
        "unixtime": Date.parse(iso)
    };
}

var server = http.createServer(function (req, res) {
    if (req.method == "GET"){
        var url_data = parse(req.url, true);
        var obj = null;
        switch (url_data.pathname){
            case '/api/parsetime':
                obj = parsetime(url_data.query.iso);
                break;
            case '/api/unixtime':
                obj = unixtime(url_data.query.iso);
                break;
        }
        if (obj){
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(obj));
        } else {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end("No such pathname.");
        }
    }
});
server.listen(process.argv[2]);
