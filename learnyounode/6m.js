var fs = require('fs');

function readdirfiltered(path, ext, callback){
    fs.readdir(path, function(err, files){
        if (err) return callback(err);
        var filtered = files.filter(function(element){
            return element.endsWith('.' + ext);
        });
        return callback(null, filtered);
    });
}

module.exports = readdirfiltered;
